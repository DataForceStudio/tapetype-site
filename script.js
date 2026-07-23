/* TapeType promo — език, дек-клавиши, scroll анимации. Без библиотеки. */

/* ── i18n ─────────────────────────────────────────────── */
const I18N = {
  en: {
    nav_features: "Features", nav_speed: "Speed", nav_dictation: "Dictation",
    nav_privacy: "Privacy", nav_download: "Download for Windows",
    hero_kicker: "THE TAPE IS ROLLING. YOU JUST TALK.",
    hero_line1: "Don't type.", hero_line2: "Speak.",
    hero_sub: "Dictation, corrector, translator and a living voice — six professional tools under one roof, in every Windows app. And your voice never leaves your computer.",
    hero_cta: "Download for Windows",
    hero_note: "Free dictation · 14 days of full Premium",
    ribbon: "hello comma sending you the offer today… → Hello, sending you the offer today. · um meeting at 2… actually 3 → Meeting at 3. · one apples two bananas → 1. Apples 2. Bananas · ",
    roof_title: "Six tools.<br>One deck.",
    roof_sub: "Others do one thing. TapeType is the Swiss army knife of voice — every tool one key away, in every application.",
    k1: "Dictation", k2: "Corrector", k3: "Translator", k4: "Text → voice",
    k5: "Dictionary", k6: "Snippets", k6kbd: "voice",
    fn_dictation: "Speak into ANY app — the text lands clean: no “um”, self-corrections applied, punctuation in place. Emails come out formatted as letters.",
    fn_corrector: "Select text anywhere → a diff bubble shows the corrected version before it replaces anything. Pick the tone: auto, formal, friendly. InstaText-grade Bulgarian.",
    fn_translator: "Select → instant translation bubble: BG↔EN·DE·ES·FR·RU, direction auto-detected. Insert it, hear it, copy it.",
    fn_reader: "Select → a natural neural voice reads it aloud. Language auto-detected, male or female voice, progress with ETA.",
    fn_dictionary: "Your terms, names and brands recognised and spelled exactly — the model learns your vocabulary.",
    fn_snippets: "Say “my email” — the full address is typed. Voice shortcuts for everything your team repeats.",
    speed_title: "Thought is faster than fingers",
    speed_sub: "The average person composes at ~25 words per minute on a keyboard. Speech runs past 120. TapeType hands the difference back to you.",
    lane1: "Keyboard", wpm: "wpm",
    c1: "times faster than typing", c2: "% accuracy in Bulgarian", c3: "languages for translate & read",
    dict_title: "Not a stenographer. An editor.",
    dict_sub: "Raw speech is messy. TapeType delivers it the way a good editor would write it — while you're still talking.",
    e1t: "Self-corrections", e1s: "actually", e1d: "Change your mind out loud — only the final version stays.",
    e2t: "No fillers", e2d: "“Um”, “uh” and stutters vanish. Clean text on the first take.",
    e3t: "Lists by voice", e3d: "Say the numbers — get a formatted list.",
    e4t: "Styles", e4was: "auto · formal · professional · casual",
    e4now: "→ same content, exact tone", e4d: "One button changes the register of the whole dictation.",
    priv_title: "Your voice never leaves your computer",
    priv_sub: "Recognition runs locally, on your machine — not in somebody's cloud. The recording never travels, is never stored, is never heard by anyone. Internet is needed only for AI polishing — through a secured channel.",
    priv_note: "Your dictation history lives only with you and clears with one click.",
    dl_title: "Put the tape in.<br>Throw out the keyboard.",
    dl_sub: "Free dictation forever. All six tools — 14 days, no limits.",
    dl_cta: "Download for Windows",
    dl_req: "Windows 10/11 · NVIDIA GPU for best quality (works without one too)",
  },
  bg: {
    fn_dictation: "Говориш във ВСЯКО приложение — текстът се появява изчистен: без „ъъъ“, самопоправките приложени, пунктуацията на място. Имейлите излизат форматирани като писма.",
    fn_corrector: "Маркираш текст където и да е → балонче показва поправената версия ПРЕДИ да замени каквото и да било. Избираш тон: авто, официален, приятелски. InstaText качество на български.",
    fn_translator: "Маркираш → мигновен превод в балонче: БГ↔EN·DE·ES·FR·RU, посоката се засича сама. Вмъкваш го, чуваш го, копираш го.",
    fn_reader: "Маркираш → естествен невронен глас го прочита. Езикът се разпознава сам, мъжки или женски глас, прогрес с оставащо време.",
    fn_dictionary: "Твоите термини, имена и брандове — разпознати и изписани точно. Моделът учи твоя речник.",
    fn_snippets: "Казваш „моят имейл“ — вмъква се целият адрес. Гласови преки пътища за всичко, което повтаряш.",
  },
};

// нови секции (сравнение, калкулатор, FAQ…) — EN преводи
Object.assign(I18N.en, {
  nav_compare: "Compare", nav_faq: "FAQ",
  hero_cta2: "See how it works",
  hero_note: "Free dictation · 14 days of full Premium · no card",
  how_title: "From download to first dictation — 3 minutes",
  h1t: "Download & install", h1d: "One installer, no setup, no card. The model downloads once on first run.",
  h2t: "Press the key", h2d: "Wherever you write — email, chat, document — press ALT+WIN. The bar lights up: recording.",
  h3t: "Speak", h3d: "Say it the way it comes. The text lands clean, punctuated, no “um” — ready to send.",
  c1s: "vs ~25 wpm keyboard composition (Karat et al.)",
  c2s: "Whisper large · internal tests, decent microphone",
  lw: "words dictated in beta testing so far",
  cmp_title: 'Multi-tool<br><span class="cmp-sub">(“your Swiss army knife”)</span>',
  cmp_sub: "Others do dictation. TapeType also brings a corrector, translator, voice, dictionary and snippets — tools neither Wispr Flow nor built-in Windows dictation has.",
  cmp_win: "Windows dictation",
  r1: "Bulgarian dictation with AI polishing",
  r2: "Corrector on selected text (tones, preview)",
  r3: "Selection translator (6 languages, bubble)",
  r4: "Text → voice (neural voices)",
  r5: "Personal dictionary & voice snippets",
  r6: "Recognition runs LOCALLY — your voice stays with you",
  r7: "Works in every Windows app",
  r8: "Price",
  cmp_partial: "partial", cmp_partial2: "dictionary",
  cmp_cloud: "✗ cloud", cmp_cloud2: "✗ cloud",
  cmp_price_us: "free dictation · one-time Premium",
  cmp_price_wf: "$12/month", cmp_price_win: "free",
  ba_raw: "WHAT YOU SAY", ba_clean: "WHAT APPEARS",
  calc_title: "How much time will you get back?",
  calc_sub: "Move the slider to how many hours a day you spend writing.",
  calc_l1: "Writing per day", calc_o1: "hours saved per month", calc_o2: "work days per year",
  calc_note: "Math: keyboard composition ~25 wpm vs 120+ wpm speech — speaking returns ~4 of every 5 minutes of writing.",
  uc_title: "Who TapeType is for",
  uc1t: "Business correspondence", uc1d: "Emails and offers in BG & EN — dictated, polished, formatted as letters.",
  uc2t: "Chats & socials", uc2d: "Long replies in Slack, Viber, comments — at the speed of speech.",
  uc3t: "Clients in other languages", uc3d: "Select a message → instant translation; answer in Bulgarian, it comes out in English.",
  uc4t: "Fatigue & RSI", uc4d: "Wrist pain, long keyboard days — your voice takes the load.",
  uc5t: "Long documents", uc5d: "Reports and specs dictated in chunks; the corrector polishes them after.",
  uc6t: "Reading long texts", uc6d: "Select an article → a neural voice reads it while you do something else.",
  why_title: "Why TapeType",
  w1t: "Your voice never leaves your computer", w1d: "Recognition is local, on your machine. The recording never travels and is never stored.",
  w2t: "Six tools in one", w2d: "Dictation, corrector, translator, voice, dictionary, snippets — one product, one key away.",
  w3t: "World-class Bulgarian", w3d: "Correction quality measured word-by-word against the leading Bulgarian tool.",
  w4t: "In every application", w4d: "Not a website, not a separate window — it works where you write: Word, Gmail, chats, CRM.",
  w5t: "No subscription lock-in", w5d: "Dictation is free forever; Premium is an offline key that is yours.",
  w6t: "Identity, not a template", w6d: "The cassette deck isn't decoration — it's a tool with character you remember.",
  faq_title: "Frequently asked questions",
  q1: "Do I need a powerful computer?", a1: "For best quality — an NVIDIA GPU with 6+ GB. Without one TapeType automatically switches to a lighter mode: it works, just slower and less accurately.",
  q2: "Does it work offline?", a2: "Speech recognition — yes, fully offline. Internet is needed only for AI polishing, the corrector and the translator.",
  q3: "Where do my recordings go?", a3: "Nowhere. Your voice is processed on your machine and never stored. Text history stays only with you and clears with one click.",
  q4: "Which languages?", a4: "Dictation in Bulgarian and English (auto-detected); translation and read-aloud: BG, EN, DE, ES, FR, RU.",
  q5: "Does it work with my headset?", a5: "Yes — “auto” follows the headphones you're wearing, including Bluetooth. For maximum accuracy we recommend the laptop's mic or a wired one.",
  q6: "What happens after the 14 days?", a6: "Dictation stays free forever. Premium features (corrector, translator, voice…) unlock with a one-time key — no subscription, no card for the trial.",
  q7: "Does it work in all programs?", a7: "Yes — Word, Gmail, browsers, chats, CRMs. Text is inserted right where your caret is.",
  q8: "Can I change the hotkeys?", a8: "Every hotkey is remappable, including mouse buttons per function.",
});

// БГ е в HTML-а по подразбиране; пазим оригиналите за връщане от EN
const bgOriginals = {};
document.querySelectorAll("[data-i18n]").forEach(el => {
  bgOriginals[el.dataset.i18n] = el.innerHTML;
});

let lang = localStorage.getItem("tt_lang") || "bg";

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = (lang === "en" && I18N.en[key] !== undefined)
      ? I18N.en[key]
      : bgOriginals[key];
  });
  document.getElementById("langBtn").textContent = lang === "bg" ? "EN" : "БГ";
  localStorage.setItem("tt_lang", lang);
  // екранът на дека пази активната функция на новия език
  showFn(activeFn, false);
  updateCalc();  // «2 ч» ↔ «2 h»
}
document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "bg" ? "en" : "bg";
  applyLang();
});

/* ── декът: клавиш → описание на «екрана» ─────────────── */
let activeFn = "dictation";
const screenEl = document.getElementById("deckScreenText");

function showFn(fn, animate = true) {
  activeFn = fn;
  document.querySelectorAll(".dkey").forEach(k =>
    k.classList.toggle("on", k.dataset.fn === fn));
  const dict = lang === "en" ? I18N.en : I18N.bg;
  screenEl.innerHTML = dict["fn_" + fn] || "";
  if (animate) {
    screenEl.style.animation = "none";
    void screenEl.offsetWidth;   // рестартира анимацията
    screenEl.style.animation = "";
  }
}
document.querySelectorAll(".dkey").forEach(k =>
  k.addEventListener("click", () => showFn(k.dataset.fn)));

// авто-разходка по клавишите, докато никой не е пипал
let touched = false;
document.querySelector(".deck-keys").addEventListener("click", () => { touched = true; });
const FN_ORDER = ["dictation", "corrector", "translator", "reader", "dictionary", "snippets"];
let fnIdx = 0;
setInterval(() => {
  if (touched || document.hidden) return;
  fnIdx = (fnIdx + 1) % FN_ORDER.length;
  showFn(FN_ORDER[fnIdx]);
}, 3400);

/* ── scroll съживяване ────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("inview");
    // броячите тръгват при показване
    e.target.querySelectorAll("[data-count]").forEach(el => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const target = parseInt(el.dataset.count, 10);
      const t0 = performance.now();
      const dur = 1400;
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  });
}, { threshold: 0.25 });
document.querySelectorAll("section").forEach(s => io.observe(s));

/* wordmark: закача пунктир-лентата точно между ВЪНШНИТЕ ръбове на двете
   кръгчета-ролки, за да не стърчи извън логото (пренесено от приложението) */
function alignWmTape() {
  const wm = document.querySelector(".wordmark");
  if (!wm) return;
  const es = wm.querySelectorAll(".wm-e");
  const tape = wm.querySelector(".wm-tape");
  if (!es.length || !tape) return;
  const box = wm.getBoundingClientRect();
  const first = es[0].getBoundingClientRect();
  const last = es[es.length - 1].getBoundingClientRect();
  tape.style.left = (first.left - box.left) + "px";
  tape.style.right = (box.right - last.right) + "px";
}
window.addEventListener("load", alignWmTape);
window.addEventListener("resize", alignWmTape);
// шрифтът Unbounded ляга късно -> преизчисли, щом е готов (иначе пунктирът
// може да е с грешна ширина до първия resize)
if (document.fonts && document.fonts.ready) document.fonts.ready.then(alignWmTape);

/* ── калкулатор «Колко време ще си върнеш» ─────────────── */
const SAVE_RATE = 1 - 25 / 120;  // говоренето връща ~79% от времето за писане
const calcHours = document.getElementById("calcHours");

function updateCalc() {
  if (!calcHours) return;
  const h = parseFloat(calcHours.value);
  document.getElementById("calcHoursVal").textContent =
    h + (lang === "en" ? " h" : " ч");
  const savedDaily = h * SAVE_RATE;
  document.getElementById("calcMonth").textContent = Math.round(savedDaily * 21);
  document.getElementById("calcYear").textContent =
    Math.round(savedDaily * 251 / 8);
}
if (calcHours) calcHours.addEventListener("input", updateCalc);

/* ── преди/после демо: суровата реч се пренаписва на живо ─ */
const BA = {
  bg: [
    "ъъъ здравей Иване значи пращам ти офертата днес… не чакай утре сутринта щото ъъъ чакаме едно потвърждение",
    "<s>ъъъ</s> здравей Иване <s>значи</s> пращам ти офертата <s>днес… не чакай</s> <span class=\"fix\">утре сутринта</span> щото <s>ъъъ</s> чакаме едно потвърждение",
    "Здравей, Иване,<br><br>Пращам ти офертата утре сутринта — чакаме едно потвърждение.",
  ],
  en: [
    "um hi Ivan so I'm sending you the offer today… no wait tomorrow morning cause um we're waiting on a confirmation",
    "<s>um</s> hi Ivan <s>so</s> I'm sending you the offer <s>today… no wait</s> <span class=\"fix\">tomorrow morning</span> cause <s>um</s> we're waiting on a confirmation",
    "Hi Ivan,<br><br>I'm sending you the offer tomorrow morning — we're waiting on one confirmation.",
  ],
};
let baPhase = 0;
const baText = document.getElementById("baText");
function baTick() {
  if (!baText) return;
  const frames = BA[lang] || BA.bg;
  baText.innerHTML = frames[baPhase];
  baText.closest(".ba-demo").classList.toggle("clean", baPhase === 2);
  baPhase = (baPhase + 1) % 3;
}
setInterval(baTick, 3200);

/* старт */
applyLang();
showFn("dictation", false);
alignWmTape();
updateCalc();
baTick();
