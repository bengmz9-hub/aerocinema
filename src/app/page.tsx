'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, MapPin, Calendar, Award } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '@/data/videos';
import SpecialtiesBackground from '@/components/SpecialtiesBackground';

const heroVideo = 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4';
const featuresVideo = 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4';

const categories = [
  {
    key: 'paisajes',
    title: 'Paisajes',
    count: portfolioData.paisajes?.length || 0,
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'propiedades',
    title: 'Propiedades',
    count: portfolioData.propiedades?.length || 0,
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'eventos',
    title: 'Eventos',
    count: portfolioData.eventos?.length || 0,
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
  },
];

const stats = [
  { value: '150+', label: 'Proyectos' },
  { value: '8', label: 'Países' },
  { value: '12K+', label: 'Horas de vuelo' },
  { value: '100%', label: 'Clientes satisfechos' },
];

function useScrollReveal() {
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

  return { ref, visible };
}

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1.0]);
  const videoBlur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(4px)"]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const heroS = useScrollReveal();
  const catS = useScrollReveal();
  const statsS = useScrollReveal();

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* ========== HERO ========== */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ scale: videoScale, filter: videoBlur }} className="absolute inset-0 w-full h-full will-change-transform">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" src={heroVideo} />
        </motion.div>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

        <div ref={heroS.ref} className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div
            className="max-w-3xl"
            style={{
              opacity: loaded && heroS.visible ? 1 : 0,
              transform: loaded && heroS.visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
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

      {/* ========== SECCIÓN CATEGORÍAS CON FONDO ANIMADO ========== */}
      <SpecialtiesBackground>
        <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
          <div
            ref={catS.ref}
            style={{
              opacity: catS.visible ? 1 : 0,
              transform: catS.visible ? 'translateY(0)' : 'translateY(30px)',
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
                    opacity: catS.visible ? 1 : 0,
                    transform: catS.visible ? 'translateY(0)' : 'translateY(20px)',
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

      {/* ========== STATS ========== */}
      <section className="py-24 px-6 lg:px-8 border-y border-white/[0.08] bg-zinc-950/50 backdrop-blur-sm">
        <div
          ref={statsS.ref}
          className="max-w-7xl mx-auto"
          style={{
            opacity: statsS.visible ? 1 : 0,
            transform: statsS.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-cinzel font-bold tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-zinc-500 text-[10px] tracking-widest uppercase font-light font-montserrat">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURES WITH NEW UNIQUE VIDEO ========== */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-white/20" />
              <span className="text-zinc-500 text-[10px] font-medium tracking-[0.3em] uppercase font-montserrat">
                Estándar Operativo
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 font-cinzel uppercase">
              TECNOLOGÍA ÓPTICA DE VANGUARDIA
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-12 font-light font-montserrat">
              Operamos bajo certificaciones estrictas utilizando plataformas aéreas estables y ópticas de alta fidelidad cromática para garantizar piezas maestras en bruto y editadas.
            </p>

            <div className="space-y-8 font-montserrat">
              {[
                { icon: Award, title: 'Resolución Máxima', desc: 'Capturas nativas en 4K Prores con perfiles logarítmicos para etalonaje avanzado.' },
                { icon: MapPin, title: 'Desplazamiento Logístico', desc: 'Disponibilidad operativa internacional con equipamiento adaptado a normativas locales.' },
                { icon: Calendar, title: 'Plazos Optimizados', desc: 'Procesamiento de archivos y entregas con flujos de trabajo profesionales acelerados.' },
              ].map((feat) => (
                <div key={feat.title} className="flex gap-5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.08] transition-colors">
                    <feat.icon size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white tracking-wide uppercase">{feat.title}</h4>
                    <p className="text-zinc-500 text-xs mt-1 leading-relaxed font-light">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta con el nuevo vídeo cinemático independiente de Pexels */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.05]">
            <video src={featuresVideo} autoPlay muted loop playsInline className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/[0.08] max-w-7xl mx-auto font-light font-montserrat">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <span className="text-white font-cinzel font-bold tracking-widest text-sm">
            AERO<span className="font-normal text-white/50">CINEMA</span>
          </span>
          <p>&copy; 2026 AeroCinema. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            {['Instagram', 'YouTube', 'Vimeo'].map((social) => (
              <a key={social} href="#" className="hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
