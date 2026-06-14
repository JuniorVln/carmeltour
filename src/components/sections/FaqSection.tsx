"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data/faq";
import Link from "next/link";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const preview = faq.slice(0, 6);

  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="section-title mt-5">
            Antes de embarcar.
          </h2>
        </div>

        <div className="space-y-3">
          {preview.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[999px] border border-dark/20 overflow-hidden transition-colors hover:border-amber/60 has-[div]:rounded-[28px]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
              >
                <span className="text-dark text-sm leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-amber/70 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="mx-7 px-0 pb-6 text-sm text-dark/55 leading-7 border-t border-dark/10 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber hover:text-amber-dark"
          >
            Ver todas as perguntas frequentes →
          </Link>
        </div>
      </div>
    </section>
  );
}
