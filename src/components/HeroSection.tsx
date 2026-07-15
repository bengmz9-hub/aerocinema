'use client';
import { Play } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-neutral-950 overflow-hidden flex items-center justify-center select-none">

      {/* 1. Fondo: Vídeo y Degradado */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/features.webm" type="video/webm" />
        </video>
        {/* Degradado cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/85 z-10" />
      </div>

      {/* 2. Contenido Editorial */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">

        {/* Tag Técnico */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-semibold">
            OPERADOR UAS REGISTRADO AESA // CERTIFIED
          </span>
        </div>

        {/* Título */}
        <h1 className="font-cinzel text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] uppercase">
          JF.DroneVision
        </h1>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 font-cinzel text-2xl md:text-4xl mt-2 uppercase tracking-widest">
          Perspectiva Cinematográfica
        </h2>

        {/* Subtítulo */}
        <p className="mt-8 font-sans font-light text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide">
          Producción audiovisual de alta gama y gestión de permisos de vuelo en espacios aéreos controlados en <strong className="text-white font-medium">Barcelona</strong> y <strong className="text-white font-medium">Málaga</strong>.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#contacto"
            className="w-full sm:w-auto text-center px-10 py-4 bg-white text-black font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-zinc-200 transition-colors duration-300 cursor-pointer"
          >
            SOLICITAR DOSSIER
          </Link>
          <Link
            href="#portfolio"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto text-center px-10 py-4 bg-transparent text-white border border-white/15 font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-white/5 transition-colors duration-300 cursor-pointer backdrop-blur-xs"
          >
            <Play className="w-3 h-3 fill-current group-hover:scale-110 transition-transform" />
            EXPLORAR GALERÍA
          </Link>
        </div>
      </div>

      {/* 3. Guías de encuadre */}
      <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-white/15 pointer-events-none z-20 hidden md:block" />
      <div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-white/15 pointer-events-none z-20 hidden md:block" />
      <div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-white/15 pointer-events-none z-20 hidden md:block" />
      <div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-white/15 pointer-events-none z-20 hidden md:block" />
    </section>
  );
}
