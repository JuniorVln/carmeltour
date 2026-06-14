import type { Metadata } from "next";
import { getPackagesByCategory } from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";
import InternalHero from "@/components/layout/InternalHero";

export const metadata: Metadata = {
  title: "Coleção 7 Igrejas & Experiências",
  description:
    "As Sete Igrejas do Apocalipse na Turquia combinadas com os destinos mais deslumbrantes do mundo. Uma coleção exclusiva da Carmel Tour.",
};

const churches = [
  { name: "Éfeso", ref: "Ap 2:1-7", note: "A Igreja que perdeu o primeiro amor" },
  { name: "Esmirna", ref: "Ap 2:8-11", note: "A Igreja perseguida" },
  { name: "Pérgamo", ref: "Ap 2:12-17", note: "A Igreja no trono de Satanás" },
  { name: "Tiatira", ref: "Ap 2:18-29", note: "A Igreja tolerante" },
  { name: "Sardes", ref: "Ap 3:1-6", note: "A Igreja morta" },
  { name: "Filadélfia", ref: "Ap 3:7-13", note: "A Igreja fiel" },
  { name: "Laodicéia", ref: "Ap 3:14-22", note: "A Igreja morna" },
];

export default function SevenChurchesPage() {
  const pkgs = getPackagesByCategory("7-igrejas");

  return (
    <div>
      <InternalHero
        eyebrow="Coleção exclusiva"
        title={<>7 Igrejas<br /><span className="text-amber-light">& Experiências</span></>}
        description="As Sete Igrejas do Apocalipse na Turquia combinadas com os destinos mais deslumbrantes do mundo. Profundidade bíblica e momentos inesquecíveis."
        image="/images/heroes/internal-ephesus.png"
        imageAlt="Ruínas de Éfeso ao nascer do sol"
      />

      {/* The 7 Churches */}
      <div className="bg-cream py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-heading font-bold text-dark mb-2">
            As Sete Igrejas do Apocalipse
          </h2>
          <p className="text-center text-dark/60 mb-8 text-sm">
            Todos os roteiros da Coleção 7 Igrejas visitam as sete igrejas
            mencionadas no livro do Apocalipse
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {churches.map((c, i) => (
              <div
                key={c.name}
                className="bg-white rounded-xl p-5 border border-cream-dark shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-amber text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="font-heading font-semibold text-dark">
                    {c.name}
                  </span>
                </div>
                <div className="text-xs text-amber font-medium mb-1">
                  {c.ref}
                </div>
                <div className="text-xs text-dark/50 italic">{c.note}</div>
              </div>
            ))}
            <div className="bg-amber rounded-xl p-5 flex items-center justify-center">
              <span className="text-white font-heading font-bold text-center text-sm">
                + Todas visitadas em campo
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-dark mb-3">
            Escolha sua Experiência
          </h2>
          <p className="text-dark/60 mb-8">
            Combine as 7 Igrejas com o destino dos seus sonhos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pkgs.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
