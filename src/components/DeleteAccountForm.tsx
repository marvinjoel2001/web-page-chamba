"use client";

import React, { useState } from "react";
import { AlertTriangle, CalendarClock, CheckCircle2, Loader2, Lock } from "lucide-react";

type Session = { token: string; email: string; type: string; firstName: string };
type Status = { pending: boolean; scheduledFor: string | null };
type Step = "login" | "confirm" | "scheduled";

const apiBase = () => {
  const configured = process.env.NEXT_PUBLIC_API_URL;
  const base = (configured || "http://localhost:3001/api").replace(/\/+$/, "");
  return base.endsWith("/api") ? base : `${base}/api`;
};

async function call<T>(path: string, init: RequestInit & { token?: string } = {}): Promise<T> {
  const { token, ...rest } = init;
  const response = await fetch(`${apiBase()}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = Array.isArray(body?.message) ? body.message[0] : body?.message;
    const error = new Error(typeof message === "string" ? message : "No pudimos completar la acción.");
    (error as Error & { status?: number }).status = response.status;
    throw error;
  }
  return body as T;
}

const longDate = (iso: string | null) =>
  iso
    ? new Date(iso).toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })
    : "";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/15 disabled:opacity-60";

/**
 * Eliminación de cuenta desde la web, con las mismas barreras que la app:
 * iniciar sesión, leer qué se pierde, escribir el correo otra vez y marcar
 * que se entiende. El borrado real ocurre a los 30 días y se puede cancelar.
 * El token solo vive en memoria mientras la página está abierta.
 */
export default function DeleteAccountForm() {
  const [step, setStep] = useState<Step>("login");
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<Status>({ pending: false, scheduledFor: null });
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [understood, setUnderstood] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const emailMatches =
    !!session && confirmEmail.trim().toLowerCase() === session.email.trim().toLowerCase() && confirmEmail.trim() !== "";

  const run = async (task: () => Promise<void>) => {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await task();
    } catch (err) {
      const e = err as Error & { status?: number };
      setError(
        e.status === 401
          ? "Correo o contraseña incorrectos."
          : e instanceof TypeError
            ? "No pudimos conectar. Revisa tu conexión e inténtalo de nuevo."
            : e.message,
      );
    } finally {
      setBusy(false);
    }
  };

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    run(async () => {
      const result = await call<{ token: string; user: { email: string; type: string; firstName: string } }>(
        "/auth/login",
        { method: "POST", body: JSON.stringify({ identifier: identifier.trim(), password }) },
      );
      setPassword("");
      const next: Session = {
        token: result.token,
        email: result.user.email,
        type: result.user.type,
        firstName: result.user.firstName,
      };
      const current = await call<Status>("/mobile/account/deletion", { token: next.token });
      setSession(next);
      setStatus(current);
      setStep(current.pending ? "scheduled" : "confirm");
    });
  };

  const requestDeletion = (event: React.FormEvent) => {
    event.preventDefault();
    if (!session || !emailMatches || !understood) return;
    run(async () => {
      const result = await call<Status>("/mobile/account/deletion", {
        method: "POST",
        token: session.token,
        body: JSON.stringify({ email: confirmEmail }),
      });
      setStatus(result);
      setStep("scheduled");
    });
  };

  const cancelDeletion = () => {
    if (!session) return;
    run(async () => {
      const result = await call<Status>("/mobile/account/deletion/cancel", {
        method: "POST",
        token: session.token,
        body: "{}",
      });
      setStatus(result);
      setConfirmEmail("");
      setUnderstood(false);
      setStep("confirm");
      setNotice("Listo, cancelaste la eliminación. Tu cuenta sigue activa.");
    });
  };

  const errorBox = error ? (
    <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
      {error}
    </p>
  ) : null;

  if (step === "login") {
    return (
      <form onSubmit={login} className="space-y-4" data-testid="delete-login">
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Lock className="h-4 w-4 text-violet-600" /> Inicia sesión con tu cuenta de Chamba
        </p>
        <input
          className={inputClass}
          type="text"
          autoComplete="username"
          placeholder="Correo o teléfono"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          disabled={busy}
          required
        />
        <input
          className={inputClass}
          type="password"
          autoComplete="current-password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={busy}
          required
        />
        {errorBox}
        <button
          type="submit"
          disabled={busy || !identifier.trim() || !password}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy && <Loader2 className="h-4 w-4 animate-spin" />} Continuar
        </button>
        <p className="text-xs leading-relaxed text-slate-500">
          ¿Entras solo con Google y no tienes contraseña? Elimina tu cuenta desde la app (Perfil → Configuración de la
          cuenta) o escríbenos desde ese correo a{" "}
          <a className="font-semibold text-violet-700 underline" href="mailto:soporte@chamba.app?subject=Eliminar%20mi%20cuenta">
            soporte@chamba.app
          </a>
          .
        </p>
      </form>
    );
  }

  if (step === "scheduled") {
    return (
      <div className="space-y-4 text-center" data-testid="delete-scheduled">
        <CalendarClock className="mx-auto h-12 w-12 text-red-600" />
        <h3 className="text-2xl font-extrabold text-slate-900">Eliminación programada</h3>
        <p className="text-slate-600">
          Tu cuenta y tus datos se eliminarán el <strong>{longDate(status.scheduledFor)}</strong>. Hasta esa fecha tus
          datos se conservan y puedes seguir usando Chamba.
        </p>
        <p className="text-sm text-slate-500">
          Si cambias de opinión, cancélalo aquí o en la app desde tu perfil antes de esa fecha.
        </p>
        {errorBox}
        <button
          type="button"
          onClick={cancelDeletion}
          disabled={busy}
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-red-600 px-5 py-2.5 font-bold text-red-700 transition hover:bg-red-50 disabled:opacity-50"
        >
          {busy && <Loader2 className="h-4 w-4 animate-spin" />} Cancelar eliminación
        </button>
      </div>
    );
  }

  const isWorker = session?.type === "worker";
  return (
    <form onSubmit={requestDeletion} className="space-y-5" data-testid="delete-confirm">
      {notice && (
        <p className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          <CheckCircle2 className="h-4 w-4" /> {notice}
        </p>
      )}
      <div className="flex gap-3 rounded-2xl bg-red-50 p-4 text-slate-800">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
        <div className="space-y-2 text-sm leading-relaxed">
          <p className="font-bold">Hola {session?.firstName}, esto eliminará tu cuenta de Chamba.</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Tu nombre, foto, teléfono, correo y ubicación.</li>
            {isWorker && <li>Tu billetera: ganancias registradas, historial y estadísticas.</li>}
            {isWorker && <li>Tu verificación de identidad, calificaciones y portafolio.</li>}
            <li>Tu acceso: no podrás volver a iniciar sesión.</li>
          </ul>
          <p>Se hará recién en 30 días; mientras tanto tus datos se conservan y puedes cancelarlo.</p>
        </div>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-slate-700">Escribe el correo de tu cuenta para confirmar</span>
        <input
          className={inputClass}
          type="email"
          autoComplete="off"
          placeholder="tu correo"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          disabled={busy}
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-red-600"
          checked={understood}
          onChange={(e) => setUnderstood(e.target.checked)}
          disabled={busy}
        />
        Entiendo que pasados 30 días mi cuenta no se podrá recuperar.
      </label>
      {errorBox}
      <button
        type="submit"
        disabled={busy || !emailMatches || !understood}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
      >
        {busy && <Loader2 className="h-4 w-4 animate-spin" />} Eliminar mi cuenta en 30 días
      </button>
    </form>
  );
}
