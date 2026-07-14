'use client';

import React from 'react';
import { Eye, Cpu, Zap, Radio } from 'lucide-react';

export function OpticalTech() {
  return (
    <section className="w-full bg-transparent py-24 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-zinc-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Cabecera */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-emerald-500/40" />
            <span className="text-emerald-500 text-[10px] font-medium tracking-[0.3em] uppercase font-montserrat">
              Hardware & Captura
            </span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase max-w-3xl">
            Tecnología Óptica de Vanguardia
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Especificaciones */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col gap-6 font-montserrat">
            <p className="font-light text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide mb-4 max-w-2xl">
              Nuestros sistemas de vuelo están equipados con ópticas de formato completo y estabilizadores activos de tres ejes de grado industrial. Esto nos permite registrar texturas puras, gestionar rangos dinámicos extremos bajo el sol del mediterráneo y entregar piezas listas para corrección de color profesional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl hover:border-emerald-500/20 hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
                  <Eye size={20} />
                </div>
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-2">Sensor de Cine</h4>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  Resolución nativa en 5.1K con perfiles de color logarítmicos (D-Log de 10 bits) para una flexibilidad extrema en postproducción.
                </p>
              </div>

              <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl hover:border-emerald-500/20 hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-500/10 flex items-center justify-center text-zinc-400 mb-4">
                  <Cpu size={20} />
                </div>
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-2">Estabilización Activa</h4>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  Gimbal mecánico de alta precisión que compensa ráfagas de viento de hasta 12 m/s, garantizando tomas fluidas como la seda.
                </p>
              </div>

              <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl hover:border-emerald-500/20 hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-500/10 flex items-center justify-center text-zinc-400 mb-4">
                  <Radio size={20} />
                </div>
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-2">Transmisión O3 Pro</h4>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  Enlace de vídeo Full HD a 60 fps con latencia ultra-baja para un encuadre y dirección artística milimétrica en tiempo real.
                </p>
              </div>

              <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl hover:border-emerald-500/20 hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
                  <Zap size={20} />
                </div>
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-2">Obturador Global</h4>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  Eliminación total del efecto de barrido distorsionado (rolling shutter) en vuelos de alta velocidad y paneos rápidos.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: El Reproductor de Vídeo */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.05] shadow-2xl group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-102 filter brightness-90 group-hover:brightness-100 transition-all duration-700 ease-out"
            >
              <source src="/videos/optics-tech.webm" type="video/webm" />
              <source src="/videos/optics-tech.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute top-6 left-6 font-mono text-[9px] text-white/50 bg-black/40 backdrop-blur-sm py-1 px-2.5 rounded border border-white/5 tracking-wider">
              CAM_LINK_1: ACTIVE
            </div>
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/40 tracking-widest uppercase">
              [ OPT_SENS_ENGAGED ]
            </div>
            <div className="absolute bottom-6 right-6 font-mono text-[9px] text-white/40 tracking-widest uppercase">
              UHD // D-LOG
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
