'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroVideo = 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1.0]);
  const videoBlur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(4px)"]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ scale: videoScale, filter: videoBlur }} className="absolute inset-0 w-full h-full will-change-transform">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlayThrough={() => setVideoLoaded(true)}
          className="w-full h-full object-cover"
          src={heroVideo}
        />
      </motion.div>

      {/* El overlay se atenúa de forma fluida una vez que el vídeo está cargado */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${videoLoaded ? 'opacity-40' : 'opacity-100'}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div
          className="max-w-3xl transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transform: videoLoaded ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-white/40" />
            <span className="text-white/60 text-[10px] font-medium tracking-[0.3em] uppercase font-montserrat">
              Fotografía & Video Aéreo Premium
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] font-cinzel">
            <span className="block">PERSPECTIVAS</span>
            <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              SIN LÍMITES
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed font-light font-montserrat">
            Elevamos tu narrativa visual con capturas aéreas de alta gama. Desde paisajes puros hasta registros arquitectónicos y eventos exclusivos.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 font-montserrat">
            <Link
              href="/portfolio/paisajes"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 active:scale-95"
            >
              Ver portfolio
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-3 px-8 py-3.5 border border-white/20 text-white text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-300 hover:bg-white/5 hover:border-white/40">
              Reel 2026
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-white text-[9px] tracking-[0.25em] uppercase font-light font-montserrat">Scroll</span>
        <ChevronDown size={14} />
      </div>
    </section>
  );
}
