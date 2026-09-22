"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, MapPin, MessageSquare, ShieldCheck, ArrowRight, DollarSign, Compass, Award } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

interface FeaturesProps {
  activeRole?: "client" | "worker";
}

export default function Features({ activeRole = "client" }: FeaturesProps) {
  const t = useTranslations("Features");

  const clientCards = [
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

  const workerCards = [
    {
      id: "worker_card_1",
      icon: <DollarSign className="w-4 h-4 text-purple-300" />,
      title: "Gana a tu propio ritmo",
      desc: "Tú defines tus tarifas por trabajo o por hora, recibiendo el 100% de tus cobros acordados.",
    },
    {
      id: "worker_card_2",
      icon: <Compass className="w-4 h-4 text-purple-300" />,
      title: "Chambas en tu zona",
      desc: "Recibe solicitudes de clientes cercanos en tiempo real con mapa y detalles precisos.",
    },
    {
      id: "worker_card_3",
      icon: <MessageSquare className="w-4 h-4 text-purple-300" />,
      title: "Trato directo y sin vueltas",
      desc: "Chatea con el cliente, envía cotizaciones y coordina directamente sin intermediarios.",
    },
    {
      id: "worker_card_4",
      icon: <Award className="w-4 h-4 text-purple-300" />,
      title: "Construye tu reputación",
      desc: "Acumula reseñas de 5 estrellas, perfil verificado y haz crecer tu cartera de clientes.",
    },
  ];

  const currentCards = activeRole === "client" ? clientCards : workerCards;

  return (
    <section id="features" className="py-20 sm:py-28 relative overflow-hidden">
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
            {activeRole === "client" ? (
              <>
                {t("title_part1")}{" "}
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  {t("title_part2")}
                </span>
              </>
            ) : (
              <>
                Oportunidades reales.{" "}
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Ingresos directos.
                </span>
              </>
            )}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {activeRole === "client"
              ? t("subtitle")
              : "Conectamos tu talento con clientes que buscan servicios en tu zona todos los días."}
          </p>
        </motion.div>

        {/* Main Showcase: Center Image with 4 Floating Cards */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-8">
          
          {/* Left Column Cards (Cards 1 & 2) */}
          <div className="w-full lg:w-[280px] xl:w-[320px] flex flex-col gap-5 sm:gap-6 z-20 order-2 lg:order-1">
            {/* Card 1 */}
            <motion.div
              key={currentCards[0].id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="bg-slate-900/40 border border-white/[0.08] backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl hover:border-white/20 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 mb-3 group-hover:text-purple-300 transition-colors">
                  {currentCards[0].icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-100 transition-colors">
                  {currentCards[0].title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {currentCards[0].desc}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              key={currentCards[1].id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-slate-900/40 border border-white/[0.08] backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl hover:border-white/20 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 mb-3 group-hover:text-purple-300 transition-colors">
                  {currentCards[1].icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-100 transition-colors">
                  {currentCards[1].title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {currentCards[1].desc}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          </div>

          {/* Center Column: Workers Photo Showcase (Instant Zero-Lag Transition) */}
          <div className="w-full lg:flex-1 max-w-[580px] xl:max-w-[640px] flex justify-center items-center relative z-10 order-1 lg:order-2">
            <div className="relative w-full rounded-2xl overflow-hidden">
              <img
                src="/images/chamba_workers_feathered.png"
                alt="Chamba Profesionales Reales"
                className={`w-full h-auto object-contain max-h-[440px] mx-auto select-none transition-opacity duration-200 ${
                  activeRole === "client" ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              />
              <img
                src="/images/feature2.png"
                alt="Chambero Profesional"
                className={`w-full h-auto object-contain max-h-[440px] mx-auto select-none rounded-2xl transition-opacity duration-200 ${
                  activeRole === "worker" ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              />
            </div>
          </div>

          {/* Right Column Cards (Cards 3 & 4) */}
          <div className="w-full lg:w-[280px] xl:w-[320px] flex flex-col gap-5 sm:gap-6 z-20 order-3">
            {/* Card 3 */}
            <motion.div
              key={currentCards[2].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="bg-slate-900/40 border border-white/[0.08] backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl hover:border-white/20 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 mb-3 group-hover:text-purple-300 transition-colors">
                  {currentCards[2].icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-100 transition-colors">
                  {currentCards[2].title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {currentCards[2].desc}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              key={currentCards[3].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-slate-900/40 border border-white/[0.08] backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl hover:border-white/20 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 mb-3 group-hover:text-purple-300 transition-colors">
                  {currentCards[3].icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-100 transition-colors">
                  {currentCards[3].title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {currentCards[3].desc}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
