"use client";
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
			badge: "L'HOSPITALET & BARCELONA",
			title: "Operación local",
			description:
				"Conocemos el entorno local, las normativas de la zona y garantizamos tiempos de respuesta reales.",
			icon: MapPin,
			highlight: "PROXIMIDAD REAL",
		},
		{
			id: "entrega-rapida",
			badge: "ENTREGA EN 48H",
			title: "Vídeo listo en 48 horas",
			description:
				"Entregamos el material editado y optimizado para tus redes o portales sin hacerte esperar semanas.",
			icon: Clock,
			highlight: "SIN ESPERAS",
		},
	];

	return (
		<section
			className="w-full bg-transparent py-16 md:py-20 px-4 md:px-8 border-t border-white/[0.06] relative z-10"
			aria-labelledby="why-us-heading"
		>
			<div className="max-w-7xl mx-auto">
				{/* Encabezado de la sección */}
				<div className="mb-10 text-center md:text-left">
					<span
						id="why-us-heading"
						className="font-mono text-[10px] tracking-[0.25em] text-amber-400/90 uppercase font-semibold block mb-2"
					>
						¿POR QUÉ TRABAJAR CON JF.DRONEVISION?
					</span>
					<h2 className="font-cormorant text-2xl md:text-4xl font-bold text-white uppercase tracking-wide">
						Garantías claras,{" "}
						<span className="text-amber-400 italic">sin sorpresas</span>
					</h2>
				</div>

				{/* Grid de 4 tarjetas de valor */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{whyUsList.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.id}
								className="group relative p-6 rounded-xl bg-[#0c0d10]/80 border border-white/[0.08] backdrop-blur-md specular-card flex flex-col justify-between transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.06)] select-none cursor-default"
							>
								{/* HUD Corner Accents */}
								<div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/20 group-hover:border-amber-400/60 transition-colors" />
								<div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/20 group-hover:border-amber-400/60 transition-colors" />

								<div>
									{/* Top Badge + Icon */}
									<div className="flex items-center justify-between mb-4">
										<div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
											<Icon className="w-4 h-4" strokeWidth={1.5} />
										</div>
										<span className="font-mono text-[9px] text-amber-300/80 tracking-wider uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
											{item.badge}
										</span>
									</div>

									{/* Título & Descripción */}
									<h3 className="font-cormorant text-xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-amber-200 transition-colors">
										{item.title}
									</h3>
									<p className="font-jakarta text-xs text-zinc-300 font-light leading-relaxed">
										{item.description}
									</p>
								</div>

								{/* Bottom Tag */}
								<div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[9px] text-zinc-500 tracking-widest">
									<span>STATUS: OK</span>
									<span className="text-amber-400/90 font-medium">
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
