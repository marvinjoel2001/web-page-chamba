"use client";

import { motion } from "framer-motion";
import { Users, MapPin, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

interface FeaturesProps {
  activeRole?: "client" | "worker";
}

export default function Features({ activeRole = "client" }: FeaturesProps) {
  const t = useTranslations("Features");

  const cards = [
    {
      id: "card_1",
      icon: <Users className="w-4 h-4 text-purple-300" />,
      title: t("card_1_title"),
      desc: t("card_1_desc"),
    },
    {
      id: "card_2",
      icon: <MapPin className="w-4 h-4 text-purple-300" />,
      title: t("card_2_title"),
      desc: t("card_2_desc"),
    },
    {
      id: "card_3",
      icon: <MessageSquare className="w-4 h-4 text-purple-300" />,
      title: t("card_3_title"),
      desc: t("card_3_desc"),
    },
    {
      id: "card_4",
      icon: <ShieldCheck className="w-4 h-4 text-purple-300" />,
      title: t("card_4_title"),
      desc: t("card_4_desc"),
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full bg-purple-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-72 h-72 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-10 top-10 w-72 h-72 rounded-full bg-purple-700/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t("title_part1")}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent relative inline-block">
              {t("title_part2")}
              <span className="absolute -top-1 -right-4 text-amber-300 text-sm sm:text-base font-normal select-none">✨</span>
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Main Showcase: Workers in Center with 4 Floating Cards */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-8">
          
          {/* Left Column Cards (Cards 1 & 2) */}
          <div className="w-full lg:w-[280px] xl:w-[320px] flex flex-col gap-5 sm:gap-6 z-20 order-2 lg:order-1">
            {/* Card 1: Encuentra a la persona indicada */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-[#12102b]/85 border border-purple-500/20 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-3 group-hover:scale-110 transition-transform">
                  {cards[0].icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors">
                  {cards[0].title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cards[0].desc}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-4 h-4 text-purple-400/70 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>

            {/* Card 2: Cerca de ti */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-[#12102b]/85 border border-purple-500/20 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-3 group-hover:scale-110 transition-transform">
                  {cards[1].icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors">
                  {cards[1].title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cards[1].desc}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-4 h-4 text-purple-400/70 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          </div>

          {/* Center Column: Real Workers Photo Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:flex-1 max-w-[620px] xl:max-w-[680px] flex justify-center items-center relative z-10 order-1 lg:order-2"
          >
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/25 via-indigo-600/15 to-transparent blur-[80px] rounded-full pointer-events-none" />

            <div className="relative w-full rounded-2xl overflow-hidden drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
              <img
                src="/images/chamba_workers_feathered.png"
                alt="Chamba Profesionales Reales"
                className="w-full h-auto object-contain max-h-[460px] mx-auto select-none"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column Cards (Cards 3 & 4) */}
          <div className="w-full lg:w-[280px] xl:w-[320px] flex flex-col gap-5 sm:gap-6 z-20 order-3">
            {/* Card 3: Habla y acuerda directamente */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-[#12102b]/85 border border-purple-500/20 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-3 group-hover:scale-110 transition-transform">
                  {cards[2].icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors">
                  {cards[2].title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cards[2].desc}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-4 h-4 text-purple-400/70 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>

            {/* Card 4: Trabajos con confianza */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-[#12102b]/85 border border-purple-500/20 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-3 group-hover:scale-110 transition-transform">
                  {cards[3].icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors">
                  {cards[3].title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cards[3].desc}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-4 h-4 text-purple-400/70 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
