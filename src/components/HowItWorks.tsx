"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Edit3, Users, MessageSquare, ShieldCheck, UserCheck, Compass, Send, CheckSquare } from "lucide-react";
import { useTranslations } from "next-intl";

interface HowItWorksProps {
  activeRole: "client" | "worker";
}

export default function HowItWorks({ activeRole }: HowItWorksProps) {
  const t = useTranslations("HowItWorks");

  const clientSteps = [
    {
      icon: <Edit3 className="w-6 h-6 text-brand-primary" />,
      title: t("client_step_1_title"),
      desc: t("client_step_1_desc"),
    },
    {
      icon: <Users className="w-6 h-6 text-brand-highlight" />,
      title: t("client_step_2_title"),
      desc: t("client_step_2_desc"),
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-primary-light" />,
      title: t("client_step_3_title"),
      desc: t("client_step_3_desc"),
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: t("client_step_4_title"),
      desc: t("client_step_4_desc"),
    },
  ];

  const workerSteps = [
    {
      icon: <UserCheck className="w-6 h-6 text-brand-highlight" />,
      title: t("worker_step_1_title"),
      desc: t("worker_step_1_desc"),
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-primary" />,
      title: t("worker_step_2_title"),
      desc: t("worker_step_2_desc"),
    },
    {
      icon: <Send className="w-6 h-6 text-brand-primary-light" />,
      title: t("worker_step_3_title"),
      desc: t("worker_step_3_desc"),
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-emerald-500" />,
      title: t("worker_step_4_title"),
      desc: t("worker_step_4_desc"),
    },
  ];

  const steps = activeRole === "client" ? clientSteps : workerSteps;

  return (
    <section id="como-funciona" className="py-20 bg-[#090d16] relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-brand-highlight/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {t("subtitle")}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
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
