import Link from "next/link";
import Image from "next/image";

export function MeetTeamSection() {
  return (
    <section id="MeetTeam" className="meet-team dark-bg anm">
      <header id="MeetTeam_Header">
        <h2>
          <span>Meet the</span>
          <strong>Arnold & Itkin Team</strong>
        </h2>
        <div className="main">
          <p>
            <strong>Our attorneys will never be outworked.</strong>
            When our Texas personal injury lawyers represent a client, we&apos;re all in. We&apos;re
            a firm that never stops fighting for our clients. We won&apos;t back down. While some
            firms dread the late nights, the war room preparation, and going to trial, we live for
            it. That dedication and commitment to our clients is a big part of how we win the
            biggest verdicts and settlements in the U.S.
          </p>
          <Link href="/meet-our-attorneys/" className="btn">
            Meet the Team
          </Link>
        </div>
      </header>
      <div className="rel">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
          alt=""
          width={1200}
          height={600}
          className="full"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
