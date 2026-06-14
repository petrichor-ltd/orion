# Agent Notes

## 2026-06-04 prompt

- Website repo: `/Users/tobliao/Documents/workspace/petrichor-ltd/orion/orion`.
- Mobile/source repo: `/Users/tobliao/Documents/workspace/petrichor-ltd/orion/orion-sri`.
- Cloud server repo: `/Users/tobliao/Documents/workspace/petrichor-ltd/orion/orion-server`.
- Product context: Orion is an EEG-based fragrance testing platform using Muse 2 / Muse S devices, an Android Capacitor app, an embedded Python/FastAPI backend, and SRI/ARI-style algorithmic scoring.
- Experiment context: one no-fragrance baseline trial plus six fragrance trials; each trial uses ready, smell, and rest phases. Current README documents 5s ready, 6s smell, and 8s rest.
- Algorithm context: SRI is based on alpha/theta relaxation activity relative to beta alertness activity, normalized against the baseline trial and mapped into a 0-100 score.
- Data context: the cloud server uploads completed sessions to FastAPI and PostgreSQL, including participants, sessions, trials, raw EEG arrays, fragrance score snapshots, and future ML export tables/views.
- Website direction requested: clean, innovative, professional, mindful, product-focused, elegant animation, high-quality generated imagery inspired by local `img/` screenshots but not copied exactly.
- Static hosting requirement: keep the website deployable as plain static files for GitHub Pages; avoid framework/build-step assumptions unless the user later requests them.
- Asset rule for this prompt: generated images were copied into `assets/` and optimized to WebP while keeping PNG fallbacks.

## 2026-06-04 prompt 2

- User prefers the generated design concept more closely than the first implementation.
- Hero requirement: the first product image should behave like an integrated hero background, not an isolated framed card.
- Language requirement: default site language is Traditional Chinese with an English switch in the top-right header area.
- CTA/demo email for this revision: `toby.liao@petrichor.tw`.
- Typography direction: avoid the heavy editorial serif feel; use an elegant, mindful sans-serif system that works for Traditional Chinese and English.
- Design fidelity target: closer to the concept screenshot, especially hero integration, compact nav, warm clinical background, workflow section immediately after the hero, dark science band, kit section, and final contact band.

## 2026-06-04 prompt 3

- Front-facing website copy should not expose implementation details such as FastAPI, PostgreSQL, API keys, schemas, or Python backend internals.
- Preferred product-language framing: "Android 系統與嵌入式架構" and "雲端資料庫資料存儲" rather than backend technology names.
- Workflow card icons should sit visually above the media card with a clear z-index and border, keeping the half-overlap look without appearing hidden behind the image.
- Brainstorming direction requested: mindful product interactions that make the site feel calmer and more interactive without becoming gimmicky.

## 2026-06-13 prompt

- User approved the fundraising-oriented landing-page plan and asked for direct implementation.
- Lead capture should remain static and GitHub Pages compatible: no backend, no external form service, use a generated `mailto:` to `toby.liao@petrichor.tw`.
- Do not publish unverified traction numbers, customer logos, partner names, or clinical claims; use capability proof such as Muse readiness, baseline-controlled workflow, demo-ready kit, and cloud research records.
- Site should become more commercial while preserving the calm/professional/mindful Orion visual system and Traditional Chinese default with English switch.
- Required new surfaces: problem framing, capability proof strip, interactive session demo, use-case cards, stronger trust/science framing, and a demo/contact form.

## 2026-06-13 prompt 2

- User wants lower perceived density through stronger typography, more engaging but still mindful animations, and additional imagery where the page feels empty.
- Added a generated investor/demo meeting image to support the commercial narrative; keep it as a project asset in `assets/` with PNG source and WebP optimized version.
- Center statements should speak more directly to investor persuasion and trial/demo value, not only product mechanics.
- Animation direction: subtle text/image/card motion, hover tilt, signal pulse, and light sweep effects; avoid aggressive startup-style effects that weaken clinical credibility.

## 2026-06-13 prompt 3

- Product accuracy is now the design baseline: use the provided real Muse device photo and the provided real Orion Android app screenshot when the page references hardware or app UI.
- Do not use generated imagery that changes the Muse form factor, invents a fake tablet/app interface, or crops the product in a way that makes the right-side copy feel disconnected.
- Traditional Chinese mode must be fully localized. Avoid mixed English UI terms such as demo, session, trial, baseline, pilot, Wellness / clinic, Product demo, Built for, or Trust & science unless the term is a product/technical name like Orion, Muse, EEG, SRI/ARI, Android, LibMuse, or OSC.
- Hero typography must leave room for product imagery. The main claim should feel persuasive and calm, not oversized or pressing into the product visual.
- Future generated assets can still support mood or background, but they should not be used as evidence of the exact hardware or app screen unless based on verified source imagery and visually checked.

## 2026-06-13 prompt 4

- User rejected the previous visual direction as less professional than the earlier version; future changes should be treated as a layout reset, not incremental ornamentation.
- Muse hardware imagery must use a verified Muse form factor. A cleaner source was taken from the official Muse 2 product gallery and processed into a cropped transparent asset; do not return to the rough wooden-table cutout with shadow remnants.
- Avoid using key hardware or app screenshots as oversized CSS background images. Use explicit `<picture>/<img>` media with `object-fit: contain` so product edges are not accidentally clipped.
- Hero, workflow, thesis, and kit sections should feel like one investor-facing product narrative: integrated product stage first, contained app/device proof, then clear conversion to `toby.liao@petrichor.tw`.
- Keep transparent cutouts on light product stages unless the matte is manually verified on a dark background; faint antialiasing is much more visible on dark teal.

## 2026-06-13 prompt 5

- Investor suitability should be implied through product maturity, clarity, and commercial polish; avoid making "投資人" the visible subject of public website copy.
- The website should sell the product through outcomes, not explain the fundraising logic. Prefer concise labels such as "展示" and "測試體驗" over persuasive/meta commentary.
- Use the newly provided real Orion report screenshots as product evidence, especially the completed report and PDF-style report views, rather than generated app interfaces.
- Workflow copy should be direct: one flow should let users understand the product once, without saying the site needs to explain itself again.
- Fragrance kit visuals should avoid unexplained colored blocks. Represent six sleep-oriented aroma samples with clear bottle shapes, labels, and botanical icons such as lavender, clary sage, chamomile, cedarwood, sandalwood, and bergamot.

## 2026-06-13 prompt 6

- Hero must open with a full product overview: Muse device, six aroma samples, tablet/app analysis, and atomizer should be visible together using `assets/orion-kit.webp` with `assets/orion-kit.png` fallback.
- The previous hero composition with the report screen and Muse device is valuable, but it belongs in the result-report section titled "測試結束後，不只得到分數，也得到交付的報告"; do not keep the old three-icon/PDF-note layout there.
- Public copy should be more commercially direct for fundraising readiness, while still implying investor fit through product maturity rather than repeatedly naming investors.
- Typography direction for this pass: use a more literary Traditional Chinese heading style with `Noto Serif TC` while keeping body/UI text readable with `Noto Sans TC`.
- Fragrance samples must match `/Users/tobliao/Documents/workspace/petrichor-ltd/orion/orion-sri/config/fragrances.csv`: 乳香、岩蘭草、鼠尾草、依蘭、甜橙、薰衣草. Short labels are preferred over long essential-oil names.

## 2026-06-14 prompt

- User feels the page is too stretched out and not concentrated enough; reduce vertical section length, empty spacing, and large gaps before adding any new sections.
- The proof/problem area immediately after the hero should be more compact and information-dense. A 2x2 card layout is preferred over tall stacked items on desktop.
- Typography should feel more literary without becoming decorative: use a warm Traditional Chinese serif for major headings and a clean sans-serif for UI/body copy.
- Copy should push harder toward product value and decision-making: emphasize runnable on-site testing, six-aroma comparison, comparable EEG indicators, report delivery, and follow-up momentum.
- Avoid section transitions that feel like accidental blank space; report/product proof sections should connect tightly after the problem cards.
