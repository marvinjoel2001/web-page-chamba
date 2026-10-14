"use client";

import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
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
  /** Dónde "toca" el dedo en la captura, en % del ancho y alto de la pantalla. */
  tap?: { x: number; y: number };
}

const SCREENS = "/images/app-screens/v2";
/** Milisegundos que se resalta cada paso antes de pasar al siguiente. */
const INTERVAL = 3800;

const steps: Record<Role, StepItem[]> = {
  client: [
    // Botón del micrófono.
    { titleKey: "client_step_1_title", descKey: "client_step_1_desc", image: `${SCREENS}/cliente-pedido-voz.webp`, tap: { x: 50, y: 42 } },
    // "Aceptar" en la primera oferta.
    { titleKey: "client_step_2_title", descKey: "client_step_2_desc", image: `${SCREENS}/cliente-ofertas.webp`, tap: { x: 83, y: 76 } },
    // Check de "¡Oferta aceptada!".
    { titleKey: "client_step_3_title", descKey: "client_step_3_desc", image: `${SCREENS}/cliente-oferta-aceptada.webp`, tap: { x: 50, y: 46 } },
    // Cuarta estrella de la calificación.
    { titleKey: "client_step_5_title", descKey: "client_step_5_desc", image: `${SCREENS}/cliente-calificar.webp`, tap: { x: 64, y: 57 } },
  ],
  worker: [
    { titleKey: "worker_step_1_title", descKey: "worker_step_1_desc", image: `${SCREENS}/trabajador-disponible.webp` },
    { titleKey: "worker_step_2_title", descKey: "worker_step_2_desc", image: `${SCREENS}/trabajador-solicitud.webp` },
    { titleKey: "worker_step_4_title", descKey: "worker_step_4_desc", image: `${SCREENS}/trabajador-en-trabajo.webp` },
    { titleKey: "worker_step_5_title", descKey: "worker_step_5_desc", image: `${SCREENS}/trabajador-billetera.webp` },
  ],
};

/** Dedo que toca la pantalla: aparece, presiona y deja una onda. */
function TapHint({ x, y, loop }: { x: number; y: number; loop: boolean }) {
  const repeat = loop ? { repeat: Infinity, repeatDelay: 1.6 } : {};
  return (
    <span
      className="pointer-events-none absolute z-30 w-11 h-11 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
      aria-hidden="true"
    >
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-accent"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: [0.4, 0.4, 2], opacity: [0, 0.8, 0] }}
        transition={{ duration: 1.1, times: [0, 0.45, 1], delay: 0.9, ease: "easeOut", ...repeat }}
      />
      <motion.span
        className="absolute inset-1.5 rounded-full bg-accent/45 border-2 border-white shadow-[0_4px_14px_rgba(43,33,26,0.35)]"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: [1.5, 1, 0.75, 1, 1], opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 1.5, times: [0, 0.3, 0.45, 0.6, 1], delay: 0.5, ease: "easeOut", ...repeat }}
      />
    </span>
  );
}

export default function HowItWorks({ activeRole }: HowItWorksProps) {
  const t = useTranslations("HowItWorks");
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  // Falso en el servidor y en la hidratación: la animación del flujo solo se
  // activa en el navegador, así el HTML inicial coincide siempre.
  const seen = useInView(listRef, { once: true, amount: 0.3 });
  const inView = useInView(listRef, { amount: 0.3 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const list = steps[activeRole];
  const flowOn = seen && !reduce;
  const running = flowOn && inView && !paused;

  // Recorre los pasos 1 → 4 y vuelve a empezar mientras la sección se ve.
  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % list.length), INTERVAL);
    return () => window.clearTimeout(id);
  }, [active, running, list.length]);

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
            ref={listRef}
            key={activeRole}
            // Igual en servidor y cliente: si dependiera de useReducedMotion, la
            // hidratación no coincide y la lista se queda invisible.
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onMouseLeave={() => setPaused(false)}
            className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14"
          >
            {list.map((st, index) => {
              const isActive = flowOn && index === active;
              const isDone = flowOn && index < active;
              const isMuted = flowOn && !isActive;
              return (
                <li
                  key={st.titleKey}
                  className="flex flex-col"
                  onMouseEnter={() => {
                    setActive(index);
                    setPaused(true);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      data-solid
                      className={`relative w-10 h-10 rounded-full flex items-center justify-center text-lg font-extrabold shrink-0 transition-colors duration-500 ${
                        flowOn && !isActive && !isDone ? "bg-ink/10 text-ink-soft" : "bg-accent text-on-accent"
                      }`}
                      aria-hidden="true"
                    >
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-full bg-accent"
                          initial={{ scale: 1, opacity: 0.45 }}
                          animate={{ scale: 1.75, opacity: 0 }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                      <span className="relative">{index + 1}</span>
                    </span>

                    {/* La línea hacia el siguiente paso se llena mientras este está activo. */}
                    <span className="relative h-0.5 flex-1 rounded-full bg-line overflow-hidden" aria-hidden="true">
                      <motion.span
                        className="absolute inset-0 origin-left bg-accent rounded-full"
                        initial={false}
                        animate={{ scaleX: isActive || isDone ? 1 : 0 }}
                        transition={{
                          duration: isActive && running ? INTERVAL / 1000 : 0.4,
                          ease: isActive && running ? "linear" : "easeOut",
                        }}
                      />
                    </span>
                  </div>

                  <div className={`transition-opacity duration-500 ${isMuted ? "lg:opacity-55" : ""}`}>
                    <h3 className="mt-5 text-xl font-bold leading-snug text-ink">
                      <span className="sr-only">Paso {index + 1}: </span>
                      {t(st.titleKey as never)}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed font-medium text-ink-soft">{t(st.descKey as never)}</p>
                  </div>

                  <div className="mt-auto pt-6 flex justify-center">
                    <div
                      data-solid
                      className={`w-full max-w-[210px] rounded-[36px] transition-all duration-500 ease-out ${
                        isActive
                          ? "lg:-translate-y-3 lg:scale-[1.04] shadow-[0_0_0_4px_var(--accent),0_28px_60px_-14px_rgba(43,33,26,0.5)]"
                          : isMuted
                            ? "lg:opacity-60 lg:scale-[0.96]"
                            : ""
                      }`}
                    >
                      <AppPhoneMockup
                        imageSrc={st.image}
                        alt={t(st.titleKey as never)}
                        overlay={
                          flowOn && st.tap ? (
                            // En pantallas grandes solo toca el paso activo; en móvil, cada teléfono repite su toque.
                            <span key={isActive ? `on-${active}` : "off"} className={isActive ? "" : "lg:hidden"}>
                              <TapHint x={st.tap.x} y={st.tap.y} loop={!isActive} />
                            </span>
                          ) : undefined
                        }
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </motion.ol>
        </AnimatePresence>
      </div>
    </section>
  );
}
