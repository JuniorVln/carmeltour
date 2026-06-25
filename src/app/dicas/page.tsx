import type { Metadata } from "next";
import DicasClient from "./DicasClient";

export const metadata: Metadata = {
  title: "Dicas para a Terra Santa",
  description:
    "Documentos, vistos, bagagem, moeda, clima, segurança e tudo o que você precisa saber antes de viajar a Israel e à Terra Santa com a Carmel Tour.",
};

export default function DicasPage() {
  return <DicasClient />;
}
