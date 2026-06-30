"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

// Cenas do Hero. Acrescente os takes de Turquia/7 Igrejas, Grécia e cruzeiros
// quando os vídeos chegarem — com mais de um item, as cenas passam a alternar.
const heroVideos = ["/videos/hero-carmel-final.mp4"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [current, setCurrent] = useState(0);
  const single = heroVideos.length <= 1;

  const handleEnded = () => {
    const next = (current + 1) % heroVideos.length;
    setCurrent(next);
    const v = videoRef.current;
    if (v) {
      v.src = heroVideos[next];
      v.play().catch(() => {});
    }
  };

  return (
    <section className="relative min-h-[760px] h-[100svh] flex items-center sm:items-start overflow-hidden bg-navy-dark">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-dark" />
      <video
        ref={videoRef}
        key={single ? "single" : "playlist"}
        src={heroVideos[current]}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop={single}
        onEnded={single ? undefined : handleEnded}
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,24,0.94)_0%,rgba(6,18,24,0.78)_42%,rgba(6,18,24,0.12)_78%,rgba(6,18,24,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,29,0.08)_0%,rgba(8,22,29,0.02)_56%,rgba(8,22,29,0.48)_100%)]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-0 sm:pt-[120px] lg:pt-[150px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <span className="eyebrow inline-block mb-6 text-amber-light">
            Especialistas em viagens bíblicas
          </span>
          <h1 className="font-heading text-[2.75rem] sm:text-[3.5rem] lg:text-[4.4rem] font-medium text-white leading-[0.92] tracking-[-0.045em] mb-7">
            A fé ganha
            <br />um novo sentido
            <br />
            <span className="text-amber-light italic">quando vivida.</span>
          </h1>
          <p className="text-sm sm:text-base text-white/68 max-w-lg mb-8 leading-7">
            Jornadas cuidadosamente desenhadas para igrejas, pastores e grupos
            que desejam viver as Escrituras com profundidade, conforto e
            excelência.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/roteiros"
              className="lux-button lux-button--sm bg-amber hover:bg-amber-dark text-white"
            >
              Descobrir roteiros
            </Link>
            <a
              href="https://wa.me/19545894651"
              target="_blank"
              rel="noopener noreferrer"
              className="lux-button lux-button--sm border border-white/45 text-white hover:bg-white hover:text-navy"
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
