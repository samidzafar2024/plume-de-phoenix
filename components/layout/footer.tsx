 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSite } from "@/lib/constants/site";
import type { Locale } from "@/lib/constants/locale";

const SOCIAL = [
  { href: "https://www.facebook.com/PlumeDePhoenixAvocats/", label: "Facebook" },
  { href: "https://www.linkedin.com/in/sw%C3%A9ta-pannagas-plume-de-phoenix-13747618/", label: "LinkedIn" },
  { href: "https://www.instagram.com/lavocatedesvictimes_s.pannagas/", label: "Instagram" },
  { href: "https://www.youtube.com/channel/UC-EtBVOqlfmG-Uz7jC0moDQ", label: "YouTube" },
  { href: "https://twitter.com/SwetaPannagas", label: "Twitter" },
] as const;

export function Footer() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "fr";
  const site = getSite(locale);
  const labels =
    locale === "fr"
      ? {
          home: "Accueil",
          lawyer: "A propos & confiance",
          expertise: "Expertises",
          values: "Pourquoi nous choisir",
          contact: "Contact",
          officeLocations: "Adresses du cabinet",
          directions: "Itineraire",
          viewWebsite: "Voir le site",
          legal: "Mentions legales",
          rgpd: "RGPD",
        }
      : {
          home: "Home",
          lawyer: "About & trust",
          expertise: "Expertise",
          values: "Why choose us",
          contact: "Contact",
          officeLocations: "Office locations",
          directions: "Directions",
          viewWebsite: "View website",
          legal: "Legal notice",
          rgpd: "Privacy",
        };

  const footerNav = [
    { href: locale === "fr" ? "/" : "/en", label: labels.home },
    { href: "#MeetTeam", label: labels.lawyer },
    { href: "#practices", label: labels.expertise },
    { href: "#founder", label: labels.values },
    { href: "#faq", label: "FAQ" },
    { href: "#Contact", label: labels.contact },
  ] as const;

  const offices = [
    {
      city: "Enghien-les-Bains",
      address: "3 rue Blanche - RDC",
      cityStateZip: "95880 Enghien-les-Bains",
      phoneHref: site.phoneHref,
      phoneDisplay: site.phone,
      directions: "https://maps.google.com",
      website: locale === "fr" ? "/" : "/en",
    },
    {
      city: "Paris Opera",
      address: "11 Avenue de l'Opera",
      cityStateZip: "75001 Paris",
      phoneHref: site.phoneHref,
      phoneDisplay: site.phone,
      directions: "https://maps.google.com",
      website: locale === "fr" ? "/" : "/en",
    },
  ] as const;

  return (
    <footer id="FooterZone">
      <section id="Footer" className="footer dark-bg">
        <div className="nlf-middle h-gap top-foot text-center">
          <Link href={locale === "fr" ? "/" : "/en"} className="foot-logo third" aria-label={`${site.name} Home`}>
            <span className="footer-logo-text">{site.name}</span>
          </Link>
          <div className="contact-info third nlf">
            <div>
              <strong className="blk">{site.consultation}</strong>
              <a href={site.phoneHref} id="Footer_1">
                {site.phone}
              </a>
            </div>
          </div>
          <ul className="social nlf-wrap-end third">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a href={s.href} title={s.label} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon" aria-hidden>{s.label.slice(0, 1)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <ul className="nlf-middle-center block-550">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="locations">
          <strong className="blk text-center">{labels.officeLocations}</strong>
          <ul className="nlf-center-wrap gap-sm block-800">
            {offices.map((office) => (
              <li key={office.city} className="third nlf-column block-550 rel">
                <address className="rel auto">
                  <h3>{office.city}</h3>
                  <span>{office.address}</span>
                  <br />
                  <span>{office.cityStateZip}</span>
                  <br />
                  <a href={office.phoneHref}>{office.phoneDisplay}</a>
                  <br />
                  <a href={office.directions} className="simple-btn" target="_blank" rel="noopener noreferrer">
                    {labels.directions}
                  </a>
                  <br />
                  <Link href={office.website} className="simple-btn">
                    {labels.viewWebsite}
                  </Link>
                </address>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center" style={{ marginTop: "1.5rem", fontSize: "0.72rem", color: "rgba(var(--white), 0.25)" }}>
          &copy; {new Date().getFullYear()} Plume de Phoenix &middot; Ma&icirc;tre Sw&eacute;ta Pannagas &middot; Barreau de Paris &middot; 3 rue Blanche, 95880 Enghien-les-Bains
          <br />
          {labels.legal} &middot; Cookies &middot; {labels.rgpd}
        </p>
      </section>
    </footer>
  );
}
