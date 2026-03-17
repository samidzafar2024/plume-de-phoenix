import Link from "next/link";
import { CourtIcon, GradCapIcon, ScaleIcon, GlobeIcon } from "@/components/ui/icons";
import type { Locale } from "@/lib/constants/locale";

interface SplitContentSectionProps {
  locale: Locale;
}

const STAT_ICONS = [CourtIcon, GradCapIcon, ScaleIcon, GlobeIcon];

export function SplitContentSection({ locale }: SplitContentSectionProps) {
  const copy =
    locale === "fr"
      ? {
          headingSpan: "Notre",
          headingStrong: "Engagement",
          boldIntro:
            "Un accident laisse un avant et un apr\u00e8s. Vous ne devriez pas traverser cela seul.",
          body: "Plume de Phoenix est un cabinet d\u2019avocats sp\u00e9cialis\u00e9 dans la d\u00e9fense des victimes d\u2019accidents et d\u2019infractions \u2014 engag\u00e9, humaniste, cultivant l\u2019excellence, la compassion et la t\u00e9nacit\u00e9. Ma\u00eetre Sw\u00e9ta Pannagas, sp\u00e9cialiste CNB en dommages corporels, donne la parole \u00e0 ceux qui, bless\u00e9s dans leur \u00eatre m\u00eame, peinent \u00e0 mettre des mots sur leur souffrance.",
          cta: "Consultation gratuite",
          ctaHref: "#Contact",
          stats: [
            { label: "Humanit\u00e9 & bienveillance", desc: "\u00c9coute attentive" },
            { label: "Accompagnement sur-mesure", desc: "Solutions adapt\u00e9es" },
            { label: "Technicit\u00e9 & expertise", desc: "CNB sp\u00e9cialiste" },
            { label: "Ind\u00e9pendance totale", desc: "Jamais c\u00f4t\u00e9 assureur" },
          ],
        }
      : {
          headingSpan: "Our",
          headingStrong: "Commitment",
          boldIntro:
            "An accident leaves a before and an after. You shouldn\u2019t go through that alone.",
          body: "Plume de Phoenix is a law firm specializing in the defense of victims of accidents and offenses \u2014 committed, humanist, cultivating excellence, compassion, and tenacity. Ma\u00eetre Sw\u00e9ta Pannagas, CNB Specialist in personal injury, gives voice to those who, wounded in their very being, struggle to put words to their suffering.",
          cta: "Free consultation",
          ctaHref: "#Contact",
          stats: [
            { label: "Humanity & compassion", desc: "Attentive listening" },
            { label: "Tailored support", desc: "Custom solutions" },
            { label: "Expertise & rigor", desc: "CNB specialist" },
            { label: "Total independence", desc: "Never insurer-side" },
          ],
        };

  return (
    <section id="MeetTeam" className="meet-team dark-bg anm">
      <header id="MeetTeam_Header">
        <h2>
          <span>{copy.headingSpan}</span>
          <strong>{copy.headingStrong}</strong>
        </h2>
        <div className="main">
          <p>
            <strong>{copy.boldIntro}</strong>
            {" "}{copy.body}
          </p>
          <div className="meet-team-stats">
            {copy.stats.map((stat, i) => (
              <div key={stat.label} className="meet-team-stat">
                <span className="meet-team-stat-icon">{STAT_ICONS[i]}</span>
                <div>
                  <strong>{stat.label}</strong>
                  <span>{stat.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <Link href={copy.ctaHref} className="btn btn-solid">
            {copy.cta}
          </Link>
        </div>
      </header>
    </section>
  );
}
