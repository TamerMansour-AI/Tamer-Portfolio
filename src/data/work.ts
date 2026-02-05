const stillA = "/assets/images/projects/Gemini_Generated_Image_if30hgif30hgif30.png";
const stillB = "/assets/images/projects/Gemini_Generated_Image_c36kacc36kacc36k.png";
const stillC = "/assets/images/projects/Gemini_Generated_Image_9z1sp9z1sp9z1sp9.png";
const stillD = "/assets/images/projects/Gemini_Generated_Image_9vnkdt9vnkdt9vnk.png";
const stillE = "/assets/images/projects/Gemini_Generated_Image_9p376m9p376m9p37.png";
const stillF = "/assets/images/projects/Gemini_Generated_Image_qoehg3qoehg3qoeh.png";

export type WorkItem = {
  title: string;
  type: string;
  summary: string;
  youtubeUrl: string;
  image: string;
};

export const workItemsEn: WorkItem[] = [
  {
    title: "Emotive Visual Narrative",
    type: "AI Film Short",
    summary:
      "A cinematic micro-story built around texture, rhythm, and emotional clarity for social attention.",
    youtubeUrl: "https://www.youtube.com/watch?v=4HPt1qOpIw0",
    image: stillA
  },
  {
    title: "Modern Heritage Sequence",
    type: "Cultural Visual Concept",
    summary:
      "Contemporary framing that honors local identity while keeping the storytelling globally legible.",
    youtubeUrl: "https://youtu.be/N7T1ouDs9bs?si=Dykwf_HlxA-fGb6n",
    image: stillB
  },
  {
    title: "Motion-led Brand Cut",
    type: "Brand Content",
    summary:
      "A high-retention edit designed to introduce a brand in seconds with visual confidence.",
    youtubeUrl: "https://youtu.be/E6Rt-agXCYM?si=-LXfHtbg0yTkdgi_",
    image: stillC
  },
  {
    title: "AI Story Reel",
    type: "Short-form Series",
    summary:
      "Fast, cinematic storytelling made for repeat viewing and conversation in the comments.",
    youtubeUrl: "https://youtu.be/ft0zRjyBNQ4?si=d86Pmoyt0Uq5vzFD",
    image: stillD
  },
  {
    title: "Visual Education Piece",
    type: "Learning Content",
    summary:
      "Educational format that blends clear teaching beats with premium visual design.",
    youtubeUrl: "https://youtu.be/QquQdE2YZGU?si=YkfumUz0p0O2Gr7k",
    image: stillE
  },
  {
    title: "Cinematic Social Teaser",
    type: "Launch Support",
    summary:
      "A polished teaser to warm audiences before campaign release and drive first-click curiosity.",
    youtubeUrl: "https://youtu.be/lqVwVUdH6Hk?si=ziVxu_18Y0nmq8NE",
    image: stillF
  },
  {
    title: "Narrative Experiment",
    type: "Creative R&D",
    summary:
      "An exploratory visual experiment focused on pacing, atmosphere, and high-impact openings.",
    youtubeUrl: "https://youtu.be/dqGQJQ1jvHg?si=RQhKXHrJN1irsh7H",
    image: stillA
  }
];

export const workItemsAr: WorkItem[] = [
  {
    title: "سرد بصري عاطفي",
    type: "فيلم قصير بالذكاء الاصطناعي",
    summary: "قصة سينمائية مكثفة تعتمد على الإيقاع البصري والتأثير العاطفي السريع.",
    youtubeUrl: "https://www.youtube.com/watch?v=4HPt1qOpIw0",
    image: stillA
  },
  {
    title: "تسلسل بصري معاصر",
    type: "مفهوم ثقافي",
    summary: "طرح بصري حديث يحافظ على الهوية المحلية ويصل بسهولة إلى جمهور أوسع.",
    youtubeUrl: "https://youtu.be/N7T1ouDs9bs?si=Dykwf_HlxA-fGb6n",
    image: stillB
  },
  {
    title: "مونتاج علامة ديناميكي",
    type: "محتوى علامات تجارية",
    summary: "محتوى سريع الإيقاع يقدّم الهوية في ثوانٍ بصورة احترافية جذابة.",
    youtubeUrl: "https://youtu.be/E6Rt-agXCYM?si=-LXfHtbg0yTkdgi_",
    image: stillC
  },
  {
    title: "ريل قصصي",
    type: "سلسلة قصيرة",
    summary: "تنفيذ قصصي بصيغة قصيرة مصمم لرفع المشاهدة المتكررة والتفاعل.",
    youtubeUrl: "https://youtu.be/ft0zRjyBNQ4?si=d86Pmoyt0Uq5vzFD",
    image: stillD
  },
  {
    title: "محتوى تعليمي بصري",
    type: "تعليم إبداعي",
    summary: "موازنة بين الوضوح التعليمي والإخراج البصري العالي.",
    youtubeUrl: "https://youtu.be/QquQdE2YZGU?si=YkfumUz0p0O2Gr7k",
    image: stillE
  },
  {
    title: "إعلان تمهيدي سينمائي",
    type: "دعم إطلاق",
    summary: "مادة افتتاحية أنيقة ترفع الفضول قبل الإطلاق وتدعم النقر الأول.",
    youtubeUrl: "https://youtu.be/lqVwVUdH6Hk?si=ziVxu_18Y0nmq8NE",
    image: stillF
  },
  {
    title: "مختبر سردي",
    type: "بحث وتطوير إبداعي",
    summary: "تجربة مرئية لاختبار الإيقاع والأجواء والبدايات المؤثرة.",
    youtubeUrl: "https://youtu.be/dqGQJQ1jvHg?si=RQhKXHrJN1irsh7H",
    image: stillA
  }
];

export const pinterestPlaceholderEn = {
  title: "Pinterest Boards (Curated Mood + References)",
  description:
    "A living set of visual references for campaign tone, color, and composition.",
  url: "https://www.pinterest.com/TamerCreates/"
};

export const pinterestPlaceholderAr = {
  title: "لوحات Pinterest (مرجع بصري)",
  description: "مجموعة متجددة من المراجع البصرية للأسلوب والألوان وتكوين المشاهد.",
  url: "https://www.pinterest.com/TamerCreates/"
};
