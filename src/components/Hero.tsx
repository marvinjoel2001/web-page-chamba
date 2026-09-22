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
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04060a]/95 via-[#04060a]/90 to-[#04060a] z-10" />
        <img 
          src="/images/handshake.png" 
          alt="Handshake Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>

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
                        <span className="text-purple-300 inline-block font-semibold ml-2">
                          {t("client_title_highlight")}
                        </span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="block">{t("worker_title_line1")}</span>
                      <span className="block">
                        {t("worker_title_line2")}
                        <span className="text-purple-300 inline-block font-semibold ml-2">
                          {t("worker_title_highlight")}
                        </span>
                      </span>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeRole}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {activeRole === "client" ? t("client_desc") : t("worker_desc")}
                </motion.span>
              </AnimatePresence>
            </p>

            {/* Search Bar Input - Minimalist Dark Glass */}
            <form
              onSubmit={handleSearch}
              className="mt-8 w-full max-w-xl bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-full p-1.5 pl-5 sm:pl-6 flex items-center shadow-2xl transition-all focus-within:border-white/35 focus-within:bg-slate-900"
            >
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeRole === "client"
                    ? t("search_placeholder_client")
                    : t("search_placeholder_worker")
                }
                className="w-full bg-transparent text-white placeholder:text-slate-400 focus:outline-none text-sm sm:text-base font-normal"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-200 text-slate-950 flex items-center justify-center shrink-0 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer ml-2"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:border-white/20 active:scale-95"
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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:border-white/20 active:scale-95"
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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:border-white/20 active:scale-95"
              >
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  {activeRole === "client" ? t("chip_3_client") : t("chip_3_worker")}
                </span>
              </button>
            </div>

            {/* Feature Trust Badges - Minimalist */}
            <div className="mt-8 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300 leading-tight">
                  {activeRole === "client" ? t("badge_1_client") : t("badge_1_worker")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <Tag className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300 leading-tight">
                  {activeRole === "client" ? t("badge_2_client") : t("badge_2_worker")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <Store className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300 leading-tight">
                  {activeRole === "client" ? t("badge_3_client") : t("badge_3_worker")}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image Section - Instant Zero-Lag Switch */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-h-[480px] lg:min-h-[620px] [perspective:1600px]">
            {/* Interactive 3D tilt wrapper */}
            <Tilt3D>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative flex justify-center items-center w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* BOTH IMAGES IN DOM: ZERO LAG ON ROLE SWITCH */}
                <img
                  src="/images/client.png"
                  alt="Chamba Client App"
                  className={`w-full h-auto max-w-[400px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[620px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-opacity duration-200 ${
                    activeRole === "client" ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                  style={{ transform: "translateZ(40px)" }}
                />

                <img
                  src="/images/worker.png"
                  alt="Chamba Worker App"
                  className={`w-full h-auto max-w-[400px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[620px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-opacity duration-200 ${
                    activeRole === "worker" ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                  style={{ transform: "translateZ(40px)" }}
                />

                {/* Floor shadow */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/80 blur-2xl rounded-full pointer-events-none"
                  style={{ transform: "translateZ(-30px)" }}
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


