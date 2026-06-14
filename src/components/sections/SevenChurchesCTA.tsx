import Link from "next/link";
import Image from "next/image";

const highlights = [
  "7 Igrejas & Costa Amalfitana",
  "7 Igrejas & Aurora Boreal",
  "7 Igrejas & Alpes Suíços",
  "7 Igrejas & História da Bíblia",
  "7 Igrejas & Londres de John Wesley",
  "7 Igrejas & Riviera Turca",
];

export default function SevenChurchesCTA() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1677653692322-9e0f3dc42bae?w=800&q=80"
                alt="Éfeso — As Sete Igrejas do Apocalipse"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Coleção exclusiva</span>
            <h2 className="section-title mt-5">
              Sete Igrejas,
              <br />
              infinitas descobertas.
            </h2>
            <p className="mt-7 text-dark/60 leading-7">
              As Sete Igrejas do Apocalipse na Turquia combinadas com os
              destinos mais deslumbrantes do mundo. Uma coleção exclusiva que
              une profundidade bíblica com experiências inesquecíveis.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border-t border-dark/15 pt-7">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs text-dark/60">
                  <span className="w-5 h-px bg-amber shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/7-igrejas"
                className="lux-button bg-navy hover:bg-navy-dark text-white"
              >
                Ver Coleção Completa
              </Link>
              <a
                href="https://wa.me/19545894651"
                target="_blank"
                rel="noopener noreferrer"
                className="lux-button border border-navy/40 text-navy hover:bg-navy hover:text-white"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
