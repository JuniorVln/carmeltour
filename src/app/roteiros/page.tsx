import type { Metadata } from "next";
import {
  categoryLabels,
  getActiveCategories,
  getPackagesByCategory,
} from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";
import InternalHero from "@/components/layout/InternalHero";
import FaqAccordion from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "Todos os Roteiros",
  description:
    "Explore nossos roteiros bíblicos premium para Israel, Turquia, Grécia, Egito e muito mais.",
};

export default function RoteirosPage() {
  const activeCategories = getActiveCategories();

  return (
    <div>
      <InternalHero
        eyebrow="Nossos destinos"
        title={<>Todos os<br />roteiros</>}
        description="Escolha a experiência que transforma. Temos o roteiro certo para o seu grupo, sua igreja e o seu chamado."
        image="/images/heroes/internal-jerusalem.png"
        imageAlt="Panorama de Jerusalém representando os roteiros da Carmel Tour"
      />

      {/* Content */}
      <div className="bg-cream min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategories.map((cat) => {
            const catPackages = getPackagesByCategory(cat);
            return (
              <div key={cat} className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-heading font-bold text-dark">
                    {categoryLabels[cat]}
                  </h2>
                  <span className="text-sm text-dark/40">
                    {catPackages.length} roteiro{catPackages.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catPackages.map((pkg) => (
                    <PackageCard key={pkg.slug} pkg={pkg} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <FaqAccordion />
    </div>
  );
}
