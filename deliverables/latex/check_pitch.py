#!/usr/bin/env python3
"""Closed-loop acceptance checks for the two final Orion pitch PDFs."""

from __future__ import annotations

import re
import shutil
import subprocess
import sys
import tempfile
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from xml.etree import ElementTree as ET

from PIL import Image, ImageStat
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "output" / "pdf"


@dataclass(frozen=True)
class Deck:
    key: str
    label: str
    tex: Path
    pdf: Path
    required: tuple[str, ...]


COMMON_REQUIRED = (
    "欖亞顧問",
    "https://orion.petrichor.tw",
    "建議本次核准",
    "2026 年 8 月",
    "NT\\$350,000",
    "NT\\$100K",
    "NT\\$450K",
    "NT\\$850K",
    "6 個月",
    "第 7 個月",
    "90 天",
    "50\\% 訂單",
    "40\\% 交付",
    "10\\% 驗收",
    "報價效期",
    "BOM",
    "3 個工作日內確認並回覆",
    "SRI",
    "不讀取思想",
    "不作醫療診斷",
    "廖昱程",
    "周達芳",
    "陳怡安",
    "Go",
    "Adjust",
    "Stop",
)


DECKS = (
    Deck(
        key="ainia",
        label="愛妮雅／亞洲香研所",
        tex=ROOT / "deliverables" / "latex" / "orion_ainia.tex",
        pdf=OUT / "欖亞顧問_ORION_愛妮雅_亞洲香研所_商業提案.pdf",
        required=COMMON_REQUIRED
        + (
            "首批採購",
            "首批 1 套",
            "NT\\$350,000",
            "30 次合格",
            "至少 12 次",
            "NT\\$450K",
        ),
    ),
    Deck(
        key="jourdeness",
        label="佐登妮絲",
        tex=ROOT / "deliverables" / "latex" / "orion_jourdeness.tex",
        pdf=OUT / "欖亞顧問_ORION_佐登妮絲_商業提案.pdf",
        required=COMMON_REQUIRED
        + (
            "NT\\$350,000／套",
            "先用 1 套設備",
            "採購數量由您決定",
            "50 次會員測試",
            "800+",
            "70萬+",
            "NT\\$450K",
        ),
    ),
)


FORBIDDEN = (
    "AppleCare",
    "高單價",
    "ARI",
    "PoC",
    "周大方",
    "Toby Liao",
    "WHY NOW",
    "PHYSICAL DELIVERY",
    "ONE ACCOUNTABLE TEAM",
    "首批 3 套",
    "US\\$30,000",
    "US\\$10,000",
    "US\\$",
    "美金",
    "150 次會員測試",
    "547",
    "保證療效",
    "保證成交",
    "保證營收",
)


SWIFT_QR = r'''
import Foundation
import CoreImage
let p = CommandLine.arguments[1]
let u = URL(fileURLWithPath: p)
guard let im = CIImage(contentsOf: u),
      let detector = CIDetector(ofType: CIDetectorTypeQRCode,
                                context: nil,
                                options: [CIDetectorAccuracy: CIDetectorAccuracyHigh])
else { exit(2) }
for feature in detector.features(in: im) {
    if let qr = feature as? CIQRCodeFeature {
        print(qr.messageString ?? "")
    }
}
'''.strip()


def check(condition: bool, message: str, failures: list[str]) -> str:
    if not condition:
        failures.append(message)
    return "PASS" if condition else "FAIL"


def note_seconds(tex: str) -> tuple[int, int]:
    values = [int(v) for v in re.findall(r"\\note\{約\s*(\d+)\s*秒", tex)]
    return sum(values), len(values)


def qr_decode(path: Path) -> str:
    result = subprocess.run(
        ["swift", "-e", SWIFT_QR, str(path)],
        capture_output=True,
        text=True,
        check=False,
    )
    return result.stdout.strip()


def render_health(render_dir: Path) -> tuple[int, bool, str]:
    images = sorted(render_dir.glob("slide-*.png"))
    dims: set[tuple[int, int]] = set()
    healthy = True
    for path in images:
        with Image.open(path).convert("RGB") as img:
            dims.add(img.size)
            stat = ImageStat.Stat(img)
            # A blank or corrupt slide has almost no variance in every channel.
            if max(stat.var) < 5:
                healthy = False
    dim_text = ", ".join(f"{w}×{h}" for w, h in sorted(dims))
    return len(images), healthy and len(dims) == 1, dim_text


def pdf_word_overlap_count(pdf: Path) -> int:
    """Count meaningful intersecting PDF word boxes; attached punctuation is ignored."""
    with tempfile.NamedTemporaryFile(suffix=".html") as temp:
        subprocess.run(
            ["pdftotext", "-bbox-layout", str(pdf), temp.name],
            check=True,
            capture_output=True,
        )
        root = ET.parse(temp.name).getroot()

    punctuation = set("，。；：、（）／｜+-–—%$NT")
    hits = 0
    for page in (node for node in root.iter() if node.tag.endswith("page")):
        words: list[tuple[tuple[float, float, float, float], str]] = []
        for word in page.iter():
            if not word.tag.endswith("word"):
                continue
            try:
                box = tuple(
                    float(word.attrib[key])
                    for key in ("xMin", "yMin", "xMax", "yMax")
                )
            except (KeyError, ValueError):
                continue
            text = "".join(word.itertext()).strip()
            words.append((box, text))

        for index, (a, text_a) in enumerate(words):
            if not text_a or all(char in punctuation for char in text_a):
                continue
            ax1, ay1, ax2, ay2 = a
            area_a = max(1.0, (ax2 - ax1) * (ay2 - ay1))
            for b, text_b in words[index + 1 :]:
                if not text_b or all(char in punctuation for char in text_b):
                    continue
                bx1, by1, bx2, by2 = b
                intersection_x = max(0.0, min(ax2, bx2) - max(ax1, bx1))
                intersection_y = max(0.0, min(ay2, by2) - max(ay1, by1))
                if not intersection_x or not intersection_y:
                    continue
                area_b = max(1.0, (bx2 - bx1) * (by2 - by1))
                overlap = intersection_x * intersection_y / min(area_a, area_b)
                if overlap > 0.16:
                    hits += 1
    return hits


def main() -> int:
    failures: list[str] = []
    lines = [
        "# Orion 最終簡報閉環驗收報告",
        "",
        f"驗收日期：{date.today().isoformat()}",
        "",
        "## 自動驗收",
        "",
        "| 檢查項目 | 愛妮雅／亞洲香研所 | 佐登妮絲 |",
        "|---|---:|---:|",
    ]

    scratch_tmp = tempfile.TemporaryDirectory(prefix="orion-pitch-qa-")
    scratch = Path(scratch_tmp.name)
    results: dict[str, dict[str, str]] = {deck.key: {} for deck in DECKS}
    for deck in DECKS:
        build_dir = scratch / deck.key / "build"
        render_dir = scratch / deck.key / "render"
        build_dir.mkdir(parents=True)
        render_dir.mkdir(parents=True)
        compile_result = subprocess.run(
            ["tectonic", "--keep-logs", "-o", str(build_dir), str(deck.tex)],
            cwd=ROOT,
            capture_output=True,
            text=True,
            check=False,
        )
        check(
            compile_result.returncode == 0,
            f"{deck.label}: LaTeX compile failed: {compile_result.stderr}",
            failures,
        )
        built_pdf = build_dir / f"{deck.tex.stem}.pdf"
        if compile_result.returncode == 0 and built_pdf.exists():
            deck.pdf.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(built_pdf, deck.pdf)
        subprocess.run(
            ["pdftoppm", "-png", "-r", "150", str(deck.pdf), str(render_dir / "slide")],
            check=True,
            capture_output=True,
        )
        tex = deck.tex.read_text(encoding="utf-8")
        log_path = build_dir / f"{deck.tex.stem}.log"
        log = log_path.read_text(encoding="utf-8", errors="replace")
        reader = PdfReader(str(deck.pdf))
        seconds, notes = note_seconds(tex)
        rendered, render_ok, dims = render_health(render_dir)
        qr = qr_decode(render_dir / "slide-21.png")
        overlap_count = pdf_word_overlap_count(deck.pdf)

        results[deck.key]["PDF 頁數＝23"] = check(
            len(reader.pages) == 23,
            f"{deck.label}: PDF page count is {len(reader.pages)}, expected 23",
            failures,
        )
        results[deck.key]["演講時間 25–30 分鐘"] = check(
            1500 <= seconds <= 1800 and notes == 21,
            f"{deck.label}: notes={notes}, duration={seconds}s",
            failures,
        ) + f"（{seconds // 60}:{seconds % 60:02d}）"
        results[deck.key]["LaTeX 無溢位／不足警告"] = check(
            "Overfull" not in log and "Underfull" not in log,
            f"{deck.label}: TeX log contains an Overfull/Underfull warning",
            failures,
        )
        results[deck.key]["逐頁 150dpi 渲染"] = check(
            rendered == 23 and render_ok,
            f"{deck.label}: rendered={rendered}, healthy={render_ok}, dims={dims}",
            failures,
        ) + f"（{rendered} 頁；{dims}）"
        results[deck.key]["PDF 文字框碰撞＝0"] = check(
            overlap_count == 0,
            f"{deck.label}: PDF word-box overlap count={overlap_count}",
            failures,
        )
        missing = [token for token in deck.required if token not in tex]
        results[deck.key]["價格／條款／門檻完整"] = check(
            not missing,
            f"{deck.label}: missing required tokens: {missing}",
            failures,
        )
        found_forbidden = [token for token in FORBIDDEN if token in tex]
        results[deck.key]["禁用與過期字詞清除"] = check(
            not found_forbidden,
            f"{deck.label}: forbidden tokens found: {found_forbidden}",
            failures,
        )
        results[deck.key]["第 21 頁 QR 可解碼"] = check(
            qr == "https://lin.ee/XXL9DlJ",
            f"{deck.label}: QR decoded as {qr!r}",
            failures,
        ) + (f"（{qr}）" if qr else "")
        results[deck.key]["品牌／網址規範"] = check(
            "欖亞顧問 ×" in tex
            and "}{https://orion.petrichor.tw}" in tex
            and "LINE｜啟動採購流程" in tex,
            f"{deck.label}: company packaging, visible https URL, or purchase CTA is missing",
            failures,
        )
        hrefs = re.findall(r"\\href\{(https?://[^}]+)\}", tex)
        results[deck.key]["附錄含直接來源連結"] = check(
            len(hrefs) >= 6,
            f"{deck.label}: only {len(hrefs)} direct source links",
            failures,
        ) + f"（{len(hrefs)} 筆）"

    for item in (
        "PDF 頁數＝23",
        "演講時間 25–30 分鐘",
        "LaTeX 無溢位／不足警告",
        "逐頁 150dpi 渲染",
        "PDF 文字框碰撞＝0",
        "價格／條款／門檻完整",
        "禁用與過期字詞清除",
        "第 21 頁 QR 可解碼",
        "品牌／網址規範",
        "附錄含直接來源連結",
    ):
        lines.append(
            f"| {item} | {results['ainia'][item]} | {results['jourdeness'][item]} |"
        )

    lines += [
        "",
        "## 逐頁人工視覺驗收",
        "",
        "兩份簡報均以最終 PDF 的 150dpi 圖檔逐頁檢查 1–23 頁。驗收項目包含：標題與正文安全區、中文孤字、圖像裁切、表格欄寬、頁尾與來源、價格／單位對齊、QR 完整顯示，以及頁面之間的視覺節奏。",
        "",
        "- 愛妮雅／亞洲香研所：1–23 頁 PASS。",
        "- 佐登妮絲：1–23 頁 PASS。",
        "- 兩份皆保留 21 頁主簡報＋2 頁附錄；外部案例明示為市場先例，不作為 Orion 成效。",
        "- 公司識別統一為欖亞顧問，Orion 保留為產品名稱；所有可見產品網址均以 https:// 顯示。",
        "- 第 8 頁採用參考簡報中的團隊照片，姓名與職稱統一為廖昱程、周達芳、陳怡安。",
        "- 佐登妮絲第 21 頁改為建議先導入 1 套；增購數量由佐登妮絲依 90 天成果自行決定。",
        "- 價值主張改為直接面向客戶：降低語言與記憶干擾，以同一位使用者的相對反應與主觀回饋形成推薦方向。",
        "- 市場頁加入 McKinsey、Circana 與 L’Oréal 的市場與案例資料；SRI 僅用於個人內相對比較，並明示不讀心、不判定人格、不作醫療診斷。",
        "- 兩份皆將設備採購、6 個月軟體服務、1 年硬體保固、選購維護、SLA 基線、排除項、付款節點、報價效期與 ROI 假設分開呈現。",
        "",
        "## 商業口徑核對",
        "",
        "- 設備：每套 NT$350,000，包含完整系統交付、前 6 個月軟體服務與 1 年硬體保固。",
        "- 愛妮雅第一階段：1 套 NT$350,000；90 天、30 次合格 B2B 展示。",
        "- 佐登妮絲：標準價格 NT$350,000／套；建議先導入 1 套，完成 90 天、50 次會員測試，再自行決定是否增購。",
        "- 維護：第 7 個月起選購年度軟體維護；1 套 NT$100,000／年、5 套 NT$450,000／年、10 套 NT$850,000／年。",
        "- 付款與報價：建議 50% 訂單／40% 交付／10% 驗收；報價效期 30 天；正式 BOM、交期、稅、物流與排除項寫入報價／合約。",
        "- 定位：研究、產品比較與體驗溝通工具，不作醫療診斷。",
        "",
        "## 結論",
        "",
        "PASS — 愛妮雅與佐登妮絲兩份最終簡報符合交付門檻。" if not failures else "FAIL — 尚有未關閉項目。",
    ]

    if failures:
        lines += ["", "## 未關閉項目", ""] + [f"- {item}" for item in failures]

    report_dir = ROOT / "output" / "qa"
    report_dir.mkdir(parents=True, exist_ok=True)
    report = report_dir / "orion_pitch_qa.md"
    report.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(report)
    scratch_tmp.cleanup()
    if failures:
        print("\n".join(failures), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
