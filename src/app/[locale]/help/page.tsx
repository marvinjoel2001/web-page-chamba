"use client";

import React, { useState } from "react";
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

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportStatus, setReportStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportStatus("submitting");
    setTimeout(() => {
      setReportStatus("success");
      setTimeout(() => {
        setIsReportModalOpen(false);
        setReportStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 text-slate-700">
      <Navbar activeRole="client" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Centro de Ayuda</h1>
        <p className="text-slate-600 mb-12">Estamos aquí para ayudarte. Encuentra respuestas a las preguntas más frecuentes o contáctanos.</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 rounded-2xl flex flex-col gap-4">
            <Mail className="w-8 h-8 text-purple-600" />
            <h3 className="text-lg font-bold text-slate-900">Soporte Técnico</h3>
            <p className="text-sm text-slate-600">¿Tienes problemas con la aplicación? Escríbenos directamente y te responderemos en menos de 24 horas.</p>
            <a href="mailto:soporte@chamba.app" className="text-purple-600 text-sm font-semibold hover:underline mt-auto">soporte@chamba.app</a>
          </div>
          <div className="bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 rounded-2xl flex flex-col gap-4">
            <ShieldAlert className="w-8 h-8 text-amber-500" />
            <h3 className="text-lg font-bold text-slate-900">Reportar un problema</h3>
            <p className="text-sm text-slate-600">Si un usuario o trabajador incumplió nuestras normas de comunidad, por favor repórtalo inmediatamente.</p>
            <button 
              onClick={() => setIsReportModalOpen(true)}
              className="text-amber-600 text-sm font-semibold hover:underline mt-auto text-left cursor-pointer"
            >
              Llenar formulario de reporte
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-xl shadow-xs">
              <h4 className="text-base font-semibold text-slate-900 flex gap-3 items-start">
                <MessageCircleQuestion className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                {faq.q}
              </h4>
              <p className="text-sm text-slate-600 mt-2 ml-8 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Report Modal */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative">
            <button 
              onClick={() => setIsReportModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>
            
            {reportStatus === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200 text-emerald-600">
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">¡Reporte Enviado!</h3>
                <p className="text-slate-600 text-sm">Gracias por ayudarnos a mantener la comunidad segura. Revisaremos tu caso lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Reportar Problema</h3>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">Tipo de Problema</label>
                  <select required className="bg-white border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 shadow-sm">
                    <option value="">Selecciona una opción</option>
                    <option value="usuario">Comportamiento inadecuado de un usuario</option>
                    <option value="estafa">Posible estafa o fraude</option>
                    <option value="bug">Falla técnica en la aplicación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">Tu correo electrónico</label>
                  <input required type="email" placeholder="Para poder contactarte..." className="bg-white border border-slate-200 rounded-xl p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 shadow-sm" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">Descripción detallada</label>
                  <textarea required rows={4} placeholder="Cuéntanos qué sucedió exactamente..." className="bg-white border border-slate-200 rounded-xl p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 shadow-sm resize-none" />
                </div>

                <button 
                  type="submit" 
                  disabled={reportStatus === "submitting"}
                  className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all disabled:opacity-50"
                >
                  {reportStatus === "submitting" ? "Enviando..." : "Enviar Reporte"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
