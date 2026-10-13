"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  Clock,
  Download,
  MapPin,
  MessageCircle,
  Mic,
  Radio,
  Tag,
  Wallet,
} from "lucide-react";
import React from "react";
import AppPhoneMockup, { type PhoneSlide } from "@/components/mockups/AppPhoneMockup";
import WorkerRegistrationForm from "@/components/WorkerRegistrationForm";
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

/**
 * Recorrido del cliente con capturas reales de la app (13/10/2026). Cada
 * pantalla trae sus propias etiquetas flotantes.
 */
const clientSlides: PhoneSlide[] = [
  {
    src: "/images/app-screens/v2/cliente-inicio.webp",
    alt: "Inicio de Chamba: mapa y campo para pedir un servicio",
    top: { icon: <Mic className="w-4 h-4" />, title: "Pide por voz o escribe", subtitle: "Tú pones el precio en Bs" },
    bottom: { icon: <MapPin className="w-4 h-4" />, title: "Trabajadores cerca", subtitle: "En Santa Cruz de la Sierra" },
  },
  {
    src: "/images/app-screens/v2/cliente-modalidad.webp",
    alt: "Elegir cómo contratar: por trabajo, por hora o por día",
    top: { icon: <Clock className="w-4 h-4" />, title: "Por trabajo, hora o día", subtitle: "Tú eliges cómo contratar" },
    bottom: { icon: <Wallet className="w-4 h-4" />, title: "Pagas directo", subtitle: "Sin intermediarios" },
  },
  {
    src: "/images/app-screens/v2/cliente-ofertas.webp",
    alt: "Ofertas recibidas de trabajadores verificados",
    top: { icon: <BadgeCheck className="w-4 h-4" />, title: "Trabajadores verificados", subtitle: "Ves perfil y calificación" },
    bottom: { icon: <Tag className="w-4 h-4" />, title: "Recibes ofertas", subtitle: "Eliges la que te conviene" },
  },
  {
    src: "/images/app-screens/v2/cliente-oferta-aceptada.webp",
    alt: "Oferta aceptada: el trabajador queda confirmado",
    top: { icon: <CheckCircle2 className="w-4 h-4" />, title: "Oferta aceptada", subtitle: "El trabajador va en camino" },
    bottom: { icon: <MessageCircle className="w-4 h-4" />, title: "Coordinan por chat", subtitle: "Directo en la app" },
  },
];

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
      image: "/images/app-screens/v2/cliente-inicio.webp",
      alt: "Pantalla de inicio de Chamba para clientes",
      top: { icon: <Mic className="w-4 h-4" />, title: "Pide por voz o escribe", subtitle: "Tú pones el precio en Bs" },
      bottom: { icon: <CheckCircle2 className="w-4 h-4" />, title: "Oferta aceptada", subtitle: "El trabajador va en camino" },
    },
  },
  worker: {
    eyebrow: "Para quien quiere trabajar",
    titleStart: "Crea tu cuenta y empieza",
    titleHighlight: "en Chamba.",
    description:
      "Regístrate con tus datos básicos. Entra a la app, explora y completa tu perfil a tu ritmo. Nuestro equipo te acompañará con la verificación para empezar a trabajar.",
    points: [
      "Cuenta lista al terminar el registro",
      "Tu perfil y documentos se completan después",
      "Verifica tu identidad para aceptar trabajos",
    ],
    primary: { label: "Crear mi cuenta", href: "#registro" },
    secondary: { label: "Descargar la app", href: "#descargar" },
    note: "Registro gratis · Sin horarios obligatorios",
    phone: {
      image: "/images/app-screens/v2/trabajador-disponible.webp",
      alt: "Pantalla de inicio de Chamba para trabajadores con el interruptor Disponible",
      top: { icon: <Radio className="w-4 h-4" />, title: "Estado: Disponible", subtitle: "Un toque para recibir chambas" },
      bottom: { icon: <Wallet className="w-4 h-4" />, title: "Cobras el 100%", subtitle: "Pago directo del cliente" },
    },
  },
};

export default function Hero({ activeRole }: HeroProps) {
  const c = content[activeRole];

  return (
    <section className={`relative pt-28 pb-16 md:pb-24 ${activeRole === "worker" ? "md:pt-28" : "md:pt-36"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center ${activeRole === "worker" ? "gap-6" : "gap-12"}`}
          >
            <div className={`${activeRole === "worker" ? "lg:col-span-6" : "lg:col-span-7"} flex flex-col items-start`}>
              <p className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.12em] text-ink-soft">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
                {c.eyebrow}
              </p>

              <h1 className={`mt-5 leading-[1.08] font-extrabold tracking-tight text-ink text-balance ${activeRole === "worker" ? "text-3xl sm:text-5xl lg:text-6xl" : "text-[2.6rem] sm:text-6xl lg:text-[4.25rem]"}`}>
                {c.titleStart} <span className="accent-underline">{c.titleHighlight}</span>
              </h1>

              <p className={`${activeRole === "worker" ? "hidden lg:block" : ""} mt-6 max-w-xl text-lg sm:text-xl leading-relaxed font-medium text-ink`}>
                {c.description}
              </p>

              <ul className={`${activeRole === "worker" ? "hidden lg:flex" : "flex"} mt-7 flex-col gap-3`}>
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

              <div className={`${activeRole === "worker" ? "hidden lg:flex" : "flex"} mt-9 flex-wrap items-center gap-3`}>
                <a href={c.primary.href} className="btn btn-primary">
                  {activeRole === "client" && <Download className="w-4 h-4" />}
                  <span>{c.primary.label}</span>
                  {activeRole === "worker" && <ArrowRight className="w-4 h-4" />}
                </a>
                <a href={c.secondary.href} className="btn btn-secondary">
                  {c.secondary.label}
                </a>
              </div>

              <p className={`${activeRole === "worker" ? "hidden lg:block" : ""} mt-5 text-sm font-medium text-ink-soft`}>{c.note}</p>
            </div>

            <div className={`${activeRole === "worker" ? "lg:col-span-6" : "lg:col-span-5"} flex justify-center`}>
              {activeRole === "worker" ? <WorkerRegistrationForm /> : <div className="relative w-full max-w-[340px] px-8">
                <AppPhoneMockup
                  slides={clientSlides}
                  alt="Recorrido de la app Chamba para clientes"
                  float
                  priority
                />
              </div>}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
