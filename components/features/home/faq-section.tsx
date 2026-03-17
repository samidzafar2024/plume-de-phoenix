"use client";

import { useState } from "react";
import type { Locale } from "@/lib/constants/locale";

interface FaqSectionProps {
  locale: Locale;
}

function getFaqItems(locale: Locale) {
  if (locale === "fr") {
    return [
      {
        q: "Combien puis-je obtenir apr\u00e8s un accident de la route grave\u00a0?",
        a: "L\u2019indemnisation d\u00e9pend des pr\u00e9judices\u00a0: d\u00e9ficit fonctionnel, perte de revenus, pr\u00e9judice moral, soins futurs\u2026 Elle peut \u00eatre bien sup\u00e9rieure \u00e0 l\u2019offre initiale de l\u2019assureur.",
      },
      {
        q: "L\u2019assurance m\u2019a fait une offre \u2014 dois-je accepter\u00a0?",
        a: "Non, jamais sans avis d\u2019un avocat sp\u00e9cialis\u00e9. Les premi\u00e8res offres des assureurs sous-\u00e9valuent syst\u00e9matiquement les pr\u00e9judices. Un sp\u00e9cialiste CNB obtient g\u00e9n\u00e9ralement bien plus.",
      },
      {
        q: "Qu\u2019est-ce que le titre de sp\u00e9cialiste CNB\u00a0?",
        a: "Titre prot\u00e9g\u00e9 d\u00e9livr\u00e9 par le Conseil National des Barreaux. Ma\u00eetre Pannagas est reconnue sp\u00e9cialiste en dommage corporel avec qualification accidents de la route \u2014 un gage de s\u00e9rieux unique.",
      },
      {
        q: "Comment prouver les s\u00e9quelles d\u2019un traumatisme cr\u00e2nien\u00a0?",
        a: "Par des bilans neuropsychologiques, IRM fonctionnels et un m\u00e9decin conseil. Notre sp\u00e9cialit\u00e9\u00a0: documenter et d\u00e9fendre les s\u00e9quelles cognitives peu visibles mais invalidantes.",
      },
      {
        q: "Mon b\u00e9b\u00e9 a \u00e9t\u00e9 secou\u00e9 \u2014 que faire en urgence\u00a0?",
        a: "Consultez imm\u00e9diatement les urgences et demandez un scanner. Contactez-nous rapidement\u00a0: la prescription commence t\u00f4t et il faut pr\u00e9server toutes les preuves m\u00e9dicales.",
      },
      {
        q: "Intervenez-vous pour des victimes fran\u00e7aises \u00e0 l\u2019\u00e9tranger\u00a0?",
        a: "Oui. Ma\u00eetre Pannagas intervient pour les victimes fran\u00e7aises accident\u00e9es \u00e0 l\u2019\u00e9tranger, y compris dans des affaires collectives (victimes de Crans-Montana).",
      },
      {
        q: "Quels sont vos honoraires\u00a0?",
        a: "Solutions adapt\u00e9es \u00e0 chaque situation, y compris des honoraires de r\u00e9sultat pour les victimes sans moyens d\u2019avance. Premi\u00e8re consultation toujours gratuite.",
      },
      {
        q: "Quel est le d\u00e9lai de prescription pour agir\u00a0?",
        a: "Variable selon les cas \u2014 en g\u00e9n\u00e9ral 10 ans \u00e0 compter de la consolidation, mais certains d\u00e9lais sont plus courts. Ne tardez pas \u00e0 consulter pour pr\u00e9server vos droits.",
      },
    ];
  }

  return [
    {
      q: "How much compensation can I receive after a serious road accident?",
      a: "Compensation depends on the damages: functional impairment, loss of income, moral damage, future care\u2026 It can be much higher than the insurer\u2019s initial offer.",
    },
    {
      q: "The insurance company made me an offer \u2014 should I accept?",
      a: "No, never without the advice of a specialist lawyer. Insurers\u2019 initial offers systematically undervalue the damages. A CNB specialist generally obtains significantly more.",
    },
    {
      q: "What is the CNB specialist title?",
      a: "Protected title issued by the National Bar Council. Ma\u00eetre Pannagas is a recognized specialist in personal injury with a qualification in road accidents \u2014 a guarantee of unparalleled professionalism.",
    },
    {
      q: "How can the after-effects of a head injury be proven?",
      a: "Through neuropsychological assessments, functional MRIs, and a medical consultant. Our specialty: documenting and advocating for subtle but debilitating cognitive impairments.",
    },
    {
      q: "My baby was shaken \u2014 what should I do in an emergency?",
      a: "Go to the emergency room immediately and request a CT scan. Contact us promptly: the prescription process begins early, and all medical evidence must be preserved.",
    },
    {
      q: "Do you intervene on behalf of French victims abroad?",
      a: "Yes. Ma\u00eetre Pannagas intervenes for French victims of accidents abroad, including in collective cases (victims of Crans-Montana).",
    },
    {
      q: "What are your fees?",
      a: "Solutions tailored to each situation, including contingency fees for victims without upfront funds. Initial consultation always free.",
    },
    {
      q: "What is the statute of limitations for taking legal action?",
      a: "It varies depending on the case \u2014 generally 10 years from the date of consolidation, but some periods are shorter. Don\u2019t delay in seeking advice to protect your rights.",
    },
  ];
}

export function FaqSection({ locale }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = getFaqItems(locale);

  const copy =
    locale === "fr"
      ? {
          eyebrow: "Questions fr\u00e9quentes",
          headingStart: "Vos questions,",
          headingAccent: "nos r\u00e9ponses",
          desc: "Ce que nous demandent le plus souvent les victimes et leurs proches.",
          note: "Ces r\u00e9ponses sont informatives. Chaque situation est unique \u2014 consultez Ma\u00eetre Pannagas pour une analyse personnalis\u00e9e.",
        }
      : {
          eyebrow: "Frequently asked questions",
          headingStart: "Your questions,",
          headingAccent: "our answers",
          desc: "This is what victims and their relatives most often ask us.",
          note: "These answers are for informational purposes only. Every situation is unique \u2014 consult Ma\u00eetre Pannagas for a personalized analysis.",
        };

  return (
    <section id="faq" className="faq-section dark-bg anm">
      <div className="main">
        <header className="faq-head">
          <small className="blk">{copy.eyebrow}</small>
          <h2>
            <span>{copy.headingStart}</span>{" "}
            <strong>{copy.headingAccent}</strong>
          </h2>
          <p>{copy.desc}</p>
        </header>
        <div className="faq-grid">
          {items.map((item, i) => (
            <button
              key={item.q}
              type="button"
              className={`faq-item ${openIndex === i ? "faq-item-open" : ""}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="faq-plus">{openIndex === i ? "\u2212" : "+"}</span>
              <h4>{item.q}</h4>
              <div className="faq-answer" aria-hidden={openIndex !== i}>
                <p>{item.a}</p>
              </div>
            </button>
          ))}
        </div>
        <p className="faq-note">{copy.note}</p>
      </div>
    </section>
  );
}
