import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import JoinUsClient from "@/components/JoinUsClient";
import { BreadcrumbsJsonLd, JobPostingsJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Trabajos en Santa Cruz de la Sierra | Empleos y Oficios | Chamba Bolivia"
    : locale === "pt"
    ? "Vagas de Trabalho em Santa Cruz de la Sierra | Chamba Bolívia"
    : "Jobs in Santa Cruz, Bolivia | Trade Work & Freelance Gigs | Chamba";

  const description = isEs
    ? "¿Buscas trabajo en Santa Cruz de la Sierra o Bolivia? Únete a Chamba. Accede a cientos de trabajos diarios de plomería, electricidad, albañilería, limpieza, pintura y más. Recibe ofertas en tu celular, cobra directo en Bs y sé tu propio jefe."
    : locale === "pt"
    ? "Encontre trabalho em Santa Cruz de la Sierra com a Chamba. Receba pedidos diários de reformas, encanamento, eletricidade e limpeza direto no celular. Pagamentos em Bs sem burocracia."
    : "Looking for jobs in Santa Cruz, Bolivia? Join Chamba. Get daily local gigs for plumbers, electricians, handymen, painters, and cleaners. Direct pay in Bs and flexible hours.";

  return {
    title,
    description,
    keywords: [
      // Búsquedas directas de trabajo
      "trabajo",
      "trabajos",
      "trabajo bolivia",
      "trabajos en bolivia",
      "trabajo santa cruz",
      "trabajos en santa cruz",
      "trabajos en santa cruz de la sierra",
      "empleo santa cruz",
      "empleos santa cruz",
      "empleos santa cruz bolivia",
      "bolsa de trabajo santa cruz",
      "bolsa de trabajo bolivia",
      "ofertas de trabajo santa cruz",
      "ofertas laborales santa cruz",
      "buscar trabajo en santa cruz",
      "buscar trabajo bolivia",
      "conseguir trabajo santa cruz",
      "trabajo urgente santa cruz",
      "trabajo hoy santa cruz",
      "trabajos medio tiempo santa cruz",
      "trabajos independientes bolivia",
      "chambas bolivia",
      "chamba santa cruz",
      // Oficios
      "trabajo plomero santa cruz",
      "trabajo electricista santa cruz",
      "trabajo albañil santa cruz",
      "trabajo construccion santa cruz",
      "trabajo pintor santa cruz",
      "trabajo limpieza santa cruz",
      "trabajo chofer fletes santa cruz",
      "trabajo mecanico santa cruz",
      "trabajo jardineria santa cruz",
      "conseguir clientes santa cruz",
      "registro trabajadores chamba",
    ],
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
      <JobPostingsJsonLd />
      <JoinUsClient />
    </>
  );
}
