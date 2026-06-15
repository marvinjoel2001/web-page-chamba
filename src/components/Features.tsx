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
import PhoneFrame from "./mockups/PhoneFrame";
import ChatMockup from "./mockups/ChatMockup";

interface FeaturesProps {
  activeRole: "client" | "worker";
}

export default function Features({ activeRole }: FeaturesProps) {
  const clientFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-brand-primary" />,
      title: "Publica Gratis en Segundos",
      desc: "Describe tu problema, pon un presupuesto referencial y sube fotos desde la app. Sin comisiones de publicación.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-highlight" />,
      title: "Negociación en Tiempo Real",
      desc: "Compara presupuestos de múltiples chamberos en minutos. Ofrece contraofertas y acuerden un precio justo.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-primary-light" />,
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
      icon: <Compass className="w-6 h-6 text-brand-highlight" />,
      title: "Radio de Trabajo Ajustable",
      desc: "Elige cuántos kilómetros a la redonda quieres cubrir (ej: 5km). Solo te notificamos solicitudes dentro de tu zona.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-primary" />,
      title: "Tú defines tus Tarifas",
      desc: "Envía ofertas personalizadas según la dificultad: cobra por trabajo completo (precio fijo), por hora o por día.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-primary-light" />,
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Todo lo que necesitas en una sola App
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Diseñada especialmente para hacer el trabajo local más ágil, seguro y transparente.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Features Image (Dynamic based on role) */}
            <motion.div 
              className={`w-full lg:w-1/2 flex justify-center ${activeRole === 'worker' ? 'lg:order-2' : ''}`}
              initial={{ opacity: 0, x: activeRole === 'worker' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <PhoneFrame className="scale-90 shadow-2xl">
                <ChatMockup />
              </PhoneFrame>
            </motion.div>

            {/* Features Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentFeatures.map((feat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative bg-[#121824] hover:bg-[#161f30] border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all duration-300 shadow-md flex flex-col items-start"
                >
                  {/* Glowing border hover effect */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-primary/20 transition-all duration-300 pointer-events-none" />
                  
                  {/* Icon wrapper */}
                  <div className="p-3 bg-slate-900 rounded-2xl border border-white/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
