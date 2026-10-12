"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import type { Role } from "@/lib/role";

interface CTAProps {
  activeRole: Role;
}

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.chambatrabajo.app";
// TODO: reemplazar por el enlace real de App Store cuando la app esté publicada en iOS.
const APP_STORE_URL = "#";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.9 1.15 9.15.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M4.6 2.3c-.3.2-.5.6-.5 1.1v17.2c0 .5.2.9.5 1.1l9.6-9.7-9.6-9.7zm10.7 8.6 2.7-2.7-11.7-6.7 9 9.4zm0 2.2-9 9.4 11.7-6.7-2.7-2.7zm4.2-4-3 1.7L13.6 12l2.9 2.9 3-1.7c.9-.5.9-1.9 0-2.4z" />
    </svg>
  );
}

export default function CTA({ activeRole }: CTAProps) {
  const t = useTranslations("CTA");
  return (
    <section id="descargar" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink text-balance">
              {activeRole === "client" ? t("client_title") : t("worker_title")}
            </h2>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed font-medium text-ink-soft">
              {activeRole === "client" ? t("client_desc") : t("worker_desc")}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
            <PlayIcon />
            Descargar en Google Play
          </a>
          <a href={APP_STORE_URL} className="btn btn-secondary w-full sm:w-auto">
            <AppleIcon />
            Descargar en App Store
          </a>
        </div>
      </div>
    </section>
  );
}
