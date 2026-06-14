import Image from "next/image";

interface InternalHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
  position?: string;
}

export default function InternalHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
  position = "center",
}: InternalHeroProps) {
  return (
    <section className="relative min-h-[560px] lg:min-h-[620px] flex items-end overflow-hidden bg-navy-dark">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,17,23,0.96)_0%,rgba(5,17,23,0.84)_36%,rgba(5,17,23,0.38)_65%,rgba(5,17,23,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,17,23,0.38)_0%,rgba(5,17,23,0.04)_45%,rgba(5,17,23,0.58)_100%)]" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-40 pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <span className="eyebrow text-amber-light">{eyebrow}</span>
          <h1 className="mt-5 font-heading text-[3.4rem] sm:text-[4.7rem] lg:text-[5.8rem] font-medium text-white leading-[0.9] tracking-[-0.04em]">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-sm sm:text-base text-white/68 leading-7">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
