"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
	phoneNumber?: string;
	message?: string;
}

export default function WhatsAppButton({
	phoneNumber = "34600000000",
	message = "Hola Jose, me gustaría solicitar información sobre un servicio de grabación FPV.",
}: WhatsAppButtonProps) {
	const href = getWhatsAppLink(phoneNumber, message);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Contactar por WhatsApp"
			className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold px-4 py-3 rounded-full shadow-lg shadow-black/40 hover:scale-105 transition-all duration-300 group"
		>
			<MessageCircle className="w-6 h-6 fill-black stroke-none group-hover:rotate-12 transition-transform duration-300" />
			<span className="hidden md:inline text-sm font-medium pr-1">
				Contactar por WhatsApp
			</span>
		</a>
	);
}
