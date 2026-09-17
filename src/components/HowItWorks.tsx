"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Edit3, 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  UserCheck, 
  Compass, 
  Send, 
  CheckSquare,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

interface HowItWorksProps {
  activeRole: "client" | "worker";
}

interface StepItem {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  image: string;
  alt: string;
  badgeColor: string;
  glowColor: string;
  accentBorder: string;
  highlight: string;
}

export default function HowItWorks({ activeRole }: HowItWorksProps) {
  const t = useTranslations("HowItWorks");

  const clientSteps: StepItem[] = [
    {
      stepNumber: "01",
      icon: <Edit3 className="w-5 h-5 text-brand-primary" />,
      title: t("client_step_1_title").replace(/^[0-9]+\.\s*/, ""),
      desc: t("client_step_1_desc"),
      image: "/images/how-it-works/step1_search.png",
      alt: "Paso 1: Describe lo que buscas en Chamba App",
      badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      glowColor: "from-purple-600/30 via-brand-primary/15 to-transparent",
      accentBorder: "group-hover:border-purple-500/50",
      highlight: "Describe o usa tu voz",
    },
    {
      stepNumber: "02",
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: t("client_step_2_title").replace(/^[0-9]+\.\s*/, ""),
      desc: t("client_step_2_desc"),
      image: "/images/how-it-works/step2_offers.png",
      alt: "Paso 2: Recibe ofertas y cotizaciones en tiempo real",
      badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      glowColor: "from-emerald-600/30 via-teal-500/15 to-transparent",
      accentBorder: "group-hover:border-emerald-500/50",
      highlight: "Ofertas en vivo",
    },
    {
      stepNumber: "03",
      icon: <MessageSquare className="w-5 h-5 text-brand-primary-light" />,
      title: t("client_step_3_title").replace(/^[0-9]+\.\s*/, ""),
      desc: t("client_step_3_desc"),
      image: "/images/how-it-works/step3_accepted.png",
      alt: "Paso 3: Confirma la oferta y trabajador",
      badgeColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
      glowColor: "from-indigo-600/30 via-brand-primary/15 to-transparent",
      accentBorder: "group-hover:border-indigo-500/50",
      highlight: "Confirmación instantánea",
    },
    {
      stepNumber: "04",
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: t("client_step_4_title").replace(/^[0-9]+\.\s*/, ""),
      desc: t("client_step_4_desc"),
      image: "/images/how-it-works/step4_completed.png",
      alt: "Paso 4: Finaliza y califica el trabajo",
      badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      glowColor: "from-amber-500/30 via-yellow-500/15 to-transparent",
      accentBorder: "group-hover:border-amber-500/50",
      highlight: "Califica el servicio",
    },
  ];

  const workerSteps: StepItem[] = [
    {
      stepNumber: "01",
      icon: <UserCheck className="w-5 h-5 text-brand-highlight" />,
      title: t("worker_step_1_title").replace(/^[0-9]+\.\s*/, ""),
      desc: t("worker_step_1_desc"),
      image: "/images/how-it-works/step1_search.png",
      alt: "Paso 1: Completa tu perfil de chambero",
      badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      glowColor: "from-purple-600/30 via-brand-primary/15 to-transparent",
      accentBorder: "group-hover:border-purple-500/50",
      highlight: "Perfil verificado",
    },
    {
      stepNumber: "02",
      icon: <Compass className="w-5 h-5 text-brand-primary" />,
      title: t("worker_step_2_title").replace(/^[0-9]+\.\s*/, ""),
      desc: t("worker_step_2_desc"),
      image: "/images/how-it-works/step2_offers.png",
      alt: "Paso 2: Explora solicitudes de trabajo",
      badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
      glowColor: "from-blue-600/30 via-brand-primary/15 to-transparent",
      accentBorder: "group-hover:border-blue-500/50",
      highlight: "Solicitudes cercanas",
    },
    {
      stepNumber: "03",
      icon: <Send className="w-5 h-5 text-brand-primary-light" />,
      title: t("worker_step_3_title").replace(/^[0-9]+\.\s*/, ""),
      desc: t("worker_step_3_desc"),
      image: "/images/how-it-works/step3_accepted.png",
      alt: "Paso 3: Envía ofertas y cotizaciones",
      badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      glowColor: "from-emerald-600/30 via-teal-500/15 to-transparent",
      accentBorder: "group-hover:border-emerald-500/50",
      highlight: "Presupuestos propios",
    },
    {
      stepNumber: "04",
      icon: <CheckSquare className="w-5 h-5 text-amber-400" />,
      title: t("worker_step_4_title").replace(/^[0-9]+\.\s*/, ""),
      desc: t("worker_step_4_desc"),
      image: "/images/how-it-works/step4_completed.png",
      alt: "Paso 4: Trabaja y cobra directo",
      badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      glowColor: "from-amber-500/30 via-yellow-500/15 to-transparent",
      accentBorder: "group-hover:border-amber-500/50",
      highlight: "Cobra directo",
    },
  ];

  const steps = activeRole === "client" ? clientSteps : workerSteps;

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    },
  };

  return (
    <section id="como-funciona" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute left-1/4 top-10 w-96 h-96 rounded-full bg-brand-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary-light text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paso a Paso</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Steps Grid with Real Device Screenshots */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {steps.map((st, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="flex flex-col relative z-10 group"
              >
                {/* Showcase Card */}
                <div className="flex flex-col h-full bg-gradient-to-b from-slate-900/90 via-[#0e1424]/90 to-slate-950/95 border border-slate-800/80 rounded-3xl p-5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/50 hover:shadow-2xl hover:shadow-brand-primary/15 overflow-hidden">
                  
                  {/* Step Header Badge & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full border ${st.badgeColor} transition-colors duration-300`}>
                      Paso {st.stepNumber}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-800/60 border border-white/5 flex items-center justify-center text-slate-300 group-hover:scale-110 group-hover:text-white transition-all duration-300 shadow-sm">
                      {st.icon}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary-light transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 min-h-[42px]">
                    {st.desc}
                  </p>

                  {/* Device Screen Presentation */}
                  <div className="mt-auto relative w-full pt-2 flex justify-center items-end overflow-hidden">
                    {/* Ambient Glow */}
                    <div className={`absolute inset-x-4 bottom-0 h-44 rounded-full bg-gradient-to-t ${st.glowColor} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Smartphone Mockup */}
                    <div className="relative w-full max-w-[210px] sm:max-w-[230px] transition-transform duration-500 ease-out group-hover:scale-105">
                      <img
                        src={st.image}
                        alt={st.alt}
                        className="w-full h-auto max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Bottom Highlight Tag */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                    <span>{st.highlight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
