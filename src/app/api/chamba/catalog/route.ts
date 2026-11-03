import { privateJson, readSession } from '@/lib/chamba-session';
import { loadCategories, loadModalities } from '@/lib/job-catalog';

/** Categorías y modalidades activas para el formulario de publicar. */
export async function GET() {
  try {
    const session = await readSession();
    if (!session) return privateJson({message:'Inicia sesión para publicar tu trabajo.'},401);
    if (session.user.type !== 'client') return privateJson({message:'Publica desde una cuenta de cliente.'},403);
    const [categories, modalities] = await Promise.all([loadCategories(session.token), loadModalities()]);
    return privateJson({categories, modalities});
  } catch { return privateJson({message:'No se pudieron cargar las categorías. Reintenta en un momento.'},503); }
}
