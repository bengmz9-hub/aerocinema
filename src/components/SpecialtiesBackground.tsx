'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function SpecialtiesBackground({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    /* Añadimos z-0 para encapsular el orden de capas en este bloque */
    <div 
      ref={sectionRef} 
      className="relative z-0 w-full overflow-hidden bg-zinc-950"
    >
      {/* ── Imagen de fondo con efecto zoom-out de Dron (z-20 local) ── */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-[8000ms] ease-out will-change-transform -z-20 ${
          isVisible ? 'scale-100' : 'scale-115'
        }`}
      >
        <Image
          src="/images/drone1.jpg"
          alt="Fondo aéreo cinematográfico"
          fill
          sizes="100vw"
          className="object-cover opacity-40" /* Usamos una opacidad estándar y visible */
          priority
        />
      </div>

      {/* ── Capa de contraste para proteger la legibilidad de las tarjetas (z-10 local) ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 -z-10 pointer-events-none" />

      {/* ── Tu contenido actual (Título y Tarjetas) intacto encima (z-10 explícito) ── */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
