'use client';

import React from 'react';
import { Shield, Award } from 'lucide-react';

export function AboutMe() {
  return (
    <section className="w-full bg-transparent py-24 px-4 md:px-8 relative z-10 overflow-x-clip overflow-y-visible">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: EL REVELADO EN VÍDEO (5 Columnas) */}
        <div className="lg:col-span-5 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.08] group shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-101"
          >
            <source src="/videos/jose-reveal.mp4" type="video/mp4" />
          </video>
          
          {/* Sombra interna cinematográfica */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Marcadores estéticos de visor de cámara */}
          <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/40 tracking-widest uppercase">
            [ UAV_OP_POV ]
          </div>
          <div className="absolute bottom-6 right-6 font-mono text-[9px] text-white/40 tracking-widest uppercase">
            REC // 24FPS
          </div>
        </div>

        {/* COLUMNA DERECHA: PERFIL EDITORIAL (7 Columnas) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-white/20" />
            <span className="text-zinc-500 text-[10px] font-medium tracking-[0.3em] uppercase font-montserrat">
              Operador de Vuelo
            </span>
          </div>
          
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase mb-6">
            José Antonio
          </h2>
          
          <p className="font-montserrat font-light text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide mb-8">
            Operador técnico y piloto de UAS registrado en AESA. Especializado en capturar la geometría del territorio y la luz de cine en las costas de Málaga y los perfiles arquitectónicos de Barcelona. Cada vuelo se ejecuta bajo planificación estricta, transformando espacios aéreos controlados en piezas maestras sin fricciones legales.
          </p>

          {/* Bloques de Certificaciones Técnicas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full font-montserrat">
            <div className="p-5 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-white/10 transition-colors">
              <Shield size={18} className="text-emerald-500 mb-3" />
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">Licencia Oficial</h4>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Habilitado bajo normativa europea EASA para escenarios estándar STS-01 y STS-02.
              </p>
            </div>
            
            <div className="p-5 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-white/10 transition-colors">
              <Award size={18} className="text-zinc-400 mb-3" />
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">Operaciones Urbanas</h4>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Gestión avanzada de coordinaciones y permisos de vuelo en entornos CTR y espacio aéreo protegido.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
