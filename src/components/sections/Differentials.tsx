import Image from "next/image";
import { Compass, HandHeart, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Compass,
    title: "Curadoria com profundidade",
    text: "Roteiros autorais, guias especializados e experiências que conectam história, cultura e fé.",
  },
  {
    icon: HandHeart,
    title: "Atendimento verdadeiramente próximo",
    text: "Uma equipe dedicada acompanha cada líder e cada grupo antes, durante e depois da viagem.",
  },
  {
    icon: ShieldCheck,
    title: "Operação segura e experiente",
    text: "Mais de 20 anos de experiência, operação internacional e parceiros selecionados em cada destino.",
  },
];

export default function Differentials() {
  return (
    <section className="bg-brown overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[760px]">
        <div className="flex items-center">
          <div className="w-full max-w-[640px] ml-auto px-5 sm:px-8 lg:px-14 py-24 lg:py-32">
            <span className="eyebrow">O diferencial Carmel</span>
            <h2 className="section-title mt-5 text-white">
              Excelência em cada detalhe da jornada.
            </h2>
            <p className="mt-7 text-white/60 leading-7 max-w-xl">
              Da escolha do hotel ao conteúdo compartilhado em campo, tudo é
              pensado para que o grupo viva uma experiência serena, profunda e
              inesquecível.
            </p>

            <div className="mt-11 space-y-8">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-5">
                    <Icon size={24} strokeWidth={1.4} className="text-amber-light shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/55 leading-6">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative min-h-[560px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1400&q=88"
            alt="Arquitetura histórica de Jerusalém"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/10" />
          <div className="absolute bottom-8 left-8 right-8 border border-white/35 p-6 text-white backdrop-blur-[2px] bg-black/10">
            <p className="font-heading text-2xl leading-tight">
              “O destino importa. A forma como você o vive transforma tudo.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
