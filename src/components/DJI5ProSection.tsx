"use client";

import {
	BatteryCharging,
	Camera,
	Eye,
	ShieldCheck,
	Sparkles,
	Wifi,
} from "lucide-react";
import { MINI_5_PRO_DATA } from "@/data/droneMini5Pro";

export function DJI5ProSection() {
	return (
		<section
			id="optical"
			className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-montserrat text-white"
		>
			{/* Encabezado de Sección */}
			<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
				<div>
					<div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
						<Sparkles className="w-4 h-4 animate-pulse" />
						<span>Tecnología de Vuelo & Óptica Cinematográfica</span>
					</div>
					<h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white tracking-wide">
						{MINI_5_PRO_DATA.title}
					</h2>
					<p className="text-zinc-400 text-sm md:text-base mt-2 max-w-xl">
						{MINI_5_PRO_DATA.tagline}
					</p>
				</div>

				{/* Indicador de Estado */}
				<div className="flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
					<span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
					<span>DESPIECE & ENSAMBLE EN GOOGLE FLOW 24FPS</span>
				</div>
			</div>

			{/* Grid Principal: Vídeo Google Flow + BentoGrid */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
				{/* ---------------------------------------------------- */}
				{/* PANEL IZQUIERDO: REPRODUCTOR DE VÍDEO FLOW (Lg: 7 cols) */}
				{/* ---------------------------------------------------- */}
				<div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/80 p-2 backdrop-blur-md shadow-2xl">
					<div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="metadata"
							className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
						>
							<source
								src="/videos/dji_mini_5_pro_flow.webm"
								type="video/webm"
							/>
							<source src="/videos/dji_mini_5_pro_flow.mp4" type="video/mp4" />
							Tu navegador no soporta la reproducción de video HTML5.
						</video>

						{/* Overlay de telemetría sutil */}
						<div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/60 border border-white/10 text-[11px] font-mono text-cyan-300 backdrop-blur-sm">
							REC ● 24FPS · FLUIDO
						</div>
					</div>

					{/* Pie de foto en castellano */}
					<div className="p-4 bg-zinc-900/60 rounded-xl mt-2 border border-white/5 flex items-center justify-between text-xs text-zinc-400">
						<span>Animación de ensamble y desmonte continuo</span>
						<span className="text-cyan-400 font-mono">DJI MINI 5 PRO</span>
					</div>
				</div>

				{/* ---------------------------------------------------- */}
				{/* PANEL DERECHO: BENTOGRID EN CASTELLANO (Lg: 5 cols)  */}
				{/* ---------------------------------------------------- */}
				<div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
					{/* Tarjeta Principal (Hero Spec) */}
					<div className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 relative overflow-hidden group">
						<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
							<Camera className="w-24 h-24 text-cyan-400" />
						</div>
						<div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
							<Camera className="w-4 h-4" />
							<span>SISTEMA ÓPTICO PRINCIPAL</span>
						</div>
						<h3 className="text-xl font-bold text-white mb-2">
							{MINI_5_PRO_DATA.sensor}
						</h3>
						<p className="text-zinc-400 text-xs leading-relaxed mb-4">
							{MINI_5_PRO_DATA.videoRes} · Perfil {MINI_5_PRO_DATA.colorProfile}
						</p>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
							<span>1,070 Millones de Colores (D-Log M)</span>
						</div>
					</div>

					{/* Tarjeta 2: Categoría y Peso */}
					<div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all">
						<div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
							<ShieldCheck className="w-4 h-4" />
							<span>CATEGORÍA ABIERTA</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1">249 g</div>
						<p className="text-zinc-400 text-xs">
							Sin necesidad de licencias A1/A3. Apto para operaciones urbanas.
						</p>
					</div>

					{/* Tarjeta 3: Autonomía */}
					<div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all">
						<div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-2">
							<BatteryCharging className="w-4 h-4" />
							<span>AUTONOMÍA</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1">31 min</div>
						<p className="text-zinc-400 text-xs">
							{MINI_5_PRO_DATA.flightTime} a una velocidad de{" "}
							{MINI_5_PRO_DATA.maxSpeed}.
						</p>
					</div>

					{/* Tarjeta 4: Alcance O4 */}
					<div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all">
						<div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-2">
							<Wifi className="w-4 h-4" />
							<span>ALCANCE O4</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1">15 km</div>
						<p className="text-zinc-400 text-xs">
							Transmisión de vídeo HD a 1080p / 60fps con baja latencia.
						</p>
					</div>

					{/* Tarjeta 5: Detección IA 360° */}
					<div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all">
						<div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-2">
							<Eye className="w-4 h-4" />
							<span>SENSORES IA 360°</span>
						</div>
						<div className="text-lg font-bold text-white mb-1">APAS 5.0</div>
						<p className="text-zinc-400 text-xs">
							Detección omnidireccional inteligente de obstáculos en vuelo.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
