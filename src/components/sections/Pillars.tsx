import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Viagens Bíblicas",
    subtitle: "Israel, Turquia, Grécia, Egito e mais",
    description:
      "Caravanas completas pelos destinos bíblicos mais importantes do mundo. Caminhe pelos mesmos lugares que os profetas, os apóstolos e Jesus.",
    href: "/viagens-biblicas",
  },
  {
    number: "02",
    title: "Coleção 7 Igrejas",
    subtitle: "Apocalipse + Experiências Exclusivas",
    description:
      "As Sete Igrejas do Apocalipse na Turquia combinadas com destinos únicos: Costa Amalfitana, Aurora Boreal, Alpes Suíços e muito mais.",
    href: "/7-igrejas",
  },
  {
    number: "03",
    title: "Carmel Educação",
    subtitle: "Aprendizado em campo para pastores",
    description:
      "Não é uma viagem com guia. É aprendizado em campo. Professores, teólogos e arqueólogos conduzem estudos nos próprios locais bíblicos.",
    href: "/carmel-educacao",
  },
  {
    number: "04",
    title: "Carmel Casais",
    subtitle: "Destinos românticos com palavra",
    description:
      "Retiros e viagens para casais com lazer, momentos de conexão e uma palavra que fortalece o relacionamento. Nacionais e internacionais.",
    href: "/carmel-casais",
  },
];

export default function Pillars() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-14 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1677653692322-9e0f3dc42bae?w=1200&q=85"
                alt="Ruínas históricas de uma antiga cidade bíblica"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-7 right-0 sm:-right-7 bg-navy text-white w-40 h-36 flex flex-col justify-center px-7">
              <span className="font-heading text-5xl leading-none text-amber-light">20+</span>
              <span className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/65">
                anos criando jornadas
              </span>
            </div>
          </div>

          <div className="pt-8 lg:pt-0">
            <span className="eyebrow">Sobre a Carmel</span>
            <h2 className="section-title mt-5 max-w-2xl">
              Viagens que atravessam a história e alcançam a alma.
            </h2>
            <div className="mt-9">
              <div>
                <p className="text-dark/65 leading-7">
                  Há mais de duas décadas, desenhamos experiências internacionais
                  para quem busca mais do que conhecer um destino. Cada roteiro
                  combina contexto bíblico, cuidado humano e uma operação
                  criteriosa do primeiro contato ao retorno para casa.
                </p>
                <p className="mt-4 text-dark/65 leading-7">
                  Trabalhamos ao lado de pastores, líderes e grupos para criar
                  jornadas profundas, seguras e memoráveis.
                </p>
                <Link
                  href="/sobre"
                  className="lux-button mt-8 bg-amber hover:bg-amber-dark text-white"
                >
                  Conheça nossa história
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 lg:mt-36 border-t border-dark/15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative py-9 lg:px-7 border-b lg:border-b-0 border-dark/15 lg:border-r last:border-r-0 first:lg:pl-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-amber">
                    {pillar.number}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-dark/35 group-hover:text-amber transition-colors"
                  />
                </div>
                <h3 className="font-heading text-3xl font-medium mt-8">{pillar.title}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-amber-dark font-bold">
                  {pillar.subtitle}
                </p>
                <p className="mt-5 text-sm text-dark/55 leading-6">
                  {pillar.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
