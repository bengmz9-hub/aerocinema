'use client';

import React from 'react';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none">
      
      {/* 1. EL VÍDEO COMO PROTAGONISTA ABSOLUTO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          {/* Prioridad 1: hero.webm en la raíz */}
          <source src="/hero.webm" type="video/webm" />
          {/* Prioridad 2: hero.webm en la carpeta de vídeos */}
          <source src="/videos/hero.webm" type="video/webm" />
          {/* Backup de emergencia si los anteriores fallan */}
          <source src="/videos/features.webm" type="video/webm" />
        </video>
        {/* Degradado cinematográfico que funde el vídeo con el negro de la web */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/85 z-10" />
      </div>

      {/* 2. CONTENIDO EDITORIAL MINIMALISTA */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        
        {/* Tag de Licencia AESA Estilo Técnico Sutil */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-semibold">
            OPERADOR UAS REGISTRADO AESA // CERTIFIED
          </span>
        </div>

        {/* Título Monumental de Dos Líneas */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] uppercase">
          PERSPECTIVA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            CINEMATOGRÁFICA
          </span>
        </h1>

        {/* Subtítulo Corto y de Alto Impacto */}
        <p className="mt-8 font-montserrat font-light text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide">
          Producción audiovisual de alta gama y gestión de permisos de vuelo en espacios aéreos controlados en <strong className="text-white font-medium">Barcelona</strong> y <strong className="text-white font-medium">Málaga</strong>.
        </p>

        {/* Botones de Acción Elegantes */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center font-montserrat">
          <a 
            href="#contacto"
            className="w-full sm:w-auto text-center px-10 py-4 bg-white text-black font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-zinc-200 transition-colors duration-300 cursor-pointer"
          >
            SOLICITAR DOSSIER
          </a>
          <a 
            href="#portfolio"
            className="w-full sm:w-auto text-center px-10 py-4 bg-transparent text-white border border-white/15 font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-white/5 transition-colors duration-300 cursor-pointer backdrop-blur-xs"
          >
            EXPLORAR GALERÍA
          </a>
        </div>
      </div>

      {/* 3. GUIAS DE ENCUADRE DE CÁMARA (Detalle cinematográfico muy sutil) */}
      <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-white/15 pointer-events-none z-20 hidden md:block" />
      <div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-white/15 pointer-events-none z-20 hidden md:block" />
      <div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-white/15 pointer-events-none z-20 hidden md:block" />
      <div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-white/15 pointer-events-none z-20 hidden md:block" />
    </section>
  );
}
