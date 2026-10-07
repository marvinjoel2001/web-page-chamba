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
  Award
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import ModernPhoneMockup from "@/components/mockups/ModernPhoneMockup";

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
      icon: <Edit3 className="w-4 h-4 text-white" />,
      titleKey: "client_step_1_title",
      descKey: "client_step_1_desc",
      badgeKey: "client_step_1_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-white" />,
      image: "/images/how-it-works/step1_search.png",
    },
    {
      stepNumber: "02",
      icon: <Users className="w-4 h-4 text-white" />,
      titleKey: "client_step_2_title",
      descKey: "client_step_2_desc",
      badgeKey: "client_step_2_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-white" />,
      image: "/images/how-it-works/step2_offers.png",
    },
    {
      stepNumber: "03",
      icon: <CheckCircle2 className="w-4 h-4 text-white" />,
      titleKey: "client_step_3_title",
      descKey: "client_step_3_desc",
      badgeKey: "client_step_3_badge",
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-white" />,
      image: "/images/how-it-works/step3_accepted.png",
    },
    {
      stepNumber: "04",
      icon: <Star className="w-4 h-4 text-white" />,
      titleKey: "client_step_5_title",
      descKey: "client_step_5_desc",
      badgeKey: "client_step_5_badge",
      badgeIcon: <Star className="w-3.5 h-3.5 text-white fill-white" />,
      image: "/images/how-it-works/step4_completed.png",
    },
  ];

  const workerSteps: StepItem[] = [
    {
      stepNumber: "01",
      icon: <UserCheck className="w-4 h-4 text-white" />,
      titleKey: "worker_step_1_title",
      descKey: "worker_step_1_desc",
      badgeKey: "worker_step_1_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-white" />,
      mockupStep: 1,
    },
    {
      stepNumber: "02",
      icon: <Compass className="w-4 h-4 text-white" />,
      titleKey: "worker_step_2_title",
      descKey: "worker_step_2_desc",
      badgeKey: "worker_step_2_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-white" />,
      mockupStep: 2,
    },
    {
      stepNumber: "03",
      icon: <Send className="w-4 h-4 text-white" />,
      titleKey: "worker_step_3_title",
      descKey: "worker_step_3_desc",
      badgeKey: "worker_step_3_badge",
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-white" />,
      mockupStep: 3,
    },
    {
      stepNumber: "04",
      icon: <Award className="w-4 h-4 text-white" />,
      titleKey: "worker_step_5_title",
      descKey: "worker_step_5_desc",
      badgeKey: "worker_step_5_badge",
      badgeIcon: <Star className="w-3.5 h-3.5 text-white fill-white" />,
      mockupStep: 5,
    },
  ];

  const steps = activeRole === "client" ? clientSteps : workerSteps;

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
  };

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {activeRole === "client" ? "¿Cómo funciona " : "¿Cómo trabajar con "}
            <span className="text-purple-500 font-black">
              Chamba?
            </span>
          </h2>
          
          {/* Section Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {activeRole === "client" 
              ? t("subtitle")
              : "Un proceso transparente y directo para generar ingresos con tus habilidades, sin intermediarios."}
          </p>
        </motion.div>

        {/* 4-Step Showcase Grid with Grounded Phone Stages */}
        <AnimatePresence>
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
                  {/* Step Card Container */}
                  <motion.div
                    variants={itemVariants}
                    className="flex-1 flex flex-col justify-between bg-slate-900/40 backdrop-blur-sm border border-white/[0.08] rounded-3xl p-5 sm:p-6 shadow-xl shadow-black/20 hover:border-white/20 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group overflow-hidden"
                  >
                    <div>
                      {/* Top Row: Number Box (Left) & Icon (Right) */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-white font-bold text-xs tracking-wider">
                          {st.stepNumber}
                        </span>

                        <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center text-white group-hover:border-purple-500/50 transition-colors duration-200">
                          {st.icon}
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors">
                        {t(st.titleKey as any)}
                      </h3>

                      {/* Step Description */}
                      <p className="text-sm text-white leading-relaxed mb-4 min-h-[44px]">
                        {t(st.descKey as any)}
                      </p>
                    </div>

                    {/* Smartphone Display with Physical Grounding & Gravity Base */}
                    <div className="my-auto pt-2 pb-3 flex flex-col items-center justify-center">
                      <div className="relative w-full max-w-[200px] sm:max-w-[215px] transition-transform duration-300 ease-out group-hover:-translate-y-2">
                        {st.image ? (
                          <img
                            src={st.image}
                            alt={t(st.titleKey as any)}
                            className="relative z-10 w-full h-auto max-h-[390px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                            loading="lazy"
                          />
                        ) : (
                          <ModernPhoneMockup step={st.mockupStep || 1} role="worker" />
                        )}
                      </div>
                      
                      {/* Physical Contact Shadow (Gravedad) */}
                      <div className="w-[66%] h-3 bg-black/80 blur-[5px] rounded-full -mt-2 transition-all duration-300 ease-out group-hover:scale-90 group-hover:opacity-40 group-hover:blur-md" />
                    </div>

                    {/* Bottom Guarantee Badge under Card */}
                    {st.badgeKey && (
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-xs font-semibold text-white transition-colors text-center leading-tight">
                        {st.badgeIcon}
                        <span className="text-white font-semibold">{t(st.badgeKey as any)}</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Horizontal Flow Arrow between cards (Desktop Only) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-6 h-6 rounded-full bg-slate-900/90 border border-white/10 flex items-center justify-center text-slate-400 shadow-md">
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
