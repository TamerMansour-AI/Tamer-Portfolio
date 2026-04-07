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
    title: "Brand Story Sprint",
    summary:
      "A focused front-door offer to clarify the message, visual direction, and story logic before a launch, campaign, or cultural release moves into production.",
    bestFor: "Founders, cultural projects, and launches that need narrative clarity before full production begins.",
    outcome: "A sharper story direction, stronger visual frame, and a scene plan you can act on quickly.",
    chooseWhen:
      "Choose this when the message feels scattered, the visuals lack coherence, or the next release needs a stronger opening move.",
    nextStep: "Start here when the work still needs framing before anyone spends more on production, media, or rollout.",
    deliverables: [
      "Creative direction + message architecture",
      "Short-form video concepts and scene plans",
      "Final edit guidance for social launch"
    ],
    cta: "Book a Call",
    proofTitle: "Literary Reimaginings",
    proofSummary:
      "Shows how story, mood, and bilingual interpretation can be shaped into a tighter visual direction before a larger production effort begins.",
    proofHref: "/literary-reimaginings/",
    proofCta: "See story-direction proof"
  },
  {
    title: "AI Production System Setup",
    summary:
      "Build a practical AI workflow for ideation, visuals, review, and delivery without sacrificing quality, structure, or taste.",
    bestFor: "Teams already producing content but missing a reliable workflow for generation, review, and handoff.",
    outcome: "A cleaner production system with clearer standards for ideation, making, feedback, and delivery.",
    chooseWhen:
      "Choose this when output is inconsistent, too slow, or dependent on ad-hoc prompting and individual memory.",
    nextStep: "Move here once the direction is already clear and the real problem is repeatability, approvals, or handoff quality.",
    deliverables: [
      "Custom tool stack + prompt framework",
      "Team-ready production playbook",
      "Quality-control checkpoints"
    ],
    cta: "Message on WhatsApp",
    proofTitle: "Museum of Echoes",
    proofSummary:
      "Proves the ability to turn original creative material into a bilingual product experience with archive logic, discovery paths, and a public-facing execution layer.",
    proofHref: "/museum-of-echoes/",
    proofCta: "See systems proof"
  },
  {
    title: "Workshops & Advisory",
    summary:
      "Hands-on training and strategic guidance for creators, educators, and teams that need stronger output, clearer standards, and a better shared language.",
    bestFor: "Creators, educators, and organizations that need capability-building, not only finished deliverables.",
    outcome: "A stronger internal standard, better creative judgment, and a team that can keep improving after the engagement.",
    chooseWhen:
      "Choose this when the goal is skill transfer, shared language, and repeatable improvement across people or departments.",
    nextStep:
      "Use this when the goal is not only getting the work done, but helping people understand the method well enough to carry it forward.",
    deliverables: [
      "Live workshop sessions",
      "Content strategy roadmap",
      "Review cycles with practical feedback"
    ],
    cta: "Book a Call",
    proofTitle: "Book-to-Deck Reconstructions",
    proofSummary:
      "Shows how dense material can be translated into teachable visual structure, making it the clearest proof anchor for educational transformation and capability-building work.",
    proofHref: "/book-to-decks/",
    proofCta: "See teaching-format proof"
  }
];

export const servicesAr: ServiceItem[] = [
  {
    title: "صياغة قصة العلامة بصريا",
    summary:
      "عرض تمهيدي مركز يوضح الرسالة والاتجاه البصري ومنطق القصة قبل أن ينتقل الإطلاق أو الحملة أو الإصدار الثقافي إلى الإنتاج.",
    bestFor: "للمؤسسين والمشاريع الثقافية والإطلاقات التي تحتاج وضوحا سرديا قبل الدخول في الإنتاج الكامل.",
    outcome: "اتجاه قصصي أوضح، وإطار بصري أقوى، وخطة مشاهد يمكن التحرك عليها بسرعة.",
    chooseWhen:
      "اختر هذه الخدمة عندما تبدو الرسالة مشتتة أو الاتجاه البصري غير متماسك أو عندما يحتاج الإصدار القادم إلى بداية أقوى.",
    nextStep: "ابدأ من هنا عندما يحتاج العمل إلى صياغة وضبط قبل أن يصرف عليه وقت أو ميزانية أكبر في الإنتاج والنشر.",
    deliverables: [
      "توجيه إبداعي وبناء الرسالة",
      "أفكار فيديو قصير وخطط مشاهد",
      "إرشاد نهائي للمونتاج والإطلاق"
    ],
    cta: "احجز مكالمة",
    proofTitle: "إعادة تخيّل الروايات بصريا",
    proofSummary:
      "يظهر كيف يمكن صياغة النبرة والأجواء والتأويل الثنائي اللغة ضمن اتجاه بصري أكثر دقة قبل أي توسع إنتاجي.",
    proofHref: "/ar/literary-reimaginings/",
    proofCta: "شاهد دليل صياغة القصة"
  },
  {
    title: "إعداد نظام إنتاج بالذكاء الاصطناعي",
    summary:
      "بناء سير عمل عملي للتفكير والإنتاج والمراجعة والتسليم مع الحفاظ على الجودة والبنية والذوق.",
    bestFor: "للفرق التي تنتج المحتوى بالفعل لكنها تفتقد نظاما موثوقا للتوليد والمراجعة والتسليم.",
    outcome: "نظام إنتاج أنظف بمعايير أوضح للتفكير والصناعة والتغذية الراجعة والتسليم.",
    chooseWhen:
      "اختر هذه الخدمة عندما يكون الإنتاج متذبذبا أو بطيئا أو معتمدا على اجتهادات فردية وأوامر مرتجلة.",
    nextStep: "انتقل إلى هذا المسار حين تكون الوجهة واضحة بالفعل أما المشكلة الحقيقية فتكون في التكرار والمراجعة والتسليم.",
    deliverables: [
      "هيكلة أدوات وإطارات أوامر مخصصة",
      "دليل تشغيل واضح للفريق",
      "نقاط تدقيق جودة في كل مرحلة"
    ],
    cta: "راسلني على واتساب",
    proofTitle: "متحف الأصداء",
    proofSummary:
      "يثبت القدرة على تحويل المادة الإبداعية إلى تجربة منتج ثنائية اللغة لها منطق أرشيفي ومسارات اكتشاف وطبقة تنفيذ عامة.",
    proofHref: "/ar/museum-of-echoes/",
    proofCta: "شاهد دليل النظام والمنتج"
  },
  {
    title: "ورشات واستشارات",
    summary:
      "تدريب عملي وإرشاد استراتيجي للمبدعين والمدربين والفرق التي تحتاج مخرجات أقوى ومعايير أوضح ولغة عمل مشتركة.",
    bestFor: "للمبدعين والمدربين والمؤسسات التي تحتاج بناء قدرة داخلية لا مجرد تسليم نهائي.",
    outcome: "معيار داخلي أقوى وحكم إبداعي أوضح وفريق قادر على الاستمرار في التحسن بعد انتهاء التعاون.",
    chooseWhen:
      "اختر هذه الخدمة عندما يكون الهدف نقل المهارة وبناء لغة مشتركة وتحسين الأداء بشكل متكرر بين الأفراد أو الأقسام.",
    nextStep: "استخدم هذا المسار عندما يكون المطلوب ليس إنجاز العمل فقط، بل مساعدة الناس على فهم المنهج كفاية لكي يحملوه بأنفسهم.",
    deliverables: [
      "ورش تفاعلية مباشرة",
      "خارطة طريق للمحتوى",
      "مراجعات دورية مع ملاحظات قابلة للتنفيذ"
    ],
    cta: "احجز مكالمة",
    proofTitle: "إعادة بناء الكتب كعروض شرائح",
    proofSummary:
      "يظهر كيف يمكن تحويل المواد الكثيفة إلى بنية بصرية قابلة للتعليم والفهم، وهو أوضح مرتكز إثبات لعمل الورش وبناء القدرة.",
    proofHref: "/ar/book-to-decks/",
    proofCta: "شاهد دليل التحويل التعليمي"
  }
];
