/**
 * Genera un enlace directo a WhatsApp codificando el mensaje.
 */
export function getWhatsAppLink(phone: string, text?: string): string {
	const cleanPhone = phone.replace(/\D/g, "");
	const encodedText = text ? encodeURIComponent(text) : "";
	return `https://wa.me/${cleanPhone}${encodedText ? `?text=${encodedText}` : ""}`;
}
