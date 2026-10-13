"use client";

import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import AppPhoneMockup from "@/components/mockups/AppPhoneMockup";
import SectionHeader from "@/components/SectionHeader";
import type { Role } from "@/lib/role";

interface HowItWorksProps {
  activeRole: Role;
}

interface StepItem {
  titleKey: string;
  descKey: string;
  /** Captura real de la app (pruebas del 13/10/2026). */
  image: string;
}

const SCREENS = "/images/app-screens/v2";

const steps: Record<Role, StepItem[]> = {
  client: [
    { titleKey: "client_step_1_title", descKey: "client_step_1_desc", image: `${SCREENS}/cliente-pedido-voz.webp` },
    { titleKey: "client_step_2_title", descKey: "client_step_2_desc", image: `${SCREENS}/cliente-ofertas.webp` },
    { titleKey: "client_step_3_title", descKey: "client_step_3_desc", image: `${SCREENS}/cliente-oferta-aceptada.webp` },
    { titleKey: "client_step_5_title", descKey: "client_step_5_desc", image: `${SCREENS}/cliente-calificar.webp` },
  ],
  worker: [
    { titleKey: "worker_step_1_title", descKey: "worker_step_1_desc", image: `${SCREENS}/trabajador-disponible.webp` },
    { titleKey: "worker_step_2_title", descKey: "worker_step_2_desc", image: `${SCREENS}/trabajador-solicitud.webp` },
    { titleKey: "worker_step_4_title", descKey: "worker_step_4_desc", image: `${SCREENS}/trabajador-en-trabajo.webp` },
    { titleKey: "worker_step_5_title", descKey: "worker_step_5_desc", image: `${SCREENS}/trabajador-billetera.webp` },
  ],
};

// Los pasos aparecen uno tras otro al entrar en pantalla.
const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowItWorks({ activeRole }: HowItWorksProps) {
  const t = useTranslations("HowItWorks");
  const reduce = useReducedMotion();

  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={activeRole === "client" ? "Cómo funciona para clientes" : "Cómo funciona para trabajadores"}
          title={
            activeRole === "client" ? (
              <>Resuelve tu pedido en <span className="accent-underline">4 pasos</span></>
            ) : (
              <>Empieza a ganar en <span className="accent-underline">4 pasos</span></>
            )
          }
          description={
            activeRole === "client"
              ? "Pides, recibes ofertas, eliges al trabajador y calificas cuando termina."
              : "Te pones disponible, recibes pedidos cerca, aceptas el que te convenga y cobras directo."
          }
        />

        <AnimatePresence mode="wait">
          <motion.ol
            key={activeRole}
            variants={reduce ? undefined : listVariants}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
            className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14"
          >
            {steps[activeRole].map((st, index) => (
              <motion.li key={st.titleKey} variants={reduce ? undefined : itemVariants} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span
                    data-solid
                    className="w-10 h-10 rounded-full bg-accent text-on-accent flex items-center justify-center text-lg font-extrabold shrink-0 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold leading-snug text-ink">
                  <span className="sr-only">Paso {index + 1}: </span>
                  {t(st.titleKey as never)}
                </h3>
                <p className="mt-2 text-base leading-relaxed font-medium text-ink-soft">{t(st.descKey as never)}</p>

                <div className="mt-auto pt-6 flex justify-center">
                  <motion.div
                    className="w-full max-w-[210px]"
                    data-solid
                    whileHover={reduce ? undefined : { y: -8, rotate: index % 2 ? 1.2 : -1.2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <AppPhoneMockup imageSrc={st.image} alt={t(st.titleKey as never)} />
                  </motion.div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </AnimatePresence>
      </div>
    </section>
  );
}
