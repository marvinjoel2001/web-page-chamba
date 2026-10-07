"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Paintbrush,
  Droplet,
  Zap,
  Leaf,
  Truck,
  Sparkles,
  Wrench,
  Hammer,
  Settings,
  Layers,
  TrendingUp,
  Plus,
  ArrowRight,
  X,
  Star,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface CategoryItem {
  id: string;
  image: string;
  name: string;
  desc: string;
  icon: any;
  iconWrap: string;
  popular: boolean;
  priceRange: string;
  popularJobs: string[];
  sampleWorkers: {
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
    distance: string;
    priceFrom: string;
    specialty: string;
  }[];
}

export default function Categories() {
  const t = useTranslations("Categories");
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

  const categoriesList: CategoryItem[] = [
    {
      id: "pintura",
      image: "/images/categories/pintura.jpg",
      name: t("cat_1_name"),
      desc: t("cat_1_desc"),
      icon: Paintbrush,
      iconWrap: "bg-purple-100 border-purple-200 text-purple-700",
      popular: true,
      priceRange: "Desde 50 Bs / ambiente o por metro",
      popularJobs: ["Pintura interior de casas", "Fachadas y exteriores", "Impermeabilización de techos"],
      sampleWorkers: [
        {
          name: "Carlos Méndez",
          avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=150&auto=format&fit=crop&q=80",
          rating: 4.9,
          reviews: 42,
          distance: "A 1.2 km de ti",
          priceFrom: "60 Bs",
          specialty: "Pintura interior y empastado",
        },
        {
          name: "Luis Alberto Roca",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          rating: 4.8,
          reviews: 35,
          distance: "A 2.5 km de ti",
          priceFrom: "50 Bs",
          specialty: "Acabados finos y texturados",
        },
      ],
    },
    {
      id: "plomeria",
      image: "/images/categories/plomeria.jpg",
      name: t("cat_2_name"),
      desc: t("cat_2_desc"),
      icon: Droplet,
      iconWrap: "bg-blue-100 border-blue-200 text-blue-700",
      popular: true,
      priceRange: "Desde 60 Bs por reparación rápida",
      popularJobs: ["Fugas de agua y grifería", "Instalación de tanques y bombas", "Destranque de cañerías"],
      sampleWorkers: [
        {
          name: "Jorge Saucedo",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          rating: 5.0,
          reviews: 58,
          distance: "A 0.9 km de ti",
          priceFrom: "70 Bs",
          specialty: "Plomería general y emergencias",
        },
        {
          name: "Milton Vargas",
          avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
          rating: 4.9,
          reviews: 29,
          distance: "A 1.8 km de ti",
          priceFrom: "60 Bs",
          specialty: "Bombas de agua y termotanques",
        },
      ],
    },
    {
      id: "electricidad",
      image: "/images/categories/electricidad.jpg",
      name: t("cat_3_name"),
      desc: t("cat_3_desc"),
      icon: Zap,
      iconWrap: "bg-amber-100 border-amber-200 text-amber-700",
      popular: true,
      priceRange: "Desde 70 Bs por punto o diagnóstico",
      popularJobs: ["Cortocircuitos y disyuntores", "Instalación de luminarias LED", "Cableado estructurado"],
      sampleWorkers: [
        {
          name: "Mario Gutiérrez",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
          rating: 4.9,
          reviews: 64,
          distance: "A 1.4 km de ti",
          priceFrom: "80 Bs",
          specialty: "Electricidad domiciliaria e industrial",
        },
        {
          name: "Andrés Justiniano",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          rating: 4.8,
          reviews: 31,
          distance: "A 2.1 km de ti",
          priceFrom: "70 Bs",
          specialty: "Instalación de tableros y duchas",
        },
      ],
    },
    {
      id: "jardineria",
      image: "/images/categories/jardineria.jpg",
      name: t("cat_4_name"),
      desc: t("cat_4_desc"),
      icon: Leaf,
      iconWrap: "bg-emerald-100 border-emerald-200 text-emerald-700",
      popular: false,
      priceRange: "Desde 50 Bs por corte de césped",
      popularJobs: ["Mantenimiento de jardines", "Poda de árboles", "Sistemas de riego"],
      sampleWorkers: [
        {
          name: "René Colque",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
          rating: 4.9,
          reviews: 37,
          distance: "A 1.7 km de ti",
          priceFrom: "50 Bs",
          specialty: "Paisajismo y fumigación de césped",
        },
      ],
    },
    {
      id: "transporte",
      image: "/images/categories/transporte.jpg",
      name: t("cat_5_name"),
      desc: t("cat_5_desc"),
      icon: Truck,
      iconWrap: "bg-sky-100 border-sky-200 text-sky-700",
      popular: false,
      priceRange: "Desde 100 Bs por viaje local",
      popularJobs: ["Mudanzas completas", "Fletes express de muebles", "Carga pesada"],
      sampleWorkers: [
        {
          name: "Víctor Hugo Paz",
          avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
          rating: 4.8,
          reviews: 45,
          distance: "A 2.0 km de ti",
          priceFrom: "120 Bs",
          specialty: "Camioneta cerrada con ayudantes",
        },
      ],
    },
    {
      id: "limpieza",
      image: "/images/categories/limpieza.jpg",
      name: t("cat_6_name"),
      desc: t("cat_6_desc"),
      icon: Sparkles,
      iconWrap: "bg-pink-100 border-pink-200 text-pink-700",
      popular: true,
      priceRange: "Desde 80 Bs por media jornada",
      popularJobs: ["Limpieza profunda de hogar", "Post-construcción", "Lavado de tapices y muebles"],
      sampleWorkers: [
        {
          name: "María Rosario Vaca",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          rating: 5.0,
          reviews: 73,
          distance: "A 0.8 km de ti",
          priceFrom: "90 Bs",
          specialty: "Limpieza profunda y desinfección",
        },
        {
          name: "Rosa Elena Pinto",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          rating: 4.9,
          reviews: 51,
          distance: "A 1.5 km de ti",
          priceFrom: "80 Bs",
          specialty: "Mantenimiento semanal de casas",
        },
      ],
    },
    {
      id: "construccion",
      image: "/images/categories/construccion.jpg",
      name: t("cat_7_name"),
      desc: t("cat_7_desc"),
      icon: Wrench,
      iconWrap: "bg-rose-100 border-rose-200 text-rose-700",
      popular: false,
      priceRange: "Desde 120 Bs por día / presupuesto",
      popularJobs: ["Revoque y muros", "Colocado de cerámica y porcelanato", "Arreglo de techos"],
      sampleWorkers: [
        {
          name: "Hernán Mamani",
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
          rating: 4.9,
          reviews: 39,
          distance: "A 2.3 km de ti",
          priceFrom: "130 Bs",
          specialty: "Albañilería y colocación de piso",
        },
      ],
    },
    {
      id: "carpinteria",
      image: "/images/categories/carpinteria.jpg",
      name: t("cat_8_name"),
      desc: t("cat_8_desc"),
      icon: Hammer,
      iconWrap: "bg-orange-100 border-orange-200 text-orange-700",
      popular: false,
      priceRange: "Desde 70 Bs por ajuste o reparación",
      popularJobs: ["Armado de muebles en melamina", "Reparación de puertas y cerraduras", "Barnizado"],
      sampleWorkers: [
        {
          name: "Gonzalo Flores",
          avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80",
          rating: 4.8,
          reviews: 26,
          distance: "A 1.9 km de ti",
          priceFrom: "80 Bs",
          specialty: "Muebles a medida y refacciones",
        },
      ],
    },
    {
      id: "mecanica",
      image: "/images/categories/mecanica.jpg",
      name: t("cat_9_name"),
      desc: t("cat_9_desc"),
      icon: Settings,
      iconWrap: "bg-indigo-100 border-indigo-200 text-indigo-700",
      popular: false,
      priceRange: "Desde 80 Bs auxilio o revisión",
      popularJobs: ["Auxilio de batería y arranque", "Cambio de pastillas de freno", "Mantenimiento preventivo"],
      sampleWorkers: [
        {
          name: "Daniel Mercado",
          avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
          rating: 4.9,
          reviews: 34,
          distance: "A 2.6 km de ti",
          priceFrom: "90 Bs",
          specialty: "Auxilio mecánico a domicilio",
        },
      ],
    },
    {
      id: "general",
      image: "/images/categories/general.jpg",
      name: t("cat_10_name"),
      desc: t("cat_10_desc"),
      icon: Layers,
      iconWrap: "bg-slate-100 border-slate-200 text-slate-700",
      popular: false,
      priceRange: "Desde 40 Bs por labor específica",
      popularJobs: ["Instalación de cortinas y cuadros", "Arreglos menores de hogar", "Ayudante por día"],
      sampleWorkers: [
        {
          name: "Pedro Arteaga",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
          rating: 4.9,
          reviews: 48,
          distance: "A 1.1 km de ti",
          priceFrom: "50 Bs",
          specialty: "Handyman / Arreglos del hogar",
        },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  return (
    <section id="categorias" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categoriesList.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white hover:bg-slate-50/70 border border-slate-200/90 hover:border-purple-400 rounded-3xl overflow-hidden transition-all duration-300 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between cursor-pointer"
              >
                {/* Real Worker Photo Header */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Icon badge floating top-left */}
                  <div
                    className={`absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md border shadow-lg transition-transform duration-300 group-hover:scale-110 ${category.iconWrap}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Popular badge */}
                  {category.popular && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400 border border-amber-300 text-[10px] font-black text-slate-950 uppercase tracking-wider shadow-md">
                      <TrendingUp className="w-3 h-3 text-slate-950" />
                      {t("popular")}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {category.desc}
                    </p>
                  </div>

                  {/* Interactive Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600 group-hover:text-purple-700 transition-colors">
                    <span className="flex items-center gap-1">
                      {t("view_offers")}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-purple-50 group-hover:bg-purple-600 text-purple-600 group-hover:text-white flex items-center justify-center transition-all group-hover:translate-x-1 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Open-ended CTA card: any task can be posted */}
          <motion.a
            href="#descargar"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl p-6 flex flex-col justify-between items-start text-left bg-gradient-to-br from-purple-600 to-purple-800 border border-purple-500/60 shadow-xl shadow-purple-600/25 hover:shadow-2xl hover:shadow-purple-600/35 transition-all duration-300 min-h-[300px]"
          >
            <div className="absolute -right-6 -top-6 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-5 group-hover:rotate-90 transition-transform duration-300 text-white">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("cta_title")}
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                {t("cta_desc")}
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2.5 rounded-full border border-white/20 transition-all">
              <span>{t("cta_button")}</span>
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Category Offers & Workers Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden w-full max-w-xl shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 z-20 text-white bg-black/40 hover:bg-black/70 w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Cover Image */}
              <div className="relative w-full h-40 shrink-0 overflow-hidden">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold bg-purple-600/90 px-2.5 py-0.5 rounded-full">
                      Santa Cruz de la Sierra
                    </span>
                    <span className="text-xs font-medium text-slate-200 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Disponibles hoy
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{selectedCategory.name}</h3>
                </div>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-5">
                
                {/* Price Reference Box */}
                <div className="bg-purple-50/80 border border-purple-200/70 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-purple-700 font-bold block uppercase tracking-wide">
                      Tarifa de referencia
                    </span>
                    <span className="text-sm font-extrabold text-slate-900">
                      {selectedCategory.priceRange}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-purple-700 bg-white px-2.5 py-1 rounded-full border border-purple-200 shadow-xs">
                    Trato directo
                  </span>
                </div>

                {/* Popular Jobs tags */}
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Servicios más solicitados en esta categoría:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory.popularJobs.map((job, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200/80"
                      >
                        ✓ {job}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Verified Workers Sample */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Profesionales destacados cerca:
                    </h4>
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verificados
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {selectedCategory.sampleWorkers.map((worker, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center justify-between shadow-xs hover:border-purple-300 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={worker.avatar}
                            alt={worker.name}
                            className="w-11 h-11 rounded-full object-cover border border-purple-200"
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-bold text-slate-900">{worker.name}</span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                            </div>
                            <span className="text-xs text-slate-500 block">{worker.specialty}</span>
                            <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500">
                              <span className="font-bold text-amber-500 flex items-center gap-0.5">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                {worker.rating} ({worker.reviews})
                              </span>
                              <span>·</span>
                              <span className="flex items-center gap-0.5 text-slate-500">
                                <MapPin className="w-3 h-3 text-purple-600" />
                                {worker.distance}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-extrabold text-purple-700 block">
                            Desde {worker.priceFrom}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">por trabajo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/70 flex items-center gap-3">
                <a
                  href="#descargar"
                  onClick={() => setSelectedCategory(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm text-center shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  Solicitar cotizaciones en la App
                </a>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
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
