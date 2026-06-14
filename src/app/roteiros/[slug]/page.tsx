import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
  Download,
  Phone,
} from "lucide-react";
import {
  packages,
  getPackageBySlug,
  getPackagesByCategory,
  categoryLabels,
} from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";
import InternalHero from "@/components/layout/InternalHero";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Roteiro não encontrado" };
  return {
    title: pkg.title,
    description: pkg.description,
  };
}

const heroFallbacks: Record<string, string> = {
  "viagens-biblicas": "/images/heroes/internal-jerusalem.png",
  "7-igrejas": "/images/heroes/internal-ephesus.png",
  educacao: "/images/heroes/internal-education.png",
  casais: "/images/heroes/internal-couples.png",
};

export default async function RoteiroPagina({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const related = getPackagesByCategory(pkg.category)
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 3);

  const heroImg = heroFallbacks[pkg.category];

  return (
    <div>
      <InternalHero
        eyebrow={categoryLabels[pkg.category]}
        title={pkg.title}
        description={pkg.subtitle}
        image={heroImg}
        imageAlt={`Paisagem representativa do roteiro ${pkg.title}`}
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-white/72 text-xs">
          {pkg.badge && (
            <span className="border border-amber/60 text-amber-light px-3 py-1.5 rounded-full uppercase tracking-[0.12em] font-bold">
              {pkg.badge}
            </span>
          )}
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {pkg.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {pkg.destinations.join(" · ")}
            </span>
          </div>
      </InternalHero>

      {/* Body */}
      <div className="bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-dark mb-4">
                  Sobre este Roteiro
                </h2>
                <p className="text-dark/70 leading-relaxed text-base">
                  {pkg.description}
                </p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-dark mb-4">
                  Destaques do Roteiro
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={16}
                        className="text-amber mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-dark/70">{h}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Includes / Not Includes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <section className="bg-white rounded-2xl p-6 border border-cream-dark">
                  <h3 className="font-heading font-semibold text-dark mb-4 flex items-center gap-2">
                    <CheckCircle size={18} className="text-amber" />
                    O que está incluído
                  </h3>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-dark/70"
                      >
                        <span className="w-1.5 h-1.5 bg-amber rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-white rounded-2xl p-6 border border-cream-dark">
                  <h3 className="font-heading font-semibold text-dark mb-4 flex items-center gap-2">
                    <XCircle size={18} className="text-dark/30" />
                    Não está incluído
                  </h3>
                  <ul className="space-y-2">
                    {pkg.notIncludes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-dark/60"
                      >
                        <span className="w-1.5 h-1.5 bg-dark/20 rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Price / CTA card */}
              <div className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm sticky top-28">
                <div className="mb-4">
                  <div className="text-xs text-dark/40 uppercase tracking-wider mb-1">
                    Valor
                  </div>
                  <div className="text-2xl font-heading font-bold text-amber">
                    {pkg.price}
                  </div>
                  <p className="text-xs text-dark/50 mt-1">
                    Valores e condições sujeitos a disponibilidade
                  </p>
                </div>

                <a
                  href={`https://wa.me/19545894651?text=Olá! Tenho interesse no roteiro: ${encodeURIComponent(pkg.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white font-semibold px-5 py-3.5 rounded-xl transition-colors mb-3"
                >
                  <Phone size={16} />
                  Solicitar Proposta
                </a>

                <Link
                  href="/contato"
                  className="w-full flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-5 py-3.5 rounded-xl transition-colors text-sm"
                >
                  Enviar Mensagem
                </Link>

                {pkg.pdfUrl && (
                  <a
                    href={pkg.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full flex items-center justify-center gap-2 text-amber hover:underline text-sm font-medium"
                  >
                    <Download size={14} />
                    Baixar Roteiro PDF
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-bold text-dark mb-6">
                Roteiros Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <PackageCard key={r.slug} pkg={r} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
