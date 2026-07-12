export type Locale = "en" | "ar";
export type RouteKey = "home" | "work" | "ways" | "workshops" | "lab" | "archive" | "about" | "contact";

export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { en: "/", ar: "/ar/" },
  work: { en: "/work/", ar: "/ar/work/" },
  ways: { en: "/ways-to-work/", ar: "/ar/ways-to-work/" },
  workshops: { en: "/workshops/", ar: "/ar/workshops/" },
  lab: { en: "/lab/", ar: "/ar/lab/" },
  archive: { en: "/archive/", ar: "/ar/archive/" },
  about: { en: "/about/", ar: "/ar/about/" },
  contact: { en: "/contact/", ar: "/ar/contact/" }
};

export const routeFor = (key: RouteKey, locale: Locale) => routes[key][locale];

export const navLabels: Record<Locale, Record<RouteKey, string>> = {
  en: { home: "Home", work: "Work", ways: "Ways to work", workshops: "Workshops", lab: "Lab", archive: "Archive", about: "About", contact: "Contact" },
  ar: { home: "الرئيسية", work: "الأعمال", ways: "طرق التعاون", workshops: "الورشات", lab: "المختبر", archive: "الأرشيف", about: "عن تامر", contact: "تواصل" }
};

export const localizedPath = (path: string, locale: Locale) => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (/^\/ar\/work\/[^/]+\/$/.test(clean)) return locale === "ar" ? clean : clean.replace(/^\/ar/, "");
  if (/^\/work\/[^/]+\/$/.test(clean)) return locale === "ar" ? `/ar${clean}` : clean;
  const pair = Object.values(routes).find((item) => item.en === clean || item.ar === clean);
  return pair?.[locale] ?? routes.home[locale];
};
