import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import type { Package } from "@/data/packages";
import { categoryLabels } from "@/data/packages";

interface Props {
  pkg: Package;
}

const packageImages: Record<string, string> = {
  "israel-classico": "/images/card-israel.jpg",
  "israel-egito": "/images/card-egypt.jpg",
  "turquia-biblica": "/images/card-turkey.jpg",
  "turquia-ilhas-gregas": "/images/card-greece.jpg",
  "7-igrejas-costa-amalfitana": "/images/card-amalfi.jpg",
  "educacao-sete-igrejas-profundidade": "/images/card-ephesus.jpg",
};

const categoryFallbacks: Record<string, string> = {
  "viagens-biblicas":
    "https://images.unsplash.com/photo-1731159623938-6739cda3c509?w=800&q=80",
  "7-igrejas":
    "https://images.unsplash.com/photo-1677653692322-9e0f3dc42bae?w=800&q=80",
  educacao:
    "https://images.unsplash.com/photo-1466175743059-5393a020726c?w=800&q=80",
  casais:
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
};

export default function PackageCard({ pkg }: Props) {
  const imgSrc = packageImages[pkg.slug] ?? categoryFallbacks[pkg.category];
  return (
    <Link
      href={`/roteiros/${pkg.slug}`}
      className="group flex flex-col bg-white border border-dark/12 transition-colors duration-300 hover:border-amber/70"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imgSrc}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/45 via-transparent to-transparent" />
        {pkg.badge && (
          <span className="absolute top-4 right-4 bg-cream text-dark text-[9px] font-bold uppercase tracking-[0.14em] px-3 py-2">
            {pkg.badge}
          </span>
        )}
        <span className="absolute bottom-4 left-5 text-[9px] font-bold uppercase tracking-[0.16em] text-white">
          {categoryLabels[pkg.category]}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-[1.8rem] font-medium text-dark leading-none">
          {pkg.title}
          </h3>
          <ArrowUpRight
            size={17}
            className="mt-1 shrink-0 text-dark/30 group-hover:text-amber transition-colors"
          />
        </div>
        <p className="text-[10px] uppercase text-amber-dark font-bold mt-3 mb-5 tracking-[0.12em]">
          {pkg.subtitle}
        </p>

        <div className="flex flex-wrap gap-4 text-[11px] text-dark/45 mb-5">
          <span className="flex items-center gap-1">
            <Clock size={11} /> {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={11} /> {pkg.destinations.join(", ")}
          </span>
        </div>

        <p className="text-sm text-dark/55 leading-6 line-clamp-3 flex-1">
          {pkg.description}
        </p>

        <div className="mt-6 flex items-center justify-between pt-5 border-t border-dark/10">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-dark/75">
            {pkg.price === "Consulte" ? (
              <span>Consulte-nos</span>
            ) : (
              pkg.price
            )}
          </span>
          <span className="text-[10px] font-bold uppercase text-amber tracking-[0.14em]">
            Ver roteiro
          </span>
        </div>
      </div>
    </Link>
  );
}
