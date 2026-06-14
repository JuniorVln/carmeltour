import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import InternalHero from "@/components/layout/InternalHero";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Carmel Tour. WhatsApp, email e formulário de mensagem. Estamos prontos para planejar sua experiência bíblica.",
};

export default function ContatoPage() {
  return (
    <div>
      <InternalHero
        eyebrow="Estamos aqui"
        title={<>Vamos planejar<br />sua próxima jornada.</>}
        description="Nossa equipe está pronta para ajudar você a criar a viagem bíblica que vai transformar o seu grupo."
        image="/images/heroes/internal-partnerships.png"
        imageAlt="Planejamento personalizado de uma viagem bíblica"
      />
      <ContactSection />
    </div>
  );
}
