import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HomeClient from "@/components/HomeClient";
import EmploymentSection from "@/components/EmploymentSection";
import { SITE_URL, SEO_DATA, getLocale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locale as 'es' | 'en' | 'pt') in SEO_DATA ? (locale as 'es' | 'en' | 'pt') : 'es';
  const data = SEO_DATA[loc];

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `${SITE_URL}/${loc}`,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
        pt: `${SITE_URL}/pt`,
        "x-default": `${SITE_URL}/es`,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${SITE_URL}/${loc}`,
      images: [
        {
          url: `${SITE_URL}/images/hero-visual.png`,
          width: 1200,
          height: 630,
          alt: "Chamba — Trabajos y Servicios en Santa Cruz de la Sierra, Bolivia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [`${SITE_URL}/images/hero-visual.png`],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeClient><EmploymentSection locale={getLocale(locale)} /></HomeClient>
    </>
  );
}
