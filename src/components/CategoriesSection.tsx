'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SpecialtiesBackground from '@/components/SpecialtiesBackground';

interface Category {
  key: string;
  title: string;
  count: number;
  thumbnail: string;
}

export default function CategoriesSection({ categories }: { categories: Category[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SpecialtiesBackground>
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-white/20" />
            <span className="text-zinc-500 text-[10px] font-medium tracking-[0.3em] uppercase font-montserrat">
              Catálogo Aéreo
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 font-cinzel uppercase">
            Explora por especialidad
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.key}
                href={`/portfolio/${cat.key}`}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] block bg-zinc-900 border border-white/[0.05] shadow-lg"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                }}
              >
                {/* Imagen interna de la tarjeta con transición CSS nativa */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={cat.thumbnail}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>

                {/* Degradado interno de la tarjeta (gradiente sutil a overlay en hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/40" />

                {/* Textos y contenido de la tarjeta (aparece al hacer hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 font-montserrat translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-zinc-400 text-[10px] uppercase tracking-wider font-light">
                    {cat.count} archivos indexados
                  </span>
                  <h3 className="text-2xl font-cinzel font-bold tracking-wide mt-1 text-white uppercase">
                    {cat.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-4 text-xs tracking-wider uppercase text-zinc-400 group-hover:text-white transition-colors font-medium">
                    <span>Abrir Galería</span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SpecialtiesBackground>
  );
}
