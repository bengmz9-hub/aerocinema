"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown, FileText, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactModal({
	defaultType = "real-estate",
}: {
	defaultType?: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [isPending, setIsPending] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [formType, setFormType] = useState(defaultType);
	const dialogRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isOpen) return;
		setFormType(defaultType);
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") setIsOpen(false);
		}
		document.addEventListener("keydown", handleKeyDown);
		dialogRef.current?.focus();
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			triggerRef.current?.focus();
		};
	}, [isOpen, defaultType]);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsPending(true);
		setErrorMessage(null);
		const formData = new FormData(e.currentTarget);
		const payload = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			type: formData.get("type") as string,
			details: formData.get("details") as string,
		};

		try {
			const result = await submitContactForm(payload);
			if (result.success) {
				setSubmitted(true);
				setTimeout(() => {
					setIsOpen(false);
					setSubmitted(false);
				}, 2500);
			} else {
				setErrorMessage(
					result.error ||
						"Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.",
				);
			}
		} catch (err) {
			console.error("Error al enviar el formulario:", err);
			setErrorMessage(
				"Error de conexión o problema en el servidor al enviar tu solicitud. Inténtalo de nuevo.",
			);
		} finally {
			setIsPending(false);
		}
	}

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<>
			{/* Botón trigger del modal — Bento Rectangular Estilo Apple Pro Centrado */}
			<button
				type="button"
				ref={triggerRef}
				onClick={() => setIsOpen(true)}
				className="group relative flex flex-col justify-between p-3.5 sm:p-5 rounded-[16px] md:rounded-2xl border border-white/[0.12] bg-[#12141a] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-gold-500/40 hover:bg-[#151821] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(223,208,164,0.1)] transition-all duration-300 cursor-pointer overflow-hidden w-full"
			>
				{/* Cabecera con Icono Centrado */}
				<div className="relative z-10 flex flex-col items-center justify-center mb-2.5 w-full">
					<div className="flex items-center justify-center p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400">
						<FileText className="w-5 h-5" />
					</div>
				</div>

				{/* Texto y Badge Centrados */}
				<div className="relative z-10 text-center flex flex-col items-center w-full">
					<span className="block font-cormorant text-lg sm:text-xl font-bold uppercase tracking-wide text-white group-hover:text-gold-200 transition-colors">
						Enviar Formulario
					</span>
					<span className="block font-mono text-[10px] md:text-xs text-zinc-400 tracking-wider mt-1">
						Si prefieres email
					</span>
				</div>
			</button>

			{/* Modal dialog envuelto en AnimatePresence con escala orgánica y salida suave */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						role="dialog"
						aria-modal="true"
						aria-labelledby="contact-modal-title"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-2xl overflow-y-auto"
						onClick={(e) => {
							if (e.target === e.currentTarget) setIsOpen(false);
						}}
						onKeyDown={(e) => {
							if (
								e.key === "Escape" ||
								(e.target === e.currentTarget && e.key === "Enter")
							)
								setIsOpen(false);
						}}
					>
						<motion.div
							ref={dialogRef}
							tabIndex={-1}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
							className="relative w-full max-w-lg md:max-w-2xl my-auto max-h-[92vh] overflow-y-auto rounded-[24px] md:rounded-[32px] border border-white/[0.12] bg-[#12141a]/85 p-5 sm:p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.1)] outline-none backdrop-blur-3xl scrollbar-thin text-center select-none"
						>
							{/* Luz cenital difusa estilo Apple */}
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-80" />

							{/* Botón de cierre iOS Pill */}
							<button
								type="button"
								onClick={() => setIsOpen(false)}
								aria-label="Cerrar formulario de contacto"
								className="absolute top-4 right-4 md:top-6 md:right-6 z-30 cursor-pointer border border-white/10 bg-white/5 p-2 text-zinc-400 hover:text-white rounded-full transition-all hover:bg-white/10 active:scale-95"
							>
								<X size={18} />
							</button>

							{submitted ? (
								<div className="flex flex-col items-center justify-center space-y-4 py-12 text-center animate-blur-in">
									<div className="relative flex items-center justify-center">
										<span className="absolute inset-0 rounded-full bg-[#dfd0a4]/20 opacity-50" />
										<CheckCircle2
											size={52}
											className="relative text-[#dfd0a4]"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="font-cormorant text-2xl uppercase tracking-wider text-white font-bold">
										Solicitud enviada
									</h3>
									<p className="max-w-xs font-jakarta text-xs font-semibold text-zinc-300">
										Plan recibido. Te responderemos por email en menos de 24h.
									</p>
								</div>
							) : (
								<div className="flex flex-col items-center text-center space-y-5 md:space-y-6">
									{/* Cabecera Centrada */}
									<div className="space-y-2 pt-2">
										<div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-mono text-[8.5px] md:text-[9.5px] tracking-[0.25em] uppercase font-bold">
											<span className="h-1.5 w-1.5 rounded-full bg-gold-400 opacity-80" />
											OPERADOR AESA · CONTACTO DIRECTO
										</div>
										<h3
											id="contact-modal-title"
											className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white uppercase"
										>
											Cuéntame tu{" "}
											<span className="text-gold-400 italic">proyecto</span>
										</h3>
										<p className="font-jakarta text-[11px] sm:text-xs md:text-sm text-zinc-300 font-semibold max-w-md mx-auto leading-relaxed">
											Dinos qué necesitas y te enviamos presupuesto cerrado sin
											compromiso.
										</p>
									</div>

									{/* Formulario Estilo Apple Frosted */}
									<form
										onSubmit={handleSubmit}
										className="w-full space-y-3.5 md:space-y-4 text-left"
									>
										{/* Fila 1 en desktop: Nombre y Email lado a lado */}
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 md:gap-4">
											<div>
												<label
													htmlFor="name"
													className="mb-1.5 block font-mono text-[10px] md:text-xs uppercase tracking-wider text-gold-300/90 font-bold"
												>
													Nombre completo *
												</label>
												<input
													id="name"
													name="name"
													required
													type="text"
													disabled={isPending}
													placeholder="Tu nombre o empresa"
													className="h-10 md:h-11 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 font-jakarta text-xs md:text-sm text-white placeholder:text-zinc-500 focus:border-gold-400/60 focus:ring-1 focus:ring-gold-400/30 focus:outline-none transition-all duration-300"
												/>
											</div>

											<div>
												<label
													htmlFor="email"
													className="mb-1.5 block font-mono text-[10px] md:text-xs uppercase tracking-wider text-gold-300/90 font-bold"
												>
													Email de contacto *
												</label>
												<input
													id="email"
													name="email"
													required
													type="email"
													disabled={isPending}
													placeholder="tucorreo@ejemplo.com"
													className="h-10 md:h-11 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 font-jakarta text-xs md:text-sm text-white placeholder:text-zinc-500 focus:border-gold-400/60 focus:ring-1 focus:ring-gold-400/30 focus:outline-none transition-all duration-300"
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="type"
												className="mb-1.5 block font-mono text-[10px] md:text-xs uppercase tracking-wider text-gold-300/90 font-bold"
											>
												Tipo de grabación
											</label>
											<div className="relative">
												<select
													id="type"
													name="type"
													value={formType}
													onChange={(e) => setFormType(e.target.value)}
													disabled={isPending}
													className="h-10 md:h-11 w-full cursor-pointer rounded-xl appearance-none border border-white/10 bg-[#0f1115] px-3.5 pr-10 font-jakarta text-xs md:text-sm text-white focus:border-gold-400/60 focus:outline-none transition-all duration-300"
												>
													<option value="real-estate">
														Inmobiliaria / Piso / Finca
													</option>
													<option value="inspection">
														Inspección técnica / Obra / Fachada
													</option>
													<option value="business">
														Hostelería / Negocio local
													</option>
													<option value="other">Otro tipo de rodaje</option>
												</select>
												<ChevronDown
													size={14}
													className="pointer-events-none absolute right-3.5 top-3.5 md:top-4 text-zinc-400"
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="details"
												className="mb-1.5 block font-mono text-[10px] md:text-xs uppercase tracking-wider text-gold-300/90 font-bold"
											>
												Detalles del proyecto
											</label>
											<textarea
												id="details"
												name="details"
												rows={3}
												disabled={isPending}
												placeholder="Ubicación aproximada, fechas o características del vuelo..."
												className="w-full resize-none rounded-xl border border-white/10 bg-black/40 p-3 md:p-3.5 font-jakarta text-xs md:text-sm text-white placeholder:text-zinc-500 focus:border-gold-400/60 focus:ring-1 focus:ring-gold-400/30 focus:outline-none transition-all duration-300"
											/>
										</div>

										{/* Checkbox RGPD Consentimiento Explícito */}
										<div className="flex items-start gap-2.5 pt-1">
											<input
												id="privacy-consent"
												name="privacyConsent"
												type="checkbox"
												required
												disabled={isPending}
												className="mt-0.5 h-4 w-4 rounded border-white/20 bg-black/40 text-gold-500 focus:ring-gold-400/30 focus:ring-offset-0 cursor-pointer"
											/>
											<label
												htmlFor="privacy-consent"
												className="font-jakarta text-[10.5px] text-zinc-400 leading-tight select-none cursor-pointer"
											>
												He leído y acepto la{" "}
												<a
													href="/aviso-legal"
													target="_blank"
													rel="noopener noreferrer"
													className="text-gold-300 underline underline-offset-2 hover:text-white"
												>
													política de privacidad
												</a>{" "}
												para recibir respuesta a mi consulta.
											</label>
										</div>

										{/* Mensaje de Error Inline Estilo Apple (Sin alert()) */}
										{errorMessage && (
											<div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-xs font-jakarta text-red-300">
												{errorMessage}
											</div>
										)}

										<button
											type="submit"
											disabled={isPending}
											className="h-11 md:h-12 w-full cursor-pointer rounded-xl border border-gold-500/30 bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-gold-500/20 font-jakarta text-xs md:text-sm font-bold uppercase tracking-wider text-gold-200 transition-all hover:bg-gold-500/25 hover:border-gold-400/50 active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-gold-500/5 mt-1"
										>
											{isPending ? "Enviando solicitud..." : "Enviar consulta"}
										</button>
									</form>
								</div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
