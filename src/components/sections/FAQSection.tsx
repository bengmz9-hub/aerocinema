"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { type KeyboardEvent, useCallback, useState } from "react";

// --- Preguntas frecuentes reales sobre servicios FPV con dron en Barcelona ---

interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		id: "precios",
		question: "¿Cuánto cuesta una grabación con dron?",
		answer:
			"Cada proyecto es diferente — no es lo mismo grabar un piso de 60 m² que inspeccionar una fachada completa. Lo que sí te aseguro es que te doy un presupuesto cerrado en la primera consulta, sin compromiso y sin sorpresas. Escríbeme por WhatsApp, cuéntame qué necesitas y te respondo en el día con un precio ajustado a tu caso.",
	},
	{
		id: "permisos-y-seguro",
		question: "¿Hace falta algún permiso? ¿Tenéis seguro?",
		answer:
			"No, de eso me encargo yo. Soy operador registrado en AESA con seguro de responsabilidad civil y todos los permisos en regla. Tú solo tienes que abrirme la puerta; del resto — planificación de vuelo, coordinación si hace falta — me encargo yo. En más de 100 horas de vuelo, cero incidentes.",
	},
	{
		id: "formato-entrega",
		question: "¿En qué formato me entregáis el vídeo? ¿Vale para Instagram?",
		answer:
			"Grabo en 4K a 60 fps con perfil de color profesional. La entrega incluye: el metraje original sin editar + una versión ya montada y corregida en color. Además, edito el vídeo en formato vertical (9:16) listo para Instagram Reels y TikTok, y en horizontal para webs y portales como Idealista. Todo por enlace privado, sin caducidad.",
	},
	{
		id: "tiempo-entrega",
		question: "¿Cuánto tardas en entregar el material?",
		answer:
			"El material original lo tienes en 24-48 horas. La versión editada y montada, en 3-5 días laborables. ¿Tienes prisa porque la propiedad sale al mercado mañana? Tengo opción exprés: mismo día por +50 €, y te mando un avance por WhatsApp desde la misma sesión.",
	},
	{
		id: "interiores-fpv",
		question: "¿Grabáis también dentro de casas o locales?",
		answer:
			"Sí, con un dron Cinewhoop protegido (anillos en las hélices) que no golpea nada. La diferencia con un dron convencional es enorme: puedo grabar planos imposibles — entrar por puertas, subir escaleras, pasar de la terraza al salón en un solo plano continuo. Es la misma técnica que usan Zara Home o los videógrafos de lujo inmobiliario. Para espacios muy reducidos, lo valoramos en la visita previa.",
	},
	{
		id: "obras-activas",
		question: "¿Podéis grabar en obras en construcción?",
		answer:
			"Sí, es una de las aplicaciones más útiles del dron. Coordino con el jefe de obra para volar en momentos seguros, me mantengo a distancia de personal y maquinaria. El resultado es un documento visual del avance que no se consigue de otra forma.",
	},
];

export default function FAQSection() {
	const [openId, setOpenId] = useState<string | null>(null);

	const toggle = useCallback((id: string) => {
		setOpenId((prev) => (prev === id ? null : id));
	}, []);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent<HTMLButtonElement>, id: string) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				toggle(id);
			}
		},
		[toggle],
	);

	return (
		<section
			className="relative mx-auto max-w-7xl border-t border-white/[0.06] px-6 py-20 lg:px-8"
			aria-labelledby="faq-heading"
		>
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-10">
				{/* ── Encabezado ── */}
				<div className="flex flex-col items-center gap-4 text-center">
					{/* Tag */}
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-mono text-[10px] tracking-[0.25em] uppercase">
						<HelpCircle className="w-3.5 h-3.5" />
						<span>RESPUESTAS DIRECTAS · SIN LETRA PEQUEÑA</span>
					</div>

					{/* Título */}
					<h2
						id="faq-heading"
						className="font-cormorant text-3xl sm:text-5xl font-bold leading-none tracking-tight text-white uppercase"
					>
						Lo que todo cliente{" "}
						<span className="text-gold-400 italic">se pregunta</span>
					</h2>

					{/* Subtítulo */}
					<p className="max-w-xl font-jakarta text-xs sm:text-sm font-light leading-relaxed text-zinc-300">
						Permisos, seguros, entregas… Si no ves tu duda aquí, escríbeme por
						WhatsApp y te respondo en minutos.
					</p>
				</div>

				{/* ── Acordeón ── */}
				<ul className="w-full space-y-3">
					{faqs.map((faq) => {
						const isOpen = openId === faq.id;
						const panelId = `faq-panel-${faq.id}`;
						const buttonId = `faq-button-${faq.id}`;

						return (
							<li
								key={faq.id}
								className="rounded-xl border border-white/[0.06] bg-[#0f1115]/80 backdrop-blur-sm overflow-hidden transition-all duration-300"
							>
								{/* ── Pregunta (botón toggle) ── */}
								<button
									id={buttonId}
									type="button"
									onClick={() => toggle(faq.id)}
									onKeyDown={(e) => handleKeyDown(e, faq.id)}
									aria-expanded={isOpen}
									aria-controls={panelId}
									className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left cursor-pointer select-none group"
								>
									<span className="font-jakarta text-lg sm:text-xl font-medium leading-snug text-gold-300 group-hover:text-gold-200 transition-colors pr-2">
										{faq.question}
									</span>
									<ChevronDown
										className={`w-5 h-5 flex-shrink-0 text-gold-400 transition-transform duration-300 ease-out ${
											isOpen ? "rotate-180" : "rotate-0"
										}`}
										aria-hidden="true"
									/>
								</button>

								{/* ── Respuesta (panel colapsable) ── */}
								<section
									id={panelId}
									aria-labelledby={buttonId}
									className={`grid transition-all duration-300 ease-out ${
										isOpen
											? "grid-rows-[1fr] opacity-100"
											: "grid-rows-[0fr] opacity-0"
									}`}
								>
									{/* Contenedor interno con overflow hidden para colapsar correctamente */}
									<div className="overflow-hidden">
										<div className="px-5 pb-5 pt-1">
											{/* Línea divisoria dorada sutil */}
											<div className="w-full h-px bg-gradient-to-r from-gold-500/30 via-gold-500/10 to-transparent mb-4" />
											<p className="font-jakarta text-base sm:text-lg font-light leading-relaxed text-zinc-100">
												{faq.answer}
											</p>
										</div>
									</div>
								</section>
							</li>
						);
					})}
				</ul>

				{/* ── CTA inferior ── */}
				<p className="font-jakarta text-xs text-zinc-500 text-center">
					¿No encuentras tu duda?{" "}
					<a
						href="#contacto"
						className="text-gold-400 hover:text-gold-300 underline underline-offset-4 transition-colors"
					>
						Háblame directamente
					</a>
				</p>
			</div>
		</section>
	);
}
