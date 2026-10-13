"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface FloatingBadge {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}

export interface PhoneSlide {
  /** Captura real de la app (750 px de ancho, proporción 9:20). */
  src: string;
  alt: string;
  /** Etiquetas que acompañan a esta pantalla; cambian con el carrusel. */
  top?: FloatingBadge;
  bottom?: FloatingBadge;
}

interface AppPhoneMockupProps {
  /** Captura única (pasos de "Cómo funciona"). */
  imageSrc?: string;
  alt: string;
  /** Varias capturas que rotan solas, con puntos para elegir (hero). */
  slides?: PhoneSlide[];
  /** Milisegundos por pantalla en el carrusel. */
  interval?: number;
  /** Contenido dibujado en lugar de una captura (se muestra dentro del mismo marco). */
  children?: React.ReactNode;
  floatingBadgeTop?: FloatingBadge;
  floatingBadgeBottom?: FloatingBadge;
  /** Flotación suave del teléfono (solo hero). */
  float?: boolean;
  className?: string;
  priority?: boolean;
}

/** Etiqueta flotante: superficie sólida (no glass) para que se lea sobre el video. */
function Badge({ badge, className, delay }: { badge: FloatingBadge; className: string; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-solid
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, delay }}
      className={`absolute z-30 ${className}`}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={reduce ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: delay * 3 }}
        className="bg-[#FFFDF9] border border-line shadow-[0_10px_30px_-6px_rgba(43,33,26,0.25)] rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 max-w-[220px]"
      >
        {badge.icon && (
          <div className="w-8 h-8 rounded-xl bg-accent text-on-accent flex items-center justify-center shrink-0 transition-colors duration-300">
            {badge.icon}
          </div>
        )}
        <div className="min-w-0">
          <span className="text-sm font-bold text-ink block leading-tight">{badge.title}</span>
          {badge.subtitle && (
            <span className="text-xs font-medium text-ink-soft block leading-snug mt-0.5">{badge.subtitle}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AppPhoneMockup({
  imageSrc,
  alt,
  slides,
  interval = 4000,
  floatingBadgeTop,
  floatingBadgeBottom,
  children,
  float = false,
  className = "",
  priority = false,
}: AppPhoneMockupProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides?.length ?? 0;

  // Rotación automática; se detiene con el mouse encima, con foco dentro o si
  // el usuario prefiere menos movimiento.
  useEffect(() => {
    if (count < 2 || paused || reduce) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearTimeout(id);
  }, [index, count, paused, reduce, interval]);

  // Precarga las siguientes capturas para que el cambio no parpadee.
  useEffect(() => {
    slides?.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, [slides]);

  const slide = slides?.[index];
  const top = slide?.top ?? floatingBadgeTop;
  const bottom = slide?.bottom ?? floatingBadgeBottom;

  return (
    <div
      className={`relative flex flex-col items-center select-none ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative w-full flex items-center justify-center">
        {/* La key cambia con cada pantalla: la etiqueta se vuelve a montar y entra animada. */}
        {top && (
          <Badge key={`top-${slide ? index : "fixed"}`} badge={top} className="top-6 -left-8 sm:-left-12" delay={0.15} />
        )}

        {/* Un solo marco para todas las capturas: pantalla 9:20, igual que los teléfonos de las capturas. */}
        <motion.div
          animate={float && !reduce ? { y: [0, -10, 0] } : undefined}
          transition={float && !reduce ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : undefined}
          className="relative w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[255px] rounded-[36px] p-[6px] bg-[#1F1A17] shadow-[0_24px_50px_-12px_rgba(43,33,26,0.45)]"
        >
          <div className="relative w-full aspect-[9/20] rounded-[30px] overflow-hidden bg-[#F7F6FC]">
            {children ??
              (slides ? (
                <AnimatePresence initial={false}>
                  <motion.img
                    key={slide!.src}
                    src={slide!.src}
                    alt={slide!.alt}
                    initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    decoding="async"
                    fetchPriority={index === 0 && priority ? "high" : undefined}
                  />
                </AnimatePresence>
              ) : (
                <img
                  src={imageSrc}
                  alt={alt}
                  className="w-full h-full object-cover object-top"
                  loading={priority ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-40" aria-hidden="true" />
          </div>
        </motion.div>

        {bottom && (
          <Badge
            key={`bottom-${slide ? index : "fixed"}`}
            badge={bottom}
            className="bottom-10 -right-8 sm:-right-12"
            delay={0.3}
          />
        )}
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center gap-2" role="tablist" aria-label={alt}>
          {slides!.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={s.alt}
              onClick={() => setIndex(i)}
              className="focus-ring relative h-2 rounded-full bg-ink/15 overflow-hidden transition-all duration-300"
              style={{ width: i === index ? 28 : 8 }}
            >
              {i === index && (
                <motion.span
                  key={`${index}-${paused}-${reduce}`}
                  className="absolute inset-y-0 left-0 bg-accent rounded-full"
                  initial={{ width: paused || reduce ? "100%" : "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: paused || reduce ? 0 : interval / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
