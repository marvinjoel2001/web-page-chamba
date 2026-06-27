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
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Categories() {
  const t = useTranslations("Categories");

  const categoriesList = [
    {
      id: "pintura",
      name: t("cat_1_name"),
      desc: t("cat_1_desc"),
      icon: <Paintbrush className="w-6 h-6 text-brand-primary" />,
    },
    {
      id: "plomeria",
      name: t("cat_2_name"),
      desc: t("cat_2_desc"),
      icon: <Droplet className="w-6 h-6 text-brand-highlight" />,
    },
    {
      id: "electricidad",
      name: t("cat_3_name"),
      desc: t("cat_3_desc"),
      icon: <Zap className="w-6 h-6 text-amber-400" />,
    },
    {
      id: "jardineria",
      name: t("cat_4_name"),
      desc: t("cat_4_desc"),
      icon: <Leaf className="w-6 h-6 text-emerald-400" />,
    },
    {
      id: "transporte",
      name: t("cat_5_name"),
      desc: t("cat_5_desc"),
      icon: <Truck className="w-6 h-6 text-blue-400" />,
    },
    {
      id: "limpieza",
      name: t("cat_6_name"),
      desc: t("cat_6_desc"),
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
    },
    {
      id: "construccion",
      name: t("cat_7_name"),
      desc: t("cat_7_desc"),
      icon: <Wrench className="w-6 h-6 text-rose-400" />,
    },
    {
      id: "carpinteria",
      name: t("cat_8_name"),
      desc: t("cat_8_desc"),
      icon: <Hammer className="w-6 h-6 text-yellow-500" />,
    },
    {
      id: "mecanica",
      name: t("cat_9_name"),
      desc: t("cat_9_desc"),
      icon: <Settings className="w-6 h-6 text-indigo-400" />,
    },
    {
      id: "general",
      name: t("cat_10_name"),
      desc: t("cat_10_desc"),
      icon: <Layers className="w-6 h-6 text-slate-400" />,
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
      transition: { type: "spring", damping: 15, stiffness: 100 } 
    },
  };

  return (
    <section id="categorias" className="py-20 bg-[#090d16] relative overflow-hidden">
      {/* Visual background gradient glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-brand-highlight/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {categoriesList.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-[#121824] hover:bg-[#161f30] border border-white/5 rounded-3xl p-5 transition-all duration-300 shadow flex flex-col justify-between"
            >
              {/* Highlight Hover border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/10 transition-colors pointer-events-none" />

              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {category.desc}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="mt-5 flex items-center text-xs font-bold text-brand-highlight group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <span>{t("view_offers")}</span>
                <span className="ml-1">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
