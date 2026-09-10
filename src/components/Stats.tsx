import { Clock, Feather, MapPin, ShieldCheck } from "lucide-react";

export function Stats() {
	const whyUsList = [
		{
			id: "aesa",
			badge: "AESA CERTIFICADO",
			title: "Permisos en regla",
			description:
				"Operamos con todos los permisos de AESA al día. Ninguna multa, ningún problema legal para ti.",
			icon: ShieldCheck,
			highlight: "CERO RIESGO LEGAL",
		},
		{
			id: "vuelo-urbano",
			badge: "SUB-249G URBANO",
			title: "Vuelo urbano legal",
			description:
				"El Mini 5 Pro no necesita autorizaciones complejas para operar en zonas urbanas. Llegamos a tu edificio sin trabas.",
			icon: Feather,
			highlight: "ACCESO DIRECTO",
		},
		{
			id: "cobertura-local",
			badge: "L'HOSPITALET & BCN",
			title: "Respuesta en el día",
			description:
				"Base operativa en L'Hospitalet. Nos desplazamos rápido a cualquier punto del área metropolitana.",
			icon: MapPin,
			highlight: "PROXIMIDAD",
		},
		{
			id: "entrega-rapida",
			badge: "ENTREGA 48H",
			title: "Material listo enseguida",
			description:
				"Vídeo editado y bruto disponible en 48 horas tras el vuelo. Sin semanas de espera.",
			icon: Clock,
			highlight: "SIN ESPERAS",
		},
	];

	return (
		<section
			id="stats"
			aria-labelledby="why-us-heading"
			className="w-full bg-transparent py-8 md:py-12 px-4 md:px-8 relative z-10 overflow-hidden select-none"
		>
			<div className="max-w-7xl mx-auto">
				{/* Encabezado de la sección (Centrado) */}
				<div className="mb-10 flex flex-col items-center text-center max-w-2xl mx-auto">
					<span
						id="why-us-heading"
						className="font-mono text-[10px] tracking-[0.25em] text-gold-400/90 uppercase font-semibold block mb-2"
					>
						¿POR QUÉ TRABAJAR CON JF.DRONEVISION?
					</span>
					<h2 className="font-cormorant text-2xl md:text-4xl font-bold text-white uppercase tracking-wide mb-2">
						Garantías claras,{" "}
						<span className="text-gold-400 italic">sin sorpresas</span>
					</h2>
					<p className="font-jakarta text-sm md:text-base text-zinc-400 font-light">
						Compromiso técnico, normativo y de entrega en cada vuelo.
					</p>
				</div>

				{/* Grid de 4 tarjetas de valor */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-5">
					{whyUsList.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.id}
								className="group relative px-3 py-2.5 md:p-6 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between transition-all duration-500 hover:border-gold-500/35 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(223,208,164,0.08)] select-none cursor-default overflow-hidden"
							>
								{/* Luz cenital difusa estilo Apple */}
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-60" />

								{/* HUD Corner Accents */}
								<div className="absolute top-0 left-0 w-2 h-2 md:w-2.5 md:h-2.5 border-t border-l border-white/20 group-hover:border-gold-400/60 transition-colors" />
								<div className="absolute top-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 border-t border-r border-white/20 group-hover:border-gold-400/60 transition-colors" />

								<div className="relative z-10">
									{/* Top Badge + Icon + Mobile Highlight */}
									<div className="flex items-center justify-between mb-1.5 md:mb-4">
										<div className="flex items-center gap-1.5">
											<div className="p-1 md:p-2 rounded-md md:rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400">
												<Icon
													className="w-3 h-3 md:w-4 md:h-4"
													strokeWidth={1.5}
												/>
											</div>
											<span className="font-mono text-[8px] md:text-[9px] text-gold-300 font-bold tracking-wider uppercase bg-gold-500/10 px-1.5 py-0.5 rounded border border-gold-500/20">
												{item.badge}
											</span>
										</div>
										<span className="md:hidden font-mono text-[8px] text-gold-400 font-bold tracking-wider">
											{item.highlight}
										</span>
									</div>

									{/* Título & Descripción */}
									<h3 className="font-cormorant text-base md:text-xl font-bold text-white uppercase tracking-wide mb-1 md:mb-2 group-hover:text-gold-200 transition-colors">
										{item.title}
									</h3>
									<p className="font-jakarta text-xs md:text-sm text-zinc-200 font-semibold leading-snug md:leading-relaxed">
										{item.description}
									</p>
								</div>

								{/* Bottom Tag (Desktop only) */}
								<div className="hidden md:flex relative z-10 mt-6 pt-3 border-t border-white/[0.06] items-center justify-end font-mono text-[9px] tracking-widest">
									<span className="text-gold-400 font-bold">
										{item.highlight}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
