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

## 2026-06-15 prompt

- User feedback: the serif heading direction is not working; keep title and body typography unified in a clean Traditional Chinese sans-serif system.
- Content should be simpler and easier for users to read, while still signaling product maturity for professional and funding-oriented readers.
- Keep Traditional Chinese and English messaging in sync: same hierarchy, same claims, similarly concise density.

## 2026-07-12 prompt

- Exhibition collateral should use the product name `Orion AI` and company name `Petrichor Consulting Co., Ltd.`.
- The primary one-page format is English A4 portrait, aimed at non-technical visitors, potential buyers, suppliers, distributors, agency partners, and funding-oriented audiences.
- Lead with the real product kit and a simple four-step experience; keep technical depth restrained while preserving credibility through baseline comparison, SRI / ARI indicators, cloud records, and a deliverable report.
- The conversion goal is direct inquiry about product pricing, distributor terms, agency partnerships, and live demonstrations.

## 2026-07-12 prompt 2

- For exhibition one-page DM work, benchmark current sell-sheet guidance and apply a closed-loop review: compile, validate A4/page count, render, inspect visually, and decode the embedded QR from the final rendered page.
- Prioritize the product over company or commercial detail. Use the real kit photo, live EEG interface, and result-report screenshot so a passerby can understand the product within seconds.
- Keep the CTA simple: invite interested visitors to contact Petrichor Consulting Co., Ltd.; detailed pricing and agency terms can follow in conversation.
- Use the supplied official LINE QR image without cropping, rotation, filters, or destructive resampling, and verify it resolves to `https://lin.ee/XXL9DlJ` after final PDF rendering.

## 2026-07-13 prompt

- Avoid generic AI-marketing language and synthetic visual motifs in exhibition collateral. Prefer direct human wording such as “See how the brain responds to scent.”
- Use the actual blue Android launcher icon from `orion-sri`; do not invent a segmented circular logo with an orange dot.
- Never force product images or screenshots into mismatched width/height dimensions. Preserve the native 4:3 kit image and 1340:800 app screenshot ratios without cropping.
- Raise information density through tighter editorial grids and larger type, not through longer paragraphs or more technical detail.

## 2026-07-13 prompt 2

- Exhibition PDFs must be benchmarked against real medical-device and B2B sell sheets before redesign. Lead with an authentic product photograph, a single outcome-led headline, concrete product facts, visual proof, and one decisive CTA.
- Use one clean type family with explicitly mapped upright and bold faces. macOS TTC font collections must specify face indexes so bold text cannot silently render as italic.
- Information density is a measurable QA gate, not a request to add paragraphs. Target a rendered non-white content ratio between 35% and 82% while preserving clear hierarchy and safe margins.
- Do not deliver an A4 PDF until the final rendered page passes: one-page A4 geometry, required copy, native image proportions, at least 300 PPI for every embedded image, embedded/subsetted Unicode fonts, no TeX box warnings, less than 5 MB, and QR decoding from the complete rendered page.
- Final visual inspection remains mandatory after automated checks; reject any version with clipped screenshots, stretched images, accidental whitespace, typeface mapping errors, weak hierarchy, or footer collisions.

## 2026-07-13 prompt 3

- Passing technical QA is not enough: exhibition collateral must also form a deliberate visual story. Avoid rigid white-page specification-sheet layouts when the product needs to feel premium, mindful, and commercially mature.
- Use Optima for humanist display typography and Helvetica Neue for compact technical copy. Verify both exact font families are embedded in the final PDF, with explicit TTC face indexes.
- Build visual hierarchy through a cool-white product stage, one warm coral accent, an elevated proof strip, a concise four-step rhythm, a dark interface-proof section, and a clean CTA footer. Do not add arbitrary multicolour categories.
- Product evidence should feel integrated: complete kit first, concrete `4 / 6 / 1` facts second, repeatable workflow third, then full-aspect live-session and report screenshots.
- Preserve authentic product and application images without cropping, stretching, overlays, or decorative effects that obscure the actual hardware or interface.

## 2026-07-13 prompt 4

- Exhibition collateral requires separate English and Traditional Chinese A4 PDFs. English uses fully localized English UI screenshots; Traditional Chinese keeps the original Chinese application screenshots.
- The English screenshot localization must preserve the real app layout, waveforms, readings, status/navigation bars, and report structure. Verify key English UI labels with OCR.
- The footer must include `https://orion.petrichor.tw/`, `petrichortpe@gmail.com`, and the verified official LINE QR.

## 2026-07-13 prompt 5

- Official names are `Orion AI` and `Petrichor Consulting Co., Ltd.`. Treat `Orient AI` and `Patrick Kerr's Consulting CEO` as transcription errors and never publish them.

## 2026-07-13 prompt 6

- Center the `4 / 6 / 1` proof numbers and their full columns using fixed coordinates and fixed widths; do not rely on flexible `hfill` spacing.
- Explain the four Muse sensors in plain language: two forehead and two ear-side sensors. Do not list TP9, AF7, AF8, or TP10 in public sell-sheet copy.
- Reuse the verified transparent Muse cutout in an actual media gap, without covering headings or process content.

## 2026-07-13 prompt 7

- Public product messaging should focus on SRI only. Remove ARI from English and Traditional Chinese marketing copy and fail verification if ARI returns.

## 2026-07-13 prompt 8

- Remove banner and hero filler such as `PORTABLE RESEARCH KIT`, `EEG x FRAGRANCE x EVIDENCE`, and `Portable EEG + fragrance research`. Increase the main claim and useful body copy instead.
- Cleaner does not mean emptier: every retained line must explain the product, workflow, evidence, or next action.

## 2026-07-13 prompt 9

- English hero title is `Make Fragrance Response Visible.` in Title Case, with wider leading and a short coral rule aligned above the title.
- Increase list leading, keep the sensor description within two lines, and slightly reduce both interface screenshots so the dark proof section retains visible bottom breathing room.
- A centered brand banner must align the app icon, `Orion AI`, and company name on one center axis. Use explicit fixed-width centering to prevent LaTeX node alignment drift.

## 2026-07-13 prompt 10

- Avoid unexplained vertical gaps between a section subtitle and its content. The four workflow columns must sit close enough to the baseline-to-report introduction to read as one section.
- Keep the banner visually pure: no category labels or secondary marketing phrases. Brand, company, and the actual app icon are sufficient.

## 2026-07-13 prompt 11

- The app icon belongs beside the `Orion AI` wordmark in a compact horizontal masthead, not above it. This preserves vertical space and makes the brand read as one unit.
- Move website, email, inquiry context, and the official LINE QR into the header. Do not reserve a separate light footer for contact information.
- Use the recovered page-bottom space for product value: SRI comparison, session history, and shareable PDF delivery.
- The `4 / 6 / 1` proof strip must use short labels, short descriptions, fixed column centers, and generous horizontal padding. Reject any version where a line approaches the column divider or card edge.
- Extend the dark evidence section to the bottom of the page so the real interface screenshots and deliverables read as one integrated outcome section.

## 2026-07-13 prompt 12

- Once the exhibition copy is approved, freeze the content and resolve remaining issues through position, spacing, and leading adjustments only.
- Keep a clear visual gap between the `4 / 6 / 1` proof strip and the workflow heading. Move the workflow title, subtitle, rules, steps, and Muse cutout as one coordinated unit so their alignment remains intact.

## 2026-07-13 prompt 13

- Align the masthead by visual center, not shared top coordinates: the icon and two-line brand lockup may need to sit lower than the taller QR code.
- Use explicit full-width centering for every line in the `4 / 6 / 1` proof columns, including the short muted descriptions.
- The hero claim and supporting copy use 1.5 line spacing. Keep a deliberate white buffer below the pale product stage before the workflow begins, and increase the small blue evidence labels without disturbing the screenshots.

## 2026-07-13 prompt 14

- Final exhibition review must cover three viewing modes: recognition from a distance, readable product evidence at hand-held A4 size, and successful contact conversion through the printed LINE QR.
- After layout stability is reached, prioritize optical line breaks, screenshot legibility, and CTA clarity over adding more copy or decorative elements.

## 2026-07-13 prompt 15

- Final QA must audit English and Traditional Chinese independently. Shared coordinates do not guarantee equivalent typography because line length, punctuation, visual weight, and wrapping differ by language.
- Separate recommendations into shared layout issues, English-specific typography, Chinese-specific typography, exhibition conversion, and print production so each revision has a testable purpose.

## 2026-07-13 prompt 16

- When all final-review recommendations are approved, implement them as one controlled convergence pass: bilingual optical line breaks, precise proof-strip semantics, authentic screenshot details, direct inquiry language, and print packaging must be verified together.
- A print-ready edition uses 3 mm bleed and an A4 TrimBox, but final CMYK conversion must wait for the printer's actual ICC profile. Never apply an arbitrary color profile to product photography.
- Screenshot enlargements must be visibly labeled as details so they improve legibility without being mistaken for overlapping or duplicated interfaces.

## 2026-07-13 prompt 17

- For this exhibition one-pager, show each application screenshot once at full aspect ratio. Do not overlay magnified helper images, even when labeled, because they read as accidental UI overlap.
- Express the desired "direct thought" value without claiming mind reading or lossless neural access: capture a closer-to-the-moment response before memory and language reshape the experience.
- Keep the approved two-line hero claim, then use more generous leading and one concise value proposition to occupy the supporting-copy area intentionally.

## 2026-07-13 prompt 18

- Keep exactly two final one-pager PDFs: one English A4 screen edition and one Traditional Chinese A4 screen edition. Do not create print, bleed, legacy, or duplicate output copies unless explicitly requested again.

## 2026-07-19 prompt 19

- Website demo-booking visibility must be controlled by one numeric JavaScript flag: `SHOW_DEMO_BOOKING = 0` hides the header CTA, hero CTA, and green contact section; changing it to `1` restores all three.
- When booking is hidden, remove dead contact navigation and avoid running hidden form or particle-canvas behavior.
- Public sample labels are temporary product codes `C000` through `C005` in both languages; internal aroma keys may remain unchanged.
- The legal company name is `欖亞顧問股份有限公司` and Unified Business No. is `00230169`.
- The one-page website needs a bilingual team section describing user-needs discovery, product validation, programming, Android and embedded integration, device data streaming, and iterative product maturity.

## 2026-07-19 prompt 20

- Do not use `more than one year` as a standalone proof point in the team section. Duration alone is weak evidence and reads awkwardly when isolated.
- Make the team story persuasive through demonstrated system scope and product outcomes: complete hardware-software integration, real workflow validation, stable operation, repeatable testing, and deliverable reports.
- Keep legal registration details visible but visually secondary. The primary hierarchy should explain what the team built, how it works across disciplines, and how it is validated.

## 2026-07-19 prompt 21

- Team credibility may reference senior engineers and technology leaders with experience at leading U.S. multinational companies, plus senior investment, business development, regional commercial, and financial-analysis leadership.
- Avoid listing titles as a resume. Explain how the cross-functional experience shapes Orion's system architecture, product logic, operating decisions, and path to market.
- Keep the Chinese and English team narratives synchronized and outcome-led.

## 2026-07-19 prompt 22

- Refer to the business-development role once as `商業拓展主管`; do not repeat separate staff and manager versions of the same function.
- Team copy should address buyers directly through product confidence, not explain a second marketing rationale to them.
- Keep the leadership paragraph concise: establish cross-functional senior experience, then connect it to technical feasibility, user experience, commercial value, and market adoption.

## 2026-07-19 prompt 23

- The official English company name is `Petrichor Consulting Co., Ltd.`. Use it throughout the English website; keep `欖亞顧問股份有限公司` in Traditional Chinese.
