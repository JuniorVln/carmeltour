import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Encontre respostas para as dúvidas mais comuns sobre nossas viagens bíblicas, destinos, pagamento e muito mais.",
};

export default function FaqPage() {
  return <FaqClient />;
}
