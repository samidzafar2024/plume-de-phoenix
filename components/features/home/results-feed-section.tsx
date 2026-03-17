import Image from "next/image";

const A_CLIP_SVG = (
  <svg width="0" height="0" aria-hidden>
    <defs>
      <clipPath id="AIclip" clipPathUnits="objectBoundingBox">
        <path
          transform="scale(0.00067, 0.00115)"
          d="M1422.2,128.1L1492,0h-445.1l69.7,128.1V556l171,308.5H1492l-69.8-128.1V128.1z M735.2,0H425.6l55,99.3L115.2,758.8L0,864.6h315.5l-76.4-113.1l73.8-133.2h455.3l72.6,131l-77.9,115.3h451.5L735.2,0z M371.1,513.3l169.5-305.8L710,513.3H371.1z"
        />
      </clipPath>
    </defs>
  </svg>
);

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" role="img" aria-hidden>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      d="M10.223 0.476C11.323-0.159 12.677-0.159 13.777 0.476L21.092 4.699C22.191 5.334 22.869 6.507 22.869 7.777V16.223C22.869 17.493 22.191 18.667 21.092 19.301L13.777 23.524C12.677 24.159 11.323 24.159 10.223 23.524L2.908 19.301C1.809 18.667 1.131 17.493 1.131 16.223V7.777C1.131 6.507 1.809 5.334 2.908 4.699L10.223 0.476Z"
    />
    <path d="M16.815 9.602L11.087 15.33C10.83 15.587 10.413 15.587 10.155 15.33L7.185 12.359C6.928 12.102 6.928 11.685 7.185 11.428C7.443 11.17 7.859 11.17 8.117 11.428L10.484 13.795C10.52 13.831 10.57 13.852 10.621 13.852C10.673 13.852 10.722 13.831 10.759 13.795L15.883 8.67C16.14 8.412 16.558 8.412 16.815 8.67C17.072 8.927 17.072 9.345 16.815 9.602Z" />
  </svg>
);

const HIGHLIGHTS = [
  {
    label: "Titre protege",
    amount: "Specialiste",
    unit: "CNB",
    description:
      "Reconnue par le Conseil National des Barreaux en dommage corporel",
  },
  {
    label: "Au service des victimes",
    amount: "15+",
    unit: "ans",
    description:
      "D'experience exclusive dans la defense des victimes",
  },
  {
    label: "Engagement total",
    amount: "100%",
    unit: "victimes",
    description:
      "Aucun dossier cote assureur — independance et engagement total",
  },
  {
    label: "Couverture nationale",
    amount: "France",
    unit: "& international",
    description:
      "Enghien-les-Bains, Paris, DOM-TOM et victimes francaises a l'etranger",
  },
] as const;

export function ResultsFeedSection() {
  return (
    <section id="Results_FeedV1" className="results v1 dark-bg anm">
      <figure className="results-ai-clip" aria-hidden>
        {A_CLIP_SVG}
        <div className="results-ai-clip-inner">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1000px) 100vw, 50vw"
          />
        </div>
      </figure>
      <div className="results-content">
        <ul className="h_gap rel">
          {HIGHLIGHTS.map((item, index) => (
            <li key={index}>
              <small className="nlf-middle">
                {CHECK_ICON}
                {item.label}
              </small>
              <strong className="blk">
                {item.amount} <b>{item.unit}</b>
              </strong>
              <h3 className="nlf-top">{item.description}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
