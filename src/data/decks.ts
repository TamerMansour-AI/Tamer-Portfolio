type DeckPreviewSeed = {
  src: string;
  label_en: string;
  label_ar: string;
};

type DeckSeed = {
  slug: string;
  title_en: string;
  title_ar: string;
  category_en: string;
  category_ar: string;
  context_en: string;
  context_ar: string;
  desc_en: string;
  desc_ar: string;
  note_en: string;
  note_ar: string;
  tags_en: string[];
  tags_ar: string[];
  cover: string;
  previews: DeckPreviewSeed[];
};

type Localized = "en" | "ar";

export type DeckItem = {
  slug: string;
  title: string;
  category: string;
  context: string;
  description: string;
  note: string;
  tags: string[];
  cover: string;
  previews: Array<{
    src: string;
    label: string;
  }>;
};

const deckSeed: DeckSeed[] = [
  {
    slug: "digital-prometheus",
    title_en: "Digital Prometheus",
    title_ar: "بروميثيوس الرقمي",
    category_en: "AI-Assisted Knowledge Design",
    category_ar: "تصميم معرفة بمساعدة الذكاء الاصطناعي",
    context_en: "Myth, technology, and caution translated into a visual briefing.",
    context_ar: "الأسطورة والتقنية والتحذير تتحول إلى إحاطة بصرية منظمة.",
    desc_en:
      "A deck reconstruction that compresses a dense argument about invention, power, and technological overreach into a crisp sequence of visual decisions.",
    desc_ar:
      "إعادة بناء تحول مادة كثيفة عن الاختراع والسلطة وتجاوز التقنية إلى تسلسل بصري واضح ومركز.",
    note_en: "Shown as a public sample of book-to-deck visual thinking.",
    note_ar: "معروض كعينة عامة من تحويل الكتب إلى أنظمة عرض بصرية.",
    tags_en: ["Book Reconstruction", "AI Literacy", "Visual Briefing"],
    tags_ar: ["إعادة بناء كتاب", "وعي بالذكاء الاصطناعي", "إحاطة بصرية"],
    cover: "/media/decks/digital-prometheus/cover.jpg",
    previews: [
      { src: "/media/decks/digital-prometheus/cover.jpg", label_en: "Cover slide", label_ar: "شريحة الغلاف" },
      { src: "/media/decks/digital-prometheus/spread.jpg", label_en: "Interior system slide", label_ar: "شريحة داخلية بنظام بصري" }
    ]
  },
  {
    slug: "the-prince-dossier",
    title_en: "The Prince Dossier",
    title_ar: "الملف السري للأمير",
    category_en: "Editorial Teaching System",
    category_ar: "نظام تعليمي تحريري",
    context_en: "Statecraft reframed as a premium dossier-style learning format.",
    context_ar: "فن الحكم يعاد تقديمه كصيغة تعلم على هيئة ملف تحريري فاخر.",
    desc_en:
      "A reconstruction that turns political philosophy into a cinematic dossier, using archival cues and controlled pacing to make strategic ideas easier to scan and retain.",
    desc_ar:
      "إعادة بناء تحول الفلسفة السياسية إلى ملف سينمائي منظم، بإشارات أرشيفية وإيقاع مضبوط يجعل الأفكار الاستراتيجية أسهل في القراءة والتذكر.",
    note_en: "Included as proof of turning abstract ideas into a coherent teaching surface.",
    note_ar: "مدرج كدليل على تحويل الأفكار المجردة إلى سطح تعليمي واضح.",
    tags_en: ["Political Philosophy", "Dossier Format", "Teaching Design"],
    tags_ar: ["فلسفة سياسية", "صيغة ملف", "تصميم تعليمي"],
    cover: "/media/decks/the-prince-dossier/cover.jpg",
    previews: [
      { src: "/media/decks/the-prince-dossier/cover.jpg", label_en: "Cover slide", label_ar: "شريحة الغلاف" },
      { src: "/media/decks/the-prince-dossier/spread.jpg", label_en: "Principle slide", label_ar: "شريحة مبدأ رئيسي" }
    ]
  },
  {
    slug: "the-liberty-manifesto",
    title_en: "The Liberty Manifesto",
    title_ar: "بيان الحرية",
    category_en: "Structured Argument Design",
    category_ar: "تصميم حجة منظمة",
    context_en: "Political theory translated into a bold editorial visual system.",
    context_ar: "النظرية السياسية تتحول إلى نظام بصري تحريري جريء.",
    desc_en:
      "A manifesto-style deck that shows how dense philosophical material can be restructured into a legible, high-contrast teaching format without losing tension or point of view.",
    desc_ar:
      "عرض بصري على هيئة بيان يوضح كيف يمكن إعادة تنظيم مادة فلسفية كثيفة في صيغة تعليمية واضحة وعالية التباين من دون فقدان التوتر أو وجهة النظر.",
    note_en: "Included because it adds a stronger editorial contrast to the deck set.",
    note_ar: "مدرج لأنه يضيف تباينًا تحريريًا أقوى إلى مجموعة العروض.",
    tags_en: ["Political Theory", "Editorial Layout", "Argument Mapping"],
    tags_ar: ["نظرية سياسية", "تخطيط تحريري", "بناء الحجة"],
    cover: "/media/decks/the-liberty-manifesto/cover.jpg",
    previews: [
      { src: "/media/decks/the-liberty-manifesto/cover.jpg", label_en: "Cover slide", label_ar: "شريحة الغلاف" },
      { src: "/media/decks/the-liberty-manifesto/spread.jpg", label_en: "Argument slide", label_ar: "شريحة بناء الحجة" }
    ]
  },
  {
    slug: "the-newt-file",
    title_en: "The Newt File",
    title_ar: "ملف نيوت",
    category_en: "Speculative Visual Dossier",
    category_ar: "ملف بصري تخييلي",
    context_en: "A fictional premise shaped into a dossier-style slide sequence.",
    context_ar: "فكرة تخييلية تتحول إلى تسلسل شرائح بأسلوب الملفات.",
    desc_en:
      "A visual depiction project that turns a strange fictional premise into a dossier-style slide sequence, mixing maps, archival surfaces, character framing, and dramatic copy.",
    desc_ar:
      "مشروع تصوير بصري يحول فكرة تخييلية غريبة إلى تسلسل شرائح بأسلوب الملفات، مع خرائط وملمس أرشيفي وتأطير شخصيات ونص درامي.",
    note_en: "The public site uses only selected slide exports suitable for portfolio viewing.",
    note_ar: "يستخدم الموقع العام شرائح مختارة فقط مناسبة للعرض داخل البورتفوليو.",
    tags_en: ["Visual Fiction", "Speculative Dossier", "Story System"],
    tags_ar: ["تخييل بصري", "ملف تخييلي", "نظام سرد"],
    cover: "/media/decks/the-newt-file/cover.jpg",
    previews: [
      { src: "/media/decks/the-newt-file/cover.jpg", label_en: "Cover dossier slide", label_ar: "شريحة غلاف الملف" },
      { src: "/media/decks/the-newt-file/spread.jpg", label_en: "World and conflict slide", label_ar: "شريحة العالم والصراع" },
      { src: "/media/decks/the-newt-file/principle.jpg", label_en: "Dossier principle slide", label_ar: "شريحة مبدأ الملف" }
    ]
  }
];

const localizeDeck = (item: DeckSeed, locale: Localized): DeckItem => ({
  slug: item.slug,
  title: locale === "ar" ? item.title_ar : item.title_en,
  category: locale === "ar" ? item.category_ar : item.category_en,
  context: locale === "ar" ? item.context_ar : item.context_en,
  description: locale === "ar" ? item.desc_ar : item.desc_en,
  note: locale === "ar" ? item.note_ar : item.note_en,
  tags: locale === "ar" ? item.tags_ar : item.tags_en,
  cover: item.cover,
  previews: item.previews.map((preview) => ({
    src: preview.src,
    label: locale === "ar" ? preview.label_ar : preview.label_en
  }))
});

export const deckItemsEn: DeckItem[] = deckSeed.map((item) => localizeDeck(item, "en"));
export const deckItemsAr: DeckItem[] = deckSeed.map((item) => localizeDeck(item, "ar"));
