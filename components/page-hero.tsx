import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-brand pt-24">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(46,49,146,0.45) 0%, #2E3192 85%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="hero-eyebrow text-brand-light">{eyebrow}</p>
        <h1 className="hero-title mt-2 max-w-3xl text-white">{title}</h1>
        <p className="hero-body mt-5 max-w-2xl text-white/80">{description}</p>
      </div>
    </section>
  );
}
