const DEMO_EMAIL = "toby.liao@petrichor.tw";

const translations = {
  zh: {
    meta: {
      title: "Orion | EEG 香氛研究平台",
      description:
        "Orion 是用 EEG 資料量化香氣反應的研究平台，協助香氛品牌、研究單位與合作夥伴建立可重複的嗅覺測試流程。",
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
      title: "把香氣反應變成可展示、可比較、可累積的腦波證據。",
      body:
        "Orion 把 Muse EEG、六款實際香氣樣本、Android 測試流程與雲端研究紀錄整合成一套可展示的產品。第一次會議就能看見硬體、資料、報告與導入路徑。",
    },
    proof: {
      device: "硬體與香氣套組完整",
      protocol: "個人基準對照流程",
      kit: "可現場展示與試測",
      cloud: "資料與報告可累積",
    },
    proofStrip: {
      deviceLabel: "展示完整度",
      deviceTitle: "硬體、香氣、報告一次到位",
      deviceBody: "首屏即可看見完整套組，不需要靠抽象說明建立想像。",
      protocolLabel: "導入路徑",
      protocolTitle: "從展示到試測",
      protocolBody: "一次測試包含基準、嗅聞、分析與報告，能快速進入試行討論。",
      recordsLabel: "資料資產",
      recordsTitle: "結果可累積",
      recordsBody: "每次測試都留下紀錄、品質狀態與可回溯的報告內容。",
      demoLabel: "商業狀態",
      demoTitle: "可預約展示",
      demoBody: "適合品牌、研究單位與策略合作方快速評估導入情境。",
    },
    problem: {
      kicker: "從感受到證據",
      title: "一次測試，留下可閱讀、可下載、可追蹤的香氣反應報告。",
      body:
        "香氣體驗不該只停留在主觀描述。Orion 將嗅聞流程、EEG 指標、香氛建議與報告輸出整理成一條清楚路徑，讓每次測試都能被呈現、比較與回溯。",
      point1Title: "測試完成",
      point1Body: "受測、嗅聞、休息與結果整理在同一個產品流程中完成。",
      point2Title: "香氣建議",
      point2Body: "報告會整理推薦香氣、信心提示與使用建議，方便討論下一步。",
      point3Title: "量化指標",
      point3Body: "SRI/ARI 與主要腦波特徵可對照個人基準，降低單次感受的模糊度。",
      point4Title: "報告輸出",
      point4Body: "測試結果可匯出為 PDF 報告，也能保存在雲端研究紀錄中。",
    },
    thesis: {
      kicker: "結果報告",
      title: "測試結束後，不只得到分數，也得到交付的報告。",
      body:
        "Orion 的價值不在單次體驗，而是把嗅聞、腦波、評分、建議與 PDF 報告接成可複製的產品流程。展示現場可以直接從結果談導入、資料累積與未來擴張。",
      point1: "可交付：測試後立即生成可閱讀報告",
      point2: "可比較：每次結果都能回到個人基準",
      point3: "可累積：報告與紀錄形成未來資料資產",
      visualLabel: "報告範例",
      visualValue: "從測試結果到 PDF 報告",
    },
    session: {
      kicker: "產品展示",
      title: "一次看懂 Orion 如何完成測試與產出報告。",
      body:
        "這段展示把商業溝通最需要的三件事放在同一個流程：可執行的現場測試、可理解的腦波指標、可帶走的結果報告。",
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
          caption: "建立受測者自己的無香氣基準。",
        },
        {
          phase: "嗅聞階段",
          score: "第 3 段",
          caption: "受測者依照畫面與語音進入嗅聞階段。",
        },
        {
          phase: "腦波訊號",
          score: "5 頻帶",
          caption: "擷取 Delta、Theta、Alpha、Beta、Gamma 等頻帶特徵。",
        },
        {
          phase: "SRI / ARI",
          score: "78",
          caption: "將香氣試驗與個人基準比較後產生可討論的指標。",
        },
        {
          phase: "雲端紀錄",
          score: "已保存",
          caption: "同步測試紀錄，方便後續保存、檢視與研究分析。",
        },
      ],
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
      body: "Android 系統與嵌入式架構會擷取頻帶特徵，與第 0 段基準比較後即時計算 SRI/ARI。",
    },
    step4: {
      title: "同步雲端",
      body: "完成的測試紀錄可同步至雲端資料庫資料存儲，方便後續保存、檢視與研究分析。",
    },
    metric: {
      sri: "SRI 分數",
      calm: "平靜、放鬆",
      uploaded: "紀錄已上傳",
    },
    science: {
      kicker: "信任與科學",
      title: "嚴謹、克制、可回溯的腦波香氣分析。",
      body:
        "Orion 以受測者自己的無香氣階段作為比較基準，將 EEG 頻帶特徵轉成 SRI/ARI 指標，支援研究與產品評估，而非醫療診斷。",
      point1: "個人基準對照：每個香氣試驗都與受測者自己的基準比較。",
      point2: "可重複流程：準備、嗅聞、休息與評分流程一致。",
      point3: "受測者友善：受測者能在平靜、低壓的引導下完成測試。",
      point4: "研究紀錄保存：保存品質狀態、試驗結果與雲端研究紀錄。",
    },
    panel: {
      overview: "測試總覽",
      trial: "第 3 / 6 段",
    },
    useCases: {
      kicker: "適用對象",
      title: "為香氣研發、場域測試與產品展示而設計。",
      body:
        "Orion 把硬體套組、測試流程與報告輸出包成可展示的產品路線。配方比較、研究紀錄、場域體驗與合作導入，都能從一次測試開始。",
      brandTitle: "香氛品牌",
      brandBody: "比較不同配方、濃度與體驗情境，讓產品主張有更客觀的研究素材。",
      labTitle: "研究實驗室",
      labBody: "建立個人基準對照的嗅覺測試流程，保存可回溯的研究紀錄。",
      wellnessTitle: "身心健康與診所場域",
      wellnessBody: "用受測者友善的方式展示香氣、放鬆與睡眠準備度研究。",
      partnerTitle: "產品與通路團隊",
      partnerBody: "用可展示的報告與測試流程，評估導入情境、體驗設計與合作節奏。",
    },
    kit: {
      kicker: "Orion 研究套組",
      title: "把測試香氣樣本與結果報告放進同一套工具介面。",
      body:
        "研究套組將 EEG 擷取、六款實際測試香氣、裝置端分析與雲端資料保存整合成清楚工作流，適合展示、試行導入與研究討論。",
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
        "留下你的資訊，我們會協助安排產品展示、測試體驗或研究合作。送出後會開啟一封預填給 Orion 團隊的電子郵件。",
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
        "Orion quantifies fragrance response with EEG data, helping fragrance brands, research teams, and partners build repeatable olfactory testing workflows.",
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
      title: "Turn fragrance response into evidence teams can show, compare, and build on.",
      body:
        "Orion brings Muse EEG, six real aroma samples, Android-guided testing, and cloud research records into one demo-ready product. A first meeting can show the hardware, data, report, and deployment path together.",
    },
    proof: {
      device: "Complete hardware and aroma kit",
      protocol: "Baseline-controlled workflow",
      kit: "Ready for live demos and tests",
      cloud: "Data and reports can accumulate",
    },
    proofStrip: {
      deviceLabel: "Demo completeness",
      deviceTitle: "Hardware, aromas, and report together",
      deviceBody: "The complete kit is visible from the first screen, without relying on abstract explanation.",
      protocolLabel: "Deployment path",
      protocolTitle: "From demo to test session",
      protocolBody: "One session includes baseline, fragrance exposure, analysis, and report output.",
      recordsLabel: "Data asset",
      recordsTitle: "Results can accumulate",
      recordsBody: "Each session leaves records, quality status, and a reviewable report.",
      demoLabel: "Commercial state",
      demoTitle: "Demo-ready",
      demoBody: "Designed for brands, research teams, and strategic partners to evaluate deployment quickly.",
    },
    problem: {
      kicker: "From feeling to evidence",
      title: "One session leaves a readable, downloadable, and traceable fragrance-response report.",
      body:
        "Fragrance experience should not end as a subjective description. Orion organizes olfactory flow, EEG indicators, fragrance recommendations, and report output into a clear path, so each session can be shown, compared, and reviewed.",
      point1Title: "Completed session",
      point1Body: "Participant setup, smell phases, rest phases, and result summaries stay inside one product workflow.",
      point2Title: "Fragrance recommendation",
      point2Body: "Reports summarize the recommended aroma, confidence notes, and usage guidance for follow-up discussion.",
      point3Title: "Quantified indicators",
      point3Body: "SRI/ARI and key EEG features are compared against a personal baseline to reduce single-session ambiguity.",
      point4Title: "Report output",
      point4Body: "Results can be exported as a PDF report and preserved as cloud research records.",
    },
    thesis: {
      kicker: "Result report",
      title: "After a session, teams receive more than a score. They receive a report they can use.",
      body:
        "Orion's value is not a single experience. It connects smelling, EEG capture, scoring, recommendations, and PDF reporting into a repeatable product workflow, so demos can move directly into deployment, data accumulation, and expansion.",
      point1: "Deliverable: a readable report is generated after testing",
      point2: "Comparable: each result returns to a personal baseline",
      point3: "Accumulative: reports and records become a future data asset",
      visualLabel: "Report sample",
      visualValue: "From session result to PDF report",
    },
    session: {
      kicker: "Product demo",
      title: "One flow shows how Orion completes a test and produces a report.",
      body:
        "The demo places the three things commercial conversations need in one flow: a runnable on-site test, understandable EEG indicators, and a report that can be taken away.",
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
          caption: "Create the participant's own no-fragrance baseline.",
        },
        {
          phase: "Smell phase",
          score: "Trial 3",
          caption: "Guide the participant through the fragrance exposure phase.",
        },
        {
          phase: "EEG signal",
          score: "5 bands",
          caption: "Extract delta, theta, alpha, beta, and gamma band features.",
        },
        {
          phase: "SRI / ARI",
          score: "78",
          caption: "Compare the fragrance trial against baseline to create discussion-ready indicators.",
        },
        {
          phase: "Cloud record",
          score: "Saved",
          caption: "Sync session records for later preservation, review, and research analysis.",
        },
      ],
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
      kicker: "Trust & science",
      title: "Rigorous, restrained, and reviewable EEG fragrance analytics.",
      body:
        "Orion compares each fragrance trial against the participant's own no-fragrance baseline, then translates EEG band features into SRI/ARI indicators for research and product evaluation, not medical diagnosis.",
      point1: "Baseline-controlled: each fragrance trial is compared with a personal baseline.",
      point2: "Repeatable protocol: ready, smell, rest, and scoring phases stay consistent.",
      point3: "Participant-friendly: sessions are guided in a calm, low-pressure format.",
      point4: "Research records: quality status, trial outcomes, and cloud records are preserved.",
    },
    panel: {
      overview: "Session overview",
      trial: "Trial 3 / 6",
    },
    useCases: {
      kicker: "Built for",
      title: "Designed for fragrance R&D, field testing, and product demonstrations.",
      body:
        "Orion packages the hardware kit, testing flow, and report output into a product path teams can show. Formula comparison, research records, field experience, and deployment discussions can all begin with one session.",
      brandTitle: "Fragrance brands",
      brandBody: "Compare formulas, concentrations, and experience contexts with more objective research material.",
      labTitle: "Research labs",
      labBody: "Run baseline-controlled olfactory sessions and preserve reviewable session records.",
      wellnessTitle: "Wellness and clinic settings",
      wellnessBody: "Show fragrance, relaxation, and sleep-readiness research with a participant-friendly flow.",
      partnerTitle: "Product and channel teams",
      partnerBody: "Use clear reports and a showable testing flow to evaluate deployment scenarios, experience design, and partnership rhythm.",
    },
    kit: {
      kicker: "The Orion research kit",
      title: "Aroma samples and result reports in one testing interface.",
      body:
        "The research kit combines EEG capture, six real aroma samples, on-device analysis, and cloud data storage into a clear workflow for demonstrations, field trials, and research conversations.",
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
        "Leave your information and we will help arrange a product demonstration, test session, or research conversation. Submitting opens a pre-filled email to the Orion team.",
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
