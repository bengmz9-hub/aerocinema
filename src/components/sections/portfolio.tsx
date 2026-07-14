"use client";

import { useState } from "react";

interface PortfolioItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  span: string;
  aspect: string;
  image: string;
}

const items: PortfolioItem[] = [
  {
    id: "costa",
    eyebrow: "01 · Litoral",
    title: "Costa & Océano",
    description: "Rompientes, calas y horizontes infinitos vistos desde la altura del viento.",
    span: "sm:col-span-4 sm:row-span-2",
    aspect: "aspect-[16/9] sm:aspect-auto",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "montana",
    eyebrow: "02 · Altura",
    title: "Cumbres & Montaña",
    description: "Crestas, niebla baja y luz de amanecer sobre roca viva.",
    span: "sm:col-span-2 sm:row-span-1",
    aspect: "aspect-[4/5] sm:aspect-auto",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "eventos",
    eyebrow: "03 · En vivo",
    title: "Eventos & Producciones",
    description: "Festivales, rodajes y celebraciones narradas desde el aire.",
    span: "sm:col-span-2 sm:row-span-1",
    aspect: "aspect-[4/5] sm:aspect-auto",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "demanda",
    eyebrow: "04 · A medida",
    title: "Bajo Demanda",
    description: "Tu idea, tu localización, tu encuadre. Sin límites fijos.",
    span: "sm:col-span-2 sm:row-span-1",
    aspect: "aspect-square sm:aspect-auto",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-black px-6 py-24 sm:py-32">
      <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="mb-5 block text-xs font-medium uppercase tracking-[0.4em] text-white/50">
          Portfolio
        </span>
        <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Cuatro miradas,
          <span className="italic text-white/80"> un mismo cielo.</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
        {items.map((item) => {
          const isHovered = hovered === item.id;
          const isDimmed = hovered !== null && !isHovered;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 ease-out ${item.span} ${item.aspect} ${
                isDimmed ? "opacity-50" : "opacity-100"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent transition-opacity duration-500 group-hover:opacity-70" />

              <img
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 transition-opacity duration-500 ${
                  isHovered ? "opacity-90" : "opacity-70"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="pointer-events-none absolute inset-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="absolute -top-px -left-px h-4 w-px bg-white/50" />
                <span className="absolute -top-px -left-px h-px w-4 bg-white/50" />
                <span className="absolute -bottom-px -right-px h-4 w-px bg-white/50" />
                <span className="absolute -bottom-px -right-px h-px w-4 bg-white/50" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
                <span className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-white/50 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  {item.eyebrow}
                </span>
                <h3 className="font-serif text-2xl leading-snug tracking-tight text-white transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-white/60 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-2">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-6 right-6 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 sm:top-7 sm:right-7">
                <span className="text-sm transition-transform duration-500 ease-out group-hover:rotate-45">
                  +
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
