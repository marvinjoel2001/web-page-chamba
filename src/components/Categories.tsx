"use client";

import { motion, Variants } from "framer-motion";
import {
  Paintbrush,
  Droplet,
  Zap,
  Leaf,
  Truck,
  Sparkles,
  Wrench,
  Hammer,
  Settings,
  Layers,
  TrendingUp,
  Plus,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Categories() {
  const t = useTranslations("Categories");

  const categoriesList = [
    {
      id: "pintura",
      name: t("cat_1_name"),
      desc: t("cat_1_desc"),
      icon: Paintbrush,
      iconWrap: "bg-brand-primary/10 border-brand-primary/20 text-brand-primary",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(139,92,246,0.55)]",
      popular: true,
    },
    {
      id: "plomeria",
      name: t("cat_2_name"),
      desc: t("cat_2_desc"),
      icon: Droplet,
      iconWrap: "bg-brand-highlight/10 border-brand-highlight/20 text-brand-highlight",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(234,179,8,0.5)]",
      popular: true,
    },
    {
      id: "electricidad",
      name: t("cat_3_name"),
      desc: t("cat_3_desc"),
      icon: Zap,
      iconWrap: "bg-amber-400/10 border-amber-400/20 text-amber-400",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(251,191,36,0.5)]",
      popular: true,
    },
    {
      id: "jardineria",
      name: t("cat_4_name"),
      desc: t("cat_4_desc"),
      icon: Leaf,
      iconWrap: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(52,211,153,0.45)]",
      popular: false,
    },
    {
      id: "transporte",
      name: t("cat_5_name"),
      desc: t("cat_5_desc"),
      icon: Truck,
      iconWrap: "bg-blue-400/10 border-blue-400/20 text-blue-400",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(96,165,250,0.45)]",
      popular: false,
    },
    {
      id: "limpieza",
      name: t("cat_6_name"),
      desc: t("cat_6_desc"),
      icon: Sparkles,
      iconWrap: "bg-pink-400/10 border-pink-400/20 text-pink-400",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(244,114,182,0.45)]",
      popular: true,
    },
    {
      id: "construccion",
      name: t("cat_7_name"),
      desc: t("cat_7_desc"),
      icon: Wrench,
      iconWrap: "bg-rose-400/10 border-rose-400/20 text-rose-400",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(251,113,133,0.45)]",
      popular: false,
    },
    {
      id: "carpinteria",
      name: t("cat_8_name"),
      desc: t("cat_8_desc"),
      icon: Hammer,
      iconWrap: "bg-orange-400/10 border-orange-400/20 text-orange-400",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(251,146,60,0.45)]",
      popular: false,
    },
    {
      id: "mecanica",
      name: t("cat_9_name"),
      desc: t("cat_9_desc"),
      icon: Settings,
      iconWrap: "bg-indigo-400/10 border-indigo-400/20 text-indigo-400",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(129,140,248,0.45)]",
      popular: false,
    },
    {
      id: "general",
      name: t("cat_10_name"),
      desc: t("cat_10_desc"),
      icon: Layers,
      iconWrap: "bg-slate-400/10 border-slate-400/20 text-slate-300",
      glow: "group-hover:shadow-[0_24px_45px_-18px_rgba(148,163,184,0.4)]",
      popular: false,
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  return (
    <section id="categorias" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Visual background gradient glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-brand-highlight/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-xs font-semibold text-brand-primary-light mb-5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{t("tag")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {t("subtitle")}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {categoriesList.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`group relative bg-[#121824] hover:bg-[#161f30] border border-white/5 hover:border-white/10 rounded-3xl p-5 transition-all duration-300 shadow-lg ${category.glow} flex flex-col justify-between`}
              >
                {/* Popular badge */}
                {category.popular && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-highlight/15 border border-brand-highlight/25 text-[10px] font-bold text-brand-highlight uppercase tracking-wide">
                    <TrendingUp className="w-3 h-3" />
                    {t("popular")}
                  </div>
                )}

                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-4 group-hover:scale-110 transition-transform duration-300 ${category.iconWrap}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-primary-light transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {category.desc}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className="mt-5 flex items-center text-xs font-bold text-brand-highlight group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <span>{t("view_offers")}</span>
                  <ArrowRight className="ml-1 w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}

          {/* Open-ended CTA card: any task can be posted */}
          <motion.a
            href="#descargar"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl p-6 flex flex-col justify-center items-start text-left bg-gradient-to-br from-brand-primary to-brand-primary-dark border border-brand-primary/40 shadow-lg hover:shadow-[0_24px_45px_-18px_rgba(139,92,246,0.7)] transition-all duration-300"
          >
            <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-4 group-hover:rotate-90 transition-transform duration-300">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {t("cta_title")}
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              {t("cta_desc")}
            </p>
            <div className="mt-5 flex items-center text-xs font-bold text-white">
              <span>{t("cta_button")}</span>
              <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
