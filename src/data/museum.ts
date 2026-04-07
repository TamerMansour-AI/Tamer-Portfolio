type MuseumRoomSeed = {
  title_en: string;
  title_ar: string;
  label_en: string;
  label_ar: string;
  desc_en: string;
  desc_ar: string;
  image: string;
};

type Localized = "en" | "ar";

export type MuseumRoom = {
  title: string;
  label: string;
  description: string;
  image: string;
};

const roomSeed: MuseumRoomSeed[] = [
  {
    title_en: "Archive of Jasmine",
    title_ar: "أرشيف الياسمين",
    label_en: "Night Listening",
    label_ar: "استماع ليلي",
    desc_en:
      "A warm Levantine opening that shows how the platform frames original music as a room with atmosphere, tags, and editorial context instead of a loose upload.",
    desc_ar:
      "مدخل دافئ بطابع مشرقي يوضح كيف تقدم المنصة الموسيقى الأصلية كغرفة لها جوها وسياقها التحريري وعلاماتها، لا كملف مرفوع بلا بناء.",
    image: "/media/museum/archive-of-jasmine.jpg"
  },
  {
    title_en: "When the Museum Wakes After Midnight",
    title_ar: "حين يستيقظ المتحف بعد منتصف الليل",
    label_en: "Museum Nocturne",
    label_ar: "ليليات المتحف",
    desc_en:
      "A museum-noir electroacoustic piece that gives the project its clearest identity: premium, nocturnal, curated, and built as an authored listening world.",
    desc_ar:
      "قطعة كهربوصوتية ليلية تمنح المشروع أوضح هوياته: عمل فاخر، ليلي، منسق بعناية، ومبني كعالم استماع مؤلف لا كمكتبة عامة فقط.",
    image: "/media/museum/when-the-museum-wakes-after-midnight.jpg"
  },
  {
    title_en: "Courtyard of Two Civilizations",
    title_ar: "فناء حضارتين",
    label_en: "Crossroads & Caravans",
    label_ar: "مفترقات وقوافل",
    desc_en:
      "A cross-historical chamber work that shows the archive is not only aesthetic packaging. It holds research texture, cultural restraint, and transregional listening logic.",
    desc_ar:
      "قطعة حجرة عابرة للتواريخ تؤكد أن الأرشيف ليس مجرد تغليف جمالي، بل يحمل ملمسًا بحثيًا وضبطًا ثقافيًا ومنطق استماع عابرًا للمناطق.",
    image: "/media/museum/courtyard-of-two-civilizations.jpg"
  }
];

const localizeRoom = (room: MuseumRoomSeed, locale: Localized): MuseumRoom => ({
  title: locale === "ar" ? room.title_ar : room.title_en,
  label: locale === "ar" ? room.label_ar : room.label_en,
  description: locale === "ar" ? room.desc_ar : room.desc_en,
  image: room.image
});

export const museumRoomsEn = roomSeed.map((room) => localizeRoom(room, "en"));
export const museumRoomsAr = roomSeed.map((room) => localizeRoom(room, "ar"));
