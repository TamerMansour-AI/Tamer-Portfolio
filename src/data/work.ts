type WorkSeedItem = {
  title_en: string;
  title_ar: string;
  type_en: string;
  type_ar: string;
  context_en: string;
  context_ar: string;
  desc_en: string;
  desc_ar: string;
  url_en?: string;
  url_ar?: string;
  url?: string;
  linkLabel_en?: string;
  linkLabel_ar?: string;
  secondaryUrl?: string;
  secondaryLabel_en?: string;
  secondaryLabel_ar?: string;
  note_en?: string;
  note_ar?: string;
  tags_en: string[];
  tags_ar: string[];
  thumbLocal: string;
  thumbRemoteCandidates?: string[];
  featured?: boolean;
};

type Localized = "en" | "ar";

export type WorkItem = {
  title_en: string;
  title_ar: string;
  type_en: string;
  type_ar: string;
  context_en: string;
  context_ar: string;
  desc_en: string;
  desc_ar: string;
  title: string;
  context: string;
  description: string;
  url?: string;
  linkLabel?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  note?: string;
  tags: string[];
  type: string;
  featured: boolean;
  thumbLocal: string;
  thumbRemoteCandidates: string[];
};

const workSeed: WorkSeedItem[] = [
  {
    title_en: "Museum of Echoes",
    title_ar: "متحف الأصداء",
    type_en: "Bilingual Music Archive Platform",
    type_ar: "منصة أرشيف موسيقي ثنائية اللغة",
    context_en: "Editorial listening world and archive-shaped product",
    context_ar: "عالم استماع تحريري ومنتج رقمي مبني بمنطق الأرشيف",
    desc_en:
      "A premium bilingual listening platform that turns original AI-created music into rooms, shelves, and guided discovery paths rather than loose uploads, combining curation, interface thinking, and release structure.",
    desc_ar:
      "منصة استماع ثنائية اللغة تقدم الموسيقى الأصلية المدعومة بالذكاء الاصطناعي كغرف وأرفف ومسارات اكتشاف مقصودة بدل أن تتركها كملفات منفصلة، عبر مزج الإخراج التحريري بمنطق الواجهة وبنية الإصدار.",
    url_en: "/museum-of-echoes/",
    url_ar: "/ar/museum-of-echoes/",
    linkLabel_en: "Open project page",
    linkLabel_ar: "افتح صفحة المشروع",
    secondaryUrl: "https://museum-of-echoes.pages.dev/",
    secondaryLabel_en: "Open live platform",
    secondaryLabel_ar: "افتح المنصة الحية",
    tags_en: ["Bilingual Product", "Listening Archive", "Original Music"],
    tags_ar: ["منتج ثنائي اللغة", "أرشيف استماع", "موسيقى أصلية"],
    thumbLocal: "/media/museum/museum-of-echoes-home.jpg",
    featured: true
  },
  {
    title_en: "Men in the Sun - Retold in 1980s Anime Style",
    title_ar: "رجال في الشمس - إعادة سرد بأسلوب أنمي الثمانينيات",
    type_en: "AI Visual Storytelling",
    type_ar: "سرد بصري بالذكاء الاصطناعي",
    context_en: "Flagship literary retelling in Arabic and English",
    context_ar: "مشروع أدبي رئيسي بنسختين عربية وإنجليزية",
    desc_en:
      "A reinterpretation of Men in the Sun as a 1980s anime-inspired visual narrative, developed in parallel Arabic and English versions to test tone, memory, and emotional pacing.",
    desc_ar:
      "إعادة تخيل لرواية رجال في الشمس كسرد بصري مستلهم من لغة أنمي الثمانينيات، طورت منه نسختان بالعربية والإنجليزية لاختبار النبرة والذاكرة والإيقاع العاطفي.",
    url: "https://youtube.com/shorts/qkhfHVbYxpY?feature=share",
    linkLabel_en: "Watch on YouTube",
    linkLabel_ar: "شاهد على YouTube",
    tags_en: ["Literary Retelling", "Arabic + English", "1980s Anime Language"],
    tags_ar: ["إعادة سرد أدبي", "عربي + إنجليزي", "لغة أنمي الثمانينيات"],
    thumbLocal: "/media/work/men-in-the-sun-bilingual.jpg",
    featured: true
  },
  {
    title_en: "Princes of Ashes - Trailer from Atyaf Al Ard",
    title_ar: "أمراء الرماد - تريلر من أطياف الأرض",
    type_en: "Cinematic Heritage Storytelling",
    type_ar: "سرد تراثي سينمائي",
    context_en: "Concept trailer and worldbuilding piece",
    context_ar: "تريلر مفاهيمي وقطعة لبناء العالم",
    desc_en:
      "A trailer concept from Atyaf Al Ard that translates heritage, atmosphere, and mythic tension into a concise worldbuilding frame.",
    desc_ar:
      "تريلر مفاهيمي من أطياف الأرض يحول التراث والأجواء والتوتر الأسطوري إلى قطعة مركزة لبناء العالم السردي.",
    url: "https://tamermansour-ai.github.io/atyaf-al-ard-website/",
    linkLabel_en: "Open project site",
    linkLabel_ar: "افتح موقع المشروع",
    secondaryUrl: "https://www.facebook.com/profile.php?id=61574424444648",
    secondaryLabel_en: "Facebook page",
    secondaryLabel_ar: "صفحة Facebook",
    tags_en: ["Trailer Concept", "Heritage", "Worldbuilding"],
    tags_ar: ["تريلر مفاهيمي", "تراث", "بناء عالم"],
    thumbLocal: "/media/work/princes-of-ashes.jpg",
    featured: true
  },
  {
    title_en: "Returning to Haifa - Bilingual Literary Reimagining",
    title_ar: "عائد إلى حيفا - إعادة تخيل أدبية ثنائية اللغة",
    type_en: "AI Visual Storytelling",
    type_ar: "AI Visual Storytelling",
    context_en: "Ghassan Kanafani adaptation in Arabic and English",
    context_ar: "Ghassan Kanafani adaptation in Arabic and English",
    desc_en:
      "A short-form bilingual reinterpretation of Returning to Haifa built around return, estrangement, memory, and the unresolved emotional geometry of home.",
    desc_ar:
      "A short-form bilingual reinterpretation of Returning to Haifa built around return, estrangement, memory, and the unresolved emotional geometry of home.",
    url_en: "/literary-reimaginings/",
    url_ar: "/ar/literary-reimaginings/",
    linkLabel_en: "Open literary series",
    linkLabel_ar: "Open literary series",
    secondaryUrl: "https://youtu.be/66JuIoZ6wGY",
    secondaryLabel_en: "Arabic edition",
    secondaryLabel_ar: "Arabic edition",
    tags_en: ["Returning to Haifa", "Arabic + English", "Kanafani"],
    tags_ar: ["Returning to Haifa", "Arabic + English", "Kanafani"],
    thumbLocal: "/media/literary/returning-to-haifa.svg",
    thumbRemoteCandidates: [
      "https://i.ytimg.com/vi/66JuIoZ6wGY/maxresdefault.jpg",
      "https://i.ytimg.com/vi/0AmrDjtbvXE/maxresdefault.jpg"
    ],
    featured: true
  },
  {
    title_en: "Paintings Brought to Life",
    title_ar: "لوحات تنبض بالحياة",
    type_en: "Motion Storytelling",
    type_ar: "سرد بصري متحرك",
    context_en: "Visual culture turned into a watchable learning format",
    context_ar: "الثقافة البصرية تتحول إلى صيغة تعليمية سهلة المشاهدة",
    desc_en:
      "An animated countdown that reinterprets famous paintings through movement, pacing, and accessible narration for a broader audience.",
    desc_ar:
      "صيغة عد تنازلي متحركة تعيد تقديم اللوحات الشهيرة عبر الحركة والإيقاع وسرد تعليمي واضح لجمهور أوسع.",
    url: "https://youtu.be/4HPt1qOpIw0?list=TLGGVDWoj-0-l0cwOTAyMjAyNg",
    linkLabel_en: "Watch on YouTube",
    linkLabel_ar: "شاهد على YouTube",
    tags_en: ["Art History", "Education", "Motion Format"],
    tags_ar: ["تاريخ الفن", "تعليم", "صيغة متحركة"],
    thumbLocal: "/media/work/paintings-brought-to-life.jpg",
    featured: true
  },
  {
    title_en: "Book-to-Deck Reconstructions",
    title_ar: "إعادة بناء الكتب كعروض شرائح",
    type_en: "Knowledge Design",
    type_ar: "تصميم معرفة",
    context_en: "Structured book-to-slide transformations",
    context_ar: "تحويلات منظمة من الكتب إلى الشرائح",
    desc_en:
      "A curated deck gallery featuring Digital Prometheus, The Prince Dossier, and The Liberty Manifesto, showing how dense books can become sharp visual briefings and teaching assets.",
    desc_ar:
      "معرض مختار يضم Digital Prometheus وThe Prince Dossier وThe Liberty Manifesto ليوضح كيف يمكن تحويل الكتب الكثيفة إلى إحاطات بصرية واضحة وأصول تعليمية منظمة.",
    url_en: "/book-to-decks/",
    url_ar: "/ar/book-to-decks/",
    linkLabel_en: "Open deck previews",
    linkLabel_ar: "افتح معاينات العروض",
    tags_en: ["Digital Prometheus", "The Prince Dossier", "The Liberty Manifesto"],
    tags_ar: ["Digital Prometheus", "The Prince Dossier", "The Liberty Manifesto"],
    thumbLocal: "/media/work/book-to-deck-reconstructions.jpg",
    featured: true
  },
  {
    title_en: "Palestine Visual Lab",
    title_ar: "Palestine Visual Lab",
    type_en: "Web Product / Visual Tool",
    type_ar: "Web Product / Visual Tool",
    context_en: "A Palestinian-inspired visual prompt and product website",
    context_ar: "A Palestinian-inspired visual prompt and product website",
    desc_en:
      "A Vite/React web product for creating Palestinian-inspired posters, patterns, prompts, stickers, and memory tools with dignity, taste, and modern AI workflows.",
    desc_ar:
      "A Vite/React web product for creating Palestinian-inspired posters, patterns, prompts, stickers, and memory tools with dignity, taste, and modern AI workflows.",
    url: "https://palestine-visual-lab.pages.dev/",
    linkLabel_en: "Open live website",
    linkLabel_ar: "Open live website",
    note_en: "If this URL changes, update it after the next Cloudflare review.",
    note_ar: "If this URL changes, update it after the next Cloudflare review.",
    tags_en: ["Web App", "Palestinian Visual Culture", "Prompt Tools"],
    tags_ar: ["Web App", "Palestinian Visual Culture", "Prompt Tools"],
    thumbLocal: "/media/pinterest/boards/palestinian-thobes.jpg",
    featured: true
  },
  {
    title_en: "Sakina App",
    title_ar: "Sakina App",
    type_en: "Android App / Spiritual Reflection",
    type_ar: "Android App / Spiritual Reflection",
    context_en: "Arabic-first Quranic emotional reflection companion",
    context_ar: "Arabic-first Quranic emotional reflection companion",
    desc_en:
      "A release-prepared Android app for emotionally sensitive Quranic reflection moments. It should be presented as a project while the public listing is pending.",
    desc_ar:
      "A release-prepared Android app for emotionally sensitive Quranic reflection moments. It should be presented as a project while the public listing is pending.",
    url: "https://www.instagram.com/ramallahlabs/",
    linkLabel_en: "Ramallah Labs updates",
    linkLabel_ar: "Ramallah Labs updates",
    note_en: "Public store listing pending; do not present as publicly launched yet.",
    note_ar: "Public store listing pending; do not present as publicly launched yet.",
    tags_en: ["Android", "Spiritual Reflection", "Ramallah Labs"],
    tags_ar: ["Android", "Spiritual Reflection", "Ramallah Labs"],
    thumbLocal: "/media/hero/hero-poster.png",
    featured: true
  },
  {
    title_en: "Flappy Flip",
    title_ar: "Flappy Flip",
    type_en: "Casual Game / Ramallah Labs",
    type_ar: "Casual Game / Ramallah Labs",
    context_en: "Lightweight reflex game prepared for Ramallah Labs marketing",
    context_ar: "Lightweight reflex game prepared for Ramallah Labs marketing",
    desc_en:
      "A lightweight casual game in the Ramallah Labs app pipeline, framed around quick reflex play, short-form gameplay clips, and score-chasing loops.",
    desc_ar:
      "A lightweight casual game in the Ramallah Labs app pipeline, framed around quick reflex play, short-form gameplay clips, and score-chasing loops.",
    url: "https://www.instagram.com/ramallahlabs/p/DYDQDhkDfRp/",
    linkLabel_en: "Open Ramallah Labs launch post",
    linkLabel_ar: "Open Ramallah Labs launch post",
    note_en: "Game-specific public store link still needs to be added when available.",
    note_ar: "Game-specific public store link still needs to be added when available.",
    tags_en: ["Game", "Android", "Short-form Marketing"],
    tags_ar: ["Game", "Android", "Short-form Marketing"],
    thumbLocal: "/media/work/paintings-brought-to-life.jpg",
    featured: true
  },
  {
    title_en: "AI Training and Workshop Systems",
    title_ar: "AI Training and Workshop Systems",
    type_en: "Training / Workshop Design",
    type_ar: "Training / Workshop Design",
    context_en: "Practical AI sessions for media, artists, students, parents, and institutional teams",
    context_ar: "Practical AI sessions for media, artists, students, parents, and institutional teams",
    desc_en:
      "A body of applied AI training work covering journalism workflows, artist visual development, parent learning support, presentation systems, NotebookLM source packs, and responsible review habits for non-technical audiences.",
    desc_ar:
      "Applied AI training work covering journalism workflows, artist visual development, parent learning support, presentation systems, NotebookLM source packs, and responsible review habits for non-technical audiences.",
    url_en: "/services/",
    url_ar: "/ar/services/",
    linkLabel_en: "See service proof",
    linkLabel_ar: "See service proof",
    note_en:
      "Public copy keeps organization-specific details concise and client-safe; deeper proof is held in local training portfolios and CV packs.",
    note_ar:
      "Public copy keeps organization-specific details concise and client-safe; deeper proof is held in local training portfolios and CV packs.",
    tags_en: ["AI Training", "NotebookLM", "Responsible Review"],
    tags_ar: ["AI Training", "NotebookLM", "Responsible Review"],
    thumbLocal: "/media/services/services-en.png",
    featured: true
  },
  {
    title_en: "Signal OS / Codex Execution Infrastructure",
    title_ar: "Signal OS / Codex Execution Infrastructure",
    type_en: "Automation and Operating System",
    type_ar: "Automation and Operating System",
    context_en: "Internal execution layer for turning scattered work into bounded outputs",
    context_ar: "Internal execution layer for turning scattered work into bounded outputs",
    desc_en:
      "A reusable local system for browser lane governance, evidence ledgers, Codex execution packets, quality gates, and delivery notes. It proves operational thinking beyond one-off creative output.",
    desc_ar:
      "A reusable local system for browser lane governance, evidence ledgers, Codex execution packets, quality gates, and delivery notes. It proves operational thinking beyond one-off creative output.",
    url_en: "/about/",
    url_ar: "/ar/about/",
    linkLabel_en: "Read the operating story",
    linkLabel_ar: "Read the operating story",
    tags_en: ["Codex Workflows", "Execution Systems", "Quality Gates"],
    tags_ar: ["Codex Workflows", "Execution Systems", "Quality Gates"],
    thumbLocal: "/media/hero/hero-poster.png",
    featured: true
  },
  {
    title_en: "Android App Development Pipeline",
    title_ar: "Android App Development Pipeline",
    type_en: "Apps / Product Development",
    type_ar: "Apps / Product Development",
    context_en: "Arabic-first apps and lightweight game projects in development",
    context_ar: "Arabic-first apps and lightweight game projects in development",
    desc_en:
      "A compact app-development lane that includes Android products, release preparation, store-readiness work, and lightweight game experiments. Public copy should emphasize product capability, not internal test counts.",
    desc_ar:
      "A compact app-development lane that includes Android products, release preparation, store-readiness work, and lightweight game experiments. Public copy should emphasize product capability, not internal test counts.",
    note_en: "Mention-only proof until more public store pages are available.",
    note_ar: "Mention-only proof until more public store pages are available.",
    tags_en: ["Android", "Apps", "Games"],
    tags_ar: ["Android", "Apps", "Games"],
    thumbLocal: "/media/work/book-to-deck-reconstructions.jpg",
    featured: false
  },
  {
    title_en: "Suno Original Music Experiments",
    title_ar: "Suno Original Music Experiments",
    type_en: "Music / Audio Experiments",
    type_ar: "Music / Audio Experiments",
    context_en: "Original AI music activity connected to Museum of Echoes",
    context_ar: "Original AI music activity connected to Museum of Echoes",
    desc_en:
      "Suno activity and original song experiments support the broader music-archive direction, including tracks surfaced in the authenticated creator lane such as Almost Remembered Room, الخيل والليل, YA, and Canaanite Palestinian.",
    desc_ar:
      "Suno activity and original song experiments support the broader music-archive direction, including tracks surfaced in the authenticated creator lane such as Almost Remembered Room, الخيل والليل, YA, and Canaanite Palestinian.",
    url: "https://museum-of-echoes.pages.dev/",
    linkLabel_en: "Open music archive",
    linkLabel_ar: "Open music archive",
    tags_en: ["Suno", "Original Music", "Audio Archive"],
    tags_ar: ["Suno", "Original Music", "Audio Archive"],
    thumbLocal: "/media/museum/archive-of-jasmine.jpg",
    featured: false
  }
];

const localizeWorkItem = (item: WorkSeedItem, locale: Localized): WorkItem => ({
  ...item,
  title: locale === "ar" ? item.title_ar : item.title_en,
  context: locale === "ar" ? item.context_ar : item.context_en,
  description: locale === "ar" ? item.desc_ar : item.desc_en,
  url: locale === "ar" ? item.url_ar ?? item.url : item.url_en ?? item.url,
  tags: locale === "ar" ? item.tags_ar : item.tags_en,
  type: locale === "ar" ? item.type_ar : item.type_en,
  linkLabel: locale === "ar" ? item.linkLabel_ar : item.linkLabel_en,
  secondaryLabel: locale === "ar" ? item.secondaryLabel_ar : item.secondaryLabel_en,
  note: locale === "ar" ? item.note_ar : item.note_en,
  featured: item.featured ?? false,
  thumbRemoteCandidates: item.thumbRemoteCandidates ?? []
});

export const workItemsEn: WorkItem[] = workSeed.map((item) => localizeWorkItem(item, "en"));
export const workItemsAr: WorkItem[] = workSeed.map((item) => localizeWorkItem(item, "ar"));
export const featuredWorkEn: WorkItem[] = workItemsEn.filter((item) => item.featured);
export const featuredWorkAr: WorkItem[] = workItemsAr.filter((item) => item.featured);

export const pinterestPlaceholderEn = {
  title: "Pinterest Boards (Visual Reference Library)",
  description: "A living reference layer for campaign tone, wardrobe, composition, and cultural texture.",
  url: "https://www.pinterest.com/TamerCreates/"
};

export const pinterestPlaceholderAr = {
  title: "لوحات Pinterest",
  description: "طبقة مراجع بصرية متجددة تساعد على ضبط النبرة والملابس والتكوين والإحساس الثقافي.",
  url: "https://www.pinterest.com/TamerCreates/"
};
