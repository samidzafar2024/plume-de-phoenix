import type { Locale } from "@/lib/constants/locale";

interface ProcessSectionProps {
  locale: Locale;
}

export function ProcessSection({ locale }: ProcessSectionProps) {
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Notre d\u00e9marche",
          headingStart: "Votre accompagnement,",
          headingAccent: "\u00e9tape par \u00e9tape",
          steps: [
            { title: "Contact gratuit", desc: "\u00c9change confidentiel pour \u00e9valuer votre dossier, sans frais ni engagement." },
            { title: "Analyse du dossier", desc: "Collecte des pi\u00e8ces m\u00e9dicales, de police et assurance pour un dossier solide." },
            { title: "Expertise m\u00e9dicale", desc: "Pr\u00e9sence \u00e0 vos c\u00f4t\u00e9s lors des expertises pour d\u00e9fendre votre pr\u00e9judice r\u00e9el." },
            { title: "N\u00e9gociation / Tribunal", desc: "N\u00e9gociation ferme ou proc\u00e9dure judiciaire pour obtenir la juste indemnisation." },
            { title: "R\u00e9paration int\u00e9grale", desc: "Versement de l\u2019indemnit\u00e9 compl\u00e8te \u2014 corporel, moral, \u00e9conomique, futur." },
          ],
        }
      : {
          eyebrow: "Our approach",
          headingStart: "Your support,",
          headingAccent: "step by step",
          steps: [
            { title: "Free contact", desc: "Confidential exchange to assess your case, free of charge and without obligation." },
            { title: "Case analysis", desc: "Collection of medical, police and insurance documents for a strong case." },
            { title: "Medical expertise", desc: "Being present by your side during expert assessments to defend your actual damages." },
            { title: "Negotiation / Court", desc: "Firm negotiation or legal proceedings to obtain fair compensation." },
            { title: "Full compensation", desc: "Payment of full compensation \u2014 physical, moral, economic, future." },
          ],
        };

  return (
    <section id="process" className="process-section dark-bg anm">
      <div className="main">
        <header className="process-head">
          <small className="blk">{copy.eyebrow}</small>
          <h2>
            <span>{copy.headingStart}</span>{" "}
            <strong>{copy.headingAccent}</strong>
          </h2>
        </header>
        <ol className="process-track">
          <div className="process-line" />
          {copy.steps.map((step, i) => (
            <li key={step.title} className="process-step">
              <div className="step-circle">
                <span>{i + 1}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
