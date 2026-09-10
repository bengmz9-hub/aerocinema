"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { type KeyboardEvent, useCallback, useState } from "react";

import { FAQS } from "@/data/faqs";

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
			className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-4 md:py-20 lg:px-8 select-none z-10"
			aria-labelledby="faq-heading"
		>
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-6 md:gap-10">
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

				{/* ── Acordeón Estilo Apple Bento ── */}
				<ul className="w-full space-y-2.5 md:space-y-3">
					{FAQS.map((faq) => {
						const isOpen = openId === faq.id;
						const panelId = `faq-panel-${faq.id}`;
						const buttonId = `faq-button-${faq.id}`;

						return (
							<li
								key={faq.id}
								className={`group relative rounded-[14px] md:rounded-2xl bg-[#12141a] border shadow-[0_8px_20px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-500 ${
									isOpen
										? "border-gold-500/40 bg-[#151821] shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(223,208,164,0.08)]"
										: "border-white/[0.1] hover:border-gold-500/30 hover:bg-[#151821]/70"
								}`}
							>
								{/* Luz cenital difusa estilo Apple */}
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-60" />

								{/* ── Pregunta (botón toggle) ── */}
								<button
									id={buttonId}
									type="button"
									onClick={() => toggle(faq.id)}
									onKeyDown={(e) => handleKeyDown(e, faq.id)}
									aria-expanded={isOpen}
									aria-controls={panelId}
									className="relative z-10 w-full flex items-center justify-between gap-3 px-4 py-3.5 md:px-5 md:py-4.5 text-left cursor-pointer select-none"
								>
									<span className="font-jakarta text-[15px] md:text-lg font-semibold leading-snug text-gold-300 group-hover:text-gold-200 transition-colors pr-2">
										{faq.question}
									</span>
									<div className="p-1 md:p-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 shrink-0">
										<ChevronDown
											className={`w-4 h-4 md:w-4.5 md:h-4.5 text-gold-400 transition-transform duration-300 ease-out ${
												isOpen ? "rotate-180 text-gold-300" : "rotate-0"
											}`}
											aria-hidden="true"
										/>
									</div>
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
										<div className="relative z-10 px-4 pb-4 pt-0 md:px-5 md:pb-5">
											{/* Línea divisoria dorada sutil */}
											<div className="w-full h-px bg-gradient-to-r from-gold-500/30 via-gold-500/10 to-transparent mb-2.5 md:mb-3" />
											<p className="font-jakarta text-[12px] md:text-sm font-semibold leading-relaxed text-zinc-200">
												{faq.answer}
											</p>
										</div>
									</div>
								</section>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
