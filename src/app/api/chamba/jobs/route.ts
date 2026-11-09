import { backend, jsonBody, privateJson, readSession, sameOrigin } from '@/lib/chamba-session';
import { loadCategories, type JobModality } from '@/lib/job-catalog';

export async function GET() {
  try {
    const session = await readSession();
    if (!session) return privateJson({message:'Inicia sesión para ver tus trabajos.'},401);
    if (session.user.type !== 'client') return privateJson({message:'Necesitas una cuenta de cliente.'},403);
    const response = await backend('/mobile/client/web-jobs',session.token);
    return privateJson(await response.json(),response.status);
  } catch { return privateJson({message:'No se pudo cargar tu historial.'},503); }
}

const MAX_TOTAL = 100000;
// Los mismos textos que manda la app para cada modalidad.
const PRICE_TYPE: Record<JobModality, string> = { fixed: 'Precio fijo', hourly: 'Por hora', daily: 'Por día' };

const money = (value: unknown, max: number) => {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  const rounded = Math.round(value * 100) / 100;
  return rounded > 0 && rounded <= max ? rounded : null;
};
const units = (value: unknown, max: number) => Number.isInteger(value) && (value as number) >= 1 && (value as number) <= max ? value as number : null;
const plain = (value: string) => value.normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase();

/** 'AAAA-MM-DD' desde hoy (hora de Bolivia) hasta dentro de un año. */
function startDateOk(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) return false;
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/La_Paz' }).format(new Date());
  const limit = new Date(`${today}T00:00:00Z`);
  limit.setUTCFullYear(limit.getUTCFullYear() + 1);
  return value >= today && value <= limit.toISOString().slice(0, 10);
}

/**
 * Hora 'HH:mm' para una fecha de inicio. Si el trabajo es hoy, tiene que
 * faltar al menos una hora: más cerca, el backend lo cancela solo.
 */
function startTimeOk(date: string, time: string) {
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(time);
  if (!match) return false;
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'America/La_Paz', hourCycle: 'h23',
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    .formatToParts(new Date()).map((part) => [part.type, part.value]));
  if (date !== `${parts.year}-${parts.month}-${parts.day}`) return true;
  const nowMinutes = Number(parts.hour) * 60 + Number(parts.minute);
  return Number(match[1]) * 60 + Number(match[2]) >= nowMinutes + 60;
}

// Igual que en la app: el cliente dice si cotizan solo la mano de obra
// ('client': él tiene los materiales) o también los materiales ('worker').
const MATERIALS_MODES = ['client', 'worker'] as const;

/**
 * Modalidad y monto. El total por hora o por día se calcula aquí (unidades ×
 * tarifa); nunca se toma un total del navegador. Si el admin apagó la
 * modalidad, el backend rechaza la publicación con un mensaje claro.
 */
function pricing(input: Record<string, unknown>): { error: string } | { price: Record<string, unknown> } {
  const modality = input.modality ?? 'fixed';
  if (modality === 'fixed') {
    const budget = money(input.budget, MAX_TOTAL);
    return budget ? { price: { modality, priceType: PRICE_TYPE.fixed, budget } } : { error: 'Indica un presupuesto válido (hasta Bs 100.000).' };
  }
  if (modality === 'hourly') {
    const hours = units(input.estimatedHours, 100), rate = money(input.hourlyRate, 5000);
    if (!hours || !rate) return { error: 'Indica las horas (1 a 100) y una tarifa por hora válida.' };
    const budget = Math.round(hours * rate * 100) / 100;
    if (budget > MAX_TOTAL) return { error: 'El total no puede pasar de Bs 100.000.' };
    return { price: { modality, priceType: PRICE_TYPE.hourly, budget, estimatedHours: hours, hourlyRate: rate } };
  }
  if (modality === 'daily') {
    const days = units(input.days, 60), rate = money(input.dailyRate, 20000);
    if (!days || !rate) return { error: 'Indica los días (1 a 60) y una tarifa por día válida.' };
    const startDate = typeof input.startDate === 'string' ? input.startDate.trim() : '';
    if ((input.startDate != null && typeof input.startDate !== 'string') || (startDate && !startDateOk(startDate))) {
      return { error: 'La fecha de inicio debe ser desde hoy y dentro de un año.' };
    }
    const startTime = typeof input.startTime === 'string' ? input.startTime.trim() : '';
    if (input.startTime != null && typeof input.startTime !== 'string') return { error: 'La hora de inicio no es válida.' };
    if (startTime && !startDate) return { error: 'Elige la fecha de inicio para indicar la hora.' };
    if (startTime && !startTimeOk(startDate, startTime)) {
      return { error: 'La hora de inicio no es válida. Si el trabajo es hoy, tiene que faltar al menos una hora.' };
    }
    const budget = Math.round(days * rate * 100) / 100;
    if (budget > MAX_TOTAL) return { error: 'El total no puede pasar de Bs 100.000.' };
    // Mismo formato que la app: 'AAAA-MM-DD' o 'AAAA-MM-DDTHH:mm:00' (hora de Bolivia).
    const start = startDate && startTime ? `${startDate}T${startTime}:00` : startDate;
    return { price: { modality, priceType: PRICE_TYPE.daily, budget, days, dailyRate: rate, ...(start ? { startDate: start } : {}) } };
  }
  return { error: 'Elige cómo quieres pagar: por trabajo, por hora o por día.' };
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return privateJson({message:'Origen inválido.'},403);
  try {
    const session = await readSession();
    if (!session) return privateJson({message:'Inicia sesión para publicar tu trabajo.'},401);
    if (session.user.type !== 'client') return privateJson({message:'Publica desde una cuenta de cliente.'},403);
    const input = await jsonBody(request);
    const text = (value: unknown) => typeof value === 'string' ? value.trim() : '';
    const title = text(input.title), description = text(input.description), address = text(input.address), categoryKey = text(input.category);
    const latitude = input.latitude, longitude = input.longitude;
    if (!title || title.length>120 || description.length<10 || description.length>3000 || !address || address.length>300 || !categoryKey
      || typeof latitude!=='number' || !Number.isFinite(latitude) || Math.abs(latitude)>85
      || typeof longitude!=='number' || !Number.isFinite(longitude) || Math.abs(longitude)>180) {
      return privateJson({message:'Completa título, descripción, categoría, dirección y ubicación válidos.'},400);
    }
    const priced = pricing(input);
    if ('error' in priced) return privateJson({message:priced.error},400);
    const materialsMode = input.materialsMode ?? 'client';
    if (!MATERIALS_MODES.includes(materialsMode as typeof MATERIALS_MODES[number])) {
      return privateJson({message:'Elige si te cotizan solo la mano de obra o también los materiales.'},400);
    }
    // Solo categorías activas del backend (las mismas que eligen los
    // trabajadores como oficio), por id o por nombre sin tildes.
    let categories;
    try { categories = await loadCategories(session.token); }
    catch { return privateJson({message:'No se pudieron cargar las categorías. Reintenta en un momento.'},503); }
    const category = categories.find((item) => item.id === categoryKey || plain(item.name) === plain(categoryKey));
    if (!category) return privateJson({message:'Elige una categoría de la lista.'},400);
    // Identity and cash payment are derived here. Never forward an arbitrary
    // client ID or payment instruction from the browser.
    const response = await backend('/mobile/requests',session.token,{clientUserId:session.user.id,title,description,address,
      latitude,longitude,category:category.name,aiCategories:[{id:category.id,name:category.name,confidence:1}],
      paymentMethod:'Efectivo',paymentMethodCode:'cash',materialsMode,...priced.price});
    return privateJson(await response.json(),response.status);
  } catch { return privateJson({message:'No se pudo publicar. Revisa tu historial antes de volver a intentar.'},503); }
}
