export type Locale = "en" | "ar";
export type RouteKey = "home" | "work" | "art" | "ways" | "workshops" | "systems" | "lab" | "archive" | "about" | "contact" | "privacy";

export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { en: "/", ar: "/ar/" },
  work: { en: "/work/", ar: "/ar/work/" },
  art: { en: "/visual-art/", ar: "/ar/visual-art/" },
  ways: { en: "/ways-to-work/", ar: "/ar/ways-to-work/" },
  workshops: { en: "/workshops/", ar: "/ar/workshops/" },
  systems: { en: "/systems/", ar: "/ar/systems/" },
  lab: { en: "/lab/", ar: "/ar/lab/" },
  archive: { en: "/archive/", ar: "/ar/archive/" },
  about: { en: "/about/", ar: "/ar/about/" },
  contact: { en: "/contact/", ar: "/ar/contact/" },
  privacy: { en: "/privacy/", ar: "/ar/privacy/" }
};

export const routeFor = (key: RouteKey, locale: Locale) => routes[key][locale];

export const navLabels: Record<Locale, Record<RouteKey, string>> = {
  en: { home: "Home", work: "Work", art: "Visual Art", ways: "Ways to work", workshops: "Workshops", systems: "Agents & Systems", lab: "Lab", archive: "Archive", about: "About", contact: "Contact", privacy: "Privacy" },
  ar: { home: "الرئيسية", work: "الأعمال", art: "الفن البصري", ways: "طرق التعاون", workshops: "الورشات", systems: "الوكلاء والأنظمة", lab: "المختبر", archive: "الأرشيف", about: "عن تامر", contact: "تواصل", privacy: "الخصوصية" }
};

export const localizedPath = (path: string, locale: Locale) => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (/^\/ar\/work\/[^/]+\/$/.test(clean)) return locale === "ar" ? clean : clean.replace(/^\/ar/, "");
  if (/^\/work\/[^/]+\/$/.test(clean)) return locale === "ar" ? `/ar${clean}` : clean;
  const pair = Object.values(routes).find((item) => item.en === clean || item.ar === clean);
  return pair?.[locale] ?? routes.home[locale];
};
