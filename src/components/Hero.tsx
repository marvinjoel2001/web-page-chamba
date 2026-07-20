"use client";

import {
  motion,
  AnimatePresence,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Star, MapPin, Hammer, Users, Clock, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import PhoneFrame from "./mockups/PhoneFrame";
import ExploreMockup from "./mockups/ExploreMockup";

interface HeroProps {
  activeRole: "client" | "worker";
}

export default function Hero({ activeRole }: HeroProps) {
  const t = useTranslations("Hero");

  // Client variants
  const clientTitle = (
    <>
      <AnimatedWords text={t("client_title_1")} />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary-light inline-block">
        <AnimatedWords text={t("client_title_2")} delay={0.3} />
      </span>
      <br/>
      <AnimatedWords text={t("client_title_3")} delay={0.6} />
    </>
  );
  const clientDesc = t("client_desc");

  // Worker variants
  const workerTitle = (
    <>
      <AnimatedWords text={t("worker_title_1")} />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-primary-dark inline-block">
        <AnimatedWords text={t("worker_title_2")} delay={0.3} />
      </span>
      <br/>
      <AnimatedWords text={t("worker_title_3")} delay={0.6} />
    </>
  );
  const workerDesc = t("worker_desc");

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
            {/* Quick Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/5 text-xs font-semibold text-slate-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span>{t("badge_new")}</span>
            </motion.div>

            {/* Dynamic Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeRole}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="block"
                >
                  {activeRole === "client" ? clientTitle : workerTitle}
                </motion.span>
              </AnimatePresence>
            </h1>

            {/* Dynamic Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed min-h-[100px] flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeRole}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeRole === "client" ? clientDesc : workerDesc}
                </motion.span>
              </AnimatePresence>
            </p>

            {/* App Store Links */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start w-full">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#descargar"
                className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 border border-white/10 hover:border-brand-primary/40 rounded-2xl px-6 py-3 transition-colors duration-300 group shadow-lg"
              >
                {/* Apple App Store Icon */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-6 h-6 object-contain" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">{t("download_on")}</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-primary transition-colors">{t("app_store")}</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#descargar"
                className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 border border-white/10 hover:border-brand-highlight/40 rounded-2xl px-6 py-3 transition-colors duration-300 group shadow-lg"
              >
                {/* Google Play Icon */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-6 h-6 object-contain" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">{t("available_on")}</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-highlight transition-colors">{t("google_play")}</p>
                </div>
              </motion.a>
            </div>

            {/* Micro Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/5 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">4.9★</span>
                <span className="text-xs text-slate-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-highlight" /> {t("stat_quality")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">+10k</span>
                <span className="text-xs text-slate-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <Users className="w-3.5 h-3.5 text-brand-primary" /> {t("stat_requests")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">&lt; 5 min</span>
                <span className="text-xs text-slate-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-primary-light" /> {t("stat_responses")}
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

const AnimatedWords = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ overflow: "hidden", display: "inline-flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
