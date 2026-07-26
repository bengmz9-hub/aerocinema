"use client";

import { Award, Layers, Plane, Radar, ShieldCheck } from "lucide-react";

export function AboutMe() {
	return (
		<section className="relative w-full bg-transparent py-8 md:py-12 px-4 sm:px-6 lg:px-8 font-montserrat text-white select-none cursor-default z-10 overflow-hidden">
			<div className="max-w-7xl mx-auto relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
					{/* ---------------------------------------------------- */}
					{/* PANEL IZQUIERDO: VÍDEO MARCO TRASLÚCIDO (Lg: 5 cols) */}
					{/* ---------------------------------------------------- */}
					<div className="lg:col-span-5 relative group rounded-2xl overflow-hidden border border-white/10 bg-[#0a0c10]/70 p-2 backdrop-blur-xl shadow-2xl flex flex-col justify-center transition-all duration-500 hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] select-none cursor-default">
						<div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-auto h-full w-full rounded-xl overflow-hidden bg-black/80 flex items-center justify-center">
							<video
								autoPlay
								muted
								loop
								playsInline
								preload="metadata"
								className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
							>
								<source src="/videos/jose-reveal.mp4" type="video/mp4" />
								Tu navegador no soporta la reproducción de video HTML5.
							</video>

							{/* Overlay de telemetría sobrio */}
							<div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-black/70 border border-white/10 text-[10px] font-mono text-[#dfd0a4]/90 backdrop-blur-sm">
								UAV_OP_POV ● 24FPS
							</div>
							<div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded bg-black/70 border border-white/10 text-[10px] font-mono text-zinc-400 backdrop-blur-sm">
								REC {"//"} AESA CERT
							</div>
						</div>
					</div>

					{/* ---------------------------------------------------- */}
					{/* PANEL DERECHO: BENTOGRID TRASLÚCIDO PREMIUM (Lg: 7 cols) */}
					{/* ---------------------------------------------------- */}
					<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{/* Tarjeta Principal (Hero Profile - Ocupa 2 columnas) */}
						<div className="sm:col-span-2 p-6 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/30 hover:shadow-[0_0_20px_rgba(223,208,164,0.07)] transition-all duration-500 relative overflow-hidden group select-none cursor-default">
							<div className="flex items-center gap-2 text-xs font-mono mb-2 font-semibold text-gold-300/90 uppercase tracking-wider">
								<ShieldCheck className="w-4 h-4 text-gold-400" />
								<span>
									Piloto de drones certificado AESA · L'Hospitalet de Llobregat
								</span>
							</div>
							<h2 className="text-2xl md:text-3xl font-cormorant font-bold text-white tracking-wide uppercase mb-3">
								JOSE ANTONIO
							</h2>
							<p className="text-zinc-300 font-jakarta text-xs md:text-sm font-light leading-relaxed mb-3">
								Vivo en Can Serra y conozco bien la zona metropolitana de
								Barcelona. Opero con permiso oficial de la Agencia Estatal de
								Seguridad Aérea, lo que significa que cada vuelo es 100% legal y
								sin sorpresas.
							</p>
							<p className="text-zinc-300 font-jakarta text-xs md:text-sm font-light leading-relaxed mb-4">
								Si tienes un piso en venta en Hospitalet, una obra en marcha en
								Barcelona o un bar con terraza que quieres mostrar en redes,
								podemos hablar y te digo sin compromiso si tu proyecto tiene
								sentido con un dron.
							</p>
							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-mono">
								<span>AESA / EASA CERTIFIED PILOT OPERATOR</span>
							</div>
						</div>

						{/* Tarjeta 1: Operador UAS */}
						<div className="p-5 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] transition-all duration-500 group select-none cursor-default">
							<div className="flex items-center gap-2 text-[11px] font-mono mb-2 text-[#dfd0a4]">
								<ShieldCheck className="w-3.5 h-3.5 text-[#dfd0a4]" />
								<span>REGISTRO AESA</span>
							</div>
							<div className="text-xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors font-mono">
								OP-UAS-ES
							</div>
							<p className="text-zinc-400 text-xs leading-tight">
								Operador de drones registrado oficialmente por la Agencia
								Estatal de Seguridad Aérea.
							</p>
						</div>

						{/* Tarjeta 2: Piloto Certificado */}
						<div className="p-5 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] transition-all duration-500 group select-none cursor-default">
							<div className="flex items-center gap-2 text-[11px] font-mono mb-2 text-[#dfd0a4]">
								<Award className="w-3.5 h-3.5 text-[#dfd0a4]" />
								<span>PILOTO ACREDITADO</span>
							</div>
							<div className="text-xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors font-mono">
								PIL-AESA
							</div>
							<p className="text-zinc-400 text-xs leading-tight">
								Acreditación de piloto profesional de sistemas de aeronaves no
								tripuladas.
							</p>
						</div>

						{/* Tarjeta 3: Categoría A1/A3 & A2 */}
						<div className="p-5 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] transition-all duration-500 group select-none cursor-default">
							<div className="flex items-center gap-2 text-[11px] font-mono mb-2 text-[#dfd0a4]">
								<Plane className="w-3.5 h-3.5 text-[#dfd0a4]" />
								<span>CATEGORÍAS A1/A3 & A2</span>
							</div>
							<div className="text-xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors font-mono">
								EASA CAT-A1/A2/A3
							</div>
							<p className="text-zinc-400 text-xs leading-tight">
								Habilitación europea para vuelos urbanos y cercanos a entornos
								de personas.
							</p>
						</div>

						{/* Tarjeta 4: STS-01 Escenarios Estándar */}
						<div className="p-5 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] transition-all duration-500 group select-none cursor-default">
							<div className="flex items-center gap-2 text-[11px] font-mono mb-2 text-[#dfd0a4]">
								<Layers className="w-3.5 h-3.5 text-[#dfd0a4]" />
								<span>ESCENARIOS ESTÁNDAR</span>
							</div>
							<div className="text-xl font-bold text-white mb-1 tabular-nums group-hover:text-[#f0e6c8] transition-colors font-mono">
								EASA-STS-01
							</div>
							<p className="text-zinc-400 text-xs leading-tight">
								Capacidad operativa autorizada para vuelos en entornos de riesgo
								controlado.
							</p>
						</div>

						{/* Tarjeta 5: Estado de Operaciones */}
						<div className="sm:col-span-2 p-4 rounded-2xl bg-[#0a0c10]/70 border border-white/10 backdrop-blur-xl hover:border-[#dfd0a4]/25 hover:shadow-[0_0_20px_rgba(223,208,164,0.06)] transition-all duration-500 flex items-center justify-between gap-4 select-none cursor-default">
							<div className="flex items-center gap-3">
								<div className="p-2.5 rounded-xl bg-[#dfd0a4]/10 border border-[#dfd0a4]/20 text-[#dfd0a4]">
									<Radar className="w-5 h-5 animate-spin-slow" />
								</div>
								<div>
									<div className="text-xs font-mono bg-gradient-to-r from-[#dfd0a4] via-[#f0e6c8] to-[#c8b88a] bg-clip-text text-transparent font-medium uppercase">
										ESTADO AERONÁUTICO ACTIVO ● PERMISO EN REGLA
									</div>
									<div className="text-xs text-zinc-300 mt-0.5">
										Plena conformidad con normativas de seguridad europea y
										espacio aéreo controlado.
									</div>
								</div>
							</div>
							<div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dfd0a4]/10 border border-[#dfd0a4]/30 text-[#dfd0a4] text-[10px] font-mono">
								<span className="w-2 h-2 rounded-full bg-[#dfd0a4] animate-pulse" />
								<span>VERIFICADO</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
