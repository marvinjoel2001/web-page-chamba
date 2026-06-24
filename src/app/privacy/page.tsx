"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-[#090d16] min-h-screen pt-24 text-slate-300">
      <Navbar activeRole="client" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Políticas de Privacidad</h1>
        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            En Chamba App, valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Información que recopilamos</h2>
          <p>
            Recopilamos información que nos proporcionas directamente al crear una cuenta, como tu nombre, número de teléfono, ubicación y datos del perfil. También recopilamos datos de uso y ubicación en tiempo real cuando la app está activa para facilitar las conexiones locales.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Uso de la información</h2>
          <p>
            Usamos tu información para operar, mantener y mejorar nuestros servicios. Esto incluye conectar clientes con trabajadores cercanos, procesar verificaciones de seguridad y enviar notificaciones importantes.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Compartir información</h2>
          <p>
            No vendemos tu información personal. Solo compartimos la información necesaria (como nombre y ubicación) entre el cliente y el trabajador cuando se acepta una solicitud de trabajo.
          </p>
          <p className="mt-8 text-xs text-slate-500">Última actualización: 15 de Junio de 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
