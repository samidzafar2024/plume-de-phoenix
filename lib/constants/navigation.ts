export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

import type { Locale } from "@/lib/constants/locale";

const NAV_ITEMS_BY_LOCALE: Record<Locale, NavLink[]> = {
  fr: [
    { label: "Expertises", href: "#practices" },
    { label: "Ma\u00eetre Pannagas", href: "#founder" },
    { label: "D\u00e9marche", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#Contact" },
  ],
  en: [
    { label: "Expertise", href: "#practices" },
    { label: "Ma\u00eetre Pannagas", href: "#founder" },
    { label: "Approach", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#Contact" },
  ],
};

export const NAV_ITEMS = NAV_ITEMS_BY_LOCALE.fr;

export function getNavItems(locale: Locale): NavLink[] {
  return NAV_ITEMS_BY_LOCALE[locale];
}
