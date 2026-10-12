"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/SectionHeader";
import type { Role } from "@/lib/role";

interface TestimonialsProps {
  activeRole: Role;
}

export default function Testimonials({ activeRole }: TestimonialsProps) {
  const t = useTranslations("Testimonials");
  const reviews: { role: Role; key: string; photo: string }[] = [
    { role: "client", key: "rev_1", photo: "/testimonials/maria-laura.jpg" },
    { role: "worker", key: "rev_2", photo: "/testimonials/jhonny.jpg" },
    { role: "worker", key: "rev_3", photo: "/testimonials/rosmery.jpg" },
    { role: "client", key: "rev_4", photo: "/testimonials/carlos.jpg" },
  ];
  const visible = reviews.filter((rev) => rev.role === activeRole);

  return (
    <section id="testimonios" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("title")}
          title={
            activeRole === "client" ? (
              <>Clientes que ya <span className="accent-underline">resolvieron</span></>
            ) : (
              <>Trabajadores que ya <span className="accent-underline">generan ingresos</span></>
            )
          }
        />

        <AnimatePresence mode="wait">
          <motion.ul
            key={activeRole}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
          >
            {visible.map((rev) => (
              <li key={rev.key}>
                <figure className="h-full flex flex-col border-t-2 border-line pt-7">
                  <div className="flex gap-1" aria-label="5 de 5 estrellas" role="img">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D99A06] fill-[#F2B01E]" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-lg sm:text-xl leading-relaxed font-medium text-ink">
                    “{t(`${rev.key}_comment` as never)}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <img
                      src={rev.photo}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-base font-bold text-ink">{t(`${rev.key}_name` as never)}</p>
                      <p className="text-sm font-medium text-ink-soft">{t(`${rev.key}_title` as never)}</p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
