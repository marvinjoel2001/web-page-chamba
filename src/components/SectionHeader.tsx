import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
}

/** Encabezado común de sección: texto directo sobre el video, sin caja detrás. */
export default function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.12em] text-ink-soft ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed font-medium text-ink-soft text-pretty">{description}</p>
      )}
    </div>
  );
}
