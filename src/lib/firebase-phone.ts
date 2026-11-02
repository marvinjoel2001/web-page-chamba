'use client';

export async function phoneAuth() {
  const [{getApps,initializeApp},{getAuth,initializeAuth,inMemoryPersistence}] = await Promise.all([import('firebase/app'),import('firebase/auth')]);
  const existing = getApps().find(app=>app.name==='chamba-phone');
  if (existing) return getAuth(existing);
  const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyBxbiHCs-gLlc-7J3ZF15vdj4OF-0t6Vmg',
    authDomain: 'chamba-9f6db.firebaseapp.com', projectId: 'chamba-9f6db',
    appId: '1:899491855193:web:7a506c77ff5b4cccaf6a48',
  },'chamba-phone');
  const auth = initializeAuth(app,{persistence:inMemoryPersistence}); auth.languageCode='es'; return auth;
}

export function bolivianPhone(input: string) {
  const digits=input.replace(/\D/g,'');
  if (/^[67]\d{7}$/.test(digits)) return '+591'+digits;
  if (/^591[67]\d{7}$/.test(digits)) return '+'+digits;
  if (/^\+[1-9]\d{7,14}$/.test(input.trim())) return input.trim();
  throw new Error('Escribe un celular válido, por ejemplo +591 7XXXXXXX.');
}
