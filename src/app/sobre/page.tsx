import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";
import InternalHero from "@/components/layout/InternalHero";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Há mais de 20 anos, a Carmel Tour transforma vidas através de experiências bíblicas e espirituais premium para igrejas, pastores e grupos cristãos.",
};

const stats = [
  { value: "20+", label: "Anos de História" },
  { value: "50+", label: "Destinos Atendidos" },
  { value: "5k+", label: "Viajantes por Ano" },
  { value: "100%", label: "Cuidado Total" },
];

export default function SobrePage() {
  return (
    <div>
      <InternalHero
        eyebrow="Nossa história"
        title={<>Quem é a<br />Carmel Tour</>}
        description="Mais de 20 anos transformando vidas através de experiências espirituais que marcam para sempre."
        image="/images/heroes/internal-jerusalem.png"
        imageAlt="Jerusalém ao amanhecer, cenário da história da Carmel Tour"
      />

      {/* Stats */}
      <div className="bg-amber py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-heading font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/80 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <div className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold text-dark mb-6">
              Nossa Missão
            </h2>
            <p className="text-dark/70 leading-relaxed mb-6">
              A Carmel Tour nasceu da crença de que uma viagem à Terra Santa —
              ou a qualquer destino bíblico — não é apenas um passeio turístico.
              É uma experiência transformadora que muda a forma como lemos a
              Bíblia, vivemos a fé e lideramos nossas comunidades.
            </p>
            <p className="text-dark/70 leading-relaxed mb-6">
              Por mais de duas décadas, temos sido parceiros de pastores,
              líderes, igrejas e grupos cristãos em viagens que combinam
              profundidade espiritual, logística impecável e guias que realmente
              conhecem os destinos e as Escrituras.
            </p>
            <p className="text-dark/70 leading-relaxed">
              Com operação própria em Israel e Turquia, e parceria com a Holy
              Land Gate LTD, oferecemos uma experiência sem igual: você se
              preocupa com o seu grupo, nós cuidamos de tudo mais.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-heading font-bold text-dark mb-8">
              O que nos diferencia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Especialistas em Turismo Bíblico",
                  desc: "Não somos uma agência de turismo genérica. Tudo o que fazemos é voltado para grupos cristãos, pastores e igrejas.",
                },
                {
                  title: "Operação Própria",
                  desc: "Temos operação própria em Israel e Turquia — o que garante qualidade, preços melhores e cuidado real em campo.",
                },
                {
                  title: "Guias Bilíngues Especializados",
                  desc: "Nossos guias falam português e são especialistas em história bíblica, arqueologia e cultura dos destinos visitados.",
                },
                {
                  title: "Parceria Holy Land Gate LTD",
                  desc: "Parceiros oficiais da Holy Land Gate LTD em Israel — a empresa de referência em receptivo bíblico no país.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm"
                >
                  <h3 className="font-heading font-semibold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-dark mb-8 text-center">
            O que dizem sobre nós
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream rounded-2xl p-6 border border-cream-dark"
              >
                <Quote size={24} className="text-amber/40 mb-3" />
                <p className="text-dark/70 text-sm leading-relaxed italic mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-sm text-dark">{t.name}</div>
                  <div className="text-xs text-dark/50">
                    {t.role} — {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
