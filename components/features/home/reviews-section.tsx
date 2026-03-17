"use client";

import { useState } from "react";
import Link from "next/link";
import { CourtIcon, ScaleIcon, GlobeIcon } from "@/components/ui/icons";
import type { Locale } from "@/lib/constants/locale";

const PLAY_ICON = (
  <svg viewBox="0 0 24 24" className="fit" role="img" aria-hidden>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      d="M11.563 2.763C12.556 2.191 13.778 2.191 14.771 2.763L21.374 6.576C22.367 7.149 22.978 8.208 22.978 9.354V16.979C22.978 18.126 22.367 19.185 21.374 19.758L14.771 23.57C13.778 24.143 12.556 24.143 11.563 23.57L4.959 19.758C3.967 19.185 3.355 18.126 3.355 16.979V9.354C3.355 8.208 3.967 7.149 4.959 6.576L11.563 2.763Z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      d="M9.23 0.43C10.223-0.143 11.445-0.143 12.438 0.43L19.041 4.243C20.034 4.815 20.645 5.875 20.645 7.021V14.646C20.645 15.792 20.034 16.852 19.041 17.424L12.438 21.237C11.445 21.81 10.223 21.81 9.23 21.237L2.626 17.424C1.634 16.852 1.022 15.792 1.022 14.646V7.021C1.022 5.875 1.634 4.815 2.626 4.243L9.23 0.43Z"
    />
    <path d="M12.756 11.187L9.455 13.383C9.175 13.575 8.792 13.368 8.792 13.029V8.638C8.792 8.299 9.175 8.093 9.455 8.284L12.756 10.48C13.007 10.642 13.007 11.025 12.756 11.187Z" />
  </svg>
);

const LEFT_CHEVRON = (
  <svg viewBox="0 0 16 16" role="img" aria-hidden>
    <path d="M12.202 0.3C12.01 0.108 11.749 0 11.477 0C11.205 0 10.943 0.108 10.751 0.3L3.781 7.266C3.588 7.458 3.48 7.719 3.48 7.991C3.48 8.263 3.588 8.524 3.781 8.716L10.751 15.682C10.941 15.882 11.206 15.997 11.482 16C11.759 16.003 12.025 15.895 12.22 15.698C12.415 15.503 12.524 15.237 12.52 14.96C12.516 14.684 12.4 14.421 12.2 14.23L5.955 7.991L12.2 1.751C12.392 1.559 12.502 1.299 12.502 1.026C12.503 0.754 12.394 0.493 12.202 0.3Z" />
  </svg>
);

const RIGHT_CHEVRON = (
  <svg viewBox="0 0 16 16" role="img" aria-hidden>
    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3Z" />
  </svg>
);

function getReviews(locale: Locale) {
  if (locale === "fr") {
    return [
      {
        quote:
          "Ma\u00eetre Pannagas est tout simplement une avocate d\u2019exception\u00a0! Elle est rest\u00e9e patiente, positive, encourageante, \u00e0 l\u2019\u00e9coute et surtout pugnace avec intelligence.",
        highlight:
          "C\u2019est gr\u00e2ce \u00e0 elle que je peux enfin recouvrer dignit\u00e9 et libert\u00e9 \u00e0 50 ans.",
        rest: "",
        name: "Isabelle G.",
        initial: "I",
        stars: 5,
        role: "Victime \u00b7 Proc\u00e9dure longue et complexe",
      },
      {
        quote:
          "J\u2019ai \u00e9t\u00e9 victime d\u2019une agression par coups de couteaux. Je n\u2019avais pas beaucoup de moyens donc l\u2019avocate a trouv\u00e9 une solution pour que je la paye en partie apr\u00e8s le r\u00e9sultat.",
        highlight: "Je n\u2019ai jamais cru que j\u2019allais gagner autant d\u2019argent\u00a0!",
        rest: "C\u2019est vraiment une tr\u00e8s bonne avocate qui comprend bien les victimes.",
        name: "Vaira TH.",
        initial: "V",
        stars: 5,
        role: "Victime d\u2019agression \u00b7 Paris",
      },
      {
        quote:
          "Sw\u00e9ta Pannagas est tr\u00e8s professionnelle, tenace, qui va au fond des dossiers, ce qui a permis de d\u00e9couvrir des informations qui ont eu des cons\u00e9quences tr\u00e8s positives.",
        highlight: "Je me f\u00e9licite d\u2019avoir chang\u00e9 d\u2019avocat. Je recommande.",
        rest: "",
        name: "Christiane H.",
        initial: "C",
        stars: 5,
        role: "Dommage corporel \u00b7 Dossier complexe",
      },
      {
        quote:
          "Super, avocate tr\u00e8s \u00e0 l\u2019\u00e9coute. Elle a ce c\u00f4t\u00e9 tr\u00e8s apaisant,",
        highlight: "elle arrive \u00e0 d\u00e9celer des douleurs cach\u00e9es du pass\u00e9.",
        rest: "",
        name: "Paula P.",
        initial: "P",
        stars: 5,
        role: "Victime \u00b7 Accompagnement",
      },
      {
        quote:
          "Cabinet tr\u00e8s s\u00e9rieux et tr\u00e8s humain, tr\u00e8s bien prise en charge et vraiment tr\u00e8s satisfaite.",
        highlight: "Vraiment je conseille ce cabinet.",
        rest: "",
        name: "Catherine P.",
        initial: "C",
        stars: 5,
        role: "Victime \u00b7 Satisfaction client",
      },
      {
        quote:
          "J\u2019ai grandement appr\u00e9ci\u00e9 sa capacit\u00e9 d\u2019\u00e9coute et sa fa\u00e7on de travailler\u00a0; ses recherches m\u00e9thodiques la conduisent \u00e0 \u00e9mettre des conclusions",
        highlight: "qui laissent peu de marge de man\u0153uvre \u00e0 la partie adverse.",
        rest: "",
        name: "Alain-Pierre M.",
        initial: "A",
        stars: 5,
        role: "Dommage corporel \u00b7 Recherche m\u00e9thodique",
      },
    ] as const;
  }

  return [
    {
      quote:
        "Ma\u00eetre Pannagas is simply an exceptional attorney! She remained patient, positive, encouraging, attentive, and above all, intelligently tenacious.",
      highlight: "Thanks to her, I can finally regain my dignity and freedom at 50.",
      rest: "",
      name: "Isabelle G.",
      initial: "I",
      stars: 5,
      role: "Victim \u00b7 Long and complex procedure",
    },
    {
      quote:
        "I was a victim of a knife assault. I didn\u2019t have much money, so the lawyer found a way for me to pay in part after the outcome.",
      highlight: "I never thought I would win so much money!",
      rest: "She\u2019s a really good lawyer who truly understands victims.",
      name: "Vaira TH.",
      initial: "V",
      stars: 5,
      role: "Assault victim \u00b7 Paris",
    },
    {
      quote:
        "Sw\u00e9ta Pannagas is very professional, tenacious, and gets to the bottom of cases, which allowed her to uncover information with very positive consequences.",
      highlight: "I\u2019m glad I changed lawyers. I recommend her.",
      rest: "",
      name: "Christiane H.",
      initial: "C",
      stars: 5,
      role: "Personal injury \u00b7 Complex case",
    },
    {
      quote:
        "Wonderful lawyer, very attentive. She has this very soothing quality,",
      highlight: "she manages to uncover hidden pain from the past.",
      rest: "",
      name: "Paula P.",
      initial: "P",
      stars: 5,
      role: "Victim \u00b7 Support",
    },
    {
      quote:
        "A very serious and very humane firm. Very well taken care of and truly very satisfied.",
      highlight: "I truly recommend this firm.",
      rest: "",
      name: "Catherine P.",
      initial: "C",
      stars: 5,
      role: "Victim \u00b7 Client satisfaction",
    },
    {
      quote:
        "I greatly appreciated her listening ability and working method; her methodical research leads to conclusions",
      highlight: "that leave little room for the opposing party.",
      rest: "",
      name: "Alain-Pierre M.",
      initial: "A",
      stars: 5,
      role: "Personal injury \u00b7 Methodical approach",
    },
  ] as const;
}

interface ReviewsSectionProps {
  locale: Locale;
}

export function ReviewsSection({ locale }: ReviewsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = getReviews(locale);
  const copy =
    locale === "fr"
      ? {
          headingTop: "Ecoutez nos",
          headingStrong: "temoignages clients",
          watch: "Voir le temoignage",
          all: "Nos temoignages",
        }
      : {
          headingTop: "Hear Our",
          headingStrong: "Clients' Stories",
          watch: "Watch Video",
          all: "Our Testimonials",
        };

  const active = reviews[activeIndex];

  return (
    <section id="reviews" className="reviews v1 dark-bg anm">
      <div className="reviews-layout">
        <div className="reviews-image reviews-avatar-panel">
          <div className="reviews-avatar-large">
            <span>{active.initial}</span>
          </div>
          <div className="reviews-stars">
            {Array.from({ length: active.stars }).map((_, i) => (
              <span key={i} className="reviews-star">{"\u2605"}</span>
            ))}
          </div>
        </div>
        <div className="reviews-content">
          <header>
            <h2>
              <span>{copy.headingTop}</span>{" "}
              <strong>{copy.headingStrong}</strong>
            </h2>
          </header>
          <blockquote>
            &ldquo;{active.quote}{" "}
            <strong>{active.highlight}</strong> {active.rest}&rdquo;
            <div className="reviews-meta">
              <div className="reviews-meta-avatar">{active.initial}</div>
              <address>
                {active.name}
                <small>{active.role}</small>
              </address>
            </div>
          </blockquote>
          <div className="reviews-nav">
            <button
              type="button"
              aria-label="View previous testimonial"
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
            >
              {LEFT_CHEVRON}
            </button>
            <div className="reviews-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`reviews-dot ${i === activeIndex ? "reviews-dot-active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="View next testimonial"
              disabled={activeIndex === reviews.length - 1}
              onClick={() =>
                setActiveIndex((i) => Math.min(reviews.length - 1, i + 1))
              }
            >
              {RIGHT_CHEVRON}
            </button>
          </div>
          <Link href="#Contact" className="btn btn-outline reviews-cta">
            {copy.all}
          </Link>
        </div>
      </div>
      <div className="reviews-trust-bar">
        {(locale === "fr"
          ? [
              { icon: CourtIcon, label: "Barreau de Paris" },
              { icon: ScaleIcon, label: "Sp\u00e9cialiste CNB" },
              { label: "RGPD conforme" },
              { label: "Cabinet accessible PMR" },
              { icon: GlobeIcon, label: "France & international" },
            ]
          : [
              { icon: CourtIcon, label: "Paris Bar Association" },
              { icon: ScaleIcon, label: "CNB Specialist" },
              { label: "GDPR compliant" },
              { label: "Wheelchair accessible" },
              { icon: GlobeIcon, label: "France & international" },
            ]
        ).map((item) => (
          <div key={item.label} className="trust-item">
            {item.icon && <span className="trust-icon">{item.icon}</span>}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
