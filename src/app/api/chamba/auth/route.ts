import { backend, jsonBody, privateJson, readSession, sameOrigin, SESSION_COOKIE } from '@/lib/chamba-session';

export async function GET() {
  try { const session = await readSession(); return privateJson({ user: session?.user ?? null }); }
  catch { return privateJson({ message: 'No se pudo comprobar la sesión. Reintenta.' }, 503); }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return privateJson({ message: 'Origen inválido.' }, 403);
  try {
    const input = await jsonBody(request);
    const registration = input.action === 'register';
    if (!registration && input.action !== 'login') return privateJson({message:'Acción inválida.'},400);
    const payload = registration ? { type: input.type === 'worker' ? 'worker' : 'client', source: 'web',
      firstName: input.firstName, email: input.email, password: input.password, phone: input.phone, phoneIdToken: input.phoneIdToken }
      : { identifier: input.identifier, password: input.password };
    const response = await backend(registration ? '/auth/register' : '/auth/login', undefined, payload);
    const value = await response.json();
    if (!response.ok) return privateJson({message: value.message || 'No se pudo iniciar sesión.'},response.status);
    if (!value.token || !value.user?.id) throw new Error('Respuesta de sesión inválida.');
    const result = privateJson({user: {id:value.user.id,type:value.user.type,firstName:value.user.firstName,phone:value.user.phone}});
    result.cookies.set(SESSION_COOKIE,value.token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:30*86400});
    return result;
  } catch { return privateJson({message:'No se pudo conectar. Revisa los datos e intenta de nuevo.'},503); }
}

export async function DELETE(request: Request) {
  if (!sameOrigin(request)) return privateJson({message:'Origen inválido.'},403);
  const response = privateJson({ok:true}); response.cookies.delete(SESSION_COOKIE); return response;
}
