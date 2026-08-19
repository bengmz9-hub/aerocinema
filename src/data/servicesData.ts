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
		title: "Vídeo Aéreo Inmobiliario 4K",
		subtitle: "Para pisos, locales, áticos y fincas en venta o alquiler",
		description:
			"Recorridos fluidos del exterior del edificio y el interior de la propiedad. Entregamos el metraje 4K listo para publicar en Idealista, Fotocasa e Instagram para cerrar visitas más rápido.",
		icon: Building2,
		badge: "EXTERIOR E INTERIOR · ÁTICOS · ENTREGA 48H",
		ctaText: "Consultar para mi propiedad",
		ctaHref: "#contacto",
		videoUrl: "/videos/inmobiliaria.webm",
	},
	{
		id: "construccion",
		index: "SERVICIO 02",
		title: "Inspección Técnica de Fachadas",
		subtitle: "Para empresas de construcción, rehabilitación y peritaje",
		description:
			"Inspecciona puntos ciegos y zonas de difícil acceso por altura sin necesidad de montar andamios costosos. Informes visuales en alta definición para documentación de obra y entregas a clientes.",
		icon: HardHat,
		badge: "INSPECCIÓN · ANTES/DESPUÉS · DOCUMENTACIÓN",
		ctaText: "Pedir valoración técnica",
		ctaHref: "#contacto",
		videoUrl: "/videos/mapeo.webm",
	},
	{
		id: "negocios",
		index: "SERVICIO 03",
		title: "Vídeo Promocional para Negocios",
		subtitle: "Para hostelería, terrazas, comercio y marcas locales",
		description:
			"Muestra tu terraza, fachada e interior con planos dinámicos que destacan en Instagram y Google Maps. Formato vertical 9:16 y horizontal optimizado para atraer nuevos clientes.",
		icon: Store,
		badge: "INTERIOR Y EXTERIOR · REDES SOCIALES · ENTREGA RÁPIDA",
		ctaText: "Consultar para mi negocio",
		ctaHref: "#contacto",
		videoUrl: "/videos/eventos.webm",
	},
];
