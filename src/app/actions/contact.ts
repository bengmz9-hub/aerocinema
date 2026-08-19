"use server";

import { Resend } from "resend";

interface ContactInput {
	name: string;
	email: string;
	type: string;
	details: string;
}

// Inicializar cliente de Resend si existe la clave en el entorno
const resend = process.env.RESEND_API_KEY
	? new Resend(process.env.RESEND_API_KEY)
	: null;

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

export async function submitContactForm(data: ContactInput) {
	try {
		// Validar campos obligatorios básicos
		if (!data.name || !data.email) {
			return {
				success: false,
				error: "El nombre y el correo electrónico son obligatorios.",
			};
		}

		// Validar formato de email básico
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.email.trim())) {
			return {
				success: false,
				error: "Por favor, introduce un correo electrónico válido.",
			};
		}

		// Sanitizar entradas para prevenir inyecciones HTML
		const safeName = escapeHtml(data.name.slice(0, 100).trim());
		const safeEmail = escapeHtml(data.email.slice(0, 100).trim());
		const safeType = escapeHtml(
			(data.type || "Contacto general").slice(0, 80).trim(),
		);
		const safeDetails = escapeHtml(
			(data.details || "Sin detalles adicionales").slice(0, 1500).trim(),
		);

		// Modo Fallback / Dev local si no hay API Key configurada
		if (!resend) {
			await new Promise((resolve) => setTimeout(resolve, 800));
			return { success: true };
		}

		// Enviar correo real vía Resend
		const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";
		const toEmail = process.env.EMAIL_TO || "contacto@jfdronevision.com";

		const response = await resend.emails.send({
			from: fromEmail,
			to: toEmail,
			subject: `[NUEVO PROYECTO] ${safeType} - ${safeName}`,
			html: `
				<h2>Solicitud de contacto desde JF.DroneVision</h2>
				<p><strong>Nombre:</strong> ${safeName}</p>
				<p><strong>Email:</strong> ${safeEmail}</p>
				<p><strong>Tipo de servicio:</strong> ${safeType}</p>
				<p><strong>Detalles:</strong></p>
				<p>${safeDetails}</p>
			`,
		});

		if (response.error) {
			console.error("Error devuelto por Resend API:", response.error);
			return {
				success: false,
				error: "Error enviando el mensaje. Inténtalo de nuevo.",
			};
		}

		return { success: true };
	} catch (error) {
		console.error("Error procesando solicitud de contacto:", error);
		return {
			success: false,
			error: "Error en el servidor al procesar la solicitud.",
		};
	}
}
