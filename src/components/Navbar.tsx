"use client";

import { useState, useEffect } from "react";
import { Briefcase, Menu, X, Smartphone, User, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  activeRole: "client" | "worker";
  setActiveRole?: (role: "client" | "worker") => void;
}

export default function Navbar({ activeRole, setActiveRole }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Cómo funciona", href: "/#como-funciona" },
    { name: "Categorías", href: "/#categorias" },
    { name: "Estadísticas", href: "/#estadisticas" },
    { name: "Testimonios", href: "/#testimonios" },
    { name: "Sobre Nosotros", href: "/#nosotros" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#090d16]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-primary-light shadow-md shadow-brand-primary/20 overflow-hidden">
                <img src="/images/icon.png" alt="Chamba Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white bg-clip-text">
                Chamba
              </span>
            </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Controls: Role Selector + CTA */}
          <div className="hidden md:flex items-center gap-4 relative">
            {/* Role Switcher */}
            <div className="relative flex p-1 bg-slate-900/60 border border-white/5 rounded-full">
              <div
                className={`absolute top-1 bottom-1 w-[88px] bg-gradient-to-r from-brand-primary to-brand-primary-light rounded-full transition-transform duration-300 ease-out ${
                  activeRole === "worker" ? "translate-x-[88px]" : "translate-x-0"
                }`}
              />
              <button
                onClick={() => setActiveRole && setActiveRole("client")}
                className={`relative px-4 py-1 text-xs font-semibold rounded-full transition-colors duration-200 z-10 w-[88px] text-center ${
                  activeRole === "client" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Cliente
              </button>
              <button
                onClick={() => setActiveRole && setActiveRole("worker")}
                className={`relative px-4 py-1 text-xs font-semibold rounded-full transition-colors duration-200 z-10 w-[88px] text-center ${
                  activeRole === "worker" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Chambero
              </button>
            </div>

            <Link
              href="/#descargar"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <Smartphone className="w-4 h-4 text-brand-highlight shrink-0" />
              <span>Instalar App</span>
            </Link>

            {/* Floating Trabaja con nosotros Card */}
            <div className="absolute top-[calc(100%+1.5rem)] right-0">
              <div className="relative">
                {/* Dotted Arrow SVG pointing up-left */}
                <svg className="absolute -top-7 right-8 w-8 h-8 text-brand-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeDasharray="3 3" strokeWidth="1.5" strokeLinecap="round" d="M8 20 C 8 10, 16 8, 20 4" />
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 4 L 20 4 L 20 9" />
                </svg>

                <Link
                  href="/unete"
                  className="flex items-center gap-4 p-3 pr-5 bg-[#090d16] border border-brand-primary/20 rounded-2xl shadow-2xl hover:-translate-y-1 hover:shadow-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 group whitespace-nowrap"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary-light group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">¿Buscas generar ingresos?</span>
                    <span className="text-sm font-bold text-brand-primary-light group-hover:text-white transition-colors">Trabaja con nosotros</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-primary-light ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            {/* Quick switcher in mobile navbar */}
            <button
              onClick={() => setActiveRole && setActiveRole(activeRole === "client" ? "worker" : "client")}
              className="p-2 bg-slate-900 border border-white/5 rounded-xl text-xs font-bold text-brand-primary flex items-center gap-1"
            >
              <User className="w-3.5 h-3.5" />
              <span>{activeRole === "client" ? "Cliente" : "Chambero"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-900/60 border border-white/5 text-slate-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/5 bg-[#090d16] px-4 pt-2 pb-6 space-y-4 shadow-xl"
          >
            <div className="flex flex-col gap-2 pt-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:bg-white/5 hover:text-brand-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-white/5 pt-4 flex flex-col gap-3">
              <div className="flex justify-between items-center px-3">
                <span className="text-sm text-slate-400 font-medium">Modo de Vista:</span>
                <div className="flex p-1 bg-slate-900 border border-white/5 rounded-full">
                  <button
                    onClick={() => setActiveRole && setActiveRole("client")}
                    className={`px-4 py-1 text-xs font-semibold rounded-full transition-all ${
                      activeRole === "client"
                        ? "bg-brand-primary text-white"
                        : "text-slate-400"
                    }`}
                  >
                    Cliente
                  </button>
                  <button
                    onClick={() => setActiveRole && setActiveRole("worker")}
                    className={`px-4 py-1 text-xs font-semibold rounded-full transition-all ${
                      activeRole === "worker"
                        ? "bg-brand-primary text-white"
                        : "text-slate-400"
                    }`}
                  >
                    Chambero
                  </button>
                </div>
              </div>

              <Link
                href="/#descargar"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Smartphone className="w-5 h-5 text-brand-highlight" />
                <span>Instalar App</span>
              </Link>

              <Link
                href="/unete"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-lg shadow-brand-primary/20"
              >
                <Briefcase className="w-5 h-5" />
                <span>Trabaja con nosotros</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
