"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import { HeroParticles } from "./ui/HeroParticles";

export function HeroSection() {
	return (
		<section
			aria-label="Hero Principal"
			className="relative w-full h-screen bg-neutral-950 overflow-hidden flex items-center justify-center select-none"
		>
			{/* Partículas cinemáticas de ambiente */}
			<HeroParticles />
			{/* 0. Capa de Grano Analógico y Ruido Cinematográfico (Flyerwrk / Grainient Supply) */}
			<div
				className="pointer-events-none absolute inset-0 z-20 opacity-20 mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* 1. Fondo de Vídeo Cinematográfico Silencioso con Fallback */}
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="w-full h-full object-cover opacity-50 filter saturate-[0.95] contrast-[1.05]"
				>
					<source src="/hero.webm" type="video/webm" />
				</video>
				{/* Degradado cinematográfico profundo con fundido suave a negro puro en la parte inferior */}
				<div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-transparent to-[#000000] z-10" />
				<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#000000] via-[#000000] to-transparent z-10 pointer-events-none" />
			</div>

			{/* 2. Contenido Editorial */}
			<div className="relative z-30 max-w-5xl mx-auto px-6 text-center">
				{/* Tag Técnico */}
				<div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] border border-gold-500/25 rounded-full mb-6 backdrop-blur-md specular-card">
					<span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse shadow-[0_0_8px_rgba(223,208,164,0.8)]" />
					<span className="font-mono text-[9px] tracking-[0.25em] text-gold-200/90 uppercase font-semibold">
						OPERADOR UAS REGISTRADO AESA {"//"} L'HOSPITALET · BARCELONA
					</span>
				</div>

				{/* Título Principal H1 Persuasivo (Opción C: Cormorant Garamond) */}
				<h1 className="font-cormorant text-[clamp(2.8rem,6vw+1rem,6rem)] font-bold tracking-tight text-golden-hour leading-[1.02] uppercase drop-shadow-2xl [text-wrap:balance]">
					JF.DroneVision
				</h1>
				<h2 className="text-titanium font-cormorant text-[clamp(1.3rem,2.8vw+0.5rem,2.4rem)] mt-2 uppercase tracking-widest font-semibold italic [text-wrap:balance]">
					Grabaciones con dron para tu negocio o propiedad
				</h2>

				{/* Subtítulo (Plus Jakarta Sans) */}
				<p className="mt-6 font-jakarta font-light text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide [text-wrap:pretty]">
					Imágenes aéreas reales para inmobiliarias, empresas de construcción y
					negocios locales en{" "}
					<strong className="text-white font-medium">L'Hospitalet</strong> y{" "}
					<strong className="text-white font-medium">Barcelona</strong>. Sin
					complicaciones, con permiso AESA en regla.
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
							PEDIR PRESUPUESTO
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
							VER TRABAJOS
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
