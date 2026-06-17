"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Hammer, Users, Clock, ShieldCheck } from "lucide-react";
import PhoneFrame from "./mockups/PhoneFrame";
import ExploreMockup from "./mockups/ExploreMockup";

interface HeroProps {
  activeRole: "client" | "worker";
}

export default function Hero({ activeRole }: HeroProps) {
  // Client variants
  const clientTitle = (
    <>
      Encuentra profesionales locales{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary-light">
        de confianza
      </span>{" "}
      en minutos
    </>
  );
  const clientDesc =
    "Publica tu necesidad (plomería, pintura, limpieza y más), recibe múltiples ofertas de trabajadores locales calificados en tu zona, negocia tarifas en tiempo real y págalos de forma directa.";

  // Worker variants
  const workerTitle = (
    <>
      Haz trabajos locales{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-primary-dark">
        a tu propio ritmo
      </span>{" "}
      y gana dinero
    </>
  );
  const workerDesc =
    "Únete como Chambero, configura tu radio de trabajo y recibe notificaciones de solicitudes de clientes en tu zona al instante. Envía ofertas, chatea directo con los clientes y crece tu reputación.";

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
              <span>Chamba App v1.5 está disponible</span>
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
              <a
                href="#descargar"
                className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 border border-white/10 hover:border-brand-primary/40 rounded-2xl px-6 py-3 transition-all duration-300 group shadow-lg"
              >
                {/* Apple App Store Icon */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-6 h-6 object-contain" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Descargar en</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-primary transition-colors">App Store</p>
                </div>
              </a>

              <a
                href="#descargar"
                className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 border border-white/10 hover:border-brand-highlight/40 rounded-2xl px-6 py-3 transition-all duration-300 group shadow-lg"
              >
                {/* Google Play Icon */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-6 h-6 object-contain" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Disponible en</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-highlight transition-colors">Google Play</p>
                </div>
              </a>
            </div>

            {/* Micro Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/5 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">4.9★</span>
                <span className="text-xs text-slate-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-highlight" /> Calidad
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">+10k</span>
                <span className="text-xs text-slate-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <Users className="w-3.5 h-3.5 text-brand-primary" /> Solicitudes
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">&lt; 5 min</span>
                <span className="text-xs text-slate-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-primary-light" /> Respuestas
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background glowing rings */}
            <div className="absolute w-[350px] h-[350px] rounded-full border border-brand-primary/10 animate-pulse-slow" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-brand-primary-light/5 animate-pulse-slow" />

            {/* Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2, y: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -15, 0] }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative z-10 w-full flex justify-center hover:scale-[1.02] transition-transform duration-500"
            >
              <img 
                src="/images/app_screenshot.png" 
                alt="Chamba App Screenshot" 
                className="w-full h-auto max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[550px] xl:max-w-[600px] object-contain drop-shadow-[0_0_60px_rgba(109,40,217,0.4)]" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
