"use client";

import { ArrowUpRight, Heart, Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BlurText } from "./ui/BlurText";

function InstagramIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			height="24"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

interface InstagramReelItem {
	id: string;
	title: string;
	category: string;
	thumbnail: string;
	views: string;
	likes: string;
	embedUrl: string;
	instagramUrl: string;
	duration: string;
	isDirectEmbed?: boolean;
}

const INSTAGRAM_REELS: InstagramReelItem[] = [
	{
		id: "reel-01",
		title: "Cinematic Wildflower FPV Flight",
		category: "CINEMATIC FPV",
		thumbnail: "https://www.instagram.com/p/DYHZnoKN8mh/media/?size=l",
		views: "28.4K",
		likes: "3.7K",
		embedUrl: "https://www.instagram.com/reel/DYHZnoKN8mh/embed",
		instagramUrl: "https://www.instagram.com/reel/DYHZnoKN8mh/",
		duration: "0:45",
	},
	{
		id: "reel-02",
		title: "Luxury Villa Indoor-Outdoor One-Take",
		category: "REAL ESTATE",
		thumbnail: "/images/portfolio-propiedades-1.webp",
		views: "18.5K",
		likes: "2.4K",
		embedUrl: "https://www.instagram.com/reel/DYHZnoKN8mh/embed",
		instagramUrl: "https://www.instagram.com/jf.drone_visual",
		duration: "0:30",
	},
	{
		id: "reel-03",
		title: "Nocturnal Festival Lighting Coverage",
		category: "EVENTS 4K",
		thumbnail: "/images/portfolio-eventos.webp",
		views: "31.2K",
		likes: "4.1K",
		embedUrl: "https://www.instagram.com/reel/DYHZnoKN8mh/embed",
		instagramUrl: "https://www.instagram.com/jf.drone_visual",
		duration: "0:58",
	},
	{
		id: "reel-04",
		title: "High-Speed Mountain Ridge Dive",
		category: "EXTREME FPV",
		thumbnail: "/images/portfolio-propiedades-2.webp",
		views: "42.9K",
		likes: "5.8K",
		embedUrl: "https://www.instagram.com/reel/DYHZnoKN8mh/embed",
		instagramUrl: "https://www.instagram.com/jf.drone_visual",
		duration: "0:38",
	},
];

export function InstagramReelsSection() {
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const [activeModalReel, setActiveModalReel] =
		useState<InstagramReelItem | null>(null);

	// Bloquear scroll de pantalla cuando el modal está abierto
	useEffect(() => {
		if (activeModalReel) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [activeModalReel]);

	return (
		<section className="w-full bg-transparent py-16 md:py-24 px-4 md:px-8 border-t border-white/[0.06] relative overflow-hidden select-none">
			<div className="max-w-7xl mx-auto">
				{/* ═══════ CABECERA TELEMÉTRICA DE INSTAGRAM ═══════ */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
					<div>
						<div className="flex items-center gap-3 mb-2">
							<span className="w-8 h-px bg-pink-500/60" />
							<span className="text-pink-400 text-[10px] font-mono tracking-[0.3em] uppercase flex items-center gap-2">
								<InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
								INSTAGRAM LIVE FEED {"//"} @JF.DRONE_VISUAL
							</span>
						</div>
						<BlurText
							text="ÚLTIMOS RODAJES EN INSTAGRAM"
							className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase"
						/>
					</div>

					<a
						href="https://www.instagram.com/jf.drone_visual"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-200 font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-pink-500/20 hover:border-pink-400/60 hover:text-white backdrop-blur-md self-start md:self-auto"
					>
						<span>@jf.drone_visual</span>
						<ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</a>
				</div>

				{/* ═══════ GRID DE REELS INTERACTIVOS (4 COLUMNAS) ═══════ */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
					{INSTAGRAM_REELS.map((reel) => {
						if (reel.isDirectEmbed) {
							return (
								<div
									key={reel.id}
									className="relative rounded-2xl overflow-hidden border border-white/15 bg-black aspect-[9/16] shadow-2xl specular-card group"
								>
									<div className="absolute inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center">
										<iframe
											src={reel.embedUrl}
											title={reel.title}
											className="w-[125%] h-[135%] -translate-y-6 border-0 bg-black max-w-none scale-105"
											allowTransparency={true}
											allow="encrypted-media"
										/>
									</div>
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
								</div>
							);
						}

						const isHovered = hoveredId === reel.id;
						return (
							<button
								key={reel.id}
								type="button"
								onClick={() => setActiveModalReel(reel)}
								onMouseEnter={() => setHoveredId(reel.id)}
								onMouseLeave={() => setHoveredId(null)}
								className={cn(
									"group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/80 aspect-[9/16] transition-all duration-500 flex flex-col justify-between p-4 outline-none specular-card text-left cursor-pointer",
									"hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] hover:scale-[1.02]",
								)}
							>
								{/* Imagen de fondo */}
								<Image
									src={reel.thumbnail}
									alt={reel.title}
									fill
									unoptimized
									className={cn(
										"object-cover object-center transition-transform duration-700 pointer-events-none select-none",
										isHovered ? "scale-110 blur-[1px]" : "scale-100",
									)}
								/>

								{/* Overlay degradado cinemático */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 transition-opacity duration-300 group-hover:opacity-90 pointer-events-none" />

								{/* Parte Superior: Badge Instagram & Duración */}
								<div className="relative z-10 flex items-center justify-between w-full pointer-events-none">
									<span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md font-mono text-[8px] tracking-[0.2em] text-pink-300 uppercase flex items-center gap-1.5">
										<InstagramIcon className="w-3 h-3 text-pink-400" />
										REEL EMBED
									</span>
									<span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md font-mono text-[8px] tracking-wider text-zinc-300">
										{reel.duration}
									</span>
								</div>

								{/* Botón Central Play (Animado en Hover) */}
								<div className="relative z-10 my-auto flex items-center justify-center pointer-events-none">
									<div
										className={cn(
											"w-12 h-12 rounded-full bg-pink-500/80 border border-pink-400 text-white flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300",
											isHovered
												? "scale-115 bg-pink-500"
												: "scale-90 opacity-80",
										)}
									>
										<Play className="w-5 h-5 fill-white translate-x-0.5" />
									</div>
								</div>

								{/* Parte Inferior: Metadata & Métricas de Instagram */}
								<div className="relative z-10 flex flex-col gap-2 pointer-events-none">
									<span className="font-mono text-[9px] uppercase tracking-[0.25em] text-pink-400/90 font-medium">
										[ {reel.category} ]
									</span>
									<h3 className="font-cinzel font-bold text-base text-white uppercase leading-snug line-clamp-2">
										{reel.title}
									</h3>

									<div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-zinc-400">
										<span className="flex items-center gap-1">
											<Play className="w-2.5 h-2.5 text-zinc-400 fill-zinc-400" />
											{reel.views}
										</span>
										<span className="flex items-center gap-1">
											<Heart className="w-2.5 h-2.5 text-pink-400 fill-pink-400" />
											{reel.likes}
										</span>
									</div>
								</div>
							</button>
						);
					})}
				</div>

				{/* ═══════ FOOTER CTA INSTAGRAM ═══════ */}
				<div className="mt-10 md:mt-14 text-center">
					<a
						href="https://www.instagram.com/jf.drone_visual"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/15 bg-white/5 text-white font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 hover:bg-white/10 hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] specular-card"
					>
						<InstagramIcon className="w-4 h-4 text-pink-400" />
						<span>Ver más rodajes en @jf.drone_visual</span>
					</a>
				</div>
			</div>

			{/* ═══════ MODAL REPRODUCTOR EMBEDDED INSTAGRAM REEL ═══════ */}
			{activeModalReel && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl transition-all duration-300">
					{/* Fondo para cerrar al clicar fuera */}
					<button
						type="button"
						aria-label="Cerrar reproductor"
						onClick={() => setActiveModalReel(null)}
						className="absolute inset-0 w-full h-full cursor-default"
					/>

					{/* Contenedor del Modal / Iframe Player */}
					<div className="relative z-10 w-full max-w-md bg-[#0a0c10] border border-white/15 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.2)] flex flex-col">
						{/* Cabecera Modal */}
						<div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/60">
							<div className="flex items-center gap-2">
								<InstagramIcon className="w-4 h-4 text-pink-400" />
								<span className="font-mono text-xs text-white uppercase tracking-wider">
									REEL EMBED INLINE
								</span>
							</div>
							<button
								type="button"
								onClick={() => setActiveModalReel(null)}
								aria-label="Cerrar modal"
								className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
							>
								<X className="w-4 h-4" />
							</button>
						</div>

						{/* Iframe oficial de Instagram Reel */}
						<div className="relative w-full aspect-[9/16] bg-black max-h-[70vh]">
							<iframe
								src={activeModalReel.embedUrl}
								title={activeModalReel.title}
								className="w-full h-full border-0"
								allowTransparency={true}
								allow="encrypted-media"
							/>
						</div>

						{/* Pie del Modal */}
						<div className="p-4 border-t border-white/10 bg-black/80 flex items-center justify-between gap-4">
							<div className="truncate">
								<span className="font-mono text-[9px] text-pink-400 tracking-wider uppercase block">
									{activeModalReel.category}
								</span>
								<h4 className="font-cinzel text-xs font-bold text-white truncate">
									{activeModalReel.title}
								</h4>
							</div>
							<a
								href={activeModalReel.instagramUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="shrink-0 px-3 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-200 font-mono text-[9px] uppercase tracking-wider hover:bg-pink-500/20 hover:text-white transition-colors flex items-center gap-1"
							>
								<span>Ver en Instagram</span>
								<ArrowUpRight className="w-3 h-3" />
							</a>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
