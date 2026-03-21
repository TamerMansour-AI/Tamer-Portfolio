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
