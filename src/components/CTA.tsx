"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Download, Award, ShieldCheck } from "lucide-react";

interface CTAProps {
  activeRole: "client" | "worker";
}

export default function CTA({ activeRole }: CTAProps) {
  return (
    <section id="descargar" className="py-20 bg-[#090d16] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-[40px] p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 glow-orange">
          {/* Glowing particle effect in box */}
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-brand-highlight/10 blur-[60px]" />
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeRole}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  {activeRole === "client"
                    ? "¿Listo para resolver tus tareas domésticas?"
                    : "¿Listo para ganar más con tu oficio?"}
                </motion.span>
              </AnimatePresence>
            </h2>

            <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-lg">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeRole}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {activeRole === "client"
                    ? "Descarga Chamba App hoy. Publica tu primer requerimiento de forma gratuita y conéctate con trabajadores verificados en tu vecindario al instante."
                    : "Descarga la aplicación, regístrate como profesional y empieza a recibir ofertas de trabajo locales en tu zona. ¡El control es tuyo!"}
                </motion.span>
              </AnimatePresence>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* App badges */}
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 border border-white/10 hover:border-brand-primary/40 rounded-2xl px-6 py-3 transition shadow-lg group"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 22C14.32 22.05 13.89 21.24 12.37 21.24C10.84 21.24 10.37 21.97 9.1 22C7.81 22.02 6.81 20.69 5.97 19.48C4.26 17 2.95 12.39 4.7 9.35C5.57 7.84 7.13 6.88 8.82 6.85C10.1 6.82 11.31 7.71 12.09 7.71C12.87 7.71 14.34 6.64 15.9 6.8C16.56 6.83 18.39 7.07 19.57 8.8C19.47 8.86 17.39 10.07 17.41 12.5C17.44 15.39 19.89 16.36 19.92 16.37C19.9 16.42 19.52 17.73 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C15.99 1.04 14.83 1.64 14.14 2.45C13.55 3.12 13.03 4.23 13.18 5.48C14.25 5.56 15.32 4.96 15.97 4.17Z" />
                </svg>
                <span className="text-xs font-semibold text-white group-hover:text-brand-primary transition-colors">iOS App Store</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 border border-white/10 hover:border-brand-highlight/40 rounded-2xl px-6 py-3 transition shadow-lg group"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12L8,6.5V17.5L17.5,12Z" />
                </svg>
                <span className="text-xs font-semibold text-white group-hover:text-brand-highlight transition-colors">Google Play Store</span>
              </a>
            </div>
          </div>

          {/* Right column: Interactive Premium QR Mockup */}
          <div className="flex flex-col items-center shrink-0 bg-slate-950 border border-white/10 p-5 rounded-3xl shadow-xl w-full max-w-[210px]">
            {/* Visual QR Code Simulator */}
            <div className="w-36 h-36 border border-white/5 rounded-2xl p-2.5 bg-white flex flex-col justify-between items-center relative">
              {/* Outer corners mock styling */}
              <div className="grid grid-cols-12 gap-1 w-full h-full text-slate-900">
                {/* Visual grid blocks mimicking QR code */}
                <div className="col-span-4 h-10 border-4 border-slate-950 rounded bg-transparent" />
                <div className="col-span-4 h-10 flex flex-wrap gap-0.5 p-0.5">
                  <div className="w-1.5 h-1.5 bg-slate-950 rounded-sm" />
                  <div className="w-2 h-2 bg-slate-900" />
                  <div className="w-2.5 h-1.5 bg-slate-950" />
                  <div className="w-1 h-3 bg-slate-900" />
                </div>
                <div className="col-span-4 h-10 border-4 border-slate-950 rounded bg-transparent" />
                
                {/* Mid section blocks */}
                <div className="col-span-3 h-8 flex flex-wrap gap-0.5 pt-1">
                  <div className="w-2 h-1 bg-slate-950" />
                  <div className="w-3 h-3 bg-slate-950" />
                </div>
                <div className="col-span-6 h-8 bg-slate-950/20 rounded flex items-center justify-center font-bold text-[9px] tracking-tighter text-slate-950">
                  CHAMBA
                </div>
                <div className="col-span-3 h-8 flex flex-wrap gap-0.5 justify-end pt-1">
                  <div className="w-2 h-2 bg-slate-950" />
                  <div className="w-3 h-1 bg-slate-950" />
                </div>

                {/* Bottom section blocks */}
                <div className="col-span-4 h-10 border-4 border-slate-950 rounded bg-transparent" />
                <div className="col-span-5 h-10 flex flex-wrap gap-0.5 p-1">
                  <div className="w-2 h-2 bg-slate-950" />
                  <div className="w-3 h-3 bg-slate-900" />
                  <div className="w-1 h-2 bg-slate-950" />
                </div>
                <div className="col-span-3 h-10 flex items-end justify-end">
                  <div className="w-5 h-5 bg-slate-950 rounded-sm" />
                </div>
              </div>
            </div>
            
            <span className="text-[10px] text-slate-400 font-bold mt-4 text-center">
              Escanea para descargar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
