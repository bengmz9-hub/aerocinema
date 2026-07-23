"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Eye, Radio, Zap } from "lucide-react";

const techItems = [
	{
		icon: Eye,
		title: "Sensor de Cine",
		description:
			"Resolución nativa en 5.1K con perfiles de color logarítmicos (D-Log de 10 bits) para una flexibilidad extrema en postproducción.",
		highlight: "5.1K D-LOG",
	},
	{
		icon: Cpu,
		title: "Estabilización Activa",
		description:
			"Gimbal mecánico de alta precisión que compensa ráfagas de viento de hasta 12 m/s, garantizando tomas fluidas como la seda.",
		highlight: "3-AXIS GIMBAL",
	},
	{
		icon: Radio,
		title: "Transmisión O3 Pro",
		description:
			"Enlace de vídeo Full HD a 60 fps con latencia ultra-baja para un encuadre y dirección artística milimétrica en tiempo real.",
		highlight: "1080P/60FPS",
	},
	{
		icon: Zap,
		title: "Obturador Global",
		description:
			"Eliminación total del efecto de barrido distorsionado (rolling shutter) en vuelos de alta velocidad y paneos rápidos.",
		highlight: "GLOBAL SHUTTER",
	},
];

export function OpticalTech() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<section className="w-full bg-transparent py-20 md:py-28 px-4 md:px-8 relative z-10 overflow-hidden border-t border-white/[0.04]">
			<div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

			<div className="max-w-7xl mx-auto">
				{/* Cabecera */}
				<div className="flex flex-col items-start mb-14">
					<div className="flex items-center gap-3 mb-3">
						<span className="w-8 h-px bg-cyan-500/40" />
						<span className="text-cyan-400 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">
							HARDWARE {"//"} SENSOR CAPTURE MATRIX
						</span>
					</div>
					<h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-tight uppercase max-w-3xl [text-wrap:balance]">
						Tecnología Óptica de{" "}
						<span className="text-cyan-400 font-light">Vanguardia</span>
					</h2>
				</div>

				{/* Contenido principal */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
					{/* COLUMNA IZQUIERDA: Especificaciones Bento */}
					<div className="lg:col-span-7 order-2 lg:order-1 flex flex-col gap-6 font-sans">
						<p className="font-light text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl [text-wrap:pretty]">
							Nuestros sistemas de vuelo están equipados con ópticas de formato
							completo y estabilizadores activos de tres ejes de grado
							industrial. Registramos texturas puras con rangos dinámicos
							extremos listos para corrección de color profesional en ACES.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
							{techItems.map((item) => {
								const Icon = item.icon;
								return (
									<motion.div
										key={item.title}
										whileHover={prefersReducedMotion ? undefined : { y: -3 }}
										whileTap={
											prefersReducedMotion ? undefined : { scale: 0.97 }
										}
										transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
										className="p-5.5 bg-[#0f1115]/60 border border-white/[0.06] rounded-xl specular-card hover:border-cyan-500/30 transition-colors duration-300 group cursor-pointer"
									>
										<div className="flex items-center justify-between mb-3.5">
											<div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
												<Icon size={18} strokeWidth={1.5} />
											</div>
											<span className="font-mono text-[9px] tracking-wider text-cyan-400/70 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">
												{item.highlight}
											</span>
										</div>
										<h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-1.5 font-cinzel">
											{item.title}
										</h3>
										<p className="text-neutral-400 text-xs font-normal leading-relaxed">
											{item.description}
										</p>
									</motion.div>
								);
							})}
						</div>
					</div>

					{/* COLUMNA DERECHA: El Reproductor de Vídeo */}
					<motion.div
						whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
						transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
						className="lg:col-span-5 order-1 lg:order-2 relative aspect-video lg:aspect-[4/5] rounded-xl overflow-hidden bg-[#0f1115] border border-white/[0.08] specular-card shadow-2xl group"
					>
						<video
							autoPlay
							muted
							loop
							playsInline
							className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700 ease-out"
						>
							<source src="/videos/optics-tech.webm" type="video/webm" />
							<source src="/videos/optics-tech.mp4" type="video/mp4" />
						</video>

						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

						<div className="absolute top-5 left-5 font-mono text-[9px] text-cyan-400 bg-black/60 backdrop-blur-md py-1 px-2.5 rounded border border-cyan-500/20 tracking-wider flex items-center gap-2">
							<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
							CAM_LINK_1: ACTIVE
						</div>
						<div className="absolute bottom-5 left-5 font-mono text-[9px] text-neutral-400 tracking-widest uppercase">
							[ OPT_SENS_ENGAGED ]
						</div>
						<div className="absolute bottom-5 right-5 font-mono text-[9px] text-cyan-400/80 tracking-widest uppercase">
							UHD {"//"} D-LOG 10-BIT
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
