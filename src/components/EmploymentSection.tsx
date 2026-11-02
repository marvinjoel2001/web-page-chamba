import { Link } from "@/i18n/routing";
import { employmentContent } from "@/lib/employment-content";
import type { Locale } from "@/lib/seo";
import { servicePrefix } from "@/lib/service-pages";

export default function EmploymentSection({ locale }: { locale: Locale }) {
  const content = employmentContent[locale];
  return (
    <section id="trabajos" aria-labelledby="trabajos-title" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wider text-ink-soft">{content.label}</p>
        <h2 id="trabajos-title" className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">{content.heading}</h2>
        <p className="mt-5 text-lg leading-relaxed text-ink">{content.intro}</p>
        <p className="mt-3 leading-relaxed text-ink-soft">{content.coverage}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link href="/trabajo-santa-cruz" locale={locale} className="focus-ring font-bold underline decoration-accent decoration-2 underline-offset-4">{content.jobsLink}</Link>
          <Link href="/unete" locale={locale} className="focus-ring font-bold underline decoration-accent decoration-2 underline-offset-4">{content.register}</Link>
          <Link href={`/${servicePrefix(locale)}`} locale={locale} className="focus-ring font-bold underline decoration-accent decoration-2 underline-offset-4">{content.servicesLink}</Link>
        </div>
      </div>
    </section>
  );
}
