const youtubeThumbCandidates = (videoId: string) => [
  `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
];

const extractVideoId = (url: string) => {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      if (id) return id;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const watchId = parsed.searchParams.get("v");
      if (watchId) return watchId;

      const parts = parsed.pathname.split("/").filter(Boolean);
      const marker = parts.findIndex((part) => part === "embed" || part === "shorts" || part === "v");
      if (marker !== -1 && parts[marker + 1]) return parts[marker + 1];
    }
  } catch {
    // fallback parser below
  }

  const match =
    url.match(/[?&]v=([a-zA-Z0-9_-]{11})/) ??
    url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/) ??
    url.match(/\/(embed|shorts|v)\/([a-zA-Z0-9_-]{11})/);

  if (!match) throw new Error(`Cannot parse YouTube video ID from URL: ${url}`);
  return match[2] ?? match[1];
};

type WorkSeedItem = {
  title_en: string;
  title_ar: string;
  type_en: string;
  type_ar: string;
  context_en: string;
  context_ar: string;
  desc_en: string;
  desc_ar: string;
  url: string;
  tags_en: string[];
  tags_ar: string[];
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
  url: string;
  tags: string[];
  type: string;
  featured: boolean;
  videoId: string;
  thumbLocal: string;
  thumbRemoteCandidates: string[];
};

const workSeed: WorkSeedItem[] = [
  {
    title_en: "Unfinished Drawing, Unfinished Childhood",
    title_ar: "رسم غير مكتمل، طفولة غير مكتملة",
    type_en: "AI Visual Storytelling",
    type_ar: "سرد بصري بالذكاء الاصطناعي",
    context_en: "Bilingual narrative retelling",
    context_ar: "إعادة سرد بصري ثنائية اللغة",
    desc_en: "A short AI film built around interrupted childhood, memory, and the emotional residue of return.",
    desc_ar: "فيلم قصير بالذكاء الاصطناعي يتمحور حول الطفولة المقطوعة والذاكرة والأثر العاطفي للعودة.",
    url: "https://youtu.be/lqVwVUdH6Hk?si=bFrBQseef10kjFxG",
    tags_en: ["Narrative Film", "Memory", "Palestine"],
    tags_ar: ["فيلم سردي", "ذاكرة", "فلسطين"],
    featured: true
  },
  {
    title_en: "I Am the Land",
    title_ar: "أنا الأرض",
    type_en: "Poetic Film Essay",
    type_ar: "قصيدة فيلمية",
    context_en: "Voice-led visual poem",
    context_ar: "قصيدة بصرية بصوت مرافق",
    desc_en:
      "A voiced visual poem on land, memory, and Palestinian continuity, shaped with cinematic restraint.",
    desc_ar:
      "قصيدة بصرية عن الأرض والذاكرة والاستمرارية الفلسطينية، مصاغة بإيقاع سينمائي هادئ.",
    url: "https://youtu.be/dqGQJQ1jvHg?list=TLGGX1bvsOfqR0swOTAyMjAyNg",
    tags_en: ["Visual Poem", "Land", "Memory"],
    tags_ar: ["قصيدة بصرية", "أرض", "ذاكرة"],
    featured: true
  },
  {
    title_en: "Moving Roots",
    title_ar: "جذور متحركة",
    type_en: "Narrative Identity Essay",
    type_ar: "مقال بصري عن الهوية",
    context_en: "Cultural essay short",
    context_ar: "مقال سردي قصير",
    desc_en:
      "A concise visual essay exploring identity, movement, and rootedness across time.",
    desc_ar:
      "مقال بصري مكثف يستكشف الهوية والحركة والتجذر عبر الزمن.",
    url: "https://youtu.be/ft0zRjyBNQ4?list=TLGGjNIzCLeVJBAwOTAyMjAyNg",
    tags_en: ["Identity", "History", "Essay Film"],
    tags_ar: ["هوية", "تاريخ", "فيلم مقالي"]
  },
  {
    title_en: "Paintings Brought to Life",
    title_ar: "لوحات تنبض بالحياة",
    type_en: "Educational Format Design",
    type_ar: "صيغة تعليمية بصرية",
    context_en: "Animated art-history countdown",
    context_ar: "عد تنازلي متحرك لتاريخ الفن",
    desc_en:
      "An animated countdown format that turns art history into clear, watchable storytelling.",
    desc_ar:
      "صيغة عد تنازلي متحركة تحول تاريخ الفن إلى سرد واضح وسهل المشاهدة.",
    url: "https://youtu.be/4HPt1qOpIw0?list=TLGGVDWoj-0-l0cwOTAyMjAyNg",
    tags_en: ["Art History", "Animation", "Education"],
    tags_ar: ["تاريخ الفن", "تحريك", "تعليم"],
    featured: true
  },
  {
    title_en: "Palestinian Identity Debate",
    title_ar: "الفلسطيني… جذر قديم أم هوية جديدة؟",
    type_en: "Workshop-Style Dialogue",
    type_ar: "حوار بأسلوب ورشة",
    context_en: "Structured AI dialogue",
    context_ar: "حوار منظم بالذكاء الاصطناعي",
    desc_en:
      "A structured dialogue format that turns a complex identity question into a clear, teachable viewing experience.",
    desc_ar:
      "صيغة حوارية منظمة تحول سؤال الهوية المعقد إلى تجربة مشاهدة واضحة وقابلة للنقاش.",
    url: "https://youtu.be/QquQdE2YZGU?list=TLGGUvcpT0katqwwOTAyMjAyNg",
    tags_en: ["Dialogue", "Identity", "Learning"],
    tags_ar: ["حوار", "هوية", "تعلم"],
    featured: true
  }
];

const localizeWorkItem = (item: WorkSeedItem, locale: Localized): WorkItem => {
  const videoId = extractVideoId(item.url);

  return {
    ...item,
    title: locale === "ar" ? item.title_ar : item.title_en,
    context: locale === "ar" ? item.context_ar : item.context_en,
    description: locale === "ar" ? item.desc_ar : item.desc_en,
    tags: locale === "ar" ? item.tags_ar : item.tags_en,
    type: locale === "ar" ? item.type_ar : item.type_en,
    videoId,
    featured: item.featured ?? false,
    thumbLocal: `/media/youtube/${videoId}.jpg`,
    thumbRemoteCandidates: youtubeThumbCandidates(videoId)
  };
};

export const workItemsEn: WorkItem[] = workSeed.map((item) => localizeWorkItem(item, "en"));
export const workItemsAr: WorkItem[] = workSeed.map((item) => localizeWorkItem(item, "ar"));
export const featuredWorkEn: WorkItem[] = workItemsEn.filter((item) => item.featured);
export const featuredWorkAr: WorkItem[] = workItemsAr.filter((item) => item.featured);

export type StudioSignal = {
  kind: string;
  title: string;
  copy: string;
};

export const studioSignalsEn: StudioSignal[] = [
  {
    kind: "Narrative Adaptation",
    title: "Men in the Sun Retelling",
    copy: "Bilingual visual retelling work developed in English and Arabic treatments, focused on tone, memory, and cinematic restraint."
  },
  {
    kind: "Concept Trailer",
    title: "Ash Princes / أطياف الأرض",
    copy: "Trailer development work around أمراء الرماد, shaped as a mood-led concept piece with atmosphere and world-building at the center."
  },
  {
    kind: "Knowledge Design",
    title: "Book-to-Deck Reconstructions",
    copy: "Structured slide-deck transformations such as Digital Prometheus and The Prince Dossier that turn dense material into visual briefings."
  }
];

export const studioSignalsAr: StudioSignal[] = [
  {
    kind: "إعادة سرد",
    title: "رجال في الشمس",
    copy: "تجارب إعادة سرد بصري ثنائية اللغة بالإنجليزية والعربية، تركز على النبرة والذاكرة والانضباط السينمائي."
  },
  {
    kind: "تريلر مفاهيمي",
    title: "أمراء الرماد / أطياف الأرض",
    copy: "تطوير تريلر مفاهيمي حول أمراء الرماد بوصفه قطعة مزاجية تقودها الأجواء وبناء العالم البصري."
  },
  {
    kind: "تصميم معرفة",
    title: "تحويل الكتب إلى عروض",
    copy: "إعادة بناء الكتب في عروض شرائح منظمة مثل Digital Prometheus وThe Prince Dossier لتحويل المادة الكثيفة إلى عرض بصري واضح."
  }
];

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
