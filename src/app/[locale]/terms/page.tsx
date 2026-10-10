"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 text-slate-700">
      <Navbar activeRole="client" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] rounded-3xl p-8 sm:p-12 shadow-sm">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Términos de Servicio</h1>
          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              Bienvenido a Chamba App. Al utilizar nuestra plataforma, aceptas estos Términos de Servicio. Lee cuidadosamente antes de acceder a nuestros servicios.
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Uso de la Plataforma</h2>
            <p>
              Chamba App es una plataforma que conecta a clientes que buscan servicios locales con trabajadores independientes (chamberos). Nosotros no proveemos los servicios directamente, ni empleamos a los trabajadores.
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Obligaciones del Usuario</h2>
            <p>
              Los usuarios deben proporcionar información precisa, mantener la confidencialidad de su cuenta y utilizar la plataforma de manera legal y respetuosa.
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Pagos y Tarifas</h2>
            <p>
              El pago de los servicios se realiza directamente entre el cliente y el trabajador. Chamba no cobra comisiones por las transacciones realizadas fuera de la aplicación.
            </p>
            <p className="mt-8 text-xs text-slate-400">Última actualización: 15 de Junio de 2026</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
