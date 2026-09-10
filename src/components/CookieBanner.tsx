"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const accepted = localStorage.getItem("cookies-consent");
		if (!accepted) {
			// Pequeño retardo para que la animación ocurra tras el render
			const timer = setTimeout(() => setVisible(true), 500);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookies-consent", "accepted");
		setVisible(false);
	};

	const handleReject = () => {
		localStorage.setItem("cookies-consent", "rejected");
		setVisible(false);
	};

	return (
		<AnimatePresence initial={false}>
			{visible && (
				<motion.div
					initial={{ y: 40, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 40, opacity: 0 }}
					transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
					style={{ willChange: "transform, opacity" }}
					className="fixed bottom-0 inset-x-0 z-50 p-3 md:p-4 pointer-events-none"
					role="region"
					aria-label="Aviso de cookies"
				>
					<div className="mx-auto max-w-3xl pointer-events-auto rounded-2xl border border-white/10 bg-[#0c0d10]/95 backdrop-blur-2xl p-4 md:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5 specular-card">
						{/* Icono + texto */}
						<div className="flex items-start gap-3 flex-1 min-w-0">
							<span className="shrink-0 text-base mt-0.5" aria-hidden="true">
								🍪
							</span>
							<p className="font-jakarta text-xs sm:text-[13px] text-zinc-300 font-light leading-relaxed">
								Utilizamos cookies técnicas esenciales para garantizar la
								navegación y el rendimiento. Puedes aceptar o rechazar su uso
								conforme a nuestra{" "}
								<Link
									href="/aviso-legal"
									className="text-gold-300 underline underline-offset-2 hover:text-white"
								>
									política de cookies
								</Link>
								.
							</p>
						</div>

						{/* Acciones Simétricas AEPD */}
						<div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
							<button
								type="button"
								onClick={handleReject}
								className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-jakarta text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95 min-h-[40px]"
							>
								Rechazar
							</button>
							<button
								type="button"
								onClick={handleAccept}
								className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-zinc-950 font-jakarta text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95 shadow-md shadow-gold-500/10 min-h-[40px]"
							>
								Aceptar
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
