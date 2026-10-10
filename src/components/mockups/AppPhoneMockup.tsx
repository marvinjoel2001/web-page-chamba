"use client";

import React from "react";
import { motion } from "framer-motion";

interface AppPhoneMockupProps {
  imageSrc: string;
  alt: string;
  floatingBadgeTop?: {
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
  };
  floatingBadgeBottom?: {
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
  };
  className?: string;
  priority?: boolean;
}

export default function AppPhoneMockup({
  imageSrc,
  alt,
  floatingBadgeTop,
  floatingBadgeBottom,
  className = "",
}: AppPhoneMockupProps) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Outer Floating Glow */}
      <div className="absolute inset-0 bg-purple-500/15 blur-2xl rounded-[40px] pointer-events-none transform -translate-y-2 scale-95" />

      {/* Top Floating Glass Badge */}
      {floatingBadgeTop && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -top-3 -left-4 sm:-left-8 z-30 backdrop-blur-xl bg-white/90 border border-white/80 shadow-[0_12px_32px_rgba(139,92,246,0.18)] rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 max-w-[210px] sm:max-w-[240px]"
        >
          {floatingBadgeTop.icon && (
            <div className="w-8 h-8 rounded-xl bg-purple-100 border border-purple-200/80 flex items-center justify-center text-purple-700 shrink-0 shadow-xs">
              {floatingBadgeTop.icon}
            </div>
          )}
          <div className="min-w-0">
            <span className="text-xs font-black text-slate-900 block leading-tight truncate">
              {floatingBadgeTop.title}
            </span>
            {floatingBadgeTop.subtitle && (
              <span className="text-[10px] font-semibold text-purple-700 block truncate mt-0.5">
                {floatingBadgeTop.subtitle}
              </span>
            )}
          </div>
        </motion.div>
      )}

      {/* Main Titanium / Glass Phone Chassis */}
      <div className="relative w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[255px] aspect-[9/18.8] rounded-[36px] p-[6px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_25px_60px_-10px_rgba(15,23,42,0.35)] border border-white/20 transition-transform duration-300 group-hover:scale-[1.02]">
        
        {/* Phone Glass Inner Screen Frame */}
        <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-slate-950 flex flex-col justify-between">
          
          {/* Glass Glare Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12] z-30" />

          {/* Dynamic Island Capsule */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-40 flex items-center justify-end px-1.5 border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
          </div>

          {/* Actual Real App Screenshot */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-40">
            <div className="w-16 h-1 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Floating Glass Badge */}
      {floatingBadgeBottom && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="absolute -bottom-3 -right-4 sm:-right-8 z-30 backdrop-blur-xl bg-white/90 border border-white/80 shadow-[0_12px_32px_rgba(139,92,246,0.18)] rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 max-w-[210px] sm:max-w-[240px]"
        >
          {floatingBadgeBottom.icon && (
            <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs">
              {floatingBadgeBottom.icon}
            </div>
          )}
          <div className="min-w-0">
            <span className="text-xs font-black text-slate-900 block leading-tight truncate">
              {floatingBadgeBottom.title}
            </span>
            {floatingBadgeBottom.subtitle && (
              <span className="text-[10px] font-semibold text-emerald-700 block truncate mt-0.5">
                {floatingBadgeBottom.subtitle}
              </span>
            )}
          </div>
        </motion.div>
      )}

      {/* Physics Gravity Contact Shadow */}
      <div className="absolute -bottom-4 w-[75%] h-4 bg-slate-900/25 blur-lg rounded-full pointer-events-none" />
    </div>
  );
}
