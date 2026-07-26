"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const accepted = localStorage.getItem("cookies-accepted");
		if (!accepted) {
			// Pequeño retardo para que la animación ocurra tras el render
			const timer = setTimeout(() => setVisible(true), 500);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookies-accepted", "true");
		setVisible(false);
	};

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ y: 40, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 40, opacity: 0 }}
					transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
					className="fixed bottom-0 inset-x-0 z-50 p-3 md:p-4 pointer-events-none"
				>
					<div className="mx-auto max-w-3xl pointer-events-auto rounded-xl border border-gold-500/20 bg-zinc-950/95 backdrop-blur-xl p-4 md:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
						{/* Icono + texto */}
						<div className="flex items-start gap-3 flex-1 min-w-0">
							<span className="shrink-0 text-base mt-0.5" aria-hidden="true">
								🍪
							</span>
							<p className="font-jakarta text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
								Esta web usa cookies técnicas estrictamente necesarias para su
								correcto funcionamiento. Si continuas navegando, aceptas su uso.
							</p>
						</div>

						{/* Acciones */}
						<div className="flex items-center gap-3 shrink-0">
							<Link href="/aviso-legal" className="btn-ghost">
								MÁS INFO
							</Link>
							<button
								type="button"
								onClick={handleAccept}
								className="btn-primary btn-sm"
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
