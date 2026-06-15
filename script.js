const DEMO_EMAIL = "toby.liao@petrichor.tw";

const translations = {
  zh: {
    meta: {
      title: "Orion | EEG 香氛研究平台",
      description:
        "Orion 以 EEG 量化香氣反應，協助團隊建立可比較、可交付的嗅覺測試流程。",
    },
    aria: {
      home: "Orion 首頁",
      primaryNav: "主要導覽",
      mobileNav: "行動版導覽",
      openMenu: "開啟選單",
      closeMenu: "關閉選單",
      language: "語言切換",
      highlights: "平台重點",
      capabilityProof: "能力證明",
      commercialFraming: "商業定位",
      productScene: "Orion 產品情境",
      productEvidence: "Orion 證據展示情境",
      kitVisual: "Orion 研究套組視覺",
      sleepSeries: "六款實際測試香氣樣本",
      sessionDemo: "互動式 Orion 測試流程展示",
      analytics: "動態 EEG 分析預覽",
      demoIntents: "預約目的",
      leadForm: "Orion 展示預約表單",
    },
    nav: {
      product: "產品",
      workflow: "流程",
      science: "信任",
      useCases: "對象",
      contact: "聯絡",
    },
    cta: {
      demo: "預約展示",
      session: "查看一次測試",
      workflow: "查看流程",
      contact: "聯絡我們",
      bookTest: "預約測試體驗",
    },
    hero: {
      title: "用腦波，讓香氣反應被看見。",
      body:
        "Orion 結合 Muse EEG、六款香氣樣本與 Android 測試流程，將嗅聞體驗轉成可比較、可交付的研究結果。",
    },
    proof: {
      device: "硬體與香氣套組完整",
      protocol: "個人基準對照流程",
      kit: "可現場展示與試測",
      cloud: "資料與報告可累積",
    },
    proofStrip: {
      deviceLabel: "完整套組",
      deviceTitle: "硬體、香氣、介面、報告",
      deviceBody: "展示時看得到完整產品，不只是一段概念。",
      protocolLabel: "測試流程",
      protocolTitle: "從基準到嗅聞",
      protocolBody: "固定流程，讓每次測試能被比較。",
      recordsLabel: "結果輸出",
      recordsTitle: "分數與報告",
      recordsBody: "測試後產生推薦、指標與報告。",
      demoLabel: "導入下一步",
      demoTitle: "展示後安排試測",
      demoBody: "快速確認場域、樣本與合作節奏。",
    },
    problem: {
      kicker: "產品價值",
      title: "把感受，變成可以討論的資料。",
      body:
        "香氣效果常難以被說清楚。Orion 用現場測試、腦波指標與報告輸出，讓產品展示更容易進入試測與合作。",
      point1Title: "現場完成",
      point1Body: "受測者依照 Android 流程完成基準、嗅聞與休息。",
      point2Title: "六款香氣比較",
      point2Body: "同一流程比較六款香氣，形成推薦方向。",
      point3Title: "腦波指標",
      point3Body: "SRI/ARI 對照個人基準，呈現香氣反應。",
      point4Title: "報告可交付",
      point4Body: "PDF 與雲端紀錄讓會後討論有共同依據。",
    },
    thesis: {
      kicker: "結果報告",
      title: "測試結束後，得到一份可交付報告。",
      body:
        "結果包含分數、香氣建議與紀錄，可支援試測、研究與導入評估。",
      point1: "即時報告：測試後生成可閱讀結果",
      point2: "基準比較：每次結果回到個人基準",
      point3: "長期累積：紀錄形成資料資產",
      visualLabel: "報告範例",
      visualValue: "從測試結果到 PDF 報告",
    },
    session: {
      kicker: "產品展示",
      title: "一次測試，五個關鍵狀態。",
      body:
        "從基準、嗅聞、訊號到 SRI/ARI 與雲端紀錄，展示 Orion 如何把流程收斂成結果。",
      panelTitle: "Orion 測試流程",
      step0Title: "個人基準",
      step0Body: "建立個人基準",
      step1Title: "香氣試驗",
      step1Body: "引導嗅聞與休息",
      step2Title: "腦波訊號",
      step2Body: "擷取頻帶特徵",
      step3Title: "SRI / ARI",
      step3Body: "產生可比較分數",
      step4Title: "雲端紀錄",
      step4Body: "保存研究紀錄",
      steps: [
        {
          phase: "個人基準",
          score: "--",
          caption: "建立無香氣基準。",
        },
        {
          phase: "嗅聞階段",
          score: "第 3 段",
          caption: "依畫面與語音進入嗅聞。",
        },
        {
          phase: "腦波訊號",
          score: "5 頻帶",
          caption: "擷取五個頻帶特徵。",
        },
        {
          phase: "SRI / ARI",
          score: "78",
          caption: "與個人基準比較後產生指標。",
        },
        {
          phase: "雲端紀錄",
          score: "已保存",
          caption: "保存紀錄，方便後續檢視。",
        },
      ],
    },
    workflow: {
      title: "四步完成測試。",
      body: "連接、測試、評分、同步；每一步都能在展示現場驗證。",
    },
    step1: {
      title: "連接 Muse",
      body: "支援 Muse 2 / Muse S 連線與既有串流流程。",
    },
    step2: {
      title: "執行香氣測試",
      body: "依畫面與語音完成嗅聞節奏。",
    },
    step3: {
      title: "裝置端評分",
      body: "擷取頻帶特徵並計算 SRI/ARI。",
    },
    step4: {
      title: "同步雲端",
      body: "同步測試紀錄，方便後續檢視。",
    },
    metric: {
      sri: "SRI 分數",
      calm: "平靜、放鬆",
      uploaded: "紀錄已上傳",
    },
    science: {
      kicker: "信任與科學",
      title: "可信、可重複、可回溯。",
      body:
        "Orion 以個人無香氣基準作比較，將 EEG 特徵轉成研究與產品評估用指標；不作醫療診斷。",
      point1: "個人基準：每次香氣試驗都有對照。",
      point2: "一致流程：準備、嗅聞、休息與評分固定。",
      point3: "友善體驗：平靜、低壓的測試引導。",
      point4: "紀錄保存：品質狀態與結果可追蹤。",
    },
    panel: {
      overview: "測試總覽",
      trial: "第 3 / 6 段",
    },
    useCases: {
      kicker: "適用對象",
      title: "為研發、試測與展示設計。",
      body: "適合配方比較、研究紀錄、場域體驗與合作導入。",
      brandTitle: "香氛品牌",
      brandBody: "比較配方、濃度與體驗情境。",
      labTitle: "研究實驗室",
      labBody: "建立可回溯的嗅覺測試紀錄。",
      wellnessTitle: "身心健康與診所場域",
      wellnessBody: "以友善流程展示香氣與放鬆研究。",
      partnerTitle: "產品與通路團隊",
      partnerBody: "評估導入情境與合作節奏。",
    },
    kit: {
      kicker: "Orion 研究套組",
      title: "香氣樣本、測試流程、報告輸出整合在一起。",
      body: "一套工具支援現場展示、試行導入與研究討論。",
      item1: "Muse 2 / Muse S 腦波擷取",
      item2: "實際測試香氣樣本（6）",
      item3: "Android 系統與嵌入式架構",
      item4: "測試結果、PDF 報告與雲端資料存儲",
    },
    aromas: {
      frankincense: "乳香",
      vetiver: "岩蘭草",
      sage: "鼠尾草",
      ylang: "依蘭",
      orange: "甜橙",
      lavender: "薰衣草",
    },
    contact: {
      kicker: "預約展示",
      title: "預約 Orion 展示。",
      body:
        "留下資訊，我們會安排展示、測試體驗或合作討論。送出後會開啟預填郵件。",
      intent1: "產品展示",
      intent2: "測試體驗",
      intent3: "研究合作",
      intent4: "資金與策略合作",
      emailFallback: "或直接寄信至 toby.liao@petrichor.tw",
    },
    form: {
      name: "姓名",
      namePlaceholder: "你的姓名",
      email: "電子郵件",
      emailPlaceholder: "name@company.com",
      role: "你的身分",
      intent: "預約目的",
      message: "備註",
      messagePlaceholder: "簡短說明你想了解的展示、測試或合作情境。",
      selectPlaceholder: "請選擇",
      rolePartner: "資金與策略合作方",
      roleResearch: "研究單位",
      roleBrand: "香氛品牌",
      roleWellness: "身心健康與診所場域",
      roleOther: "其他",
      intentDemo: "產品展示",
      intentTest: "測試體驗",
      intentCollab: "研究合作",
      intentStrategy: "資金與策略合作",
      submit: "產生預約郵件",
      helper: "送出後會開啟你的電子郵件應用程式，內容已預填給 Orion 團隊。",
      status: "正在開啟電子郵件應用程式。如果沒有跳出視窗，請確認瀏覽器是否封鎖郵件連結。",
      blank: "未填寫",
      mailSubject: "Orion 展示與合作洽談",
      mailIntro: "你好，Orion 團隊：",
      mailRequest: "我想預約 Orion 的產品展示 / 測試體驗 / 合作洽談，以下是我的資訊：",
      mailName: "姓名",
      mailEmail: "電子郵件",
      mailRole: "身分",
      mailIntent: "預約目的",
      mailMessage: "備註",
      mailClosing: "謝謝，期待與你們聯絡。",
    },
    footer: {
      product: "Orion EEG 香氛研究平台",
      summary: "僅用於研究與產品評估，不作為醫療診斷工具。",
    },
    alt: {
      hero: "Muse 腦波頭帶與 Orion 測試介面的產品展示情境",
      museDevice: "Muse 腦波頭帶",
      appScreenshot: "Orion Android 應用程式顯示即時腦波監測畫面",
      reportScreen: "Orion Android 應用程式顯示神經芳療分析報告",
      reportPdf: "Orion PDF 神經芳療腦波分析報告",
      kit: "Orion 研究套組，包含 Muse 腦波頭帶、六款香氣樣本、平板分析畫面與擴香瓶",
    },
  },
  en: {
    meta: {
      title: "Orion | EEG Fragrance Research Platform",
      description:
        "Orion quantifies fragrance response with EEG and helps teams build comparable, deliverable olfactory testing workflows.",
    },
    aria: {
      home: "Orion home",
      primaryNav: "Primary navigation",
      mobileNav: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language switch",
      highlights: "Platform highlights",
      capabilityProof: "Capability proof",
      commercialFraming: "Commercial framing",
      productScene: "Orion product scene",
      productEvidence: "Orion evidence scene",
      kitVisual: "Orion research kit visual",
      sleepSeries: "Six real aroma test samples",
      sessionDemo: "Interactive Orion session demo",
      analytics: "Animated EEG analytics preview",
      demoIntents: "Demo intents",
      leadForm: "Orion demo request form",
    },
    nav: {
      product: "Product",
      workflow: "Workflow",
      science: "Trust",
      useCases: "Use cases",
      contact: "Contact",
    },
    cta: {
      demo: "Book a research demo",
      session: "See one session",
      workflow: "See workflow",
      contact: "Contact us",
      bookTest: "Book a test session",
    },
    hero: {
      title: "Make fragrance response visible through EEG.",
      body:
        "Orion combines Muse EEG, six aroma samples, and Android-guided testing to turn scent experience into comparable, deliverable research results.",
    },
    proof: {
      device: "Complete hardware and aroma kit",
      protocol: "Baseline-controlled workflow",
      kit: "Ready for live demos and tests",
      cloud: "Data and reports can accumulate",
    },
    proofStrip: {
      deviceLabel: "Complete kit",
      deviceTitle: "Hardware, aromas, app, and report",
      deviceBody: "A complete product is visible during the demo.",
      protocolLabel: "Test flow",
      protocolTitle: "Baseline to exposure",
      protocolBody: "A fixed flow makes each session comparable.",
      recordsLabel: "Result output",
      recordsTitle: "Scores and reports",
      recordsBody: "Each session produces recommendations, indicators, and a report.",
      demoLabel: "Next step",
      demoTitle: "Demo to trial",
      demoBody: "Align on setting, samples, and collaboration rhythm.",
    },
    problem: {
      kicker: "Product value",
      title: "Turn feeling into data teams can discuss.",
      body:
        "Fragrance effects are hard to explain clearly. Orion uses on-site testing, EEG indicators, and report output to move demos toward trials and partnerships.",
      point1Title: "Run on site",
      point1Body: "Participants complete baseline, exposure, and rest in the Android flow.",
      point2Title: "Compare six aromas",
      point2Body: "One flow compares six scents and forms recommendation direction.",
      point3Title: "EEG indicators",
      point3Body: "SRI/ARI compares each response with a personal baseline.",
      point4Title: "Deliver the report",
      point4Body: "PDF and cloud records give follow-up discussions a shared reference.",
    },
    thesis: {
      kicker: "Result report",
      title: "After a session, teams receive a deliverable report.",
      body:
        "Results include scores, aroma recommendations, and records for trials, research, and adoption review.",
      point1: "Immediate report: readable output after testing",
      point2: "Baseline comparison: each result returns to the individual",
      point3: "Long-term records: sessions become a data asset",
      visualLabel: "Report sample",
      visualValue: "From session result to PDF report",
    },
    session: {
      kicker: "Product demo",
      title: "One test, five key states.",
      body:
        "From baseline, scent exposure, and EEG signal to SRI/ARI and cloud record, Orion turns the flow into a clear result.",
      panelTitle: "Orion session",
      step0Title: "Baseline",
      step0Body: "Create personal baseline",
      step1Title: "Fragrance trial",
      step1Body: "Guide smell and rest",
      step2Title: "EEG signal",
      step2Body: "Extract band features",
      step3Title: "SRI / ARI",
      step3Body: "Generate comparable scores",
      step4Title: "Cloud record",
      step4Body: "Save research record",
      steps: [
        {
          phase: "Baseline",
          score: "--",
          caption: "Create a no-fragrance baseline.",
        },
        {
          phase: "Smell phase",
          score: "Trial 3",
          caption: "Guide the participant through scent exposure.",
        },
        {
          phase: "EEG signal",
          score: "5 bands",
          caption: "Extract five band features.",
        },
        {
          phase: "SRI / ARI",
          score: "78",
          caption: "Compare the response against baseline.",
        },
        {
          phase: "Cloud record",
          score: "Saved",
          caption: "Save the record for later review.",
        },
      ],
    },
    workflow: {
      title: "Complete a test in four steps.",
      body: "Connect, test, score, and sync. Each step can be verified during the demo.",
    },
    step1: {
      title: "Connect Muse",
      body: "Support Muse 2 / Muse S and existing streaming workflows.",
    },
    step2: {
      title: "Guided fragrance trials",
      body: "Guide the participant through the scent rhythm.",
    },
    step3: {
      title: "On-device scoring",
      body: "Extract band features and compute SRI/ARI.",
    },
    step4: {
      title: "Cloud sync",
      body: "Sync session records for later review.",
    },
    metric: {
      sri: "SRI score",
      calm: "Calm and relaxed",
      uploaded: "Session uploaded",
    },
    science: {
      kicker: "Trust & science",
      title: "Credible, repeatable, and reviewable.",
      body:
        "Orion compares each scent response with a personal no-fragrance baseline and translates EEG features into indicators for research and product evaluation, not medical diagnosis.",
      point1: "Personal baseline: every scent trial has a control.",
      point2: "Consistent flow: ready, smell, rest, and scoring stay fixed.",
      point3: "Participant-friendly: calm, low-pressure guidance.",
      point4: "Traceable records: quality status and results are preserved.",
    },
    panel: {
      overview: "Session overview",
      trial: "Trial 3 / 6",
    },
    useCases: {
      kicker: "Built for",
      title: "Designed for R&D, trials, and demos.",
      body: "Use Orion for formula comparison, research records, field experience, and adoption discussions.",
      brandTitle: "Fragrance brands",
      brandBody: "Compare formulas, concentrations, and contexts.",
      labTitle: "Research labs",
      labBody: "Preserve reviewable olfactory test records.",
      wellnessTitle: "Wellness and clinic settings",
      wellnessBody: "Show fragrance and relaxation research in a friendly flow.",
      partnerTitle: "Product and channel teams",
      partnerBody: "Evaluate settings, experience design, and partnership rhythm.",
    },
    kit: {
      kicker: "The Orion research kit",
      title: "Aroma samples, testing flow, and report output in one kit.",
      body: "One tool supports live demos, pilot trials, and research conversations.",
      item1: "Muse 2 / Muse S EEG capture",
      item2: "Real aroma test samples (6)",
      item3: "Android system with embedded architecture",
      item4: "Session results, PDF reports, and cloud data storage",
    },
    aromas: {
      frankincense: "Frank.",
      vetiver: "Vetiver",
      sage: "Sage",
      ylang: "Ylang",
      orange: "Orange",
      lavender: "Lavender",
    },
    contact: {
      kicker: "Book a demo",
      title: "Book an Orion demo.",
      body:
        "Leave your information and we will arrange a demo, test experience, or partnership conversation. Submitting opens a pre-filled email.",
      intent1: "Product demo",
      intent2: "Test experience",
      intent3: "Research partnership",
      intent4: "Funding and strategy",
      emailFallback: "Or email toby.liao@petrichor.tw directly",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "name@company.com",
      role: "Your role",
      intent: "Request type",
      message: "Notes",
      messagePlaceholder: "Briefly describe the demo, test, or partnership context you want to discuss.",
      selectPlaceholder: "Select one",
      rolePartner: "Funding or strategic partner",
      roleResearch: "Research team",
      roleBrand: "Fragrance brand",
      roleWellness: "Wellness or clinic setting",
      roleOther: "Other",
      intentDemo: "Product demo",
      intentTest: "Test experience",
      intentCollab: "Research partnership",
      intentStrategy: "Funding and strategic partnership",
      submit: "Create demo email",
      helper: "Submitting opens your email app with a pre-filled message to the Orion team.",
      status: "Opening your email app. If nothing appears, check whether your browser blocks mailto links.",
      blank: "Not provided",
      mailSubject: "Orion demo and partnership request",
      mailIntro: "Hello Orion team,",
      mailRequest: "I would like to request an Orion product demo / test experience / partnership conversation. Here is my information:",
      mailName: "Name",
      mailEmail: "Email",
      mailRole: "Role",
      mailIntent: "Request type",
      mailMessage: "Notes",
      mailClosing: "Thank you. I look forward to speaking with you.",
    },
    footer: {
      product: "Orion EEG Fragrance Research Platform",
      summary: "Research and product evaluation only. Not for medical diagnosis.",
    },
    alt: {
      hero: "Muse EEG headband and Orion test interface in a product scene",
      museDevice: "Muse EEG headband",
      appScreenshot: "Orion Android app showing a live EEG monitor",
      reportScreen: "Orion Android app showing a completed neuro-aroma analysis report",
      reportPdf: "Orion PDF neuro-aroma EEG analysis report",
      kit: "Orion research kit with Muse EEG headband, six aroma samples, tablet analytics, and atomizer",
    },
  },
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const sessionButtons = document.querySelectorAll("[data-session-step]");
const demoVisual = document.querySelector("[data-demo-visual]");
const sessionPhase = document.querySelector("[data-session-phase]");
const sessionScore = document.querySelector("[data-session-score]");
const sessionCaption = document.querySelector("[data-session-caption]");
const leadForm = document.querySelector("[data-lead-form]");
const formStatus = document.querySelector("[data-form-status]");
const tiltTargets = document.querySelectorAll("[data-tilt]");

let activeSessionStep = 0;
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const getValue = (language, key) =>
  key.split(".").reduce((value, part) => (value ? value[part] : undefined), translations[language]);

const getCurrentLanguage = () => (document.documentElement.lang === "en" ? "en" : "zh");

const optionLabelKeys = {
  role: {
    partner: "form.rolePartner",
    research: "form.roleResearch",
    brand: "form.roleBrand",
    wellness: "form.roleWellness",
    other: "form.roleOther",
  },
  intent: {
    demo: "form.intentDemo",
    test: "form.intentTest",
    collab: "form.intentCollab",
    strategy: "form.intentStrategy",
  },
};

const getOptionLabel = (group, value, language) => {
  const key = optionLabelKeys[group]?.[value];
  return key ? getValue(language, key) : value;
};

const buildLeadMailto = (formData, language = getCurrentLanguage()) => {
  const copy = translations[language].form;
  const name = String(formData.get("name") || "").trim() || copy.blank;
  const email = String(formData.get("email") || "").trim() || copy.blank;
  const roleValue = String(formData.get("role") || "").trim();
  const intentValue = String(formData.get("intent") || "").trim();
  const message = String(formData.get("message") || "").trim() || copy.blank;
  const role = roleValue ? getOptionLabel("role", roleValue, language) : copy.blank;
  const intent = intentValue ? getOptionLabel("intent", intentValue, language) : copy.blank;
  const body = [
    copy.mailIntro,
    "",
    copy.mailRequest,
    "",
    `${copy.mailName}: ${name}`,
    `${copy.mailEmail}: ${email}`,
    `${copy.mailRole}: ${role}`,
    `${copy.mailIntent}: ${intent}`,
    `${copy.mailMessage}: ${message}`,
    "",
    copy.mailClosing,
  ].join("\n");

  return `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(copy.mailSubject)}&body=${encodeURIComponent(body)}`;
};

window.OrionLead = { buildMailto: buildLeadMailto };

const updateMenuLabel = () => {
  if (!menuButton) return;
  const language = getCurrentLanguage();
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-label", getValue(language, isOpen ? "aria.closeMenu" : "aria.openMenu"));
};

const updateSessionDemo = (index = activeSessionStep) => {
  const language = getCurrentLanguage();
  const steps = translations[language].session.steps;
  const normalizedIndex = Number.isInteger(index) && steps[index] ? index : 0;
  activeSessionStep = normalizedIndex;
  const step = steps[normalizedIndex];

  if (demoVisual) demoVisual.dataset.activeStep = String(normalizedIndex);
  if (sessionPhase) sessionPhase.textContent = step.phase;
  if (sessionScore) sessionScore.textContent = step.score;
  if (sessionCaption) sessionCaption.textContent = step.caption;

  sessionButtons.forEach((button) => {
    const isActive = Number(button.dataset.sessionStep) === normalizedIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
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

  document.querySelectorAll("[data-contact-link]").forEach((link) => {
    link.href = `mailto:${DEMO_EMAIL}`;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateSessionDemo(activeSessionStep);
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

sessionButtons.forEach((button) => {
  const activate = () => updateSessionDemo(Number(button.dataset.sessionStep));
  button.addEventListener("click", activate);
  button.addEventListener("mouseenter", activate);
  button.addEventListener("focus", activate);
});

tiltTargets.forEach((target) => {
  target.addEventListener("pointermove", (event) => {
    if (reducedMotionQuery.matches || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    target.style.setProperty("--tilt-x", `${(-y * 3).toFixed(2)}deg`);
    target.style.setProperty("--tilt-y", `${(x * 3).toFixed(2)}deg`);
  });

  target.addEventListener("pointerleave", () => {
    target.style.removeProperty("--tilt-x");
    target.style.removeProperty("--tilt-y");
  });
});

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const mailto = buildLeadMailto(new FormData(leadForm), getCurrentLanguage());
    leadForm.dataset.lastMailto = mailto;
    if (formStatus) formStatus.textContent = getValue(getCurrentLanguage(), "form.status");
    window.location.href = mailto;
  });
}

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

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionQuery.addEventListener?.("change", (event) => {
    reducedMotion = event.matches;
    if (!reducedMotion) requestAnimationFrame(frame);
  });

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
