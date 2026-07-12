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
      { threshold: 0.1 } // Se activa en cuanto asoma un 10% en pantalla
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-zinc-950"
    >
      {/* ── Imagen de fondo con efecto zoom-out de Dron ── */}
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
          className="object-cover opacity-35" /* Opacidad controlada para estética dark luxury */
        />
      </div>

      {/* ── Capa de contraste para proteger la legibilidad de las tarjetas ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 -z-10" />

      {/* ── Tu contenido actual (Título y Tarjetas) intacto encima ── */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
