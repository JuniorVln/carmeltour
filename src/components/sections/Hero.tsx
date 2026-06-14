"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] h-[100svh] flex items-center overflow-hidden bg-navy-dark">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/hero-jerusalem-video-poster.jpg')",
        }}
      />
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-jerusalem-video-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero-jerusalem.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,24,0.94)_0%,rgba(6,18,24,0.78)_42%,rgba(6,18,24,0.12)_78%,rgba(6,18,24,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,29,0.08)_0%,rgba(8,22,29,0.02)_56%,rgba(8,22,29,0.48)_100%)]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <span className="eyebrow inline-block mb-7 text-amber-light">
            Especialistas em viagens bíblicas
          </span>
          <h1 className="font-heading text-[2.85rem] sm:text-[4.7rem] lg:text-[6rem] font-medium text-white leading-[0.9] tracking-[-0.045em] mb-8">
            A fé ganha
            <br />um novo sentido
            <br />
            <span className="text-amber-light italic">quando vivida.</span>
          </h1>
          <p className="text-sm sm:text-base text-white/68 max-w-lg mb-10 leading-7">
            Jornadas cuidadosamente desenhadas para igrejas, pastores e grupos
            que desejam viver as Escrituras com profundidade, conforto e
            excelência.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/roteiros"
              className="lux-button bg-amber hover:bg-amber-dark text-white"
            >
              Descobrir roteiros
            </Link>
            <a
              href="https://wa.me/19545894651"
              target="_blank"
              rel="noopener noreferrer"
              className="lux-button border border-white/45 text-white hover:bg-white hover:text-navy"
            >
              Falar com um especialista
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 right-5 sm:right-8 lg:right-12 text-white/55 hidden sm:flex items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.24em]">Explore</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
