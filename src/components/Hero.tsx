"use client";

import { motion } from "framer-motion";
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
  Mic,
  DollarSign,
  Send,
  Radio,
} from "lucide-react";
import React from "react";
import AppPhoneMockup from "@/components/mockups/AppPhoneMockup";

interface HeroProps {
  activeRole: "client" | "worker";
}

export default function Hero({ activeRole }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-[#f8fafc]">
      {/* Background Decorative Ambient Aura (Light mode Glassmorphic depth) */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-purple-200/35 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-36 left-4 w-[420px] h-[420px] bg-indigo-100/40 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[350px] h-[350px] bg-amber-100/30 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Floating Dot Matrix - Left Background */}
      <div className="absolute top-28 left-8 sm:left-16 opacity-25 pointer-events-none -z-10 hidden sm:block">
        <div className="grid grid-cols-6 gap-2.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* MODO CLIENTE: Entras, pides tu servicio y te mandan al que acepte tu oferta*/}
        {/* ========================================================================= */}
        {activeRole === "client" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Concept, Search Bar, Quick Chips, Pillars, Stats */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left z-20">
              
              {/* Badge: Glassmorphic Capsule */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/85 border border-purple-200/70 text-purple-700 text-xs font-bold mb-5 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Pides lo que necesitas · Te mandan al que acepte tu oferta</span>
              </motion.div>

              {/* Dynamic Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black tracking-tight text-slate-900 leading-[1.12]">
                Encuentra a alguien<br />
                que haga{" "}
                <span className="text-purple-600 inline-block">
                  el trabajo.
                </span>
              </h1>

              {/* Core Concept Subtitle */}
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                <strong className="font-semibold text-slate-900">Entras a la app, pides lo que buscas</strong> (por voz o texto), fijas tu oferta y te conectamos al instante con un profesional verificado de tu zona que la acepte. Trato directo y sin vueltas.
              </p>

              {/* Glassmorphic Visual Search Bar (Refleja la pantalla real de la app) */}
              <div className="mt-6 w-full max-w-xl backdrop-blur-xl bg-white/85 border border-purple-100 rounded-2xl sm:rounded-full p-2 sm:p-1.5 pl-4 sm:pl-5 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 shadow-[0_12px_36px_rgba(139,92,246,0.08)] select-none">
                <div className="flex items-center flex-1 min-w-0 w-full sm:w-auto pr-2">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mr-2.5 shrink-0">
                    <Mic className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-slate-500 text-xs sm:text-sm font-medium truncate">
                    Ej: &quot;Necesito que alguien me pinte la casa&quot;
                  </span>
                </div>

                <div className="hidden sm:block h-6 w-px bg-slate-200 mx-1 shrink-0" />

                <div className="flex items-center justify-between w-full sm:w-auto gap-2">
                  <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full shrink-0 bg-slate-50 border border-slate-100">
                    <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">Santa Cruz</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>

                  <a
                    href="#descargar"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shrink-0 shadow-md shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Solicitar</span>
                    <Send className="w-3 h-3 text-white" />
                  </a>
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/75 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-700 shadow-2xs hover:border-purple-300 transition-colors"
                  >
                    {chip.icon}
                    <span>{chip.label}</span>
                  </div>
                ))}
              </div>

              {/* 4 Pillars / Features Row in Glassmorphic Micro-cards */}
              <div className="mt-8 pt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl">
                <div className="p-2.5 rounded-2xl backdrop-blur-md bg-white/70 border border-white/80 shadow-2xs flex flex-col">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-2">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">Profesionales verificados</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Seguridad ante todo</span>
                </div>

                <div className="p-2.5 rounded-2xl backdrop-blur-md bg-white/70 border border-white/80 shadow-2xs flex flex-col">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-2">
                    <Tag className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">Tu propuesta manda</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Precios claros</span>
                </div>

                <div className="p-2.5 rounded-2xl backdrop-blur-md bg-white/70 border border-white/80 shadow-2xs flex flex-col">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">En tu mismo barrio</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Llegan en minutos</span>
                </div>

                <div className="p-2.5 rounded-2xl backdrop-blur-md bg-white/70 border border-white/80 shadow-2xs flex flex-col">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-2">
                    <MessageSquare className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">Trato directo</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Sin intermediarios</span>
                </div>
              </div>

              {/* Numeric Stats Row */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl">
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
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-600">Calificación promedio</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-purple-600">100+</span>
                  <span className="text-xs font-medium text-slate-600">Oficios disponibles</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual with Real App Screenshot in Glassmorphic Frame */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0 z-10">
              <div className="relative w-full max-w-[420px] flex items-center justify-center">
                {/* Background ambient lighting */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-300/30 blur-3xl rounded-full pointer-events-none" />

                {/* Real App Screenshot Phone Mockup */}
                <AppPhoneMockup
                  imageSrc="/images/app-screens/cliente_01_inicio.png"
                  alt="App Chamba - Pantalla de inicio de cliente"
                  floatingBadgeTop={{
                    icon: <Mic className="w-4 h-4 text-purple-600" />,
                    title: "Pide por voz o escribe",
                    subtitle: "Fija tu oferta en Bs",
                  }}
                  floatingBadgeBottom={{
                    icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
                    title: "Oferta Aceptada",
                    subtitle: "Trabajador en camino",
                  }}
                />
              </div>
            </div>

          </div>
        ) : (
          /* ========================================================================= */
          /* MODO TRABAJADOR / CHAMBEADOR: Si estás libre, actívate y recibe trabajos   */
          /* ========================================================================= */
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: Worker Headline, Subtitle, Value Points, Trade Cards, CTA */}
              <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left z-20">
                
                {/* Badge: Glassmorphic Capsule */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/85 border border-emerald-200/80 text-emerald-800 text-xs font-bold mb-5 shadow-xs"
                >
                  <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                  <span>¿Estás libre o buscando trabajo? Habilítate y genera ingresos</span>
                </motion.div>

                {/* Worker Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black tracking-tight text-slate-900 leading-[1.12]">
                  Actívate en la app<br />
                  y recibe chambas{" "}
                  <span className="text-purple-600 inline-block">
                    al instante.
                  </span>
                </h1>

                {/* Worker Subtitle - Simplicidad total */}
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  ¿Estás sin hacer nada o buscando trabajo? Con un solo toque te colocas en modo <strong className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">DISPONIBLE</strong>. Te llegan solicitudes directas de personas en tu barrio que ya publicaron su presupuesto. Aceptas la que te convenga, vas al lugar y cobras el 100% de tu plata.
                </p>

                {/* 3 Simplicity Pillars for Workers */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">
                  <div className="p-3.5 rounded-2xl backdrop-blur-md bg-white/80 border border-white/90 shadow-2xs flex flex-col">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 mb-2">
                      <Radio className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-xs font-black text-slate-900 leading-tight">1 clic: Disponible</span>
                    <span className="text-[11px] text-slate-500 mt-1 leading-snug">
                      Tú decides qué días y a qué hora quieres recibir solicitudes.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl backdrop-blur-md bg-white/80 border border-white/90 shadow-2xs flex flex-col">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600 mb-2">
                      <MapPin className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-xs font-black text-slate-900 leading-tight">Chambas en tu zona</span>
                    <span className="text-[11px] text-slate-500 mt-1 leading-snug">
                      Alertas de vecinos cercanos para no gastar en pasajes.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl backdrop-blur-md bg-white/80 border border-white/90 shadow-2xs flex flex-col">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 mb-2">
                      <DollarSign className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-xs font-black text-slate-900 leading-tight">Cobras el 100%</span>
                    <span className="text-[11px] text-slate-500 mt-1 leading-snug">
                      Sin intermediarios ni descuentos sorpresa. Plata directa.
                    </span>
                  </div>
                </div>

                {/* Trade / Specialty Cards Grid */}
                <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5 w-full max-w-xl">
                  {[
                    { icon: <Sparkles className="w-4 h-4 text-purple-600" />, label: "Limpieza" },
                    { icon: <HardHat className="w-4 h-4 text-purple-600" />, label: "Construcción" },
                    { icon: <Shield className="w-4 h-4 text-purple-600" />, label: "Seguridad" },
                    { icon: <Wrench className="w-4 h-4 text-purple-600" />, label: "Mantenimiento" },
                    { icon: <Sprout className="w-4 h-4 text-purple-600" />, label: "Jardinería" },
                    { icon: <LayoutGrid className="w-4 h-4 text-purple-600" />, label: "Más oficios" },
                  ].map((trade, idx) => (
                    <div
                      key={idx}
                      className="backdrop-blur-md bg-white/75 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center text-center justify-center shadow-2xs hover:border-purple-300 transition-all select-none"
                    >
                      <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center mb-1">
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
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full backdrop-blur-md bg-white/90 hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-xs transition-all"
                  >
                    Descargar App de Trabajador
                  </a>
                </div>

              </div>

              {/* Right Column: Worker Visual Showcase - Real App Screen + Glassmorphism (Sin tapar texto!) */}
              <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0 z-10">
                <div className="relative w-full max-w-[420px] flex items-center justify-center">
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-200/35 blur-3xl rounded-full pointer-events-none" />

                  {/* Real Worker Screenshot with Switch DISPONIBLE */}
                  <AppPhoneMockup
                    imageSrc="/images/app-screens/worker_01_inicio.png"
                    alt="App Chamba - Pantalla de trabajador disponible"
                    floatingBadgeTop={{
                      icon: <Radio className="w-4 h-4 text-emerald-600" />,
                      title: "Estado: DISPONIBLE",
                      subtitle: "1 toque para recibir chambas",
                    }}
                    floatingBadgeBottom={{
                      icon: <DollarSign className="w-4 h-4 text-amber-600" />,
                      title: "100% de tu cobro",
                      subtitle: "Sin comisiones abusivas",
                    }}
                  />

                  {/* Discreet Real Worker Photo Floating in the background right */}
                  <div className="absolute -right-6 -bottom-6 w-32 sm:w-40 pointer-events-none opacity-85 z-0 hidden sm:block">
                    <img
                      src="/images/feature_worker_feathered.png"
                      alt="Chambero"
                      className="w-full h-auto drop-shadow-xl"
                    />
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
