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
    title_ar: "بروميثيوس الحديث",
    category_en: "AI-Assisted Knowledge Design",
    category_ar: "تصميم معرفة بمساعدة الذكاء الاصطناعي",
    context_en: "Myth, technology, and caution translated into a visual briefing",
    context_ar: "الأسطورة والتقنية والتحذير تتحول إلى إحاطة بصرية منظمة",
    desc_en:
      "A deck reconstruction that compresses a dense argument about invention, power, and technological overreach into a crisp sequence of visual decisions.",
    desc_ar:
      "إعادة بناء لكتاب كثيف تحوّل حجته حول الاختراع والسلطة وتجاوز التكنولوجيا للحكمة إلى تسلسل بصري واضح ومركز.",
    note_en: "Preview shown from the original Arabic export. No rebuilt English slide edition was created in this pass.",
    note_ar: "المعاينة المعروضة هنا من التصدير العربي الأصلي. لم تُنشأ نسخة شرائح إنجليزية جديدة في هذا المسار.",
    tags_en: ["Book Reconstruction", "AI Literacy", "Visual Briefing"],
    tags_ar: ["إعادة بناء كتاب", "محو أمية الذكاء الاصطناعي", "إحاطة بصرية"],
    cover: "/media/decks/digital-prometheus/cover.jpg",
    previews: [
      {
        src: "/media/decks/digital-prometheus/cover.jpg",
        label_en: "Cover slide",
        label_ar: "شريحة الغلاف"
      },
      {
        src: "/media/decks/digital-prometheus/spread.jpg",
        label_en: "Interior system slide",
        label_ar: "شريحة داخلية بنظام بصري"
      }
    ]
  },
  {
    slug: "the-prince-dossier",
    title_en: "The Prince Dossier",
    title_ar: "الملف السري للأمير",
    category_en: "Editorial Teaching System",
    category_ar: "نظام تعليمي تحريري",
    context_en: "Statecraft reframed as a premium dossier-style learning format",
    context_ar: "فن الحكم يعاد تقديمه كصيغة تعلم على هيئة ملف تحريري فاخر",
    desc_en:
      "A reconstruction that turns political philosophy into a cinematic dossier, using archival cues and controlled pacing to make strategic ideas easier to scan and retain.",
    desc_ar:
      "إعادة بناء تحول الفلسفة السياسية إلى ملف سينمائي منظم، باستخدام إشارات أرشيفية وإيقاع مضبوط يجعل الأفكار الاستراتيجية أسهل في القراءة والتذكر.",
    note_en: "Preview shown from the original Arabic export. The value here is the visual teaching system, not a public NotebookLM link.",
    note_ar: "المعاينة هنا من التصدير العربي الأصلي. القيمة هنا في النظام التعليمي البصري لا في رابط NotebookLM عام.",
    tags_en: ["Political Philosophy", "Dossier Format", "Teaching Design"],
    tags_ar: ["فلسفة سياسية", "صيغة ملف", "تصميم تعليمي"],
    cover: "/media/decks/the-prince-dossier/cover.jpg",
    previews: [
      {
        src: "/media/decks/the-prince-dossier/cover.jpg",
        label_en: "Cover slide",
        label_ar: "شريحة الغلاف"
      },
      {
        src: "/media/decks/the-prince-dossier/spread.jpg",
        label_en: "Principle slide",
        label_ar: "شريحة مبدأ رئيسي"
      }
    ]
  },
  {
    slug: "the-liberty-manifesto",
    title_en: "The Liberty Manifesto",
    title_ar: "عن الحرية",
    category_en: "Structured Argument Design",
    category_ar: "تصميم حجج منظمة",
    context_en: "Political theory translated into a bold editorial visual system",
    context_ar: "النظرية السياسية تتحول إلى نظام بصري تحريري جريء",
    desc_en:
      "A manifesto-style deck that shows how dense philosophical material can be restructured into a legible, high-contrast teaching format without losing tension or point of view.",
    desc_ar:
      "عرض بصري على هيئة بيان يوضح كيف يمكن إعادة تنظيم مادة فلسفية كثيفة في صيغة تعليمية واضحة وعالية التباين من دون فقدان التوتر أو وجهة النظر.",
    note_en: "Preview shown from the original Arabic export. Included because it adds a stronger editorial contrast to the deck set.",
    note_ar: "المعاينة من التصدير العربي الأصلي. أُدرجت لأنها تضيف تباينا تحريريا أقوى إلى مجموعة العروض.",
    tags_en: ["Political Theory", "Editorial Layout", "Argument Mapping"],
    tags_ar: ["نظرية سياسية", "تخطيط تحريري", "بناء الحجة"],
    cover: "/media/decks/the-liberty-manifesto/cover.jpg",
    previews: [
      {
        src: "/media/decks/the-liberty-manifesto/cover.jpg",
        label_en: "Cover slide",
        label_ar: "شريحة الغلاف"
      },
      {
        src: "/media/decks/the-liberty-manifesto/spread.jpg",
        label_en: "Argument slide",
        label_ar: "شريحة بناء الحجة"
      }
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
