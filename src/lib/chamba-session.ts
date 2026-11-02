import 'server-only';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { apiBase } from './api-base';

export const SESSION_COOKIE = 'chamba_session';

export function sameOrigin(request: Request): boolean {
  return request.headers.get('origin') === new URL(request.url).origin;
}

export async function backend(path: string, token?: string, body?: unknown, method?: string) {
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_API_URL) throw new Error('Servicio no configurado.');
  return fetch(`${apiBase()}${path}`, { method: method ?? (body ? 'POST' : 'GET'), cache: 'no-store',
    signal: AbortSignal.timeout(45000), headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {}) });
}

export async function readSession() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const response = await backend('/auth/session', token);
  if (response.status === 401 || response.status === 403) return null;
  if (!response.ok) throw new Error('No se pudo comprobar tu sesión.');
  const value = await response.json();
  return { token, user: value.user as { id: string; type: 'client' | 'worker'; firstName: string; phone: string } };
}

export function privateJson(value: unknown, status = 200) {
  return NextResponse.json(value, { status, headers: { 'Cache-Control': 'private, no-store' } });
}

export async function jsonBody(request: Request) {
  if (!request.headers.get('content-type')?.startsWith('application/json')) throw new Error('Formato de solicitud inválido.');
  const text = await request.text();
  if (text.length > 24000) throw new Error('Solicitud demasiado grande.');
  const value: unknown = JSON.parse(text);
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Solicitud inválida.');
  return value as Record<string, unknown>;
}
