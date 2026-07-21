"use client";

import React from "react";
import { ShieldCheck, Award, Plane, Radar, Layers } from "lucide-react";

interface Certification {
	title: string;
	issuer: string;
	code: string;
	icon: React.ElementType;
	featured?: boolean;
}

const certifications: Certification[] = [
	{
		title: "Operador UAS registrado",
		issuer: "AESA",
		code: "OP-UAS-ES",
		icon: ShieldCheck,
	},
	{
		title: "Piloto certificado",
		issuer: "AESA",
		code: "PIL-AESA",
		icon: Award,
	},
	{
		title: "Categoría A1/A3",
		issuer: "EASA",
		code: "CAT-A1/A3",
		icon: Plane,
	},
	{
		title: "Categoría A2",
		issuer: "EASA",
		code: "CAT-A2",
		icon: Radar,
	},
	{
		title: "STS-01 (Escenarios Estándar)",
		issuer: "EASA",
		code: "EASA-STS-01",
		icon: Layers,
		featured: true,
	},
];

export function AboutMe() {
	return (
		<section className="w-full bg-transparent py-24 px-4 md:px-8 relative z-10 overflow-x-clip overflow-y-visible">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
				{/* COLUMNA IZQUIERDA: EL REVELADO EN VÍDEO (5 Columnas) */}
				<div className="lg:col-span-5 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.08] group shadow-2xl">
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-101"
					>
						<source src="/videos/jose-reveal.mp4" type="video/mp4" />
					</video>

					{/* Sombra interna cinematográfica */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

					{/* Marcadores estéticos de visor de cámara */}
					<div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/40 tracking-widest uppercase">
						[ UAV_OP_POV ]
					</div>
					<div className="absolute bottom-6 right-6 font-mono text-[9px] text-white/40 tracking-widest uppercase">
						REC // 24FPS
					</div>
				</div>

				{/* COLUMNA DERECHA: PERFIL EDITORIAL (7 Columnas) */}
				<div className="lg:col-span-7 flex flex-col items-start">
					<div className="flex items-center gap-3 mb-4">
						<span className="w-8 h-px bg-white/20" />
						<span className="text-zinc-500 text-[10px] font-medium tracking-[0.3em] uppercase font-montserrat">
							Operador de Vuelo
						</span>
					</div>

					<h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase mb-6">
						José Antonio
					</h2>

					<p className="font-montserrat font-light text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide mb-8">
						Operador técnico y piloto de UAS registrado en AESA. Especializado
						en capturar la geometría del territorio y la luz de cine en las
						costas de Málaga y los perfiles arquitectónicos de Barcelona. Cada
						vuelo se ejecuta bajo planificación estricta, transformando espacios
						aéreos controlados en piezas maestras sin fricciones legales.
					</p>

					{/* Bloques de Certificaciones Técnicas - Fusión Élite AIs */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full font-montserrat">
						{certifications.map((cert) => {
							const Icon = cert.icon;
							return (
								<div
									key={cert.code}
									className={`group relative overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.01] px-5 py-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.03] ${
										cert.featured ? "sm:col-span-2" : ""
									}`}
								>
									{/* Brackets HUD de DeepSeek */}
									<span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-white/20 transition-colors duration-500" />
									<span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-white/20 transition-colors duration-500" />
									<span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-white/20 transition-colors duration-500" />
									<span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-white/20 transition-colors duration-500" />

									{/* Metadata de código (DeepSeek / Qwen) */}
									<span className="absolute top-3 right-4 font-mono text-[9px] text-white/15 tracking-widest uppercase">
										{cert.code}
									</span>

									<div className="flex items-center gap-4 relative z-10">
										{/* Icono + Indicador de estado de Kimi */}
										<div className="relative flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.02] shrink-0 transition-colors duration-300 group-hover:border-white/20">
											<Icon
												size={16}
												className="text-white/40 group-hover:text-white/80 transition-colors duration-300"
											/>
											<span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500/80 ring-2 ring-zinc-950 animate-pulse" />
										</div>

										{/* Textos con jerarquía de GLM 5.2 */}
										<div className="min-w-0">
											<h4 className="text-white text-xs font-bold uppercase tracking-wider">
												{cert.title}
											</h4>
											<p className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mt-0.5">
												Emisor: {cert.issuer}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
