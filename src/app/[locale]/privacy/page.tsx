import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Políticas de Privacidad y Protección de Datos — Chamba"
    : locale === "pt"
    ? "Políticas de Privacidade e Proteção de Dados — Chamba"
    : "Privacy Policy & Data Protection — Chamba";

  const description = isEs
    ? "Conoce cómo Chamba recopila, utiliza y protege tus datos personales y ubicación en Bolivia. Compromiso de privacidad, transparencia y seguridad."
    : "Learn how Chamba collects, uses, and protects your personal information in Bolivia.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/privacy`,
      languages: {
        es: `${SITE_URL}/es/privacy`,
        en: `${SITE_URL}/en/privacy`,
        pt: `${SITE_URL}/pt/privacy`,
        "x-default": `${SITE_URL}/es/privacy`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/privacy`,
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-24 text-slate-700">
      <BreadcrumbsJsonLd
        items={[
          { name: "Inicio", url: `/${locale}` },
          { name: "Políticas de Privacidad", url: `/${locale}/privacy` },
        ]}
      />
      <Navbar activeRole="client" />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] rounded-3xl p-8 sm:p-12 shadow-sm">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Políticas de Privacidad</h1>
          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              En Chamba App, valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Información que recopilamos</h2>
            <p>
              Recopilamos información que nos proporcionas directamente al crear una cuenta, como tu nombre, número de teléfono, ubicación y datos del perfil. También recopilamos datos de uso y ubicación en tiempo real cuando la app está activa para facilitar las conexiones locales.
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Uso de la información</h2>
            <p>
              Usamos tu información para operar, mantener y mejorar nuestros servicios. Esto incluye conectar clientes con trabajadores cercanos, procesar verificaciones de seguridad y enviar notificaciones importantes.
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Compartir información</h2>
            <p>
              No vendemos tu información personal. Solo compartimos la información necesaria (como nombre y ubicación) entre el cliente y el trabajador cuando se acepta una solicitud de trabajo.
            </p>
            <p className="mt-8 text-xs text-slate-400">Última actualización: 15 de Junio de 2026</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
