"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, Wrench, CheckCircle2, MapPin, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WorkerRegistrationForm() {
  const t = useTranslations("WorkerRegistrationForm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
      
      const response = await fetch(`${API_URL}/worker-leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }
      
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert(t("error_msg"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass p-8 rounded-3xl glow-primary"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">{t("title")}</h2>
              <p className="text-slate-400 text-sm">
                {t("subtitle")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 ml-1">{t("label_name")}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-brand-primary" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#0B172A]/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder={t("placeholder_name")}
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 ml-1">{t("label_whatsapp")}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-brand-primary" />
                  </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#0B172A]/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder={t("placeholder_whatsapp")}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 ml-1">{t("label_email")}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-brand-primary" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="w-full pl-10 pr-4 py-3 bg-[#0B172A]/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder={t("placeholder_email")}
                  />
                </div>
              </div>
              
              {/* Ciudad */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 ml-1">{t("label_city")}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-brand-primary" />
                  </div>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#0B172A]/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder={t("placeholder_city")}
                  />
                </div>
              </div>

              {/* Categoría */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 ml-1">{t("label_category")}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Wrench className="h-5 w-5 text-brand-primary" />
                  </div>
                  <select
                    name="category"
                    required
                    defaultValue=""
                    className="w-full pl-10 pr-4 py-3 bg-[#0B172A] border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors cursor-pointer"
                  >
                    <option value="" disabled>{t("category_default")}</option>
                    <option value="plomeria">{t("cat_plomeria")}</option>
                    <option value="electricidad">{t("cat_electricidad")}</option>
                    <option value="limpieza">{t("cat_limpieza")}</option>
                    <option value="construccion">{t("cat_construccion")}</option>
                    <option value="jardineria">{t("cat_jardineria")}</option>
                    <option value="mecanica">{t("cat_mecanica")}</option>
                    <option value="transporte">{t("cat_transporte")}</option>
                    <option value="otros">{t("cat_otros")}</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-brand-primary hover:bg-brand-primary-light text-white font-semibold py-3.5 px-4 rounded-xl transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center glow-primary"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    {t("btn_sending")}
                  </>
                ) : (
                  t("btn_submit")
                )}
              </button>
              
              <p className="text-[10px] text-slate-500 text-center mt-4">
                {t("terms_disclaimer")}
              </p>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-8 rounded-3xl glow-highlight text-center"
          >
            <div className="w-20 h-20 bg-[#EAB308]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-[#EAB308]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{t("success_title")}</h2>
            <p className="text-slate-300 mb-6">
              {t("success_msg")}
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors"
            >
              {t("btn_register_another")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
