"use client";

import { useState } from "react";
import { Hammer, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { subscribeEmail } from "../actions/subscribe";

export default function Footer() {
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
  return (
    <footer className="bg-[#090d16] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Logo and Intro */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-primary-light text-white">
                <Hammer className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Chamba</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              La plataforma móvil líder en conexión de servicios locales. Ayudando a construir comunidades de confianza, conectando clientes con el mejor talento local sin intermediarios.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="p-2 bg-slate-900 border border-white/5 hover:border-brand-primary/30 text-slate-400 hover:text-white rounded-xl transition" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="p-2 bg-slate-900 border border-white/5 hover:border-brand-primary/30 text-slate-400 hover:text-white rounded-xl transition" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="#" className="p-2 bg-slate-900 border border-white/5 hover:border-brand-primary/30 text-slate-400 hover:text-white rounded-xl transition" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Empresa</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
                <li><a href="#inicio" className="hover:text-brand-primary transition">Sobre nosotros</a></li>
                <li><a href="#testimonios" className="hover:text-brand-primary transition">Testimonios</a></li>
                <li><a href="#como-funciona" className="hover:text-brand-primary transition">Cómo funciona</a></li>
                <li><a href="#contacto" className="hover:text-brand-primary transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Recursos</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
                <li><a href="/help" className="hover:text-brand-primary transition">Soporte técnico</a></li>
                <li><a href="/help" className="hover:text-brand-primary transition">Centro de ayuda</a></li>
                <li><a href="/terms" className="hover:text-brand-primary transition">Acuerdo Legal (Términos)</a></li>
                <li><a href="/privacy" className="hover:text-brand-primary transition">Privacidad</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Suscríbete a novedades</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Recibe notificaciones sobre nuevas especialidades en tu zona y lanzamientos de nuevas versiones de la aplicación.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full relative">
              <div className="flex gap-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Tu correo electrónico"
                  required
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 bg-slate-900 border border-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-brand-primary transition disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="px-4 py-2.5 flex items-center justify-center min-w-[100px] bg-brand-primary hover:bg-brand-primary-dark disabled:bg-brand-primary/50 text-white font-bold text-xs rounded-xl shadow shadow-brand-primary/20 transition"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === "success" ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    "Suscribirse"
                  )}
                </button>
              </div>
              
              {/* Status Message */}
              {status !== "idle" && message && (
                <div className={`flex items-center gap-1.5 text-[11px] mt-1 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                  {status === "success" ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5" />
                  )}
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Legal and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Chamba App Inc. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-[11px] text-slate-500">
            <a href="/terms" className="hover:text-slate-300 transition-colors">Términos de servicio</a>
            <span>•</span>
            <a href="/privacy" className="hover:text-slate-300 transition-colors">Políticas de privacidad</a>
            <span>•</span>
            <a href="/help" className="hover:text-slate-300 transition-colors">Ayuda</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
