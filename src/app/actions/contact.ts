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

export async function submitContactForm(data: ContactInput) {
	try {
		// Validar campos obligatorios básicos
		if (!data.name || !data.email) {
			return {
				success: false,
				error: "El nombre y el correo electrónico son obligatorios.",
			};
		}

		// Modo Fallback / Dev local si no hay API Key configurada
		if (!resend) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			return { success: true };
		}

		// Enviar correo real vía Resend
		const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";
		const toEmail = process.env.EMAIL_TO || "jose@jfdronevision.com";

		const response = await resend.emails.send({
			from: fromEmail,
			to: toEmail,
			subject: `[NUEVO PROYECTO] ${data.type || "Contacto general"} - ${data.name}`,
			html: `
				<h2>Solicitud de contacto desde JF Drone Vision</h2>
				<p><strong>Nombre:</strong> ${data.name}</p>
				<p><strong>Email:</strong> ${data.email}</p>
				<p><strong>Tipo de servicio:</strong> ${data.type || "No especificado"}</p>
				<p><strong>Detalles:</strong></p>
				<p>${data.details || "Sin detalles adicionales"}</p>
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
