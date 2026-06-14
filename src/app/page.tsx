import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import FeaturedPackages from "@/components/sections/FeaturedPackages";
import Differentials from "@/components/sections/Differentials";
import SevenChurchesCTA from "@/components/sections/SevenChurchesCTA";
import EducacaoCTA from "@/components/sections/EducacaoCTA";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Carmel Tour — Experiências Bíblicas Premium",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <FeaturedPackages />
      <Differentials />
      <SevenChurchesCTA />
      <EducacaoCTA />
      <Testimonials />
      <ContactSection />
      <FaqSection />
    </>
  );
}
