"use client";

import { useState } from "react";
import {
  Plus,
  Users,
  FileText,
  Stamp,
  Luggage,
  Plane,
  ShieldCheck,
  Banknote,
  Wifi,
  Languages,
  ShoppingBag,
  Utensils,
  CloudSun,
  CalendarOff,
  Mountain,
  type LucideIcon,
} from "lucide-react";
import { dicas } from "@/data/dicas";
import InternalHero from "@/components/layout/InternalHero";

const icons: Record<string, LucideIcon> = {
  users: Users,
  file: FileText,
  stamp: Stamp,
  luggage: Luggage,
  plane: Plane,
  shield: ShieldCheck,
  money: Banknote,
  wifi: Wifi,
  lang: Languages,
  shopping: ShoppingBag,
  food: Utensils,
  weather: CloudSun,
  calendar: CalendarOff,
  mountain: Mountain,
};

export default function DicasClient() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <InternalHero
        eyebrow="Prepare-se para a viagem"
        title={<>Dicas para<br />a Terra Santa</>}
        description="Tudo o que você precisa saber antes de embarcar: documentos, bagagem, moeda, clima e os detalhes que fazem a diferença na sua peregrinação."
        image="/images/heroes/internal-jerusalem.png"
        imageAlt="Vista de Jerusalém ao amanhecer"
      />

      <div className="bg-cream min-h-screen py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {dicas.map((dica, i) => {
              const Icon = icons[dica.icon] ?? FileText;
              const isOpen = open === i;
              return (
                <div
                  key={dica.title}
                  className="bg-white rounded-2xl border border-cream-dark overflow-hidden transition-colors hover:border-amber/50"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  >
                    <span className="shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-amber">
                      <Icon size={18} />
                    </span>
                    <span className="flex-1 font-medium text-dark leading-snug">
                      {dica.title}
                    </span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-amber transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 space-y-3 text-sm text-dark/65 leading-relaxed border-t border-cream-dark mt-1">
                      {dica.content.map((p, idx) => (
                        <p key={idx} className={idx === 0 ? "pt-3" : ""}>
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-dark/60 mb-4">
              Ficou com alguma dúvida sobre a sua viagem?
            </p>
            <a
              href="https://wa.me/19545894651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Fale com Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
