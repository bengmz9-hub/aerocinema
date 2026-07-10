"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {
      /* Manejo básico por si el navegador bloquea el autoplay */
    });
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* 📹 Vídeo de fondo forzado al 50% de opacidad sin esperas */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-beautiful-beach-14023-large.mp4"
      />

      {/* 🎬 Un único overlay equilibrado para garantizar el contraste del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

      {/* 🎛️ Marco de encuadre estilo visor de dron */}
      <div className="pointer-events-none absolute inset-6 hidden border border-white/15 sm:inset-10 sm:block md:inset-14">
        <span className="absolute -top-px -left-px h-6 w-px bg-white/40" />
        <span className="absolute -top-px -left-px h-px w-6 bg-white/40" />
        <span className="absolute -top-px -right-px h-6 w-px bg-white/40" />
        <span className="absolute -top-px -right-px h-px w-6 bg-white/40" />
        <span className="absolute -bottom-px -left-px h-6 w-px bg-white/40" />
        <span className="absolute -bottom-px -left-px h-px w-6 bg-white/40" />
        <span className="absolute -bottom-px -right-px h-6 w-px bg-white/40" />
        <span className="absolute -bottom-px -right-px h-px w-6 bg-white/40" />
      </div>

      {/* 📝 Contenido central */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <span className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-white/60">
          Cine aéreo · Mar · Montaña · Eventos
        </span>
        <h1 className="text-balance font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl">
          El mundo,
          <br />
          <span className="italic text-white/90">visto desde arriba.</span>
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-base font-light leading-relaxed text-white/70 sm:text-lg">
          Capturo la escala real de cada paisaje y cada momento con movimientos
          de cámara imposibles a pie de tierra. Costa, cumbres y celebraciones,
          contadas desde una perspectiva que no se olvida.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#trabajo"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-black transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10">Ver trabajo</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          </a>
          <a
            href="#contacto"
            className="group relative rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm transition-all duration-300 ease-out hover:border-white/70 hover:bg-white/5 hover:text-white"
          >
            Cuéntanos tu idea
            <span className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* 🖱️ Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="h-1.5 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
