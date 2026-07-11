import { z } from "astro/zod";

const copy = z.object({ en: z.string().min(1), ar: z.string().min(1) });
const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: copy,
  summary: copy,
  lane: z.enum(["stories", "learning", "products"]),
  status: copy,
  date: copy,
  audience: copy,
  role: copy,
  challenge: copy,
  process: z.array(copy).min(2),
  deliverables: z.array(copy).min(1),
  outcome: copy,
  evidence: copy,
  media: z.string(),
  mediaAlt: copy,
  languages: copy,
  privacy: copy,
  relatedService: z.enum(["story", "workshop", "product"]),
  publicUrl: z.string().url().optional(),
  featured: z.boolean()
});

export type Project = z.infer<typeof projectSchema>;

export const projects = z.array(projectSchema).parse([
  {
    slug: "museum-of-echoes", title: { en: "Museum of Echoes", ar: "متحف الأصداء" },
    summary: { en: "Original music shaped into a bilingual public archive with editorial discovery and an authored product experience.", ar: "موسيقى أصلية تتحول إلى أرشيف استماع ثنائي اللغة بتجربة تحريرية وهوية مؤلفة." },
    lane: "products", status: { en: "Live public platform", ar: "منصة عامة حية" }, date: { en: "2026", ar: "٢٠٢٦" },
    audience: { en: "Listeners and cultural audiences", ar: "المستمعون والجمهور الثقافي" },
    role: { en: "Product direction, interface direction, curation, and release structure", ar: "توجيه المنتج والواجهة والتحرير وبنية الإصدار" },
    challenge: { en: "Original tracks needed more than a feed of uploads. They needed a world that could hold atmosphere, context, and bilingual discovery.", ar: "احتاجت المقطوعات الأصلية إلى أكثر من قائمة نشر؛ إلى عالم يحمل الجو والسياق والاكتشاف بالعربية والإنجليزية." },
    process: [
      { en: "Organized tracks as rooms, collections, and guided discovery paths.", ar: "تنظيم المقطوعات كغرف ومجموعات ومسارات اكتشاف." },
      { en: "Connected visual identity, editorial copy, listening states, and bilingual navigation.", ar: "ربط الهوية البصرية والنص التحريري وحالات الاستماع والتنقل ثنائي اللغة." }
    ],
    deliverables: [{ en: "Bilingual archive, listening interface, editorial system, and public release", ar: "أرشيف ثنائي اللغة وواجهة استماع ونظام تحريري وإصدار عام" }],
    outcome: { en: "A live platform where the music can be explored as an authored archive rather than a loose catalogue.", ar: "منصة حية تتيح اكتشاف الموسيقى كأرشيف مؤلف لا كفهرس منفصل." },
    evidence: { en: "The public platform and portfolio screens are available to inspect.", ar: "المنصة العامة وشاشات المشروع متاحة للمعاينة." },
    media: "/media/optimized/museum-of-echoes.webp", mediaAlt: { en: "Museum of Echoes listening archive homepage", ar: "الصفحة الرئيسية لأرشيف متحف الأصداء" },
    languages: { en: "Arabic and English", ar: "العربية والإنجليزية" }, privacy: { en: "Only public project material is shown.", ar: "تُعرض مواد المشروع العامة فقط." }, relatedService: "product", publicUrl: "https://museum-of-echoes.pages.dev/", featured: true
  },
  {
    slug: "ai-verification-lab", title: { en: "AI Verification Lab", ar: "مختبر التحقق من الذكاء الاصطناعي" },
    summary: { en: "A bilingual learning system that turns responsible AI practice into workflows, source packs, and a live workshop environment.", ar: "نظام تعلم ثنائي اللغة يحوّل الاستخدام المسؤول للذكاء الاصطناعي إلى مسارات عمل ومصادر وبيئة ورشة حية." },
    lane: "learning", status: { en: "Live workshop lab", ar: "مختبر ورشة حي" }, date: { en: "2026", ar: "٢٠٢٦" }, audience: { en: "Journalists, media teams, and learners", ar: "الصحفيون وفرق الإعلام والمتعلمون" },
    role: { en: "Workshop design, bilingual learning architecture, workflows, and web experience", ar: "تصميم الورشة وبنية التعلم الثنائية ومسارات العمل وتجربة الويب" },
    challenge: { en: "Fast-moving AI tools needed to become responsible, repeatable practice—not a list of demonstrations.", ar: "كان المطلوب تحويل أدوات سريعة التغير إلى ممارسة مسؤولة ومتكررة، لا إلى قائمة عروض." },
    process: [{ en: "Structured verification habits around sources, review, and human judgment.", ar: "بناء عادات تحقق حول المصادر والمراجعة والحكم البشري." }, { en: "Turned the workshop into reusable guides, maps, prompts, and a live bilingual lab.", ar: "تحويل الورشة إلى أدلة وخرائط ومحفزات ومختبر حي ثنائي اللغة." }],
    deliverables: [{ en: "Workshop system, workflow maps, source-grounded materials, and live lab", ar: "نظام ورشة وخرائط عمل ومواد قائمة على المصادر ومختبر حي" }],
    outcome: { en: "A public learning environment that makes the workshop method inspectable and reusable.", ar: "بيئة تعلم عامة تجعل منهج الورشة قابلاً للمعاينة وإعادة الاستخدام." }, evidence: { en: "The bilingual lab is publicly available; no attendance figure is claimed.", ar: "المختبر ثنائي اللغة متاح للعامة، ولا تُذكر أرقام حضور غير موثقة." },
    media: "/media/optimized/ai-verification-lab.webp", mediaAlt: { en: "AI verification workflow map", ar: "خريطة مسار التحقق من الذكاء الاصطناعي" }, languages: { en: "Arabic and English", ar: "العربية والإنجليزية" }, privacy: { en: "No participant data or private workshop material is included.", ar: "لا تُعرض بيانات مشاركين أو مواد ورشة خاصة." }, relatedService: "workshop", publicUrl: "https://ai-verification-lab.pages.dev", featured: true
  },
  {
    slug: "literary-reimaginings", title: { en: "Literary Reimaginings", ar: "إعادة تخيّل الأدب بصرياً" },
    summary: { en: "Major Palestinian novels interpreted as bilingual cinematic stories without flattening their emotional logic.", ar: "روايات فلسطينية كبرى تُؤوَّل كقصص سينمائية ثنائية اللغة دون اختزال منطقها العاطفي." },
    lane: "stories", status: { en: "Ongoing published series", ar: "سلسلة منشورة مستمرة" }, date: { en: "Ongoing", ar: "مستمر" }, audience: { en: "Cultural, literary, and bilingual audiences", ar: "الجمهور الثقافي والأدبي والثنائي اللغة" },
    role: { en: "Creative direction, visual interpretation, bilingual adaptation, and release design", ar: "الإخراج الإبداعي والتأويل البصري والتكييف الثنائي وتصميم الإصدار" },
    challenge: { en: "Adapt significant literature into short visual form without turning it into plot summary or losing memory, atmosphere, and pressure.", ar: "تكييف أدب مهم بصرياً دون تحويله إلى ملخص أو فقدان الذاكرة والجو والضغط." },
    process: [{ en: "Built each edition around a governing emotional image rather than a scene checklist.", ar: "بناء كل إصدار حول صورة عاطفية حاكمة لا قائمة مشاهد." }, { en: "Developed Arabic and English editions as related editorial objects, not literal duplicates.", ar: "تطوير النسختين العربية والإنجليزية كعملين تحريريين مترابطين لا نسختين حرفيتين." }],
    deliverables: [{ en: "Bilingual visual editions, posters, short-form releases, and series identity", ar: "إصدارات بصرية ثنائية وملصقات وإصدارات قصيرة وهوية سلسلة" }],
    outcome: { en: "A growing public series beginning with Men in the Sun and Returning to Haifa.", ar: "سلسلة عامة متنامية تبدأ برجال في الشمس وعائد إلى حيفا." }, evidence: { en: "Published public editions and portfolio excerpts are linked; no reach metrics are claimed.", ar: "توجد إصدارات عامة ومقتطفات منشورة، دون ادعاء أرقام وصول." },
    media: "/media/literary/returning-to-haifa.svg", mediaAlt: { en: "Returning to Haifa literary edition poster", ar: "ملصق إصدار عائد إلى حيفا" }, languages: { en: "Arabic and English", ar: "العربية والإنجليزية" }, privacy: { en: "Public interpretive work only.", ar: "تُعرض أعمال التأويل العامة فقط." }, relatedService: "story", publicUrl: "https://youtu.be/66JuIoZ6wGY", featured: true
  },
  {
    slug: "anbiya-visuals", title: { en: "Anbiya Visuals", ar: "مرئيات الأنبياء" }, summary: { en: "Client-safe excerpts from complete AI-assisted story films, showing worldbuilding, scene direction, pacing, and continuity.", ar: "مقتطفات آمنة للعرض من أفلام قصصية كاملة بمساعدة الذكاء الاصطناعي، تُظهر بناء العالم والإيقاع والاستمرارية." },
    lane: "stories", status: { en: "Selected client-safe production case", ar: "حالة إنتاج مختارة وآمنة للعميل" }, date: { en: "Selected work", ar: "عمل مختار" }, audience: { en: "Story-film and educational audiences", ar: "جمهور الأفلام القصصية والتعليمية" }, role: { en: "AI-assisted film production and creative direction", ar: "إنتاج أفلام بمساعدة الذكاء الاصطناعي وإخراج إبداعي" },
    challenge: { en: "Longer story films required a coherent world, scene rhythm, and visual continuity across many generated assets.", ar: "احتاجت الأفلام الأطول إلى عالم متماسك وإيقاع مشاهد واستمرارية بصرية عبر مواد مولدة كثيرة." }, process: [{ en: "Defined visual worlds, scene intent, and continuity checkpoints.", ar: "تحديد العوالم البصرية وهدف المشهد ونقاط مراجعة الاستمرارية." }, { en: "Edited selected excerpts for public proof while preserving confidential boundaries.", ar: "تحرير مقتطفات عامة مع الحفاظ على حدود السرية." }], deliverables: [{ en: "Complete story-film production with selected public excerpts", ar: "إنتاج أفلام قصصية كاملة مع مقتطفات عامة مختارة" }], outcome: { en: "A portfolio-safe view of production direction across larger films.", ar: "عرض آمن للمحفظة يوضح توجيه الإنتاج في أفلام أكبر." }, evidence: { en: "Only selected excerpts and approved public framing are shown.", ar: "تُعرض مقتطفات مختارة وصياغة عامة فقط." }, media: "/media/optimized/anbiya-visuals.webp", mediaAlt: { en: "Anbiya Visuals story-film production still", ar: "لقطة من إنتاج مرئيات الأنبياء" }, languages: { en: "Primarily Arabic; portfolio context in both languages", ar: "العربية أساساً، وسياق المحفظة باللغتين" }, privacy: { en: "Client details, internal files, and unapproved production information remain private.", ar: "تبقى تفاصيل العميل والملفات الداخلية ومعلومات الإنتاج غير المعتمدة خاصة." }, relatedService: "story", featured: false
  },
  {
    slug: "knowledge-products", title: { en: "Knowledge Products", ar: "منتجات المعرفة" }, summary: { en: "Dense source material rebuilt as visual briefings, teaching decks, worksheets, and marketplace-ready learning products.", ar: "مواد كثيفة يعاد بناؤها كإحاطات بصرية وعروض تعليمية وأوراق عمل ومنتجات جاهزة للسوق." },
    lane: "products", status: { en: "Published product lane", ar: "مسار منتجات منشور" }, date: { en: "Ongoing", ar: "مستمر" }, audience: { en: "Educators, facilitators, learners, and teams", ar: "المعلمون والميسّرون والمتعلمون والفرق" }, role: { en: "Knowledge design, visual structure, packaging, and production systems", ar: "تصميم المعرفة والبنية البصرية والتغليف وأنظمة الإنتاج" }, challenge: { en: "Complex material needed to become teachable and usable without losing its core argument.", ar: "كان المطلوب جعل المواد المعقدة قابلة للتعليم والاستخدام دون فقدان حجتها الأساسية." }, process: [{ en: "Mapped source logic before choosing visual format.", ar: "رسم منطق المصدر قبل اختيار الشكل البصري." }, { en: "Built repeatable structures for decks, worksheets, checks, and product packaging.", ar: "بناء هياكل متكررة للعروض والأوراق والتقييم والتغليف." }], deliverables: [{ en: "Book-to-deck systems and teacher-ready product packs", ar: "أنظمة تحويل الكتب إلى عروض وحزم جاهزة للمعلمين" }], outcome: { en: "Public previews show how research becomes a finished learning product.", ar: "توضح المعاينات العامة كيف يتحول البحث إلى منتج تعلم مكتمل." }, evidence: { en: "Published portfolio previews and a public TPT storefront are available.", ar: "تتوفر معاينات منشورة ومتجر عام على TPT." }, media: "/media/optimized/knowledge-products.webp", mediaAlt: { en: "Book-to-deck visual reconstruction preview", ar: "معاينة إعادة بناء كتاب كعرض بصري" }, languages: { en: "Arabic and English depending on product", ar: "العربية أو الإنجليزية بحسب المنتج" }, privacy: { en: "Only public previews and non-sensitive product context are shown.", ar: "تُعرض المعاينات العامة والسياق غير الحساس فقط." }, relatedService: "product", publicUrl: "https://www.teacherspayteachers.com/store/primary-learning-visualised", featured: false
  }
]);

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
export const featuredProjects = projects.filter((project) => project.featured);

export const laneLabels = {
  stories: { en: "Stories & Media", ar: "القصص والإعلام" },
  learning: { en: "Learning & Workshops", ar: "التعلم والورشات" },
  products: { en: "Products & Platforms", ar: "المنتجات والمنصات" }
} as const;

export const labItems = [
  { title: { en: "Palestine Visual Lab", ar: "مختبر فلسطين البصري" }, date: "2026", status: { en: "Live prototype", ar: "نموذج حي" }, tested: { en: "A public-facing Palestinian visual culture tool and product surface.", ar: "أداة عامة للثقافة البصرية الفلسطينية وسطح منتج." }, learned: { en: "Cultural reference tools need clear provenance and a focused public task.", ar: "تحتاج أدوات المرجع الثقافي إلى مصدر واضح ومهمة عامة مركزة." }, url: "https://palestine-visual-lab.pages.dev" },
  { title: { en: "NotebookLM source systems", ar: "أنظمة مصادر NotebookLM" }, date: "2026", status: { en: "Experiment", ar: "تجربة" }, tested: { en: "Source packs, learning blueprints, and research-to-presentation workflows.", ar: "حزم مصادر ومخططات تعلم ومسارات من البحث إلى العرض." }, learned: { en: "The value is the source architecture and review habit, not the tool label.", ar: "القيمة في بنية المصادر وعادة المراجعة لا في اسم الأداة." } },
  { title: { en: "Pinterest direction boards", ar: "لوحات التوجيه على Pinterest" }, date: "Ongoing", status: { en: "Archive", ar: "أرشيف" }, tested: { en: "Tone, wardrobe, composition, texture, and cultural research for pre-production.", ar: "النبرة والملابس والتكوين والملمس والبحث الثقافي قبل الإنتاج." }, learned: { en: "Reference collections are strongest when tied to a production decision.", ar: "تكون المراجع أقوى حين ترتبط بقرار إنتاجي." }, url: "https://www.pinterest.com/TamerCreates/" },
  { title: { en: "Flappy Flip", ar: "Flappy Flip" }, date: "2026", status: { en: "Experiment", ar: "تجربة" }, tested: { en: "A compact casual-game loop and short-form release packaging.", ar: "حلقة لعبة خفيفة وتغليف إصدار قصير." }, learned: { en: "Small games are useful product-learning exercises but should not lead the portfolio.", ar: "الألعاب الصغيرة تمارين مفيدة لتعلم المنتج لكنها لا تقود المحفظة." } },
  { title: { en: "Sakina App", ar: "تطبيق سكينة" }, date: "2026", status: { en: "Live prototype", ar: "نموذج حي" }, tested: { en: "A calm bilingual reflection product with a mobile-first interaction model.", ar: "منتج تأمل هادئ ثنائي اللغة بتفاعل مصمم للموبايل." }, learned: { en: "Trust, calm pacing, and clear boundaries matter more than feature density.", ar: "الثقة والإيقاع الهادئ والحدود الواضحة أهم من كثافة الميزات." } }
] as const;

