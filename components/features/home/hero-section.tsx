import Link from "next/link";
import type { Locale } from "@/lib/constants/locale";

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const heroVideoSrc =
    "https://videos.pexels.com/video-files/5527785/5527785-hd_1920_1080_25fps.mp4";
  const copy =
    locale === "fr"
      ? {
          tagline: "Avocate sp\u00e9cialiste \u00b7 Dommage corporel \u00b7 CNB",
          above: "Vous \u00eates",
          hero: "victime.",
          below: "Nous vous d\u00e9fendons.",
          description:
            "Accidents graves de la route, traumatismes cr\u00e2niens, b\u00e9b\u00e9 secou\u00e9, grands br\u00fbl\u00e9s, victimes d\u2019infractions. Ma\u00eetre Pannagas donne la parole \u00e0 ceux qui peinent \u00e0 mettre des mots sur leur souffrance.",
          ctaPrimary: "Consultation gratuite",
          ctaSecondary: "Nos domaines d\u2019expertise",
          heroVideoLabel: "Vid\u00e9o de fond du hero",
        }
      : {
          tagline: "Specialist lawyer \u00b7 Personal injury \u00b7 CNB",
          above: "You were a",
          hero: "victim.",
          below: "We are defending you.",
          description:
            "Serious road accidents, traumatic brain injuries, shaken baby syndrome, severe burns, victims of crime. Ma\u00eetre Pannagas gives voice to those who struggle to express their suffering.",
          ctaPrimary: "Free consultation",
          ctaSecondary: "Our areas of expertise",
          heroVideoLabel: "Hero background video",
        };

  const rootHref = locale === "fr" ? "/" : "/en";

  return (
    <section
      id="Mainstage_V1"
      className={`hero-v2 dark-bg anm locale-${locale}`}
    >
      <figure className="bg" aria-hidden>
        <video
          playsInline
          autoPlay
          loop
          muted
          preload="metadata"
          src={heroVideoSrc}
          aria-label={copy.heroVideoLabel}
        />
      </figure>

      {/* Large decorative watermark */}
      <div className="hero-watermark" aria-hidden>
        <span>{copy.hero}</span>
      </div>

      <div className="hero-v2-inner">
        <div className="hero-v2-content">
          <span className="hero-v2-tagline">
            <span className="hero-tag-dot" />
            {copy.tagline}
            <span className="hero-tag-dot" />
          </span>

          <div className="hero-text-stack">
            <span className="hero-above">{copy.above}</span>
            <h1 className="hero-word">
              {copy.hero}
              <span className="hero-glow" aria-hidden />
            </h1>
            <div className="hero-divider">
              <span className="hero-div-line" />
              <span className="hero-div-diamond" />
              <span className="hero-div-line" />
            </div>
            <h2 className="hero-below">{copy.below}</h2>
          </div>

          <p className="hero-v2-desc">{copy.description}</p>

          <div className="hero-v2-ctas">
            <Link href={`${rootHref}#Contact`} className="btn hero-btn-primary">
              {copy.ctaPrimary}
              <span className="hero-btn-arrow" aria-hidden>{"\u2192"}</span>
            </Link>
            <Link href={`${rootHref}#practices`} className="btn hero-btn-ghost">
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
