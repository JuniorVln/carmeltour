import type { Metadata } from "next";
import { getPackagesByCategory } from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";
import InternalHero from "@/components/layout/InternalHero";
import FaqAccordion from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "Carmel Casais",
  description:
    "Retiros e viagens para casais com lazer, programação especial e momentos que renovam o relacionamento. Destinos nacionais e internacionais.",
};

export default function CarmelCasaisPage() {
  const pkgs = getPackagesByCategory("casais");

  return (
    <div>
      <InternalHero
        eyebrow="Carmel Casais"
        title={<>Viagens que<br /><span className="text-amber-light">renovam o amor.</span></>}
        description="Retiros e viagens para casais com lazer, momentos de conexão e uma palavra que fortalece o relacionamento."
        image="/images/heroes/internal-couples.png"
        imageAlt="Casal contemplando a Costa Amalfitana ao pôr do sol"
      />

      {/* What to expect */}
      <div className="bg-cream py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { emoji: "🌅", title: "Lazer", desc: "Destinos paradisíacos escolhidos a dedo para criar memórias inesquecíveis" },
              { emoji: "💬", title: "Conexão", desc: "Atividades e momentos que aproximam e fortalecem o relacionamento" },
              { emoji: "🙏", title: "Palavra", desc: "Uma mensagem curta e inspiradora para fortalecer o casamento na fé" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-cream-dark shadow-sm">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-heading font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-dark/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-dark mb-8">
            Destinos para Casais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pkgs.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>

      <FaqAccordion background="cream" />
    </div>
  );
}
