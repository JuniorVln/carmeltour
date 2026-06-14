import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <span className="eyebrow">Histórias vividas</span>
          <h2 className="section-title mt-5">
            O que permanece
            <br />
            depois da viagem.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-dark/15">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="py-10 md:px-8 border-b md:border-b-0 md:border-r border-dark/15 last:border-0 flex flex-col"
            >
              <Quote size={26} strokeWidth={1.2} className="text-amber mb-7" />
              <p className="font-heading text-2xl text-dark/78 leading-snug italic flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-8 pt-5 border-t border-dark/10">
                <div>
                  <div className="font-bold text-[11px] uppercase tracking-[0.12em] text-dark">
                    {t.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.12em] text-dark/40 mt-1">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
