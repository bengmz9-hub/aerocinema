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
			"Recorridos fluidos tanto del exterior del edificio y entorno como del interior de la propiedad (habitaciones, salón o terraza). Entregamos el vídeo listo para publicar en Idealista, Fotocasa o Instagram.",
		icon: Building2,
		badge: "EXTERIOR E INTERIOR · ÁTICOS · ENTREGA 48H",
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
		ctaText: "Hablar con Jose",
		ctaHref: "#contacto",
		videoUrl: "/videos/mapeo.webm",
	},
	{
		id: "negocios",
		index: "SERVICIO 03",
		title: "Contenido aéreo para tu negocio",
		subtitle:
			"Para bares, restaurantes, locales comerciales y negocios familiares",
		description:
			"Una terraza o el ambiente interior de tu local grabados con precisión llaman la atención en redes. Recorridos completos del interior y la fachada con el barrio de fondo. Grabaciones cortas y listas para publicar en Instagram, Google My Business o la web de tu empresa.",
		icon: Store,
		badge: "INTERIOR Y EXTERIOR · REDES SOCIALES · ENTREGA RÁPIDA",
		ctaText: "Ver qué puedo hacer por mi negocio",
		ctaHref: "#contacto",
		videoUrl: "/videos/eventos.webm",
	},
];
