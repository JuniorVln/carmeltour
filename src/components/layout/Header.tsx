"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Roteiros",
    href: "/roteiros",
    dropdown: [
      { label: "Viagens Bíblicas", href: "/viagens-biblicas" },
      { label: "Coleção 7 Igrejas", href: "/7-igrejas" },
      { label: "Carmel Educação", href: "/carmel-educacao" },
      { label: "Carmel Casais", href: "/carmel-casais" },
    ],
  },
  { label: "Sobre", href: "/sobre" },
  { label: "Dicas", href: "/dicas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const routesActive =
    pathname === "/roteiros" ||
    pathname.startsWith("/roteiros/") ||
    navItems[0].dropdown?.some((item) => item.href === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-navy-dark/95 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md"
          : "bg-gradient-to-b from-navy-dark/75 to-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-branca.png"
              alt="Carmel Tour"
              width={272}
              height={82}
              className="h-[72px] w-auto"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onFocus={() => setOpenDropdown(item.label)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setOpenDropdown(null);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      event.currentTarget.querySelector("button")?.focus();
                      setOpenDropdown(null);
                      event.preventDefault();
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === item.label}
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    className={`flex items-center gap-1.5 transition-colors text-[11px] font-semibold uppercase tracking-[0.16em] py-2 ${
                      routesActive
                        ? "text-amber-light"
                        : "text-white/85 hover:text-amber-light"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div
                      role="menu"
                      className="absolute top-full left-1/2 w-60 -translate-x-1/2 pt-2"
                    >
                      <div className="bg-cream shadow-2xl border border-dark/10 overflow-hidden">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            role="menuitem"
                            className={`block px-5 py-3.5 text-xs hover:bg-white hover:text-amber-dark transition-colors border-b border-dark/8 last:border-0 ${
                              pathname === sub.href
                                ? "bg-white text-amber-dark"
                                : "text-dark/75"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`)
                      ? "text-amber-light"
                      : "text-white/85 hover:text-amber-light"
                  }`}
                >
                  {item.label}
                  {(pathname === item.href ||
                    pathname.startsWith(`${item.href}/`)) && (
                    <span className="absolute -bottom-3 left-1/2 w-1 h-1 -translate-x-1/2 rounded-full bg-amber" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/19545894651"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 border border-amber bg-amber hover:bg-amber-dark hover:border-amber-dark text-white text-[11px] font-bold uppercase tracking-[0.12em] px-6 py-3 rounded-full transition-colors"
          >
            <MessageCircle size={15} />
            Atendimento
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-dark/98 border-t border-white/10 backdrop-blur-md">
          <nav className="flex flex-col py-5 px-5">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`block py-3 text-[11px] uppercase tracking-[0.14em] transition-colors border-b border-white/10 ${
                    (item.dropdown && routesActive) ||
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`)
                      ? "text-amber"
                      : "text-white/85 hover:text-amber"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 flex flex-col">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`py-2.5 text-sm hover:text-amber transition-colors border-b border-navy-light/50 ${
                          pathname === sub.href
                            ? "text-amber"
                            : "text-white/70"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://wa.me/19545894651"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-amber text-white font-semibold px-5 py-3 rounded-full"
            >
              <MessageCircle size={15} />
              Fale pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
