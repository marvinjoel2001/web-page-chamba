"use client";

import { Users, ExternalLink, ShieldCheck, Zap } from "lucide-react";

const AGENCY_URL = "https://agency-chamba.vercel.app/";

export default function AgencyBanner() {
  const pillars = [
    { icon: <Users className="w-5 h-5" />, label: "Varios trabajadores en una cuenta" },
    { icon: <Zap className="w-5 h-5" />, label: "Asignas trabajos en vivo" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Cobros claros" },
  ];

  return (
    <section id="agencias" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-y-2 border-line py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-ink">
              ¿Tienes una empresa o agencia de servicios?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed font-medium text-ink-soft">
              Con Chamba Agencias manejas a todo tu equipo desde un panel web: recibes pedidos, los asignas a tus
              trabajadores y controlas los cobros.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {pillars.map((p) => (
                <li key={p.label} className="flex items-center gap-2 text-base font-semibold text-ink">
                  <span className="text-accent-strong transition-colors duration-300" aria-hidden="true">
                    {p.icon}
                  </span>
                  {p.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-2">
            <a href={AGENCY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Entrar a Chamba Agencias
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-sm font-medium text-ink-soft">agency-chamba.vercel.app</span>
          </div>
        </div>
      </div>
    </section>
  );
}
