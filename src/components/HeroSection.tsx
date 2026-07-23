"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import { type MouseEvent, useState } from "react";

export function HeroSection() {
	const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;
		setMousePos({ x, y });
	};

	return (
		<section
			onMouseMove={handleMouseMove}
			aria-label="Hero Principal"
			className="relative w-full h-screen bg-neutral-950 overflow-hidden flex items-center justify-center select-none"
		>
			{/* 0. Capa de Grano Analógico y Ruido Cinematográfico (Flyerwrk / Grainient Supply) */}
			<div
				className="pointer-events-none absolute inset-0 z-20 opacity-20 mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* 0.1. Lens Spotlight Anamórfico (Seguimiento de cursor) */}
			<div
				className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 opacity-60"
				style={{
					background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(212, 175, 55, 0.08), rgba(11, 18, 25, 0.15) 40%, transparent 80%)`,
				}}
				aria-hidden="true"
			/>

			{/* 1. Fondo de Vídeo Cinematográfico Silencioso con Fallback */}
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					loop
					muted
					playsInline
					poster="/images/hero-poster.jpg"
					className="w-full h-full object-cover opacity-35 filter saturate-[0.85] contrast-[1.1]"
				>
					<source src="/videos/hero.mp4" type="video/mp4" />
					<source src="/videos/hero.webm" type="video/webm" />
					<source src="/videos/features.webm" type="video/webm" />
				</video>
				{/* Degradado cinematográfico profundo */}
				<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80 z-10" />
			</div>

			{/* 2. Contenido Editorial */}
			<div className="relative z-30 max-w-5xl mx-auto px-6 text-center">
				{/* Tag Técnico */}
				<div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] border border-amber-500/25 rounded-full mb-6 backdrop-blur-md specular-card">
					<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
					<span className="font-mono text-[9px] tracking-[0.25em] text-amber-200/90 uppercase font-semibold">
						OPERADOR UAS REGISTRADO AESA {"//"} CERTIFIED CINEMA FLEET
					</span>
				</div>

				{/* Título Principal H1 Persuasivo (H1 Gallery + DESIGN.md clamp) */}
				<h1 className="font-cinzel text-[clamp(2.5rem,5vw+1rem,5.5rem)] font-bold tracking-tight text-golden-hour leading-[1.05] uppercase drop-shadow-2xl [text-wrap:balance]">
					JF.DroneVision
				</h1>
				<h2 className="text-titanium font-cinzel text-[clamp(1.2rem,2.5vw+0.5rem,2.2rem)] mt-2 uppercase tracking-widest font-medium [text-wrap:balance]">
					Producción Aérea Cinematográfica & Inspección Técnica
				</h2>

				{/* Subtítulo */}
				<p className="mt-6 font-sans font-light text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide [text-wrap:pretty]">
					Captura de alta precisión en{" "}
					<strong className="text-white font-medium">
						8K RAW / 5.1K D-Log
					</strong>{" "}
					y gestión integral de permisos en espacios aéreos controlados en{" "}
					<strong className="text-white font-medium">Barcelona</strong> y{" "}
					<strong className="text-white font-medium">Málaga</strong>.
				</p>

				{/* Botones con micro-interacciones táctiles scale 0.97 (Emil Kowalski Rules) */}
				<div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center">
					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.97 }}
						transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="w-full sm:w-auto"
					>
						<Link
							href="#contacto"
							className="block w-full sm:w-auto text-center px-9 py-3.5 bg-white text-black font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-neutral-200 transition-colors duration-300 cursor-pointer shadow-lg shadow-white/5"
						>
							SOLICITAR DOSSIER
						</Link>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.97 }}
						transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="w-full sm:w-auto"
					>
						<Link
							href="#portfolio"
							className="group flex items-center justify-center gap-2 w-full sm:w-auto text-center px-9 py-3.5 bg-transparent text-white border border-white/20 font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer backdrop-blur-mdSpecular specular-card"
						>
							<Play className="w-3 h-3 fill-current group-hover:scale-110 transition-transform" />
							EXPLORAR GALERÍA
						</Link>
					</motion.div>
				</div>
			</div>

			{/* 3. Guías de encuadre HUD */}
			<div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-white/20 pointer-events-none z-30 hidden md:block" />
			<div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-white/20 pointer-events-none z-30 hidden md:block" />
			<div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-white/20 pointer-events-none z-30 hidden md:block" />
			<div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-white/20 pointer-events-none z-30 hidden md:block" />
		</section>
	);
}
