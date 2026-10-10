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
    <section id="descargar" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-2xl bg-white/85 rounded-3xl p-8 sm:p-12 md:p-14 border border-white/90 shadow-[0_20px_60px_rgba(139,92,246,0.12)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
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

            <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-lg">
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
                className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl px-6 py-3 transition shadow-md hover:shadow-lg group"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple App Store" className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">iOS App Store</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl px-6 py-3 transition shadow-md hover:shadow-lg group"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play Store" className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">Google Play Store</span>
              </a>
            </div>
          </div>

          {/* Right column: Interactive Premium QR Mockup */}
          <div className="flex flex-col items-center shrink-0 backdrop-blur-xl bg-white/70 border border-white/80 p-5 rounded-3xl shadow-2xs w-full max-w-[210px]">
            {/* Visual QR Code Simulator */}
            <div className="w-36 h-36 border border-slate-200/80 rounded-2xl p-2.5 bg-white flex flex-col justify-between items-center relative shadow-sm">
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
                <div className="col-span-6 h-8 bg-purple-100 rounded flex items-center justify-center font-bold text-[9px] tracking-tighter text-purple-900">
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
            
            <span className="text-[10px] text-slate-500 font-bold mt-4 text-center">
              {t("scan_to_download")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
