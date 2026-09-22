"use client";

import { motion } from "framer-motion";
import { Building2, Users, ExternalLink, ShieldCheck, Zap } from "lucide-react";

export default function AgencyBanner() {
  return (
    <section id="agencias" className="py-16 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-8 sm:p-12 shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Info & Features */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Building2 className="w-4 h-4 text-purple-400" />
                <span>Chamba Agencias • Portal Corporativo</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                ¿Tienes una empresa o agencia de servicios?
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Centraliza y escala la operación de tu equipo. Chamba Agencias te permite administrar múltiples trabajadores, recibir solicitudes de clientes, despachar trabajos en tiempo real y supervisar cobros desde un panel web unificado.
              </p>

              {/* Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <Users className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Multi-trabajador</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <Zap className="w-4 h-4 text-brand-primary-light shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Asignación en vivo</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Liquidación clara</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Access Card */}
            <div className="lg:col-span-4 flex flex-col items-stretch justify-center">
              <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex flex-col items-center text-center shadow-lg backdrop-blur-sm">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-4 shadow-inner">
                  <Building2 className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  Acceso para Agencias
                </h3>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  Inicia sesión en la plataforma de agencias para coordinar a tu personal.
                </p>

                <a
                  href="https://agency-chamba.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-brand-primary to-brand-primary-light hover:brightness-110 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Ingresar a Chamba Agencias</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <span className="mt-3 text-[11px] text-slate-500">
                  agency-chamba.vercel.app
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
