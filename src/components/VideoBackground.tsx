"use client";

import { useEffect, useRef } from "react";

/**
 * El video termina (~29 s) con una tarjeta del logo sobre morado oscuro. Como
 * fondo oscurece toda la página y el texto oscuro deja de verse, así que el
 * bucle se corta antes. Si se reemplaza el video por otro sin esa tarjeta,
 * poner `null` para dejar que se repita completo.
 */
const LOOP_END_SECONDS: number | null = 28.4;

type FrameVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (callback: () => void) => number;
  cancelVideoFrameCallback?: (handle: number) => void;
};

/**
 * Video de fondo fijo para toda la web. Va detrás del contenido (-z-20) y bajo
 * dos capas: un velo claro que garantiza el contraste del texto y un tinte de
 * marca. Las tarjetas "glass" de cada sección lo desenfocan por encima.
 *
 * Respeta `prefers-reduced-motion` (queda en pausa en el primer cuadro) y
 * `Save-Data` (no descarga el video; queda solo el degradado).
 *
 * Sin estado de React a propósito: el video puede terminar de cargar antes de
 * la hidratación, así que la visibilidad se maneja directamente sobre el nodo.
 */
export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (connection?.saveData) {
      video.removeAttribute("src");
      video.load();
      return;
    }

    const show = () => {
      video.style.opacity = "1";
    };
    const frameVideo = video as FrameVideo;
    const loopEnd = () =>
      LOOP_END_SECONDS === null
        ? Infinity
        : Math.min(LOOP_END_SECONDS, (video.duration || Infinity) - 0.1);
    const rewindIfNeeded = () => {
      if (video.currentTime >= loopEnd()) video.currentTime = 0;
    };
    let frameHandle = 0;
    const onFrame = () => {
      rewindIfNeeded();
      frameHandle = frameVideo.requestVideoFrameCallback!(onFrame);
    };
    // Los frames dan precisión; `timeupdate` (~4 veces/s) es el respaldo cuando
    // no hay frames presentados (pestaña oculta) o el navegador no lo soporta.
    if (frameVideo.requestVideoFrameCallback) {
      frameHandle = frameVideo.requestVideoFrameCallback(onFrame);
    }
    video.addEventListener("timeupdate", rewindIfNeeded);
    const onEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };
    video.addEventListener("ended", onEnded);
    if (video.readyState >= 2) show();
    video.addEventListener("loadeddata", show);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduceMotion.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          /* autoplay bloqueado: se queda en el primer cuadro */
        });
      }
    };
    sync();
    reduceMotion.addEventListener("change", sync);

    return () => {
      if (frameHandle) frameVideo.cancelVideoFrameCallback?.(frameHandle);
      video.removeEventListener("timeupdate", rewindIfNeeded);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("loadeddata", show);
      reduceMotion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[#e8e1d8]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        style={{ opacity: 0 }}
        src="/videos/chamba-bg.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
      />
      {/* Velo claro: mantiene legible el texto sobre cualquier cuadro. */}
      <div className="absolute inset-0 bg-white/40" />
      {/* Tinte de marca. */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.20)_0%,rgba(255,255,255,0)_45%,rgba(234,179,8,0.10)_100%)]" />
    </div>
  );
}
