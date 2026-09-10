"use client";

import { Film, Send } from "lucide-react";
import { CONTACT_PHONE } from "@/lib/config";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function MobileIsland() {
	const whatsappUrl = getWhatsAppLink(
		CONTACT_PHONE,
		"Hola Jose, me gustaría información sobre una grabación profesional con dron.",
	);

	return (
		<nav
			aria-label="Acciones rápidas móviles"
			className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center p-1 rounded-full bg-[#090a0f]/85 backdrop-blur-2xl border border-white/[0.14] shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(223,208,164,0.12),inset_0_1px_1px_rgba(255,255,255,0.2)] ring-1 ring-white/10 select-none"
		>
			{/* Botón 1: Showreel */}
			<a
				href="#reels"
				className="flex items-center gap-1.5 px-3 py-2 rounded-full text-zinc-300 hover:text-white active:bg-white/10 active:scale-95 transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
				aria-label="Ver Showreel y producciones recientes"
			>
				<Film className="w-3.5 h-3.5 text-gold-400 shrink-0" />
				<span className="text-[11px] font-mono tracking-tight font-medium">
					Showreel
				</span>
			</a>

			{/* Separador sutil */}
			<span className="w-px h-4 bg-white/15" aria-hidden="true" />

			{/* Botón 2: WhatsApp */}
			<a
				href={whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-1.5 px-3 py-2 rounded-full text-white active:bg-emerald-500/15 active:scale-95 transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
				aria-label="Contactar directamente por WhatsApp"
			>
				<div className="relative flex items-center justify-center shrink-0">
					<svg
						className="w-3.5 h-3.5 fill-[#25D366] drop-shadow-[0_0_6px_rgba(37,211,102,0.6)]"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.554 4.125 1.523 5.865l-1.614 5.9 6.044-1.585c1.681.916 3.606 1.436 5.647 1.436 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22c-1.834 0-3.552-.513-5.018-1.399l-.36-.217-3.731.978.995-3.636-.239-.379c-.96-1.53-1.47-3.309-1.47-5.147 0-5.402 4.398-9.8 9.8-9.8 5.401 0 9.8 4.398 9.8 9.8 0 5.401-4.399 9.8-9.797 9.8z" />
					</svg>
					<span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
						<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
					</span>
				</div>
				<span className="text-[11px] font-mono tracking-tight font-semibold text-emerald-400">
					WhatsApp
				</span>
			</a>

			{/* Separador sutil */}
			<span className="w-px h-4 bg-white/15" aria-hidden="true" />

			{/* Botón 3: Contacto */}
			<a
				href="#contacto"
				className="flex items-center gap-1.5 px-3 py-2 rounded-full text-zinc-300 hover:text-white active:bg-white/10 active:scale-95 transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
				aria-label="Ir a formulario de contacto"
			>
				<Send className="w-3.5 h-3.5 text-gold-400 shrink-0" />
				<span className="text-[11px] font-mono tracking-tight font-medium">
					Contacto
				</span>
			</a>
		</nav>
	);
}
