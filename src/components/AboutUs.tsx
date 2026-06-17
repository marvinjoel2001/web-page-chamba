"use client";

import { motion } from "framer-motion";
import { Heart, Target, Lightbulb } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image & Founder Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Artistic Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent z-10" />
              {/* Photo placeholder or image */}
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <span className="text-slate-600 font-medium">Foto del Fundador</span>
                {/* <img src="/images/founder.jpg" alt="Marvin Joel Peña" className="w-full h-full object-cover opacity-80" /> */}
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-highlight text-xs font-semibold mb-3">
                  <Target className="w-3.5 h-3.5" /> Fundador & Creador
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight">Marvin Joel Peña</h3>
                <p className="text-slate-400 mt-1">Impulsando la economía local</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary rounded-full blur-[60px] opacity-40 z-0" />
          </motion.div>

          {/* Story Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-3">
              Nuestra Historia
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              De una necesidad real a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-highlight">una solución para todos</span>
            </h3>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Todo comenzó al observar mi propio entorno. Vi a personas talentosas y trabajadoras con dificultades para encontrar clientes de forma constante. Al mismo tiempo, veía a vecinos y amigos frustrados, perdiendo el tiempo intentando encontrar a alguien de confianza para un arreglo urgente en casa.
              </p>
              <p>
                Existía una brecha enorme entre la <span className="text-white font-semibold">necesidad inmediata</span> y el <span className="text-white font-semibold">talento local disponible</span>.
              </p>
              <p>
                Como creador, decidí que la tecnología debía servir para cerrar esa brecha. Así nació <strong className="text-brand-primary-light">Chamba</strong>. Mi objetivo no era solo crear una aplicación, sino construir una herramienta que empodere a las personas: permitiendo que los trabajadores independientes ofrezcan sus servicios a su propio ritmo, y que los clientes encuentren ayuda confiable en minutos, no en días.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Propósito</h4>
                  <p className="text-sm text-slate-400">Ayudar a crecer la economía de los barrios.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-highlight/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-brand-highlight" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visión</h4>
                  <p className="text-sm text-slate-400">Una comunidad donde encontrar trabajo sea simple.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
