"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  MapPin,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  DollarSign,
  Compass,
  Award,
  X,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface FeaturesProps {
  activeRole?: "client" | "worker";
}

interface FeatureCardItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge: string;
  highlights: string[];
  ctaText: string;
}

export default function Features({ activeRole = "client" }: FeaturesProps) {
  const t = useTranslations("Features");
  const [selectedCard, setSelectedCard] = useState<FeatureCardItem | null>(null);

  const clientCards: FeatureCardItem[] = [
    {
      id: "card_1",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      title: t("card_1_title"),
      desc: t("card_1_desc"),
      badge: "Perfiles Verificados",
      highlights: [
        "Filtra especialistas por oficio, valoraciones de vecinos y años de experiencia.",
        "Revisa fotos reales de trabajos terminados antes de coordinar.",
        "Compara opciones y elige al profesional que mejor se adapte a tu presupuesto.",
      ],
      ctaText: "Ver profesionales en la App",
    },
    {
      id: "card_2",
      icon: <MapPin className="w-5 h-5 text-purple-600" />,
      title: t("card_2_title"),
      desc: t("card_2_desc"),
      badge: "Geolocalización en Tiempo Real",
      highlights: [
        "Encuentra ayuda en tu mismo barrio o zona (Santa Cruz de la Sierra y ciudades conectadas).",
        "Menor tiempo de espera: el profesional llega más rápido porque está cerca de ti.",
        "Mapa interactivo con radio de cobertura transparente y sin costos ocultos.",
      ],
      ctaText: "Explorar zona en la App",
    },
    {
      id: "card_3",
      icon: <MessageSquare className="w-5 h-5 text-purple-600" />,
      title: t("card_3_title"),
      desc: t("card_3_desc"),
      badge: "Trato Directo",
      highlights: [
        "Chat en tiempo real para describir el problema y compartir fotos del trabajo.",
        "Pacta el precio final con anticipación, sin intermediarios ni comisiones abusivas.",
        "Tú y el trabajador deciden el método de pago más cómodo (efectivo, QR o transferencia).",
      ],
      ctaText: "Coordinar servicio en la App",
    },
    {
      id: "card_4",
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      title: t("card_4_title"),
      desc: t("card_4_desc"),
      badge: "Garantía de Confianza",
      highlights: [
        "Identidad validada de cada trabajador mediante documento oficial.",
        "Sistema de calificaciones 100% verificadas por clientes reales tras cada servicio.",
        "Canal de soporte y resolución de dudas activo 24/7 para tu tranquilidad.",
      ],
      ctaText: "Conocer medidas de seguridad",
    },
  ];

  const workerCards: FeatureCardItem[] = [
    {
      id: "worker_card_1",
      icon: <DollarSign className="w-5 h-5 text-purple-600" />,
      title: "Gana a tu propio ritmo",
      desc: "Tú defines tus tarifas por trabajo o por hora, recibiendo el 100% de tus cobros acordados.",
      badge: "Ingresos Transparentes",
      highlights: [
        "Sin deducciones sorpresivas: el dinero que acuerdas con el cliente es tuyo.",
        "Trabaja en tus días libres o a tiempo completo según tu disponibilidad.",
        "Pagos inmediatos directos de parte del cliente al finalizar la labor.",
      ],
      ctaText: "Registrarme como trabajador",
    },
    {
      id: "worker_card_2",
      icon: <Compass className="w-5 h-5 text-purple-600" />,
      title: "Chambas en tu zona",
      desc: "Recibe solicitudes de clientes cercanos en tiempo real con mapa y detalles precisos.",
      badge: "Menos Traslados",
      highlights: [
        "Ahorra tiempo y combustible aceptando trabajos cerca de tu domicilio.",
        "Notificaciones instantáneas en tu celular cada vez que alguien necesita tu oficio.",
        "Visualiza ubicación exacta, fotos de la reparación y presupuesto estimado.",
      ],
      ctaText: "Ver solicitudes cercanas",
    },
    {
      id: "worker_card_3",
      icon: <MessageSquare className="w-5 h-5 text-purple-600" />,
      title: "Trato directo y sin vueltas",
      desc: "Chatea con el cliente, envía cotizaciones y coordina directamente sin intermediarios.",
      badge: "Comunicación Clara",
      highlights: [
        "Conversa con el cliente antes de ir para saber exactamente qué materiales necesitas.",
        "Envía cotizaciones formales desde la misma aplicación con un clic.",
        "Historial claro de acuerdos para evitar confusiones o reclamos.",
      ],
      ctaText: "Descargar App de Chambero",
    },
    {
      id: "worker_card_4",
      icon: <Award className="w-5 h-5 text-purple-600" />,
      title: "Construye tu reputación",
      desc: "Acumula reseñas de 5 estrellas, perfil verificado y haz crecer tu cartera de clientes.",
      badge: "Insignia Verificada",
      highlights: [
        "Insignia oficial de profesional verificado para ganar más confianza.",
        "Tus buenas valoraciones te posicionan en los primeros lugares de búsqueda.",
        "Crea un portafolio fotográfico digital de tus mejores trabajos.",
      ],
      ctaText: "Crear mi perfil profesional",
    },
  ];

  const currentCards = activeRole === "client" ? clientCards : workerCards;

  return (
    <section id="features" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {activeRole === "client" ? (
              <>
                {t("title_part1")}{" "}
                <span className="text-purple-600 font-black">
                  {t("title_part2")}
                </span>
              </>
            ) : (
              <>
                Oportunidades reales.{" "}
                <span className="text-purple-600 font-black">
                  Ingresos directos.
                </span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {activeRole === "client"
              ? t("subtitle")
              : "Conectamos tu talento con clientes que buscan servicios en tu zona todos los días."}
          </p>
        </motion.div>

        {/* Main Showcase: Center Image with 4 Interactive Clickable Cards */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-8">
          
          {/* Left Column Cards (Cards 1 & 2) */}
          <div className="w-full lg:w-[280px] xl:w-[320px] flex flex-col gap-5 sm:gap-6 z-20 order-2 lg:order-1">
            {/* Card 1 */}
            <motion.div
              key={currentCards[0].id}
              onClick={() => setSelectedCard(currentCards[0])}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-md hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-100 group-hover:border-purple-200 transition-colors">
                    {currentCards[0].icon}
                  </div>
                  <span className="text-[11px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                    Ver detalle
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-purple-700 transition-colors">
                  {currentCards[0].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentCards[0].desc}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold text-purple-600">
                <span>Más información</span>
                <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              key={currentCards[1].id}
              onClick={() => setSelectedCard(currentCards[1])}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-md hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-100 group-hover:border-purple-200 transition-colors">
                    {currentCards[1].icon}
                  </div>
                  <span className="text-[11px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                    Ver detalle
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-purple-700 transition-colors">
                  {currentCards[1].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentCards[1].desc}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold text-purple-600">
                <span>Más información</span>
                <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          </div>

          {/* Center Column: Workers Photo Showcase */}
          <div className="w-full lg:flex-1 max-w-[580px] xl:max-w-[640px] flex justify-center items-center relative z-10 order-1 lg:order-2">
            <div className="relative w-full rounded-2xl overflow-hidden drop-shadow-md">
              <img
                src="/images/chamba_workers_feathered.png"
                alt="Chamba Profesionales Reales"
                className={`w-full h-auto object-contain max-h-[440px] mx-auto select-none transition-opacity duration-200 ${
                  activeRole === "client" ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              />
              <img
                src="/images/feature2.png"
                alt="Chambero Profesional"
                className={`w-full h-auto object-contain max-h-[440px] mx-auto select-none rounded-2xl transition-opacity duration-200 ${
                  activeRole === "worker" ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              />
            </div>
          </div>

          {/* Right Column Cards (Cards 3 & 4) */}
          <div className="w-full lg:w-[280px] xl:w-[320px] flex flex-col gap-5 sm:gap-6 z-20 order-3">
            {/* Card 3 */}
            <motion.div
              key={currentCards[2].id}
              onClick={() => setSelectedCard(currentCards[2])}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-md hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-100 group-hover:border-purple-200 transition-colors">
                    {currentCards[2].icon}
                  </div>
                  <span className="text-[11px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                    Ver detalle
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-purple-700 transition-colors">
                  {currentCards[2].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentCards[2].desc}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold text-purple-600">
                <span>Más información</span>
                <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              key={currentCards[3].id}
              onClick={() => setSelectedCard(currentCards[3])}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-md hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-100 group-hover:border-purple-200 transition-colors">
                    {currentCards[3].icon}
                  </div>
                  <span className="text-[11px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                    Ver detalle
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-purple-700 transition-colors">
                  {currentCards[3].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentCards[3].desc}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold text-purple-600">
                <span>Más información</span>
                <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 w-full max-w-lg shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badge & Icon Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shadow-xs">
                  {selectedCard.icon}
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60">
                    <Sparkles className="w-3 h-3 text-purple-600" />
                    {selectedCard.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    {selectedCard.title}
                  </h3>
                </div>
              </div>

              {/* Main Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                {selectedCard.desc}
              </p>

              {/* Key Highlights Checklist */}
              <div className="space-y-3 bg-slate-50/80 border border-slate-100 rounded-2xl p-4 sm:p-5 mb-6">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  ¿Cómo funciona en la práctica?
                </h4>
                {selectedCard.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="#descargar"
                  onClick={() => setSelectedCard(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm text-center shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  {selectedCard.ctaText}
                </a>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
