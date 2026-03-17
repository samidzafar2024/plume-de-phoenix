import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/constants/locale";

interface PracticeItem {
  title: string;
  summary: string;
  image: string;
  priority?: boolean;
}

function getPractices(locale: Locale): PracticeItem[] {
  if (locale === "fr") {
    return [
      { title: "Victime d\u2019un accident de la route", summary: "Victimes de collisions, pi\u00e9tons renvers\u00e9s, passagers bless\u00e9s. Loi Badinter, FGAO, indemnisation maximale.", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=1200&q=80&fit=crop", priority: true },
      { title: "Victime d\u2019un traumatisme cr\u00e2nien", summary: "S\u00e9quelles cognitives invisibles, expertises m\u00e9dicales contradictoires, indemnisation des proches et aidants.", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=1200&q=80&fit=crop", priority: true },
      { title: "Indemnisation des pr\u00e9judices corporels", summary: "Pr\u00e9judice physique, moral et \u00e9conomique. R\u00e9paration int\u00e9grale pour chaque victime.", image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&h=1200&q=80&fit=crop" },
      { title: "Victimes d\u2019accidents et d\u2019infractions", summary: "Agressions, homicides, viols, soumission chimique. Constitution de partie civile, FGTI.", image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=1200&q=80&fit=crop" },
      { title: "Victime d\u2019un accident m\u00e9dical", summary: "Responsabilit\u00e9 m\u00e9dicale, ONIAM, infections nosocomiales.", image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=1200&q=80&fit=crop" },
      { title: "F\u00e9minicide, violences VIF & soumission chimique", summary: "Accompagnement des survivantes et familles.", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&h=1200&q=80&fit=crop" },
      { title: "Syndrome du b\u00e9b\u00e9 secou\u00e9", summary: "Dipl\u00f4me sp\u00e9cifique. D\u00e9fense des jeunes enfants victimes de violences. Accompagnement des familles.", image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=1200&q=80&fit=crop" },
      { title: "Indemnisation des grands br\u00fbl\u00e9s et des familles", summary: "Victimes de br\u00fblures graves. Victimes fran\u00e7aises \u00e0 l\u2019\u00e9tranger (Crans-Montana).", image: "https://images.unsplash.com/photo-1587691592099-24045742c181?w=800&h=1200&q=80&fit=crop" },
      { title: "Victime d\u2019un accident du travail", summary: "Faute inexcusable de l\u2019employeur, indemnisation compl\u00e9mentaire.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1200&q=80&fit=crop" },
      { title: "Accidents de ski", summary: "Collisions sur pistes, remont\u00e9es m\u00e9caniques, domaine skiable. France et international.", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1200&q=80&fit=crop" },
      { title: "Victimes d\u2019accidents \u00e0 l\u2019\u00e9tranger", summary: "Victimes fran\u00e7aises accident\u00e9es \u00e0 l\u2019\u00e9tranger, affaires collectives, droit international.", image: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800&h=1200&q=80&fit=crop" },
    ];
  }

  return [
    { title: "Serious road accident victim", summary: "Collision victims, pedestrians, injured passengers. Badinter Law, FGAO, maximum compensation.", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=1200&q=80&fit=crop", priority: true },
    { title: "Traumatic brain injury victim", summary: "Invisible cognitive after-effects, conflicting medical expertise, compensation for families and caregivers.", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=1200&q=80&fit=crop", priority: true },
    { title: "Personal injury compensation", summary: "Physical, moral and economic damages. Full compensation for every victim.", image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&h=1200&q=80&fit=crop" },
    { title: "Victims of accidents & crimes", summary: "Assaults, homicides, rapes, chemical submission. Civil party claims, FGTI.", image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=1200&q=80&fit=crop" },
    { title: "Medical accident victim", summary: "Hospital liability, medical errors, ONIAM claims.", image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=1200&q=80&fit=crop" },
    { title: "Feminicide, domestic violence & chemical submission", summary: "Support for survivors and families.", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&h=1200&q=80&fit=crop" },
    { title: "Shaken baby syndrome", summary: "Specific diploma. Defense of young children who are victims of violence. Support for families.", image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=1200&q=80&fit=crop" },
    { title: "Severe burn victims & families", summary: "Compensation for severe burns. French victims abroad (Crans-Montana).", image: "https://images.unsplash.com/photo-1587691592099-24045742c181?w=800&h=1200&q=80&fit=crop" },
    { title: "Work accident victim", summary: "Employer\u2019s gross negligence, supplementary compensation beyond social benefits.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1200&q=80&fit=crop" },
    { title: "Ski accidents", summary: "Slope collisions, ski lifts, ski area liability. France and international.", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1200&q=80&fit=crop" },
    { title: "Victims of accidents abroad", summary: "French victims injured abroad, collective cases, international law.", image: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800&h=1200&q=80&fit=crop" },
  ];
}

interface PracticesSectionProps {
  locale: Locale;
}

export function PracticesSection({ locale }: PracticesSectionProps) {
  const practices = getPractices(locale);
  const copy =
    locale === "fr"
      ? {
          headingTop: "Nos domaines",
          headingStrong: "d'expertise",
          intro:
            "Maitre Pannagas defend toutes les victimes de dommages corporels graves, des accidents les plus courants aux situations les plus sensibles.",
          cta: "Tous nos domaines",
        }
      : {
          headingTop: "Our Areas",
          headingStrong: "of Practice",
          intro:
            "Our legal team is dedicated to defending the rights of those who have been severely injured, as well as their families.",
          cta: "All Cases We Handle",
        };

  return (
    <section id="practices" className="practices v1 dark-bg anm">
      <header className="practices-header">
        <h2 className="three-fifths">
          <span>{copy.headingTop}</span>{" "}
          <strong className="blk fit">{copy.headingStrong}</strong>
        </h2>
        <div className="two-fifths">
          <p>{copy.intro}</p>
          <Link href="#Contact" className="btn btn-outline">
            {copy.cta}
          </Link>
        </div>
      </header>
      <nav className="nlf practices-nav">
        {practices.map((practice) => (
          <Link
            key={practice.title}
            href="#Contact"
            className="auto rel nlf-top-column-between practice-card"
          >
            <div className="bg practice-card-bg">
              <Image
                src={practice.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 550px) 100vw, (max-width: 1000px) 50vw, 14vw"
              />
            </div>
            {practice.priority && <span className="practice-priority">{locale === "fr" ? "Priorit\u00e9" : "Priority"}</span>}
            <strong className="blk fit rel">{practice.title}</strong>
            <div className="practice-card-content">
              <p>{practice.summary}</p>
            </div>
          </Link>
        ))}
      </nav>
    </section>
  );
}
