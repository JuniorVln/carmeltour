import type { Metadata } from "next";
import { faq } from "@/data/faq";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Encontre respostas para as dúvidas mais comuns sobre nossas viagens bíblicas, destinos, pagamento e muito mais.",
};

// Dados estruturados (Schema.org FAQPage) — ajudam o Google e as IAs (ChatGPT,
// Gemini etc.) a encontrarem e citarem nossas respostas.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqClient />
    </>
  );
}
