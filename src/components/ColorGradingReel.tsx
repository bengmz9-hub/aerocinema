"use client";

import { Camera, Check, Film, Layers, Sliders } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { BlurText } from "./ui/BlurText";

interface ReelItem {
	id: string;
	title: string;
	subtitle: string;
	codec: string;
	fps: string;
	resolution: string;
	rawImage: string;
	gradedImage: string;
	description: string;
}

const REEL_ITEMS: ReelItem[] = [
	{
		id: "cinema",
		title: "Cinematic Coastal FPV",
		subtitle: "FILMACIÓN AÉREA",
		codec: "ProRes 422 HQ",
		fps: "60 FPS",
		resolution: "4K DCI",
		rawImage: "/images/accordion-cinema.webp",
		gradedImage: "/images/accordion-cinema.webp",
		description:
			"Captura logarítmica de alto rango dinámico para cine y publicidad. Recuperación completa de altas luces en acantilados.",
	},
	{
		id: "realty",
		title: "Exclusive Villa Tour",
		subtitle: "INMOBILIARIA DE LUJO",
		codec: "10-bit D-Log M",
		fps: "30 FPS",
		resolution: "4K UHD",
		rawImage: "/images/accordion-realty.webp",
		gradedImage: "/images/accordion-realty.webp",
		description:
			"Recorridos fluidos de arquitectura moderna con gradación de tonos cálidos y equilibrio de interiores-exteriores.",
	},
	{
		id: "fpv",
		title: "High-Speed Proximity",
		subtitle: "ACCIÓN DINÁMICA FPV",
		codec: "D-Log M 10-bit",
		fps: "120 FPS",
		resolution: "4K DCI",
		rawImage: "/images/accordion-fpv.webp",
		gradedImage: "/images/accordion-fpv.webp",
		description:
			"Vuelos de precisión rozando estructuras. Máxima nitidez y fidelidad cromática en movimiento extremo.",
	},
	{
		id: "events",
		title: "Nocturnal Festival Coverage",
		subtitle: "COBERTURA EVENTOS",
		codec: "ProRes RAW",
		fps: "60 FPS",
		resolution: "4K UHD",
		rawImage: "/images/accordion-events.webp",
		gradedImage: "/images/accordion-events.webp",
		description:
			"Sensibilidad de luz optimizada para escenarios nocturnos con efectos lumínicos de alta saturación.",
	},
	{
		id: "industrial",
		title: "Geomapping & LiDAR Site",
		subtitle: "INGENIERÍA Y PRECISIÓN",
		codec: "H.265 / 10-bit",
		fps: "30 FPS",
		resolution: "5.1K DCI",
		rawImage: "/images/accordion-industrial.webp",
		gradedImage: "/images/accordion-industrial.webp",
		description:
			"Fotogrametría aérea y modelado con fidelidad de color neutra calibrada para ingeniería topográfica.",
	},
];

const SPROCKET_IDS = Array.from({ length: 18 }, (_, i) => `hole-${i + 1}`);

export function ColorGradingReel() {
	const [activeId, setActiveId] = useState<string>(REEL_ITEMS[0].id);
	const [sliderPos, setSliderPos] = useState<number>(50);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const activeItem =
		REEL_ITEMS.find((item) => item.id === activeId) || REEL_ITEMS[0];

	const handleMove = useCallback((clientX: number) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const x = clientX - rect.left;
		const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
		setSliderPos(percentage);
	}, []);

	const handlePointerDown = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			setIsDragging(true);
			e.currentTarget.setPointerCapture(e.pointerId);
			handleMove(e.clientX);
		},
		[handleMove],
	);

	const handlePointerMove = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (isDragging || e.buttons === 1) {
				handleMove(e.clientX);
			}
		},
		[isDragging, handleMove],
	);

	const handlePointerUp = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			setIsDragging(false);
			if (e.currentTarget.hasPointerCapture(e.pointerId)) {
				e.currentTarget.releasePointerCapture(e.pointerId);
			}
		},
		[],
	);

	return (
		<section className="w-full bg-transparent py-16 md:py-24 px-4 md:px-8 border-t border-white/[0.06] select-none">
			<div className="max-w-7xl mx-auto">
				{/* ═══════ CABECERA TELEMÉTRICA ═══════ */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
					<div>
						<div className="flex items-center gap-3 mb-2">
							<span className="w-8 h-px bg-cyan-400/60" />
							<span className="text-cyan-400 text-[10px] font-mono tracking-[0.3em] uppercase">
								COLOR GRADING REEL {"//"} D-LOG M 10-BIT
							</span>
						</div>
						<BlurText
							text="PRODUCCIONES & ETALONAJE DIGITAL"
							className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase"
						/>
					</div>

					{/* Insignias Técnicas */}
					<div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-wider">
						<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md flex items-center gap-1.5">
							<Camera className="w-3 h-3 text-cyan-400" />
							{activeItem.codec}
						</span>
						<span className="px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 backdrop-blur-md">
							{activeItem.fps}
						</span>
						<span className="px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 backdrop-blur-md">
							{activeItem.resolution}
						</span>
					</div>
				</div>

				{/* ═══════ VISOR COMPARATIVO DE ETALONAJE (BEFORE/AFTER SLIDER) ═══════ */}
				<div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group">
					<div
						ref={containerRef}
						onPointerDown={handlePointerDown}
						onPointerMove={handlePointerMove}
						onPointerUp={handlePointerUp}
						onPointerCancel={handlePointerUp}
						className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] cursor-ew-resize overflow-hidden touch-none select-none"
					>
						{/* Lado Derecho: Imagen Graduada (Color Final Cinematográfico) */}
						<div className="absolute inset-0 w-full h-full pointer-events-none select-none">
							<Image
								src={activeItem.gradedImage}
								alt={`${activeItem.title} Color Graded`}
								fill
								className="object-cover object-center saturate-125 contrast-110 pointer-events-none select-none"
								priority
							/>
							<div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/70 border border-emerald-500/40 backdrop-blur-md text-[9px] font-mono uppercase tracking-[0.2em] text-emerald-300 flex items-center gap-1.5 shadow-lg pointer-events-none select-none">
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
								COLOR GRADED (FINAL)
							</div>
						</div>

						{/* Lado Izquierdo: Imagen RAW D-Log M (Perfil Neutro/Plano) */}
						<div
							className="absolute inset-y-0 left-0 overflow-hidden z-10 pointer-events-none select-none"
							style={{ width: `${sliderPos}%` }}
						>
							<div
								className="absolute inset-0 h-full pointer-events-none select-none"
								style={{
									width: containerRef.current
										? `${containerRef.current.clientWidth}px`
										: "100%",
									maxWidth: "none",
								}}
							>
								<Image
									src={activeItem.rawImage}
									alt={`${activeItem.title} D-Log RAW`}
									fill
									className="object-cover object-center saturate-40 contrast-85 brightness-105 filter grayscale-[35%] pointer-events-none select-none"
									priority
								/>
							</div>
							<div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-1.5 shadow-lg pointer-events-none select-none">
								<Layers className="w-3 h-3 text-cyan-400" />
								D-LOG M RAW (PLANO)
							</div>
						</div>

						{/* Línea Divisora & Tirador Central */}
						<div
							className="absolute inset-y-0 z-30 pointer-events-none flex items-center justify-center"
							style={{ left: `${sliderPos}%` }}
						>
							<div className="w-0.5 h-full bg-gradient-to-b from-cyan-400 via-white to-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
							<div className="absolute w-8 h-8 rounded-full bg-black/90 border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center justify-center text-cyan-300 transition-transform group-hover:scale-110">
								<Sliders className="w-3.5 h-3.5" />
							</div>
						</div>

						{/* Indicador sutil de deslizamiento */}
						<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/80 border border-white/10 backdrop-blur-md text-[9px] font-mono text-zinc-400 tracking-[0.2em] uppercase hidden sm:flex items-center gap-2">
							<span>◄ Desliza para comparar ►</span>
						</div>
					</div>

					{/* Pie de detalles de la toma activa */}
					<div className="p-4 sm:p-6 bg-[#0a0c10]/90 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
						<div>
							<div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 tracking-wider uppercase mb-1">
								<span>{activeItem.subtitle}</span>
								<span>•</span>
								<span className="text-zinc-400">{activeItem.codec}</span>
							</div>
							<h3 className="font-cinzel font-bold text-lg sm:text-xl text-white uppercase">
								{activeItem.title}
							</h3>
							<p className="text-zinc-400 font-sans text-xs sm:text-sm font-light mt-1 max-w-2xl leading-relaxed">
								{activeItem.description}
							</p>
						</div>
					</div>
				</div>

				{/* ═══════ CARRETE TIPO CINTA DE CINE 35MM (FILM STRIP) ═══════ */}
				<div className="mt-8 md:mt-12">
					<div className="flex items-center justify-between mb-4">
						<span className="text-zinc-500 text-[10px] font-mono tracking-[0.25em] uppercase flex items-center gap-2">
							<Film className="w-3.5 h-3.5 text-cyan-400" />
							SELECCIÓN DE CLIPS DE CINE
						</span>
						<span className="text-zinc-500 text-[9px] font-mono hidden sm:inline">
							5 PRODUCCIONES SELECCIONADAS
						</span>
					</div>

					{/* Cinta con bordes perforados estilo 35mm */}
					<div className="relative p-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl overflow-hidden">
						{/* Perforaciones superiores tipo cinta */}
						<div className="w-full flex justify-between gap-2 mb-2 px-1">
							{SPROCKET_IDS.map((sprocketId) => (
								<div
									key={`top-${sprocketId}`}
									className="w-3 h-2 rounded-[1px] bg-white/10 border border-white/5"
								/>
							))}
						</div>

						{/* Carrusel horizontal de clips (Centrado en escritorio, scrollable en móvil) */}
						<div className="flex items-center justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-none snap-x w-full">
							{REEL_ITEMS.map((item) => {
								const isActive = item.id === activeId;
								return (
									<button
										key={item.id}
										type="button"
										onClick={() => setActiveId(item.id)}
										className={cn(
											"relative shrink-0 md:shrink md:flex-1 snap-start rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group outline-none text-left",
											"w-[170px] sm:w-[190px] md:w-auto max-w-[230px] aspect-[16/10]",
											isActive
												? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-black scale-102 z-10"
												: "opacity-60 hover:opacity-100 hover:scale-101 border border-white/10",
										)}
									>
										<Image
											src={item.gradedImage}
											alt={item.title}
											fill
											className="object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

										{/* Tag de Estado Active */}
										{isActive && (
											<div className="absolute top-2 right-2 p-1 rounded-full bg-cyan-500 text-black shadow-lg">
												<Check className="w-3 h-3 stroke-[3]" />
											</div>
										)}

										<div className="absolute bottom-0 left-0 right-0 p-3">
											<span className="text-[8px] font-mono uppercase tracking-widest text-cyan-300 block mb-0.5">
												{item.fps} · {item.resolution}
											</span>
											<h4 className="font-cinzel text-xs font-bold text-white uppercase truncate">
												{item.title}
											</h4>
										</div>
									</button>
								);
							})}
						</div>

						{/* Perforaciones inferiores tipo cinta */}
						<div className="w-full flex justify-between gap-2 mt-2 px-1">
							{SPROCKET_IDS.map((sprocketId) => (
								<div
									key={`bot-${sprocketId}`}
									className="w-3 h-2 rounded-[1px] bg-white/10 border border-white/5"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
