"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSite } from "@/lib/constants/site";
import { getNavItems, type NavLink } from "@/lib/constants/navigation";
import type { Locale } from "@/lib/constants/locale";

function NavItem({ item }: { item: NavLink }) {
  const hasChildren = item.children && item.children.length > 0;
  const isExternal = item.href.startsWith("http");

  return (
    <li className="nlf-wrap-middle rel" role="menuitem">
      {hasChildren ? (
        <>
          <Link href={item.href}>{item.label}</Link>
          <span className="el-tab nlf-middle-center stretch-self rel" aria-hidden />
          <div className="el-panel">
            <ul className="ui-scroll" role="menu">
              {item.children!.map((child) => (
                <li key={child.href} className="nlf-wrap-middle rel" role="menuitem">
                  <Link
                    href={child.href}
                    target={child.href.startsWith("http") ? "_blank" : undefined}
                    rel={child.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Link
          href={item.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {item.label}
        </Link>
      )}
    </li>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "fr";
  const site = getSite(locale);
  const navItems = getNavItems(locale);

  const labels =
    locale === "fr"
      ? {
          contact: "Contact",
          cta: "Consultation gratuite",
          urgency:
            "Delai de prescription : vos droits peuvent s'eteindre. Premiere consultation gratuite.",
          languageSwitch: "EN",
          languageHref: "/en",
          ariaHome: "Accueil",
        }
      : {
          contact: "Contact",
          cta: "Free consultation",
          urgency:
            "Statute of limitations: your rights can expire. First consultation is free.",
          languageSwitch: "FR",
          languageHref: "/",
          ariaHome: "Home",
        };

  return (
    <header id="HeaderZone">
      <div className="text-center dark-bg" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
        {labels.urgency}
      </div>
      <section id="Header" className="masthead nlf-middle-between dark-bg">
        <Link
          className="top-logo fit"
          href={locale === "fr" ? "/" : "/en"}
          aria-label={labels.ariaHome}
          title={labels.ariaHome}
        >
          {/* Add public/logo.webp for image logo; otherwise text shows */}
          <span
            className="blk"
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "rgb(var(--secondary))",
              letterSpacing: "-0.02em",
            }}
          >
            {site.name}
          </span>
        </Link>

        <nav
          className={`top-nav auto el-tab-box block-1200 ${mobileMenuOpen ? "menu-open" : ""}`}
          id="TopNav"
          role="navigation"
          aria-label="Primary"
        >
          <ul className="nlf-center block-1200" role="menu">
            {navItems.map((item) => (
              <NavItem key={item.href + item.label} item={item} />
            ))}
            <li className="nlf-wrap-middle rel show-1200" role="menuitem">
              <Link href="#Contact">{labels.contact}</Link>
            </li>
          </ul>

          <div className="mobile-search nlf-middle fit show-1200" style={{ display: "none" }}>
            <div className="input-text">
              <label htmlFor="header-search" className="ninja">
                Search
              </label>
              <input
                type="search"
                placeholder="Search"
                id="header-search"
                className="ui-cms-input"
                aria-label="Search"
              />
            </div>
            <button type="submit" aria-label="Search">
              <svg viewBox="0 0 16 16" role="img" aria-hidden>
                <path d="M0.313 15.687C0.513 15.888 0.784 16 1.068 16C1.351 16 1.622 15.888 1.822 15.687L4.98 12.532C6.877 13.918 9.347 14.248 11.542 13.41C13.737 12.57 15.358 10.677 15.847 8.38C16.338 6.082 15.63 3.692 13.969 2.031C12.308 0.37 9.918-0.338 7.62 0.153C5.323 0.642 3.43 2.263 2.59 4.458C1.752 6.653 2.082 9.123 3.468 11.02L0.314 14.178C0.112 14.378 0 14.649 0 14.932C0 15.216 0.112 15.486 0.313 15.687ZM9.067 2.133C10.34 2.133 11.561 2.638 12.461 3.539C13.362 4.439 13.867 5.66 13.867 6.933C13.867 8.206 13.362 9.427 12.461 10.327C11.561 11.228 10.34 11.733 9.067 11.733C7.794 11.733 6.574 11.228 5.673 10.327C4.772 9.427 4.267 8.206 4.267 6.933C4.267 5.66 4.772 4.439 5.673 3.539C6.573 2.638 7.794 2.133 9.067 2.133Z" />
              </svg>
            </button>
          </div>

          <Link href="#Contact" className="btn nlf-inline-middle-center show-1200">
            <svg viewBox="0 0 24 24" role="img" className="fit" aria-hidden>
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M12.9 18.9H1.8c-0.6 0-1.2-0.5-1.2-1.2v-14c0-0.6 0.5-1.2 1.2-1.2H17c0.6 0 1.2 0.5 1.2 1.2v10M0.6 6.1h17.6M3.5 2.5V0.8M15.2 2.5V0.8M18.1 23.6c2.9 0 5.3-2.2 5.3-5c0-2.7-2.4-5-5.3-5s-5.3 2.2-5.3 5C12.9 21.4 15.2 23.6 18.1 23.6zM18.1 15.4v3.5M17.6 18.9h2.9M5.9 9H3.5v2.3h2.3V9zM5.9 13.7H3.5V16h2.3V13.7zM10.5 13.7H8.2V16h2.3V13.7zM10.5 9H8.2v2.3h2.3V9zM15.2 9h-2.3v2.3h2.3V9z"
              />
            </svg>
            {labels.cta}
          </Link>
        </nav>

        <div className="contact-info fit hide-800">
          <strong className="blk">{site.consultation}</strong>
          <a href={site.phoneHref} id="Header_1">
            {site.phone}
          </a>
        </div>

        <Link href="#Contact" className="btn hide-800">
          {labels.contact}
        </Link>

        <Link href={labels.languageHref} className="btn hide-800" style={{ marginLeft: "0.5rem" }}>
          {labels.languageSwitch}
        </Link>

        {/* Mobile: phone + hamburger */}
        <div className="mobile-header-right show-1200">
          <a href={site.phoneHref} className="mobile-phone-btn" aria-label={site.phone}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label="Toggle Primary Navigation Menu"
            aria-controls="TopNav"
            aria-expanded={mobileMenuOpen}
            aria-haspopup="true"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <a className="anchor" id="SiteTop" href="#SiteTop" aria-hidden />
      </section>
    </header>
  );
}
