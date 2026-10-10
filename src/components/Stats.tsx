"use client";

import { motion } from "framer-motion";
import { Star, ShieldAlert, BadgeDollarSign, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("Stats");
  const statsList = [
    {
      value: "+15,000",
      label: t("stat_1_label"),
      desc: t("stat_1_desc"),
      icon: <ShieldCheck className="w-5 h-5 text-brand-highlight" />,
    },
    {
      value: "4.9★",
      label: t("stat_2_label"),
      desc: t("stat_2_desc"),
      icon: <Star className="w-5 h-5 text-brand-primary fill-brand-primary" />,
    },
    {
      value: "< 5 min",
      label: t("stat_3_label"),
      desc: t("stat_3_desc"),
      icon: <ShieldAlert className="w-5 h-5 text-brand-primary-light" />,
    },
    {
      value: "$0.00",
      label: t("stat_4_label"),
      desc: t("stat_4_desc"),
      icon: <BadgeDollarSign className="w-5 h-5 text-emerald-500" />,
    },
  ];

  return (
    <section id="estadisticas" className="py-16 border-t border-b border-white/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsList.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 backdrop-blur-lg bg-white/72 border border-white/70 rounded-3xl shadow-[0_8px_30px_rgba(139,92,246,0.05)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.12)] hover:border-purple-300 transition-all"
            >
              <div className="p-3 bg-purple-50 border border-purple-100 rounded-2xl mb-4 text-purple-600">
                {stat.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-700 mt-2">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-2 leading-relaxed max-w-[200px]">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
