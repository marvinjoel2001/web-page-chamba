"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Search, ArrowRight, MapPin, ShieldCheck, Tag, Store } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface HeroProps {
  activeRole: "client" | "worker";
}

export default function Hero({ activeRole }: HeroProps) {
  const t = useTranslations("Hero");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const target = document.getElementById("categorias");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChipClick = (query: string) => {
    setSearchQuery(query);
    const target = document.getElementById("categorias");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow Effects & Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/80 via-[#090d16]/90 to-[#090d16] z-10" />
        <img 
          src="/images/handshake.png" 
          alt="Handshake Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
      </div>
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-primary/20 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-primary-light/20 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Dynamic Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {activeRole === "client" ? (
                    <>
                      <span className="block">{t("client_title_line1")}</span>
                      <span className="block">
                        {t("client_title_line2")}
                        <span className="text-purple-400 inline-block drop-shadow-[0_2px_15px_rgba(168,85,247,0.4)]">
                          {t("client_title_highlight")}
                        </span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="block">{t("worker_title_line1")}</span>
                      <span className="block">
                        {t("worker_title_line2")}
                        <span className="text-purple-400 inline-block drop-shadow-[0_2px_15px_rgba(168,85,247,0.4)]">
                          {t("worker_title_highlight")}
                        </span>
                      </span>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeRole}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeRole === "client" ? t("client_desc") : t("worker_desc")}
                </motion.span>
              </AnimatePresence>
            </p>

            {/* Search Bar Input */}
            <form
              onSubmit={handleSearch}
              className="mt-8 w-full max-w-xl bg-white rounded-full p-2 pl-6 flex items-center shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all focus-within:ring-4 focus-within:ring-purple-500/20"
            >
              <Search className="w-5 h-5 text-indigo-400/80 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeRole === "client"
                    ? t("search_placeholder_client")
                    : t("search_placeholder_worker")
                }
                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none text-base sm:text-lg font-normal"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center justify-center shrink-0 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer ml-2"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Suggested Chips */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full max-w-xl">
              <button
                type="button"
                onClick={() =>
                  handleChipClick(
                    activeRole === "client" ? t("chip_1_client") : t("chip_1_worker")
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#131b2e]/90 hover:bg-[#1c2640] border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:border-white/20 active:scale-95"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  {activeRole === "client" ? t("chip_1_client") : t("chip_1_worker")}
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleChipClick(
                    activeRole === "client" ? t("chip_2_client") : t("chip_2_worker")
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#131b2e]/90 hover:bg-[#1c2640] border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:border-white/20 active:scale-95"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  {activeRole === "client" ? t("chip_2_client") : t("chip_2_worker")}
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleChipClick(
                    activeRole === "client" ? t("chip_3_client") : t("chip_3_worker")
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#131b2e]/90 hover:bg-[#1c2640] border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:border-white/20 active:scale-95"
              >
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  {activeRole === "client" ? t("chip_3_client") : t("chip_3_worker")}
                </span>
              </button>
            </div>

            {/* Feature Trust Badges */}
            <div className="mt-8 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-600/25">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/95 leading-tight">
                  {activeRole === "client" ? t("badge_1_client") : t("badge_1_worker")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-600/25">
                  <Tag className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/95 leading-tight">
                  {activeRole === "client" ? t("badge_2_client") : t("badge_2_worker")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-600/25">
                  <Store className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/95 leading-tight">
                  {activeRole === "client" ? t("badge_3_client") : t("badge_3_worker")}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-h-[480px] lg:min-h-[620px] [perspective:1600px]">
            {/* Background glowing rings */}
            <div className="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full border border-brand-primary/10 animate-pulse-slow" />
            <div className="absolute w-[540px] h-[540px] lg:w-[660px] lg:h-[660px] rounded-full border border-brand-primary-light/5 animate-pulse-slow" />

            {/* Interactive 3D tilt wrapper */}
            <Tilt3D>
              {/* Floating + entrance animation (kept separate from the tilt) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -16, 0] }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative flex justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Depth glow that sits BEHIND the phones (pushed back in 3D) */}
                <div
                  className="absolute inset-0 rounded-[60px] bg-brand-primary/30 blur-[90px] scale-90"
                  style={{ transform: "translateZ(-120px)" }}
                />

                <img
                  src={activeRole === "client" ? "/images/client.png" : "/images/worker.png"}
                  alt={activeRole === "client" ? "Chamba Client App" : "Chamba Worker App"}
                  className="relative w-full h-auto max-w-[420px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-[680px] xl:max-w-[760px] object-contain drop-shadow-[0_35px_60px_rgba(109,40,217,0.55)]"
                  style={{ transform: "translateZ(60px)" }}
                />

                {/* Floor reflection / shadow for grounding the 3D scene */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-black/50 blur-2xl rounded-[100%]"
                  style={{ transform: "translateZ(-40px)" }}
                />
              </motion.div>
            </Tilt3D>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Wrapper que inclina a sus hijos en 3D siguiendo el cursor (con retorno
 * suave por resorte). En móviles/sin puntero simplemente queda estático.
 */
function Tilt3D({ children }: { children: React.ReactNode }) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [14, -14]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-18, 18]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative z-10 w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
}


