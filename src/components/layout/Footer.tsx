import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const footerNav = {
  Roteiros: [
    { label: "Viagens Bíblicas", href: "/viagens-biblicas" },
    { label: "Coleção 7 Igrejas", href: "/7-igrejas" },
    { label: "Carmel Educação", href: "/carmel-educacao" },
    { label: "Carmel Casais", href: "/carmel-casais" },
    { label: "Todos os Roteiros", href: "/roteiros" },
  ],
  Empresa: [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "FAQ", href: "/faq" },
    { label: "Parcerias", href: "/parcerias" },
    { label: "Contato", href: "/contato" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#06141b] text-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr] gap-12 mb-16">
          <div className="lg:col-span-1">
            <Image
              src="/logo-branca.png"
              alt="Carmel Tour"
              width={160}
              height={48}
              className="h-12 w-auto"
              style={{ width: "auto" }}
            />
            <p className="mt-6 text-sm text-white/48 leading-7 max-w-sm">
              Experiências bíblicas e espirituais premium para igrejas, pastores
              e grupos. Há mais de 20 anos transformando vidas através da fé e
              da história.
            </p>

            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://instagram.com/carmeltour"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/18 hover:border-amber hover:text-amber transition-colors text-white text-[9px] font-bold"
              >
                IG
              </a>
              <a
                href="https://youtube.com/@carmeltour"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/18 hover:border-amber hover:text-amber transition-colors text-white text-[9px] font-bold"
              >
                YT
              </a>
              <a
                href="https://wa.me/19545894651"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/18 hover:border-amber hover:text-amber transition-colors"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-[10px] font-bold text-amber uppercase tracking-[0.2em] mb-6">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/50 hover:text-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[10px] font-bold text-amber uppercase tracking-[0.2em] mb-6">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/19545894651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs text-white/50 hover:text-amber transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  +1 (954) 589-4651
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@carmeltour.com"
                  className="flex items-start gap-3 text-xs text-white/50 hover:text-amber transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  contato@carmeltour.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-xs text-white/50">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  Florida, EUA
                  <br />
                  <span className="text-xs text-white/40">
                    Operação Brasil & Israel
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.1em] text-white/30">
            © {new Date().getFullYear()} Carmel Tour. Todos os direitos
            reservados.
          </p>
          <p className="text-[10px] uppercase tracking-[0.1em] text-white/30">
            Parceira oficial{" "}
            <span className="text-amber">Holy Land Gate LTD</span> — Israel
          </p>
        </div>
      </div>
    </footer>
  );
}
