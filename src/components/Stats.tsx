"use client";

import { motion } from "framer-motion";
import { Star, ShieldAlert, BadgeDollarSign, ShieldCheck } from "lucide-react";

export default function Stats() {
  const statsList = [
    {
      value: "+15,000",
      label: "Trabajos Realizados",
      desc: "Servicios domésticos y reparaciones ejecutados exitosamente en la plataforma.",
      icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
    },
    {
      value: "4.9★",
      label: "Valoración Promedio",
      desc: "Excelente reputación construida gracias al compromiso y calidad de nuestros chamberos.",
      icon: <Star className="w-5 h-5 text-brand-orange fill-brand-orange" />,
    },
    {
      value: "< 5 min",
      label: "Tiempo de Respuesta",
      desc: "Nuestra red de geolocalización asegura ofertas instantáneas de técnicos cercanos.",
      icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
    },
    {
      value: "$0.00",
      label: "Comisión de Publicación",
      desc: "Publica solicitudes de forma totalmente gratuita y paga directo al profesional acordado.",
      icon: <BadgeDollarSign className="w-5 h-5 text-emerald-500" />,
    },
  ];

  return (
    <section id="estadisticas" className="py-16 bg-slate-950/60 border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-orange/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsList.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-[#121824]/40 border border-white/5 rounded-3xl"
            >
              <div className="p-3 bg-slate-900 border border-white/5 rounded-2xl mb-4 text-white">
                {stat.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-300 mt-2">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-2 leading-relaxed max-w-[200px]">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
