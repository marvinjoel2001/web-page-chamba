import TimeAgo from './TimeAgo';
import { fetchPublicJobs, type JobModality } from '@/lib/public-jobs';
import { PLAY_STORE_URL, type Locale } from '@/lib/seo';

const intlLocale: Record<Locale, string> = { es: 'es-BO', en: 'en-US', pt: 'pt-BR' };

const copy: Record<Locale, {
  title: string; intro: string; count: (total: number) => string; empty: string; unavailable: string;
  privacy: string; cta: string; modality: Record<JobModality, string>;
  materials: string; today: string; tomorrow: string; starts: (when: string) => string;
}> = {
  es: {
    title: 'Trabajos publicados recientemente',
    intro: 'Pedidos abiertos de clientes en Santa Cruz. Para ver los detalles y enviar tu oferta, entra a la app con tu cuenta de trabajador.',
    count: (total) => total === 1 ? '1 trabajo abierto en los últimos 7 días' : `${total} trabajos abiertos en los últimos 7 días`,
    empty: 'Ahora mismo no hay trabajos abiertos. Los pedidos nuevos aparecen aquí y en la app.',
    unavailable: 'No pudimos cargar los trabajos en este momento. Puedes verlos en la app.',
    privacy: 'Por privacidad no mostramos la dirección, la descripción ni los datos del cliente.',
    cta: 'Ofertar desde la app',
    modality: { fixed: 'Por trabajo', hourly: 'Por hora', daily: 'Por día' },
    materials: 'Mano de obra + materiales', today: 'hoy', tomorrow: 'mañana', starts: (when) => `Empieza ${when}`,
  },
  en: {
    title: 'Recently posted jobs',
    intro: 'Open requests from clients in Santa Cruz. To see the details and send your offer, open the app with your worker account.',
    count: (total) => total === 1 ? '1 open job in the last 7 days' : `${total} open jobs in the last 7 days`,
    empty: 'There are no open jobs right now. New requests show up here and in the app.',
    unavailable: "We couldn't load the jobs right now. You can see them in the app.",
    privacy: "For privacy, we don't show the address, the description or the client's details.",
    cta: 'Make an offer in the app',
    modality: { fixed: 'Per job', hourly: 'Per hour', daily: 'Per day' },
    materials: 'Labor + materials', today: 'today', tomorrow: 'tomorrow', starts: (when) => `Starts ${when}`,
  },
  pt: {
    title: 'Trabalhos publicados recentemente',
    intro: 'Pedidos abertos de clientes em Santa Cruz. Para ver os detalhes e enviar sua oferta, entre no app com sua conta de trabalhador.',
    count: (total) => total === 1 ? '1 trabalho aberto nos últimos 7 dias' : `${total} trabalhos abertos nos últimos 7 dias`,
    empty: 'No momento não há trabalhos abertos. Os novos pedidos aparecem aqui e no app.',
    unavailable: 'Não conseguimos carregar os trabalhos agora. Você pode vê-los no app.',
    privacy: 'Por privacidade, não mostramos o endereço, a descrição nem os dados do cliente.',
    cta: 'Fazer oferta pelo app',
    modality: { fixed: 'Por trabalho', hourly: 'Por hora', daily: 'Por dia' },
    materials: 'Mão de obra + materiais', today: 'hoje', tomorrow: 'amanhã', starts: (when) => `Começa ${when}`,
  },
};

/** "Empieza mañana 08:00" / "Empieza 14 nov · 08:00", con el día de Bolivia. */
function startLabel(locale: Locale, startDate: string): string {
  const t = copy[locale];
  const [day, time] = startDate.split('T');
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/La_Paz' }).format(new Date());
  const diff = Math.round((Date.parse(`${day}T00:00:00Z`) - Date.parse(`${today}T00:00:00Z`)) / 86400000);
  const date = diff === 0 ? t.today : diff === 1 ? t.tomorrow
    : new Intl.DateTimeFormat(intlLocale[locale], { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(`${day}T00:00:00Z`));
  const separator = diff === 0 || diff === 1 ? ' ' : ' · ';
  return t.starts(time ? `${date}${separator}${time}` : date);
}

/**
 * Lista pública de trabajos abiertos: título corto, categoría, modalidad,
 * si incluye materiales, cuándo empieza, presupuesto y hace cuánto se publicó. Para ofertar hay que entrar a la app.
 */
export default async function PublishedJobs({ locale, limit = 12, headingLevel = 2, className = '' }: {
  locale: Locale; limit?: number; headingLevel?: 2 | 3; className?: string;
}) {
  const t = copy[locale];
  const data = await fetchPublicJobs(limit);
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const money = new Intl.NumberFormat(intlLocale[locale], { maximumFractionDigits: 2 });
  const day = new Intl.DateTimeFormat(intlLocale[locale], { day: 'numeric', month: 'short', timeZone: 'America/La_Paz' });
  return (
    <section aria-labelledby="trabajos-publicados-title" className={className}>
      <Heading id="trabajos-publicados-title" className={headingLevel === 2 ? 'text-3xl font-bold' : 'text-2xl font-bold'}>{t.title}</Heading>
      <p className="mt-3 leading-relaxed text-ink-soft">{t.intro}</p>
      {!data || data.jobs.length === 0 ? (
        <p data-solid className="mt-6 rounded-2xl bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] p-5 text-ink">{data ? t.empty : t.unavailable}</p>
      ) : (
        <>
          <p className="mt-2 text-sm font-semibold text-ink-soft">{t.count(data.total)}</p>
          <ul data-solid className="mt-5 grid gap-3 sm:grid-cols-2">
            {data.jobs.map((job, index) => (
              <li key={`${job.createdAt}-${index}`} className="flex flex-col rounded-2xl bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] p-4 text-ink">
                <p className="font-bold leading-snug break-words">{job.title}</p>
                <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
                  <span className="rounded-full bg-accent-tint px-2.5 py-0.5 font-semibold text-ink">{job.category}</span>
                  <span>{t.modality[job.modality]}</span>
                  {/* Solo cuando el trabajo incluye materiales; solo mano de obra queda como antes. */}
                  {job.withMaterials && <span className="rounded-full bg-[#FAEEDA] px-2.5 py-0.5 font-semibold text-[#854F0B]">{t.materials}</span>}
                </p>
                {job.startDate && <p className="mt-1.5 text-sm font-semibold text-accent-strong">{startLabel(locale, job.startDate)}</p>}
                <div className="mt-auto flex items-baseline justify-between gap-3 pt-3">
                  {job.budget > 0 ? <strong className="text-lg">Bs {money.format(job.budget)}</strong> : <span />}
                  <span className="text-sm text-ink-soft">
                    <TimeAgo iso={job.createdAt} locale={intlLocale[locale]} fallback={day.format(new Date(job.createdAt))} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="mt-4 text-sm text-ink-soft">{t.privacy}</p>
      <a href={PLAY_STORE_URL} className="btn btn-primary mt-5 !whitespace-normal" target="_blank" rel="noopener noreferrer">{t.cta}</a>
    </section>
  );
}
