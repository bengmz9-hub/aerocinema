import { Award, Layers, Plane, Radar, ShieldCheck } from "lucide-react";

export function AboutMe() {
	return (
		<section className="relative w-full bg-transparent py-8 md:py-12 px-4 sm:px-6 lg:px-8 font-jakarta text-white select-none cursor-default z-10 overflow-hidden">
			<div className="max-w-7xl mx-auto relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
					{/* ---------------------------------------------------- */}
					{/* PANEL IZQUIERDO: VÍDEO MARCO TRASLÚCIDO APPLE PRO (Md: 5 cols) */}
					{/* ---------------------------------------------------- */}
					<div className="md:col-span-5 relative group rounded-[22px] overflow-hidden border border-white/[0.12] bg-[#12141a]/60 p-2.5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-center transition-all duration-500 hover:border-[#dfd0a4]/35 select-none cursor-default">
						<div className="relative aspect-[4/5] md:aspect-auto h-full w-full rounded-xl overflow-hidden bg-black/90 flex items-center justify-center">
							<video
								autoPlay
								muted
								loop
								playsInline
								preload="none"
								poster="/videos/jose-reveal.webp"
								style={{ willChange: "transform" }}
								className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							>
								<source src="/videos/jose-reveal.mp4" type="video/mp4" />
								Tu navegador no soporta la reproducción de video HTML5.
							</video>

							{/* Overlay de telemetría sobrio */}
							<div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] font-mono text-[#dfd0a4]/90 backdrop-blur-md shadow-sm">
								PILOT_OP_POV ● 24FPS
							</div>
							<div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] font-mono text-zinc-300 backdrop-blur-md shadow-sm">
								VUELO SEGURO {"//"} AESA CERT
							</div>
						</div>
					</div>

					{/* ---------------------------------------------------- */}
					{/* PANEL DERECHO: BENTOGRID ESTILO APPLE PRO (Md: 7 cols) */}
					{/* ---------------------------------------------------- */}
					<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
						{/* Tarjeta Principal (Hero Profile - Ocupa 2 columnas) */}
						<div className="sm:col-span-2 p-6 rounded-[22px] bg-[#12141a]/60 border border-white/[0.12] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#dfd0a4]/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 relative overflow-hidden group select-none cursor-default">
							<div className="relative z-10">
								<div className="flex items-center gap-2 text-[11px] font-mono mb-2.5 font-semibold text-gold-300/90 uppercase tracking-wider">
									<ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
									<span>
										Piloto de drones certificado AESA · L'Hospitalet de
										Llobregat
									</span>
								</div>
								<h2 className="text-2xl md:text-3xl font-cormorant font-bold text-white tracking-wide uppercase mb-3">
									JOSE ANTONIO
								</h2>
								<p className="text-zinc-300 font-jakarta text-sm md:text-base font-light leading-relaxed mb-3">
									Vivo en Can Serra y conozco bien la zona metropolitana de
									Barcelona. Opero bajo la normativa oficial de la Agencia
									Estatal de Seguridad Aérea, garantizando que cada rodaje sea
									100% legal, seguro y con todas las autorizaciones en regla.
								</p>
								<p className="text-zinc-300 font-jakarta text-sm md:text-base font-light leading-relaxed mb-4">
									Si tienes un inmueble en venta en Hospitalet, una obra en
									Barcelona o un negocio que quieres potenciar en redes con
									calidad cinematográfica, te asesoro con total honestidad sobre
									la viabilidad de tu proyecto.
								</p>
								<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-[11px] font-mono shadow-sm">
									<span>
										VUELO URBANO AUTORIZADO · SEGURO ACTIVO · PILOTO AESA
									</span>
								</div>
							</div>
						</div>

						{/* Tarjeta 1: Seguro de Responsabilidad Activo */}
						<div className="px-3.5 py-2.5 md:p-5 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:border-[#dfd0a4]/30 hover:bg-[#151821]/70 transition-all duration-500 group select-none cursor-default relative overflow-hidden flex flex-col justify-center">
							<div className="relative z-10">
								<div className="flex items-center justify-between md:justify-start gap-1.5 mb-1 md:mb-2">
									<div className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-mono text-[#dfd0a4] font-bold tracking-wider">
										<ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#dfd0a4]" />
										<span>PROTECCIÓN LEGAL</span>
									</div>
									<span className="md:hidden text-[11px] font-bold text-white group-hover:text-[#f0e6c8] transition-colors font-mono tracking-tight">
										Seguro Activo
									</span>
								</div>
								<div className="hidden md:block text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-[#f0e6c8] transition-colors font-cormorant uppercase tracking-wide">
									Seguro de Responsabilidad Activo
								</div>
								<p className="text-zinc-200 font-semibold text-xs md:text-sm leading-tight">
									Póliza aeronáutica de responsabilidad civil con cobertura
									total ante cualquier imprevisto.
								</p>
							</div>
						</div>

						{/* Tarjeta 2: Piloto Oficial AESA */}
						<div className="px-3.5 py-2.5 md:p-5 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:border-[#dfd0a4]/30 hover:bg-[#151821]/70 transition-all duration-500 group select-none cursor-default relative overflow-hidden flex flex-col justify-center">
							<div className="relative z-10">
								<div className="flex items-center justify-between md:justify-start gap-1.5 mb-1 md:mb-2">
									<div className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-mono text-[#dfd0a4] font-bold tracking-wider">
										<Award className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#dfd0a4]" />
										<span>PILOTO TITULADO</span>
									</div>
									<span className="md:hidden text-[11px] font-bold text-white group-hover:text-[#f0e6c8] transition-colors font-mono tracking-tight">
										Operador AESA
									</span>
								</div>
								<div className="hidden md:block text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-[#f0e6c8] transition-colors font-cormorant uppercase tracking-wide">
									Operador Oficial Registrado
								</div>
								<p className="text-zinc-200 font-semibold text-xs md:text-sm leading-tight">
									Acreditación oficial AESA y europea para vuelos comerciales y
									audiovisuales.
								</p>
							</div>
						</div>

						{/* Tarjeta 3: Vuelo Urbano 100% Legal */}
						<div className="px-3.5 py-2.5 md:p-5 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:border-[#dfd0a4]/30 hover:bg-[#151821]/70 transition-all duration-500 group select-none cursor-default relative overflow-hidden flex flex-col justify-center">
							<div className="relative z-10">
								<div className="flex items-center justify-between md:justify-start gap-1.5 mb-1 md:mb-2">
									<div className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-mono text-[#dfd0a4] font-bold tracking-wider">
										<Plane className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#dfd0a4]" />
										<span>MARCO URBANO</span>
									</div>
									<span className="md:hidden text-[11px] font-bold text-white group-hover:text-[#f0e6c8] transition-colors font-mono tracking-tight">
										Urbano Legal
									</span>
								</div>
								<div className="hidden md:block text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-[#f0e6c8] transition-colors font-cormorant uppercase tracking-wide">
									Vuelo Urbano 100% Legal
								</div>
								<p className="text-zinc-200 font-semibold text-xs md:text-sm leading-tight">
									Habilitación autorizada para rodar en calles, fachadas y zonas
									pobladas sin riesgo de sanciones.
								</p>
							</div>
						</div>

						{/* Tarjeta 4: Coordinación de Permisos */}
						<div className="px-3.5 py-2.5 md:p-5 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:border-[#dfd0a4]/30 hover:bg-[#151821]/70 transition-all duration-500 group select-none cursor-default relative overflow-hidden flex flex-col justify-center">
							<div className="relative z-10">
								<div className="flex items-center justify-between md:justify-start gap-1.5 mb-1 md:mb-2">
									<div className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-mono text-[#dfd0a4] font-bold tracking-wider">
										<Layers className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#dfd0a4]" />
										<span>GESTIÓN AÉREA</span>
									</div>
									<span className="md:hidden text-[11px] font-bold text-white group-hover:text-[#f0e6c8] transition-colors font-mono tracking-tight">
										Coordinado
									</span>
								</div>
								<div className="hidden md:block text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-[#f0e6c8] transition-colors font-cormorant uppercase tracking-wide">
									Permisos &amp; ENAIRE
								</div>
								<p className="text-zinc-200 font-semibold text-xs md:text-sm leading-tight">
									Coordinación directa de espacio aéreo con autoridades y
									aeropuertos para filmaciones sin contratiempos.
								</p>
							</div>
						</div>

						{/* Tarjeta 5: Estado de Operaciones */}
						<div className="sm:col-span-2 px-3.5 py-2 md:p-4 rounded-[14px] md:rounded-2xl bg-[#12141a]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:border-[#dfd0a4]/30 transition-all duration-500 flex items-center justify-between gap-3 md:gap-4 select-none cursor-default relative overflow-hidden">
							<div className="relative z-10 flex items-center gap-2 md:gap-3">
								<Radar className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#dfd0a4] shrink-0" />
								<div>
									<div className="text-[11px] md:text-[13px] font-mono bg-gradient-to-r from-[#dfd0a4] via-[#f0e6c8] to-[#c8b88a] bg-clip-text text-transparent font-bold uppercase tracking-wider">
										ESTADO OPERATIVO ● VUELO 100% LEGAL &amp; ASEGURADO
									</div>
									<div className="text-xs md:text-sm text-zinc-200 font-semibold mt-0.5">
										Total conformidad con las normativas europea y estatal para
										máxima tranquilidad de tu cliente.
									</div>
								</div>
							</div>
							<div className="relative z-10 shrink-0 flex items-center gap-1 md:gap-1.5 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-[#dfd0a4]/10 border border-[#dfd0a4]/30 text-[#dfd0a4] text-[9px] md:text-[10px] font-mono">
								<span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#dfd0a4] opacity-80" />
								<span>VERIFICADO</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
