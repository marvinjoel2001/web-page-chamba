"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      role: "client",
      name: "Carla Mendoza",
      title: "Cliente • La Paz",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      stars: 5,
      comment:
        "Tenía una fuga de agua urgente en la cocina un sábado por la noche. Publiqué en Chamba y a los 5 minutos Roberto me cotizó. Negociamos un precio justo por el chat y en media hora ya estaba solucionado. ¡Una salvación!",
    },
    {
      role: "worker",
      name: "Roberto Gómez",
      title: "Chambero (Pintura/Plomería)",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      stars: 5,
      comment:
        "El hecho de poder configurar mi radio de trabajo a 5km a la redonda me ha cambiado la vida. Ahorro tiempo y costos de transporte, y la negociación de tarifas directa me permite valorizar bien mi mano de obra.",
    },
    {
      role: "worker",
      name: "Elena Morales",
      title: "Chambera (Decoradora/Pintora)",
      photo: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6",
      stars: 5,
      comment:
        "Con Chamba he logrado conseguir clientes constantes en mi zona. La app es súper intuitiva, te notifica al instante y el perfil con reseñas me ayuda a generar confianza inmediata con nuevas personas.",
    },
    {
      role: "client",
      name: "Marcos Quispe",
      title: "Chambero (Electricista)",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      stars: 5,
      comment:
        "Antes dependía del boca a boca o de pegar anuncios en la calle. Ahora abro Chamba y veo ofertas de trabajo reales en mi vecindario todos los días. Mis ingresos mensuales han subido un 40%.",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-brand-teal/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Descubre las historias de clientes satisfechos y profesionales locales que impulsan su economía diaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-[#121824] hover:bg-[#161f30] border border-white/5 rounded-3xl p-6 transition-all duration-300 shadow-md flex flex-col justify-between"
            >
              {/* Decorative Quote Mark */}
              <Quote className="absolute right-6 top-6 w-8 h-8 text-white/5 group-hover:text-brand-orange/10 transition-colors" />

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-orange fill-brand-orange" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <img
                  src={rev.photo}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-teal transition-colors">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-400">{rev.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
