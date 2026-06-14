import type { Metadata } from "next";
import { getPackagesByCategory } from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";
import InternalHero from "@/components/layout/InternalHero";

export const metadata: Metadata = {
  title: "Carmel Educação",
  description:
    "Programas de aprendizado em campo para pastores e líderes. Não é uma viagem com guia — é estudo bíblico e arqueológico nos próprios locais sagrados.",
};

const diferencias = [
  {
    title: "Professores em Campo",
    desc: "Teólogos, arqueólogos e especialistas conduzem os estudos nos próprios locais bíblicos",
  },
  {
    title: "Material Exclusivo",
    desc: "Cada programa inclui material didático elaborado especialmente para o roteiro",
  },
  {
    title: "Profundidade Real",
    desc: "Não é turismo — é formação. Para pastores que querem crescer de verdade",
  },
  {
    title: "Contexto Arqueológico",
    desc: "Visite escavações e museus com orientação de especialistas",
  },
];

export default function CarmelEducacaoPage() {
  const pkgs = getPackagesByCategory("educacao");

  return (
    <div>
      <InternalHero
        eyebrow="Conhecimento em movimento"
        title={<>Carmel<br /><span className="text-amber-light">Educação</span></>}
        description="Não é uma viagem com guia. É aprendizado em campo, conduzido por professores, teólogos e arqueólogos nos próprios locais bíblicos."
        image="/images/heroes/internal-education.png"
        imageAlt="Grupo estudando arqueologia bíblica em campo"
      />

      {/* Diferentials */}
      <div className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferencias.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm"
              >
                <h3 className="font-heading font-semibold text-dark mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-dark mb-2">
            Programas Disponíveis
          </h2>
          <p className="text-dark/60 mb-8">
            Cada programa é desenvolvido com rigor acadêmico e imersão espiritual
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pkgs.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>

          <div className="mt-10 p-8 bg-navy rounded-2xl text-center">
            <p className="text-white/80 text-lg mb-4">
              Os programas do Carmel Educação são planejados sob medida para
              grupos de pastores e líderes. Entre em contato para montar o
              programa ideal para a sua equipe.
            </p>
            <a
              href="https://wa.me/19545894651?text=Olá! Tenho interesse no Carmel Educação para pastores."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Montar Programa Personalizado
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
