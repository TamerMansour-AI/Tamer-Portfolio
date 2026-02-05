export type NavItem = {
  label: string;
  href: string;
};

export const navEn: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work/" },
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];

export const navAr: NavItem[] = [
  { label: "الرئيسية", href: "/ar/" },
  { label: "الأعمال", href: "/ar/work/" },
  { label: "الخدمات", href: "/ar/services/" },
  { label: "من أنا", href: "/ar/about/" },
  { label: "المدونة", href: "/ar/blog/" },
  { label: "تواصل", href: "/ar/contact/" }
];
