import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkerRegistrationForm from "@/components/WorkerRegistrationForm";
import { Wrench, ShieldCheck, DollarSign, Clock } from "lucide-react";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] font-sans selection:bg-brand-primary selection:text-white antialiased">
      {/* 
        We pass a fixed activeRole if your Navbar requires it.
        We can just pass "worker" so the Navbar reflects the worker vibe.
      */}
      <Navbar activeRole="worker" setActiveRole={() => {}} />

      <main className="flex-1 relative pt-24 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EAB308]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Copy & Benefits */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full text-brand-primary text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                  </span>
                  <span>Únete a la red #1 de profesionales</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Más clientes, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-primary">
                    mejores ingresos.
                  </span>
                </h1>
                
                <p className="text-lg text-slate-300 max-w-xl">
                  Chamba te conecta con personas en tu ciudad que necesitan tus servicios. Trabaja cuando quieras, cobra lo justo y construye tu reputación.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
                    <DollarSign className="h-6 w-6 text-brand-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Cobra directo</h3>
                    <p className="text-sm text-slate-400">Sin intermediarios abusivos. El pago es tuyo.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EAB308]/10 flex items-center justify-center border border-[#EAB308]/20">
                    <Clock className="h-6 w-6 text-[#EAB308]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Flexibilidad total</h3>
                    <p className="text-sm text-slate-400">Acepta trabajos solo cuando tengas tiempo libre.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <ShieldCheck className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Clientes verificados</h3>
                    <p className="text-sm text-slate-400">Trabaja con seguridad y confianza en tu ciudad.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Wrench className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Múltiples oficios</h3>
                    <p className="text-sm text-slate-400">Plomería, limpieza, albañilería, todo en un lugar.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="lg:pl-8 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent blur-3xl rounded-full" />
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
