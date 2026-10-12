"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ExternalLink } from "lucide-react";
import { subscribeEmail } from "../actions/subscribe";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const linkClass = "focus-ring rounded text-base font-medium text-ink-soft hover:text-ink hover:underline decoration-accent decoration-2 underline-offset-4";

export default function Footer() {
  const t = useTranslations("Footer");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    const result = await subscribeEmail(email);

    if (result.success) {
      setStatus("success");
      setMessage(result.message!);
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.error!);
    }
  };

  const socials = [
    {
      label: "X (Twitter)",
      icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
    },
    {
      label: "Facebook",
      icon: <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />,
    },
  ];

  return (
    <footer className="border-t-2 border-line pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <img src="/images/icon.png" alt="" className="w-9 h-9 rounded-lg object-cover" />
              <span className="text-xl font-extrabold tracking-tight text-ink">Chamba</span>
            </div>
            <p className="max-w-sm text-base leading-relaxed font-medium text-ink-soft">{t("desc")}</p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="focus-ring w-11 h-11 flex items-center justify-center rounded-full border border-line text-ink hover:bg-[rgba(43,33,26,0.08)]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-ink">{t("company")}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                <li><Link href="/#nosotros" className={linkClass}>{t("about")}</Link></li>
                <li><Link href="/#testimonios" className={linkClass}>{t("testimonials")}</Link></li>
                <li><Link href="/#como-funciona" className={linkClass}>{t("how_it_works")}</Link></li>
                <li>
                  <a href="https://agency-chamba.vercel.app/" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1.5`}>
                    Chamba Agencias <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-ink">{t("resources")}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                <li><Link href="/help" className={linkClass}>{t("help")}</Link></li>
                <li><Link href="/terms" className={linkClass}>{t("terms")}</Link></li>
                <li><Link href="/privacy" className={linkClass}>{t("privacy")}</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start gap-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink">{t("newsletter_title")}</h2>
            <p className="text-base leading-relaxed font-medium text-ink-soft">{t("newsletter_desc")}</p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">{t("email_placeholder")}</label>
              <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-2 w-full">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder={t("email_placeholder")}
                  required
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 min-w-0 min-h-12 rounded-full border-2 border-line bg-[#FFFDF9] px-5 text-base text-ink placeholder:text-ink-soft focus:outline-none focus:border-accent-strong disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="btn btn-primary disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" aria-label="Enviando" />
                  ) : status === "success" ? (
                    <CheckCircle2 className="w-4 h-4" aria-label="Suscrito" />
                  ) : (
                    t("subscribe")
                  )}
                </button>
              </div>
              {status !== "idle" && message && (
                <p
                  role="status"
                  className={`flex items-center gap-1.5 text-sm font-semibold ${status === "success" ? "text-[#15803D]" : "text-[#B91C1C]"}`}
                >
                  {status === "success" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm font-medium text-ink-soft">{t("rights", { year: new Date().getFullYear() })}</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/terms" className={`${linkClass} !text-sm`}>{t("terms_footer")}</Link>
            <Link href="/privacy" className={`${linkClass} !text-sm`}>{t("privacy_footer")}</Link>
            <Link href="/help" className={`${linkClass} !text-sm`}>{t("help_footer")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
