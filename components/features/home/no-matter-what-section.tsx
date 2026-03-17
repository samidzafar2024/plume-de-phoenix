import Image from "next/image";

export function NoMatterWhatSection() {
  return (
    <section id="NoMatterWhat" className="nmw text-center nlf-middle dark-bg anm">
      <figure className="nmw-figure rel">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80"
          alt=""
          fill
          className="full object-cover"
          sizes="100vw"
        />
      </figure>
      <div className="main">
        <header>
          <h2>
            No Matter What<sub>™</sub>
          </h2>
        </header>
      </div>
    </section>
  );
}
