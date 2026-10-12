"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import AppPhoneMockup from "@/components/mockups/AppPhoneMockup";
import ModernPhoneMockup from "@/components/mockups/ModernPhoneMockup";
import SectionHeader from "@/components/SectionHeader";
import type { Role } from "@/lib/role";

interface HowItWorksProps {
  activeRole: Role;
}

interface StepItem {
  titleKey: string;
  descKey: string;
  /** Captura de la app. Sin imagen se dibuja la pantalla (paso 2 del trabajador). */
  image?: string;
}

const steps: Record<Role, StepItem[]> = {
  client: [
    { titleKey: "client_step_1_title", descKey: "client_step_1_desc", image: "/images/app-screens/cliente_01_inicio.png" },
    { titleKey: "client_step_2_title", descKey: "client_step_2_desc", image: "/images/how-it-works/step2_offers_screen.png" },
    { titleKey: "client_step_3_title", descKey: "client_step_3_desc", image: "/images/how-it-works/step3_accepted_screen.png" },
    { titleKey: "client_step_5_title", descKey: "client_step_5_desc", image: "/images/how-it-works/step4_completed_screen.png" },
  ],
  worker: [
    { titleKey: "worker_step_1_title", descKey: "worker_step_1_desc", image: "/images/app-screens/worker_01_inicio.png" },
    { titleKey: "worker_step_2_title", descKey: "worker_step_2_desc" },
    { titleKey: "worker_step_3_title", descKey: "worker_step_3_desc", image: "/images/app-screens/cliente_90_chat-historial.png" },
    { titleKey: "worker_step_5_title", descKey: "worker_step_5_desc", image: "/images/app-screens/worker_90_trabajo-completado-anon.png" },
  ],
};

export default function HowItWorks({ activeRole }: HowItWorksProps) {
  const t = useTranslations("HowItWorks");

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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14"
          >
            {steps[activeRole].map((st, index) => (
              <li key={st.titleKey} className="flex flex-col">
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
                  <div className="w-full max-w-[210px]" data-solid>
                    <AppPhoneMockup imageSrc={st.image} alt={t(st.titleKey as never)}>
                      {st.image ? undefined : <ModernPhoneMockup step={2} role="worker" bare />}
                    </AppPhoneMockup>
                  </div>
                </div>
              </li>
            ))}
          </motion.ol>
        </AnimatePresence>
      </div>
    </section>
  );
}
