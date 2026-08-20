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
			aria-label="Contactar por WhatsApp (abre en nueva pestaña)"
			className="fixed z-50 bottom-6 right-4 md:bottom-6 md:right-6 flex items-center justify-center gap-2.5 bg-[#12141a]/90 backdrop-blur-2xl border border-white/20 text-white h-12 w-12 md:h-auto md:w-auto md:px-4 md:py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(223,208,164,0.2)] hover:border-gold-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
		>
			<div className="relative flex items-center justify-center">
				<svg
					className="w-6 h-6 fill-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.5)] group-hover:scale-110 transition-transform duration-300"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.554 4.125 1.523 5.865l-1.614 5.9 6.044-1.585c1.681.916 3.606 1.436 5.647 1.436 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22c-1.834 0-3.552-.513-5.018-1.399l-.36-.217-3.731.978.995-3.636-.239-.379c-.96-1.53-1.47-3.309-1.47-5.147 0-5.402 4.398-9.8 9.8-9.8 5.401 0 9.8 4.398 9.8 9.8 0 5.401-4.399 9.8-9.797 9.8z" />
				</svg>
				<span
					className="absolute -top-0.5 -right-0.5 flex h-2 w-2"
					aria-hidden="true"
				>
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
					<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
				</span>
			</div>
			<span className="hidden md:inline font-jakarta text-xs font-bold tracking-wider text-white group-hover:text-gold-200 transition-colors">
				Contactar por WhatsApp
			</span>
		</a>
	);
}
