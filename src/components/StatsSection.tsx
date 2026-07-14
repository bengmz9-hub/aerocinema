'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

const HUD_TELEMETRY = [
  { sys: 'SYS_01 // FLT_ZN', line1: 'BCN_EL_PRAT_T1', coord: '41°17\'N 2°04\'E', meta: 'FPS 24 · REC.2.39:1' },
  { sys: 'SYS_02 // GMBL_LCK', line1: 'ALT_MSL_120m', coord: '48°51\'N 2°21\'E', meta: 'ISO 100 · f/2.8' },
  { sys: 'SYS_03 // FLT_REC', line1: 'SPD_12_MS_STB', coord: '34°03\'N 118°15\'W', meta: 'BITRATE 120MB/s' },
  { sys: 'SYS_04 // CAM_CFG', line1: 'SIG_42_DBM_OK', coord: '51°30\'N 0°07\'W', meta: 'BAT 94% · EV+0.0' },
] as const;

function Reticle({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  return (
    <motion.div
      style={{ x, y }}
      className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      {/* Retícula en cruz fina */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-white/10" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10" />
      {/* Esquinas tácticas */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/50" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/50" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/50" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/50" />
      {/* Punto de enfoque central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/60" />
    </motion.div>
  );
}

interface StatCardProps {
  stat: Stat;
  index: number;
  isTouch: boolean;
  globalX: MotionValue<number>;
  globalY: MotionValue<number>;
  isSectionHovered: boolean;
}

function StatCard({ stat, index, isTouch, globalX, globalY, isSectionHovered }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Calcula la posición exacta de la tarjeta dentro de la rejilla al montar
  useEffect(() => {
    if (cardRef.current) {
      setOffset({
        x: cardRef.current.offsetLeft,
        y: cardRef.current.offsetTop,
      });
    }
  }, []);

  // Transforma las coordenadas globales del padre a locales de forma matemática y continua
  const localX = useTransform(globalX, (val) => val - offset.x);
  const localY = useTransform(globalY, (val) => val - offset.y);

  // Aplica las físicas de muelle sobre el valor transformado continuo
  const springX = useSpring(localX, { damping: 30, stiffness: 220, mass: 0.4 });
  const springY = useSpring(localY, { damping: 30, stiffness: 220, mass: 0.4 });

  const hud = HUD_TELEMETRY[index % HUD_TELEMETRY.length];

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden bg-zinc-950/90 p-8 min-h-[240px] flex flex-col justify-between group select-none cursor-default transition-colors duration-500 hover:bg-zinc-900/30"
    >
      {/* Capas interactivas unificadas con el estado del Padre */}
      {!isTouch && isSectionHovered && (
        <>
          {/* Foco de luz (Spotlight) continuo */}
          <motion.div
            style={{ x: springX, y: springY }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none z-0"
          >
            <div className="w-full h-full bg-radial from-white/[0.035] to-transparent to-70%" />
          </motion.div>

          {/* Rejilla de píxeles HUD */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] z-10" />
          
          {/* Retícula física */}
          <Reticle x={springX} y={springY} />
        </>
      )}

      {/* Bloque Superior HUD */}
      <div className="flex items-start justify-between relative z-20 font-mono text-[9px] tracking-widest text-zinc-500">
        <span>[{hud.sys}]</span>
        {index === 0 ? (
          <span className="text-zinc-400 flex items-center gap-1.5 font-bold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500/70 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
            </span>
            REC
          </span>
        ) : (
          <span>{hud.coord}</span>
        )}
      </div>

      {/* Contenido Central */}
      <div className="relative z-20 my-auto py-4">
        <span className="block font-cinzel text-5xl lg:text-6xl font-bold tabular-nums text-white tracking-tight leading-none">
          {stat.value}
        </span>
        <span className="block mt-3 text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-light font-montserrat">
          {stat.label}
        </span>
      </div>

      {/* Bloque Inferior HUD */}
      <div className="flex items-center justify-between relative z-20 font-mono text-[9px] tracking-wider text-zinc-600 border-t border-white/[0.03] pt-3">
        <span>{hud.line1}</span>
        <span>{hud.meta}</span>
      </div>
    </div>
  );
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Valores de movimiento globales únicos para toda la sección
  const globalX = useMotionValue(0);
  const globalY = useMotionValue(0);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)');
    setIsTouch(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    if (isTouch || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    globalX.set(e.clientX - rect.left);
    globalY.set(e.clientY - rect.top);
  }

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isTouch && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full relative border-y border-white/[0.06] bg-transparent z-10"
    >
      {/* Marcas de registro exteriores */}
      <div className="absolute top-0 left-8 w-[1px] h-3 bg-white/20 z-30" />
      <div className="absolute bottom-0 right-8 w-[1px] h-3 bg-white/20 z-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] overflow-hidden rounded-xl shadow-2xl">
          {stats.map((stat, i) => (
            <StatCard 
              key={stat.label} 
              stat={stat} 
              index={i} 
              isTouch={isTouch} 
              globalX={globalX}
              globalY={globalY}
              isSectionHovered={isHovered}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
