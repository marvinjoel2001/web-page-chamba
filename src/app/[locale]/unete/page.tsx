import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import JoinUsClient from "@/components/JoinUsClient";
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
    ? "Registro de trabajadores en Santa Cruz | Chamba"
    : locale === "pt"
    ? "Cadastro de trabalhadores em Santa Cruz | Chamba"
    : "Worker registration in Santa Cruz, Bolivia | Chamba";

  const description = isEs
    ? "Crea gratis tu cuenta de trabajador en Chamba. Completa tu perfil, verifica tu identidad y ofrece tus servicios en Santa Cruz de la Sierra, Bolivia."
    : locale === "pt"
    ? "Crie sua conta grátis no Chamba. Complete seu perfil e verifique sua identidade para oferecer serviços em Santa Cruz de la Sierra, Bolívia."
    : "Create your free Chamba worker account, complete your profile and verify your identity to offer services in Santa Cruz de la Sierra, Bolivia.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/unete`,
      languages: {
        es: `${SITE_URL}/es/unete`,
        en: `${SITE_URL}/en/unete`,
        pt: `${SITE_URL}/pt/unete`,
        "x-default": `${SITE_URL}/es/unete`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/unete`,
      images: [
        {
          url: `${SITE_URL}/images/hero-visual.png`,
          width: 1200,
          height: 630,
          alt: "Ofertas de Trabajo en Santa Cruz de la Sierra - Chamba Bolivia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/hero-visual.png`],
    },
  };
}

export default async function JoinUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Inicio", url: `/${locale}` },
          { name: "Trabajos y Empleos en Santa Cruz", url: `/${locale}/unete` },
        ]}
      />
      <JoinUsClient />
    </>
  );
}
