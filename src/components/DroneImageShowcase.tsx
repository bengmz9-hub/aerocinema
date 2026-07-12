'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const SLIDES = [
  {
    id: 'especialidades',
    src: '/images/drone1.jpg',
    title: 'EXPLORA POR ESPECIALIDAD',
    subtitle: 'Navegación aérea de precisión quirúrgica y capturas técnicas.',
  },
  {
    id: 'acantilados',
    src: '/images/drone1.jpg',
    title: 'ACANTILADOS Y COSTAS',
    subtitle: 'Fotografía cinematográfica y modelado 3D de terreno rural.',
  }
];

function DroneSection({ slide, isPriority }: { slide: typeof SLIDES[0]; isPriority: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen snap-start overflow-hidden bg-zinc-950"
    >
      {/* Efecto Zoom-out controlado por GPU */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-[7000ms] ease-out will-change-transform ${
          isVisible ? 'scale-100' : 'scale-115'
        }`}
      >
        <Image
          src={slide.src}
          alt={slide.title}
          fill
          sizes="100vw"
          priority={isPriority}
          className="object-cover"
        />
      </div>

      {/* Capa de degradado Luxury Dark */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />

      {/* Textos integrados */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-10 max-w-3xl">
        <h2 className="text-white text-3xl md:text-5xl font-bold tracking-widest mb-4 font-serif">
          {slide.title}
        </h2>
        <p className="text-zinc-400 text-sm md:text-base tracking-wide font-light max-w-xl">
          {slide.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function DroneImageShowcase() {
  return (
    <div className="w-full">
      {SLIDES.map((slide, index) => (
        <DroneSection 
          key={slide.id} 
          slide={slide} 
          isPriority={index === 0} 
        />
      ))}
    </div>
  );
}
