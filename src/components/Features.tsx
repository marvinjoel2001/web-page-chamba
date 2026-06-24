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
import { useTranslations } from "next-intl";
import PhoneFrame from "./mockups/PhoneFrame";
import ChatMockup from "./mockups/ChatMockup";

interface FeaturesProps {
  activeRole: "client" | "worker";
}

export default function Features({ activeRole }: FeaturesProps) {
  const t = useTranslations("Features");

  const clientFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-brand-primary" />,
      title: t("client_feat_1_title"),
      desc: t("client_feat_1_desc"),
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-highlight" />,
      title: t("client_feat_2_title"),
      desc: t("client_feat_2_desc"),
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-primary-light" />,
      title: t("client_feat_3_title"),
      desc: t("client_feat_3_desc"),
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: t("client_feat_4_title"),
      desc: t("client_feat_4_desc"),
    },
  ];

  const workerFeatures = [
    {
      icon: <Compass className="w-6 h-6 text-brand-highlight" />,
      title: t("worker_feat_1_title"),
      desc: t("worker_feat_1_desc"),
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-primary" />,
      title: t("worker_feat_2_title"),
      desc: t("worker_feat_2_desc"),
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-primary-light" />,
      title: t("worker_feat_3_title"),
      desc: t("worker_feat_3_desc"),
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: t("worker_feat_4_title"),
      desc: t("worker_feat_4_desc"),
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
            {t("title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {t("subtitle")}
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
