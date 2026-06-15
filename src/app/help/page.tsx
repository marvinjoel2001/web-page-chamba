"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircleQuestion, Mail, ShieldAlert } from "lucide-react";

export default function HelpPage() {
  const faqs = [
    {
      q: "¿Cómo publico un trabajo?",
      a: "Para publicar un trabajo, ve a la sección 'Explorar' de la aplicación, describe tu necesidad, elige la categoría, sube fotos y publica. ¡Es gratis!"
    },
    {
      q: "¿Cómo se paga al trabajador?",
      a: "El pago se realiza directamente entre tú y el trabajador (en efectivo o transferencia) una vez que el trabajo ha sido completado y estás satisfecho con los resultados."
    },
    {
      q: "¿Qué pasa si tengo un problema con un servicio?",
      a: "Si el servicio no fue completado como se acordó, puedes dejar una reseña detallada y contactarnos para que podamos investigar y tomar acciones sobre el perfil del trabajador."
    }
  ];

  return (
    <div className="bg-[#090d16] min-h-screen pt-24 text-slate-300">
      <Navbar activeRole="client" setActiveRole={() => {}} />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Centro de Ayuda</h1>
        <p className="text-slate-400 mb-12">Estamos aquí para ayudarte. Encuentra respuestas a las preguntas más frecuentes o contáctanos.</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl flex flex-col gap-4">
            <Mail className="w-8 h-8 text-brand-primary" />
            <h3 className="text-lg font-bold text-white">Soporte Técnico</h3>
            <p className="text-sm text-slate-400">¿Tienes problemas con la aplicación? Escríbenos directamente y te responderemos en menos de 24 horas.</p>
            <a href="mailto:soporte@chamba.app" className="text-brand-primary text-sm font-semibold hover:underline mt-auto">soporte@chamba.app</a>
          </div>
          <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl flex flex-col gap-4">
            <ShieldAlert className="w-8 h-8 text-brand-highlight" />
            <h3 className="text-lg font-bold text-white">Reportar un problema</h3>
            <p className="text-sm text-slate-400">Si un usuario o trabajador incumplió nuestras normas de comunidad, por favor repórtalo inmediatamente.</p>
            <button className="text-brand-highlight text-sm font-semibold hover:underline mt-auto text-left">Llenar formulario de reporte</button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#121824] border border-white/5 p-5 rounded-xl">
              <h4 className="text-base font-semibold text-white flex gap-3 items-start">
                <MessageCircleQuestion className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                {faq.q}
              </h4>
              <p className="text-sm text-slate-400 mt-2 ml-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
