'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/portfolio/paisajes', label: 'Paisajes' },
  { href: '/portfolio/propiedades', label: 'Propiedades' },
  { href: '/portfolio/eventos', label: 'Eventos' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        
        {/* LOGO: Uso de fuente Syne, tracking expandido y contraste limpio */}
        <Link href="/" className="font-syne text-xl font-extrabold tracking-[0.2em] text-white transition-opacity hover:opacity-80">
          AERO<span className="text-zinc-400 font-normal">CINEMA</span>
        </Link>
        
        {/* MENÚ: Fuentes en mayúsculas, tracking ultra-ancho y pesos ligeros */}
        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:text-white ${
                    isActive ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* BOTÓN CONTACTO: Estilo minimalista puro */}
        <Link 
          href="/contacto" 
          className="text-xs uppercase tracking-[0.2em] font-medium border border-white/30 rounded-none px-6 py-2.5 text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
}
