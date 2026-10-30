import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HelpClient, { type FaqItem } from "@/components/HelpClient";
import { FaqJsonLd, BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const faqs: FaqItem[] = [
  {
    q: "¿Cómo publico un trabajo o solicitud en Chamba?",
    a: "Para publicar un trabajo, entra a la aplicación Chamba, describe tu necesidad por voz o texto, elige la categoría del servicio, agrega fotos o detalles y publica tu oferta en bolivianos (Bs). ¡Publicar es 100% gratis!",
  },
  {
    q: "¿Cómo se paga al trabajador?",
    a: "El pago se realiza directamente entre tú y el trabajador (en efectivo, QR o transferencia bancaria acordada) una vez que el trabajo ha sido completado y estás satisfecho con los resultados.",
  },
  {
    q: "¿En qué zonas de Santa Cruz de la Sierra está disponible Chamba?",
    a: "Chamba tiene cobertura en toda el área urbana de Santa Cruz de la Sierra, incluyendo Equipetrol, Plan 3000, Villa 1ro de Mayo, Las Palmas, Pampa de la Isla, Av. Banzer, Santos Dumont, Doble Vía a La Guardia y zonas aledañas.",
  },
  {
    q: "¿Cómo se verifican los trabajadores en Chamba?",
    a: "Cada trabajador que acepta trabajos pasa por un proceso de verificación de identidad con carnet de identidad (CI), selfie en tiempo real y revisión de antecedentes por nuestro equipo de seguridad.",
  },
  {
    q: "¿Cómo puedo registrarme como trabajador independiente?",
    a: "Puedes registrarte gratis desde la página 'Únete' o descargando la app de Chamba. Solo necesitas tus datos básicos, seleccionar tus oficios y verificar tu identidad para empezar a recibir pedidos de clientes cercanos.",
  },
  {
    q: "¿Qué pasa si tengo un problema con un servicio?",
    a: "Si el servicio no fue completado como se acordó, puedes abrir una disputa o reclamo directamente en la app o contactarnos a soporte@chamba.app. Nuestro equipo investigará y tomará acciones de mediación inmediatas.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Centro de Ayuda y Preguntas Frecuentes — Soporte Chamba"
    : locale === "pt"
    ? "Central de Ajuda e Perguntas Frequentes — Suporte Chamba"
    : "Help Center & FAQs — Chamba Support";

  const description = isEs
    ? "Preguntas frecuentes, soporte técnico y asistencia para clientes y trabajadores de Chamba en Santa Cruz de la Sierra, Bolivia. Resuelve tus dudas sobre pagos, publicaciones y seguridad."
    : locale === "pt"
    ? "Encontre respostas para suas dúvidas sobre a Chamba: como publicar serviços, formas de pagamento e segurança na Bolívia."
    : "Find answers to frequently asked questions about Chamba: how to post jobs, payment methods, worker verification and support in Bolivia.";

  return {
    title,
    description,
    keywords: [
      "ayuda chamba",
      "soporte chamba bolivia",
      "como funciona chamba",
      "preguntas frecuentes chamba santa cruz",
      "contacto chamba app",
      "atencion al cliente chamba",
    ],
    alternates: {
      canonical: `${SITE_URL}/${locale}/help`,
      languages: {
        es: `${SITE_URL}/es/help`,
        en: `${SITE_URL}/en/help`,
        pt: `${SITE_URL}/pt/help`,
        "x-default": `${SITE_URL}/es/help`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/help`,
      images: [
        {
          url: `${SITE_URL}/images/hero-visual.png`,
          width: 1200,
          height: 630,
          alt: "Centro de Ayuda Chamba Bolivia",
        },
      ],
    },
  };
}

export default async function HelpPage({
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
          { name: "Centro de Ayuda", url: `/${locale}/help` },
        ]}
      />
      <FaqJsonLd
        faqs={faqs.map((f) => ({
          question: f.q,
          answer: f.a,
        }))}
      />
      <HelpClient faqs={faqs} />
    </>
  );
}
