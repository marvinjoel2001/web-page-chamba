"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Hammer, Users, Clock, ShieldCheck } from "lucide-react";

interface HeroProps {
  activeRole: "client" | "worker";
}

export default function Hero({ activeRole }: HeroProps) {
  // Client variants
  const clientTitle = (
    <>
      Encuentra profesionales locales{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
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
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-cyan-400">
        a tu propio ritmo
      </span>{" "}
      y gana dinero
    </>
  );
  const workerDesc =
    "Únete como Chambero, configura tu radio de trabajo y recibe notificaciones de solicitudes de clientes en tu zona al instante. Envía ofertas, chatea directo con los clientes y crece tu reputación.";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-teal/10 blur-[120px] pointer-events-none" />

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
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
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
                className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-brand-orange/40 rounded-2xl px-6 py-3 transition-all duration-300 group shadow-lg"
              >
                {/* SVG Apple App Store Icon */}
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 22C14.32 22.05 13.89 21.24 12.37 21.24C10.84 21.24 10.37 21.97 9.1 22C7.81 22.02 6.81 20.69 5.97 19.48C4.26 17 2.95 12.39 4.7 9.35C5.57 7.84 7.13 6.88 8.82 6.85C10.1 6.82 11.31 7.71 12.09 7.71C12.87 7.71 14.34 6.64 15.9 6.8C16.56 6.83 18.39 7.07 19.57 8.8C19.47 8.86 17.39 10.07 17.41 12.5C17.44 15.39 19.89 16.36 19.92 16.37C19.9 16.42 19.52 17.73 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C15.99 1.04 14.83 1.64 14.14 2.45C13.55 3.12 13.03 4.23 13.18 5.48C14.25 5.56 15.32 4.96 15.97 4.17Z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Descargar en</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">App Store</p>
                </div>
              </a>

              <a
                href="#descargar"
                className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-brand-teal/40 rounded-2xl px-6 py-3 transition-all duration-300 group shadow-lg"
              >
                {/* SVG Google Play Icon */}
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12L8,6.5V17.5L17.5,12Z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Disponible en</p>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-teal transition-colors">Google Play</p>
                </div>
              </a>
            </div>

            {/* Micro Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/5 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">4.9★</span>
                <span className="text-xs text-slate-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" /> Calidad
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">+10k</span>
                <span className="text-xs text-slate-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <Users className="w-3.5 h-3.5 text-brand-orange" /> Solicitudes
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">&lt; 5 min</span>
                <span className="text-xs text-slate-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" /> Respuestas
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background glowing rings */}
            <div className="absolute w-[350px] h-[350px] rounded-full border border-brand-orange/10 animate-pulse-slow" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-brand-teal/5 animate-pulse-slow" />

            {/* Main Mockup Container */}
            <div className="relative w-[300px] h-[600px] rounded-[48px] bg-slate-950 border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col glow-teal transition-all duration-500 hover:scale-[1.02] hover:-rotate-1">
              {/* Speaker & Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-2xl z-30 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-slate-900 mr-2" />
                <span className="w-10 h-1 bg-slate-950 rounded-full" />
              </div>

              {/* App Screen Content */}
              <div className="flex-1 bg-[#090d16] flex flex-col p-4 pt-10 relative overflow-hidden select-none">
                {/* Map Grid Background Placeholder */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                {/* Location Marker with pulsing range */}
                <div className="absolute top-[40%] left-[55%] z-10 -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute -inset-4 rounded-full border-2 border-brand-teal/30 bg-brand-teal/10 animate-ping" />
                  <span className="absolute -inset-8 rounded-full border border-brand-teal/15 bg-brand-teal/5 animate-pulse" />
                  <div className="relative w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center shadow-lg shadow-brand-teal/30">
                    <MapPin className="w-4 h-4 text-slate-950 font-bold" />
                  </div>
                </div>

                {/* Simulated Notification / Card */}
                <div className="mt-2 z-20 flex items-center justify-between bg-slate-900/90 backdrop-blur border border-white/5 rounded-2xl p-3 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                      <Hammer className="w-4.5 h-4.5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Chambas Cercanas</h4>
                      <p className="text-[10px] text-slate-400">4 trabajadores activos</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-brand-teal/15 text-brand-teal font-extrabold text-[9px] tracking-wide animate-pulse">
                    EN VIVO
                  </span>
                </div>

                {/* Dynmic content showing worker profile or client request */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-3">
                  <AnimatePresence mode="wait">
                    {activeRole === "client" ? (
                      <motion.div
                        key="client-screen-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.3 }}
                        className="glass rounded-3xl p-4 shadow-xl border border-white/10 flex flex-col gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                            alt="Roberto"
                            className="w-10 h-10 rounded-full object-cover border-2 border-brand-orange"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-bold text-white">Roberto Gomez</h4>
                              <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                                <Star className="w-3 h-3 text-brand-orange fill-brand-orange" /> 4.9
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-400">Pintura y Albañilería • 2.4 km</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-950/60 rounded-xl p-2 border border-white/5">
                          <span className="text-[10px] text-slate-400">Oferta Inicial</span>
                          <span className="text-xs font-bold text-brand-teal">$120.00</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <button className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-[10px] font-bold transition">
                            Negociar
                          </button>
                          <button className="py-2 px-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl text-[10px] font-bold shadow shadow-brand-orange/30 transition">
                            Aceptar
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="worker-screen-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.3 }}
                        className="glass rounded-3xl p-4 shadow-xl border border-white/10 flex flex-col gap-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded bg-brand-teal/15 text-brand-teal font-semibold text-[8px]">
                            NUEVO TRABAJO
                          </span>
                          <span className="text-[9px] text-slate-400">Hace 1 min</span>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white">Reparación de Cañería</h4>
                          <p className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-brand-teal" /> Sopocachi, La Paz • 1.5 km
                          </p>
                        </div>
                        <div className="flex items-center justify-between bg-slate-950/60 rounded-xl p-2 border border-white/5">
                          <span className="text-[10px] text-slate-400">Presupuesto Cliente</span>
                          <span className="text-xs font-bold text-brand-orange">$80.00</span>
                        </div>
                        <button className="w-full py-2 bg-brand-teal hover:bg-brand-teal-hover text-slate-950 rounded-xl text-[10px] font-bold shadow-lg shadow-brand-teal/20 transition">
                          Enviar Oferta
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Absolute Decorative Floating Elements */}
            {/* Badge 1: Pintor */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -left-12 top-[15%] hidden sm:flex items-center gap-2 bg-slate-900/90 border border-white/5 rounded-2xl p-2.5 shadow-xl backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                <Star className="w-4.5 h-4.5 fill-brand-orange" />
              </div>
              <div className="text-left">
                <h5 className="text-[10px] font-bold text-white">Roberto Gomez</h5>
                <p className="text-[9px] text-slate-400">Pintor • 4.9★</p>
              </div>
            </motion.div>

            {/* Badge 2: Limpieza */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-16 bottom-[25%] hidden sm:flex items-center gap-2 bg-slate-900/90 border border-white/5 rounded-2xl p-2.5 shadow-xl backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <h5 className="text-[10px] font-bold text-white">Elena Morales</h5>
                <p className="text-[9px] text-slate-400">Decoradora • Verificada</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
