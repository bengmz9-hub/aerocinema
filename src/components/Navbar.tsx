"use client";

import { motion } from "framer-motion";
import { Menu, Radio, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

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
		<motion.a
			href={item.href}
			whileTap={{ scale: 0.96 }}
			transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
			className="group relative flex items-center gap-2 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 hover:text-white"
		>
			<span className="font-sans text-[9px] tracking-normal text-cyan-400 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
				{item.grade}
			</span>
			<span>{item.label}</span>
			<span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
		</motion.a>
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
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [menuOpen]);

	return (
		<>
			{/* ═══════ NAVBAR PRINCIPAL (Headers Club Floating Capsule) ═══════ */}
			<header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
				<div
					className={`mx-auto w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
						scrolled
							? "max-w-4xl pt-3 px-4"
							: "max-w-7xl pt-0 px-6 lg:px-8"
					}`}
				>
					<div
						className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
							scrolled
								? "h-[54px] rounded-full bg-[#0f1115]/80 border border-white/10 backdrop-blur-2xl px-6 specular-card shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
								: "h-[88px] bg-transparent border-b border-white/[0.04] px-0"
						}`}
					>
						{/* Lado izquierdo: Identidad FPV */}
						<a href="#" className="group flex items-center gap-3 outline-none">
							<ReticleLogo />
							<div className="flex flex-col">
								<span className="font-cinzel text-sm font-bold tracking-[0.18em] text-white">
									JF.
									<span className="font-normal text-white/50">DRONEVISION</span>
								</span>
								<span className="font-sans text-[8px] uppercase tracking-[0.35em] text-white/30 -mt-0.5">
									Estudios Aéreos
								</span>
							</div>
						</a>

						{/* Centro: Waypoints de Instrumentación (Headers Club style) */}
						<div className="hidden items-center gap-8 md:flex">
							{NAV_ITEMS.map((item) => (
								<WaypointItem key={item.href} item={item} />
							))}
						</div>

						{/* Lado derecho: REC + CTA Táctil */}
						<div className="hidden items-center gap-5 md:flex">
							<div className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.3em] text-white/50 select-none">
								<span className="relative flex h-1.5 w-1.5">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60" />
									<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
								</span>
								REC · 4K
							</div>

							<motion.a
								href="#contacto"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.96 }}
								transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
								className="group relative overflow-hidden rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 font-sans text-[9px] uppercase tracking-[0.25em] text-amber-200 font-semibold transition-colors duration-300 hover:text-white hover:border-amber-400/60 specular-card"
							>
								<span className="relative z-10">Reservar Rodaje</span>
								<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-amber-600/20 via-cyan-400/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-0" />
							</motion.a>
						</div>

						{/* Menú móvil */}
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
							className="flex h-9 w-9 items-center justify-center md:hidden cursor-pointer border border-white/10 rounded-full text-white/70 hover:text-white bg-white/5"
						>
							{menuOpen ? (
								<X className="h-4 w-4" />
							) : (
								<Menu className="h-4 w-4" />
							)}
						</button>
					</div>
				</div>
			</header>

			{/* ═══════ OVERLAY MÓVIL CORTINA ═══════ */}
			<div
				className={`fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
					menuOpen
						? "pointer-events-auto opacity-100 scale-100"
						: "pointer-events-none opacity-0 scale-98"
				}`}
			>
				<div className="flex h-[88px] items-center justify-between px-6">
					<span className="font-cinzel text-sm tracking-[0.18em] text-white/90">
						JF.DRONEVISION
					</span>
					<button
						onClick={() => setMenuOpen(false)}
						className="flex h-10 w-10 items-center justify-center text-white/80 cursor-pointer outline-none"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				{/* Listado con Waypoints Técnicos */}
				<nav
					className="flex flex-1 flex-col justify-center gap-8 px-8"
					aria-label="Navegación móvil"
				>
					{NAV_ITEMS.map((item, index) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setMenuOpen(false)}
							style={{
								transitionDelay: menuOpen ? `${120 + index * 80}ms` : "0ms",
							}}
							className={`flex items-baseline gap-4 border-b border-white/[0.08] pb-6 font-cinzel text-3xl tracking-wide text-white/90 group transition-all duration-500 ease-out ${
								menuOpen
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0"
							}`}
						>
							<span className="font-sans text-[10px] tracking-[0.3em] text-white/30 group-hover:text-cyan-400 transition-colors">
								{item.grade}
							</span>
							{item.label}
						</a>
					))}

					<a
						href="#contacto"
						onClick={() => setMenuOpen(false)}
						style={{
							transitionDelay: menuOpen
								? `${120 + NAV_ITEMS.length * 80}ms`
								: "0ms",
						}}
						className={`mt-4 border border-amber-500/30 bg-amber-500/10 px-6 py-4 text-center font-sans text-xs uppercase tracking-[0.28em] text-amber-200 font-semibold rounded-full transition-all duration-500 hover:bg-amber-500/20 hover:border-amber-400/50 ${
							menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
						}`}
					>
						Reservar Rodaje
					</a>
				</nav>

				{/* Footer telemétrico */}
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

