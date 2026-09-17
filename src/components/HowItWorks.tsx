"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Edit3, 
  Users, 
  Calendar, 
  MapPin, 
  Star,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ChevronRight,
  UserCheck,
  Compass,
  Send,
  Navigation,
  Award
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import ModernPhoneMockup from "./mockups/ModernPhoneMockup";

interface HowItWorksProps {
  activeRole: "client" | "worker";
}

interface StepItem {
  stepIndex: 1 | 2 | 3 | 4 | 5;
  stepNumber: string;
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
  badgeKey?: string;
  badgeIcon?: React.ReactNode;
}

export default function HowItWorks({ activeRole }: HowItWorksProps) {
  const t = useTranslations("HowItWorks");

  const clientSteps: StepItem[] = [
    {
      stepIndex: 1,
      stepNumber: "01",
      icon: <Edit3 className="w-4 h-4 text-purple-300" />,
      titleKey: "client_step_1_title",
      descKey: "client_step_1_desc",
      badgeKey: "client_step_1_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      stepIndex: 2,
      stepNumber: "02",
      icon: <Users className="w-4 h-4 text-purple-300" />,
      titleKey: "client_step_2_title",
      descKey: "client_step_2_desc",
      badgeKey: "client_step_2_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      stepIndex: 3,
      stepNumber: "03",
      icon: <Calendar className="w-4 h-4 text-purple-300" />,
      titleKey: "client_step_3_title",
      descKey: "client_step_3_desc",
      badgeKey: "client_step_3_badge",
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      stepIndex: 4,
      stepNumber: "04",
      icon: <MapPin className="w-4 h-4 text-purple-300" />,
      titleKey: "client_step_4_title",
      descKey: "client_step_4_desc",
      badgeKey: "client_step_4_badge",
      badgeIcon: <MapPin className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      stepIndex: 5,
      stepNumber: "05",
      icon: <Star className="w-4 h-4 text-purple-300" />,
      titleKey: "client_step_5_title",
      descKey: "client_step_5_desc",
      badgeKey: "client_step_5_badge",
      badgeIcon: <Star className="w-3.5 h-3.5 text-purple-400" />,
    },
  ];

  const workerSteps: StepItem[] = [
    {
      stepIndex: 1,
      stepNumber: "01",
      icon: <UserCheck className="w-4 h-4 text-purple-300" />,
      titleKey: "worker_step_1_title",
      descKey: "worker_step_1_desc",
      badgeKey: "worker_step_1_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      stepIndex: 2,
      stepNumber: "02",
      icon: <Compass className="w-4 h-4 text-purple-300" />,
      titleKey: "worker_step_2_title",
      descKey: "worker_step_2_desc",
      badgeKey: "worker_step_2_badge",
      badgeIcon: <MapPin className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      stepIndex: 3,
      stepNumber: "03",
      icon: <Send className="w-4 h-4 text-purple-300" />,
      titleKey: "worker_step_3_title",
      descKey: "worker_step_3_desc",
      badgeKey: "worker_step_3_badge",
      badgeIcon: <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      stepIndex: 4,
      stepNumber: "04",
      icon: <Navigation className="w-4 h-4 text-purple-300" />,
      titleKey: "worker_step_4_title",
      descKey: "worker_step_4_desc",
      badgeKey: "worker_step_4_badge",
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      stepIndex: 5,
      stepNumber: "05",
      icon: <Award className="w-4 h-4 text-purple-300" />,
      titleKey: "worker_step_5_title",
      descKey: "worker_step_5_desc",
      badgeKey: "worker_step_5_badge",
      badgeIcon: <Star className="w-3.5 h-3.5 text-purple-400" />,
    },
  ];

  const steps = activeRole === "client" ? clientSteps : workerSteps;

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section id="como-funciona" className="py-24 bg-[#0a091b] relative overflow-hidden">
      {/* Background Ambient Radial Glows */}
      <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-purple-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute left-1/10 top-1/3 w-80 h-80 rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute right-1/10 bottom-1/4 w-80 h-80 rounded-full bg-purple-700/10 blur-[130px] pointer-events-none" />

      {/* Subtle Star Dust Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating 3D Logo Cube (Left Top Decorative Element) */}
        <div className="hidden xl:flex absolute -left-4 top-2 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-800 border border-purple-400/40 shadow-[0_20px_45px_rgba(124,58,237,0.35)] items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-500 z-20">
          <img 
            src="/images/icon.png" 
            alt="Chamba Logo 3D" 
            className="w-12 h-12 object-contain drop-shadow-lg" 
          />
        </div>

        {/* Floating Handwritten Annotation Note (Right Top Decorative Element) */}
        <div className="hidden lg:block absolute right-4 xl:right-8 top-0 text-right select-none pointer-events-none z-20">
          <span className="text-purple-300 font-serif italic text-sm xl:text-base leading-tight block transform -rotate-6 tracking-wide drop-shadow-sm">
            {t("note")}
          </span>
          <svg 
            className="w-10 h-8 text-purple-400/80 ml-auto transform -rotate-12 mt-1" 
            fill="none" 
            viewBox="0 0 40 30" 
            stroke="currentColor"
          >
            <path 
              d="M 32 4 C 20 2, 8 12, 10 24 M 10 24 L 5 18 M 10 24 L 16 22" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{t("tag")}</span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            ¿Cómo funciona{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent relative inline-block">
              Chamba?
              <span className="absolute -top-1 -right-4 text-amber-300 text-base font-normal select-none">✨</span>
            </span>
          </h2>
          
          {/* Section Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* 5-Step Showcase Grid with Connecting Arrows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3.5 xl:gap-4 items-stretch relative"
          >
            {steps.map((st, index) => {
              const isLast = index === steps.length - 1;

              return (
                <div key={st.stepIndex} className="relative flex flex-col">
                  {/* Step Card Container */}
                  <motion.div
                    variants={itemVariants}
                    className="flex-1 flex flex-col justify-between bg-gradient-to-b from-[#14122d]/90 via-[#100e26]/95 to-[#0c0a1f]/95 border border-purple-500/20 rounded-[28px] p-4 xl:p-4.5 shadow-2xl hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.18)] transition-all duration-300 group"
                  >
                    <div>
                      {/* Top Row: Number Box (Left) & Circular Icon (Right) */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="w-8 h-7 rounded-xl bg-white/5 border border-white/10 text-white font-extrabold text-xs flex items-center justify-center tracking-wider shadow-inner">
                          {st.stepNumber}
                        </span>

                        <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all duration-300 shadow-sm">
                          {st.icon}
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-[15px] font-bold text-white mb-1.5 leading-snug group-hover:text-purple-200 transition-colors">
                        {t(st.titleKey as any)}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs text-slate-400 leading-relaxed mb-4 min-h-[48px]">
                        {t(st.descKey as any)}
                      </p>
                    </div>

                    {/* Smartphone Mockup */}
                    <div className="my-auto py-2 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                      <ModernPhoneMockup 
                        step={st.stepIndex} 
                        role={activeRole} 
                      />
                    </div>

                    {/* Bottom Guarantee Badge under Card */}
                    {st.badgeKey && (
                      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-center gap-1.5 text-[10.5px] font-medium text-purple-300/85 text-center leading-tight">
                        {st.badgeIcon}
                        <span>{t(st.badgeKey as any)}</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Horizontal Flow Arrow between cards (Desktop Only) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-2.5 xl:-right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-5 h-5 rounded-full bg-purple-950/90 border border-purple-500/30 flex items-center justify-center text-purple-300/70 shadow-sm">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Feature Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-950/70 via-indigo-950/70 to-purple-950/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold shadow-lg shadow-purple-950/50">
            <Zap className="w-4 h-4 text-purple-400 fill-purple-400 animate-pulse" />
            <span>{t("bottom_pill")}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
