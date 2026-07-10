"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const reviews = [
    {
      role: "client",
      name: t("rev_1_name"),
      title: t("rev_1_title"),
      photo: "/testimonials/maria-laura.jpg",
      stars: 5,
      comment: t("rev_1_comment"),
    },
    {
      role: "worker",
      name: t("rev_2_name"),
      title: t("rev_2_title"),
      photo: "/testimonials/jhonny.jpg",
      stars: 5,
      comment: t("rev_2_comment"),
    },
    {
      role: "worker",
      name: t("rev_3_name"),
      title: t("rev_3_title"),
      photo: "/testimonials/rosmery.jpg",
      stars: 5,
      comment: t("rev_3_comment"),
    },
    {
      role: "client",
      name: t("rev_4_name"),
      title: t("rev_4_title"),
      photo: "/testimonials/carlos.jpg",
      stars: 5,
      comment: t("rev_4_comment"),
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-brand-highlight/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", damping: 15, stiffness: 100, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-[#121824] hover:bg-[#161f30] border border-white/5 rounded-3xl p-6 transition-all duration-300 shadow-md flex flex-col justify-between"
            >
              {/* Decorative Quote Mark */}
              <Quote className="absolute right-6 top-6 w-8 h-8 text-white/5 group-hover:text-brand-primary/10 transition-colors" />

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-primary fill-brand-primary" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <img
                  src={rev.photo}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-highlight transition-colors">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-400">{rev.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
