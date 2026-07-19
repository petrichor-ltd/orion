#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DELIVERABLE_DIR="$ROOT_DIR/deliverables"
TECTONIC="${TECTONIC:-/opt/homebrew/bin/tectonic}"
BUNDLED_PYTHON="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3"
PYTHON_BIN="${PYTHON_BIN:-$BUNDLED_PYTHON}"

PDFINFO="$(command -v pdfinfo)"
PDFTOPPM="$(command -v pdftoppm)"
PDFTOTEXT="$(command -v pdftotext)"
PDFIMAGES="$(command -v pdfimages)"
PDFFONTS="$(command -v pdffonts)"

EN_SOURCE="$DELIVERABLE_DIR/orion-ai-a4-one-pager-en.tex"
EN_PDF="$DELIVERABLE_DIR/orion-ai-a4-one-pager-en.pdf"
EN_PREVIEW="$DELIVERABLE_DIR/orion-ai-a4-one-pager-en-preview.png"
EN_LOG="$DELIVERABLE_DIR/orion-ai-a4-one-pager-en.log"

ZH_SOURCE="$DELIVERABLE_DIR/orion-ai-a4-one-pager-zh.tex"
ZH_PDF="$DELIVERABLE_DIR/orion-ai-a4-one-pager-zh.pdf"
ZH_PREVIEW="$DELIVERABLE_DIR/orion-ai-a4-one-pager-zh-preview.png"
ZH_LOG="$DELIVERABLE_DIR/orion-ai-a4-one-pager-zh.log"

COMMON_ASSETS=(
  '../assets/orion-kit.png'
  '../assets/muse-device-clean-crop.png'
  'orion-ai-app-icon.png'
  'orion-ai-line-qr.png'
)

EN_ASSETS=(
  '../assets/orion-app-screenshot-en.jpg'
  '../assets/orion-report-screen-en.jpg'
)

ZH_ASSETS=(
  '../assets/orion-app-screenshot.jpg'
  '../assets/orion-report-screen.jpg'
)

cd "$ROOT_DIR"
trap 'rm -f "$EN_LOG" "$ZH_LOG"' EXIT

fail() {
  echo "FAIL: $1" >&2
  exit 1
}

check_source() {
  local source="$1"
  shift
  local assets=("$@")

  for asset in "${COMMON_ASSETS[@]}" "${assets[@]}"; do
    grep -Fq "{$asset}" "$source" || fail "expected visual asset is not referenced in $(basename "$source"): $asset"
  done

  local product_image_lines
  product_image_lines="$(grep -F '\includegraphics' "$source" | grep -F '{../assets/' || true)"
  if grep -Eq 'width=.*height=|height=.*width=' <<<"$product_image_lines"; then
    fail "a product image in $(basename "$source") forces both width and height"
  fi

  grep -A4 -F '\newcommand{\statblock}' "$source" | grep -Fq '\centering' ||
    fail "the 4 / 6 / 1 proof columns are not centered in $(basename "$source")"

  grep -Fq 'width=20mm,height=20mm' "$source" ||
    fail "the LINE QR is not 20 mm in $(basename "$source")"
  grep -Fq '\fontsize{6.3}{7.2}' "$source" ||
    fail "the research-only disclaimer is below the approved print size in $(basename "$source")"
  if grep -Eq 'TP9|AF7|AF8|TP10|(^|[^[:alnum:]])ARI([^[:alnum:]]|$)' "$source"; then
    fail "unexplained channel or score jargon remains in $(basename "$source")"
  fi

  if grep -Eq 'PORTABLE RESEARCH KIT|FRAGRANCE.*EVIDENCE|Portable EEG \+ fragrance research|可攜式腦波香氣研究|腦波.*香氣.*證據' "$source"; then
    fail "removed banner or hero filler copy returned in $(basename "$source")"
  fi
}

compile_pdf() {
  local source="$1"
  "$TECTONIC" -X compile "$source" --outdir "$DELIVERABLE_DIR" --keep-logs
}

check_pdf() {
  local language="$1"
  local pdf="$2"
  local preview="$3"
  local log="$4"
  local expected_image_count="$5"

  local metadata
  metadata="$($PDFINFO "$pdf")"
  grep -q '^Pages:[[:space:]]*1$' <<<"$metadata" || fail "$language PDF is not one page"
  grep -q '^Page size:[[:space:]]*595\.28 x 841\.89 pts (A4)$' <<<"$metadata" || fail "$language PDF is not A4"

  local pdf_size_bytes
  pdf_size_bytes="$(wc -c < "$pdf" | tr -d ' ')"
  (( pdf_size_bytes <= 5000000 )) || fail "$language PDF exceeds 5 MB: $pdf_size_bytes bytes"

  local image_report embedded_image_count low_res_images
  image_report="$($PDFIMAGES -list "$pdf")"
  embedded_image_count="$(awk 'NR > 2 && $1 ~ /^[0-9]+$/ { count++ } END { print count + 0 }' <<<"$image_report")"
  (( embedded_image_count >= expected_image_count )) ||
    fail "$language PDF embeds only $embedded_image_count images; expected at least $expected_image_count"

  low_res_images="$(awk '
    NR > 2 && $1 ~ /^[0-9]+$/ && $3 == "image" && ($13 < 300 || $14 < 300) { print }
  ' <<<"$image_report")"
  [[ -z "$low_res_images" ]] || fail "$language PDF contains an image below 300 PPI: $low_res_images"

  local font_report
  font_report="$($PDFFONTS "$pdf")"
  if tail -n +3 <<<"$font_report" | grep -qE '[[:space:]]no[[:space:]]'; then
    fail "$language PDF contains a font that is not embedded, subsetted, or Unicode mapped"
  fi
  grep -q 'HelveticaNeue' <<<"$font_report" || fail "$language PDF is missing Helvetica Neue"
  grep -q 'Optima-Bold' <<<"$font_report" || fail "$language PDF is missing Optima display typography"
  if [[ "$language" == 'Traditional Chinese' ]]; then
    grep -Eq 'PingFang(HK|TC)' <<<"$font_report" || fail 'Traditional Chinese PDF is missing the PingFang CJK font'
  fi

  if grep -Eq '(Overfull|Underfull) \\hbox|Missing character' "$log"; then
    fail "$language LaTeX log contains a box or missing-character warning"
  fi

  "$PDFTOPPM" -png -r 180 -singlefile "$pdf" "${preview%.png}"

  local preview_metrics preview_width preview_height content_ratio
  preview_metrics="$($PYTHON_BIN - "$preview" <<'PY'
from PIL import Image
import sys

image = Image.open(sys.argv[1]).convert("RGB")
sample = image.resize((300, 424))
content_pixels = sum(1 for pixel in sample.getdata() if min(pixel) < 245)
content_ratio = content_pixels / (sample.width * sample.height)
print(image.width, image.height, f"{content_ratio:.4f}")
PY
)"
  read -r preview_width preview_height content_ratio <<<"$preview_metrics"
  (( preview_width >= 1400 && preview_height >= 2000 )) ||
    fail "$language preview is too small: ${preview_width}x${preview_height}"
  awk -v ratio="$content_ratio" 'BEGIN { exit !(ratio >= 0.42 && ratio <= 0.82) }' ||
    fail "$language rendered content density is outside the 42%-82% target: $content_ratio"

  local qr_output
  qr_output="$(xcrun swift - "$preview" <<'SWIFT'
import Foundation
import CoreImage

let path = CommandLine.arguments[1]
let url = URL(fileURLWithPath: path)
guard let image = CIImage(contentsOf: url) else { fatalError("Unable to load rendered page") }
guard let detector = CIDetector(
    ofType: CIDetectorTypeQRCode,
    context: nil,
    options: [CIDetectorAccuracy: CIDetectorAccuracyHigh]
) else { fatalError("Unable to create QR detector") }
let payloads = detector.features(in: image)
    .compactMap { $0 as? CIQRCodeFeature }
    .compactMap { $0.messageString }
print(payloads.joined(separator: "\n"))
SWIFT
)"
  grep -q '^https://lin\.ee/XXL9DlJ$' <<<"$qr_output" || fail "$language rendered LINE QR does not decode correctly"

  echo "PASS [$language]: A4, one page, ${pdf_size_bytes} bytes, content density ${content_ratio}."
  echo "PASS [$language]: images >=300 PPI, fonts embedded, no layout warnings, rendered QR decoded."
}

ocr_image() {
  local image_path="$1"
  xcrun swift - "$image_path" <<'SWIFT'
import AppKit
import Foundation
import Vision

let path = CommandLine.arguments[1]
guard let image = NSImage(contentsOfFile: path),
      let data = image.tiffRepresentation,
      let bitmap = NSBitmapImageRep(data: data),
      let cgImage = bitmap.cgImage else {
    fatalError("Unable to load OCR image")
}

let request = VNRecognizeTextRequest()
request.recognitionLevel = .accurate
request.usesLanguageCorrection = true
request.recognitionLanguages = ["en-US", "zh-Hant"]
let handler = VNImageRequestHandler(cgImage: cgImage)
try handler.perform([request])
let text = (request.results ?? [])
    .compactMap { $0.topCandidates(1).first?.string }
    .joined(separator: "\n")
print(text)
SWIFT
}

check_source "$EN_SOURCE" "${EN_ASSETS[@]}"
check_source "$ZH_SOURCE" "${ZH_ASSETS[@]}"

compile_pdf "$EN_SOURCE"
compile_pdf "$ZH_SOURCE"

EN_TEXT="$($PDFTOTEXT "$EN_PDF" -)"
grep -q 'Orion AI' <<<"$EN_TEXT" || fail 'English PDF is missing Orion AI'
grep -q 'Petrichor Consulting Co., Ltd.' <<<"$EN_TEXT" || fail 'English PDF is missing the company name'
grep -q 'Make Fragrance' <<<"$EN_TEXT" || fail 'English PDF is missing the product headline'
grep -q 'EEG sensors' <<<"$EN_TEXT" || fail 'English PDF is missing the sensor explanation'
grep -q 'SRI' <<<"$EN_TEXT" || fail 'English PDF is missing the SRI focus'
grep -q 'Fragrance samples' <<<"$EN_TEXT" || fail 'English PDF is missing the six-sample proof'
grep -q 'Complete research record' <<<"$EN_TEXT" || fail 'English PDF is missing the complete-record proof'
grep -q 'algorithm-assisted SRI' <<<"$EN_TEXT" || fail 'English PDF does not explain the analysis role behind Orion AI'
grep -q 'closer-to-the-moment response' <<<"$EN_TEXT" || fail 'English PDF is missing the response-before-recall value proposition'
grep -q 'distribution' <<<"$EN_TEXT" || fail 'English PDF is missing distribution inquiries'
if grep -Eq '(^|[^[:alnum:]])ARI([^[:alnum:]]|$)' <<<"$EN_TEXT"; then
  fail 'English PDF still contains ARI'
fi
grep -q 'orion.petrichor.tw' <<<"$EN_TEXT" || fail 'English PDF is missing the website'
grep -q 'petrichortpe@gmail.com' <<<"$EN_TEXT" || fail 'English PDF is missing the email address'

ZH_TEXT="$($PDFTOTEXT "$ZH_PDF" -)"
grep -q 'Orion AI' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing Orion AI'
grep -q 'Petrichor Consulting Co., Ltd.' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing the company name'
grep -q '讓香氣反應' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing the product headline'
grep -q 'EEG 感測器' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing the sensor explanation'
grep -q 'SRI' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing the SRI focus'
grep -q '香氣樣本' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing the six-sample proof'
grep -q '完整研究紀錄' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing the complete-record proof'
grep -q '算法輔助' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF does not explain the analysis role behind Orion AI'
grep -q '捕捉更接近當下' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing the response-before-recall value proposition'
grep -q '代理' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing distribution inquiries'
if grep -Eq '(^|[^[:alnum:]])ARI([^[:alnum:]]|$)' <<<"$ZH_TEXT"; then
  fail 'Traditional Chinese PDF still contains ARI'
fi
grep -q 'orion.petrichor.tw' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing the website'
grep -q 'petrichortpe@gmail.com' <<<"$ZH_TEXT" || fail 'Traditional Chinese PDF is missing the email address'

EN_APP_OCR="$(ocr_image "$ROOT_DIR/assets/orion-app-screenshot-en.jpg")"
grep -q 'Participant Details' <<<"$EN_APP_OCR" || fail 'English app screenshot OCR is missing Participant Details'
grep -q 'Start Session' <<<"$EN_APP_OCR" || fail 'English app screenshot OCR is missing Start Session'
grep -q 'Live Signal Preview' <<<"$EN_APP_OCR" || fail 'English app screenshot OCR is missing Live Signal Preview'

EN_REPORT_OCR="$(ocr_image "$ROOT_DIR/assets/orion-report-screen-en.jpg")"
grep -q 'Session Complete and Results' <<<"$EN_REPORT_OCR" || fail 'English report screenshot OCR is missing Session Complete and Results'
grep -q 'Neuro-Aroma Analysis Report' <<<"$EN_REPORT_OCR" || fail 'English report screenshot OCR is missing Neuro-Aroma Analysis Report'
grep -q 'Download PDF Report' <<<"$EN_REPORT_OCR" || fail 'English report screenshot OCR is missing Download PDF Report'

check_pdf 'English' "$EN_PDF" "$EN_PREVIEW" "$EN_LOG" 6
check_pdf 'Traditional Chinese' "$ZH_PDF" "$ZH_PREVIEW" "$ZH_LOG" 6

echo 'PASS: English screenshot localization was verified with Vision OCR.'
echo 'PASS: website, email, product names, simplified sensor copy, and centered proof columns are present.'
echo 'PASS: the five-second message contains EEG, fragrance samples, SRI evidence, report delivery, and a distribution inquiry path.'
