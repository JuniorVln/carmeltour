import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { faq, type FaqItem } from "@/data/faq";

interface Props {
  /** Perguntas a exibir. Por padrão usa o FAQ global. */
  items?: FaqItem[];
  /** Quantas perguntas mostrar (default: 6). Use 0 para mostrar todas. */
  limit?: number;
  eyebrow?: string;
  title?: string;
  /** Mostra o link "Ver todas as perguntas frequentes". */
  showAllLink?: boolean;
  /** Cor de fundo da seção (default: branco). */
  background?: "white" | "cream";
}

/**
 * FAQ em <details>/<summary>: perguntas E respostas ficam no HTML renderizado no
 * servidor — colapsável sem JS e totalmente rastreável por buscadores e IAs
 * (ChatGPT, etc.). Reaproveitável nas páginas internas para reforçar o SEO/AEO.
 */
export default function FaqAccordion({
  items = faq,
  limit = 6,
  eyebrow = "Perguntas frequentes",
  title = "Antes de embarcar.",
  showAllLink = true,
  background = "white",
}: Props) {
  const list = limit > 0 ? items.slice(0, limit) : items;
  const bg = background === "cream" ? "bg-cream" : "bg-white";

  return (
    <section className={`${bg} py-20 lg:py-28`}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title mt-5">{title}</h2>
        </div>

        <div className="space-y-3">
          {list.map((item, i) => (
            <details
              key={i}
              className="group bg-white rounded-[28px] border border-dark/20 overflow-hidden transition-colors hover:border-amber/60 open:rounded-[28px]"
            >
              <summary className="flex items-center justify-between px-7 py-5 gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-dark text-sm leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  size={16}
                  className="shrink-0 text-amber/70 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="mx-7 pb-6 text-sm text-dark/55 leading-7 border-t border-dark/10 pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber hover:text-amber-dark"
            >
              Ver todas as perguntas frequentes →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
