'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Play, Clock, ArrowLeft } from 'lucide-react';
import { portfolioData, VideoItem } from '../../../data/videos';
import { cn } from '../../../lib/utils';

export default function PortfolioCategory() {
  const params = useParams();
  const category = params?.category as string;
  const items = category ? portfolioData[category] : [];

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-xl font-serif tracking-widest mb-4">Categoría no encontrada</h1>
        <Link href="/" className="text-xs uppercase tracking-widest text-zinc-400 flex items-center gap-2">
          <ArrowLeft size={14} /> Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-zinc-800 pb-6">
        <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white flex items-center gap-2 mb-4">
          <ArrowLeft size={12} /> Volver al Inicio
        </Link>
        <h1 className="text-4xl font-cinzel font-bold tracking-wider uppercase mb-2">
          {category}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        {items.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

function VideoCard({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsLoaded(true);
        observer.disconnect();
      }
    }, { rootMargin: '100px' });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const layoutClasses = {
    standard: 'md:col-span-1 md:row-span-1',
    tall: 'md:col-span-1 md:row-span-2',
    wide: 'md:col-span-2 md:row-span-1',
    large: 'md:col-span-2 md:row-span-2',
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => { setIsHovered(true); videoRef.current?.play().catch(() => {}); }}
      onMouseLeave={() => { setIsHovered(false); if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}
      className={cn("relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.06] group cursor-pointer transition-all duration-500 hover:border-white/[0.2]", layoutClasses[video.layout])}
    >
      {isLoaded ? (
        <video ref={videoRef} src={video.url} loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <div className="absolute inset-0 bg-zinc-950 animate-pulse" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        <div className="flex justify-end">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 text-[10px] text-zinc-300"><Clock size={10} /> {video.duration}</span>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity"><Play size={8} fill="black" /></div>
            <h3 className="font-cinzel text-base text-white">{video.title}</h3>
          </div>
          <p className="text-xs text-zinc-400 line-clamp-1 font-montserrat">{video.description}</p>
        </div>
      </div>
    </div>
  );
}
