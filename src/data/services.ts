export type ServiceItem = {
  title: string;
  summary: string;
  deliverables: string[];
  cta: string;
};

export const servicesEn: ServiceItem[] = [
  {
    title: "Cinematic Brand Story Sprint",
    summary:
      "A focused sprint to turn your message into a sharp visual narrative your audience remembers and shares.",
    deliverables: [
      "Creative direction + message architecture",
      "Short-form video concepts and scene plans",
      "Final edit guidance for social launch"
    ],
    cta: "Book a Call"
  },
  {
    title: "AI Media Production System",
    summary:
      "Design and deploy a practical AI workflow for ideation, visuals, and content velocity without losing quality.",
    deliverables: [
      "Custom tool stack + prompt framework",
      "Team-ready production playbook",
      "Quality-control checkpoints"
    ],
    cta: "Message on WhatsApp"
  },
  {
    title: "Creator Education & Advisory",
    summary:
      "Hands-on coaching for creators, educators, and teams who want confident, modern output with clear standards.",
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
    title: "سباق السرد البصري السينمائي",
    summary:
      "برنامج مركز يحول رسالتك إلى قصة بصرية قوية تترك أثرا واضحا لدى جمهورك.",
    deliverables: [
      "توجيه إبداعي وبناء الرسالة",
      "أفكار فيديو قصير وخطط مشاهد",
      "إرشاد نهائي للمونتاج والإطلاق"
    ],
    cta: "احجز مكالمة"
  },
  {
    title: "نظام إنتاج محتوى بالذكاء الاصطناعي",
    summary:
      "تصميم سير عمل عملي للإلهام والإنتاج السريع مع الحفاظ على جودة احترافية ثابتة.",
    deliverables: [
      "هيكلة أدوات وإطارات أوامر مخصصة",
      "دليل تشغيل واضح للفريق",
      "نقاط تدقيق جودة في كل مرحلة"
    ],
    cta: "راسلني على واتساب"
  },
  {
    title: "تدريب واستشارات للمبدعين",
    summary:
      "جلسات عملية للمبدعين والمدربين والفرق لبناء مستوى إنتاج حديث وواثق.",
    deliverables: [
      "ورش تفاعلية مباشرة",
      "خارطة طريق للمحتوى",
      "مراجعات دورية مع ملاحظات قابلة للتنفيذ"
    ],
    cta: "احجز مكالمة"
  }
];
