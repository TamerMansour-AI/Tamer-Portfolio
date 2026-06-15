export type ProofMetric = {
  value: string;
  label: string;
  detail: string;
};

export type ProofItem = {
  title: string;
  category: string;
  summary: string;
  href?: string;
  linkLabel?: string;
};

export const proofMetricsEn: ProofMetric[] = [
  {
    value: "AI films",
    label: "Cinematic story production",
    detail: "Selected excerpts from longer story films, literary adaptations, and original music-video releases."
  },
  {
    value: "Live labs",
    label: "Workshop systems",
    detail: "AI Verification Lab and Birzeit AI Fluency Lab show training that becomes a practical web environment."
  },
  {
    value: "TPT",
    label: "Educational products",
    detail: "Primary science lesson packs with slides, worksheets, checks, answer keys, videos, and marketplace packaging."
  },
  {
    value: "Bilingual",
    label: "Cultural and knowledge products",
    detail: "Music archives, literary reimaginings, book-to-deck systems, and Arabic/English digital experiences."
  }
];

export const proofMetricsAr: ProofMetric[] = [
  {
    value: "أفلام AI",
    label: "إنتاج قصصي سينمائي",
    detail: "مقتطفات مختارة من أفلام قصصية أطول، واقتباسات أدبية، وإصدارات موسيقية بصرية أصلية."
  },
  {
    value: "مختبرات حية",
    label: "أنظمة ورشات وتعلم",
    detail: "مختبر التحقق ومختبر بيرزيت يوضحان كيف يتحول التدريب إلى بيئة ويب عملية ومخرجات قابلة للمعاينة."
  },
  {
    value: "TPT",
    label: "منتجات تعليمية",
    detail: "حزم علوم للمرحلة الأساسية مع شرائح، أوراق عمل، اختبارات، مفاتيح إجابة، فيديوهات، وتغليف مناسب للمنصة."
  },
  {
    value: "ثنائي اللغة",
    label: "منتجات ثقافية ومعرفية",
    detail: "أرشيفات موسيقية، إعادة تخيّل أدبي، تحويل كتب إلى عروض، وتجارب رقمية بالعربية والإنجليزية."
  }
];

export const platformProofEn: ProofItem[] = [
  {
    title: "Public products and platforms",
    category: "Products / platforms",
    summary:
      "Museum of Echoes, Palestine Visual Lab, Atyaf Al Ard, and live workshop labs show creative ideas becoming public-facing digital experiences.",
    href: "/work/",
    linkLabel: "Open selected work"
  },
  {
    title: "Selected creative production",
    category: "AI film / video",
    summary:
      "Anbiya Visuals, Literary Reimaginings, and original music videos show story direction, image systems, scene rhythm, and cinematic continuity.",
    href: "/client-ai-production/",
    linkLabel: "Open production case"
  },
  {
    title: "Workshops and training systems",
    category: "Training / labs",
    summary:
      "AI Verification Lab, Birzeit AI Fluency Lab, and delivered training lanes show practical AI learning for media, education, cultural, and professional audiences.",
    href: "/workshops/",
    linkLabel: "See workshop proof"
  },
  {
    title: "Educational products and knowledge design",
    category: "Education / knowledge",
    summary:
      "TPT lesson packs and book-to-deck reconstructions show how dense material becomes clear visual learning assets.",
    href: "/education-products/",
    linkLabel: "Open education products"
  },
  {
    title: "Music, audio, and video releases",
    category: "Music / video",
    summary:
      "Original music videos and Museum of Echoes show audio-to-visual direction, release packaging, and bilingual archive thinking.",
    href: "/music-videos/",
    linkLabel: "Open music videos"
  },
  {
    title: "Supporting visual research",
    category: "Research / references",
    summary:
      "Pinterest boards support pre-production direction: tone, wardrobe, composition, texture, and visual references.",
    href: "https://www.pinterest.com/TamerCreates/",
    linkLabel: "Open Pinterest boards"
  }
];

export const platformProofAr: ProofItem[] = [
  {
    title: "منتجات ومنصات عامة",
    category: "منتجات / منصات",
    summary:
      "متحف الأصداء، Palestine Visual Lab، أطياف الأرض، ومختبرات الورشات توضح كيف تتحول الأفكار الإبداعية إلى تجارب رقمية عامة.",
    href: "/ar/work/",
    linkLabel: "افتح الأعمال المختارة"
  },
  {
    title: "إنتاج إبداعي قابل للعرض",
    category: "أفلام وفيديو AI",
    summary:
      "Anbiya Visuals، إعادة تخيّل الروايات، والفيديوهات الموسيقية توضح الاتجاه السردي، أنظمة الصور، إيقاع المشاهد، والاستمرارية السينمائية.",
    href: "/ar/client-ai-production/",
    linkLabel: "افتح مثال الإنتاج"
  },
  {
    title: "ورشات وأنظمة تدريب",
    category: "تدريب / مختبرات",
    summary:
      "مختبر التحقق، مختبر بيرزيت، ومسارات التدريب المنفذة توضح تعلمًا عمليًا للذكاء الاصطناعي لجمهور إعلامي وتعليمي وثقافي ومهني.",
    href: "/workshops/",
    linkLabel: "شاهد أدلة الورشات"
  },
  {
    title: "منتجات تعليمية وتصميم معرفة",
    category: "تعليم / معرفة",
    summary:
      "حزم TPT التعليمية وتحويل الكتب إلى عروض بصرية يوضحان كيف تتحول المواد الكثيفة إلى أصول تعلم واضحة.",
    href: "/ar/education-products/",
    linkLabel: "افتح المنتجات التعليمية"
  },
  {
    title: "موسيقى وفيديو وإصدارات صوتية",
    category: "موسيقى / فيديو",
    summary:
      "الفيديوهات الموسيقية الأصلية ومتحف الأصداء يوضحان تحويل الصوت إلى اتجاه بصري، تغليف الإصدارات، ومنطق الأرشيف ثنائي اللغة.",
    href: "/ar/music-videos/",
    linkLabel: "افتح الفيديوهات الموسيقية"
  },
  {
    title: "مراجع وبحث بصري داعم",
    category: "بحث / مراجع",
    summary:
      "لوحات Pinterest تدعم التحضير البصري: الجو، الملابس، التكوين، الملمس، والمراجع الإبداعية.",
    href: "https://www.pinterest.com/TamerCreates/",
    linkLabel: "افتح لوحات Pinterest"
  }
];
