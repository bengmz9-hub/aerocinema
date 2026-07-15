"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Radio } from "lucide-react";

interface NavItem {
  label: string;
  grade: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Portfolio", grade: "01", href: "#portfolio" },
  { label: "Servicios", grade: "02", href: "#servicios" },
  { label: "Operador", grade: "03", href: "#operador" },
];

/* ──────────────────────────────────────────────
   SUB-COMPONENTES INTERNOS
   ────────────────────────────────────────────── */

function ReticleLogo() {
  return (
    <div className="relative flex h-6 w-6 items-center justify-center">
      <div className="absolute h-5 w-5 rounded-full border border-white/40" />
      <div className="absolute h-px w-4 bg-white/50" />
      <div className="absolute h-4 w-px bg-white/50" />
      <div className="absolute h-1 w-1 rounded-full bg-cyan-400" />
      <div className="absolute h-5 w-5 rounded-full border border-cyan-400/0 transition-all duration-500 group-hover:h-7 group-hover:w-7 group-hover:border-cyan-400/30" />
    </div>
  );
}

function WaypointItem({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className="group relative flex items-center gap-2 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-white/50 transition-colors duration-300 hover:text-white"
    >
      {/* Waypoint numérico (Sonnet 5) */}
      <span className="font-sans text-[9px] tracking-normal text-cyan-400 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-85 group-hover:scale-100">
        {item.grade}
      </span>
      <span>{item.label}</span>
      <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-400/50 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
    </a>
  );
}

/* ──────────────────────────────────────────────
   COMPONENTE PRINCIPAL
   ────────────────────────────────────────────── */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  return (
    <>
      {/* ═══════ NAVBAR PRINCIPAL (Efecto Altitud / Horizon) ═══════ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-[#030406]/60 backdrop-blur-2xl border-b border-white/[0.04]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Enmarcado superior fino */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.04]" />

        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-6 transition-[height] duration-700 ease-out lg:px-8 ${
            scrolled ? "h-[68px]" : "h-[92px]"
          }`}
        >
          {/* Lado izquierdo: Identidad FPV */}
          <a href="#" className="group flex items-center gap-3 outline-none">
            <ReticleLogo />
            <div className="flex flex-col">
              <span className="font-cinzel text-sm font-bold tracking-[0.18em] text-white">
                JF.<span className="font-normal text-white/50">DRONEVISION</span>
              </span>
              <span className="font-sans text-[8px] uppercase tracking-[0.35em] text-white/20 -mt-0.5">
                Estudios Aéreos
              </span>
            </div>
          </a>

          {/* Centro: Waypoints de Instrumentación (Sonnet 5) */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <WaypointItem key={item.href} item={item} />
            ))}
          </div>

          {/* Lado derecho: REC (GLM) + CTA */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.3em] text-white/45 select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              </span>
              REC · 4K
            </div>

            <a
              href="/#contacto"
              className="group relative overflow-hidden rounded-sm border border-amber-600/20 bg-amber-600/5 px-5 py-2.5 font-sans text-[10px] uppercase tracking-[0.25em] text-amber-200/80 transition-colors duration-300 hover:text-white hover:border-amber-500/40"
            >
              <span className="relative z-10">Reservar Rodaje</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-amber-600/10 via-cyan-400/5 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-0" />
            </a>
          </div>

          {/* Menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 items-center justify-center md:hidden cursor-pointer border border-white/10 text-white/70 hover:text-white"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Horizonte bronce (Se disuelve al hacer scroll para dar paso al borde de cristal) */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-700 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-amber-700/20 to-transparent" />
        </div>
      </header>

      {/* ═══════ OVERLAY MÓVIL CORTINA ═══════ */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100 scale-100" : "pointer-events-none opacity-0 scale-98"
        }`}
      >
        <div className="flex h-[92px] items-center justify-between px-6">
          <span className="font-cinzel text-sm tracking-[0.18em] text-white/90">JF.DRONEVISION</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-white/80 cursor-pointer outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Listado con Waypoints Técnicos */}
        <nav className="flex flex-1 flex-col justify-center gap-8 px-8" aria-label="Navegación móvil">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${120 + index * 80}ms` : "0ms" }}
              className={`flex items-baseline gap-4 border-b border-white/[0.08] pb-6 font-cinzel text-3xl tracking-wide text-white/90 group transition-all duration-500 ease-out ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="font-sans text-[10px] tracking-[0.3em] text-white/30 group-hover:text-cyan-400 transition-colors">
                {item.grade}
              </span>
              {item.label}
            </a>
          ))}

          <a
            href="/#contacto"
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${120 + NAV_ITEMS.length * 80}ms` : "0ms" }}
            className={`mt-4 border border-amber-600/30 bg-amber-600/10 px-6 py-4 text-center font-sans text-xs uppercase tracking-[0.28em] text-neutral-100 transition-all duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Reservar Rodaje
          </a>
        </nav>

        {/* Footer telemétrico (El Prat Airport) */}
        <div className="mt-auto flex items-center justify-between border-t border-white/10 p-6">
          <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.3em] text-white/45">
            <Radio className="h-3 w-3 text-cyan-400/70" strokeWidth={1.5} />
            41.3851°N · 2.1734°E
          </div>
          <span className="font-sans text-[8px] uppercase tracking-[0.5em] text-white/15">
            JF.DroneVision Studios
          </span>
        </div>
      </div>
    </>
  );
}
