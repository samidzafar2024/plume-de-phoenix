import Link from "next/link";
import Image from "next/image";
import { CourtIcon, GradCapIcon, ScaleIcon, HandshakeIcon } from "@/components/ui/icons";
import type { Locale } from "@/lib/constants/locale";

const CRED_ICONS = [CourtIcon, GradCapIcon, ScaleIcon, HandshakeIcon];

interface FoundersSectionProps {
  locale: Locale;
}

export function FoundersSection({ locale }: FoundersSectionProps) {
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Votre avocate",
          name: "Ma\u00eetre",
          nameAccent: "Sw\u00e9ta Pannagas",
          sub: "Avocate sp\u00e9cialiste en dommage corporel \u00b7 Barreau de Paris",
          bio: "Depuis plus de 15 ans, Ma\u00eetre Pannagas consacre sa pratique exclusivement \u00e0 la d\u00e9fense des victimes. Reconnue sp\u00e9cialiste en dommage corporel par le Conseil National des Barreaux (titre prot\u00e9g\u00e9, avec qualification sp\u00e9cifique accidents de la route), elle porte la voix de ceux qui, atteints dans leur chair et leur sang, ont du mal \u00e0 mettre des mots sur leurs souffrances.",
          bio2: "Elle est \u00e9galement dipl\u00f4m\u00e9e en traumatisme cr\u00e2nien, sp\u00e9cifiquement de l\u2019enfant, l\u2019adolescent et le syndrome du b\u00e9b\u00e9 secou\u00e9. Le cabinet intervient dans toute la France, les Dom-Tom, et \u00e0 l\u2019international.",
          creds: [
            { title: "Sp\u00e9cialiste CNB \u2014 titre prot\u00e9g\u00e9", desc: "Qualification sp\u00e9cifique accidents de la route \u00b7 Conseil National des Barreaux" },
            { title: "Dipl\u00f4m\u00e9e en traumatisme cr\u00e2nien", desc: "Enfant, adolescent, syndrome du b\u00e9b\u00e9 secou\u00e9 \u2014 formation sp\u00e9cifique" },
            { title: "Exclusivement au service des victimes", desc: "Aucun dossier c\u00f4t\u00e9 assureur ou d\u00e9fense \u2014 ind\u00e9pendance et engagement total" },
            { title: "Honoraires adapt\u00e9s \u00e0 chaque situation", desc: "Solutions sur mesure, honoraires de r\u00e9sultat, accessibilit\u00e9 financi\u00e8re pour les victimes" },
          ],
          stats: [
            { value: "15+", label: "Ann\u00e9es d\u2019exp\u00e9rience" },
            { value: "100%", label: "D\u00e9di\u00e9 aux victimes" },
            { value: "FR", label: "France & international" },
            { value: "CNB", label: "Titre prot\u00e9g\u00e9" },
          ],
          badgeNum: "15+",
          badgeLabel: "Ans au service\ndes victimes",
          cta: "Prendre rendez-vous",
        }
      : {
          eyebrow: "Your lawyer",
          name: "Ma\u00eetre",
          nameAccent: "Sw\u00e9ta Pannagas",
          sub: "Personal injury specialist attorney \u00b7 Paris Bar",
          bio: "For over 15 years, Ma\u00eetre Pannagas has dedicated her practice exclusively to defending victims. Recognized as a specialist in personal injury by the National Bar Council (a protected title, with specific qualifications in road traffic accidents), she gives voice to those who, physically and emotionally scarred, struggle to express their suffering.",
          bio2: "She also holds a diploma in traumatic brain injury, specifically in children, adolescents, and shaken baby syndrome. The firm handles cases throughout France, its overseas territories, and internationally.",
          creds: [
            { title: "CNB Specialist \u2014 protected title", desc: "Specific qualification in road accident law \u00b7 National Bar Council" },
            { title: "Graduate in traumatic brain injury", desc: "Child, adolescent, shaken baby syndrome \u2014 specific training" },
            { title: "Exclusively serving the victims", desc: "No cases on the insurer\u2019s or defense side \u2014 total independence and commitment" },
            { title: "Fees tailored to each situation", desc: "Tailor-made solutions, success fees, financial accessibility for victims" },
          ],
          stats: [
            { value: "15+", label: "Years of experience" },
            { value: "100%", label: "Dedicated to victims" },
            { value: "FR", label: "France & international" },
            { value: "CNB", label: "Protected title" },
          ],
          badgeNum: "15+",
          badgeLabel: "Years serving\nvictims",
          cta: "Book consultation",
        };

  return (
    <section id="founder" className="lawyer-section dark-bg anm">
      <div className="main">
        <div className="lawyer-grid">
          <div className="lawyer-portrait-wrap">
            <div className="lawyer-portrait">
              <Image
                src="https://www.plumedephoenix.com/docs/mcith/mcith_2200x1800_image0_23.jpeg"
                alt={`${copy.name} ${copy.nameAccent}`}
                fill
                className="object-cover"
                sizes="(max-width: 1000px) 100vw, 40vw"
              />
            </div>
            <div className="lawyer-badge">
              <strong>{copy.badgeNum}</strong>
              <span>{copy.badgeLabel}</span>
            </div>
          </div>

          <div className="lawyer-text">
            <small className="blk lawyer-eyebrow">{copy.eyebrow}</small>
            <h2>
              {copy.name} <em>{copy.nameAccent}</em>
            </h2>
            <p className="lawyer-sub">{copy.sub}</p>
            <p className="lawyer-bio">
              {copy.bio}
              <br /><br />
              {copy.bio2}
            </p>

            <div className="lawyer-creds">
              {copy.creds.map((cred, i) => (
                <div key={cred.title} className="cred-row">
                  <span className="cred-icon">{CRED_ICONS[i]}</span>
                  <div className="cred-body">
                    <h4>{cred.title}</h4>
                    <p>{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lawyer-stats">
              {copy.stats.map((stat) => (
                <div key={stat.label} className="l-stat">
                  <span className="l-stat-num">{stat.value}</span>
                  <span className="l-stat-lbl">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link href="#Contact" className="btn">
              {copy.cta} <span aria-hidden>\u2192</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
