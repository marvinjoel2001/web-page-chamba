"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  MapPin,
  ChevronDown,
  ShieldCheck,
  Tag,
  Calendar,
  MessageSquare,
  Wrench,
  Paintbrush,
  Sparkles,
  Zap,
  Star,
  Users,
  HardHat,
  Shield,
  Sprout,
  LayoutGrid,
  CheckCircle2,
} from "lucide-react";
import React from "react";

interface HeroProps {
  activeRole: "client" | "worker";
}

export default function Hero({ activeRole }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-[#f8fafc]">
      {/* Background Decorative Ambient Aura */}
      <div className="absolute top-10 right-0 w-[650px] h-[650px] bg-purple-200/30 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-purple-100/30 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Floating Dot Matrix - Left Background */}
      <div className="absolute top-28 left-8 sm:left-16 opacity-30 pointer-events-none -z-10 hidden sm:block">
        <div className="grid grid-cols-6 gap-2.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* MODO CLIENTE: Exactamente idéntico al diseño aprobado                     */}
        {/* ========================================================================= */}
        {activeRole === "client" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Left Column: Headline, Search, Chips, Pillars, Stats */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
              
              {/* Badge: Tu solución local */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/70 text-purple-700 text-xs font-bold mb-5 shadow-xs"
              >
                <Wrench className="w-3.5 h-3.5 text-purple-600" />
                <span>Tu solución local</span>
              </motion.div>

              {/* Dynamic Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black tracking-tight text-slate-900 leading-[1.12]">
                Encuentra a alguien<br />
                que haga{" "}
                <span className="text-purple-600 inline-block">
                  el trabajo.
                </span>
              </h1>

              {/* Subtitle with bullet points */}
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                <strong className="font-semibold text-slate-800">• Conecta</strong> con <strong className="font-semibold text-slate-800">profesionales</strong> de tu <strong className="font-semibold text-slate-800">zona para resolver</strong> reparaciones,
                <br className="hidden sm:inline" />
                • limpieza, pintura, electricidad y mucho más. Rápido, seguro y confiable.
              </p>

              {/* Modern Visual Display Search Bar (Sin acciones, puramente decorativo) */}
              <div className="mt-6 w-full max-w-xl bg-white border border-slate-200/90 rounded-full p-1.5 pl-4 sm:pl-5 flex items-center shadow-lg shadow-purple-900/5 select-none">
                <div className="flex items-center flex-1 min-w-0 pr-2">
                  <Search className="w-5 h-5 text-purple-600 mr-2.5 shrink-0" />
                  <span className="text-slate-400 text-sm sm:text-base font-normal truncate">
                    ¿Qué necesitas resolver?
                  </span>
                </div>

                <div className="h-6 w-px bg-slate-200 mx-1 shrink-0" />

                <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full shrink-0">
                  <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">Santa Cruz</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/30 ml-1.5">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Quick Chips */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2 sm:gap-2.5 w-full max-w-xl select-none">
                {[
                  { icon: <Wrench className="w-3.5 h-3.5 text-purple-600" />, label: "Necesito un plomero" },
                  { icon: <Paintbrush className="w-3.5 h-3.5 text-purple-600" />, label: "Quiero pintar mi casa" },
                  { icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" />, label: "Necesito limpieza" },
                  { icon: <Zap className="w-3.5 h-3.5 text-purple-600" />, label: "Reparación eléctrica" },
                ].map((chip, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-700 shadow-xs"
                  >
                    {chip.icon}
                    <span>{chip.label}</span>
                  </div>
                ))}
              </div>

              {/* 4 Pillars / Features Row */}
              <div className="mt-8 pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl">
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Profesionales verificados</span>
                    <span className="text-[11px] text-slate-500 mt-0.5">Tu seguridad primero</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <Tag className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Precios claros</span>
                    <span className="text-[11px] text-slate-500 mt-0.5">Sin sorpresas</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Disponible en tu zona</span>
                    <span className="text-[11px] text-slate-500 mt-0.5">Rápido y cerca de ti</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Soporte 24/7</span>
                    <span className="text-[11px] text-slate-500 mt-0.5">Siempre contigo</span>
                  </div>
                </div>
              </div>

              {/* Numeric Stats Row */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-purple-600">10K+</span>
                  <span className="text-xs font-medium text-slate-600">Profesionales activos</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-purple-600">50K+</span>
                  <span className="text-xs font-medium text-slate-600">Servicios completados</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl sm:text-3xl font-black text-purple-600">4.9</span>
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-600">Calificación promedio</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-purple-600">100+</span>
                  <span className="text-xs font-medium text-slate-600">Categorías de servicios</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Graphic (Phone + Girl + Living Room) */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-200/40 blur-3xl rounded-full pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full flex justify-center lg:justify-end items-center select-none"
              >
                <img
                  src="/images/hero_client_dissolve.png"
                  alt="Chamba - Encuentra a alguien que haga el trabajo"
                  className="w-full h-auto max-w-[680px] sm:max-w-[780px] lg:max-w-[880px] xl:max-w-[980px] 2xl:max-w-[1100px] object-contain drop-shadow-[0_25px_50px_rgba(139,92,246,0.18)]"
                />
              </motion.div>
            </div>

          </div>
        ) : (
          /* ========================================================================= */
          /* MODO TRABAJADOR: "Más oportunidades para gente que sí trabaja"            */
          /* ========================================================================= */
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Worker Headline, Subtitle, Trade Cards, CTA */}
              <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left">
                
                {/* Badge: Trabajo para todos */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/70 text-purple-700 text-xs font-bold mb-5 shadow-xs"
                >
                  <Users className="w-3.5 h-3.5 text-purple-600" />
                  <span>Trabajo para todos</span>
                </motion.div>

                {/* Worker Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black tracking-tight text-slate-900 leading-[1.12]">
                  Más oportunidades<br />
                  para gente que<br />
                  <span className="text-purple-600 inline-block">
                    sí trabaja.
                  </span>
                </h1>

                {/* Worker Subtitle */}
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  Conectamos personas trabajadoras con oportunidades reales en limpieza, construcción, seguridad, mantenimiento y mucho más. Cobra el 100% directo, sin comisiones ocultas.
                </p>

                {/* Trade / Specialty Cards Grid (Como en la maqueta) */}
                <div className="mt-7 grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 w-full max-w-xl">
                  {[
                    { icon: <Sparkles className="w-5 h-5 text-purple-600" />, label: "Limpieza" },
                    { icon: <HardHat className="w-5 h-5 text-purple-600" />, label: "Construcción" },
                    { icon: <Shield className="w-5 h-5 text-purple-600" />, label: "Seguridad" },
                    { icon: <Wrench className="w-5 h-5 text-purple-600" />, label: "Mantenimiento" },
                    { icon: <Sprout className="w-5 h-5 text-purple-600" />, label: "Jardinería" },
                    { icon: <LayoutGrid className="w-5 h-5 text-purple-600" />, label: "Más trabajos" },
                  ].map((trade, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/90 rounded-2xl p-3 flex flex-col items-center text-center justify-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all group select-none"
                    >
                      <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                        {trade.icon}
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        {trade.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Buttons for Worker */}
                <div className="mt-8 flex flex-wrap items-center gap-3 w-full max-w-xl">
                  <a
                    href="/unete"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Empezar a trabajar gratis</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#descargar"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-xs transition-all"
                  >
                    Descargar App de Trabajador
                  </a>
                </div>

              </div>

              {/* Right Column: Diverse Real Workers Image - Sin bordes cuadrados, desvanecida y MUCHO más grande */}
              <div className="lg:col-span-7 xl:col-span-7 relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-purple-200/40 blur-3xl rounded-full pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full flex justify-center lg:justify-end items-center select-none"
                >
                  <div className="relative w-full flex flex-col items-center">
                    <img
                      src="/images/workers_dissolve.png"
                      alt="Trabajadores de Chamba - Oportunidades y Oficios"
                      className="w-full h-auto max-w-none scale-105 sm:scale-115 lg:scale-125 xl:scale-135 2xl:scale-140 transform origin-center lg:origin-right object-contain drop-shadow-[0_25px_60px_rgba(139,92,246,0.16)] transition-transform duration-300"
                    />

                    {/* Modern Floating Badges */}
                    <div className="mt-4 sm:mt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 z-10 px-2">
                      <span className="bg-white/95 backdrop-blur-md border border-emerald-100 text-slate-800 shadow-lg shadow-purple-900/5 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        100% Identidad Verificada
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
