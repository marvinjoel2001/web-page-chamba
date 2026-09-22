"use client";

import React from "react";
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  Home, 
  FileText, 
  User, 
  ChevronLeft, 
  Phone, 
  MessageCircle, 
  Star, 
  Share2, 
  Check, 
  ShieldCheck,
  Navigation,
  Clock,
  Sparkles,
  Zap
} from "lucide-react";

interface ModernPhoneMockupProps {
  step: 1 | 2 | 3 | 4 | 5;
  role?: "client" | "worker";
}

export default function ModernPhoneMockup({ step, role = "client" }: ModernPhoneMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-[185px] sm:max-w-[195px] aspect-[9/17.5] select-none">
      {/* Outer Phone Frame (Titanium Dark Finish with Gloss Bezel) */}
      <div className="relative w-full h-full rounded-[30px] p-[3.5px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-[0_18px_36px_rgba(0,0,0,0.85)] border border-white/10 flex flex-col justify-between overflow-hidden">
        
        {/* Inner Phone Screen */}
        <div className="relative w-full h-full rounded-[26px] bg-[#07090e] overflow-hidden flex flex-col justify-between text-white">
          
          {/* Glass Glare Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] z-30" />

          {/* Top Status Bar & Dynamic Island */}
          <div className="relative z-40 pt-1.5 px-3 flex items-center justify-between text-[8px] font-semibold text-slate-300">
            <span>9:41</span>
            
            {/* Dynamic Island Capsule */}
            <div className="h-3 w-12 bg-black rounded-full flex items-center justify-between px-1 border border-white/5 shadow-inner">
              <div className="w-1 h-1 rounded-full bg-[#18182b]" />
              <div className="w-1 h-1 rounded-full bg-[#0d2818] border border-emerald-500/40" />
            </div>

            <div className="flex items-center gap-1 text-[7px]">
              <span>5G</span>
              <div className="w-3 h-1.5 border border-white/60 rounded-[2px] p-[0.5px] flex items-center">
                <div className="w-full h-full bg-white rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Screen Dynamic Body by Step */}
          <div className="relative z-20 flex-1 flex flex-col px-2.5 pt-1 pb-1.5 overflow-hidden">
            {role === "client" ? (
              <ClientScreen step={step} />
            ) : (
              <WorkerScreen step={step} />
            )}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="relative z-40 pb-1 flex justify-center">
            <div className="w-11 h-0.5 bg-white/30 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// CLIENT SCREENS (1 to 5)
// -------------------------------------------------------------

function ClientScreen({ step }: { step: number }) {
  switch (step) {
    case 1:
      return (
        <div className="flex-1 flex flex-col justify-between">
          {/* App Brand Header */}
          <div className="flex items-center justify-center gap-1 pt-0.5">
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-[7px] font-black shadow-sm">
              C
            </div>
            <span className="text-[10px] font-black tracking-tight text-white">Chamba</span>
            <Sparkles className="w-2 h-2 text-amber-300" />
          </div>

          {/* Title */}
          <div className="text-center my-1">
            <h4 className="text-[11px] font-extrabold text-white leading-tight">¿Qué necesitas?</h4>
          </div>

          {/* Search Bar */}
          <div className="bg-[#171530] border border-purple-500/30 rounded-xl px-2 py-1 flex items-center justify-between text-[7px] text-slate-400 shadow-inner">
            <span className="truncate pr-1">Ej. plomería, limpieza...</span>
            <div className="w-3.5 h-3.5 rounded-lg bg-purple-600 flex items-center justify-center text-white shrink-0">
              <Search className="w-2 h-2" />
            </div>
          </div>

          {/* Map Preview Box */}
          <div className="relative my-1.5 h-24 rounded-xl overflow-hidden border border-purple-500/20 bg-[#121026] flex items-center justify-center">
            {/* Grid Pattern Street Simulation */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:10px_10px]" />
            <div className="absolute w-12 h-12 rounded-full border border-purple-500/30 bg-purple-600/10 animate-ping" />
            <div className="relative flex flex-col items-center z-10">
              <div className="w-5 h-5 rounded-full bg-purple-600 border border-white flex items-center justify-center shadow-lg shadow-purple-600/50">
                <MapPin className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="mt-1 text-[6px] font-bold bg-purple-950/80 px-1.5 py-0.5 rounded-full border border-purple-500/40 text-purple-200">
                Ubicación Actual
              </span>
            </div>
          </div>

          {/* Siguiente Button */}
          <div className="w-full py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[8px] font-bold flex items-center justify-center gap-1 shadow-md shadow-purple-600/30">
            <span>Siguiente</span>
            <ArrowRight className="w-2 h-2" />
          </div>

          {/* Bottom Tabs */}
          <MiniBottomNav activeIndex={0} />
        </div>
      );

    case 2:
      return (
        <div className="flex-1 flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between pt-0.5">
            <div className="flex items-center gap-1 text-[8px] font-bold text-slate-300">
              <ChevronLeft className="w-2.5 h-2.5 text-purple-400" />
              <span>Tu solicitud</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Status Capsule */}
          <div className="my-1 py-0.5 px-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 flex items-center justify-center gap-1 text-[7px] text-purple-200">
            <div className="w-1 h-1 rounded-full bg-amber-400 animate-ping" />
            <span className="font-semibold">Buscando trabajadores...</span>
          </div>

          {/* Worker Proposal Mini Cards */}
          <div className="space-y-1 my-0.5 flex-1 flex flex-col justify-center">
            {/* Card 1 */}
            <div className="bg-[#171530] border border-purple-500/25 rounded-lg p-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-[7px] font-bold text-white">
                  CM
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] font-bold text-white">Carlos M.</span>
                    <span className="text-[6px] text-amber-400 font-semibold">★ 4.8</span>
                  </div>
                  <span className="text-[6px] text-slate-400 block">Electricidad · 5a exp</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-extrabold text-white block">Bs 110</span>
                <span className="text-[6px] text-purple-300 bg-purple-900/60 px-1 py-0.5 rounded font-bold">Ver</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#171530] border border-white/5 rounded-lg p-1.5 flex items-center justify-between opacity-90">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-[7px] font-bold text-white">
                  LR
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] font-bold text-white">Luis R.</span>
                    <span className="text-[6px] text-amber-400 font-semibold">★ 4.7</span>
                  </div>
                  <span className="text-[6px] text-slate-400 block">Plomería · 3a exp</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-extrabold text-white block">Bs 110</span>
                <span className="text-[6px] text-purple-300 bg-purple-900/60 px-1 py-0.5 rounded font-bold">Ver</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#171530] border border-white/5 rounded-lg p-1.5 flex items-center justify-between opacity-80">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[7px] font-bold text-white">
                  JT
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] font-bold text-white">Javier T.</span>
                    <span className="text-[6px] text-amber-400 font-semibold">★ 4.8</span>
                  </div>
                  <span className="text-[6px] text-slate-400 block">Albañilería · 4a</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-extrabold text-white block">Bs 110</span>
                <span className="text-[6px] text-purple-300 bg-purple-900/60 px-1 py-0.5 rounded font-bold">Ver</span>
              </div>
            </div>
          </div>

          {/* Bottom Tabs */}
          <MiniBottomNav activeIndex={1} />
        </div>
      );

    case 3:
      return (
        <div className="flex-1 flex flex-col justify-between">
          {/* Worker Profile Header */}
          <div className="bg-[#171530] border border-purple-500/20 rounded-xl p-1.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-[8px] font-black text-white shadow-sm shrink-0">
              CM
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <span className="text-[8px] font-extrabold text-white truncate">Carlos M.</span>
                <span className="text-[6px] bg-emerald-500/20 text-emerald-400 px-1 rounded font-bold">✓</span>
              </div>
              <span className="text-[6px] text-slate-400 block">★ 4.9 (32) · 5 años exp.</span>
            </div>
          </div>

          {/* Modalidad Selection */}
          <div className="my-1">
            <span className="text-[7px] font-bold text-slate-300 block mb-1">Modalidad</span>
            <div className="grid grid-cols-3 gap-1">
              <div className="py-1 rounded-md bg-purple-600 text-white text-[6px] font-bold text-center shadow-sm">
                Por hora
              </div>
              <div className="py-1 rounded-md bg-[#171530] border border-white/5 text-slate-400 text-[6px] font-semibold text-center">
                Por trabajo
              </div>
              <div className="py-1 rounded-md bg-[#171530] border border-white/5 text-slate-400 text-[6px] font-semibold text-center">
                Por día
              </div>
            </div>
          </div>

          {/* Estimated Price Card */}
          <div className="bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border border-purple-500/30 rounded-xl p-2 text-center my-0.5">
            <span className="text-[6px] text-purple-300 uppercase tracking-wider block font-semibold">Precio estimado</span>
            <span className="text-[12px] font-black text-white block mt-0.5">Bs 110 <span className="text-[7px] font-normal text-slate-400">/ hora</span></span>
          </div>

          {/* Confirm Button */}
          <div className="w-full py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[8px] font-bold flex items-center justify-center gap-1 shadow-md shadow-purple-600/30">
            <span>Confirmar solicitud</span>
            <Check className="w-2.5 h-2.5" />
          </div>

          {/* Bottom Tabs */}
          <MiniBottomNav activeIndex={1} />
        </div>
      );

    case 4:
      return (
        <div className="flex-1 flex flex-col justify-between">
          {/* En Camino Top Capsule */}
          <div className="flex items-center justify-between bg-purple-950/80 border border-purple-500/30 rounded-lg px-2 py-0.5 text-[7px] text-white">
            <div className="flex items-center gap-1">
              <ChevronLeft className="w-2 h-2 text-purple-400" />
              <span className="font-bold">En camino</span>
            </div>
            <span className="text-[6px] font-bold text-emerald-400 bg-emerald-950/60 px-1 py-0.2 rounded">
              Llegará en 12 min
            </span>
          </div>

          {/* Live Map Route Simulator */}
          <div className="relative my-1 h-20 rounded-xl overflow-hidden border border-purple-500/20 bg-[#100e24]">
            {/* Street Grid */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:8px_8px]" />
            
            {/* Glowing Route SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60">
              <path
                d="M 20 45 Q 40 20 60 35 T 85 15"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]"
              />
              <circle cx="85" cy="15" r="3" fill="#ec4899" />
            </svg>

            {/* Moving Car / Worker Pin */}
            <div className="absolute left-[45%] top-[35%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-600 border border-white flex items-center justify-center shadow-lg shadow-purple-600/70">
              <Navigation className="w-2 h-2 text-white" />
            </div>
          </div>

          {/* Worker Info Bottom Sheet */}
          <div className="bg-[#171530] border border-purple-500/30 rounded-xl p-1.5 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center text-[6px] font-bold text-white">
                  CM
                </div>
                <div>
                  <span className="text-[7px] font-bold text-white block leading-tight">Carlos M.</span>
                  <span className="text-[5px] text-slate-400 block">Electricidad · 5a exp</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                  <Phone className="w-1.5 h-1.5" />
                </div>
                <div className="w-3.5 h-3.5 rounded-full bg-purple-600/40 border border-purple-400/40 flex items-center justify-center text-purple-200">
                  <MessageCircle className="w-1.5 h-1.5" />
                </div>
              </div>
            </div>

            <div className="w-full py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[6px] font-bold text-center">
              Ver detalles
            </div>
          </div>

          {/* Bottom Tabs */}
          <MiniBottomNav activeIndex={1} />
        </div>
      );

    case 5:
      return (
        <div className="flex-1 flex flex-col justify-between items-center text-center pt-1">
          {/* Big Checkmark Shield */}
          <div className="relative mt-1">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/50">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="absolute -inset-1 rounded-full border border-purple-400/30 animate-pulse" />
          </div>

          {/* Completed Text */}
          <div className="my-1">
            <h4 className="text-[10px] font-black text-white">¡Trabajo completado!</h4>
            <p className="text-[6px] text-slate-400 leading-tight px-1 mt-0.5">
              Gracias por confiar en Chamba. Tu opinión nos ayuda a crecer.
            </p>
          </div>

          {/* 5 Stars Rating */}
          <div className="flex items-center justify-center gap-0.5 text-amber-400 my-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-1 mt-1">
            <div className="w-full py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[7px] font-bold shadow-md shadow-purple-600/30 flex items-center justify-center gap-1">
              <span>Calificar trabajador</span>
              <Star className="w-2 h-2 fill-white" />
            </div>
            <div className="w-full py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-[6px] font-semibold flex items-center justify-center gap-1">
              <Share2 className="w-2 h-2 text-slate-400" />
              <span>Compartir</span>
            </div>
          </div>

          {/* Bottom Tabs */}
          <MiniBottomNav activeIndex={2} />
        </div>
      );

    default:
      return null;
  }
}

// -------------------------------------------------------------
// WORKER SCREENS (1 to 5)
// -------------------------------------------------------------

function WorkerScreen({ step }: { step: number }) {
  switch (step) {
    case 1:
      return (
        <div className="flex-1 flex flex-col justify-between">
          <div className="text-center pt-1">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mx-auto flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-purple-600/40">
              ID
            </div>
            <h4 className="text-[10px] font-extrabold text-white mt-1">Perfil Profesional</h4>
            <span className="text-[6px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.2 rounded-full inline-block mt-0.5">
              ✓ Documentos Validados
            </span>
          </div>

          <div className="bg-slate-900/90 border border-white/[0.08] rounded-xl p-1.5 space-y-1 my-1">
            <div className="flex justify-between text-[7px]">
              <span className="text-slate-400">Especialidad</span>
              <span className="font-bold text-white">Electricista Pro</span>
            </div>
            <div className="flex justify-between text-[7px]">
              <span className="text-slate-400">Zona de Cobertura</span>
              <span className="font-bold text-slate-300">Radio 10 km</span>
            </div>
            <div className="flex justify-between text-[7px]">
              <span className="text-slate-400">Estado</span>
              <span className="font-bold text-emerald-400">Disponible</span>
            </div>
          </div>

          <div className="w-full py-1.5 rounded-xl bg-purple-600 text-white text-[8px] font-bold text-center shadow-md">
            Comenzar a recibir chambas
          </div>
          <MiniBottomNav activeIndex={2} />
        </div>
      );

    case 2:
      return (
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[8px] font-bold text-slate-300 pt-0.5">
            <span>Solicitudes cercanas</span>
            <span className="text-purple-300 text-[7px]">3 activas</span>
          </div>

          <div className="relative my-1 h-20 rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c101c]">
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:8px_8px]" />
            <div className="absolute left-[30%] top-[40%] w-3.5 h-3.5 rounded-full bg-purple-600 border border-white flex items-center justify-center text-[6px] text-white font-bold">
              ⚡
            </div>
            <div className="absolute left-[70%] top-[30%] w-3.5 h-3.5 rounded-full bg-indigo-600 border border-white flex items-center justify-center text-[6px] text-white font-bold">
              ⚡
            </div>
          </div>

          <div className="bg-slate-900/90 border border-white/[0.08] rounded-lg p-1.5 flex items-center justify-between">
            <div>
              <span className="text-[7px] font-bold text-white block">Instalación eléctrica</span>
              <span className="text-[5px] text-slate-400 block">A 1.2 km de ti · Urgente</span>
            </div>
            <span className="text-[7px] font-bold text-purple-200 bg-purple-950/80 border border-purple-500/20 px-1.5 py-0.5 rounded">Cotizar</span>
          </div>

          <MiniBottomNav activeIndex={1} />
        </div>
      );

    case 3:
      return (
        <div className="flex-1 flex flex-col justify-between">
          <div className="text-[8px] font-bold text-white pt-0.5">
            <span>Enviar Propuesta</span>
          </div>

          <div className="bg-slate-900/90 border border-white/[0.08] rounded-xl p-1.5 space-y-1.5 my-1">
            <div>
              <span className="text-[6px] text-slate-400 block">Tu tarifa propuesta</span>
              <span className="text-[11px] font-black text-white">Bs 120</span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[6px] text-center font-bold">
              <span className="bg-purple-600 text-white py-0.5 rounded">Por trabajo</span>
              <span className="bg-white/5 text-slate-400 py-0.5 rounded">Por hora</span>
            </div>
          </div>

          <div className="w-full py-1.5 rounded-xl bg-purple-600 text-white text-[8px] font-bold text-center shadow-md">
            Enviar cotización al cliente
          </div>
          <MiniBottomNav activeIndex={1} />
        </div>
      );

    case 4:
      return (
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[7px] font-bold bg-slate-900/90 border border-white/[0.08] rounded-lg px-2 py-0.5">
            <span className="text-slate-300">Ruta hacia el cliente</span>
            <span className="text-emerald-400">8 min restantes</span>
          </div>

          <div className="relative my-1 h-20 rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c101c] flex items-center justify-center">
            <Navigation className="w-5 h-5 text-purple-300" />
          </div>

          <div className="w-full py-1.5 rounded-xl bg-emerald-600 text-white text-[7px] font-bold text-center">
            ✓ He llegado al lugar
          </div>
          <MiniBottomNav activeIndex={1} />
        </div>
      );

    case 5:
      return (
        <div className="flex-1 flex flex-col justify-between items-center text-center pt-1">
          <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[12px] font-bold shadow-md">
            💰
          </div>
          <h4 className="text-[10px] font-black text-white mt-1">¡Pago Liberado!</h4>
          <span className="text-[12px] font-black text-emerald-400 block">+ Bs 120</span>
          
          <div className="flex items-center justify-center gap-0.5 text-amber-400 my-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
            ))}
          </div>

          <div className="w-full py-1 rounded-xl bg-purple-600 text-white text-[7px] font-bold">
            Ver billetera
          </div>
          <MiniBottomNav activeIndex={2} />
        </div>
      );

    default:
      return null;
  }
}

// -------------------------------------------------------------
// MINI BOTTOM NAVIGATION BAR (Home, Solicitudes, Perfil)
// -------------------------------------------------------------
function MiniBottomNav({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="pt-1 mt-1 border-t border-white/5 flex items-center justify-around text-slate-500 text-[6px]">
      <div className={`flex flex-col items-center gap-0.2 ${activeIndex === 0 ? "text-purple-400 font-bold" : ""}`}>
        <Home className="w-2.5 h-2.5" />
        <span className="text-[5px]">Inicio</span>
      </div>
      <div className={`flex flex-col items-center gap-0.2 ${activeIndex === 1 ? "text-purple-400 font-bold" : ""}`}>
        <FileText className="w-2.5 h-2.5" />
        <span className="text-[5px]">Solicitudes</span>
      </div>
      <div className={`flex flex-col items-center gap-0.2 ${activeIndex === 2 ? "text-purple-400 font-bold" : ""}`}>
        <User className="w-2.5 h-2.5" />
        <span className="text-[5px]">Perfil</span>
      </div>
    </div>
  );
}
