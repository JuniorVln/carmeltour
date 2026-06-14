"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { packages } from "@/data/packages";

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
  }

  return (
    <section id="contato" className="py-24 lg:py-36 bg-cream">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-center">
          <div>
            <span className="eyebrow">Contato</span>
            <h2 className="section-title mt-5">
              Sua próxima jornada começa em uma conversa.
            </h2>
            <p className="mt-7 text-dark/58 leading-7">
              Nossa equipe está pronta para ajudar você a planejar a caravana
              perfeita. Entre em contato e receba uma proposta personalizada.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-7 border-t border-dark/15">
              <a
                href="https://wa.me/19545894651"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div>
                  <Phone size={17} className="text-amber mb-4" />
                  <div className="text-[9px] text-dark/40 font-bold uppercase tracking-[0.17em] mb-1">
                    WhatsApp
                  </div>
                  <div className="text-dark text-sm group-hover:text-amber transition-colors">
                    +1 (954) 589-4651
                  </div>
                </div>
              </a>

              <a
                href="mailto:contato@carmeltour.com"
                className="group"
              >
                <div>
                  <Mail size={17} className="text-amber mb-4" />
                  <div className="text-[9px] text-dark/40 font-bold uppercase tracking-[0.17em] mb-1">
                    Email
                  </div>
                  <div className="text-dark text-sm group-hover:text-amber transition-colors">
                    contato@carmeltour.com
                  </div>
                </div>
              </a>

              <div className="sm:col-span-2">
                <div>
                  <MapPin size={17} className="text-amber mb-4" />
                  <div className="text-[9px] text-dark/40 font-bold uppercase tracking-[0.17em] mb-1">
                    Localização
                  </div>
                  <div className="text-dark text-sm">Florida, EUA</div>
                  <div className="text-xs text-dark/40 mt-0.5">
                    Com operação no Brasil e Israel
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy p-7 sm:p-10 lg:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-14 h-14 bg-amber/15 rounded-full flex items-center justify-center mb-4">
                  <Send size={20} className="text-amber" />
                </div>
                <h3 className="text-3xl font-heading text-white mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-white/50 text-sm">
                  Nossa equipe entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[9px] font-bold text-white/45 mb-2 uppercase tracking-[0.16em]">
                      Nome completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full bg-transparent border border-white/20 text-white placeholder-white/30 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-amber/70 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-whatsapp" className="block text-[9px] font-bold text-white/45 mb-2 uppercase tracking-[0.16em]">
                      WhatsApp
                    </label>
                    <input
                      id="contact-whatsapp"
                      type="tel"
                      required
                      placeholder="+55 (11) 99999-9999"
                      className="w-full bg-transparent border border-white/20 text-white placeholder-white/30 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-amber/70 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[9px] font-bold text-white/45 mb-2 uppercase tracking-[0.16em]">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-transparent border border-white/20 text-white placeholder-white/30 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-amber/70 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-route" className="block text-[9px] font-bold text-white/45 mb-2 uppercase tracking-[0.16em]">
                    Roteiro de Interesse
                  </label>
                  <select
                    id="contact-route"
                    className="w-full bg-transparent border border-white/20 text-white rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-amber/70 transition-colors"
                    defaultValue=""
                  >
                    <option value="" className="text-dark bg-white">
                      Selecione um roteiro
                    </option>
                    {packages.map((pkg) => (
                      <option
                        key={pkg.slug}
                        value={pkg.slug}
                        className="text-dark bg-white"
                      >
                        {pkg.title}
                      </option>
                    ))}
                    <option value="outro" className="text-dark bg-white">
                      Outro / Não sei ainda
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-group-size" className="block text-[9px] font-bold text-white/45 mb-2 uppercase tracking-[0.16em]">
                    Tamanho do grupo
                  </label>
                  <select
                    id="contact-group-size"
                    className="w-full bg-transparent border border-white/20 text-white rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-amber/70 transition-colors"
                    defaultValue=""
                  >
                    <option value="" className="text-dark bg-white">Número de pessoas</option>
                    <option value="1-10" className="text-dark bg-white">1 a 10 pessoas</option>
                    <option value="10-20" className="text-dark bg-white">10 a 20 pessoas</option>
                    <option value="20-50" className="text-dark bg-white">20 a 50 pessoas</option>
                    <option value="50+" className="text-dark bg-white">Mais de 50 pessoas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[9px] font-bold text-white/45 mb-2 uppercase tracking-[0.16em]">
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Conte um pouco sobre o que você está buscando..."
                    className="w-full bg-transparent border border-white/20 text-white placeholder-white/30 px-5 py-4 text-sm focus:outline-none focus:border-amber/70 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="lux-button w-full bg-amber hover:bg-amber-dark disabled:opacity-50 text-white"
                >
                  <Send size={14} />
                  {sending ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
