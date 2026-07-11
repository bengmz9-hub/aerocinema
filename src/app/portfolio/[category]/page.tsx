'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Play, Clock, ArrowLeft } from 'lucide-react';
import { portfolioData, VideoItem } from '@/data/videos';
import { cn } from '@/lib/utils';

export default function PortfolioCategory() {
  const params = useParams();
  const category = params?.category as string;
  const items = category ? portfolioData[category] : [];

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-2xl font-serif tracking-widest mb-4">Categoría no encontrada</h1>
        <Link href="/" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
          <ArrowLeft size={14} /> Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Cabecera dinámica de la categoría */}
      <div className="mb-12 border-b border-zinc-800/60 pb-8">
        <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white flex items-center gap-2 mb-6 transition-colors group">
          <ArrowLeft size={12} className="transform group-hover:-translate-x-1 transition-transform" /> Volver
        </Link>
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-[0.1em] uppercase mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
          {category}
        </h1>
        <p className="text-xs text-zinc-400 tracking-wide uppercase font-light" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Proyecciones cinemáticas y registros aéreos de alta fidelidad.
        </p>
      </div>

      {/* Grid estilo Masonry Premium */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        {items.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

/* Subcomponente encargado del Lazy Loading y Control de Reproducción Individual */
function VideoCard({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Clases dinámicas de Tailwind para simular composición Pinterest/Instagram
  const layoutClasses = {
    standard: 'md:col-span-1 md:row-span-1',
    tall: 'md:col-span-1 md:row-span-2',
    wide: 'md:col-span-2 md:row-span-1',
    large: 'md:col-span-2 md:row-span-2',
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.06] group cursor-pointer shadow-lg transition-all duration-500 hover:border-white/[0.2] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]",
        layoutClasses[video.layout]
      )}
    >
      {/* Vídeo con carga perezosa (Lazy) */}
      {isLoaded ? (
        <video
          ref={videoRef}
          src={video.url}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-950 animate-pulse" />
      )}

      {/* Capa protectora oscura de gradiente cinemático */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Interfaz sobre el vídeo */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        {/* Botón superior derecho de duración */}
        <div className="flex justify-end">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] tracking-wider font-light text-zinc-300 border border-white/5">
            <Clock size={10} /> {video.duration}
          </span>
        </div>

        {/* Textos y descripción inferior */}
        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.3)]">
              <Play size={10} fill="black" />
            </div>
            <h3 className="font-serif text-lg tracking-wide text-white font-medium" style={{ fontFamily: 'var(--font-cinzel)' }}>
              {video.title}
            </h3>
          </div>
          <p className="text-xs text-zinc-400 font-light line-clamp-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
}
