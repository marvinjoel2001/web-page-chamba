"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Download, Award, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

interface CTAProps {
  activeRole: "client" | "worker";
}

export default function CTA({ activeRole }: CTAProps) {
  const t = useTranslations("CTA");
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
                    ? t("client_title")
                    : t("worker_title")}
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
                    ? t("client_desc")
                    : t("worker_desc")}
                </motion.span>
              </AnimatePresence>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* App badges */}
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 border border-white/10 hover:border-brand-primary/40 rounded-2xl px-6 py-3 transition shadow-lg group"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple App Store" className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-white group-hover:text-brand-primary transition-colors">iOS App Store</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 border border-white/10 hover:border-brand-highlight/40 rounded-2xl px-6 py-3 transition shadow-lg group"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play Store" className="w-5 h-5 object-contain" />
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
              {t("scan_to_download")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
