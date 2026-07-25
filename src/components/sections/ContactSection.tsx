"use client";

import { MessageSquare, Send } from "lucide-react";
import ContactModal from "./ContactModal";

export default function ContactSection() {
	const whatsappUrl =
		"https://wa.me/34600000000?text=Hola%20Jose,%20tengo%20un%20proyecto%20en%20mente%20y%20me%20gustar%C3%ADa%20consultarte.";

	return (
		<section className="relative mx-auto max-w-7xl border-t border-white/[0.06] px-6 py-20 lg:px-8 text-center select-none">
			<div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6">
				{/* Tag Superior */}
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[10px] tracking-[0.25em] uppercase">
					<MessageSquare className="w-3.5 h-3.5" />
					<span>CONVERSACIÓN DIRECTA · SIN COMPROMISO</span>
				</div>

				{/* Título H2 */}
				<h2 className="font-cormorant text-3xl sm:text-5xl font-bold leading-none tracking-tight text-white uppercase">
					¿Tienes algo <span className="text-amber-400 italic">en mente</span>?
				</h2>

				{/* Párrafo explicativo */}
				<p className="max-w-xl font-jakarta text-xs sm:text-sm font-light leading-relaxed text-zinc-300">
					Cuéntame qué tienes: un piso en venta, una fachada que inspeccionar, o
					una terraza que quieres mostrar. Te respondo el mismo día y te digo lo
					que puede hacer el dron por ti.
				</p>

				{/* Botones CTA Principales */}
				<div className="mt-4 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
					{/* CTA Principal WhatsApp */}
					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-jakarta text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/20 transition-all duration-300 cursor-pointer w-full sm:w-auto"
					>
						<Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
						<span>Escribir a Jose</span>
					</a>

					{/* CTA Secundario Formulario Modal */}
					<ContactModal />
				</div>
			</div>
		</section>
	);
}
