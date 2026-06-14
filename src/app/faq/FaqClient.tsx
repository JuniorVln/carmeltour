"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data/faq";
import InternalHero from "@/components/layout/InternalHero";

export default function FaqClient() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <InternalHero
        eyebrow="Antes de embarcar"
        title={<>Perguntas<br />frequentes</>}
        description="Encontre respostas para as dúvidas mais comuns sobre destinos, grupos, documentação e nossas experiências."
        image="/images/heroes/internal-jerusalem.png"
        imageAlt="Jerusalém ao amanhecer"
      />

      <div className="bg-cream min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-cream-dark overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-medium text-dark leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-amber transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-sm text-dark/60 leading-relaxed border-t border-cream-dark pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark/60 mb-4">Não encontrou sua resposta?</p>
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
  );
}
