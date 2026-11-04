"use client";

import { useEffect, useRef } from "react";

/**
 * El video termina (~29 s) con una tarjeta del logo sobre morado oscuro.
 * Cortamos el bucle en 28.2s para mantener la escena del living iluminada.
 */
const LOOP_END_SECONDS = 28.2;

/**
 * Opacidad del velo que cubre el video. Arriba (hero, texto grande) deja ver
 * más el video; al bajar hacia secciones con más texto se vuelve más opaco
 * para que los párrafos se lean bien (contraste >= 4.5:1 en cualquier cuadro).
 */
const VEIL_TOP = 0.7;
const VEIL_CONTENT = 0.86;

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const veilRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Obligatorio para las políticas de autoplay de Chrome, Safari y Edge
    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Si el navegador bloquea autoplay, se reproducirá al primer toque/click
          });
        }
      }
    };

    // Intentar reproducción inmediata
    playVideo();

    // Monitorear el corte antes de la placa oscura final
    const onTimeUpdate = () => {
      if (video.currentTime >= LOOP_END_SECONDS) {
        video.currentTime = 0;
        playVideo();
      }
    };

    const onEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    // Intentar reanudar en foco o primera interacción del usuario
    window.addEventListener("focus", playVideo);
    window.addEventListener("touchstart", playVideo, { once: true });
    window.addEventListener("click", playVideo, { once: true });

    // Sin estado de React: el velo se actualiza directo en el nodo al hacer scroll.
    let frame = 0;
    const updateVeil = () => {
      frame = 0;
      const veil = veilRef.current;
      if (!veil) return;
      const progress = Math.min(1, window.scrollY / (window.innerHeight * 0.6));
      veil.style.opacity = String(VEIL_TOP + (VEIL_CONTENT - VEIL_TOP) * progress);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateVeil);
    };
    updateVeil();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
      window.removeEventListener("focus", playVideo);
      window.removeEventListener("touchstart", playVideo);
      window.removeEventListener("click", playVideo);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#e8e1d8]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/chamba-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      />
      {/* Velo de un solo color (cambia de tono con el modo cliente/trabajador). */}
      <div
        ref={veilRef}
        className="absolute inset-0 bg-veil transition-[background-color] duration-500"
        style={{ opacity: VEIL_TOP }}
      />
    </div>
  );
}
