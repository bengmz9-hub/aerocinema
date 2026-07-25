import { Building2, HardHat, type LucideIcon, Store } from "lucide-react";

export interface ServiceItem {
	id: string;
	index: string;
	title: string;
	subtitle: string;
	description: string;
	icon: LucideIcon;
	badge: string;
	ctaText: string;
	ctaHref: string;
	videoUrl: string;
}

export const servicesItems: ServiceItem[] = [
	{
		id: "inmobiliaria",
		index: "SERVICIO 01",
		title: "Vende mejor con vídeo aéreo",
		subtitle: "Para pisos, locales y áticos en venta o alquiler",
		description:
			"Un vídeo exterior del edificio, una pasada aérea del barrio o una vista de pájaro de ese ático con terraza marcan la diferencia en el portal. Entregamos el vídeo listo para publicar en Idealista, Fotocasa o Instagram.",
		icon: Building2,
		badge: "EXTERIORES · ÁTICOS · ENTREGA 48H",
		ctaText: "Consultar para mi propiedad",
		ctaHref: "#contacto",
		videoUrl: "/videos/inmobiliaria.webm",
	},
	{
		id: "construccion",
		index: "SERVICIO 02",
		title: "Documenta el estado real de la fachada",
		subtitle: "Para empresas de construcción, restauración y mantenimiento",
		description:
			"¿Necesitas inspeccionar zonas de difícil acceso por altura o documentar el antes y después de una reforma de fachada? El dron llega donde los operarios no pueden, sin andamios y en menos tiempo. El vídeo queda en tus manos para usarlo como evidencia técnica o para mostrar tu trabajo a futuros clientes.",
		icon: HardHat,
		badge: "INSPECCIÓN · ANTES/DESPUÉS · DOCUMENTACIÓN",
		ctaText: "Hablar con José",
		ctaHref: "#contacto",
		videoUrl: "/videos/fotografia.webm",
	},
	{
		id: "negocios",
		index: "SERVICIO 03",
		title: "Contenido aéreo para tu negocio",
		subtitle:
			"Para bares, restaurantes, locales comerciales y negocios familiares",
		description:
			"Una terraza bien grabada desde el aire llama la atención en redes sociales. Una vista exterior de tu local con el barrio de fondo habla por sí sola. Grabaciones cortas, directas y listas para publicar en Instagram, Google My Business o la web de tu empresa.",
		icon: Store,
		badge: "REDES SOCIALES · GOOGLE MY BUSINESS · ENTREGA RÁPIDA",
		ctaText: "Ver qué puedo hacer por mi negocio",
		ctaHref: "#contacto",
		videoUrl: "/videos/eventos.webm",
	},
];
