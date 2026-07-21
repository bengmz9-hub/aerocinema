"use client";
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
			className="relative w-full h-screen bg-neutral-950 overflow-hidden flex items-center justify-center select-none animate-blur-in"
		>
			{/* 0. Lens Spotlight Anamórfico (Seguimiento de cursor) */}
			<div
				className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 opacity-60"
				style={{
					background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(212, 175, 55, 0.08), rgba(11, 18, 25, 0.15) 40%, transparent 80%)`,
				}}
			/>

			{/* 1. Fondo: Vídeo y Degradado */}
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="w-full h-full object-cover opacity-50"
				>
					<source src="/hero.webm" type="video/webm" />
					<source src="/videos/hero.webm" type="video/webm" />
					<source src="/videos/features.webm" type="video/webm" />
				</video>
				{/* Degradado cinematográfico */}
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/85 z-10" />
			</div>

			{/* 2. Contenido Editorial */}
			<div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
				{/* Tag Técnico */}
				<div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] border border-amber-500/20 rounded-full mb-8 backdrop-blur-md specular-card">
					<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
					<span className="font-mono text-[9px] tracking-[0.25em] text-amber-200/80 uppercase font-semibold">
						OPERADOR UAS REGISTRADO AESA // CERTIFIED
					</span>
				</div>

				{/* Título */}
				<h1 className="font-cinzel text-5xl md:text-8xl font-bold tracking-tight text-golden-hour leading-[1.05] uppercase drop-shadow-2xl">
					JF.DroneVision
				</h1>
				<h2 className="text-titanium font-cinzel text-2xl md:text-4xl mt-2 uppercase tracking-widest font-medium">
					Perspectiva Cinematográfica
				</h2>

				{/* Subtítulo */}
				<p className="mt-8 font-sans font-light text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide">
					Producción audiovisual de alta gama y gestión de permisos de vuelo en
					espacios aéreos controlados en{" "}
					<strong className="text-white font-medium">Barcelona</strong> y{" "}
					<strong className="text-white font-medium">Málaga</strong>.
				</p>

				{/* Botones */}
				<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Link
						href="#contacto"
						className="w-full sm:w-auto text-center px-10 py-4 bg-white text-black font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-zinc-200 transition-colors duration-300 cursor-pointer"
					>
						SOLICITAR DOSSIER
					</Link>
					<Link
						href="#portfolio"
						className="group flex items-center justify-center gap-2 w-full sm:w-auto text-center px-10 py-4 bg-transparent text-white border border-white/15 font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-white/5 transition-colors duration-300 cursor-pointer backdrop-blur-xs"
					>
						<Play className="w-3 h-3 fill-current group-hover:scale-110 transition-transform" />
						EXPLORAR GALERÍA
					</Link>
				</div>
			</div>

			{/* 3. Guías de encuadre */}
			<div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-white/15 pointer-events-none z-20 hidden md:block" />
			<div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-white/15 pointer-events-none z-20 hidden md:block" />
			<div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-white/15 pointer-events-none z-20 hidden md:block" />
			<div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-white/15 pointer-events-none z-20 hidden md:block" />
		</section>
	);
}
