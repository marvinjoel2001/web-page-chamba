"use client";

import { motion } from "framer-motion";
import { Building2, Users, ExternalLink, ShieldCheck, Zap } from "lucide-react";

export default function AgencyBanner() {
  return (
    <section id="agencias" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-white/90 bg-white/85 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(139,92,246,0.1)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Info & Features */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                ¿Tienes una empresa o agencia de servicios?
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Centraliza y escala la operación de tu equipo. Chamba Agencias te permite administrar múltiples trabajadores, recibir solicitudes de clientes, despachar trabajos en tiempo real y supervisar cobros desde un panel web unificado.
              </p>

              {/* Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl backdrop-blur-md bg-purple-50/80 border border-purple-100">
                  <Users className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">Multi-trabajador</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl backdrop-blur-md bg-purple-50/80 border border-purple-100">
                  <Zap className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">Asignación en vivo</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl backdrop-blur-md bg-emerald-50/80 border border-emerald-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">Liquidación clara</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Access Card */}
            <div className="lg:col-span-4 flex flex-col items-stretch justify-center">
              <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/90 flex flex-col items-center text-center shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 border border-purple-200/60 flex items-center justify-center text-purple-600 mb-4 shadow-sm">
                  <Building2 className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Acceso para Agencias
                </h3>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  Inicia sesión en la plataforma de agencias para coordinar a tu personal.
                </p>

                <a
                  href="https://agency-chamba.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>Ingresar a Chamba Agencias</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <span className="mt-3 text-xs text-slate-500 font-medium">
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
