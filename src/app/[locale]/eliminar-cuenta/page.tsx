import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteAccountForm from "@/components/DeleteAccountForm";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs ? "Eliminar Cuenta y Datos — Chamba" : "Delete Account — Chamba",
    description: isEs
      ? "Solicitud pública para la eliminación de cuenta y datos personales de usuarios de Chamba App (requisito Google Play)."
      : "Public page to request account and personal data deletion for Chamba App users.",
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/eliminar-cuenta`,
    },
  };
}

export default async function DeleteAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-24 text-slate-700">
      <BreadcrumbsJsonLd
        items={[
          { name: "Inicio", url: `/${locale}` },
          { name: "Eliminar Cuenta", url: `/${locale}/eliminar-cuenta` },
        ]}
      />
      <Navbar activeRole="client" />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] rounded-3xl p-8 sm:p-12 shadow-sm">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Eliminar tu cuenta de Chamba</h1>
          <p className="text-base leading-relaxed text-slate-600">
            Puedes pedir la eliminación de tu cuenta y de tus datos personales en cualquier momento. Para protegerte de
            errores, la eliminación se programa con <strong>30 días de espera</strong>: durante ese tiempo tus datos se
            conservan y puedes cancelarla.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <DeleteAccountForm />
          </div>

          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-2">También desde la app</h2>
            <p>
              En Chamba ve a <strong>Perfil → Configuración de la cuenta</strong> y, al final, toca{" "}
              <strong>Eliminar mi cuenta</strong>. Mientras la eliminación esté pendiente verás un aviso en tu perfil
              para cancelarla.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-2">Si no puedes iniciar sesión</h2>
            <p>
              Escribe a{" "}
              <a href="mailto:soporte@chamba.app?subject=Eliminar%20mi%20cuenta" className="font-semibold text-violet-700 underline">
                soporte@chamba.app
              </a>{" "}
              <strong>desde el correo con el que creaste tu cuenta</strong>, con el asunto “Eliminar mi cuenta”. Por
              seguridad solo atendemos pedidos enviados desde ese correo.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-2">Los 30 días de espera</h2>
            <p>
              Durante 30 días tu cuenta y tus datos se conservan tal cual, para que nadie pierda su billetera o su
              historial por un error o porque otra persona usó su teléfono. Si cancelas antes de la fecha, todo sigue
              como estaba. Pasado ese plazo la eliminación es definitiva.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-2">Qué se elimina</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tu nombre, correo, teléfono, foto de perfil y ubicación.</li>
              <li>Tu contraseña y el acceso con Google: ya no podrás iniciar sesión.</li>
              <li>Si eres trabajador: tu verificación de identidad, fotos de documentos y tu disponibilidad.</li>
              <li>Los tokens de notificaciones de tus dispositivos.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-2">Qué se conserva</h2>
            <p>
              Los trabajos, ofertas, pagos registrados y conversaciones en los que participaste se conservan para la otra
              persona y por obligaciones contables y de resolución de disputas, pero sin tus datos personales: aparecerás
              como “Usuario eliminado”.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-2">Antes de pedirlo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Si tienes un trabajo o una solicitud en curso, termínalo o cancélalo primero.</li>
              <li>
                Si eres trabajador, revisa tu billetera: después de la eliminación ya no podrás ver tus ganancias ni tu
                historial.
              </li>
            </ul>

            <p className="mt-10 text-xs text-slate-400">Última actualización: 14 de octubre de 2026</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
