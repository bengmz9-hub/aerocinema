"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
	CheckCircle2,
	ChevronDown,
	Compass,
	DollarSign,
	Mail,
	X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactModal() {
	const [isOpen, setIsOpen] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [isPending, setIsPending] = useState(false);
	const dialogRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isOpen) return;
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") setIsOpen(false);
		}
		document.addEventListener("keydown", handleKeyDown);
		dialogRef.current?.focus();
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			triggerRef.current?.focus();
		};
	}, [isOpen]);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsPending(true);
		const formData = new FormData(e.currentTarget);
		const payload = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			type: formData.get("type") as string,
			details: formData.get("details") as string,
		};
		const result = await submitContactForm(payload);
		setIsPending(false);
		if (result.success) {
			setSubmitted(true);
			setTimeout(() => {
				setIsOpen(false);
				setSubmitted(false);
			}, 2500);
		} else {
			alert("Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.");
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
			<motion.button
				type="button"
				ref={triggerRef}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
				onClick={() => setIsOpen(true)}
				className="mt-4 cursor-pointer border border-white/20 px-8 py-4 font-sans text-sm font-medium tracking-wider text-black bg-white rounded-sm transition-all duration-300 hover:bg-neutral-200 shadow-xl shadow-white/5 specular-card"
			>
				Iniciar proyecto
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						role="dialog"
						aria-modal="true"
						aria-labelledby="contact-modal-title"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-2xl"
						onClick={(e) => {
							if (e.target === e.currentTarget) setIsOpen(false);
						}}
					>
						<motion.div
							ref={dialogRef}
							tabIndex={-1}
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
							className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c10]/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.9)] outline-none specular-card sm:p-10 lg:p-16 backdrop-blur-3xl"
						>
							{/* Brackets HUD con resplandor ámbar */}
							<span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-amber-500/40" />
							<span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-amber-500/40" />
							<span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-amber-500/40" />
							<span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-amber-500/40" />

							<button
								type="button"
								onClick={() => setIsOpen(false)}
								aria-label="Cerrar formulario de contacto"
								className="absolute right-6 top-6 cursor-pointer border border-white/10 p-2 text-white/60 rounded-full transition-colors hover:border-amber-500/40 hover:text-white hover:bg-white/5"
							>
								<X size={18} />
							</button>

							{submitted ? (
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="flex flex-col items-center justify-center space-y-4 py-16 text-center"
								>
									<div className="relative flex items-center justify-center">
										<span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
										<CheckCircle2
											size={56}
											className="relative text-emerald-400"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="font-cinzel text-2xl uppercase tracking-widest text-white">
										Plan de vuelo solicitado
									</h3>
									<p className="max-w-sm font-sans text-sm font-light text-white/60">
										Coordinación operativa activada. Te responderemos en menos
										de 24h.
									</p>
								</motion.div>
							) : (
								<div className="flex flex-col items-start gap-12 text-left lg:flex-row lg:gap-16">
									{/* Columna izquierda: copy editorial */}
									<div className="w-full flex-1 space-y-6">
										<span className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.3em] text-amber-200/80 font-semibold">
											<span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
											OPERADOR REGISTRADO AESA
										</span>
										<h3
											id="contact-modal-title"
											className="font-cinzel text-3xl font-bold leading-tight tracking-tight text-golden-hour sm:text-4xl lg:text-5xl uppercase"
										>
											Reserva tu
											<br />
											plan de vuelo
										</h3>
										<div className="space-y-4 pt-4 font-sans text-sm font-light text-white/60">
											<div className="flex gap-4">
												<div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] text-cyan-400 rounded-lg">
													<Compass size={18} />
												</div>
												<div>
													<p className="mb-1 font-sans text-xs font-medium uppercase tracking-wider text-white">
														Coordinación de espacio aéreo
													</p>
													<p className="text-xs leading-relaxed text-zinc-400">
														Analizamos la zona de vuelo, gestionamos permisos
														CTR y coordinamos con helipuertos o aeropuertos
														oficiales.
													</p>
												</div>
											</div>
											<div className="flex gap-4">
												<div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] text-amber-400 rounded-lg">
													<DollarSign size={18} />
												</div>
												<div>
													<p className="mb-1 font-sans text-xs font-medium uppercase tracking-wider text-white">
														Presupuestos transparentes
													</p>
													<p className="text-xs leading-relaxed text-zinc-400">
														Tarifas claras por jornada de filmación, incluyendo
														seguros de responsabilidad civil aeronáuticos
														obligatorios.
													</p>
												</div>
											</div>
										</div>
										<div className="mt-6 flex items-center gap-4 border-t border-white/[0.08] pt-6">
											<div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.03] text-amber-200/80 rounded-lg">
												<Mail size={16} />
											</div>
											<div>
												<p className="font-sans text-[10px] uppercase tracking-wider text-zinc-400">
													Correo directo
												</p>
												<p className="font-mono text-xs text-white">
													contacto@jfdronevision.com
												</p>
											</div>
										</div>
									</div>

									{/* Columna derecha: formulario */}
									<div className="w-full flex-1">
										<form onSubmit={handleSubmit} className="space-y-5">
											<div>
												<label
													htmlFor="name"
													className="mb-2 block font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-400"
												>
													Nombre completo *
												</label>
												<input
													id="name"
													name="name"
													required
													type="text"
													disabled={isPending}
													className="h-10 w-full rounded-md border border-white/10 bg-white/[0.03] px-4 font-sans text-xs text-white placeholder:text-zinc-600 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300"
												/>
											</div>
											<div>
												<label
													htmlFor="email"
													className="mb-2 block font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-400"
												>
													Email de contacto *
												</label>
												<input
													id="email"
													name="email"
													required
													type="email"
													disabled={isPending}
													className="h-10 w-full rounded-md border border-white/10 bg-white/[0.03] px-4 font-sans text-xs text-white placeholder:text-zinc-600 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300"
												/>
											</div>
											<div>
												<label
													htmlFor="type"
													className="mb-2 block font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-400"
												>
													Tipo de operación
												</label>
												<div className="relative">
													<select
														id="type"
														name="type"
														disabled={isPending}
														className="h-10 w-full cursor-pointer rounded-md appearance-none border border-white/10 bg-[#0f1115] px-4 pr-10 font-sans text-xs text-white focus:border-cyan-400/60 focus:outline-none transition-all duration-300"
													>
														<option value="cinematography">
															Cinematografía / Publicidad
														</option>
														<option value="real-estate">
															Inmobiliaria premium
														</option>
														<option value="events">
															Eventos / Corporativo
														</option>
														<option value="inspection">
															Inspección / Fotogrametría
														</option>
													</select>
													<ChevronDown
														size={14}
														className="pointer-events-none absolute right-3 top-3 text-white/40"
													/>
												</div>
											</div>
											<div>
												<label
													htmlFor="details"
													className="mb-2 block font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-400"
												>
													Detalles del proyecto
												</label>
												<textarea
													id="details"
													name="details"
													rows={3}
													disabled={isPending}
													placeholder="Descríbenos brevemente la localización y el objetivo de la filmación..."
													className="w-full resize-none rounded-md border border-white/10 bg-white/[0.03] p-4 font-sans text-xs text-white placeholder:text-zinc-600 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300"
												/>
											</div>
											<motion.button
												type="submit"
												whileHover={{ scale: 1.01 }}
												whileTap={{ scale: 0.98 }}
												disabled={isPending}
												className="h-11 w-full cursor-pointer rounded-md border border-amber-500/40 bg-amber-500/10 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-amber-200 transition-all hover:bg-amber-500/20 hover:border-amber-400/60 disabled:opacity-50 specular-card shadow-lg shadow-amber-500/5"
											>
												{isPending ? "Procesando plan..." : "Enviar solicitud"}
											</motion.button>
										</form>
									</div>
								</div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
