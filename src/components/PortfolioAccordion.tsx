"use client";

import { ArrowUpRight, Film } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BlurText } from "./ui/BlurText";

interface DroneProject {
	id: string;
	title: string;
	subtitle: string;
	image: string;
	description: string;
}

export function PortfolioAccordion() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const accordionItems: DroneProject[] = [
		{
			id: "cinema",
			title: "Cinematic",
			subtitle: "FILMACIÓN AÉREA",
			image: "/images/accordion-cinema.webp",
			description:
				"Producción de contenido audiovisual de alto formato para cine, publicidad y televisión.",
		},
		{
			id: "realty",
			title: "Real Estate",
			subtitle: "INMOBILIARIA DE LUJO",
			image: "/images/accordion-realty.webp",
			description:
				"Planos espectaculares y recorridos dinámicos para destacar propiedades exclusivas.",
		},
		{
			id: "events",
			title: "Events",
			subtitle: "COBERTURA PREMIUM",
			image: "/images/accordion-events.webp",
			description:
				"Captura la magnitud de tus eventos masivos, festivales y celebraciones desde el cielo.",
		},
		{
			id: "fpv",
			title: "FPV Drone",
			subtitle: "ACCIÓN DINÁMICA",
			image: "/images/accordion-fpv.webp",
			description:
				"Vuelos de proximidad a alta velocidad y planos inmersivos imposibles de lograr con drones estándar.",
		},
		{
			id: "industrial",
			title: "Geomapping",
			subtitle: "INGENIERÍA Y PRECISIÓN",
			image: "/images/accordion-industrial.webp",
			description:
				"Fotogrametría avanzada, nubes de puntos LiDAR y modelado 3D de alta precisión para terrenos y obras.",
		},
	];

	return (
		<section className="w-full bg-transparent py-24 px-4 md:px-8 border-t border-white/[0.06]">
			<div className="max-w-7xl mx-auto">
				{/* Cabecera Editorial Estilo AeroCinema */}
				<div className="flex flex-col gap-3 mb-10">
					<div className="flex items-center gap-3">
						<span className="w-12 h-px bg-white/20" />
						<span className="text-zinc-500 text-[10px] font-medium tracking-[0.3em] uppercase font-sans">
							COLECCIÓN VISUAL {"//"} CINEMATIC ACCORDION
						</span>
					</div>
					<BlurText
						text="PRODUCCIONES CINEMATOGRÁFICAS DESTACADAS"
						className="font-cinzel text-2xl md:text-4xl font-bold tracking-tight text-white uppercase"
					/>
				</div>

				{/* Contenedor del Acordeón Líquido */}
				<div className="flex flex-col md:flex-row items-stretch gap-2.5 h-[500px] md:h-[600px] w-full max-w-7xl mx-auto mt-10">
					{accordionItems.map((project, index) => {
						const isExpanded = expandedIndex === index;
						return (
							<Link
								key={project.id}
								href="#portfolio"
								onClick={() => setExpandedIndex(isExpanded ? null : index)}
								onMouseEnter={() => setExpandedIndex(index)}
								onMouseLeave={() => setExpandedIndex(null)}
								className={cn(
									"relative group overflow-hidden rounded-xl cursor-pointer outline-none specular-card",
									"transition-[flex-grow] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
									"focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
									"min-w-[60px] md:min-w-[90px]",
									isExpanded ? "flex-[5]" : "flex-[1]",
								)}
								style={{ flexBasis: 0 }}
							>
								{/* Imagen Física Optimizada */}
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
									sizes={isExpanded ? "60vw" : "15vw"}
									priority={index < 2}
								/>

								{/* Degradado Cinematográfico Dinámico */}
								<div
									className={cn(
										"absolute inset-0 transition-opacity duration-500 z-10",
										isExpanded
											? "bg-gradient-to-t from-black/95 via-black/30 to-transparent"
											: "bg-black/40 hover:bg-black/20",
									)}
								/>

								{/* Contenido Textual e Iconografía */}
								<div className="absolute left-0 right-0 bottom-0 p-5 md:p-8 flex flex-col justify-end h-full z-20">
									<div
										className={cn(
											"flex items-center gap-2 mb-1.5 transition-opacity duration-500",
											isExpanded ? "opacity-100 delay-150" : "opacity-0",
										)}
									>
										<Film className="w-3 h-3 text-zinc-400 fill-zinc-400" />
										<span className="font-sans text-[9px] uppercase tracking-[0.25em] text-zinc-400">
											{project.subtitle}
										</span>
									</div>

									<h3
										className={cn(
											"font-cinzel font-bold text-white uppercase tracking-wide whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2",
											"transition-all duration-500 ease-out",
											isExpanded
												? "opacity-100 translate-y-0 delay-150 text-lg md:text-xl"
												: "opacity-0 translate-y-4 text-sm",
										)}
									>
										{project.title}
										<ArrowUpRight className="w-4 h-4 text-white/50 shrink-0" />
									</h3>
								</div>

								{/* Contorno Óptico de Lente */}
								<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl z-30" />
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
