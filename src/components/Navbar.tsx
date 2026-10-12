"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, ExternalLink, Search, HardHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { Role } from "@/lib/role";

interface NavbarProps {
  activeRole: Role;
  setActiveRole?: (role: Role) => void;
}

const AGENCY_URL = "https://agency-chamba.vercel.app/";

/** Selector de modo: el elemento que más tiene que notarse de la barra. */
function RoleSwitch({
  activeRole,
  setActiveRole,
  compact = false,
}: NavbarProps & { compact?: boolean }) {
  const t = useTranslations("Navbar");
  const options: { role: Role; label: string; short: string; icon: React.ReactNode }[] = [
    { role: "client", label: t("role_client_long"), short: t("role_client"), icon: <Search className="w-4 h-4" /> },
    { role: "worker", label: t("role_worker_long"), short: t("role_worker"), icon: <HardHat className="w-4 h-4" /> },
  ];

  return (
    <div
      role="radiogroup"
      aria-label={t("view_mode")}
      className="flex p-1 rounded-full border border-line bg-[rgb(var(--veil))]"
      data-solid
    >
      {options.map((opt) => {
        const active = activeRole === opt.role;
        return (
          <button
            key={opt.role}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setActiveRole?.(opt.role)}
            className={`focus-ring inline-flex items-center gap-1.5 rounded-full font-bold transition-colors duration-300 ${
              compact ? "px-3 py-2 text-xs" : "px-4 py-2 text-sm"
            } ${active ? "bg-accent text-on-accent" : "text-ink-soft hover:text-ink"}`}
          >
            {opt.icon}
            <span>{compact ? opt.short : opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Navbar({ activeRole, setActiveRole }: NavbarProps) {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: t("menu_how_it_works"), href: "/#como-funciona", show: true },
    { name: t("menu_categories"), href: "/#categorias", show: activeRole === "client" },
    { name: t("menu_testimonials"), href: "/#testimonios", show: true },
    { name: t("menu_about"), href: "/#nosotros", show: true },
  ].filter((item) => item.show);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-300 border-b ${
        scrolled || isOpen
          ? "py-2.5 bg-[rgb(var(--veil)/0.96)] border-line"
          : "py-4 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-12">
          <Link href="/" className="focus-ring flex items-center gap-2.5 shrink-0 rounded-xl">
            <img src="/images/icon.png" alt="" className="w-10 h-10 rounded-xl object-cover" />
            <span className="text-xl font-extrabold tracking-tight text-ink max-[380px]:hidden">Chamba</span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded text-[15px] font-semibold text-ink-soft hover:text-ink hover:underline decoration-accent decoration-2 underline-offset-8 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {setActiveRole && <RoleSwitch activeRole={activeRole} setActiveRole={setActiveRole} />}
            <Link href="/#descargar" className="btn btn-primary !min-h-11 !px-5">
              <Download className="w-4 h-4" />
              <span>{t("install_app")}</span>
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            {setActiveRole && <RoleSwitch activeRole={activeRole} setActiveRole={setActiveRole} compact />}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              className="focus-ring w-11 h-11 flex items-center justify-center rounded-full border border-line text-ink"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 flex flex-col gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="focus-ring block px-2 py-3 rounded-lg text-lg font-semibold text-ink border-b border-line"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={AGENCY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="focus-ring flex items-center gap-2 px-2 py-3 text-lg font-semibold text-ink border-b border-line"
              >
                {t("portal_agencies")}
                <ExternalLink className="w-4 h-4 text-ink-soft" />
              </a>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/#descargar" onClick={() => setIsOpen(false)} className="btn btn-primary w-full">
                  <Download className="w-5 h-5" />
                  <span>{t("install_app")}</span>
                </Link>
                {activeRole === "worker" && (
                  <Link href="/unete" onClick={() => setIsOpen(false)} className="btn btn-secondary w-full">
                    {t("work_with_us")}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
