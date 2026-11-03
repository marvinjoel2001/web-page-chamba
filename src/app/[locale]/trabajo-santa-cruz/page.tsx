import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublishedJobs from "@/components/PublishedJobs";
import { Link } from "@/i18n/routing";
import { employmentContent } from "@/lib/employment-content";
import { servicePrefix } from "@/lib/service-pages";
import { getLocale, localizedUrl, SITE_URL, type PageParams } from "@/lib/seo";

// La lista de trabajos publicados se renueva como mucho cada minuto.
export const revalidate = 60;

export async function generateMetadata({ params }: PageParams) {
  const locale = getLocale((await params).locale);
  const content = employmentContent[locale];
  const title = `${content.title} | Chamba`;
  const url = localizedUrl(locale, "/trabajo-santa-cruz");
  const image = `${SITE_URL}/images/app-screens/chamba-play-store-1024x500-v2.png`;
  return {
    title, description: content.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(['es', 'en', 'pt', 'x-default'].map((language) => [language, localizedUrl(getLocale(language), "/trabajo-santa-cruz")])),
    },
    openGraph: { type: 'website' as const, title, description: content.description, url, images: [{ url: image, width: 1024, height: 500 }] },
    twitter: { card: 'summary_large_image' as const, title, description: content.description, images: [image] },
  };
}

export default async function SantaCruzJobs({ params }: PageParams) {
  const locale = getLocale((await params).locale);
  setRequestLocale(locale);
  const content = employmentContent[locale];
  const breadcrumbs = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: content.home, item: localizedUrl(locale) },
      { "@type": "ListItem", position: 2, name: content.title, item: localizedUrl(locale, "/trabajo-santa-cruz") },
    ],
  };
  return (
    <div className="on-video min-h-screen flex flex-col text-ink">
      <Navbar activeRole="worker" />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pt-32 pb-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }} />
        <nav aria-label="Breadcrumb" className="text-sm mb-8"><Link href="/" locale={locale} className="focus-ring underline">{content.home}</Link><span aria-hidden="true"> / </span><span>Santa Cruz</span></nav>
        <p className="text-sm font-bold uppercase tracking-wider text-ink-soft">{content.label}</p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">{content.title}</h1>
        <p className="mt-6 text-lg leading-relaxed">{content.description}</p>
        <p className="mt-4 leading-relaxed text-ink-soft">{content.coverage}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/unete#registro" locale={locale} className="btn btn-primary !whitespace-normal">{content.register}</Link>
          <a href="https://play.google.com/store/apps/details?id=com.chambatrabajo.app" className="btn btn-secondary !whitespace-normal" target="_blank" rel="noopener noreferrer">{content.download}</a>
        </div>
        <PublishedJobs locale={locale} className="mt-16" />
        <section className="mt-16" aria-labelledby="oficios-title">
          <h2 id="oficios-title" className="text-3xl font-bold">{content.tradesTitle}</h2>
          <div className="mt-7 grid sm:grid-cols-2 gap-6">
            {content.trades.map(([title, description]) => <article key={title} className="border-t border-line pt-5"><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-ink-soft">{description}</p></article>)}
          </div>
          <Link href={`/${servicePrefix(locale)}`} locale={locale} className="focus-ring inline-block mt-6 font-bold underline underline-offset-4">{content.servicesLink}</Link>
        </section>
        <section className="mt-16" aria-labelledby="pasos-title">
          <h2 id="pasos-title" className="text-3xl font-bold">{content.stepsTitle}</h2>
          <ol className="mt-6 list-decimal pl-6 space-y-4 leading-relaxed">{content.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
        <section className="mt-16" aria-labelledby="preguntas-title">
          <h2 id="preguntas-title" className="text-3xl font-bold">{content.faqTitle}</h2>
          <div className="mt-6 space-y-7">{content.faqs.map(([question, answer]) => <div key={question}><h3 className="text-xl font-bold">{question}</h3><p className="mt-2 leading-relaxed text-ink-soft">{answer}</p></div>)}</div>
          <Link href="/help" locale={locale} className="focus-ring inline-block mt-6 font-bold underline underline-offset-4">{content.help}</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
