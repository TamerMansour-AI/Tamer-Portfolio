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
    context_en: "Original music shaped into rooms, collections, and guided discovery paths",
    context_ar: "موسيقى أصلية تتحول إلى غرف ومجموعات ومسارات اكتشاف",
    desc_en:
      "A bilingual listening archive where original music becomes a public product experience. I shaped the product logic, interface direction, curation, and release structure.",
    desc_ar:
      "أرشيف استماع ثنائي اللغة تتحول فيه الموسيقى الأصلية إلى تجربة منتج عامة. صممت منطق المنتج، اتجاه الواجهة، التحرير، وبنية الإصدار.",
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
    title_en: "Literary Reimaginings",
    title_ar: "إعادة تخيّل الروايات بصريًا",
    type_en: "AI Visual Storytelling",
    type_ar: "سرد بصري بالذكاء الاصطناعي",
    context_en: "Major novels reimagined through bilingual cinematic AI storytelling",
    context_ar: "روايات مؤثرة يعاد تقديمها بسرد سينمائي ثنائي اللغة",
    desc_en:
      "A visual adaptation series that reimagines significant novels in Arabic and English, preserving atmosphere instead of reducing the texts to summaries.",
    desc_ar:
      "سلسلة اقتباسات بصرية تعيد تقديم روايات مؤثرة بالعربية والإنجليزية، مع الحفاظ على الجو لا اختزال النص إلى ملخص.",
    url_en: "/literary-reimaginings/",
    url_ar: "/ar/literary-reimaginings/",
    linkLabel_en: "Open literary series",
    linkLabel_ar: "افتح السلسلة الأدبية",
    secondaryUrl: "https://youtu.be/66JuIoZ6wGY",
    secondaryLabel_en: "Watch an Arabic edition",
    secondaryLabel_ar: "شاهد إصدارًا عربيًا",
    tags_en: ["Literary Adaptation", "Arabic + English", "Cultural Storytelling"],
    tags_ar: ["اقتباس أدبي", "عربي + إنجليزي", "سرد ثقافي"],
    thumbLocal: "/media/literary/returning-to-haifa.svg",
    featured: true
  },
  {
    title_en: "Book-to-Deck Reconstructions",
    title_ar: "تحويل الكتب إلى عروض بصرية",
    type_en: "Knowledge Design",
    type_ar: "تصميم معرفة",
    context_en: "Dense books rebuilt as visual briefings, teaching decks, and dossiers",
    context_ar: "كتب كثيفة يعاد بناؤها كإحاطات بصرية وعروض تعليمية",
    desc_en:
      "Dense books and fictional premises rebuilt as visual systems for teaching, briefing, and structured communication.",
    desc_ar:
      "كتب وأفكار كثيفة يعاد بناؤها كأنظمة بصرية للتعليم والإحاطة والتواصل المنظم.",
    url_en: "/book-to-decks/",
    url_ar: "/ar/book-to-decks/",
    linkLabel_en: "Open deck previews",
    linkLabel_ar: "افتح معاينات العروض",
    tags_en: ["Book Reconstruction", "Visual Briefing", "Teaching Assets"],
    tags_ar: ["إعادة بناء كتب", "إحاطة بصرية", "مواد تعليمية"],
    thumbLocal: "/media/work/book-to-deck-reconstructions.jpg",
    featured: true
  },
  {
    title_en: "Primary Learning Visualised on TPT",
    title_ar: "Primary Learning Visualised على TPT",
    type_en: "Educational Product System",
    type_ar: "نظام منتجات تعليمية",
    context_en: "Marketplace-ready primary science resources built with a Qatar-based teaching partner",
    context_ar: "منتجات علوم للمرحلة الابتدائية بالتعاون مع شريك تعليمي في قطر",
    desc_en:
      "A public educational product lane: lesson packs, slides, worksheets, quick checks, answer keys, video previews, and teacher-ready marketplace packaging.",
    desc_ar:
      "مسار منتجات تعليمية عام: حزم دروس، شرائح، أوراق عمل، اختبارات قصيرة، مفاتيح إجابة، معاينات فيديو، وتغليف جاهز لسوق المعلمين.",
    url_en: "/education-products/",
    url_ar: "/ar/education-products/",
    linkLabel_en: "Open product page",
    linkLabel_ar: "افتح صفحة المنتجات",
    secondaryUrl: "https://www.teacherspayteachers.com/store/primary-learning-visualised",
    secondaryLabel_en: "Open TPT store",
    secondaryLabel_ar: "افتح متجر TPT",
    tags_en: ["TPT Store", "Primary Science", "Lesson Products"],
    tags_ar: ["متجر TPT", "علوم ابتدائية", "منتجات دروس"],
    thumbLocal: "/media/education-products/tpt-pushes-pulls-cover.jpg",
    featured: true
  },
  {
    title_en: "AI Verification Lab for Journalists",
    title_ar: "مختبر التحقق بالذكاء الاصطناعي للصحفيين",
    type_en: "Workshop Web App / Journalism Training",
    type_ar: "مختبر تدريبي للصحفيين",
    context_en: "A bilingual verification-learning system with guides, workflows, and a live web app",
    context_ar: "نظام تعلم ثنائي اللغة للتحقق وسير العمل الصحفي",
    desc_en:
      "A practical training lab for journalists covering AI risk, verification habits, source-grounded workflows, and workshop-ready materials.",
    desc_ar:
      "مختبر تدريبي عملي للصحفيين حول مخاطر الذكاء الاصطناعي، عادات التحقق، العمل القائم على المصادر، ومواد جاهزة للورشات.",
    url: "https://ai-verification-lab.pages.dev",
    linkLabel_en: "Open live lab",
    linkLabel_ar: "افتح المختبر الحي",
    tags_en: ["Journalism", "Verification", "Workshop Lab"],
    tags_ar: ["صحافة", "تحقق", "مختبر تدريبي"],
    thumbLocal: "/media/workshops/ai-verification-workflow-map.jpg",
    featured: true
  },
  {
    title_en: "Birzeit AI Fluency Lab 2026",
    title_ar: "مختبر الطلاقة بالذكاء الاصطناعي - بيرزيت 2026",
    type_en: "Interactive Workshop Lab",
    type_ar: "مختبر ورشة تفاعلي",
    context_en: "An Arabic-first system for practical AI fluency sessions",
    context_ar: "نظام عربي أولًا لجلسات طلاقة عملية في الذكاء الاصطناعي",
    desc_en:
      "An interactive workshop system with guided entry, activities, result screens, and live display moments for university students.",
    desc_ar:
      "نظام ورشة تفاعلي يتضمن دخولًا موجهًا، أنشطة، شاشات نتائج، ولحظات عرض حية لطلاب الجامعة.",
    url: "https://birzeit-ai-fluency-lab-2026.pages.dev",
    linkLabel_en: "Open live lab",
    linkLabel_ar: "افتح المختبر الحي",
    tags_en: ["Birzeit", "AI Fluency", "Interactive Lab"],
    tags_ar: ["بيرزيت", "طلاقة AI", "مختبر تفاعلي"],
    thumbLocal: "/media/workshops/birzeit-ai-fluency-home.jpg",
    featured: true
  },
  {
    title_en: "Original AI Music Videos",
    title_ar: "فيديوهات موسيقية أصلية بالذكاء الاصطناعي",
    type_en: "Music Video / AI Storytelling",
    type_ar: "فيديو موسيقي / سرد بصري",
    context_en: "Original songs shaped into cinematic visual releases",
    context_ar: "أغانٍ أصلية تتحول إلى إصدارات بصرية سينمائية",
    desc_en:
      "Original songs shaped into cinematic visual releases, with short previews on the site and full public videos on YouTube.",
    desc_ar:
      "أغانٍ أصلية تتحول إلى إصدارات بصرية سينمائية، مع معاينات قصيرة على الموقع وروابط كاملة على YouTube.",
    url_en: "/music-videos/",
    url_ar: "/ar/music-videos/",
    linkLabel_en: "Open music videos",
    linkLabel_ar: "افتح الفيديوهات الموسيقية",
    secondaryUrl: "https://www.youtube.com/channel/UCgqWTxre-zMvZo9kbugEGpw",
    secondaryLabel_en: "YouTube channel",
    secondaryLabel_ar: "قناة YouTube",
    tags_en: ["Original Music", "Cinematic AI", "Video Direction"],
    tags_ar: ["موسيقى أصلية", "AI سينمائي", "إخراج فيديو"],
    thumbLocal: "/media/music-videos/my-way-thumb.jpg",
    featured: true
  },
  {
    title_en: "Anbiya Visuals AI Film Production",
    title_ar: "Anbiya Visuals - إنتاج أفلام قصصية",
    type_en: "AI Story-Film Production",
    type_ar: "إنتاج أفلام قصصية بالذكاء الاصطناعي",
    context_en: "Selected excerpts from full cinematic story films for different prophet stories",
    context_ar: "مقتطفات من أفلام قصصية كاملة لقصص أنبياء مختلفة",
    desc_en:
      "Selected excerpts from complete AI-assisted story films, showing worldbuilding, scene direction, pacing, atmosphere, and continuity.",
    desc_ar:
      "مقتطفات مختارة من أفلام قصصية كاملة تظهر بناء العالم البصري، إخراج المشاهد، الإيقاع، الجو، والاستمرارية.",
    url_en: "/client-ai-production/",
    url_ar: "/ar/client-ai-production/",
    linkLabel_en: "Open production case",
    linkLabel_ar: "افتح مثال الإنتاج",
    note_en: "The page shows selected excerpts from larger story films.",
    note_ar: "تعرض الصفحة مقتطفات مختارة من أفلام قصصية أكبر.",
    tags_en: ["Story Films", "AI Production", "Creative Direction"],
    tags_ar: ["أفلام قصصية", "إنتاج AI", "إخراج إبداعي"],
    thumbLocal: "/media/client-ai-production/anbiya-visuals-reel-poster.jpg",
    featured: true
  },
  {
    title_en: "Atyaf Al Ard",
    title_ar: "أطياف الأرض",
    type_en: "Cinematic Heritage Storytelling",
    type_ar: "سرد تراثي سينمائي",
    context_en: "A heritage-driven story world and concept trailer",
    context_ar: "عالم سردي تراثي وتريلر مفاهيمي",
    desc_en:
      "A heritage-driven story world and trailer concept that brings atmosphere, memory, and cultural imagination into a public web presence.",
    desc_ar:
      "عالم سردي تراثي وتريلر مفاهيمي يربط الذاكرة والجو والخيال الثقافي بحضور رقمي عام.",
    url: "https://tamermansour-ai.github.io/atyaf-al-ard-website/",
    linkLabel_en: "Open project site",
    linkLabel_ar: "افتح موقع المشروع",
    secondaryUrl: "https://www.facebook.com/profile.php?id=61574424444648",
    secondaryLabel_en: "Facebook page",
    secondaryLabel_ar: "صفحة Facebook",
    tags_en: ["Heritage", "Worldbuilding", "Trailer Concept"],
    tags_ar: ["تراث", "بناء عالم", "تريلر مفاهيمي"],
    thumbLocal: "/media/work/princes-of-ashes.jpg",
    featured: false
  },
  {
    title_en: "Palestine Visual Lab",
    title_ar: "Palestine Visual Lab",
    type_en: "Web Product / Visual Tool",
    type_ar: "منتج ويب / أداة بصرية",
    context_en: "A Palestinian-inspired visual culture and prompt-tool prototype",
    context_ar: "نموذج أداة بصرية مستوحى من الثقافة الفلسطينية",
    desc_en:
      "A visual culture and prompt-tool prototype for Palestinian-inspired posters, patterns, stickers, and creative reference systems.",
    desc_ar:
      "نموذج أداة ومنتج بصري مستوحى من الثقافة الفلسطينية للملصقات، النقوش، الملصقات الرقمية، وأنظمة المراجع الإبداعية.",
    url: "https://palestine-visual-lab.pages.dev/",
    linkLabel_en: "Open live website",
    linkLabel_ar: "افتح الموقع الحي",
    tags_en: ["Web App", "Palestinian Visual Culture", "Prompt Tools"],
    tags_ar: ["تطبيق ويب", "ثقافة بصرية فلسطينية", "أدوات أوامر"],
    thumbLocal: "/media/pinterest/boards/palestinian-thobes.jpg",
    featured: false
  },
  {
    title_en: "AI Training and Workshop Systems",
    title_ar: "أنظمة تدريب وورشات بالذكاء الاصطناعي",
    type_en: "Training / Workshop Design",
    type_ar: "تصميم تدريب وورشات",
    context_en: "Practical AI sessions for media, artists, students, parents, and teams",
    context_ar: "جلسات عملية للإعلام والفنانين والطلاب والأهالي والفرق",
    desc_en:
      "Applied AI training work covering journalism workflows, artist visual development, parent learning support, presentation systems, and responsible review habits.",
    desc_ar:
      "عمل تدريبي عملي يغطي سير عمل الصحافة، التطوير البصري للفنانين، دعم تعلم الأهالي، أنظمة العروض، وعادات المراجعة المسؤولة.",
    url_en: "/services/",
    url_ar: "/ar/services/",
    linkLabel_en: "See service paths",
    linkLabel_ar: "شاهد مسارات الخدمات",
    tags_en: ["AI Training", "Responsible Review", "Learning Systems"],
    tags_ar: ["تدريب AI", "مراجعة مسؤولة", "أنظمة تعلم"],
    thumbLocal: "/media/services/services-en.png",
    featured: false
  },
  {
    title_en: "Sakina App",
    title_ar: "تطبيق سكينة",
    type_en: "Android App / Spiritual Reflection",
    type_ar: "تطبيق Android / تأمل روحاني",
    context_en: "Arabic-first Quranic emotional reflection companion",
    context_ar: "رفيق عربي أولًا للتأمل القرآني الحساس عاطفيًا",
    desc_en:
      "An Android app project for emotionally sensitive Quranic reflection moments, showing Arabic-first product thinking and calm interaction design.",
    desc_ar:
      "مشروع تطبيق Android للتأمل القرآني الحساس عاطفيًا، يوضح تفكيرًا منتجيًا عربيًا أولًا وتصميم تفاعل هادئ.",
    url: "https://www.instagram.com/ramallahlabs/",
    linkLabel_en: "Ramallah Labs updates",
    linkLabel_ar: "تحديثات Ramallah Labs",
    note_en: "Mentioned lightly until stronger public store links are available.",
    note_ar: "يُذكر بخفة إلى أن تتوفر روابط متجر عامة أقوى.",
    tags_en: ["Android", "Arabic Product", "Ramallah Labs"],
    tags_ar: ["Android", "منتج عربي", "Ramallah Labs"],
    thumbLocal: "/media/hero/hero-poster.png",
    featured: false
  },
  {
    title_en: "Flappy Flip",
    title_ar: "Flappy Flip",
    type_en: "Casual Game / Ramallah Labs",
    type_ar: "لعبة خفيفة / Ramallah Labs",
    context_en: "A lightweight reflex game in the Ramallah Labs pipeline",
    context_ar: "لعبة رد فعل خفيفة ضمن مسار Ramallah Labs",
    desc_en:
      "A lightweight casual game framed around quick reflex play, short-form gameplay clips, and score-chasing loops.",
    desc_ar:
      "لعبة خفيفة مبنية حول رد الفعل السريع، مقاطع لعب قصيرة، وحلقات محاولة تحسين النتيجة.",
    url: "https://www.instagram.com/ramallahlabs/p/DYDQDhkDfRp/",
    linkLabel_en: "Open launch post",
    linkLabel_ar: "افتح منشور الإطلاق",
    note_en: "Mentioned lightly until a stronger public store link is available.",
    note_ar: "يُذكر بخفة إلى أن يتوفر رابط متجر عام أقوى.",
    tags_en: ["Game", "Android", "Short-form Marketing"],
    tags_ar: ["لعبة", "Android", "تسويق قصير"],
    thumbLocal: "/media/work/paintings-brought-to-life.jpg",
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
  title: "Pinterest Boards",
  description: "A supporting visual research layer for tone, wardrobe, composition, and cultural texture.",
  url: "https://www.pinterest.com/TamerCreates/"
};

export const pinterestPlaceholderAr = {
  title: "لوحات Pinterest",
  description: "طبقة مراجع بصرية مساعدة للجو والملابس والتكوين والإحساس الثقافي.",
  url: "https://www.pinterest.com/TamerCreates/"
};
