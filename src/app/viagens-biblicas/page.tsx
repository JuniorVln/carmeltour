import type { Metadata } from "next";
import { getPackagesByCategory } from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";
import Link from "next/link";
import InternalHero from "@/components/layout/InternalHero";
import FaqAccordion from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "Viagens Bíblicas",
  description:
    "Caravanas bíblicas premium para Israel, Turquia, Grécia, Egito e mais. Experimente os destinos sagrados com guias especializados.",
};

const destinations = [
  { name: "Israel", icon: "🇮🇱", desc: "A Terra Santa" },
  { name: "Turquia", icon: "🇹🇷", desc: "7 Igrejas do Apocalipse" },
  { name: "Grécia", icon: "🇬🇷", desc: "Passos de Paulo" },
  { name: "Egito", icon: "🇪🇬", desc: "Terra do Êxodo" },
  { name: "Jordânia", icon: "🇯🇴", desc: "Petra e Monte Nebo" },
  { name: "Itália", icon: "🇮🇹", desc: "Roma e o Vaticano" },
  { name: "Europa", icon: "🏛️", desc: "Reforma Protestante" },
  { name: "Coreia", icon: "🇰🇷", desc: "Avivamento do Oriente" },
];

export default function ViagensBiblicasPage() {
  const pkgs = getPackagesByCategory("viagens-biblicas");

  return (
    <div>
      <InternalHero
        eyebrow="Viagens bíblicas"
        title={<>As Escrituras<br />ganham vida.</>}
        description="Caminhe pelos mesmos lugares que Jesus, Paulo e os profetas. Caravanas completas para igrejas e grupos com guias especializados em história bíblica."
        image="/images/heroes/internal-jerusalem.png"
        imageAlt="Jerusalém histórica iluminada pelo sol"
      />

      {/* Destinations */}
      <div className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-heading font-bold text-dark mb-8">
            Destinos Disponíveis
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {destinations.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-cream-dark"
              >
                <div className="text-3xl mb-2">{d.icon}</div>
                <div className="text-sm font-semibold text-dark">{d.name}</div>
                <div className="text-xs text-dark/50 mt-0.5">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-dark mb-8">
            Nossos Roteiros Bíblicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pkgs.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/19545894651?text=Olá! Gostaria de saber mais sobre as Viagens Bíblicas da Carmel Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Solicitar Roteiro Personalizado
            </a>
          </div>
        </div>
      </div>

      <FaqAccordion background="cream" />
    </div>
  );
}
