import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chamba — Encuentra profesionales de confianza en minutos",
  description: "Publica tu necesidad, recibe ofertas de trabajadores locales calificados en tu zona, negocia tarifas en tiempo real y chatea directamente sin intermediarios.",
};

import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import StarfieldBackground from "@/components/StarfieldBackground";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" href="/images/worker.png" as="image" />
        <link rel="preload" href="/images/client.png" as="image" />
      </head>
      <body className="min-h-full flex flex-col bg-[#04060a] text-slate-100 selection:bg-brand-primary selection:text-white">
        <StarfieldBackground />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
