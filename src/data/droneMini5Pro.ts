interface DroneComponent {
	id: string;
	name: string;
	description: string;
	offset: { x: number; y: number; scale: number };
}

export interface DroneSpecs {
	title: string;
	tagline: string;
	weight: string;
	sensor: string;
	videoRes: string;
	colorProfile: string;
	flightTime: string;
	maxSpeed: string;
	range: string;
	obstacleAvoidance: string;
	components: DroneComponent[];
}

export const MINI_5_PRO_DATA: DroneSpecs = {
	title: "DJI Mini 5 Pro",
	tagline: "Ingeniería Cinematográfica en 249g",
	weight: "249 g (Sin necesidad de licencia A1/A3 en categoría abierta)",
	sensor: "CMOS 1/1.3″ (24 mm equiv. f/1.7)",
	videoRes: "4K a 60 fps HDR / 1080p a 120 fps",
	colorProfile: "10-bit D-Log M / HLG (1,070 millones de colores)",
	flightTime: "31 minutos (Batería Inteligente estándar)",
	maxSpeed: "16 m/s (57.6 km/h en Modo Sport)",
	range: "15 km (Transmisión O4 HD 1080p/60fps)",
	obstacleAvoidance: "Visión omnidireccional IA + Sensor ToF inferior",
	components: [
		{
			id: "gimbal",
			name: "Cámara & Gimbal de 3 Ejes",
			description:
				"Sensor CMOS 1/1.3″ f/1.7 con estabilización mecánica de 3 ejes y rotación vertical nativa.",
			offset: { x: -140, y: 120, scale: 1.15 },
		},
		{
			id: "battery",
			name: "Batería Inteligente LiPo",
			description:
				"Sistema de gestión activa de energía de 2600 mAh con 31 minutos de tiempo de vuelo sostenido.",
			offset: { x: 140, y: -100, scale: 1.1 },
		},
		{
			id: "motors",
			name: "Motores & Hélices Plegables",
			description:
				"Rotores brushless de alta eficiencia con hélices aerodinámicas ultra-silenciosas.",
			offset: { x: -150, y: -120, scale: 1.05 },
		},
		{
			id: "aiSensors",
			name: "Sensores IA de Visión 360°",
			description:
				"Red de sensores ópticos omnidireccionales con algoritmos APAS 5.0 para esquivar obstáculos.",
			offset: { x: 150, y: 110, scale: 1.1 },
		},
	],
};
