"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Download, Mic, CheckCircle2, Radio, Wallet } from "lucide-react";
import React from "react";
import AppPhoneMockup from "@/components/mockups/AppPhoneMockup";
import type { Role } from "@/lib/role";

interface HeroProps {
  activeRole: Role;
}

interface HeroContent {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
  points: string[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  note: string;
  phone: {
    image: string;
    alt: string;
    top: { icon: React.ReactNode; title: string; subtitle: string };
    bottom: { icon: React.ReactNode; title: string; subtitle: string };
  };
}

const content: Record<Role, HeroContent> = {
  client: {
    eyebrow: "Para quien necesita un servicio",
    titleStart: "Encuentra a alguien que haga",
    titleHighlight: "el trabajo.",
    description:
      "Dices lo que necesitas por voz o por texto, pones cuánto quieres pagar y un trabajador verificado de tu zona acepta tu oferta.",
    points: [
      "Publicar tu pedido es gratis",
      "Trabajadores cerca de tu casa",
      "Hablas y pagas directo, sin intermediarios",
    ],
    primary: { label: "Descargar la app", href: "#descargar" },
    secondary: { label: "Ver cómo funciona", href: "#como-funciona" },
    note: "Disponible en Santa Cruz de la Sierra",
    phone: {
      image: "/images/app-screens/cliente_01_inicio.png",
      alt: "Pantalla de inicio de Chamba para clientes",
      top: { icon: <Mic className="w-4 h-4" />, title: "Pide por voz o escribe", subtitle: "Tú pones el precio en Bs" },
      bottom: { icon: <CheckCircle2 className="w-4 h-4" />, title: "Oferta aceptada", subtitle: "El trabajador va en camino" },
    },
  },
  worker: {
    eyebrow: "Para quien quiere trabajar",
    titleStart: "Actívate y recibe chambas",
    titleHighlight: "cerca de ti.",
    description:
      "Con un toque te pones disponible. Te llegan pedidos de vecinos con el trabajo y el precio ya puestos: aceptas el que te convenga y cobras directo.",
    points: [
      "Tú decides cuándo trabajar",
      "Pedidos de tu misma zona",
      "Cobras el 100% de lo acordado",
    ],
    primary: { label: "Empezar a trabajar", href: "/unete" },
    secondary: { label: "Descargar la app", href: "#descargar" },
    note: "Registro gratis · Sin horarios obligatorios",
    phone: {
      image: "/images/app-screens/worker_01_inicio.png",
      alt: "Pantalla de inicio de Chamba para trabajadores con el interruptor Disponible",
      top: { icon: <Radio className="w-4 h-4" />, title: "Estado: Disponible", subtitle: "Un toque para recibir chambas" },
      bottom: { icon: <Wallet className="w-4 h-4" />, title: "Cobras el 100%", subtitle: "Pago directo del cliente" },
    },
  },
};

export default function Hero({ activeRole }: HeroProps) {
  const c = content[activeRole];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            <div className="lg:col-span-7 flex flex-col items-start">
              <p className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.12em] text-ink-soft">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
                {c.eyebrow}
              </p>

              <h1 className="mt-5 text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-ink text-balance">
                {c.titleStart} <span className="accent-underline">{c.titleHighlight}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed font-medium text-ink">
                {c.description}
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {c.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-base sm:text-lg font-semibold text-ink">
                    <span
                      data-solid
                      className="w-6 h-6 rounded-full bg-accent text-on-accent flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href={c.primary.href} className="btn btn-primary">
                  {activeRole === "client" && <Download className="w-4 h-4" />}
                  <span>{c.primary.label}</span>
                  {activeRole === "worker" && <ArrowRight className="w-4 h-4" />}
                </a>
                <a href={c.secondary.href} className="btn btn-secondary">
                  {c.secondary.label}
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-ink-soft">{c.note}</p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] px-8">
                <AppPhoneMockup
                  imageSrc={c.phone.image}
                  alt={c.phone.alt}
                  floatingBadgeTop={c.phone.top}
                  floatingBadgeBottom={c.phone.bottom}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
