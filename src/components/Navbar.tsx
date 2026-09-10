"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
	Camera,
	ChevronRight,
	HelpCircle,
	Menu,
	Radio,
	Send,
	Sparkles,
	User,
	X,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface NavItem {
	label: string;
	subtitle: string;
	grade: string;
	href: string;
	icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
	{
		label: "Trabajos",
		subtitle: "Reels & Showreel 4K",
		grade: "01",
		href: "#portfolio",
		icon: Camera,
	},
	{
		label: "Servicios",
		subtitle: "Inmobiliaria, Eventos & Obras",
		grade: "02",
		href: "#servicios",
		icon: Zap,
	},
	{
		label: "Quién soy",
		subtitle: "Piloto Certificado AESA",
		grade: "03",
		href: "#operador",
		icon: User,
	},
	{
		label: "Preguntas",
		subtitle: "Tarifas, Seguro & Permisos",
		grade: "04",
		href: "#faq",
		icon: HelpCircle,
	},
	{
		label: "Contacto",
		subtitle: "Presupuesto en 24 Horas",
		grade: "05",
		href: "#contacto",
		icon: Send,
	},
];

const SENSOR_BADGES = [
	{ label: "4K 60FPS HDR", dot: "bg-cyan-400" },
	{ label: "10-BIT D-LOG M", dot: "bg-[#dfd0a4]" },
	{ label: "AESA CERT.", dot: "bg-emerald-400" },
	{ label: "OMNI SENSORS", dot: "bg-cyan-400" },
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
			initial={false}
			href={`/${item.href}`}
			whileTap={{ scale: 0.96 }}
			transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
			style={{ willChange: "transform" }}
			className="group relative flex items-center gap-2 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 hover:text-white"
		>
			<span className="font-sans text-[9px] tracking-normal text-[#dfd0a4] opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
				{item.grade}
			</span>
			<span>{item.label}</span>
			<span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#dfd0a4] via-[#dfd0a4]/60 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
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
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = "unset";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [menuOpen]);

	const handleNavClick = (href: string) => {
		setMenuOpen(false);
		if (typeof window !== "undefined") {
			if (window.location.pathname !== "/") {
				window.location.href = `/${href}`;
				return;
			}
			const id = href.replace("#", "");
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView({ behavior: "smooth" });
				} else {
					window.location.hash = href;
				}
			}, 50);
		}
	};

	return (
		<>
			{/* ═══════ NAVBAR PRINCIPAL (Floating Capsule Desktop) ═══════ */}
			<header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
				<div
					className={`mx-auto w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
						scrolled
							? "max-w-5xl pt-2 md:pt-3 px-3 md:px-4"
							: "max-w-7xl pt-0 px-4 md:px-6 lg:px-8"
					}`}
				>
					<div
						className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
							scrolled
								? "h-[46px] md:h-[56px] rounded-full bg-[#0f1115]/85 border border-white/10 backdrop-blur-2xl px-4 md:px-8 specular-card shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
								: "h-[52px] md:h-[88px] bg-gradient-to-b from-black/70 via-black/20 to-transparent border-b border-white/[0.04] px-2 md:px-0 backdrop-blur-xs"
						}`}
					>
						{/* Lado izquierdo: Identidad FPV */}
						<Link
							href="/"
							className="group flex items-center gap-3 outline-none"
						>
							<ReticleLogo />
							<div className="flex flex-col">
								<span className="font-cinzel text-sm font-bold tracking-[0.18em] text-white">
									JF.
									<span className="font-normal text-white/70">DRONEVISION</span>
								</span>
								<span className="hidden sm:block font-sans text-[8px] uppercase tracking-[0.35em] text-white/60 -mt-0.5">
									AERO CINEMATOGRAPHY
								</span>
							</div>
						</Link>

						{/* Centro: Waypoints de Instrumentación (Desktop) */}
						<div className="hidden items-center gap-6 md:flex">
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
								initial={false}
								href="/#contacto"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.96 }}
								transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
								style={{ willChange: "transform" }}
								className="group relative overflow-hidden rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-2 font-sans text-[9px] uppercase tracking-[0.25em] text-gold-200 font-semibold transition-colors duration-300 hover:text-white hover:border-gold-400/60 specular-card"
							>
								<span className="relative z-10">Escribir a Jose</span>
								<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-600/20 via-cyan-400/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-0" />
							</motion.a>
						</div>

						{/* Botón trigger menú móvil (44px touch target) */}
						<motion.button
							initial={false}
							type="button"
							whileTap={{ scale: 0.96 }}
							style={{ willChange: "transform" }}
							onClick={() => setMenuOpen(!menuOpen)}
							aria-label={
								menuOpen
									? "Cerrar menú de navegación"
									: "Abrir menú de navegación"
							}
							aria-expanded={menuOpen}
							aria-controls="mobile-nav-drawer"
							className={`flex h-11 w-11 items-center justify-center md:hidden cursor-pointer border rounded-full transition-all duration-300 ${
								menuOpen
									? "border-gold-400/40 bg-gold-400/15 text-gold-200 shadow-[0_0_15px_rgba(223,208,164,0.2)]"
									: "border-white/10 bg-white/5 text-white/70 hover:text-white"
							}`}
						>
							{menuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</motion.button>
					</div>
				</div>
			</header>

			{/* ═══════ OPCIÓN 3: APPLE CINEMATIC SLIDE-DOWN DRAWER (CUPERTINO HUD) ═══════ */}
			<AnimatePresence initial={false}>
				{menuOpen && (
					<div
						id="mobile-nav-drawer"
						className="fixed inset-0 z-50 md:hidden pointer-events-auto flex flex-col justify-start"
					>
						{/* 1. Backdrop Glass con Desenfoque Suave */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
							style={{ willChange: "opacity" }}
							onClick={() => setMenuOpen(false)}
							className="absolute inset-0 bg-black/70 backdrop-blur-md"
						/>

						{/* 2. Tarjeta Flotante Slide-Down (Apple Store HUD Card) */}
						<motion.div
							initial={{ opacity: 0, y: -24, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -20, scale: 0.96 }}
							transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
							style={{ willChange: "transform, opacity" }}
							className="relative mx-3 mt-3 sm:mx-6 sm:mt-5 max-h-[92dvh] flex flex-col rounded-[28px] border border-white/12 bg-[#070708]/95 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_1px_1px_rgba(255,255,255,0.08)] specular-card overflow-hidden z-10"
						>
							{/* Indicador superior estilo iOS Grab Bar */}
							<div className="flex items-center justify-center pt-3 pb-1 shrink-0">
								<div className="h-1 w-10 rounded-full bg-white/20" />
							</div>

							{/* Cabecera HUD: Identidad + Telemetría de Vuelo */}
							<div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07] shrink-0">
								<div className="flex items-center gap-2.5">
									<ReticleLogo />
									<div className="flex flex-col">
										<span className="font-cinzel text-xs font-bold tracking-[0.18em] text-white">
											JF.<span className="text-white/70">DRONEVISION</span>
										</span>
										<span className="font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-400 flex items-center gap-1.5">
											<span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
											HUD · TELEMETRÍA ACTIVA
										</span>
									</div>
								</div>

								<button
									type="button"
									onClick={() => setMenuOpen(false)}
									aria-label="Cerrar panel HUD"
									className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white cursor-pointer transition-colors"
								>
									<X className="h-5 w-5" />
								</button>
							</div>

							{/* Badges de Sensores y Resolución (Apple Store Spec Pills) */}
							<div className="px-5 py-3 bg-white/[0.02] border-b border-white/[0.05] shrink-0">
								<div className="flex items-center justify-between gap-1.5 overflow-x-auto no-scrollbar">
									{SENSOR_BADGES.map((badge) => (
										<div
											key={badge.label}
											className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-black/40 px-2.5 py-1 font-mono text-[8px] tracking-[0.15em] text-white/80 shrink-0 select-none"
										>
											<span
												className={`h-1 w-1 rounded-full ${badge.dot} shadow-[0_0_6px_currentColor]`}
											/>
											{badge.label}
										</div>
									))}
								</div>
							</div>

							{/* Lista de Navegación Estilo Cupertino HUD */}
							<nav
								className="flex-1 overflow-y-auto px-4 py-3 space-y-1.5 divide-y divide-white/[0.04]"
								aria-label="Navegación móvil HUD"
							>
								{NAV_ITEMS.map((item, _index) => {
									const Icon = item.icon;
									return (
										<button
											type="button"
											key={item.href}
											onClick={() => handleNavClick(item.href)}
											className="group flex items-center justify-between p-2.5 rounded-2xl transition-all duration-300 hover:bg-white/[0.05] border border-transparent hover:border-white/10 w-full text-left cursor-pointer"
										>
											<div className="flex items-center gap-3.5">
												{/* Icono + Grado Técnico */}
												<div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-colors duration-300 group-hover:border-gold-400/40 group-hover:text-gold-200 group-hover:bg-gold-500/10">
													<Icon className="h-4 w-4" />
													<span className="absolute -bottom-1 -right-1 rounded-sm bg-black/80 px-1 font-mono text-[7px] text-gold-400 border border-white/10">
														{item.grade}
													</span>
												</div>

												{/* Texto Principal y Subtítulo */}
												<div className="flex flex-col">
													<span className="font-cinzel text-base font-medium tracking-wide text-neutral-100 transition-colors group-hover:text-white">
														{item.label}
													</span>
													<span className="font-sans text-[10px] text-white/40 tracking-wider transition-colors group-hover:text-white/70">
														{item.subtitle}
													</span>
												</div>
											</div>

											{/* Flecha Chevron interactiva */}
											<ChevronRight className="h-4 w-4 text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-300" />
										</button>
									);
								})}
							</nav>

							{/* CTA Primario + Footer telemétrico */}
							<div className="p-4 bg-gradient-to-t from-black via-black/80 to-transparent border-t border-white/[0.08] shrink-0 space-y-3">
								{/* Botón CTA */}
								<button
									type="button"
									onClick={() => handleNavClick("#contacto")}
									className="group relative flex items-center justify-center gap-2 w-full overflow-hidden rounded-2xl border border-gold-500/40 bg-gradient-to-r from-gold-500/20 via-gold-400/25 to-gold-500/20 py-3.5 font-sans text-xs uppercase tracking-[0.25em] text-gold-200 font-semibold shadow-[0_0_20px_rgba(223,208,164,0.15)] transition-all duration-300 hover:border-gold-400/70 hover:shadow-[0_0_30px_rgba(223,208,164,0.3)] specular-card cursor-pointer"
								>
									<Sparkles className="h-3.5 w-3.5 text-gold-300 animate-pulse" />
									<span className="relative z-10">Escribir a Jose</span>
									<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/10 via-cyan-400/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-0" />
								</button>

								{/* Coordenadas telemétricas */}
								<div className="flex items-center justify-between pt-1 px-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
									<div className="flex items-center gap-1.5">
										<Radio
											className="h-3 w-3 text-cyan-400"
											strokeWidth={1.5}
										/>
										<span>41.3851°N · 2.1734°E</span>
									</div>
									<span className="text-[8px] tracking-[0.3em] text-white/40">
										BARCELONA
									</span>
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
}
