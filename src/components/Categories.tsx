"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

interface CategoryItem {
  id: string;
  image: string;
  name: string;
  desc: string;
  icon: LucideIcon;
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

  useEffect(() => {
    if (!selectedCategory) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedCategory(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedCategory]);

  return (
    <section id="categorias" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t("tag")} title={t("title")} description={t("subtitle")} />

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-10">
          {categoriesList.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => setSelectedCategory(category)}
                className="focus-ring group w-full text-left rounded-2xl"
              >
                <div data-solid className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8e1d8]">
                  <img
                    src={category.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {category.popular && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F2B01E] text-xs font-bold text-ink">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {t("popular")}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink">{category.name}</h3>
                <p className="mt-1.5 text-base leading-relaxed font-medium text-ink-soft">{category.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-bold text-ink underline decoration-accent decoration-2 underline-offset-[6px] group-hover:decoration-[3px]">
                  {t("view_offers")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-extrabold text-ink">{t("cta_title")}</h3>
          <p className="mt-3 text-lg font-medium leading-relaxed text-ink-soft">{t("cta_desc")}</p>
          <a href="#descargar" className="btn btn-primary mt-6">
            <Plus className="w-4 h-4" />
            {t("cta_button")}
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            data-solid
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(43,33,26,0.55)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="category-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden rounded-3xl bg-[#FFFDF9] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="focus-ring absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFDF9] text-ink shadow-md"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <img src={selectedCategory.image} alt="" className="w-full h-40 object-cover shrink-0" />

              <div className="p-6 overflow-y-auto">
                <p className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-ink-soft">
                  <MapPin className="w-4 h-4" /> Santa Cruz de la Sierra
                  <span aria-hidden="true">·</span>
                  <Clock className="w-4 h-4" /> Disponibles hoy
                </p>
                <h3 id="category-modal-title" className="mt-1 text-2xl font-extrabold text-ink">
                  {selectedCategory.name}
                </h3>

                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-sm font-bold uppercase tracking-wider text-ink-soft">Precio de referencia</p>
                  <p className="mt-1 text-lg font-bold text-ink">{selectedCategory.priceRange}</p>
                  <p className="mt-1 text-sm text-ink-soft">El precio final lo acuerdas directo con el trabajador.</p>
                </div>

                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-sm font-bold uppercase tracking-wider text-ink-soft">Lo que más se pide</p>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {selectedCategory.popularJobs.map((job) => (
                      <li key={job} className="flex items-center gap-2 text-base text-ink">
                        <CheckCircle2 className="w-4 h-4 text-accent-strong shrink-0" />
                        {job}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 border-t border-line pt-4">
                  <p className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-ink-soft">
                    Trabajadores de ejemplo
                    <span className="flex items-center gap-1 normal-case tracking-normal text-[#15803D]">
                      <ShieldCheck className="w-4 h-4" /> Verificados
                    </span>
                  </p>
                  <ul className="mt-3 flex flex-col divide-y divide-[rgba(43,33,26,0.12)]">
                    {selectedCategory.sampleWorkers.map((worker) => (
                      <li key={worker.name} className="py-3 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <img src={worker.avatar} alt="" className="w-11 h-11 rounded-full object-cover shrink-0" />
                          <div className="min-w-0">
                            <p className="text-base font-bold text-ink truncate">{worker.name}</p>
                            <p className="text-sm text-ink-soft truncate">{worker.specialty}</p>
                            <p className="mt-0.5 flex items-center gap-2 text-sm text-ink-soft">
                              <span className="flex items-center gap-0.5 font-semibold text-ink">
                                <Star className="w-3.5 h-3.5 fill-[#F2B01E] text-[#F2B01E]" />
                                {worker.rating} ({worker.reviews})
                              </span>
                              <span aria-hidden="true">·</span>
                              {worker.distance}
                            </p>
                          </div>
                        </div>
                        <p className="text-right shrink-0">
                          <span className="block text-sm font-bold text-ink">Desde {worker.priceFrom}</span>
                          <span className="text-xs text-ink-soft">por trabajo</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 sm:p-5 border-t border-line flex gap-3">
                <a href="#descargar" onClick={() => setSelectedCategory(null)} className="btn btn-primary flex-1">
                  Pedir este servicio en la app
                </a>
                <button type="button" onClick={() => setSelectedCategory(null)} className="btn btn-secondary">
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
