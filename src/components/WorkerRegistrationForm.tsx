"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, ArrowRight, ShieldCheck, HardHat, Eye, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WorkerRegistrationForm() {
  const t = useTranslations("WorkerRegistrationForm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isSuccess) {
      successHeadingRef.current?.focus({ preventScroll: true });
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isSuccess]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    setError("");
    setIsSubmitting(true);
    try {
      const configuredUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!configuredUrl && process.env.NODE_ENV === "production") throw new Error(t("error_msg"));
      const base = (configuredUrl || "http://localhost:3001/api").replace(/\/+$/, "");
      const api = base.endsWith("/api") ? base : `${base}/api`;
      const response = await fetch(`${api}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "worker", source: "web",
          firstName: String(values.get("firstName")).trim(),
          phone: String(values.get("phone")).trim(),
          email: String(values.get("email")).trim(),
          password: String(values.get("password")),
        }),
      });
      if (!response.ok) {
        if (response.status === 409) throw new Error(t("error_duplicate"));
        if (response.status === 400) throw new Error(t("error_validation"));
        throw new Error(t("error_msg"));
      }
      const result = await response.json();
      if (!result.user?.id || result.user.type !== "worker") throw new Error(t("error_msg"));
      form.reset();
      setIsSuccess(true);
    } catch (cause) {
      setError(cause instanceof Error && cause.message !== "Failed to fetch" ? cause.message : t("error_msg"));
    } finally {
      setIsSubmitting(false);
    }
  }

  const fields = [
    { name: "firstName", type: "text", label: "label_name", placeholder: "placeholder_name", autoComplete: "name" },
    { name: "email", type: "email", label: "label_email", placeholder: "placeholder_email", autoComplete: "email" },
    { name: "phone", type: "tel", label: "label_whatsapp", placeholder: "placeholder_whatsapp", autoComplete: "tel" },
    { name: "password", type: "password", label: "label_password", placeholder: "placeholder_password", autoComplete: "new-password" },
  ];

  return (
    <div ref={containerRef} id="registro" data-solid className="w-full max-w-lg mx-auto scroll-mt-28 rounded-[2rem] border border-line bg-[#FFFDF9] p-6 text-ink shadow-[0_20px_65px_-30px_rgba(43,33,26,0.4)]">
      {isSuccess ? (
        <div role="status" className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50"><CheckCircle2 aria-hidden="true" className="h-9 w-9 text-green-700" /></div>
          <h2 ref={successHeadingRef} tabIndex={-1} className="mt-4 text-2xl font-bold outline-none">{t("success_title")}</h2>
          <p className="mt-4 text-slate-600">{t("success_msg")}</p>
          <p className="mt-4 text-slate-600">{t("success_contact")}</p>
          <a className="btn btn-primary mt-6 w-full !whitespace-normal" href="https://play.google.com/store/apps/details?id=com.chambatrabajo.app" target="_blank" rel="noopener noreferrer">{t("download_app")}<ArrowRight className="h-4 w-4 shrink-0" /></a>
          <p className="mt-4 text-sm text-slate-600">{t("success_login")}</p>
          <button type="button" onClick={() => setIsSuccess(false)} className="mt-6 text-sm font-semibold underline focus-ring">{t("btn_register_another")}</button>
        </div>
      ) : (
        <>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-tint text-accent-strong"><HardHat className="h-6 w-6" aria-hidden="true" /></span>
            <span className="text-xs font-bold uppercase tracking-widest text-ink-soft">{t("account_badge")}</span>
          </div>
          <h2 className="text-[1.65rem] leading-tight font-extrabold tracking-tight">{t("title")}</h2>
          <p className="mt-2 text-sm text-slate-600">{t("subtitle")}</p>
          <form onSubmit={handleSubmit} className="mt-5 space-y-3" aria-busy={isSubmitting}>
            {fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={`worker-${field.name}`} className="block text-sm font-semibold mb-1">{t(field.label)}</label>
                <div className="relative">
                <input id={`worker-${field.name}`} name={field.name} type={field.name === "password" && showPassword ? "text" : field.type} autoComplete={field.autoComplete} required
                  minLength={field.name === "password" ? 8 : undefined}
                  maxLength={field.name === "password" ? 72 : field.name === "phone" ? 24 : 254}
                  pattern={field.name === "firstName" ? ".*\\S.*" : field.name === "phone" ? "[+0-9 ()\\-]{7,24}" : undefined}
                  placeholder={t(field.placeholder)} disabled={isSubmitting}
                  className={`w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:outline-none focus:border-accent-strong focus:ring-2 focus:ring-accent-tint disabled:opacity-60 ${field.name === "password" ? "pr-14" : ""}`} />
                {field.name === "password" && <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={t(showPassword ? "hide_password" : "show_password")} aria-pressed={showPassword} className="focus-ring absolute right-1 top-1 flex h-10 w-10 items-center justify-center rounded-lg text-ink-soft">{showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}</button>}
                </div>
              </div>
            ))}
            <p className="text-xs text-slate-600">{t("password_hint")}</p>
            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full !min-h-13 disabled:opacity-60">
              {isSubmitting && <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />}
              {t(isSubmitting ? "btn_sending" : "btn_submit")}
              {!isSubmitting && <ArrowRight aria-hidden="true" className="h-4 w-4" />}
            </button>
            <p className="flex items-start gap-2 border-t border-line pt-4 text-xs leading-relaxed text-ink-soft"><ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-strong" />{t("terms_disclaimer")}</p>
          </form>
        </>
      )}
    </div>
  );
}
