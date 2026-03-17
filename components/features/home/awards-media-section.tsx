import Link from "next/link";
import Image from "next/image";

const AWARD_ALTS = [
  "Best Law Firms 2025",
  "Best Law Firms 2024",
  "Best Law Firms 2023",
  "Best Law Firms 2022",
  "Best Law Firms 2021",
  "Best Lawyers 2025",
  "Super Lawyers",
  "LawDragon 500",
  "Inner Circle of Advocates",
  "Top 100 Trial Lawyers",
  "Texas Lawyer Top Verdicts",
  "Best Lawyers in America",
];

const MEDIA_LOGOs = [
  { name: "CNN", src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&q=80" },
  { name: "Forbes", src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=120&q=80" },
  { name: "ABC", src: "https://images.unsplash.com/photo-1596524430615-b46477ddc040?w=120&q=80" },
  { name: "Wall Street Journal", src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=120&q=80" },
  { name: "CBS", src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=120&q=80" },
  { name: "USA Today", src: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=120&q=80" },
  { name: "Reuters", src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&q=80" },
  { name: "NBC News", src: "https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=120&q=80" },
];

export function AwardsMediaSection() {
  return (
    <section id="Awards_Media" className="awards-media dark-bg">
      <div className="nlf-middle-reverse anm">
        <figure className="ai_clip fit rel awards-ai-clip">
          <svg width="0" height="0" aria-hidden>
            <defs>
              <clipPath id="AIclipAwards" clipPathUnits="objectBoundingBox">
                <path
                  transform="scale(0.00067,0.00115)"
                  d="M1422.2,128.1L1492,0h-445.1l69.7,128.1V556l171,308.5H1492l-69.8-128.1V128.1z M735.2,0H425.6l55,99.3L115.2,758.8L0,864.6h315.5l-76.4-113.1l73.8-133.2h455.3l72.6,131l-77.9,115.3h451.5L735.2,0z M371.1,513.3l169.5-305.8L710,513.3H371.1z"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="bg awards-ai-clip-inner">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 800px) 80vw, 40vw"
            />
          </div>
        </figure>
        <header className="auto">
          <h2>
            <span>No Matter</span> <strong>Who You Ask</strong>
          </h2>
          <p>
            We&apos;ve consistently received the legal industry&apos;s <strong>highest honors</strong>,
            won the nation&apos;s largest results, and been repeatedly featured in both local and national
            news publications. We&apos;re proud of these honors and deeply grateful to the clients who
            continually put their trust in our team.
          </p>
        </header>
      </div>
      <div className="awards text-center anm">
        <span className="blk">Awards &amp; Honors</span>
        <ul className="nlf-wrap awards-grid">
          {AWARD_ALTS.map((alt, i) => (
            <li key={i} className="fourth auto nlf-middle-center anm">
              <div className="award-placeholder" title={alt}>
                {alt.replace(/ \d{4}$/, "").slice(0, 2)}
              </div>
            </li>
          ))}
        </ul>
        <Link href="/awards-honors/" className="btn">
          Our Awards
        </Link>
      </div>
      <div className="media text-center anm">
        <span className="blk">Media Mentions</span>
        <ul className="nlf-wrap media-logos">
          {MEDIA_LOGOs.map((m) => (
            <li key={m.name} className="media-logo-item">
              <Image src={m.src} alt={m.name} width={80} height={40} className="media-logo-img" />
            </li>
          ))}
        </ul>
        <Link href="/in-the-news/" className="btn">
          Featured News
        </Link>
      </div>
    </section>
  );
}
