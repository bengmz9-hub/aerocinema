"use client";

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
			<button
				type="button"
				ref={triggerRef}
				onClick={() => setIsOpen(true)}
				className="mt-4 cursor-pointer border border-white px-8 py-4 font-sans text-sm font-medium tracking-wider text-black bg-white transition-colors duration-300 hover:bg-white/90"
			>
				Iniciar proyecto
			</button>

			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="contact-modal-title"
				aria-hidden={!isOpen}
				className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-all duration-500 ease-out ${
					isOpen
						? "pointer-events-auto opacity-100"
						: "pointer-events-none opacity-0"
				}`}
				onClick={(e) => {
					if (e.target === e.currentTarget) setIsOpen(false);
				}}
			>
				<div
					ref={dialogRef}
					tabIndex={-1}
					className="relative w-full max-w-5xl overflow-hidden border border-white/[0.08] bg-[#070708] p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] outline-none sm:p-10 lg:p-16"
				>
					{/* Brackets HUD */}
					<span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-white/20" />
					<span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-white/20" />
					<span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/20" />
					<span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-white/20" />

					<button
						type="button"
						onClick={() => setIsOpen(false)}
						aria-label="Cerrar formulario de contacto"
						className="absolute right-6 top-6 cursor-pointer border border-white/10 p-2 text-white/60 transition-colors hover:border-white/30 hover:text-white"
					>
						<X size={18} />
					</button>

					{submitted ? (
						<div className="flex flex-col items-center justify-center space-y-4 py-16 text-center">
							<CheckCircle2
								size={48}
								className="text-white/80"
								strokeWidth={1.25}
							/>
							<h3 className="font-cinzel text-2xl uppercase tracking-widest text-white">
								Petición recibida
							</h3>
							<p className="max-w-sm font-sans text-sm font-light text-white/50">
								Plan de vuelo inicial en preparación. Nos pondremos en contacto
								contigo de inmediato.
							</p>
						</div>
					) : (
						<div className="flex flex-col items-start gap-12 text-left lg:flex-row lg:gap-16">
							{/* Columna izquierda: copy editorial */}
							<div className="w-full flex-1 space-y-6">
								<span className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.3em] text-white/40">
									<span className="h-1.5 w-1.5 bg-white/60" />
									Operador autorizado AESA
								</span>
								<h3
									id="contact-modal-title"
									className="font-cinzel text-3xl font-medium leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
								>
									Reserva tu
									<br />
									plan de vuelo
								</h3>
								<div className="space-y-4 pt-4 font-sans text-sm font-light text-white/50">
									<div className="flex gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.02] text-white/60">
											<Compass size={18} />
										</div>
										<div>
											<p className="mb-1 font-sans text-xs font-medium uppercase tracking-wider text-white">
												Coordinación de espacio aéreo
											</p>
											<p className="text-xs leading-relaxed">
												Analizamos la zona de vuelo, gestionamos permisos CTR y
												coordinamos con helipuertos o aeropuertos oficiales.
											</p>
										</div>
									</div>
									<div className="flex gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.02] text-white/60">
											<DollarSign size={18} />
										</div>
										<div>
											<p className="mb-1 font-sans text-xs font-medium uppercase tracking-wider text-white">
												Presupuestos transparentes
											</p>
											<p className="text-xs leading-relaxed">
												Tarifas claras por jornada de filmación, incluyendo
												seguros de responsabilidad civil aeronáuticos
												obligatorios.
											</p>
										</div>
									</div>
								</div>
								<div className="mt-6 flex items-center gap-4 border-t border-white/[0.08] pt-6">
									<div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] text-white/40">
										<Mail size={16} />
									</div>
									<div>
										<p className="font-sans text-[10px] uppercase tracking-wider text-white/40">
											Correo directo
										</p>
										<p className="font-sans text-xs text-white">
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
											className="mb-2 block font-sans text-[9px] uppercase tracking-[0.2em] text-white/40"
										>
											Nombre completo *
										</label>
										<input
											id="name"
											name="name"
											required
											type="text"
											disabled={isPending}
											className="h-10 w-full border border-white/[0.08] bg-white/[0.02] px-4 font-sans text-xs text-white focus:border-white/30 focus:outline-none"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="mb-2 block font-sans text-[9px] uppercase tracking-[0.2em] text-white/40"
										>
											Email de contacto *
										</label>
										<input
											id="email"
											name="email"
											required
											type="email"
											disabled={isPending}
											className="h-10 w-full border border-white/[0.08] bg-white/[0.02] px-4 font-sans text-xs text-white focus:border-white/30 focus:outline-none"
										/>
									</div>
									<div>
										<label
											htmlFor="type"
											className="mb-2 block font-sans text-[9px] uppercase tracking-[0.2em] text-white/40"
										>
											Tipo de operación
										</label>
										<div className="relative">
											<select
												id="type"
												name="type"
												disabled={isPending}
												className="h-10 w-full cursor-pointer appearance-none border border-white/[0.08] bg-[#070708] px-4 pr-10 font-sans text-xs text-white focus:border-white/30 focus:outline-none"
											>
												<option value="cinematography">
													Cinematografía / Publicidad
												</option>
												<option value="real-estate">
													Inmobiliaria premium
												</option>
												<option value="events">Eventos / Corporativo</option>
												<option value="inspection">
													Inspección / Fotogrametría
												</option>
											</select>
											<ChevronDown
												size={14}
												className="pointer-events-none absolute right-3 top-3 text-white/30"
											/>
										</div>
									</div>
									<div>
										<label
											htmlFor="details"
											className="mb-2 block font-sans text-[9px] uppercase tracking-[0.2em] text-white/40"
										>
											Detalles del proyecto
										</label>
										<textarea
											id="details"
											name="details"
											rows={3}
											disabled={isPending}
											placeholder="Descríbenos brevemente la localización y el objetivo de la filmación..."
											className="w-full resize-none border border-white/[0.08] bg-white/[0.02] p-4 font-sans text-xs text-white placeholder:text-white/20 focus:border-white/30 focus:outline-none"
										/>
									</div>
									<button
										type="submit"
										disabled={isPending}
										className="h-10 w-full cursor-pointer border border-white bg-white font-sans text-xs font-medium tracking-wider text-black transition-colors hover:bg-white/90 disabled:opacity-50"
									>
										{isPending ? "Enviando..." : "Enviar solicitud"}
									</button>
								</form>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
