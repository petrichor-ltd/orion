const DEMO_EMAIL = "petrichortpe@gmail.com";

const translations = {
  zh: {
    meta: {
      title: "Orion | EEG 香氛研究平台",
      description:
        "Orion 是結合 Muse EEG、嗅覺測試流程、SRI/ARI 分析與雲端資料保存的腦波香氛研究平台。",
    },
    aria: {
      home: "Orion 首頁",
      primaryNav: "主要導覽",
      mobileNav: "行動版導覽",
      openMenu: "開啟選單",
      closeMenu: "關閉選單",
      language: "語言切換",
      highlights: "平台重點",
      analytics: "動態 EEG 分析預覽",
    },
    nav: {
      product: "產品",
      workflow: "流程",
      science: "科學",
      contact: "聯絡",
    },
    cta: {
      demo: "預約展示",
      workflow: "查看流程",
      contact: "聯絡我們",
    },
    hero: {
      title: "用 EEG 理解香氣如何影響身心狀態。",
      body:
        "Orion 結合 Muse 腦波擷取、引導式嗅覺測試與基準化 SRI/ARI 演算法，客觀量化香氣對放鬆與睡眠準備度的變化。",
    },
    proof: {
      device: "Muse 2 / Muse S 腦波整合",
      protocol: "引導式嗅覺流程",
      scoring: "裝置端 SRI / ARI 評分",
      cloud: "安全雲端保存與同步",
    },
    workflow: {
      title: "從設定到洞察，四步完成研究流程",
      body: "Orion 讓受測者保持平靜，同時保留可重複、可追蹤、可分析的研究資料結構。",
    },
    step1: {
      title: "連接 Muse",
      body: "透過 LibMuse BLE 橋接 Muse 2 或 Muse S，也保留 OSC 模式支援既有串流流程。",
    },
    step2: {
      title: "執行香氣測試",
      body: "受測者依照語音與畫面完成準備、嗅聞與休息階段，建立穩定的測試節奏。",
    },
    step3: {
      title: "裝置端評分",
      body: "Android 系統與嵌入式架構會擷取頻帶特徵，與 Trial 0 基準比較後即時計算 SRI/ARI。",
    },
    step4: {
      title: "同步雲端",
      body: "完成的 session 可同步至雲端資料庫資料存儲，方便後續保存、檢視與研究分析。",
    },
    metric: {
      sri: "SRI 分數",
      calm: "平靜、放鬆",
      uploaded: "Session 已上傳",
    },
    science: {
      title: "以腦波資料支持香氣研究",
      body:
        "SRI 以 Alpha/Theta 放鬆頻帶相對於 Beta 警覺頻帶的變化為核心，並將每個香氣試驗與受測者自己的無香氣基準比較。",
      point1: "擷取 Delta、Theta、Alpha、Beta、Gamma 等頻帶特徵。",
      point2: "保留 artifact、樣本數與資料品質狀態，方便研究回溯。",
      point3: "雲端資料存儲支援 session 檢視與後續研究分析。",
    },
    panel: {
      overview: "Session overview",
      trial: "Trial 3 / 6",
    },
    kit: {
      kicker: "Orion 研究套組",
      title: "嚴謹香氛研究所需的一切。",
      body:
        "為研究團隊、診所與身心健康實驗室打造的完整產品流程，用可量測的腦波指標觀察香氣如何改變身心狀態。",
      item1: "Muse 2 / Muse S 腦波擷取",
      item2: "六種香氣測試流程",
      item3: "Android 系統與嵌入式架構",
      item4: "雲端資料庫資料存儲",
    },
    contact: {
      title: "把客觀香氛研究帶進你的實驗室。",
      body: "與我們討論如何導入 Orion，建立 EEG 引導的嗅覺測試、受測者流程與雲端研究紀錄。",
    },
    footer: {
      product: "Orion EEG 香氛研究平台",
      summary: "Muse 擷取。引導式測試。SRI 分析。雲端紀錄。",
    },
    alt: {
      hero: "臨床實驗桌上的 Muse 腦波頭帶、香氣測試瓶與平板分析畫面",
      kit: "開啟的 Orion 香氛研究套組，包含六支香氣瓶、布料、Muse 腦波頭帶、平板與香水瓶",
    },
  },
  en: {
    meta: {
      title: "Orion | EEG Fragrance Research Platform",
      description:
        "Orion is an EEG fragrance research platform for Muse-based guided olfactory trials, SRI/ARI analytics, and cloud research records.",
    },
    aria: {
      home: "Orion home",
      primaryNav: "Primary navigation",
      mobileNav: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language switch",
      highlights: "Platform highlights",
      analytics: "Animated EEG analytics preview",
    },
    nav: {
      product: "Product",
      workflow: "Workflow",
      science: "Science",
      contact: "Contact",
    },
    cta: {
      demo: "Request a demo",
      workflow: "See workflow",
      contact: "Contact us",
    },
    hero: {
      title: "Understand fragrance response through EEG.",
      body:
        "Orion combines Muse EEG capture, guided olfactory trials, and baseline-aware SRI/ARI analytics to quantify how scent shifts relaxation and sleep readiness.",
    },
    proof: {
      device: "Muse 2 / Muse S EEG integration",
      protocol: "Guided olfactory protocols",
      scoring: "On-device SRI / ARI scoring",
      cloud: "Secure cloud storage and sync",
    },
    workflow: {
      title: "A streamlined research workflow",
      body: "From setup to insight in four calm, reproducible steps.",
    },
    step1: {
      title: "Connect Muse",
      body: "Pair Muse 2 or Muse S through the LibMuse BLE bridge, with OSC mode retained for legacy streaming workflows.",
    },
    step2: {
      title: "Guided fragrance trials",
      body: "Participants follow voice and screen guidance through ready, smell, and rest phases.",
    },
    step3: {
      title: "On-device scoring",
      body: "The Android system and embedded architecture extract band features, compare against Trial 0, and compute SRI/ARI in real time.",
    },
    step4: {
      title: "Cloud sync",
      body: "Completed sessions can sync to cloud database storage for later review, preservation, and research analysis.",
    },
    metric: {
      sri: "SRI score",
      calm: "Calm and relaxed",
      uploaded: "Session uploaded",
    },
    science: {
      title: "Science-backed EEG analytics",
      body:
        "SRI compares relaxation-linked Alpha/Theta activity with alertness-linked Beta activity, then measures each fragrance against the participant's no-fragrance baseline.",
      point1: "Band-power extraction for delta, theta, alpha, beta, and gamma ranges.",
      point2: "Artifact, sample count, and quality status preserved with each trial.",
      point3: "Cloud data storage supports session review and future research analysis.",
    },
    panel: {
      overview: "Session overview",
      trial: "Trial 3 / 6",
    },
    kit: {
      kicker: "The Orion research kit",
      title: "Everything needed for rigorous fragrance research.",
      body:
        "A refined product workflow for research teams, clinics, and wellness labs studying how scent changes measurable brain-state indicators.",
      item1: "Muse 2 / Muse S EEG capture",
      item2: "Six-fragrance test protocol",
      item3: "Android system with embedded architecture",
      item4: "Cloud database storage",
    },
    contact: {
      title: "Bring objective fragrance research to your lab.",
      body:
        "Start a conversation about deploying Orion for EEG-guided fragrance testing, participant sessions, and cloud-backed research records.",
    },
    footer: {
      product: "Orion EEG Fragrance Research Platform",
      summary: "Muse capture. Guided trials. SRI analytics. Cloud records.",
    },
    alt: {
      hero: "Muse-style EEG headband, fragrance atomizers, and tablet analytics on a clinical lab desk",
      kit: "Open Orion fragrance research kit with six atomizers, fabric swatches, Muse-style headband, tablet, and fragrance bottle",
    },
  },
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const languageButtons = document.querySelectorAll("[data-lang-option]");

const getValue = (language, key) =>
  key.split(".").reduce((value, part) => (value ? value[part] : undefined), translations[language]);

const getCurrentLanguage = () => document.documentElement.lang === "en" ? "en" : "zh";

const updateMenuLabel = () => {
  if (!menuButton) return;
  const language = getCurrentLanguage();
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-label", getValue(language, isOpen ? "aria.closeMenu" : "aria.openMenu"));
};

const applyLanguage = (language) => {
  const nextLanguage = translations[language] ? language : "zh";
  document.documentElement.lang = nextLanguage === "zh" ? "zh-Hant" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(nextLanguage, element.dataset.i18n);
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      const value = getValue(nextLanguage, key);
      if (attribute && value !== undefined) element.setAttribute(attribute, value);
    });
  });

  document.querySelectorAll("[data-demo-link]").forEach((link) => {
    const subject = nextLanguage === "zh" ? "Orion 預約展示" : "Orion demo request";
    link.href = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subject)}`;
  });

  document.querySelectorAll("[data-contact-link]").forEach((link) => {
    link.href = `mailto:${DEMO_EMAIL}`;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateMenuLabel();
};

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langOption));
});

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
    updateMenuLabel();
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      updateMenuLabel();
    });
  });
}

const visibleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");

      if (entry.target.matches(".dashboard-panel")) {
        runCounters(entry.target);
      }
    });
  },
  { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
);

document.querySelectorAll(".reveal, .dashboard-panel").forEach((element) => {
  visibleObserver.observe(element);
});

const steps = Array.from(document.querySelectorAll(".step"));
let activeStep = 0;

const rotateStep = () => {
  if (steps.length === 0) return;
  steps.forEach((step, index) => {
    step.classList.toggle("is-active", index === activeStep);
  });
  activeStep = (activeStep + 1) % steps.length;
};

rotateStep();
window.setInterval(rotateStep, 2200);

function runCounters(scope) {
  scope.querySelectorAll("[data-counter]").forEach((counter) => {
    if (counter.dataset.done === "true") return;
    counter.dataset.done = "true";
    const target = Number(counter.dataset.target || "0");
    const start = performance.now();
    const duration = 980;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

function createCanvasRenderer(canvas, renderFrame) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const frame = (time) => {
    renderFrame(ctx, width, height, reducedMotion ? 0 : time);
    if (!reducedMotion) requestAnimationFrame(frame);
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });
  requestAnimationFrame(frame);
}

createCanvasRenderer(document.querySelector("[data-wave-canvas]"), (ctx, width, height, time) => {
  ctx.clearRect(0, 0, width, height);
  const yBase = height * 0.5;
  const amplitude = Math.max(18, height * 0.034);
  const phase = time * 0.0007;

  for (let layer = 0; layer < 3; layer += 1) {
    ctx.beginPath();
    for (let x = -20; x <= width + 20; x += 8) {
      const wave =
        Math.sin(x * 0.012 + phase + layer * 0.92) * amplitude +
        Math.sin(x * 0.026 - phase * 1.8) * (amplitude * 0.38);
      const y = yBase + wave + layer * 18;
      if (x === -20) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(13, 90, 81, ${0.11 - layer * 0.024})`;
    ctx.lineWidth = 2 - layer * 0.35;
    ctx.stroke();
  }
});

createCanvasRenderer(document.querySelector("[data-particle-canvas]"), (ctx, width, height, time) => {
  ctx.clearRect(0, 0, width, height);
  const t = time * 0.0005;
  const rows = 18;
  const cols = Math.ceil(width / 30);

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const x = col * 30 + (row % 2) * 15;
      const wave = Math.sin(col * 0.42 + row * 0.36 + t) * 26;
      const y = height * 0.58 + row * 18 + wave - col * 1.4;
      if (y < height * 0.32 || y > height + 20) continue;
      const alpha = 0.08 + row * 0.011;
      ctx.beginPath();
      ctx.arc(x, y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(157, 216, 189, ${alpha})`;
      ctx.fill();
    }
  }
});

applyLanguage("zh");
