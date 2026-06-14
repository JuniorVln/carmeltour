import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ChatWidget";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Carmel Tour — Experiências Bíblicas Premium",
    template: "%s | Carmel Tour",
  },
  description:
    "A Carmel Tour oferece experiências internacionais premium para igrejas, pastores e grupos. Israel, Turquia, Grécia, Egito e muito mais. 20+ anos de história.",
  keywords: [
    "turismo bíblico",
    "viagem Israel",
    "caravana para igrejas",
    "roteiro Turquia",
    "7 igrejas Apocalipse",
    "viagem pastor",
    "experiência espiritual",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://carmeltour.com",
    siteName: "Carmel Tour",
    title: "Carmel Tour — Experiências Bíblicas Premium",
    description:
      "Experiências internacionais premium para igrejas e grupos. Israel, Turquia, Grécia e mais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
