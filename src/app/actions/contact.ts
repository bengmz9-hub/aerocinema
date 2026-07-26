"use server";

interface ContactInput {
	name: string;
	email: string;
	type: string;
	details: string;
}

export async function submitContactForm(_data: ContactInput) {
	try {
		// ── CONECTAR AQUÍ EL SERVICIO DE EMAIL ──
		// Usar process.env.EMAIL_API_KEY — NUNCA hardcodear la key
		//
		// Ejemplo con Resend:
		//   const resend = new Resend(process.env.EMAIL_API_KEY);
		//   await resend.emails.send({
		//     from: process.env.EMAIL_FROM ?? "contacto@jfdronevision.com",
		//     to:   process.env.EMAIL_TO   ?? "jose@jfdronevision.com",
		//     subject: `Nuevo proyecto: ${_data.type}`,
		//     text: `Nombre: ${_data.name}\nEmail: ${_data.email}\n\n${_data.details}`,
		//   });

		// Simular retraso de red
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
