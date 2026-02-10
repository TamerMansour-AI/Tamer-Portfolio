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
  desc_en: string;
  desc_ar: string;
  url: string;
  tags: string[];
  type: string;
};

type Localized = "en" | "ar";

export type WorkItem = {
  title_en: string;
  title_ar: string;
  desc_en: string;
  desc_ar: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  type: string;
  videoId: string;
  thumbLocal: string;
  thumbRemoteCandidates: string[];
};

const workSeed: WorkSeedItem[] = [
  {
    title_en: "Rituals in Motion",
    title_ar: "طقوس في حركة",
    desc_en: "A silent cinematic short from Gaza where a dog and boy reunite and return to a damaged home of memory and sketches.",
    desc_ar:
      "رحلة صامتة لكلب من غزة يبحث عن الصبي الذي كان يرسم حياتهما: يلتقيان ويعودان إلى بيتٍ متضرّر… وإلى الرسومات التي تُركت.",
    url: "https://youtu.be/lqVwVUdH6Hk?si=bFrBQseef10kjFxG",
    type: "Art Documentary",
    tags: ["#Gaza", "#ShortFilm", "#AIArt", "#SilentFilm"]
  },
  {
    title_en: "Brand Atmosphere Study",
    title_ar: "دراسة هوية بصرية",
    desc_en:
      "A symbolic visual poem on Palestinian identity, memory, and renewal, framed with hope and enduring cultural roots.",
    desc_ar:
      "تجسد هذه القصيدة الرمزية صمود الهوية الفلسطينية وقدرتها الفائقة على التجدد والانبعاث من بين الركام رغم محاولات التفتيت والبيع في المحافل الدولية. ينسج النص علاقة عضوية بين الأرض والذاكرة الحية، حيث تتحول تفاصيل الطبيعة كاللوز والزعتر إلى أدوات للمقاومة السلمية والبقاء التي تتجاوز حدود الخرائط السياسية الضيقة. يبرز المحتوى قوة الإرادة الشعبية التي تعيد ترتيب شتاتها \"حصاة فوق حصاة\"، مؤكدة أن جوهر الوجود الفلسطيني أوسع من التاريخ المكتوب وأبقى من الحصار. تختتم المقطوعة برؤية أمل عميقة، معلنة أن الاستحقاق للحياة ينبع من تفاصيل يومية بسيطة وشجرة زيتون تظل شاهدة على الخلود رغم عواصف الزمن.",
    url: "https://youtu.be/dqGQJQ1jvHg?list=TLGGX1bvsOfqR0swOTAyMjAyNg",
    type: "Visual Narrative",
    tags: ["Identity", "Poetry", "Narrative"]
  },
  {
    title_en: "Momentum Cut",
    title_ar: "مونتاج الزخم",
    desc_en:
      "An AI-driven dialogue between ChatGPT and Gemini exploring identity as deep-rooted history with adaptive modern expression.",
    desc_ar:
      "يستعرض هذا المصدر تجربة فكرية فريدة توظف الذكاء الاصطناعي لاستكشاف الهوية الفلسطينية عبر مناظرة بين \"ChatGPT\" و\"Gemini\"، متجاوزةً بذلك القوالب السياسية التقليدية. يكمن جوهر الحوار في التوفيق بين مفهومين: الأصالة التاريخية الضاربة في القدم والتحول السياسي الحديث، حيث خلص الطرفان إلى أن الهوية الوطنية ليست مجرد نتاج للصراعات المعاصرة، بل هي امتداد لثقافة عريقة مرتبطة بالأرض. ويبرز مفهوم السكان الأصليين (Indigeneity) كحلقة وصل تسمح برؤية الفلسطينيين كحراس لحضارة قديمة تطور أدواتها لحماية وجودها، مع استخدام شجرة الزيتون كرمز بلاغي يجمع بين الجذور العميقة والقدرة على التجدد. ويهدف النص في النهاية إلى تقديم صورة تركيبية للهوية بصفتها جذوراً متحركة، تمزج بين الاستقرار التاريخي والقدرة المذهلة على البقاء والتكيف عبر الزمن.",
    url: "https://youtu.be/ft0zRjyBNQ4?list=TLGGjNIzCLeVJBAwOTAyMjAyNg",
    type: "Campaign Film",
    tags: ["AI Debate", "Identity", "Dialogue"]
  },
  {
    title_en: "Cultural Light",
    title_ar: "ضوء ثقافي",
    desc_en:
      "An animated cultural essay that revives ten iconic masterpieces and reveals the hidden drama behind each brushstroke.",
    desc_ar:
      "يقدم هذا المقطع سرداً بصرياً وثقافياً يستعرض عشرة من أعظم الأعمال الفنية عبر التاريخ، حيث يتم بث الحياة في اللوحات الجامدة من خلال تقنيات التحريك. يتنقل المحتوى بين روائع كلاسيكية مثل \"خلق آدم\" وصولاً إلى \"الموناليزا\"، مسلطاً الضوء على العبقرية الكامنة في التفاصيل وكيفية تجسيد الرسامين لمشاعر معقدة كالخوف والحب والحركة. تكمن الغاية الأساسية من هذا العرض في تحويل الفن الساكن إلى تجربة حية، مما يساعد المشاهد على استيعاب القصص والدراما المختبئة خلف ضربات الفرشاة. يُبرز النص كيف تظل هذه الأيقونات خالدة بفضل الغموض والابتكار الذي يمنحها القدرة على مخاطبة الوجدان الإنساني عبر العصور.",
    url: "https://youtu.be/4HPt1qOpIw0?list=TLGGVDWoj-0-l0cwOTAyMjAyNg",
    type: "Art Documentary",
    tags: ["Classic Art", "Animation", "Culture"]
  },
  {
    title_en: "Impact Sequence",
    title_ar: "تسلسل الأثر",
    desc_en:
      "A modern song-film about digital alienation that calls for compassion, human truth, and action over empty ritual.",
    desc_ar:
      "تُصور هذه الأغنية الحديثة حالة الاغتراب الإنساني في عصر تهيمن عليه الشاشات والضجيج الرقمي، حيث يتساءل العمل عن جوهر هويتنا وسط عالم متسارع ومقسم. ينتقل النص ببراعة من نقد الانفصال العاطفي رغم الاتصال التكنولوجي إلى دعوة ملحة للبحث عن الرحمة والصدق في التعاملات البشرية. تهدف الكلمات إلى تحفيز المستمع على إبطاء إيقاع الحياة وتجاوز الحواجز النفسية والمادية لإعادة إحياء لغة الحب. وفي الختام، يبرز النص وحدة المصير الإنساني، مشدداً على أن التغلب على الخوف والكراهية يبدأ بمد يد العون وبناء غدٍ يقوم على الأفعال لا المجرد الصلوات الفارغة.",
    url: "https://youtu.be/E6Rt-agXCYM?list=TLGGzII0OhNHrdQwOTAyMjAyNg",
    type: "Cinematic Production",
    tags: ["Music", "Humanity", "Digital Age"]
  },
  {
    title_en: "Heritage Reimagined",
    title_ar: "إرث متجدد",
    desc_en:
      "An AI-produced song reflects inner conflict in the digital era and argues for empathy as resistance to fragmentation.",
    desc_ar:
      "تُصور هذه الأغنية التي أُنتجت بواسطة الذكاء الاصطناعي حالة من الاغتراب الإنساني في العصر الرقمي، حيث تعكس الصراع الداخلي بين ضجيج الأخبار المتسارع والرغبة العميقة في السكينة. يركز النص على تآكل التواصل الحقيقي بسبب الانقسامات الفكرية و\"القبائل\" الرقمية، محذراً من أن الكلمات أصبحت تُستخدم كأدوات للقطيعة بدلاً من التفاهم. يسعى العمل في جوهره إلى استعادة التعاطف الإنساني كبديل لمشاعر الخوف والارتباك، داعياً المستمع إلى إبطاء وتيرة الحياة واختيار المحبة كفعل مقاومة ضد الكراهية السائدة. ترسم الكلمات لوحة للأمل الهش الذي يتمسك به الفرد، مؤكدة على ضرورة الاتحاد الوجداني لتجاوز وطأة الواقع المعاصر.",
    url: "https://youtu.be/N7T1ouDs9bs?list=TLGG0KmB1K6djqgwOTAyMjAyNg",
    type: "Visual Narrative",
    tags: ["AI Song", "Compassion", "Resilience"]
  },
  {
    title_en: "Future Classroom",
    title_ar: "فصل المستقبل",
    desc_en:
      "A structured AI debate frames identity as living continuity: rooted in land and culture yet adaptive across eras.",
    desc_ar:
      "يستعرض هذا المصدر مناظرة فكرية مبتكرة بين نموذجين من الذكاء الاصطناعي حول جدلية الهوية الفلسطينية، حيث يحلل الطرفان التداخل بين العمق التاريخي والتمثيل السياسي المعاصر. يطرح النص فكرة أن الهوية ليست مجرد كيان سياسي حديث نشأ كرد فعل للظروف الحالية، بل هي امتداد عضوي لحضارة ضاربة في القدم تتجلى في تفاصيل الأرض والثقافة الشعبية. استقر الحوار في النهاية على مفهوم الأصالة كقوة ديناميكية، واصفاً الشعب الفلسطيني بأنه صاحب \"جذور متحركة\" تجمع بين الثبات على الأرض والقدرة على التكيف مع متغيرات العصر. تُختتم الرؤية باستعارة بليغة تشبه هذه الهوية بشجرة الزيتون المعمرة، التي ترمز بجذوعها الملتوية لآلام التاريخ وبأغصانها المتجددة للأمل والصمود المستمر.",
    url: "https://youtu.be/QquQdE2YZGU?list=TLGGUvcpT0katqwwOTAyMjAyNg",
    type: "Training and Workshops",
    tags: ["AI Dialogue", "Identity", "Olive Tree"]
  }
];

const localizeWorkItem = (item: WorkSeedItem, locale: Localized): WorkItem => {
  const videoId = extractVideoId(item.url);

  return {
    ...item,
    title: locale === "ar" ? item.title_ar : item.title_en,
    description: locale === "ar" ? item.desc_ar : item.desc_en,
    videoId,
    thumbLocal: `/media/youtube/${videoId}.jpg`,
    thumbRemoteCandidates: youtubeThumbCandidates(videoId)
  };
};

export const workItemsEn: WorkItem[] = workSeed.map((item) => localizeWorkItem(item, "en"));
export const workItemsAr: WorkItem[] = workSeed.map((item) => localizeWorkItem(item, "ar"));

export const pinterestPlaceholderEn = {
  title: "Pinterest Boards (Curated Mood + References)",
  description: "A living set of visual references for campaign tone, color, and composition.",
  url: "https://www.pinterest.com/TamerCreates/"
};

export const pinterestPlaceholderAr = {
  title: "Pinterest Boards",
  description: "A living set of visual references for campaign tone, color, and composition.",
  url: "https://www.pinterest.com/TamerCreates/"
};
