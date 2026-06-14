"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

export default function Categories() {
  const categoriesList = [
    {
      id: "pintura",
      name: "Pintura",
      desc: "Pintado interior y exterior, retoques de fachadas y acabados.",
      icon: <Paintbrush className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "plomeria",
      name: "Plomería",
      desc: "Reparación de tuberías, griferías, fugas de agua y sanitarios.",
      icon: <Droplet className="w-6 h-6 text-brand-teal" />,
    },
    {
      id: "electricidad",
      name: "Electricidad",
      desc: "Instalación de luminarias, cableado, cortocircuitos y tableros.",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
    },
    {
      id: "jardineria",
      name: "Jardinería",
      desc: "Poda de césped, diseño de jardines, riego y mantenimiento.",
      icon: <Leaf className="w-6 h-6 text-emerald-400" />,
    },
    {
      id: "transporte",
      name: "Transporte",
      desc: "Fletes, mudanzas, mensajería y traslados de mercadería.",
      icon: <Truck className="w-6 h-6 text-blue-400" />,
    },
    {
      id: "limpieza",
      name: "Limpieza",
      desc: "Limpieza profunda de departamentos, oficinas y post-obra.",
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
    },
    {
      id: "construccion",
      name: "Construcción",
      desc: "Albañilería, colocación de pisos, cerámicas y demolición.",
      icon: <Wrench className="w-6 h-6 text-rose-400" />,
    },
    {
      id: "carpinteria",
      name: "Carpintería",
      desc: "Armado de muebles, reparación de puertas, cajonería y chapas.",
      icon: <Hammer className="w-6 h-6 text-yellow-500" />,
    },
    {
      id: "mecanica",
      name: "Mecánica",
      desc: "Auxilio mecánico ligero, cambio de llantas, batería y afinado.",
      icon: <Settings className="w-6 h-6 text-indigo-400" />,
    },
    {
      id: "general",
      name: "Servicio General",
      desc: "Ayudantes para mudanzas, armado de racks y tareas varias.",
      icon: <Layers className="w-6 h-6 text-slate-400" />,
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="categorias" className="py-20 bg-[#090d16] relative overflow-hidden">
      {/* Visual background gradient glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorías Más Demandadas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Encuentra expertos calificados en una amplia variedad de especialidades técnicas y oficios.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {categoriesList.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-[#121824] hover:bg-[#161f30] border border-white/5 rounded-3xl p-5 transition-all duration-300 shadow flex flex-col justify-between"
            >
              {/* Highlight Hover border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/10 transition-colors pointer-events-none" />

              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {category.desc}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="mt-5 flex items-center text-xs font-bold text-brand-teal group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <span>Ver ofertas</span>
                <span className="ml-1">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
