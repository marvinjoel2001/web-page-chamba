"use client";

import { ChevronRight, Download, Plus } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";

/**
 * Acciones flotantes abajo a la derecha: publicar un trabajo e instalar la
 * app. Aparecen al dejar atrás el hero (que ya tiene sus propios botones).
 */
export default function FloatingActions({ visible }: { visible: boolean }) {
  const pathname = usePathname();
  if (pathname.startsWith("/eliminar-cuenta")) return null;
  const showPublish = !pathname.startsWith("/publicar-trabajo");
  const hidden = !visible;

  return (
    <div
      aria-hidden={hidden}
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-5 transition-[opacity,translate] duration-300 motion-reduce:transition-none ${
        hidden ? "pointer-events-none opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      {showPublish && (
        <Link href="/publicar-trabajo" tabIndex={hidden ? -1 : undefined} className="fab">
          <Plus className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
          <span className="fab-divider" aria-hidden="true" />
          <span>Publicar trabajo</span>
          <span className="fab-arrow" aria-hidden="true"><ChevronRight className="h-5 w-5" strokeWidth={3} /></span>
        </Link>
      )}
      <Link href="/#descargar" tabIndex={hidden ? -1 : undefined} className="fab fab-install">
        <Download className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
        <span className="fab-divider" aria-hidden="true" />
        <span>Instalar app</span>
        <span className="fab-arrow" aria-hidden="true"><ChevronRight className="h-5 w-5" strokeWidth={3} /></span>
      </Link>
    </div>
  );
}
