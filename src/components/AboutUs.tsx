"use client";

import { motion } from "framer-motion";
import { Heart, Target, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("AboutUs");
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image & Founder Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Artistic Glassmorphic Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/70 bg-white/72 shadow-[0_20px_50px_rgba(139,92,246,0.12)] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] group">
              <img
                src="/images/workers_diverse_bolivia.jpg"
                alt="Profesionales de Chamba"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent z-10" />

              {/* Info Overlay with Glass Badge */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-amber-300 text-xs font-semibold mb-2">
                  <Target className="w-3.5 h-3.5" /> {t("badge_role")}
                </div>
                <p className="text-slate-100 mt-1 text-sm sm:text-base font-medium leading-snug">{t("badge_desc")}</p>
              </div>
            </div>
          </motion.div>

          {/* Story Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center rounded-[2rem] p-6 sm:p-9 bg-white/68 backdrop-blur-lg border border-white/60 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)]"
          >
            <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-3">
              {t("section_tag")}
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              {t("title_part1")}{t("title_part2")}
            </h3>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                {t("p1")}
              </p>
              <p>
                {t("p2_part1")}<span className="text-slate-900 font-semibold">{t("p2_part2")}</span>{t("p2_part3")}<span className="text-slate-900 font-semibold">{t("p2_part4")}</span>{t("p2_part5")}
              </p>
              <p>
                {t("p3_part1")}<strong className="text-purple-600">{t("p3_part2")}</strong>{t("p3_part3")}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">{t("purpose_title")}</h4>
                  <p className="text-sm text-slate-500">{t("purpose_desc")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">{t("vision_title")}</h4>
                  <p className="text-sm text-slate-500">{t("vision_desc")}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
