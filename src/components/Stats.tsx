"use client";

import { useTranslations } from "next-intl";
import type { Role } from "@/lib/role";

interface StatsProps {
  activeRole: Role;
}

/** Cifras grandes separadas por líneas, sin tarjetas. */
export default function Stats({ activeRole }: StatsProps) {
  const t = useTranslations("Stats");
  const statsList = [
    { value: "+15.000", label: t("stat_1_label"), desc: t("stat_1_desc") },
    { value: "4,9 ★", label: t("stat_2_label"), desc: t("stat_2_desc") },
    { value: "< 5 min", label: t("stat_3_label"), desc: t("stat_3_desc") },
    activeRole === "client"
      ? { value: "0 Bs", label: t("stat_4_label"), desc: t("stat_4_desc") }
      : {
          value: "100%",
          label: "De tu cobro es para ti",
          desc: "El cliente te paga directo el monto acordado, sin descuentos.",
        },
  ];

  return (
    <section id="estadisticas" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y-2 border-line">
          {statsList.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-8 sm:px-6 flex flex-col ${
                index > 0 ? "border-t-2 sm:border-t-0 border-line" : ""
              } ${index % 2 === 1 ? "sm:border-l-2" : ""} ${index > 1 ? "sm:border-t-2 lg:border-t-0" : ""} ${
                index === 2 ? "lg:border-l-2" : ""
              }`}
            >
              <dt className="order-2 mt-2 text-lg font-bold text-ink">{stat.label}</dt>
              <dd className="order-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">{stat.value}</dd>
              <dd className="order-3 mt-2 text-base leading-relaxed font-medium text-ink-soft">{stat.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
