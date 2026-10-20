/**
 * Base de la API del backend (NEXT_PUBLIC_API_URL acepta la base con /api o
 * solo el origen), igual que en WorkerRegistrationForm y DeleteAccountForm.
 */
export function apiBase(): string {
  const configured = process.env.NEXT_PUBLIC_API_URL;
  const base = (configured || "http://localhost:3001/api").replace(/\/+$/, "");
  return base.endsWith("/api") ? base : `${base}/api`;
}
