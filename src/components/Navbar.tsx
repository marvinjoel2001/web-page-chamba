"use client";

import { useState, useEffect } from "react";
import { Briefcase, Menu, X, Download, User, ArrowRight, Building2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface NavbarProps {
  activeRole: "client" | "worker";
  setActiveRole?: (role: "client" | "worker") => void;
}

export default function Navbar({ activeRole, setActiveRole }: NavbarProps) {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
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
    { name: t("menu_home"), href: "/" },
    { name: t("menu_how_it_works"), href: "/#como-funciona" },
    { name: t("menu_categories"), href: "/#categorias" },
    { name: t("menu_stats"), href: "/#estadisticas" },
    { name: t("menu_testimonials"), href: "/#testimonios" },
    { name: t("menu_about"), href: "/#nosotros" },
  ];

  const desktopMenuItems = menuItems.filter((item) => item.href !== "/");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-2xl backdrop-saturate-150 bg-white/68 border-b border-white/60 shadow-[0_4px_25px_rgba(31,38,135,0.10),inset_0_-1px_0_rgba(255,255,255,0.5)]"
          : "py-4 backdrop-blur-xl backdrop-saturate-150 bg-white/30 border-b border-white/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-4 lg:mr-8 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600 shadow-md shadow-purple-600/20 overflow-hidden group-hover:scale-105 transition-transform duration-200">
              <img src="/images/icon.png" alt="Chamba Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Chamba
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7">
            {desktopMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://agency-chamba.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-purple-700 backdrop-blur-md bg-purple-50/80 hover:bg-purple-100/90 border border-purple-200/80 rounded-full transition-all duration-200 whitespace-nowrap shadow-2xs"
              title="Portal para Agencias de Servicios"
            >
              <Building2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span>{t("portal_agencies")}</span>
              <ExternalLink className="w-3 h-3 text-purple-500/80 shrink-0" />
            </a>
          </div>

          {/* Controls: Role Selector + CTA */}
          <div className="hidden md:flex items-center gap-4 relative">
            {/* Role Switcher */}
            <div className="relative flex p-1 backdrop-blur-md bg-white/70 border border-slate-200/80 rounded-full shadow-2xs">
              <div
                className={`absolute top-1 bottom-1 w-[98px] bg-purple-600 rounded-full transition-transform duration-300 ease-out shadow-sm ${
                  activeRole === "worker" ? "translate-x-[98px]" : "translate-x-0"
                }`}
              />
              <button
                onClick={() => setActiveRole && setActiveRole("client")}
                className={`relative px-3 py-1 text-xs font-bold rounded-full transition-colors duration-200 z-10 w-[98px] text-center ${
                  activeRole === "client" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {t("role_client")}
              </button>
              <button
                onClick={() => setActiveRole && setActiveRole("worker")}
                className={`relative px-3 py-1 text-xs font-bold rounded-full transition-colors duration-200 z-10 w-[98px] text-center ${
                  activeRole === "worker" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {t("role_worker")}
              </button>
            </div>

            <Link
              href="/#descargar"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full shadow-xs transition-all duration-200 whitespace-nowrap shrink-0 hover:shadow"
            >
              <Download className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span>{t("install_app")}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            {/* Quick switcher in mobile navbar */}
            <button
              onClick={() => setActiveRole && setActiveRole(activeRole === "client" ? "worker" : "client")}
              className="p-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-purple-700 flex items-center gap-1"
            >
              <User className="w-3.5 h-3.5" />
              <span>{activeRole === "client" ? t("role_client") : t("role_worker")}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950"
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
            className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-4 shadow-xl"
          >
            <div className="flex flex-col gap-2 pt-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
              <div className="flex justify-between items-center px-3">
                <span className="text-sm text-slate-500 font-medium">{t("view_mode")}</span>
                <div className="flex p-1 bg-slate-100 border border-slate-200 rounded-full">
                  <button
                    onClick={() => setActiveRole && setActiveRole("client")}
                    className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${
                      activeRole === "client"
                        ? "bg-purple-600 text-white"
                        : "text-slate-600"
                    }`}
                  >
                    {t("role_client")}
                  </button>
                  <button
                    onClick={() => setActiveRole && setActiveRole("worker")}
                    className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${
                      activeRole === "worker"
                        ? "bg-purple-600 text-white"
                        : "text-slate-600"
                    }`}
                  >
                    {t("role_worker")}
                  </button>
                </div>
              </div>

              <Link
                href="/#descargar"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200/70 transition-colors"
              >
                <Download className="w-5 h-5 text-purple-600" />
                <span>{t("install_app")}</span>
              </Link>

              <a
                href="https://agency-chamba.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100 transition-colors"
              >
                <Building2 className="w-5 h-5 text-purple-600" />
                <span>{t("portal_agencies")}</span>
                <ExternalLink className="w-4 h-4 text-purple-500" />
              </a>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 + 0.1 }}
              >
                <Link
                  href="/unete"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/25 transition-colors"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>{t("work_with_us")}</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
