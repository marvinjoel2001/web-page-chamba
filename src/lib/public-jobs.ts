import 'server-only';
import { apiBase } from './api-base';
import type { JobModality } from './job-catalog';

export type { JobModality };
export type PublicJob = {
  title: string; category: string; budget: number; modality: JobModality;
  /** true si el cliente pidió que también coticen los materiales. */
  withMaterials: boolean;
  /** Inicio programado 'AAAA-MM-DD' o 'AAAA-MM-DDTHH:mm' (hora de Bolivia), o null. */
  startDate: string | null;
  createdAt: string;
};
export type PublicJobs = { total: number; jobs: PublicJob[] };

const MODALITIES: readonly string[] = ['fixed', 'hourly', 'daily'];

/** Solo los campos públicos, aunque el backend mande más. */
function publicJob(value: unknown): PublicJob | null {
  if (!value || typeof value !== 'object') return null;
  const job = value as Record<string, unknown>;
  const title = typeof job.title === 'string' ? job.title.trim() : '';
  const createdAt = typeof job.createdAt === 'string' ? job.createdAt : '';
  if (!title || Number.isNaN(Date.parse(createdAt))) return null;
  const budget = Number(job.budget);
  const category = typeof job.category === 'string' ? job.category.trim() : '';
  return {
    title: title.slice(0, 80),
    category: category.slice(0, 60) || 'General',
    budget: Number.isFinite(budget) && budget > 0 ? budget : 0,
    modality: typeof job.modality === 'string' && MODALITIES.includes(job.modality) ? job.modality as JobModality : 'fixed',
    withMaterials: job.materialsMode === 'worker',
    startDate: typeof job.startDate === 'string' && /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/.test(job.startDate) ? job.startDate : null,
    createdAt,
  };
}

/**
 * Trabajos abiertos para la web pública (sin dirección, descripción, fotos ni
 * datos del cliente). La respuesta se reutiliza 60 s; si el backend no
 * responde devuelve null y la página muestra un aviso en lugar de la lista.
 */
export async function fetchPublicJobs(limit = 12): Promise<PublicJobs | null> {
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_API_URL) return null;
  try {
    const response = await fetch(`${apiBase()}/web/jobs?limit=${limit}`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return null;
    const value: unknown = await response.json();
    if (!value || typeof value !== 'object') return null;
    const body = value as { total?: unknown; jobs?: unknown };
    const jobs = (Array.isArray(body.jobs) ? body.jobs : [])
      .map(publicJob)
      .filter((job): job is PublicJob => job !== null)
      .slice(0, limit);
    const total = Number(body.total);
    return { total: Number.isInteger(total) && total >= jobs.length ? total : jobs.length, jobs };
  } catch {
    return null;
  }
}
