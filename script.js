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

// ── Русский ────────────────────────────────────────────
I18N.ru = {
  nav_features: "Функции", nav_speed: "Скорость", nav_compare: "Сравнение",
  nav_faq: "Вопросы", nav_download: "Скачать для Windows",
  hero_kicker: "КАССЕТА КРУТИТСЯ. ВЫ ПРОСТО ГОВОРИТЕ.",
  hero_line1: "Не печатайте.", hero_line2: "Говорите.",
  hero_sub: "Диктовка, корректор, переводчик и живой голос — шесть профессиональных инструментов под одной крышей, в любом приложении Windows. А ваш голос не покидает компьютер.",
  hero_cta: "Скачать для Windows", hero_cta2: "Как это работает",
  hero_note: "Бесплатная диктовка · 14 дней полного Premium · без карты",
  ribbon: "привет запятая отправляю тебе предложение сегодня… → Привет, отправляю тебе предложение сегодня. · эээ встреча в 2… нет, в 3 → Встреча в 3. · раз яблоки два бананы → 1. Яблоки 2. Бананы · ",
  roof_title: "Шесть инструментов.<br>Одна дека.",
  roof_sub: "Другие делают одно. TapeType — швейцарский нож для голоса: каждый инструмент в одной клавише, в любом приложении.",
  k1: "Диктовка", k2: "Корректор", k3: "Переводчик", k4: "Текст → голос", k5: "Словарь", k6: "Сниппеты", k6kbd: "голос",
  fn_dictation: "Говорите в ЛЮБОМ приложении — текст появляется чистым: без «э-э», самопоправки применены, пунктуация на месте. Письма выходят оформленными как письма.",
  fn_corrector: "Выделите текст где угодно → всплывающее окно показывает исправленную версию до замены. Выберите тон: авто, официальный, дружеский.",
  fn_translator: "Выделите → мгновенный перевод во всплывающем окне: 6 языков, направление определяется само. Вставить, озвучить, скопировать.",
  fn_reader: "Выделите → естественный нейронный голос читает вслух. Язык определяется сам, мужской или женский голос, прогресс с оценкой времени.",
  fn_dictionary: "Ваши термины, имена и бренды распознаются и пишутся точно — модель учит ваш словарь.",
  fn_snippets: "Скажите «моя почта» — вставляется весь адрес. Голосовые сокращения для всего, что вы повторяете.",
  speed_title: "Мысль быстрее пальцев",
  speed_sub: "Средний человек печатает ~25 слов в минуту. Речь — больше 120. TapeType возвращает разницу вам.",
  lane1: "Клавиатура", wpm: "сл/мин",
  c1: "раз быстрее печати", c2: "% точности", c3: "языка для перевода и озвучки",
  c1s: "против ~25 сл/мин набора на клавиатуре (Karat et al.)",
  c2s: "Whisper large · внутренние тесты, хороший микрофон",
  lw: "слов надиктовано в бета-тестах на данный момент",
  cmp_title: 'Мульти-тул<br><span class="cmp-sub">(«ваш швейцарский нож»)</span>',
  cmp_sub: "Другие делают диктовку. TapeType добавляет корректор, переводчик, голос, словарь и сниппеты — инструменты, которых нет ни у Wispr Flow, ни у встроенной диктовки Windows.",
  cmp_win: "Диктовка Windows",
  r1: "Диктовка с AI-шлифовкой", r2: "Корректор выделенного текста (тона, превью)", r3: "Переводчик выделения (6 языков)", r4: "Текст → голос (нейронные голоса)", r5: "Личный словарь и голосовые сниппеты", r6: "Распознавание ЛОКАЛЬНО — голос остаётся у вас", r7: "Работает в любом приложении Windows", r8: "Цена",
  cmp_partial: "частично", cmp_partial2: "словарь", cmp_cloud: "✗ облако", cmp_cloud2: "✗ облако",
  cmp_price_us: "бесплатная диктовка · Premium разово", cmp_price_wf: "$12/мес", cmp_price_win: "бесплатно",
  how_title: "От загрузки до первой диктовки — 3 минуты",
  h1t: "Скачайте и установите", h1d: "Один установщик, без настроек, без карты. Модель скачивается один раз при первом запуске.",
  h2t: "Нажмите клавишу", h2d: "Где бы вы ни писали — почта, чат, документ — нажмите ALT+WIN. Панель загорается: запись.",
  h3t: "Говорите", h3d: "Скажите как есть. Текст появляется чистым, с пунктуацией, без «э-э» — готов к отправке.",
  ba_raw: "ЧТО ВЫ ГОВОРИТЕ", ba_clean: "ЧТО ПОЯВЛЯЕТСЯ",
  calc_title: "Сколько времени вы вернёте?",
  calc_sub: "Двигайте ползунок по тому, сколько часов в день вы пишете.",
  calc_l1: "Письмо в день", calc_o1: "часов сэкономлено в месяц", calc_o2: "рабочих дней в год",
  calc_note: "Расчёт: набор на клавиатуре ~25 сл/мин против 120+ сл/мин речи — говорение возвращает ~4 из каждых 5 минут письма.",
  uc_title: "Для кого TapeType",
  uc1t: "Деловая переписка", uc1d: "Письма и предложения — надиктованы, отшлифованы, оформлены как письма.",
  uc2t: "Чаты и соцсети", uc2d: "Длинные ответы в Slack, мессенджерах, комментарии — со скоростью речи.",
  uc3t: "Клиенты на другом языке", uc3d: "Выделите сообщение → мгновенный перевод; отвечаете на своём, выходит на нужном.",
  uc4t: "Усталость и RSI", uc4d: "Боль в запястьях, долгие дни за клавиатурой — голос берёт нагрузку.",
  uc5t: "Длинные документы", uc5d: "Отчёты и описания диктуются частями; корректор шлифует их потом.",
  uc6t: "Чтение длинных текстов", uc6d: "Выделите статью → нейронный голос читает, пока вы заняты другим.",
  why_title: "Почему TapeType",
  w1t: "Голос не покидает компьютер", w1d: "Распознавание локальное, на вашей машине. Запись никуда не уходит и нигде не хранится.",
  w2t: "Шесть инструментов в одном", w2d: "Диктовка, корректор, переводчик, голос, словарь, сниппеты — один продукт, одна клавиша.",
  w3t: "Качество мирового уровня", w3d: "Качество коррекции измерено слово за словом против ведущего инструмента.",
  w4t: "В любом приложении", w4d: "Не сайт, не отдельное окно — работает там, где вы пишете: Word, почта, чаты, CRM.",
  w5t: "Без привязки к подписке", w5d: "Диктовка бесплатна навсегда; Premium — офлайн-ключ, который ваш.",
  w6t: "Характер, а не шаблон", w6d: "Кассетная дека — не украшение, это инструмент с характером, который запоминается.",
  faq_title: "Частые вопросы",
  q1: "Нужен ли мощный компьютер?", a1: "Для лучшего качества — видеокарта NVIDIA с 6+ ГБ. Без неё TapeType переходит в лёгкий режим: работает, но медленнее и менее точно.",
  q2: "Работает ли офлайн?", a2: "Распознавание речи — да, полностью офлайн. Интернет нужен только для AI-шлифовки, корректора и переводчика.",
  q3: "Куда уходят мои записи?", a3: "Никуда. Голос обрабатывается на вашей машине и не хранится. История текстов остаётся только у вас и стирается одним кликом.",
  q4: "Какие языки?", a4: "Диктовка на болгарском и английском (язык определяется сам); перевод и озвучка: BG, EN, DE, ES, FR, RU.",
  q5: "Работает ли с моей гарнитурой?", a5: "Да — режим «авто» следует за наушниками, которые вы носите, включая Bluetooth. Для максимальной точности рекомендуем микрофон ноутбука или проводной.",
  q6: "Что после 14 дней?", a6: "Диктовка остаётся бесплатной навсегда. Premium (корректор, переводчик, голос…) открывается разовым ключом — без подписки, без карты для пробного периода.",
  q7: "Работает во всех программах?", a7: "Да — Word, почта, браузеры, чаты, CRM. Текст вставляется прямо туда, где курсор.",
  q8: "Можно ли менять клавиши?", a8: "Все горячие клавиши настраиваемые, включая кнопки мыши для каждой функции.",
  dict_title: "Не стенографист. Редактор.",
  dict_sub: "Сырая речь беспорядочна. TapeType подаёт её так, как написал бы хороший редактор — пока вы ещё говорите.",
  e1t: "Самопоправки", e1s: "нет", e1d: "Передумали вслух — остаётся только финальная версия.",
  e2t: "Без слов-паразитов", e2d: "«Э-э», «ну» и запинки исчезают. Чистый текст с первого раза.",
  e3t: "Списки голосом", e3d: "Назовите числа — получите форматированный список.",
  e4t: "Стили", e4was: "авто · официальный · деловой · разговорный", e4now: "→ то же содержание, точный тон", e4d: "Одна кнопка меняет регистр всей диктовки.",
  priv_title: "Ваш голос не покидает компьютер",
  priv_sub: "Распознавание работает локально, на вашей машине — не в чужом облаке. Запись никуда не путешествует, нигде не хранится, никто её не слышит. Интернет нужен только для AI-шлифовки — через защищённый канал.",
  priv_note: "История диктовок живёт только у вас и стирается одним кликом.",
  dl_title: "Вставьте кассету.<br>Выбросьте клавиатуру.",
  dl_sub: "Бесплатная диктовка навсегда. Все шесть инструментов — 14 дней без ограничений.",
  dl_cta: "Скачать для Windows",
  dl_req: "Windows 10/11 · видеокарта NVIDIA для лучшего качества (работает и без неё)",
};

// ── Español ────────────────────────────────────────────
I18N.es = {
  nav_features: "Funciones", nav_speed: "Velocidad", nav_compare: "Comparar",
  nav_faq: "Preguntas", nav_download: "Descargar para Windows",
  hero_kicker: "LA CINTA GIRA. TÚ SOLO HABLAS.",
  hero_line1: "No escribas.", hero_line2: "Habla.",
  hero_sub: "Dictado, corrector, traductor y una voz viva: seis herramientas profesionales bajo un mismo techo, en cualquier app de Windows. Y tu voz nunca sale de tu ordenador.",
  hero_cta: "Descargar para Windows", hero_cta2: "Cómo funciona",
  hero_note: "Dictado gratis · 14 días de Premium completo · sin tarjeta",
  ribbon: "hola coma te envío la oferta hoy… → Hola, te envío la oferta hoy. · eh reunión a las 2… mejor a las 3 → Reunión a las 3. · uno manzanas dos plátanos → 1. Manzanas 2. Plátanos · ",
  roof_title: "Seis herramientas.<br>Una pletina.",
  roof_sub: "Otros hacen una cosa. TapeType es la navaja suiza de la voz: cada herramienta a una tecla, en cualquier aplicación.",
  k1: "Dictado", k2: "Corrector", k3: "Traductor", k4: "Texto → voz", k5: "Diccionario", k6: "Snippets", k6kbd: "voz",
  fn_dictation: "Habla en CUALQUIER app: el texto aparece limpio, sin «eh», con las autocorrecciones aplicadas y la puntuación en su sitio. Los correos salen con formato de carta.",
  fn_corrector: "Selecciona texto en cualquier sitio → una burbuja muestra la versión corregida antes de reemplazar nada. Elige el tono: auto, formal, cercano.",
  fn_translator: "Selecciona → traducción instantánea en burbuja: 6 idiomas, dirección detectada sola. Insértala, escúchala, cópiala.",
  fn_reader: "Selecciona → una voz neuronal natural lo lee en alto. Idioma detectado solo, voz masculina o femenina, progreso con tiempo estimado.",
  fn_dictionary: "Tus términos, nombres y marcas reconocidos y escritos con exactitud: el modelo aprende tu vocabulario.",
  fn_snippets: "Di «mi correo» y se escribe la dirección completa. Atajos de voz para todo lo que repites.",
  speed_title: "El pensamiento va más rápido que los dedos",
  speed_sub: "Una persona media redacta a ~25 palabras por minuto en el teclado. El habla supera las 120. TapeType te devuelve la diferencia.",
  lane1: "Teclado", wpm: "ppm",
  c1: "veces más rápido que teclear", c2: "% de precisión", c3: "idiomas para traducir y leer",
  c1s: "frente a ~25 ppm redactando en teclado (Karat et al.)",
  c2s: "Whisper large · pruebas internas, micrófono decente",
  lw: "palabras dictadas en las pruebas beta hasta ahora",
  cmp_title: 'Multiherramienta<br><span class="cmp-sub">(«tu navaja suiza»)</span>',
  cmp_sub: "Otros hacen dictado. TapeType añade corrector, traductor, voz, diccionario y snippets: herramientas que ni Wispr Flow ni el dictado de Windows tienen.",
  cmp_win: "Dictado de Windows",
  r1: "Dictado con pulido por IA", r2: "Corrector de texto seleccionado (tonos, vista previa)", r3: "Traductor de selección (6 idiomas)", r4: "Texto → voz (voces neuronales)", r5: "Diccionario personal y snippets de voz", r6: "Reconocimiento LOCAL: tu voz se queda contigo", r7: "Funciona en cualquier app de Windows", r8: "Precio",
  cmp_partial: "parcial", cmp_partial2: "diccionario", cmp_cloud: "✗ nube", cmp_cloud2: "✗ nube",
  cmp_price_us: "dictado gratis · Premium pago único", cmp_price_wf: "$12/mes", cmp_price_win: "gratis",
  how_title: "De la descarga al primer dictado: 3 minutos",
  h1t: "Descarga e instala", h1d: "Un instalador, sin configuración, sin tarjeta. El modelo se descarga una vez en el primer arranque.",
  h2t: "Pulsa la tecla", h2d: "Donde sea que escribas —correo, chat, documento— pulsa ALT+WIN. La barra se enciende: grabando.",
  h3t: "Habla", h3d: "Dilo como te salga. El texto aparece limpio, con puntuación, sin «eh»: listo para enviar.",
  ba_raw: "LO QUE DICES", ba_clean: "LO QUE APARECE",
  calc_title: "¿Cuánto tiempo recuperarás?",
  calc_sub: "Mueve el control según cuántas horas al día pasas escribiendo.",
  calc_l1: "Escritura al día", calc_o1: "horas ahorradas al mes", calc_o2: "días laborables al año",
  calc_note: "Cálculo: teclear ~25 ppm frente a hablar 120+ ppm — hablar devuelve ~4 de cada 5 minutos de escritura.",
  uc_title: "Para quién es TapeType",
  uc1t: "Correspondencia profesional", uc1d: "Correos y ofertas dictados, pulidos y con formato de carta.",
  uc2t: "Chats y redes", uc2d: "Respuestas largas en Slack, mensajería, comentarios: a la velocidad del habla.",
  uc3t: "Clientes en otro idioma", uc3d: "Selecciona un mensaje → traducción instantánea; respondes en tu idioma y sale en el suyo.",
  uc4t: "Fatiga y lesiones (RSI)", uc4d: "Dolor de muñecas, días largos de teclado: la voz asume la carga.",
  uc5t: "Documentos largos", uc5d: "Informes y descripciones se dictan por partes; el corrector los pule después.",
  uc6t: "Leer textos largos", uc6d: "Selecciona un artículo → una voz neuronal lo lee mientras haces otra cosa.",
  why_title: "Por qué TapeType",
  w1t: "Tu voz nunca sale del ordenador", w1d: "El reconocimiento es local, en tu máquina. La grabación no viaja ni se almacena en ningún sitio.",
  w2t: "Seis herramientas en una", w2d: "Dictado, corrector, traductor, voz, diccionario, snippets: un producto, a una tecla.",
  w3t: "Calidad de primer nivel", w3d: "Calidad de corrección medida palabra por palabra frente a la herramienta líder.",
  w4t: "En todas las aplicaciones", w4d: "No es una web ni una ventana aparte: funciona donde escribes: Word, correo, chats, CRM.",
  w5t: "Sin ataduras de suscripción", w5d: "El dictado es gratis para siempre; Premium es una clave offline que es tuya.",
  w6t: "Identidad, no una plantilla", w6d: "La pletina de casete no es decoración: es una herramienta con carácter que recuerdas.",
  faq_title: "Preguntas frecuentes",
  q1: "¿Necesito un ordenador potente?", a1: "Para la mejor calidad, una GPU NVIDIA con 6+ GB. Sin ella TapeType pasa a un modo ligero: funciona, pero más lento y con menos precisión.",
  q2: "¿Funciona sin internet?", a2: "El reconocimiento de voz, sí, totalmente offline. Internet solo hace falta para el pulido por IA, el corrector y el traductor.",
  q3: "¿Adónde van mis grabaciones?", a3: "A ninguna parte. Tu voz se procesa en tu máquina y no se almacena. El historial de textos queda solo contigo y se borra con un clic.",
  q4: "¿Qué idiomas admite?", a4: "Dictado en búlgaro e inglés (idioma detectado solo); traducción y lectura: BG, EN, DE, ES, FR, RU.",
  q5: "¿Funciona con mis auriculares?", a5: "Sí: el modo «auto» sigue los auriculares que llevas puestos, incluido Bluetooth. Para máxima precisión recomendamos el micro del portátil o uno con cable.",
  q6: "¿Qué pasa tras los 14 días?", a6: "El dictado sigue gratis para siempre. Las funciones Premium (corrector, traductor, voz…) se desbloquean con una clave de pago único: sin suscripción, sin tarjeta para la prueba.",
  q7: "¿Funciona en todos los programas?", a7: "Sí: Word, correo, navegadores, chats, CRM. El texto se inserta justo donde está el cursor.",
  q8: "¿Puedo cambiar los atajos?", a8: "Todos los atajos son reasignables, incluidos los botones del ratón por función.",
  dict_title: "No un taquígrafo. Un editor.",
  dict_sub: "El habla en bruto es un caos. TapeType la entrega como la escribiría un buen editor, mientras aún hablas.",
  e1t: "Autocorrecciones", e1s: "mejor", e1d: "Cambias de idea en voz alta y solo queda la versión final.",
  e2t: "Sin muletillas", e2d: "«Eh», «este» y los titubeos desaparecen. Texto limpio a la primera.",
  e3t: "Listas por voz", e3d: "Di los números y obtienes una lista con formato.",
  e4t: "Estilos", e4was: "auto · formal · profesional · casual", e4now: "→ mismo contenido, tono exacto", e4d: "Un botón cambia el registro de todo el dictado.",
  priv_title: "Tu voz nunca sale de tu ordenador",
  priv_sub: "El reconocimiento es local, en tu máquina, no en la nube de nadie. La grabación no viaja, no se almacena y nadie la escucha. Internet solo hace falta para el pulido por IA, por un canal seguro.",
  priv_note: "Tu historial de dictados vive solo contigo y se borra con un clic.",
  dl_title: "Mete la cinta.<br>Tira el teclado.",
  dl_sub: "Dictado gratis para siempre. Las seis herramientas: 14 días sin límites.",
  dl_cta: "Descargar para Windows",
  dl_req: "Windows 10/11 · GPU NVIDIA para mejor calidad (también funciona sin ella)",
};

// БГ е в HTML-а по подразбиране; пазим оригиналите за връщане от EN
const bgOriginals = {};
document.querySelectorAll("[data-i18n]").forEach(el => {
  bgOriginals[el.dataset.i18n] = el.innerHTML;
});

let lang = localStorage.getItem("tt_lang") || "bg";

const LANGS = ["bg", "en", "ru", "es"];
const LANG_LABEL = { bg: "БГ", en: "EN", ru: "RU", es: "ES" };
if (!LANGS.includes(lang)) lang = "bg";

function applyLang() {
  document.documentElement.lang = lang;
  const dict = I18N[lang];  // undefined за bg -> връщаме оригиналния HTML
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = (dict && dict[key] !== undefined) ? dict[key] : bgOriginals[key];
  });
  document.getElementById("langBtn").textContent = LANG_LABEL[lang];
  localStorage.setItem("tt_lang", lang);
  showFn(activeFn, false);   // екранът на дека — на новия език
  updateCalc();              // суфикс на часовете спрямо езика
  if (typeof baText !== "undefined" && baText) baText.innerHTML = (BA[lang] || BA.bg)[(baPhase + 2) % 3];
}
document.getElementById("langBtn").addEventListener("click", () => {
  lang = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
  applyLang();
});

/* ── декът: клавиш → описание на «екрана» ─────────────── */
let activeFn = "dictation";
const screenEl = document.getElementById("deckScreenText");

function showFn(fn, animate = true) {
  activeFn = fn;
  document.querySelectorAll(".dkey").forEach(k =>
    k.classList.toggle("on", k.dataset.fn === fn));
  const dict = I18N[lang] || I18N.bg;
  screenEl.innerHTML = dict["fn_" + fn] || I18N.bg["fn_" + fn] || "";
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
    h + (lang === "en" || lang === "es" ? " h" : " ч");
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
  ru: [
    "эээ привет Иван значит отправляю тебе предложение сегодня… нет подожди завтра утром потому что эээ ждём одно подтверждение",
    "<s>эээ</s> привет Иван <s>значит</s> отправляю тебе предложение <s>сегодня… нет подожди</s> <span class=\"fix\">завтра утром</span> потому что <s>эээ</s> ждём одно подтверждение",
    "Привет, Иван,<br><br>Отправляю тебе предложение завтра утром — ждём одно подтверждение.",
  ],
  es: [
    "eh hola Iván pues te envío la oferta hoy… no espera mañana por la mañana porque eh esperamos una confirmación",
    "<s>eh</s> hola Iván <s>pues</s> te envío la oferta <s>hoy… no espera</s> <span class=\"fix\">mañana por la mañana</span> porque <s>eh</s> esperamos una confirmación",
    "Hola Iván:<br><br>Te envío la oferta mañana por la mañana — esperamos una confirmación.",
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
