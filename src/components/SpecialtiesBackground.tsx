'use client';

import React from 'react';

export default function SpecialtiesBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden bg-zinc-950 border-t border-white/[0.02]">
      
      {/* ── Capa de Grano Cinemático Analógico (SVG Inyectado) ── */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Degradado sutil para fundir los extremos de la sección ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      {/* ── Contenido de las tarjetas ── */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
