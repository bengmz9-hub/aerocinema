import {
	ArrowUpRight,
	Building2,
	Camera,
	Compass,
	type LucideIcon,
	Mountain,
	Video,
	Wand2,
} from "lucide-react";

export type SpanType = "large" | "wide" | "tall" | "default";
export type AccentType = "cyan" | "titanium" | "zinc";

export interface ServiceItem {
	id: string;
	index: string;
	title: string;
	subtitle: string;
	description: string;
	icon: LucideIcon;
	span: SpanType;
	accent: AccentType;
	metrics: string;
	videoUrl: string;
}

export const servicesItems: ServiceItem[] = [
	{
		id: "filmacion",
		index: "SVC // 01",
		title: "Filmación Cinematográfica",
		subtitle: "Resolución hasta 8K / Perfiles Logarítmicos",
		description:
			"Secuencias aéreas de alta fidelidad con estabilización de nivel profesional para largometrajes, spots publicitarios y producciones de alto formato.",
		icon: Video,
		span: "large",
		accent: "titanium",
		metrics: "8K RAW / PRORES",
		videoUrl: "/videos/filmacion.webm",
	},
	{
		id: "eventos",
		index: "SVC // 02",
		title: "Cobertura de Eventos",
		subtitle: "Discreción y Cobertura Multi-Cámara",
		description:
			"Registro aéreo ultra silencioso y cinematográfico para bodas de lujo, festivals y eventos privados de alto standing.",
		icon: Camera,
		span: "default",
		accent: "zinc",
		metrics: "4K HDR // SILENT FLIGHT",
		videoUrl: "/videos/eventos.webm",
	},
	{
		id: "inmobiliaria",
		index: "SVC // 03",
		title: "Video Inmobiliario",
		subtitle: "Planos Estéticos de Alta Gama",
		description:
			"Recorridos dinámicos que destacan la arquitectura, luz natural y el entorno para propiedades exclusivas de Real Estate.",
		icon: Building2,
		span: "default",
		accent: "cyan",
		metrics: "FPV IN DOOR / OUTDOOR",
		videoUrl: "/videos/inmobiliaria.webm",
	},
	{
		id: "fotografia",
		index: "SVC // 04",
		title: "Fotografía y Topografía",
		subtitle: "Levantamientos y Precisión de Obra",
		description:
			"Capturas fotogramétricas georreferenciadas de alta resolución para levantamientos topográficos, inspección técnica y documentación de obra.",
		icon: Mountain,
		span: "wide",
		accent: "titanium",
		metrics: "LiDAR / RTK ±2CM ACCURACY",
		videoUrl: "/videos/fotografia.webm",
	},
	{
		id: "postproduction",
		index: "SVC // 05",
		title: "Postproducción",
		subtitle: "Pipeline Completo de Edición",
		description:
			"Etalonaje profesional en espacio de color ACES, montaje de ritmo dinámico y entrega final en perfiles listos para distribución cinematográfica.",
		icon: Wand2,
		span: "tall",
		accent: "zinc",
		metrics: "ACES 10-BIT / VFX READY",
		videoUrl: "/videos/postproduction.webm",
	},
	{
		id: "mapeo",
		index: "SVC // 06",
		title: "Mapeo 3D",
		subtitle: "Modelado Tridimensional de Terrenos",
		description:
			"Reconstrucción digital tridimensional detallada mediante fotogrametría aérea avanzada para planificación urbana e industrial.",
		icon: Compass,
		span: "tall",
		accent: "zinc",
		metrics: "3D MESH / CLOUD POINTS",
		videoUrl: "/videos/mapeo.webm",
	},
	{
		id: "briefing-cta",
		index: "CTA // 07",
		title: "Misión Briefing / Contacto",
		subtitle: "Consultoría Técnica y Planificación",
		description:
			"¿Tienes un proyecto de alta complejidad? Diseñamos la estrategia de vuelo a medida, gestionamos los permisos regulatorios de AESA y ejecutamos la producción aérea con entrega garantizada.",
		icon: ArrowUpRight,
		span: "large",
		accent: "cyan",
		metrics: "RESPONSE WITHIN 24H",
		videoUrl: "/videos/briefing.webm",
	},
];
