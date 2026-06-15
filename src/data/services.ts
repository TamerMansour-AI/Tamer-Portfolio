export type ServiceItem = {
  title: string;
  summary: string;
  bestFor: string;
  outcome: string;
  chooseWhen: string;
  nextStep: string;
  deliverables: string[];
  cta: string;
  proofTitle: string;
  proofSummary: string;
  proofHref: string;
  proofCta: string;
};

export const servicesEn: ServiceItem[] = [
  {
    title: "AI Video and Story Production",
    summary:
      "Story films, music videos, campaign visuals, and cinematic excerpts built with clear direction, atmosphere, and continuity.",
    bestFor: "Founders, cultural projects, educators, and teams that need a visual story people can feel quickly.",
    outcome:
      "A finished visual direction with story logic, scene rhythm, and web-ready material your audience can understand fast.",
    chooseWhen:
      "Choose this when a story, lesson, campaign, or cultural idea needs to become a cinematic video rather than a loose concept.",
    nextStep: "Send the idea, target audience, tone, timeline, and where the video needs to live.",
    deliverables: [
      "Story direction and scene planning",
      "AI image and video production system",
      "Reels, trailers, short films, or web excerpts"
    ],
    cta: "Discuss a video project",
    proofTitle: "Anbiya Visuals, Literary Reimaginings, and Music Videos",
    proofSummary:
      "Shows full story-film production, literary adaptation, original music-video direction, and campaign-ready visual storytelling.",
    proofHref: "/client-ai-production/",
    proofCta: "See AI film production"
  },
  {
    title: "AI Workshops and Learning Labs",
    summary:
      "Practical AI sessions with activities, source packs, live tools, and outputs people can use after the room.",
    bestFor:
      "Institutions, media teams, universities, and organizations that need practical AI capability, not only a lecture.",
    outcome:
      "A workshop or lab where participants practice with real prompts, sources, review habits, and usable outputs.",
    chooseWhen:
      "Choose this when the goal is skill transfer, shared standards, and a practical learning environment.",
    nextStep:
      "Share the audience, level, session length, language, and the capability you want people to leave with.",
    deliverables: [
      "Workshop structure and live activities",
      "Source packs, prompts, and recap assets",
      "Simple web labs or participant output flows"
    ],
    cta: "Plan a workshop",
    proofTitle: "AI Verification Lab and Birzeit AI Fluency Lab",
    proofSummary:
      "Shows practical AI training with public web environments, activities, source-grounded workflows, and visible participant tasks.",
    proofHref: "/workshops/",
    proofCta: "See workshop proof"
  },
  {
    title: "Educational Product and Knowledge Design",
    summary:
      "Visual lesson packs, book-to-deck systems, worksheets, guides, and teacher-ready learning assets.",
    bestFor:
      "Educators, trainers, authors, and teams with dense material that needs to become clearer and usable.",
    outcome:
      "A structured learning product people can teach, sell, present, or use without needing the original complexity explained again.",
    chooseWhen:
      "Choose this when a lesson, book, source pack, or training idea needs to become a visual system.",
    nextStep:
      "Share the source material, audience, format, and whether the output is for teaching, briefing, or public sale.",
    deliverables: [
      "Lesson packs, worksheets, and quick checks",
      "Visual decks and knowledge systems",
      "Teacher or trainer-facing guides"
    ],
    cta: "Build a learning product",
    proofTitle: "Primary Learning Visualised and Book-to-Deck Reconstructions",
    proofSummary:
      "Shows marketplace-ready lesson products and dense books rebuilt as visual teaching, briefing, and discussion systems.",
    proofHref: "/book-to-decks/",
    proofCta: "See knowledge design proof"
  },
  {
    title: "Bilingual Web and Product Prototypes",
    summary:
      "Public-facing pages, archives, labs, and lightweight tools that make a concept usable in Arabic and English.",
    bestFor: "Projects that need a public-facing concept, archive, campaign page, or lightweight interactive tool.",
    outcome: "A clear digital surface that gives the idea structure, language, navigation, and a public path.",
    chooseWhen:
      "Choose this when the project needs to be experienced, explored, or tested online instead of explained in a document.",
    nextStep:
      "Share the concept, audience, language needs, and the smallest useful version that should go live first.",
    deliverables: [
      "Bilingual pages and launch-ready product stories",
      "Archive structures and lightweight interaction flows",
      "Proof-of-concept websites or workshop labs"
    ],
    cta: "Shape a prototype",
    proofTitle: "Museum of Echoes and Palestine Visual Lab",
    proofSummary:
      "Shows how original media, cultural references, and workshop ideas can become public-facing archives, tools, and digital experiences.",
    proofHref: "/museum-of-echoes/",
    proofCta: "See product proof"
  }
];

export const servicesAr: ServiceItem[] = [
  {
    title: "إنتاج فيديو وسرد بصري بالذكاء الاصطناعي",
    summary:
      "أفلام قصصية، فيديوهات موسيقية، مواد حملات، ومقتطفات سينمائية مبنية على جو واضح واستمرارية بصرية.",
    bestFor: "للمؤسسين والمشاريع الثقافية والمعلمين والفرق التي تحتاج قصة بصرية يشعر بها الجمهور بسرعة.",
    outcome: "اتجاه بصري مكتمل بمنطق سردي وإيقاع مشاهد ومواد مناسبة للنشر أو العرض.",
    chooseWhen:
      "اختر هذا المسار عندما تحتاج قصة أو درس أو حملة أو فكرة ثقافية إلى فيديو سينمائي لا إلى مفهوم متفرق.",
    nextStep: "أرسل الفكرة والجمهور والنبرة والمدة والمكان الذي سيظهر فيه الفيديو.",
    deliverables: [
      "اتجاه سردي وخطة مشاهد",
      "نظام إنتاج صور وفيديو بالذكاء الاصطناعي",
      "ريلز أو تريلرات أو أفلام قصيرة أو مقتطفات للويب"
    ],
    cta: "ناقش مشروع فيديو",
    proofTitle: "Anbiya Visuals وإعادة تخيّل الروايات والفيديوهات الموسيقية",
    proofSummary:
      "توضح إنتاج أفلام قصصية كاملة، واقتباسًا أدبيًا بصريًا، واتجاهًا سينمائيًا للفيديوهات الموسيقية.",
    proofHref: "/ar/client-ai-production/",
    proofCta: "شاهد إنتاج الأفلام بالذكاء الاصطناعي"
  },
  {
    title: "ورشات ومختبرات تعلم بالذكاء الاصطناعي",
    summary:
      "جلسات عملية مع أنشطة ومصادر وأدوات حية ومخرجات يستطيع المشاركون استخدامها بعد الورشة.",
    bestFor:
      "للمؤسسات والفرق الإعلامية والجامعات والمنظمات التي تحتاج قدرة عملية في الذكاء الاصطناعي لا محاضرة نظرية فقط.",
    outcome:
      "ورشة أو مختبر يمارس فيه المشاركون الأوامر والمصادر وعادات المراجعة وينتجون مخرجات قابلة للاستخدام.",
    chooseWhen:
      "اختر هذا المسار عندما يكون الهدف نقل مهارة وبناء لغة مشتركة وبيئة تعلم عملية.",
    nextStep:
      "شارك الجمهور والمستوى ومدة الجلسة واللغة والقدرة التي تريد أن يخرج بها المشاركون.",
    deliverables: [
      "هيكل ورشة وأنشطة حية",
      "حزم مصادر وأوامر ومواد تلخيص",
      "مختبرات ويب خفيفة أو مسارات مخرجات للمشاركين"
    ],
    cta: "خطط ورشة",
    proofTitle: "مختبر التحقق ومختبر بيرزيت للطلاقة بالذكاء الاصطناعي",
    proofSummary:
      "يوضحان تدريبًا عمليًا ببيئات ويب وأنشطة وسير عمل قائم على المصادر ومهام واضحة للمشاركين.",
    proofHref: "/workshops/",
    proofCta: "شاهد أدلة الورشات"
  },
  {
    title: "منتجات تعليمية وتصميم معرفة",
    summary:
      "حزم دروس بصرية، تحويل كتب إلى عروض، أوراق عمل، أدلة، ومواد جاهزة للمعلمين والمدربين.",
    bestFor:
      "للمعلمين والمدربين والمؤلفين والفرق التي تملك مادة كثيفة وتحتاج تحويلها إلى صيغة أوضح وأسهل استخدامًا.",
    outcome:
      "منتج تعليمي أو معرفي يمكن تدريسه أو بيعه أو عرضه أو استخدامه دون شرح المادة الأصلية من جديد.",
    chooseWhen:
      "اختر هذا المسار عندما تحتاج درسًا أو كتابًا أو حزمة مصادر أو فكرة تدريبية إلى نظام بصري واضح.",
    nextStep:
      "شارك المادة والجمهور والصيغة المطلوبة وما إذا كان الناتج للتعليم أو الإحاطة أو البيع العام.",
    deliverables: [
      "حزم دروس وأوراق عمل واختبارات قصيرة",
      "عروض بصرية وأنظمة معرفة",
      "أدلة للمعلمين أو المدربين"
    ],
    cta: "ابنِ منتجًا تعليميًا",
    proofTitle: "Primary Learning Visualised وتحويل الكتب إلى عروض",
    proofSummary:
      "يوضحان منتجات دروس جاهزة للسوق وكتبًا كثيفة أعيد بناؤها كأنظمة تعليم وإحاطة ونقاش.",
    proofHref: "/ar/book-to-decks/",
    proofCta: "شاهد تصميم المعرفة"
  },
  {
    title: "نماذج ويب ومنتجات ثنائية اللغة",
    summary:
      "صفحات عامة، أرشيفات، مختبرات، وأدوات خفيفة تجعل الفكرة قابلة للاستخدام بالعربية والإنجليزية.",
    bestFor: "للمشاريع التي تحتاج مفهومًا عامًا، أرشيفًا، صفحة حملة، أو أداة تفاعلية خفيفة.",
    outcome: "سطح رقمي واضح يمنح الفكرة بنية ولغة وتنقلًا ومسارًا عامًا.",
    chooseWhen:
      "اختر هذا المسار عندما تحتاج الفكرة أن تُجرب أو تُستكشف أو تُعرض على الإنترنت بدل أن تبقى في وثيقة.",
    nextStep: "شارك المفهوم والجمهور واحتياجات اللغة وأصغر نسخة مفيدة يجب نشرها أولًا.",
    deliverables: [
      "صفحات ثنائية اللغة وسرد منتج جاهز للإطلاق",
      "بنية أرشيف ومسارات تفاعل خفيفة",
      "مواقع إثبات فكرة أو مختبرات ورشات"
    ],
    cta: "شكّل نموذجًا أوليًا",
    proofTitle: "متحف الأصداء وPalestine Visual Lab",
    proofSummary:
      "يوضحان كيف يمكن للموسيقى الأصلية والمراجع الثقافية وأفكار الورشات أن تصبح أرشيفات وأدوات وتجارب رقمية عامة.",
    proofHref: "/ar/museum-of-echoes/",
    proofCta: "شاهد دليل المنتج"
  }
];
