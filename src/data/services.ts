export type ServiceItem = {
  title: string;
  summary: string;
  bestFor: string;
  outcome: string;
  chooseWhen: string;
  deliverables: string[];
  cta: string;
};

export const servicesEn: ServiceItem[] = [
  {
    title: "Brand Story Sprint",
    summary:
      "A focused front-door offer to clarify the message, visual direction, and scene plan for a premium launch or campaign.",
    bestFor: "Founders, cultural projects, and launches that need narrative clarity before full production begins.",
    outcome: "A sharper story direction, stronger visual frame, and a scene plan you can act on quickly.",
    chooseWhen:
      "Choose this when the message feels scattered, the visuals lack coherence, or the next release needs a stronger opening move.",
    deliverables: [
      "Creative direction + message architecture",
      "Short-form video concepts and scene plans",
      "Final edit guidance for social launch"
    ],
    cta: "Book a Call"
  },
  {
    title: "AI Production System Setup",
    summary:
      "Build a practical AI workflow for ideation, visuals, review, and delivery without sacrificing quality or taste.",
    bestFor: "Teams already producing content but missing a reliable workflow for generation, review, and handoff.",
    outcome: "A cleaner production system with clearer standards for ideation, making, feedback, and delivery.",
    chooseWhen:
      "Choose this when output is inconsistent, too slow, or dependent on ad-hoc prompting and individual memory.",
    deliverables: [
      "Custom tool stack + prompt framework",
      "Team-ready production playbook",
      "Quality-control checkpoints"
    ],
    cta: "Message on WhatsApp"
  },
  {
    title: "Workshops & Advisory",
    summary:
      "Hands-on training and strategic guidance for creators, educators, and teams that need stronger output and clearer standards.",
    bestFor: "Creators, educators, and organizations that need capability-building, not only finished deliverables.",
    outcome: "A stronger internal standard, better creative judgment, and a team that can keep improving after the engagement.",
    chooseWhen:
      "Choose this when the goal is skill transfer, shared language, and repeatable improvement across people or departments.",
    deliverables: [
      "Live workshop sessions",
      "Content strategy roadmap",
      "Review cycles with practical feedback"
    ],
    cta: "Book a Call"
  }
];

export const servicesAr: ServiceItem[] = [
  {
    title: "صياغة قصة العلامة بصريا",
    summary:
      "عرض تمهيدي مركز يوضح الرسالة والاتجاه البصري وخطة المشاهد لحملة أو إطلاق بمستوى احترافي.",
    bestFor: "للمؤسسين والمشاريع الثقافية والإطلاقات التي تحتاج وضوحا سرديا قبل الدخول في الإنتاج الكامل.",
    outcome: "اتجاه قصصي أوضح، وإطار بصري أقوى، وخطة مشاهد يمكن التحرك عليها بسرعة.",
    chooseWhen:
      "اختر هذه الخدمة عندما تبدو الرسالة مشتتة أو الاتجاه البصري غير متماسك أو عندما يحتاج الإطلاق القادم إلى بداية أقوى.",
    deliverables: [
      "توجيه إبداعي وبناء الرسالة",
      "أفكار فيديو قصير وخطط مشاهد",
      "إرشاد نهائي للمونتاج والإطلاق"
    ],
    cta: "احجز مكالمة"
  },
  {
    title: "إعداد نظام إنتاج بالذكاء الاصطناعي",
    summary:
      "بناء سير عمل عملي للتفكير والإنتاج والمراجعة والتسليم مع الحفاظ على الجودة والذوق.",
    bestFor: "للفرق التي تنتج المحتوى بالفعل لكنها تفتقد نظاما موثوقا للتوليد والمراجعة والتسليم.",
    outcome: "نظام إنتاج أنظف بمعايير أوضح للتفكير والصناعة والتغذية الراجعة والتسليم.",
    chooseWhen:
      "اختر هذه الخدمة عندما يكون الإنتاج متذبذبا أو بطيئا أو معتمدا على اجتهادات فردية وأوامر مرتجلة.",
    deliverables: [
      "هيكلة أدوات وإطارات أوامر مخصصة",
      "دليل تشغيل واضح للفريق",
      "نقاط تدقيق جودة في كل مرحلة"
    ],
    cta: "راسلني على واتساب"
  },
  {
    title: "ورشات واستشارات",
    summary:
      "تدريب عملي وإرشاد استراتيجي للمبدعين والمدربين والفرق التي تحتاج مستوى أقوى ومعايير أوضح.",
    bestFor: "للمبدعين والمدربين والمؤسسات التي تحتاج بناء قدرة داخلية لا مجرد تسليم نهائي.",
    outcome: "معيار داخلي أقوى وحكم إبداعي أوضح وفريق قادر على الاستمرار في التحسن بعد انتهاء التعاون.",
    chooseWhen:
      "اختر هذه الخدمة عندما يكون الهدف نقل المهارة وبناء لغة مشتركة وتحسين الأداء بشكل متكرر بين الأفراد أو الأقسام.",
    deliverables: [
      "ورش تفاعلية مباشرة",
      "خارطة طريق للمحتوى",
      "مراجعات دورية مع ملاحظات قابلة للتنفيذ"
    ],
    cta: "احجز مكالمة"
  }
];
