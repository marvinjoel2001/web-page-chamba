import { backend, jsonBody, privateJson, readSession, sameOrigin } from '@/lib/chamba-session';

export async function GET() {
  try {
    const session = await readSession();
    if (!session) return privateJson({message:'Inicia sesión para ver tus trabajos.'},401);
    if (session.user.type !== 'client') return privateJson({message:'Necesitas una cuenta de cliente.'},403);
    const response = await backend('/mobile/client/web-jobs',session.token);
    return privateJson(await response.json(),response.status);
  } catch { return privateJson({message:'No se pudo cargar tu historial.'},503); }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return privateJson({message:'Origen inválido.'},403);
  try {
    const session = await readSession();
    if (!session) return privateJson({message:'Inicia sesión para publicar tu trabajo.'},401);
    if (session.user.type !== 'client') return privateJson({message:'Publica desde una cuenta de cliente.'},403);
    const input = await jsonBody(request);
    const category = String(input.category ?? '').trim();
    const title = String(input.title ?? '').trim(), description = String(input.description ?? '').trim(), address = String(input.address ?? '').trim();
    const latitude = input.latitude, longitude = input.longitude, budget = input.budget;
    if (!title || title.length>120 || description.length<10 || description.length>3000 || !address || address.length>300
      || typeof budget!=='number' || !Number.isFinite(budget) || budget<=0 || budget>100000
      || typeof latitude!=='number' || !Number.isFinite(latitude) || Math.abs(latitude)>85
      || typeof longitude!=='number' || !Number.isFinite(longitude) || Math.abs(longitude)>180
      || !['Limpieza','Plomería','Electricidad','Pintura','Jardinería','Albañilería','Carpintería','Mudanzas','General'].includes(category)) {
      return privateJson({message:'Completa título, descripción, categoría, presupuesto y ubicación válidos.'},400);
    }
    // Identity, fixed-price modality and cash are derived here. Never forward an
    // arbitrary client ID or payment instruction from the browser.
    const response = await backend('/mobile/requests',session.token,{clientUserId:session.user.id,title,description,address,
      category,budget,latitude,longitude,priceType:'fixed',modality:'fixed',paymentMethod:'Efectivo',paymentMethodCode:'cash',
      aiCategories:[{id:category.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(),name:category,confidence:1}]});
    return privateJson(await response.json(),response.status);
  } catch { return privateJson({message:'No se pudo publicar. Revisa tu historial antes de volver a intentar.'},503); }
}
