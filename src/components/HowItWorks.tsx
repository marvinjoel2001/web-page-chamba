"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Edit3, Users, MessageSquare, ShieldCheck, UserCheck, Compass, Send, CheckSquare } from "lucide-react";

interface HowItWorksProps {
  activeRole: "client" | "worker";
}

export default function HowItWorks({ activeRole }: HowItWorksProps) {
  const clientSteps = [
    {
      icon: <Edit3 className="w-6 h-6 text-brand-primary" />,
      title: "1. Describe lo que necesitas",
      desc: "Especifica la categoría, sube fotos y propone un presupuesto de referencia. Tardas menos de un minuto.",
    },
    {
      icon: <Users className="w-6 h-6 text-brand-highlight" />,
      title: "2. Recibe presupuestos en vivo",
      desc: "Chamberos calificados en tu área reciben la alerta geo y te envían sus cotizaciones en tiempo real.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-primary-light" />,
      title: "3. Negocia y confirma",
      desc: "Usa el chat integrado de la app para aclarar dudas, proponer contraofertas y aceptar al profesional perfecto.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "4. Completa con seguridad",
      desc: "El profesional realiza el trabajo, tú liberas el pago al estar satisfecho y dejas una valoración.",
    },
  ];

  const workerSteps = [
    {
      icon: <UserCheck className="w-6 h-6 text-brand-highlight" />,
      title: "1. Completa tu perfil",
      desc: "Regístrate con tus datos, selecciona tus habilidades técnicas e ingresa tus certificaciones u oficios.",
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-primary" />,
      title: "2. Configura tu zona",
      desc: "Determina tu radio de notificaciones (ej: 5km). Te llegarán alertas de trabajos solo en esa área.",
    },
    {
      icon: <Send className="w-6 h-6 text-brand-primary-light" />,
      title: "3. Envía tus ofertas",
      desc: "Revisa las solicitudes locales, calcula tus costos de mano de obra y envía tu oferta directamente al cliente.",
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-emerald-500" />,
      title: "4. Haz el trabajo y gana",
      desc: "Realiza el trabajo contratado, confirma tu llegada vía GPS, completa la tarea y recibe tu dinero directo.",
    },
  ];

  const steps = activeRole === "client" ? clientSteps : workerSteps;

  return (
    <section id="como-funciona" className="py-20 bg-[#090d16] relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-brand-highlight/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Cómo funciona Chamba?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Un proceso simplificado paso a paso para que alcances tus metas rápidamente.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          >
            {/* Visual connector bar for timeline (desktop only) */}
            <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-[1px] bg-slate-800 z-0" />

            {steps.map((st, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10 group">
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center mb-6 group-hover:border-brand-primary group-hover:scale-105 transition-all duration-300 shadow shadow-black">
                  {st.icon}
                </div>
                
                <h3 className="text-base font-bold text-white mb-2.5">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-[220px]">
                  {st.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
