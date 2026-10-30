import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import VideoBackground from "@/components/VideoBackground";
import { RootJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SEO_DATA, GEO_METADATA } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#6D28D9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locale as 'es' | 'en' | 'pt') in SEO_DATA ? (locale as 'es' | 'en' | 'pt') : 'es';
  const data = SEO_DATA[loc];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: data.title,
      template: data.titleTemplate,
    },
    description: data.description,
    keywords: data.keywords,
    applicationName: "Chamba",
    authors: [{ name: "Chamba App", url: SITE_URL }],
    creator: "Chamba App",
    publisher: "Chamba App",
    category: "Servicios del hogar y marketplace de oficios",
    classification: "Servicios a domicilio, reparaciones y oficios locales",
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
      type: "website",
      locale: loc === "es" ? "es_BO" : loc === "pt" ? "pt_BR" : "en_US",
      alternateLocale: ["es_BO", "pt_BR", "en_US"],
      url: `${SITE_URL}/${loc}`,
      siteName: data.siteName,
      title: data.title,
      description: data.description,
      images: [
        {
          url: `${SITE_URL}/images/hero-visual.png`,
          width: 1200,
          height: 630,
          alt: "Chamba — Encuentra profesionales de confianza en Bolivia",
        },
        {
          url: `${SITE_URL}/images/icon.png`,
          width: 512,
          height: 512,
          alt: "Logo Chamba",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [`${SITE_URL}/images/hero-visual.png`],
      creator: "@ChambaApp",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/images/icon.png", sizes: "32x32", type: "image/png" },
        { url: "/images/icon.png", sizes: "192x192", type: "image/png" },
        { url: "/images/icon.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/images/icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest.webmanifest",
    other: {
      ...GEO_METADATA,
      "format-detection": "telephone=no",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent text-slate-900 selection:bg-purple-600 selection:text-white">
        <RootJsonLd locale={locale} />
        <VideoBackground />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
