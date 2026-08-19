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
			className="fixed z-40 md:z-50 bottom-[calc(env(safe-area-inset-bottom)+1rem)] md:bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 flex items-center gap-2.5 bg-[#12141a]/85 backdrop-blur-2xl border border-white/[0.15] text-white pl-4 pr-4 py-3 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_28px_-6px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.55),0_0_36px_-4px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/70 min-h-[44px] min-w-[44px]"
		>
			<svg
				className="w-5 h-5 md:w-6 md:h-6 fill-[#25D366] drop-shadow-[0_0_6px_rgba(37,211,102,0.45)] group-hover:scale-110 transition-transform duration-300"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.554 4.125 1.523 5.865l-1.614 5.9 6.044-1.585c1.681.916 3.606 1.436 5.647 1.436 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22c-1.834 0-3.552-.513-5.018-1.399l-.36-.217-3.731.978.995-3.636-.239-.379c-.96-1.53-1.47-3.309-1.47-5.147 0-5.402 4.398-9.8 9.8-9.8 5.401 0 9.8 4.398 9.8 9.8 0 5.401-4.399 9.8-9.797 9.8z" />
			</svg>
			<span className="text-sm md:text-[13px] font-semibold md:font-bold tracking-wide md:pr-1">
				<span className="md:hidden">WhatsApp Directo</span>
				<span className="hidden md:inline">Contactar por WhatsApp</span>
			</span>
			<span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
				<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]" />
			</span>
		</a>
	);
}
