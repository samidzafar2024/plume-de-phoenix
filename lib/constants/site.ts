import type { Locale } from "@/lib/constants/locale";

const SITE_BY_LOCALE = {
  fr: {
    name: "Plume de Phoenix",
    tagline: "Avocat de la resilience",
    phone: "01 77 02 04 55",
    phoneHref: "tel:0177020455",
    consultation: "Consultation gratuite",
  },
  en: {
    name: "Phoenix Feather",
    tagline: "Advocate for resilience",
    phone: "01 77 02 04 55",
    phoneHref: "tel:0177020455",
    consultation: "Free consultation",
  },
} as const;

export function getSite(locale: Locale) {
  return SITE_BY_LOCALE[locale];
}

export const SITE = SITE_BY_LOCALE.fr;
