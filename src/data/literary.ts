type LiteraryEditionSeed = {
  label_en: string;
  label_ar: string;
  url: string;
};

type LiteraryWorkSeed = {
  slug: string;
  title_en: string;
  title_ar: string;
  source_en: string;
  source_ar: string;
  desc_en: string;
  desc_ar: string;
  poster: string;
  thumbRemoteCandidates: string[];
  editions: LiteraryEditionSeed[];
};

type Localized = "en" | "ar";

export type LiteraryWork = {
  slug: string;
  title: string;
  source: string;
  description: string;
  poster: string;
  thumbRemoteCandidates: string[];
  editions: Array<{
    label: string;
    url: string;
  }>;
};

const workSeed: LiteraryWorkSeed[] = [
  {
    slug: "men-in-the-sun",
    title_en: "Men in the Sun",
    title_ar: "رجال في الشمس",
    source_en: "Based on the novel by Ghassan Kanafani",
    source_ar: "استنادا إلى رواية غسان كنفاني",
    desc_en:
      "A bilingual literary reinterpretation shaped through compressed cinematic pacing, memory-heavy atmosphere, and an anime-inflected visual language.",
    desc_ar:
      "إعادة تصور أدبية ثنائية اللغة تُبنى عبر إيقاع سينمائي مكثف، وأجواء مثقلة بالذاكرة، ولغة بصرية تستلهم حس الأنمي من دون أن تفقد ثقل النص.",
    poster: "/media/literary/men-in-the-sun.svg",
    thumbRemoteCandidates: [
      "https://i.ytimg.com/vi/qkhfHVbYxpY/maxresdefault.jpg",
      "https://i.ytimg.com/vi/qkhfHVbYxpY/hqdefault.jpg",
      "https://i.ytimg.com/vi/uChtaUHMguY/maxresdefault.jpg",
      "https://i.ytimg.com/vi/uChtaUHMguY/hqdefault.jpg"
    ],
    editions: [
      {
        label_en: "English edition",
        label_ar: "النسخة الإنجليزية",
        url: "https://youtube.com/shorts/qkhfHVbYxpY"
      },
      {
        label_en: "Arabic edition",
        label_ar: "النسخة العربية",
        url: "https://youtu.be/uChtaUHMguY"
      }
    ]
  },
  {
    slug: "returning-to-haifa",
    title_en: "Returning to Haifa",
    title_ar: "عائد إلى حيفا",
    source_en: "Based on the novel by Ghassan Kanafani",
    source_ar: "استنادا إلى رواية غسان كنفاني",
    desc_en:
      "A bilingual short-form reinterpretation built around return, estrangement, and the unresolved emotional geometry of home, memory, and loss.",
    desc_ar:
      "إعادة تصور قصيرة ثنائية اللغة تدور حول العودة والاغتراب والبنية العاطفية غير المحسومة للبيت والذاكرة والفقد.",
    poster: "/media/literary/returning-to-haifa.svg",
    thumbRemoteCandidates: [
      "https://i.ytimg.com/vi/66JuIoZ6wGY/maxresdefault.jpg",
      "https://i.ytimg.com/vi/66JuIoZ6wGY/hqdefault.jpg",
      "https://i.ytimg.com/vi/0AmrDjtbvXE/maxresdefault.jpg",
      "https://i.ytimg.com/vi/0AmrDjtbvXE/hqdefault.jpg"
    ],
    editions: [
      {
        label_en: "Arabic edition",
        label_ar: "النسخة العربية",
        url: "https://youtu.be/66JuIoZ6wGY"
      },
      {
        label_en: "English edition",
        label_ar: "النسخة الإنجليزية",
        url: "https://youtu.be/0AmrDjtbvXE"
      }
    ]
  }
];

const localizeWork = (item: LiteraryWorkSeed, locale: Localized): LiteraryWork => ({
  slug: item.slug,
  title: locale === "ar" ? item.title_ar : item.title_en,
  source: locale === "ar" ? item.source_ar : item.source_en,
  description: locale === "ar" ? item.desc_ar : item.desc_en,
  poster: item.poster,
  thumbRemoteCandidates: item.thumbRemoteCandidates,
  editions: item.editions.map((edition) => ({
    label: locale === "ar" ? edition.label_ar : edition.label_en,
    url: edition.url
  }))
});

export const literaryWorksEn: LiteraryWork[] = workSeed.map((item) => localizeWork(item, "en"));
export const literaryWorksAr: LiteraryWork[] = workSeed.map((item) => localizeWork(item, "ar"));
