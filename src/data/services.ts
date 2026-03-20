export type ServiceItem = {
  title: string;
  summary: string;
  deliverables: string[];
  cta: string;
};

export const servicesEn: ServiceItem[] = [
  {
    title: "Brand Story Sprint",
    summary:
      "A focused front-door offer to clarify the message, visual direction, and scene plan for a premium launch or campaign.",
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
    deliverables: [
      "ورش تفاعلية مباشرة",
      "خارطة طريق للمحتوى",
      "مراجعات دورية مع ملاحظات قابلة للتنفيذ"
    ],
    cta: "احجز مكالمة"
  }
];
