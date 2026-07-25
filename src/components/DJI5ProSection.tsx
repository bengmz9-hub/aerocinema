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
			className="relative py-8 md:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-montserrat text-white"
		>
			{/* Encabezado de Sección */}
			<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/10 pb-6">
				<div>
					<div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-2 font-medium bg-gradient-to-r from-[#dfd0a4] via-[#f0e6c8] to-[#c8b88a] bg-clip-text text-transparent">
						<Sparkles className="w-4 h-4 text-[#dfd0a4] animate-pulse" />
						<span>Tecnología de Vuelo & Óptica Cinematográfica</span>
					</div>
					<h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white tracking-wide">
						{MINI_5_PRO_DATA.title}
					</h2>
					<p className="text-zinc-400 text-sm md:text-base mt-2 max-w-xl">
						{MINI_5_PRO_DATA.tagline}
					</p>
				</div>
			</div>

			{/* Grid Principal: Vídeo Recorte + BentoGrid Traslúcido con Hover Glow Sutil */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
				{/* ---------------------------------------------------- */}
				{/* PANEL IZQUIERDO: VÍDEO RECORTE AJUSTADO (Lg: 5 cols) */}
				{/* ---------------------------------------------------- */}
				<div className="lg:col-span-5 relative group rounded-2xl overflow-hidden border border-white/10 bg-[#0a0c10]/70 p-2 backdrop-blur-xl shadow-2xl flex flex-col justify-center transition-all duration-500 hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)]">
					<div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/80 flex items-center justify-center">
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

						{/* Overlay de telemetría sobrio */}
						<div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-black/70 border border-white/10 text-[10px] font-mono text-[#dfd0a4]/90 backdrop-blur-sm">
							REC ● 24FPS
						</div>
					</div>
				</div>

				{/* ---------------------------------------------------- */}
				{/* PANEL DERECHO: BENTOGRID TRASLÚCIDO CON HOVER GLOW SUTIL (Lg: 7 cols) */}
				{/* ---------------------------------------------------- */}
				<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
					{/* Tarjeta Principal (Hero Spec - Ocupa 3 columnas) */}
					<div className="sm:col-span-3 p-6 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/30 hover:shadow-[0_0_20px_rgba(223,208,164,0.07)] transition-all duration-500 relative overflow-hidden group">
						<div className="flex items-center gap-2 text-xs font-mono mb-2 font-semibold bg-gradient-to-r from-[#dfd0a4] via-[#f0e6c8] to-[#c8b88a] bg-clip-text text-transparent">
							<Camera className="w-4 h-4 text-[#dfd0a4]" />
							<span>CÁMARA & RESOLUCIÓN DE VÍDEO</span>
						</div>
						<h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
							4K HDR a 60 fps
						</h3>
						<p className="text-zinc-400 text-xs leading-relaxed mb-3">
							Sensor {MINI_5_PRO_DATA.sensor} · Perfil{" "}
							{MINI_5_PRO_DATA.colorProfile} · 1080p a 120 fps
						</p>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dfd0a4]/10 border border-[#dfd0a4]/20 text-[#dfd0a4] text-xs font-mono">
							<span>1,070 Millones de Colores (D-Log M / HLG)</span>
						</div>
					</div>

					{/* Tarjeta 2: Categoría y Peso */}
					<div className="p-5 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] transition-all duration-500 group">
						<div className="flex items-center gap-2 text-[11px] font-mono mb-2 text-[#dfd0a4]">
							<ShieldCheck className="w-3.5 h-3.5 text-[#dfd0a4]" />
							<span>CATEGORÍA ABIERTA</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors">
							249 g
						</div>
						<p className="text-zinc-400 text-xs leading-tight">
							Sin necesidad de licencias A1/A3. Apto para operaciones urbanas.
						</p>
					</div>

					{/* Tarjeta 3: Autonomía */}
					<div className="p-5 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] transition-all duration-500 group">
						<div className="flex items-center gap-2 text-[11px] font-mono mb-2 text-[#dfd0a4]">
							<BatteryCharging className="w-3.5 h-3.5 text-[#dfd0a4]" />
							<span>AUTONOMÍA</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors">
							31 min
						</div>
						<p className="text-zinc-400 text-xs leading-tight">
							Velocidad máx. {MINI_5_PRO_DATA.maxSpeed}.
						</p>
					</div>

					{/* Tarjeta 4: Alcance O4 */}
					<div className="p-5 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] transition-all duration-500 group">
						<div className="flex items-center gap-2 text-[11px] font-mono mb-2 text-[#dfd0a4]">
							<Wifi className="w-3.5 h-3.5 text-[#dfd0a4]" />
							<span>ALCANCE O4</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors">
							15 km
						</div>
						<p className="text-zinc-400 text-xs leading-tight">
							Transmisión HD 1080p a 60fps.
						</p>
					</div>

					{/* Tarjeta 5: Detección IA 360° */}
					<div className="sm:col-span-3 p-4 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] transition-all duration-500 flex items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<div className="p-2.5 rounded-xl bg-[#dfd0a4]/10 border border-[#dfd0a4]/20 text-[#dfd0a4]">
								<Eye className="w-5 h-5" />
							</div>
							<div>
								<div className="text-xs font-mono bg-gradient-to-r from-[#dfd0a4] via-[#f0e6c8] to-[#c8b88a] bg-clip-text text-transparent font-medium">
									SENSORES IA 360° · APAS 5.0
								</div>
								<div className="text-xs text-zinc-300 mt-0.5">
									Detección omnidireccional inteligente de obstáculos en vuelo
									urbano y naturaleza.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
