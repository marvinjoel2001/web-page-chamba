"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, MapPin, MessageSquare, ShieldCheck, ArrowRight, Compass, Award, X, Check, Radio } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import type { Role } from "@/lib/role";

interface FeaturesProps {
  activeRole?: Role;
}

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlights: string[];
  ctaText: string;
}

export default function Features({ activeRole = "client" }: FeaturesProps) {
  const t = useTranslations("Features");
  const [selected, setSelected] = useState<FeatureItem | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const clientItems: FeatureItem[] = [
    {
      id: "card_1",
      icon: <Users className="w-6 h-6" />,
      title: t("card_1_title"),
      desc: t("card_1_desc"),
      highlights: [
        "Revisa la calificación y las fotos de trabajos anteriores de cada trabajador.",
        "Compara las ofertas que recibes y elige la que mejor te convenga.",
      ],
      ctaText: "Descargar la app",
    },
    {
      id: "card_2",
      icon: <MapPin className="w-6 h-6" />,
      title: t("card_2_title"),
      desc: t("card_2_desc"),
      highlights: [
        "Tu pedido llega a trabajadores de tu misma zona en Santa Cruz de la Sierra.",
        "Como están cerca, llegan más rápido.",
      ],
      ctaText: "Descargar la app",
    },
    {
      id: "card_3",
      icon: <MessageSquare className="w-6 h-6" />,
      title: t("card_3_title"),
      desc: t("card_3_desc"),
      highlights: [
        "Chat dentro de la app para explicar el trabajo y mandar fotos.",
        "Acuerdan el precio antes de empezar y le pagas directo (efectivo, QR o transferencia).",
      ],
      ctaText: "Descargar la app",
    },
    {
      id: "card_4",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t("card_4_title"),
      desc: t("card_4_desc"),
      highlights: [
        "Cada trabajador verifica su identidad con su carnet.",
        "Las calificaciones las dejan clientes reales después de cada trabajo.",
        "Si algo sale mal, puedes reportarlo a soporte desde la app.",
      ],
      ctaText: "Descargar la app",
    },
  ];

  const workerItems: FeatureItem[] = [
    {
      id: "worker_card_1",
      icon: <Radio className="w-6 h-6" />,
      title: "Trabajas cuando quieres",
      desc: "Te pones disponible cuando tienes tiempo y te desconectas cuando quieres descansar.",
      highlights: [
        "Sin horarios obligatorios: unas horas al día, tus días libres o tiempo completo.",
        "Mientras estés disponible, te llegan pedidos nuevos.",
      ],
      ctaText: "Empezar a trabajar",
    },
    {
      id: "worker_card_2",
      icon: <Compass className="w-6 h-6" />,
      title: "Pedidos en tu zona",
      desc: "Ves pedidos de personas de tu barrio con el trabajo y el precio que ofrecen.",
      highlights: [
        "Gastas menos en pasajes porque los trabajos están cerca.",
        "Te llega una notificación cada vez que alguien pide un trabajo de tu oficio.",
      ],
      ctaText: "Empezar a trabajar",
    },
    {
      id: "worker_card_3",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Aceptas o haces tu oferta",
      desc: "Si el precio te conviene lo aceptas; si no, ofreces otro monto. Luego coordinas por chat.",
      highlights: [
        "Hablas con el cliente antes de ir para saber qué materiales llevar.",
        "Nadie cambia el precio que acordaron.",
      ],
      ctaText: "Empezar a trabajar",
    },
    {
      id: "worker_card_4",
      icon: <Award className="w-6 h-6" />,
      title: "Cobras el 100% y ganas reputación",
      desc: "El cliente te paga directo lo acordado. Cada trabajo bien hecho suma estrellas a tu perfil.",
      highlights: [
        "Sin descuentos sorpresa: el monto acordado es tuyo.",
        "Con buenas calificaciones te eligen más seguido.",
      ],
      ctaText: "Empezar a trabajar",
    },
  ];

  const items = activeRole === "client" ? clientItems : workerItems;
  const ctaHref = activeRole === "client" ? "#descargar" : "/unete";

  return (
    <section id="ventajas" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={activeRole === "client" ? "Por qué usar Chamba" : "Por qué trabajar con Chamba"}
          title={
            activeRole === "client" ? (
              <>{t("title_part1")} <span className="accent-underline">{t("title_part2")}</span></>
            ) : (
              <>Trabajos reales. <span className="accent-underline">Plata directa.</span></>
            )
          }
          description={
            activeRole === "client"
              ? t("subtitle")
              : "Chamba te conecta con clientes cerca de ti que necesitan tu oficio hoy mismo."
          }
        />

          <AnimatePresence mode="wait">
            <motion.ul
              key={activeRole}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
            >
              {items.map((item) => (
                <li key={item.id} className="flex flex-col items-start border-t-2 border-line pt-6">
                  <span className="text-accent-strong transition-colors duration-300" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed font-medium text-ink-soft">{item.desc}</p>
                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    className="focus-ring mt-4 inline-flex items-center gap-1.5 rounded text-[15px] font-bold text-ink underline decoration-accent decoration-2 underline-offset-[6px] hover:decoration-[3px]"
                  >
                    Ver más
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            data-solid
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(43,33,26,0.55)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="feature-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-[#FFFDF9] p-6 sm:p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="focus-ring absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-ink-soft hover:bg-[rgba(43,33,26,0.08)]"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-accent-strong" aria-hidden="true">{selected.icon}</span>
              <h3 id="feature-modal-title" className="mt-3 pr-10 text-2xl font-extrabold leading-snug text-ink">
                {selected.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{selected.desc}</p>

              <ul className="mt-5 flex flex-col gap-3">
                {selected.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-base text-ink">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-accent text-on-accent flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="leading-snug">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={ctaHref} onClick={() => setSelected(null)} className="btn btn-primary flex-1">
                  {selected.ctaText}
                </a>
                <button type="button" onClick={() => setSelected(null)} className="btn btn-secondary">
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
