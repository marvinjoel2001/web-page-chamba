import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteAccountForm from "@/components/DeleteAccountForm";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs ? "Eliminar Cuenta y Datos — Chamba" : "Delete Account — Chamba",
    description: isEs
      ? "Solicitud pública para la eliminación de cuenta y datos personales de usuarios de Chamba App (requisito Google Play)."
      : "Public page to request account and personal data deletion for Chamba App users.",
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/eliminar-cuenta`,
      languages: {
        es: `${SITE_URL}/es/eliminar-cuenta`,
        en: `${SITE_URL}/en/eliminar-cuenta`,
        pt: `${SITE_URL}/pt/eliminar-cuenta`,
        "x-default": `${SITE_URL}/es/eliminar-cuenta`,
      },
    },
  };
}

export default async function DeleteAccountPage({
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
          { name: "Eliminar Cuenta", url: `/${locale}/eliminar-cuenta` },
        ]}
      />
      <Navbar activeRole="client" />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <DeleteAccountForm />
      </main>
      <Footer />
    </div>
  );
}
