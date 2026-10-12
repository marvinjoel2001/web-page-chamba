"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingBadge {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}

interface AppPhoneMockupProps {
  /** Captura real de la app (1080 px de ancho, proporción ~9:20). */
  imageSrc?: string;
  alt: string;
  /** Contenido dibujado en lugar de una captura (se muestra dentro del mismo marco). */
  children?: React.ReactNode;
  floatingBadgeTop?: FloatingBadge;
  floatingBadgeBottom?: FloatingBadge;
  className?: string;
  priority?: boolean;
}

/** Etiqueta flotante: superficie sólida (no glass) para que se lea sobre el video. */
function Badge({ badge, className, delay }: { badge: FloatingBadge; className: string; delay: number }) {
  return (
    <motion.div
      data-solid
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`absolute z-30 bg-[#FFFDF9] border border-line shadow-[0_10px_30px_-6px_rgba(43,33,26,0.25)] rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 max-w-[220px] ${className}`}
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
  );
}

export default function AppPhoneMockup({
  imageSrc,
  alt,
  floatingBadgeTop,
  floatingBadgeBottom,
  children,
  className = "",
}: AppPhoneMockupProps) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {floatingBadgeTop && <Badge badge={floatingBadgeTop} className="top-6 -left-8 sm:-left-12" delay={0.2} />}

      {/* Un solo marco para todas las capturas: pantalla 9:20, igual que los teléfonos de las capturas. */}
      <div className="relative w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[255px] rounded-[36px] p-[6px] bg-[#1F1A17] shadow-[0_24px_50px_-12px_rgba(43,33,26,0.45)]">
        <div className="relative w-full aspect-[9/20] rounded-[30px] overflow-hidden bg-[#0B172A]">
          {children ?? (
            <img src={imageSrc} alt={alt} className="w-full h-full object-cover object-top" loading="lazy" />
          )}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-40" aria-hidden="true" />
        </div>
      </div>

      {floatingBadgeBottom && (
        <Badge badge={floatingBadgeBottom} className="bottom-10 -right-8 sm:-right-12" delay={0.35} />
      )}
    </div>
  );
}
