"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Spotlight } from "@/components/ui/spotlight-new";

interface CardContentProps {
  title: string;
  category: string;
  description: string;
}

const CardContent = ({ title, category, description }: CardContentProps) => {
  return (
    <div className="font-montserrat">
      <span className="text-[10px] font-mono tracking-[0.2em] text-white/45 uppercase block mb-1">
        [ {category} // ARCHIVE ]
      </span>
      <h3 className="font-cinzel font-bold text-2xl md:text-4xl text-white uppercase tracking-tight">
        {title}
      </h3>
      <p className="font-light text-xs md:text-sm my-4 max-w-lg text-zinc-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio-paisajes.webp",
    content: (
      <CardContent 
        category="Paisajes"
        title="ACANTILADOS DE COSTA"
        description="Capturas dinámicas a baja altura revelando la colisión del océano contra la roca con perfiles de color logarítmicos."
      />
    ),
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "/images/portfolio-propiedades-1.webp",
    content: (
      <CardContent 
        category="Propiedades"
        title="VILLAS DE LUJO"
        description="Trayectorias automatizadas por GPS para mostrar la arquitectura exterior y su integración orgánica con el entorno."
      />
    ),
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "/images/portfolio-eventos.webp",
    content: (
      <CardContent 
        category="Eventos"
        title="COBERTURA DE FESTIVALES"
        description="Vuelos coordinados nocturnos con sensores de alta sensibilidad para captar la masa y los espectáculos lumínicos."
      />
    ),
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio-propiedades-2.webp",
    content: (
      <CardContent 
        category="Propiedades"
        title="COMPLEJOS INDUSTRIALES"
        description="Inspección visual y ortofotografía de alta resolución para el seguimiento de infraestructuras críticas."
      />
    ),
  },
];

export function PortfolioGrid() {
  // Configuración de iluminación de alta intensidad para los extremos
  const focusLight = "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%)";
  const ambientLight = "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)";

  return (
    <section className="w-full bg-transparent py-24 px-4 md:px-8 border-t border-white/[0.06] relative overflow-x-clip overflow-y-visible z-0">
      
      {/* 1. FOCO SUPERIOR IZQUIERDO */}
      <Spotlight
        className="top-0 left-0"
        gradientFirst={focusLight}
        gradientSecond={ambientLight}
      />

      {/* 2. FOCO SUPERIOR DERECHO */}
      <Spotlight
        className="top-0 right-0"
        gradientFirst={focusLight}
        gradientSecond={ambientLight}
      />

      {/* 3. FOCO INFERIOR IZQUIERDO */}
      <Spotlight
        className="bottom-0 left-0"
        gradientFirst={focusLight}
        gradientSecond={ambientLight}
      />

      {/* 4. FOCO INFERIOR DERECHO */}
      <Spotlight
        className="bottom-0 right-0"
        gradientFirst={focusLight}
        gradientSecond={ambientLight}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabecera Técnica */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-12 h-px bg-white/20" />
          <span className="text-zinc-500 text-[10px] font-medium tracking-[0.3em] uppercase font-montserrat">
            GALERÍA DE CAPTURAS // OPTICS
          </span>
        </div>
        
        {/* Contenedor del Grid */}
        <div className="h-[80vh] md:h-[100vh] w-full rounded-xl overflow-hidden border border-white/[0.06] bg-zinc-950/10 backdrop-blur-xs">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}
