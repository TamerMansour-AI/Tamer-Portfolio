export type CaseArtifact = {
  src: string;
  alt: { en: string; ar: string };
  caption: { en: string; ar: string };
  mode: "cover" | "contain";
};

export const caseArtifacts: Record<string, CaseArtifact[]> = {
  "museum-of-echoes": [
    { src: "/media/museum/museum-of-echoes-home.jpg", alt: { en: "Museum of Echoes public homepage", ar: "الصفحة العامة لمتحف الأصداء" }, caption: { en: "Public entry and archive proposition", ar: "مدخل عام وفكرة الأرشيف" }, mode: "contain" },
    { src: "/media/museum/archive-of-jasmine.jpg", alt: { en: "Archive of Jasmine listening room", ar: "غرفة استماع أرشيف الياسمين" }, caption: { en: "A listening room with bilingual context", ar: "غرفة استماع بسياق ثنائي اللغة" }, mode: "cover" },
    { src: "/media/museum/when-the-museum-wakes-after-midnight.jpg", alt: { en: "When the Museum Wakes After Midnight room", ar: "غرفة عندما يستيقظ المتحف بعد منتصف الليل" }, caption: { en: "Atmosphere organized as an editorial room", ar: "جو منظم كغرفة تحريرية" }, mode: "cover" },
    { src: "/media/museum/courtyard-of-two-civilizations.jpg", alt: { en: "Courtyard of Two Civilizations room", ar: "غرفة ساحة حضارتين" }, caption: { en: "Cultural framing inside the archive system", ar: "تأطير ثقافي داخل نظام الأرشيف" }, mode: "cover" }
  ],
  "ai-verification-lab": [
    { src: "/media/workshops/ai-verification-lab-hero.jpg", alt: { en: "AI Verification Lab public interface", ar: "واجهة مختبر التحقق من الذكاء الاصطناعي" }, caption: { en: "The bilingual public workshop environment", ar: "بيئة الورشة العامة ثنائية اللغة" }, mode: "contain" },
    { src: "/media/workshops/ai-verification-workflow-map.jpg", alt: { en: "AI verification workflow map", ar: "خريطة مسار التحقق" }, caption: { en: "From claim to evidence and human judgment", ar: "من الادعاء إلى الدليل والحكم البشري" }, mode: "contain" },
    { src: "/media/workshops/ai-verification-guide-preview.jpg", alt: { en: "AI verification guide preview", ar: "معاينة دليل التحقق" }, caption: { en: "A reusable guide retained after the session", ar: "دليل قابل لإعادة الاستخدام بعد الجلسة" }, mode: "contain" },
    { src: "/media/workshops/birzeit-ai-fluency-home.jpg", alt: { en: "Birzeit AI Fluency Lab homepage", ar: "الصفحة الرئيسية لمختبر بيرزيت للطلاقة" }, caption: { en: "A related Arabic-first interactive learning system", ar: "نظام تعلم تفاعلي ذو أولوية عربية" }, mode: "contain" }
  ],
  "literary-reimaginings": [
    { src: "/media/video-posters/uChtaUHMguY.jpg", alt: { en: "Men in the Sun video thumbnail", ar: "الصورة المصغرة لفيديو رجال في الشمس" }, caption: { en: "Men in the Sun, bilingual visual interpretation", ar: "رجال في الشمس، تأويل بصري ثنائي اللغة" }, mode: "contain" },
    { src: "/media/video-posters/66JuIoZ6wGY.jpg", alt: { en: "Returning to Haifa video thumbnail", ar: "الصورة المصغرة لفيديو عائد إلى حيفا" }, caption: { en: "Returning to Haifa, bilingual visual interpretation", ar: "عائد إلى حيفا، تأويل بصري ثنائي اللغة" }, mode: "contain" }
  ],
  "anbiya-visuals": [
    { src: "/media/client-ai-production/anbiya-visuals-reel-poster.jpg", alt: { en: "Anbiya Visuals production poster", ar: "ملصق إنتاج مرئيات الأنبياء" }, caption: { en: "Portfolio-safe production framing", ar: "صياغة إنتاج آمنة للمحفظة" }, mode: "cover" },
    { src: "/media/client-ai-production/anbiya-nuh-client-safe-still.jpg", alt: { en: "Client-safe still from the Nuh story film", ar: "لقطة آمنة من فيلم قصة نوح" }, caption: { en: "Worldbuilding, atmosphere, and scene continuity", ar: "بناء عالم وجو واستمرارية مشهد" }, mode: "cover" },
    { src: "/media/client-ai-production/anbiya-visuals-arabic-manual-poster.jpg", alt: { en: "Arabic Anbiya Visuals edition poster", ar: "ملصق النسخة العربية من مرئيات الأنبياء" }, caption: { en: "Arabic-first release treatment", ar: "معالجة إصدار ذات أولوية عربية" }, mode: "contain" }
  ],
  "knowledge-products": [
    { src: "/media/decks/digital-prometheus/cover.jpg", alt: { en: "Digital Prometheus deck cover", ar: "غلاف عرض بروميثيوس الرقمي" }, caption: { en: "Dense argument rebuilt as a visual briefing", ar: "حجة كثيفة أعيد بناؤها كإحاطة بصرية" }, mode: "contain" },
    { src: "/media/decks/the-prince-dossier/spread.jpg", alt: { en: "The Prince Dossier interior spread", ar: "صفحة داخلية من ملف الأمير" }, caption: { en: "Editorial teaching structure", ar: "بنية تعليمية تحريرية" }, mode: "contain" },
    { src: "/media/education-products/tpt-pushes-pulls-cover.jpg", alt: { en: "Pushes and Pulls lesson product cover", ar: "غلاف منتج درس الدفع والسحب" }, caption: { en: "Marketplace-ready educational packaging", ar: "تغليف تعليمي جاهز للسوق" }, mode: "contain" },
    { src: "/media/education-products/tpt-friction-worksheet.jpg", alt: { en: "Friction lesson worksheet", ar: "ورقة عمل درس الاحتكاك" }, caption: { en: "A teacher-ready participant artifact", ar: "مادة جاهزة للمعلم والمتعلم" }, mode: "contain" }
  ]
};
