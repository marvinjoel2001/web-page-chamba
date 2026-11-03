import 'server-only';
import { backend } from './chamba-session';

export type JobModality = 'fixed' | 'hourly' | 'daily';
export type JobCategory = { id: string; name: string };
export type JobModalities = Record<JobModality, boolean>;

export const ALL_MODALITIES: JobModalities = { fixed: true, hourly: true, daily: true };

/**
 * Categorías activas del backend (las mismas que eligen los trabajadores como
 * oficio). La web publica con estos nombres exactos para que el pedido llegue
 * a quienes tienen ese oficio.
 */
export async function loadCategories(token: string): Promise<JobCategory[]> {
  const response = await backend('/mobile/categories', token);
  if (!response.ok) throw new Error('No se pudieron cargar las categorías.');
  const value = (await response.json()) as { categories?: unknown };
  const seen = new Set<string>();
  const categories: JobCategory[] = [];
  for (const item of Array.isArray(value.categories) ? value.categories : []) {
    if (!item || typeof item !== 'object') continue;
    const { id, name, active } = item as Record<string, unknown>;
    if (typeof id !== 'string' || typeof name !== 'string' || active === false) continue;
    const key = id.trim(), label = name.trim();
    if (!key || !label || seen.has(key)) continue;
    seen.add(key);
    categories.push({ id: key, name: label.slice(0, 80) });
  }
  return categories;
}

/**
 * Modalidades que el admin dejó activas. Si no se pueden leer se muestran
 * todas: el backend igual rechaza una apagada con un mensaje claro.
 */
export async function loadModalities(): Promise<JobModalities> {
  try {
    const response = await backend('/mobile/work-modalities');
    if (!response.ok) return ALL_MODALITIES;
    const value = (await response.json()) as Record<string, unknown>;
    return { fixed: value.fixed !== false, hourly: value.hourly !== false, daily: value.daily !== false };
  } catch {
    return ALL_MODALITIES;
  }
}
