"use client";

import { useState } from "react";

import ContactModal from "./ContactModal";

const PROJECT_TYPES = [
	{
		label: "Inmobiliaria",
		message:
			"Hola Jose, me interesa presupuesto para filmación aérea de una propiedad/inmueble.",
	},
	{
		label: "Eventos",
		message:
			"Hola Jose, me interesa presupuesto para cobertura aérea de un evento.",
	},
	{
		label: "Inspección & Obras",
		message:
			"Hola Jose, me interesa presupuesto para inspección técnica / seguimiento de obra con dron.",
	},
	{
		label: "Cine & Publicidad",
		message:
			"Hola Jose, tengo un rodaje audiovisual/publicidad y necesito planos aéreos con dron.",
	},
] as const;

const DEFAULT_MESSAGE =
	"Hola Jose, tengo un proyecto en mente y me gustaría consultarte.";

export default function ContactSection() {
	const [selectedType, setSelectedType] = useState<string>("Inmobiliaria");
	const selectedMessage =
		PROJECT_TYPES.find((t) => t.label === selectedType)?.message ??
		DEFAULT_MESSAGE;
	const whatsappUrl = `https://wa.me/34600000000?text=${encodeURIComponent(selectedMessage)}`;

	return (
		<section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-12 md:py-20 lg:px-8 text-center select-none">
			<div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 md:gap-6">
				{/* Título H2 */}
				<h2 className="font-cormorant text-3xl sm:text-5xl font-bold leading-none tracking-tight text-white uppercase">
					¿Tienes algo <span className="text-gold-400 italic">en mente</span> ?
				</h2>

				{/* Párrafo explicativo */}
				<p className="max-w-xl font-jakarta text-xs sm:text-sm font-light leading-relaxed text-zinc-300">
					Cuéntame qué tienes: un piso en venta, una fachada que inspeccionar, o
					una terraza que quieres mostrar. Te respondo el mismo día y te digo lo
					que puede hacer el dron por ti.
				</p>

				{/* Selector rápido de tipo de proyecto — Chips estilo Apple */}
				<fieldset className="mt-6 flex flex-wrap items-center justify-center gap-2 w-full max-w-xl border-0 p-0 m-0">
					<legend className="sr-only">Tipo de proyecto</legend>
					{PROJECT_TYPES.map((type) => {
						const isActive = selectedType === type.label;
						return (
							<button
								key={type.label}
								type="button"
								aria-pressed={isActive}
								onClick={() => setSelectedType(type.label)}
								className={`rounded-full border px-3.5 py-1.5 font-jakarta text-[10.5px] sm:text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer backdrop-blur-xl select-none ${
									isActive
										? "border-gold-400/60 bg-gold-500/10 text-gold-200 shadow-[0_0_18px_rgba(223,208,164,0.15),inset_0_1px_1px_rgba(255,255,255,0.08)]"
										: "border-white/[0.12] bg-[#12141a]/60 text-zinc-400 hover:border-gold-500/30 hover:text-zinc-200"
								}`}
							>
								{type.label}
							</button>
						);
					})}
				</fieldset>

				{/* Grid de 2 Bento Cards Rectangulares (WhatsApp izquierda, Formulario derecha) */}
				<div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl">
					{/* CTA Principal WhatsApp — Bento Rectangular Estilo Apple Pro */}
					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative flex flex-col justify-between p-3.5 sm:p-5 rounded-[16px] md:rounded-2xl border border-white/[0.12] bg-[#12141a]/60 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-gold-500/40 hover:bg-[#151821]/80 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(223,208,164,0.1)] transition-all duration-300 cursor-pointer overflow-hidden text-left"
					>
						{/* Luz cenital difusa estilo Apple */}
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-70" />

						{/* Definición del Gradiente SVG Verde a Oro */}
						<svg width="0" height="0" className="absolute" aria-hidden="true">
							<defs>
								<linearGradient
									id="whatsapp-green-gold-gradient"
									x1="0%"
									y1="0%"
									x2="100%"
									y2="100%"
								>
									<stop offset="0%" stopColor="#34d399" />
									<stop offset="100%" stopColor="#dfd0a4" />
								</linearGradient>
							</defs>
						</svg>

						{/* Cabecera con Icono Centrado + LED */}
						<div className="relative z-10 flex flex-col items-center justify-center mb-2.5">
							<div className="relative flex items-center justify-center p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/20">
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="url(#whatsapp-green-gold-gradient)"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
								</svg>
								<span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#dfd0a4] animate-pulse shadow-[0_0_6px_rgba(223,208,164,0.8)]" />
							</div>
						</div>

						{/* Texto y Badge Centrados */}
						<div className="relative z-10 text-center flex flex-col items-center">
							<span className="block font-jakarta text-[11.5px] sm:text-xs font-bold uppercase tracking-wider text-white group-hover:text-gold-200 transition-colors">
								Escribir a Jose
							</span>
							<span className="block font-mono text-[8.5px] sm:text-[9px] text-zinc-400 tracking-wider mt-0.5">
								Respuesta en minutos
							</span>
						</div>
					</a>

					{/* CTA Secundario Formulario Modal — Bento Rectangular Estilo Apple Pro */}
					<ContactModal />
				</div>
			</div>
		</section>
	);
}
