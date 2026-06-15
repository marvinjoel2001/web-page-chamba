"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="bg-[#090d16] min-h-screen pt-24 text-slate-300">
      <Navbar activeRole="client" setActiveRole={() => {}} />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Términos de Servicio</h1>
        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            Bienvenido a Chamba App. Al utilizar nuestra plataforma, aceptas estos Términos de Servicio. Lee cuidadosamente antes de acceder a nuestros servicios.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Uso de la Plataforma</h2>
          <p>
            Chamba App es una plataforma que conecta a clientes que buscan servicios locales con trabajadores independientes (chamberos). Nosotros no proveemos los servicios directamente, ni empleamos a los trabajadores.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Obligaciones del Usuario</h2>
          <p>
            Los usuarios deben proporcionar información precisa, mantener la confidencialidad de su cuenta y utilizar la plataforma de manera legal y respetuosa.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Pagos y Tarifas</h2>
          <p>
            El pago de los servicios se realiza directamente entre el cliente y el trabajador. Chamba no cobra comisiones por las transacciones realizadas fuera de la aplicación.
          </p>
          <p className="mt-8 text-xs text-slate-500">Última actualización: 15 de Junio de 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
