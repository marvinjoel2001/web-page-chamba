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
    ? "Términos y Condiciones de Servicio — Chamba"
    : locale === "pt"
    ? "Termos e Condições de Serviço — Chamba"
    : "Terms & Conditions of Service — Chamba";

  const description = isEs
    ? "Términos y condiciones de uso de la plataforma Chamba en Bolivia. Conoce las reglas de la comunidad, acuerdos directos y responsabilidades de usuarios."
    : "Terms and conditions of use for Chamba platform in Bolivia.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/terms`,
      languages: {
        es: `${SITE_URL}/es/terms`,
        en: `${SITE_URL}/en/terms`,
        pt: `${SITE_URL}/pt/terms`,
        "x-default": `${SITE_URL}/es/terms`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/terms`,
    },
  };
}

export default async function TermsPage({
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
          { name: "Términos de Servicio", url: `/${locale}/terms` },
        ]}
      />
      <Navbar activeRole="client" />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] rounded-3xl p-8 sm:p-12 shadow-sm">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Términos de Servicio</h1>
          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              Bienvenido a Chamba App. Al utilizar nuestra plataforma, aceptas estos Términos de Servicio. Lee cuidadosamente antes de acceder a nuestros servicios.
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Uso de la Plataforma</h2>
            <p>
              Chamba App es una plataforma que conecta a clientes que buscan servicios locales con trabajadores independientes (chamberos). Nosotros no proveemos los servicios directamente, ni empleamos a los trabajadores.
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Obligaciones del Usuario</h2>
            <p>
              Los usuarios deben proporcionar información precisa, mantener la confidencialidad de su cuenta y utilizar la plataforma de manera legal y respetuosa.
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Pagos y Tarifas</h2>
            <p>
              El pago de los servicios se realiza directamente entre el cliente y el trabajador. Chamba no cobra comisiones por las transacciones realizadas fuera de la aplicación.
            </p>
            <p className="mt-8 text-xs text-slate-400">Última actualización: 15 de Junio de 2026</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
