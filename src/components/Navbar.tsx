'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/portfolio/paisajes', label: 'Paisajes' },
  { href: '/portfolio/propiedades', label: 'Propiedades' },
  { href: '/portfolio/eventos', label: 'Eventos' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <header className="flex items-center justify-between w-full max-w-4xl px-6 py-3 border border-white/10 bg-black/50 backdrop-blur-lg rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        
        {/* LOGO: Cinematic branding */}
        <Link href="/" className="font-syne text-sm font-extrabold tracking-[0.2em] text-white transition-opacity hover:opacity-80">
          AERO<span className="text-zinc-400 font-normal">CINEMA</span>
        </Link>
        
        {/* MENU: Floating tab tracker with layoutId */}
        <ul className="flex items-center gap-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative z-10 px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 block rounded-full",
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="hoverBackground"
                      className="absolute inset-0 rounded-full bg-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    />
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* BUTTON CONTACTO: Floating design */}
        <Link 
          href="/contacto" 
          className="text-[10px] uppercase tracking-[0.2em] font-medium border border-white/20 rounded-full px-4 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
        >
          Contacto
        </Link>
      </header>
    </div>
  );
}
