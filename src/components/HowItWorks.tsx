"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Edit3, 
  Users, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  ChevronRight, 
  UserCheck, 
  Compass, 
  Send, 
  Award,
  Radio,
  DollarSign
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import ModernPhoneMockup from "@/components/mockups/ModernPhoneMockup";
import AppPhoneMockup from "@/components/mockups/AppPhoneMockup";

interface HowItWorksProps {
  activeRole: "client" | "worker";
}

interface StepItem {
  stepNumber: string;
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
  badgeKey?: string;
  badgeIcon?: React.ReactNode;
  image?: string;
  mockupStep?: 1 | 2 | 3 | 4 | 5;
}

export default function HowItWorks({ activeRole }: HowItWorksProps) {
  const t = useTranslations("HowItWorks");

  const clientSteps: StepItem[] = [
    {
      stepNumber: "01",
      icon: <Edit3 className="w-4 h-4 text-purple-600" />,
      titleKey: "client_step_1_title",
      descKey: "client_step_1_desc",
      badgeKey: "client_step_1_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />,
      image: "/images/app-screens/cliente_01_inicio.png",
    },
    {
      stepNumber: "02",
      icon: <Users className="w-4 h-4 text-purple-600" />,
      titleKey: "client_step_2_title",
      descKey: "client_step_2_desc",
      badgeKey: "client_step_2_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />,
      image: "/images/how-it-works/step2_offers.png",
    },
    {
      stepNumber: "03",
      icon: <CheckCircle2 className="w-4 h-4 text-purple-600" />,
      titleKey: "client_step_3_title",
      descKey: "client_step_3_desc",
      badgeKey: "client_step_3_badge",
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />,
      image: "/images/app-screens/cliente_90_chat-historial.png",
    },
    {
      stepNumber: "04",
      icon: <Star className="w-4 h-4 text-purple-600" />,
      titleKey: "client_step_5_title",
      descKey: "client_step_5_desc",
      badgeKey: "client_step_5_badge",
      badgeIcon: <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />,
      image: "/images/app-screens/worker_90_detalle-trabajo-completado.png",
    },
  ];

  const workerSteps: StepItem[] = [
    {
      stepNumber: "01",
      icon: <Radio className="w-4 h-4 text-emerald-600 animate-pulse" />,
      titleKey: "worker_step_1_title",
      descKey: "worker_step_1_desc",
      badgeKey: "worker_step_1_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />,
      image: "/images/app-screens/worker_01_inicio.png",
    },
    {
      stepNumber: "02",
      icon: <Compass className="w-4 h-4 text-purple-600" />,
      titleKey: "worker_step_2_title",
      descKey: "worker_step_2_desc",
      badgeKey: "worker_step_2_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />,
      mockupStep: 2,
    },
    {
      stepNumber: "03",
      icon: <Send className="w-4 h-4 text-purple-600" />,
      titleKey: "worker_step_3_title",
      descKey: "worker_step_3_desc",
      badgeKey: "worker_step_3_badge",
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />,
      image: "/images/app-screens/cliente_90_chat-historial.png",
    },
    {
      stepNumber: "04",
      icon: <DollarSign className="w-4 h-4 text-emerald-600" />,
      titleKey: "worker_step_5_title",
      descKey: "worker_step_5_desc",
      badgeKey: "worker_step_5_badge",
      badgeIcon: <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />,
      image: "/images/app-screens/worker_02_billetera.png",
    },
  ];

  const steps = activeRole === "client" ? clientSteps : workerSteps;

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.35, ease: "easeOut" } 
    },
  };

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50">
      {/* Soft Ambient Glows behind HowItWorks */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-200/25 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-100/30 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full backdrop-blur-md bg-white/80 border border-purple-200/80 text-purple-700 text-xs font-bold mb-3 shadow-xs">
            <span>{t("tag")}</span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {activeRole === "client" ? "¿Cómo funciona " : "¿Cómo trabajar con "}
            <span className="text-purple-600 font-black">
              Chamba?
            </span>
          </h2>
          
          {/* Section Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {activeRole === "client" 
              ? t("subtitle")
              : "Si estás libre o buscando trabajo: te habilitas como Disponible, recibes avisos de clientes cercanos, aceptas y cobras directo."}
          </p>
        </motion.div>

        {/* 4-Step Showcase Grid with Glassmorphic Cards & Real App Screens */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative"
          >
            {steps.map((st, index) => {
              const isLast = index === steps.length - 1;

              return (
                <div key={st.stepNumber} className="relative flex flex-col">
                  {/* Step Card Container in Light Glassmorphism */}
                  <motion.div
                    variants={itemVariants}
                    className="flex-1 flex flex-col justify-between backdrop-blur-xl bg-white/85 border border-white/90 rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(139,92,246,0.06)] hover:border-purple-300 hover:shadow-[0_16px_40px_rgba(139,92,246,0.12)] transition-all duration-300 group overflow-hidden"
                  >
                    <div>
                      {/* Top Row: Number Box (Left) & Icon (Right) */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-lg backdrop-blur-md bg-slate-100/90 border border-slate-200 text-slate-800 font-black text-xs tracking-wider">
                          {st.stepNumber}
                        </span>

                        <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-100 group-hover:scale-105 transition-all duration-200">
                          {st.icon}
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-purple-600 transition-colors">
                        {t(st.titleKey as any)}
                      </h3>

                      {/* Step Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 min-h-[44px]">
                        {t(st.descKey as any)}
                      </p>
                    </div>

                    {/* Smartphone Display with Physical Grounding & Gravity Base */}
                    <div className="my-auto pt-2 pb-3 flex flex-col items-center justify-center">
                      <div className="relative w-full max-w-[200px] sm:max-w-[215px] transition-transform duration-300 ease-out group-hover:-translate-y-2">
                        {st.image ? (
                          <AppPhoneMockup
                            imageSrc={st.image}
                            alt={t(st.titleKey as any)}
                          />
                        ) : (
                          <ModernPhoneMockup step={st.mockupStep || 1} role="worker" />
                        )}
                      </div>
                      
                      {/* Physical Contact Shadow */}
                      <div className="w-[66%] h-3 bg-slate-400/25 blur-[5px] rounded-full -mt-2 transition-all duration-300 ease-out group-hover:scale-90 group-hover:opacity-40 group-hover:blur-md" />
                    </div>

                    {/* Bottom Guarantee Badge under Card */}
                    {st.badgeKey && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors text-center leading-tight">
                        {st.badgeIcon}
                        <span className="text-slate-700 font-semibold">{t(st.badgeKey as any)}</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Horizontal Flow Arrow between cards (Desktop Only) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-6 h-6 rounded-full backdrop-blur-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
