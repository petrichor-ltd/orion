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
- CTA/demo email for this revision: `petrichortpe@gmail.com`.
- Typography direction: avoid the heavy editorial serif feel; use an elegant, mindful sans-serif system that works for Traditional Chinese and English.
- Design fidelity target: closer to the concept screenshot, especially hero integration, compact nav, warm clinical background, workflow section immediately after the hero, dark science band, kit section, and final contact band.

## 2026-06-04 prompt 3

- Front-facing website copy should not expose implementation details such as FastAPI, PostgreSQL, API keys, schemas, or Python backend internals.
- Preferred product-language framing: "Android 系統與嵌入式架構" and "雲端資料庫資料存儲" rather than backend technology names.
- Workflow card icons should sit visually above the media card with a clear z-index and border, keeping the half-overlap look without appearing hidden behind the image.
- Brainstorming direction requested: mindful product interactions that make the site feel calmer and more interactive without becoming gimmicky.
