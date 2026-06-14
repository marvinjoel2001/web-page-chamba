"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  DollarSign,
  MapPin,
  ShieldCheck,
  Compass,
  MessageSquare,
  Award,
  TrendingUp,
} from "lucide-react";

interface FeaturesProps {
  activeRole: "client" | "worker";
}

export default function Features({ activeRole }: FeaturesProps) {
  const clientFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-brand-orange" />,
      title: "Publica Gratis en Segundos",
      desc: "Describe tu problema, pon un presupuesto referencial y sube fotos desde la app. Sin comisiones de publicación.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-teal" />,
      title: "Negociación en Tiempo Real",
      desc: "Compara presupuestos de múltiples chamberos en minutos. Ofrece contraofertas y acuerden un precio justo.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-500" />,
      title: "Seguimiento en Vivo",
      desc: "Mira el trayecto de tu profesional en tiempo real en el mapa para saber exactamente a qué hora llegará a tu puerta.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Garantía de Confianza",
      desc: "Revisa perfiles, fotos de trabajos anteriores y valoraciones de otros clientes para contratar al profesional ideal.",
    },
  ];

  const workerFeatures = [
    {
      icon: <Compass className="w-6 h-6 text-brand-teal" />,
      title: "Radio de Trabajo Ajustable",
      desc: "Elige cuántos kilómetros a la redonda quieres cubrir (ej: 5km). Solo te notificamos solicitudes dentro de tu zona.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-orange" />,
      title: "Tú defines tus Tarifas",
      desc: "Envía ofertas personalizadas según la dificultad: cobra por trabajo completo (precio fijo), por hora o por día.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-amber-500" />,
      title: "Chat Directo con Clientes",
      desc: "Aclara dudas, pide más fotos y ponte de acuerdo en detalles y materiales directamente en el chat privado.",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: "Crea tu Reputación",
      desc: "Cada trabajo completado exitosamente y cada reseña de 5 estrellas aumentan tu visibilidad para atraer más clientes.",
    },
  ];

  const currentFeatures = activeRole === "client" ? clientFeatures : workerFeatures;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="como-funciona" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Todo lo que necesitas en una sola App
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Diseñada especialmente para hacer el trabajo local más ágil, seguro y transparente.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {currentFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-[#121824] hover:bg-[#161f30] border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all duration-300 shadow-md flex flex-col items-start"
              >
                {/* Glowing border hover effect */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-orange/20 transition-all duration-300 pointer-events-none" />
                
                {/* Icon wrapper */}
                <div className="p-3 bg-slate-900 rounded-2xl border border-white/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
