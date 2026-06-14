import Link from "next/link";
import Image from "next/image";

export default function EducacaoCTA() {
  return (
    <section className="bg-navy py-24 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <span className="eyebrow">Conhecimento em movimento</span>
            <h2 className="section-title mt-5 text-white">
              Carmel Educação
            </h2>
            <p className="mt-7 font-heading text-3xl text-amber-light italic leading-tight">
              &ldquo;Não é uma viagem com guia. É aprendizado em campo.&rdquo;
            </p>
            <p className="mt-5 text-white/58 text-sm leading-7">
              Professores, teólogos e arqueólogos conduzem estudos aprofundados
              nos próprios locais bíblicos. Para pastores e líderes que buscam
              crescimento intelectual e espiritual de profundidade real.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/15 pt-7">
              {[
                "As Sete Igrejas em Profundidade",
                "Atos e as Cartas de Paulo",
                "Abraão, Ararate e Mesopotâmia",
                "Reforma e História da Bíblia",
                "Londres de John Wesley",
                "Futuro da Igreja",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-xs text-white/60">
                  <span className="w-5 h-px bg-amber" />
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href="/carmel-educacao"
              className="lux-button mt-9 bg-amber hover:bg-amber-dark text-white"
            >
              Conhecer o Carmel Educação
            </Link>
          </div>

          <div className="relative overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1466175743059-5393a020726c?w=800&q=80"
              alt="Jerusalém — Terra Santa"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
