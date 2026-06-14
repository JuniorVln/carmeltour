import type { Metadata } from "next";
import InternalHero from "@/components/layout/InternalHero";

export const metadata: Metadata = {
  title: "Parcerias",
  description:
    "Seja um parceiro da Carmel Tour. Para pastores, agências e líderes que desejam organizar caravanas bíblicas para seus grupos.",
};

const beneficios = [
  {
    title: "Comissão Atrativa",
    desc: "Remuneração competitiva para cada grupo organizado através da parceria.",
  },
  {
    title: "Suporte Completo",
    desc: "Nossa equipe cuida de toda a logística, documentação e atendimento ao grupo.",
  },
  {
    title: "Material de Marketing",
    desc: "Fornecemos artes, apresentações e materiais para você divulgar para sua congregação.",
  },
  {
    title: "Treinamento",
    desc: "Capacitação sobre os destinos bíblicos para que você possa apresentar com autoridade.",
  },
  {
    title: "Exclusividade Regional",
    desc: "Possibilidade de exclusividade para parcerias em determinadas regiões.",
  },
  {
    title: "Viagem Famuliars",
    desc: "Oportunidade de familiarização (FAM trip) para conhecer os destinos em primeira mão.",
  },
];

export default function ParceriasPage() {
  return (
    <div>
      <InternalHero
        eyebrow="Crescemos juntos"
        title={<>Parcerias<br />Carmel Tour</>}
        description="Para pastores, líderes e agências que desejam oferecer experiências bíblicas premium para suas congregações e clientes."
        image="/images/heroes/internal-partnerships.png"
        imageAlt="Pastor e especialista planejando um roteiro em Jerusalém"
      />

      {/* Types */}
      <div className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-dark mb-8 text-center">
            Tipos de Parceria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "⛪",
                title: "Pastores & Igrejas",
                desc: "Organize caravanas para sua congregação e receba suporte total da Carmel Tour",
              },
              {
                icon: "🏢",
                title: "Agências de Viagem",
                desc: "Adicione roteiros bíblicos premium ao seu portfólio com nossa expertise",
              },
              {
                icon: "🎓",
                title: "Instituições & Seminários",
                desc: "Programe viagens acadêmicas e de campo para alunos e professores",
              },
            ].map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-2xl p-7 border border-cream-dark shadow-sm text-center"
              >
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="font-heading font-semibold text-dark mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <h2 className="text-2xl font-heading font-bold text-dark mb-8">
            Benefícios da Parceria
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {beneficios.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-xl p-5 border border-cream-dark"
              >
                <h3 className="font-semibold text-dark text-sm mb-1">
                  {b.title}
                </h3>
                <p className="text-xs text-dark/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-heading font-bold text-white mb-3">
              Interessado em Ser Parceiro?
            </h3>
            <p className="text-white/60 mb-6">
              Entre em contato e descubra como podemos trabalhar juntos.
            </p>
            <a
              href="https://wa.me/19545894651?text=Olá! Tenho interesse em ser parceiro da Carmel Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Falar sobre Parceria
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
