'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; // Ajusta la ruta si tu archivo utilitario está en otro directorio

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/portfolio/paisajes', label: 'Paisajes' },
  { href: '/portfolio/propiedades', label: 'Propiedades' },
  { href: '/portfolio/eventos', label: 'Eventos' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 px-4">
      <nav 
        className="flex items-center justify-between w-full px-6 py-2.5 rounded-full border border-white/[0.12] bg-gradient-to-b from-zinc-700/30 via-zinc-800/40 to-zinc-950/60 backdrop-blur-xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]"
      >
        {/* LOGO MINIMALISTA */}
        <Link 
          href="/" 
          className="text-xs font-semibold tracking-[0.25em] text-white/90 hover:text-white transition-colors"
        >
          AERO<span className="text-white/40 font-light">CINEMA</span>
        </Link>

        {/* MENÚ CON TRACKING DE FONDO DE ACETERNITY */}
        <ul className="flex items-center gap-1">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <li 
                key={item.href}
                className="relative"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative block px-4 py-2 text-xs tracking-wider text-zinc-400 transition-colors duration-300 rounded-full",
                    isActive && "text-white font-medium"
                  )}
                >
                  {/* Animación del fondo magnético al hacer hover */}
                  <AnimatePresence>
                    {hoveredIdx === idx && (
                      <motion.span
                        layoutId="navHoverBackground"
                        className="absolute inset-0 bg-white/[0.06] rounded-full -z-10 will-change-transform"
                        style={{ transformZ: 0 }} // Fuerza aceleración por hardware 3D
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1, 
                          transition: { 
                            type: "spring", 
                            stiffness: 380, 
                            damping: 30 
                          } 
                        }}
                        exit={{ 
                          opacity: 0, 
                          transition: { duration: 0.1 } 
                        }}
                      />
                    )}
                  </AnimatePresence>
                  
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* BOTÓN CONTACTO INTEGRADO DE FORMA SUTIL */}
        <Link 
          href="/contacto" 
          className="text-[11px] uppercase tracking-widest font-medium text-black bg-white px-4 py-2 rounded-full hover:bg-zinc-200 transition-all active:scale-95"
        >
          Contacto
        </Link>
      </nav>
    </div>
  );
}
