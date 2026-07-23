"use server";

interface ContactInput {
	name: string;
	email: string;
	type: string;
	details: string;
}

export async function submitContactForm(_data: ContactInput) {
	try {
		// Aquí conectarás tu servicio de email (Resend, SendGrid) o tu base de datos

		// Simular retraso de red en producción
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return { success: true };
	} catch (error) {
		console.error("Error procesando solicitud de contacto:", error);
		return {
			success: false,
			error: "Error en el servidor al procesar la solicitud.",
		};
	}
}
