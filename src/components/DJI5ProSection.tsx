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
			className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-montserrat text-white select-none cursor-default"
		>
			{/* Encabezado de Sección */}
			<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
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
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
				{/* ---------------------------------------------------- */}
				{/* PANEL IZQUIERDO: VÍDEO MARCO TRASLÚCIDO APPLE PRO (Md: 5 cols) */}
				{/* ---------------------------------------------------- */}
				<div className="md:col-span-5 relative group rounded-[22px] overflow-hidden border border-white/[0.12] bg-[#12141a]/60 p-2.5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col justify-center transition-all duration-500 hover:border-[#dfd0a4]/35 select-none cursor-default">
					<div className="relative aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-black/90 flex items-center justify-center">
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="metadata"
							className="w-full h-full object-cover rounded-[16px] transition-transform duration-700 ease-out group-hover:scale-105"
						>
							<source
								src="/videos/dji_mini_5_pro_flow.webm"
								type="video/webm"
							/>
							<source src="/videos/dji_mini_5_pro_flow.mp4" type="video/mp4" />
							Tu navegador no soporta la reproducción de video HTML5.
						</video>

						{/* Overlay de telemetría sobrio */}
						<div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] font-mono text-[#dfd0a4]/90 backdrop-blur-md shadow-sm">
							REC ● 24FPS
						</div>
					</div>
				</div>

				{/* ---------------------------------------------------- */}
				{/* PANEL DERECHO: BENTOGRID ESTILO APPLE PRO (Md: 7 cols) */}
				{/* ---------------------------------------------------- */}
				<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
					{/* Tarjeta 1: Hero Spec */}
					<div className="sm:col-span-3 p-5 md:p-6 rounded-[20px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.12] backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-[#dfd0a4]/35 transition-all duration-500 relative overflow-hidden group select-none cursor-default">
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/30 opacity-80" />
						<div className="relative z-10">
							<div className="flex items-center gap-2 text-[10.5px] md:text-xs font-mono mb-1.5 md:mb-2 font-semibold bg-gradient-to-r from-[#dfd0a4] via-[#f0e6c8] to-[#c8b88a] bg-clip-text text-transparent">
								<Camera className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#dfd0a4]" />
								<span>CÁMARA & RESOLUCIÓN DE VÍDEO</span>
							</div>
							<h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">
								4K HDR a 60 fps
							</h3>
							<p className="text-zinc-400 text-[11.5px] md:text-xs leading-relaxed mb-2.5 md:mb-3">
								Sensor {MINI_5_PRO_DATA.sensor} · Perfil{" "}
								{MINI_5_PRO_DATA.colorProfile} · 1080p a 120 fps
							</p>
							<div className="inline-flex items-center gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-[#dfd0a4]/10 border border-[#dfd0a4]/25 text-[#dfd0a4] text-[10.5px] md:text-xs font-mono shadow-sm">
								<span>1,070 Millones de Colores (D-Log M / HLG)</span>
							</div>
						</div>
					</div>

					{/* Tarjeta 2: Categoría y Peso */}
					<div className="px-3.5 py-2.5 md:p-5 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-[#dfd0a4]/30 hover:bg-[#151821]/70 transition-all duration-500 group select-none cursor-default relative overflow-hidden flex flex-col justify-center">
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-60" />
						<div className="relative z-10">
							<div className="flex items-center justify-between md:justify-start gap-1 mb-1 md:mb-2">
								<div className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-mono text-[#dfd0a4]/90 tracking-wider">
									<ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#dfd0a4]" />
									<span>CATEGORÍA ABIERTA</span>
								</div>
								<span className="md:hidden text-[13px] font-bold text-white tabular-nums group-hover:text-[#f0e6c8] transition-colors font-mono tracking-tight">
									249 g
								</span>
							</div>
							<div className="hidden md:block text-2xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors">
								249 g
							</div>
							<p className="text-zinc-400 text-[10.5px] md:text-xs leading-tight">
								Sin necesidad de licencias A1/A3. Apto para operaciones urbanas.
							</p>
						</div>
					</div>

					{/* Tarjeta 3: Autonomía */}
					<div className="px-3.5 py-2.5 md:p-5 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-[#dfd0a4]/30 hover:bg-[#151821]/70 transition-all duration-500 group select-none cursor-default relative overflow-hidden flex flex-col justify-center">
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-60" />
						<div className="relative z-10">
							<div className="flex items-center justify-between md:justify-start gap-1 mb-1 md:mb-2">
								<div className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-mono text-[#dfd0a4]/90 tracking-wider">
									<BatteryCharging className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#dfd0a4]" />
									<span>AUTONOMÍA</span>
								</div>
								<span className="md:hidden text-[13px] font-bold text-white tabular-nums group-hover:text-[#f0e6c8] transition-colors font-mono tracking-tight">
									31 min
								</span>
							</div>
							<div className="hidden md:block text-2xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors">
								31 min
							</div>
							<p className="text-zinc-400 text-[10.5px] md:text-xs leading-tight">
								Velocidad máx. {MINI_5_PRO_DATA.maxSpeed}.
							</p>
						</div>
					</div>

					{/* Tarjeta 4: Alcance O4 */}
					<div className="px-3.5 py-2.5 md:p-5 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-[#dfd0a4]/30 hover:bg-[#151821]/70 transition-all duration-500 group select-none cursor-default relative overflow-hidden flex flex-col justify-center">
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-60" />
						<div className="relative z-10">
							<div className="flex items-center justify-between md:justify-start gap-1 mb-1 md:mb-2">
								<div className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-mono text-[#dfd0a4]/90 tracking-wider">
									<Wifi className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#dfd0a4]" />
									<span>ALCANCE O4</span>
								</div>
								<span className="md:hidden text-[13px] font-bold text-white tabular-nums group-hover:text-[#f0e6c8] transition-colors font-mono tracking-tight">
									15 km
								</span>
							</div>
							<div className="hidden md:block text-2xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors">
								15 km
							</div>
							<p className="text-zinc-400 text-[10.5px] md:text-xs leading-tight">
								Transmisión FHD 1080p 60fps.
							</p>
						</div>
					</div>

					{/* Tarjeta 5: Detección IA 360° */}
					<div className="sm:col-span-3 px-3.5 py-2 md:p-4 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-[#dfd0a4]/30 transition-all duration-500 flex items-center justify-between gap-3 md:gap-4 select-none cursor-default relative overflow-hidden">
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-60" />
						<div className="relative z-10 flex items-center gap-2.5 md:gap-3">
							<Eye className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#dfd0a4] shrink-0" />
							<div>
								<div className="text-[10px] md:text-xs font-mono bg-gradient-to-r from-[#dfd0a4] via-[#f0e6c8] to-[#c8b88a] bg-clip-text text-transparent font-medium uppercase tracking-wider">
									SENSORES IA 360° · APAS 5.0
								</div>
								<div className="text-[10.5px] md:text-xs text-zinc-300">
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
