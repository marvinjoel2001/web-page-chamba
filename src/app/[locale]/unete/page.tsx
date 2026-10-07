import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkerRegistrationForm from "@/components/WorkerRegistrationForm";
import { Wrench, ShieldCheck, DollarSign, Clock } from "lucide-react";

export default async function JoinUsPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans selection:bg-purple-600 selection:text-white antialiased">
      {/* 
        We pass a fixed activeRole if your Navbar requires it.
      */}
      <Navbar activeRole="worker" />

      <main className="flex-1 relative pt-24 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Copy & Benefits */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full text-purple-700 text-sm font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                  </span>
                  <span>Únete a la red #1 de profesionales</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                  Más clientes, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                    mejores ingresos.
                  </span>
                </h1>
                
                <p className="text-lg text-slate-600 max-w-xl">
                  Chamba te conecta con personas en tu ciudad que necesitan tus servicios. Trabaja cuando quieras, cobra lo justo y construye tu reputación.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-1">Cobra directo</h3>
                    <p className="text-sm text-slate-500">Sin intermediarios abusivos. El pago es tuyo.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-1">Flexibilidad total</h3>
                    <p className="text-sm text-slate-500">Acepta trabajos solo cuando tengas tiempo libre.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-200">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-1">Clientes verificados</h3>
                    <p className="text-sm text-slate-500">Trabaja con seguridad y confianza en tu ciudad.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-1">Múltiples oficios</h3>
                    <p className="text-sm text-slate-500">Plomería, limpieza, albañilería, todo en un lugar.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="lg:pl-8 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 to-transparent blur-3xl rounded-full" />
              <div className="relative z-10">
                <WorkerRegistrationForm />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
