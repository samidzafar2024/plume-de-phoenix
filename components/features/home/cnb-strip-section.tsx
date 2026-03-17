import { CourtIcon, GradCapIcon, ScaleIcon, GlobeIcon } from "@/components/ui/icons";
import type { Locale } from "@/lib/constants/locale";

interface CnbStripSectionProps {
  locale: Locale;
}

const ICONS = [CourtIcon, GradCapIcon, ScaleIcon, GlobeIcon];

export function CnbStripSection({ locale }: CnbStripSectionProps) {
  const items =
    locale === "fr"
      ? [
          { title: "Sp\u00e9cialiste CNB (titre prot\u00e9g\u00e9)", desc: "Conseil National des Barreaux" },
          { title: "Dipl\u00f4m\u00e9e traumatisme cr\u00e2nien", desc: "Enfant, adolescent & b\u00e9b\u00e9 secou\u00e9" },
          { title: "15+ ans d\u2019exp\u00e9rience", desc: "Exclusivement au service des victimes" },
          { title: "France enti\u00e8re & international", desc: "Enghien \u00b7 Paris \u00b7 Dom-Tom \u00b7 Visio" },
        ]
      : [
          { title: "CNB Specialist (protected title)", desc: "National Bar Council" },
          { title: "Graduate in traumatic brain injury", desc: "Child, adolescent & shaken baby" },
          { title: "15+ years of experience", desc: "Exclusively serving the victims" },
          { title: "France & international", desc: "Enghien \u00b7 Paris \u00b7 Overseas \u00b7 Video" },
        ];

  return (
    <div className="cnb-strip">
      <div className="cnb-strip-inner">
        {items.map((item, i) => (
          <div key={item.title} className="cnb-strip-item-wrap">
            {i > 0 && <div className="cnb-sep" />}
            <div className="cnb-item">
              <span className="cnb-item-icon">{ICONS[i]}</span>
              <div className="cnb-item-text">
                <strong>{item.title}</strong>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
