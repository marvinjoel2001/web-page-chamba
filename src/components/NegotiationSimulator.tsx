"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  DollarSign,
  User,
  Hammer,
  CheckCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

type Stage = 0 | 1 | 2 | 3 | 4;

export default function NegotiationSimulator() {
  const [stage, setStage] = useState<Stage>(0);

  const stages = [
    {
      label: "1. Publicar Solicitud",
      desc: "El cliente publica la tarea con una tarifa inicial sugerida.",
    },
    {
      label: "2. Recibir Ofertas",
      desc: "Los trabajadores cercanos envían sus cotizaciones basadas en la distancia y materiales.",
    },
    {
      label: "3. Contraoferta",
      desc: "El cliente puede proponer una tarifa intermedia si la oferta inicial es alta.",
    },
    {
      label: "4. Re-oferta final",
      desc: "El trabajador ajusta su cotización y añade valor (ej. materiales incluidos).",
    },
    {
      label: "5. Aceptar e Iniciar",
      desc: "Ambas partes acuerdan el precio y se agenda el trabajo de inmediato.",
    },
  ];

  return (
    <section id="simulador" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 w-80 h-80 rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Negociación Transparente y Directa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Experimenta el flujo real de la aplicación. Haz clic en los pasos para simular cómo negocias tarifas sin intermediarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left panel: Timeline & Steps */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#121824] border border-white/5 rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-orange" />
                Flujo de Negociación
              </h3>
              
              <div className="flex flex-col gap-4 relative">
                {/* Visual Connector Line */}
                <div className="absolute left-[18px] top-6 bottom-6 w-[2px] bg-slate-800" />
                
                {stages.map((st, index) => {
                  const isActive = stage === index;
                  const isCompleted = stage > index;
                  return (
                    <button
                      key={index}
                      onClick={() => setStage(index as Stage)}
                      className={`flex gap-4 text-left p-3 rounded-2xl transition-all duration-300 relative z-10 ${
                        isActive
                          ? "bg-slate-900 border border-brand-orange/30 shadow-lg"
                          : "hover:bg-slate-900/40 border border-transparent"
                      }`}
                    >
                      {/* Circle indicator */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 border ${
                          isActive
                            ? "bg-brand-orange text-white border-brand-orange shadow shadow-brand-orange/40"
                            : isCompleted
                            ? "bg-brand-teal/20 text-brand-teal border-brand-teal"
                            : "bg-slate-950 text-slate-500 border-slate-800"
                        }`}
                      >
                        {isCompleted ? <CheckCircle className="w-4.5 h-4.5" /> : index + 1}
                      </div>

                      <div>
                        <h4
                          className={`text-sm font-bold transition-colors ${
                            isActive ? "text-white" : "text-slate-300"
                          }`}
                        >
                          {st.label}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Quick action helper button */}
            <button
              onClick={() => setStage(((stage + 1) % 5) as Stage)}
              className="w-full py-3.5 bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-amber-600 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 transition-all duration-300"
            >
              <span>Siguiente Paso</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right panel: Live phone screen simulation */}
          <div className="lg:col-span-7 flex justify-center">
            {/* Outer phone container */}
            <div className="relative w-full max-w-[380px] h-[520px] rounded-[40px] bg-slate-950 border-8 border-slate-900 shadow-2xl overflow-hidden flex flex-col glow-orange">
              {/* Speaker Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-5 bg-slate-900 rounded-b-2xl z-30" />
              
              {/* Phone Header */}
              <div className="h-14 bg-[#121824] border-b border-white/5 flex items-center px-6 pt-4 justify-between z-20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Negociando</span>
                </div>
                <span className="text-[10px] text-slate-400">ID: req-2849</span>
              </div>

              {/* Chat / Bidding Simulator Arena */}
              <div className="flex-1 bg-[#090d16] p-4 flex flex-col justify-between overflow-hidden relative">
                
                {/* Simulated Grid backdrop */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                {/* Live screen change transitions */}
                <div className="flex-1 flex flex-col gap-3 justify-center z-10">
                  <AnimatePresence mode="wait">
                    {stage === 0 && (
                      <motion.div
                        key="stage0"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="flex flex-col gap-3"
                      >
                        <div className="self-end max-w-[85%] bg-brand-orange text-white p-3 rounded-2xl rounded-tr-none text-xs shadow-md">
                          <p className="font-bold border-b border-white/10 pb-1 mb-1">Nueva Solicitud: Cliente</p>
                          <p className="font-medium text-[11px]">Necesito reparar el grifo de la cocina que tiene una fuga constante.</p>
                          <div className="mt-2 flex items-center justify-between text-[10px] bg-black/15 p-1.5 rounded-lg">
                            <span>Presupuesto Cliente</span>
                            <span className="font-extrabold">$50.00</span>
                          </div>
                        </div>
                        <span className="text-[9px] text-slate-400 text-right mr-1">Publicado hace 30s</span>
                      </motion.div>
                    )}

                    {stage === 1 && (
                      <motion.div
                        key="stage1"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="flex flex-col gap-3"
                      >
                        {/* Client original request */}
                        <div className="self-end max-w-[80%] bg-slate-900 border border-white/5 text-slate-300 p-2.5 rounded-2xl rounded-tr-none text-[11px]">
                          Fuga en grifo de cocina. Presupuesto: <strong>$50</strong>
                        </div>
                        
                        {/* Worker Bid */}
                        <div className="self-start max-w-[85%] bg-slate-900 border border-white/10 text-white p-3 rounded-2xl rounded-tl-none text-xs shadow-md">
                          <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/5">
                            <img
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                              alt="Roberto"
                              className="w-6 h-6 rounded-full object-cover border border-brand-orange"
                            />
                            <div>
                              <p className="font-bold text-[11px] leading-tight">Roberto G. (Pintor/Plomero)</p>
                              <p className="text-[9px] text-slate-400">4.9★ • a 1.8 km de ti</p>
                            </div>
                          </div>
                          <p className="text-[11px]">Hola, puedo ir en 20 mins. Cobro $65 por mano de obra e inspección.</p>
                          <div className="mt-2.5 flex items-center justify-between text-[10px] bg-slate-950 p-1.5 rounded-lg border border-white/5">
                            <span className="text-slate-400">Oferta de Roberto</span>
                            <span className="font-bold text-brand-teal">$65.00</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {stage === 2 && (
                      <motion.div
                        key="stage2"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="flex flex-col gap-3"
                      >
                        {/* Worker Bid */}
                        <div className="self-start max-w-[80%] bg-slate-900 border border-white/5 text-slate-400 p-2.5 rounded-2xl rounded-tl-none text-[10px]">
                          Roberto G. ofertó: <strong>$65.00</strong>
                        </div>

                        {/* Client Counteroffer */}
                        <div className="self-end max-w-[85%] bg-brand-orange text-white p-3 rounded-2xl rounded-tr-none text-xs shadow-md">
                          <p className="font-bold border-b border-white/10 pb-1 mb-1">Tú (Cliente)</p>
                          <p className="font-medium text-[11px]">¿Qué tal $55? Es un trabajo simple y tengo las herramientas necesarias en casa.</p>
                          <div className="mt-2 flex items-center justify-between text-[10px] bg-black/15 p-1.5 rounded-lg">
                            <span>Tu Contraoferta</span>
                            <span className="font-extrabold">$55.00</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {stage === 3 && (
                      <motion.div
                        key="stage3"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="flex flex-col gap-3"
                      >
                        {/* Client Counteroffer */}
                        <div className="self-end max-w-[80%] bg-slate-900 border border-white/5 text-slate-400 p-2.5 rounded-2xl rounded-tr-none text-[10px]">
                          Contraoferta cliente: <strong>$55.00</strong>
                        </div>

                        {/* Worker final Re-offer */}
                        <div className="self-start max-w-[85%] bg-slate-900 border border-white/10 text-white p-3 rounded-2xl rounded-tl-none text-xs shadow-md">
                          <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/5">
                            <img
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                              alt="Roberto"
                              className="w-6 h-6 rounded-full object-cover border border-brand-orange"
                            />
                            <div>
                              <p className="font-bold text-[11px] leading-tight">Roberto Gomez</p>
                              <p className="text-[9px] text-slate-400">4.9★ • Activo</p>
                            </div>
                          </div>
                          <p className="text-[11px]">Trato hecho por $60. Yo llevo el teflón y las gomas de repuesto para que quede perfecto.</p>
                          <div className="mt-2.5 flex items-center justify-between text-[10px] bg-slate-950 p-1.5 rounded-lg border border-white/5">
                            <span className="text-brand-orange">Re-oferta de Roberto</span>
                            <span className="font-bold text-brand-teal">$60.00</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {stage === 4 && (
                      <motion.div
                        key="stage4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center text-center p-4 bg-slate-900/60 border border-brand-teal/20 rounded-3xl"
                      >
                        <div className="w-12 h-12 rounded-full bg-brand-teal/15 flex items-center justify-center text-brand-teal mb-3">
                          <CheckCircle className="w-6 h-6 animate-bounce" />
                        </div>
                        <h4 className="text-sm font-bold text-white">¡Trato Confirmado!</h4>
                        <p className="text-[10px] text-slate-400 mt-1 max-w-[200px]">
                          Se ha asignado el trabajo por <strong>$60.00</strong>. Roberto va en camino.
                        </p>
                        
                        {/* Live GPS Card */}
                        <div className="mt-4 w-full bg-slate-950 border border-white/5 rounded-2xl p-2.5 flex items-center justify-between text-left">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-brand-teal/15 rounded-lg flex items-center justify-center text-brand-teal">
                              <Hammer className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-white">Roberto Gomez</p>
                              <p className="text-[8px] text-slate-500">Llegada estimada: 12 min</p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-[8px] tracking-wide">
                            EN CAMINO
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Bar: Action Trigger */}
                <div className="border-t border-white/5 pt-3 mt-4 flex justify-between items-center bg-[#090d16]/80 backdrop-blur z-20">
                  <span className="text-[9px] text-slate-500">Paso {stage + 1} de 5</span>
                  <div className="flex gap-1.5">
                    <button
                      disabled={stage === 0}
                      onClick={() => setStage((stage - 1) as Stage)}
                      className="px-2.5 py-1 text-[9px] font-bold border border-white/10 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 transition"
                    >
                      Atrás
                    </button>
                    <button
                      disabled={stage === 4}
                      onClick={() => setStage((stage + 1) as Stage)}
                      className="px-3 py-1 text-[9px] font-bold bg-brand-teal hover:bg-brand-teal-hover text-slate-950 rounded-lg shadow shadow-brand-teal/20 transition"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
