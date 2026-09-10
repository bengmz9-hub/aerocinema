import type { Metadata } from "next";
import {
	Cormorant_Garamond,
	JetBrains_Mono,
	Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import MobileIsland from "@/components/MobileIsland";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT_PHONE_FORMATTED } from "@/lib/config";

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--font-cormorant",
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-jakarta",
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
});

const mono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://jfdronevision.com"),
	title: "Filmación Aérea en Barcelona y Dron L'Hospitalet | JF.DroneVision",
	description:
		"Servicios profesionales de vídeo y fotografía con dron en Barcelona y L'Hospitalet. Grabaciones aéreas 4K para inmobiliarias, obras y locales. Operador AESA.",
	keywords: [
		"dron l'hospitalet",
		"filmación aérea barcelona",
		"vídeo con dron barcelona",
		"fotografía aérea inmobiliaria barcelona",
		"inspección fachadas dron hospitalet",
		"piloto dron aesa cataluña",
	],
	alternates: {
		canonical: "https://jfdronevision.com",
	},
	icons: {
		icon: "/favicon.svg",
	},
	openGraph: {
		title: "Filmación Aérea en Barcelona y Dron L'Hospitalet | JF.DroneVision",
		description:
			"Grabaciones con dron para inmobiliarias, construcción y negocios locales en L'Hospitalet y Barcelona. Operador y piloto certificado AESA.",
		url: "https://jfdronevision.com",
		siteName: "JF.DroneVision",
		images: [
			{
				url: "/images/hero-poster.webp",
				width: 1200,
				height: 630,
				alt: "JF.DroneVision - Filmación aérea y servicio de dron en Barcelona y L'Hospitalet",
			},
		],
		locale: "es_ES",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Filmación Aérea en Barcelona y Dron L'Hospitalet | JF.DroneVision",
		description:
			"Vídeo aéreo 4K para inmobiliarias, arquitectura y negocios en L'Hospitalet y Barcelona. Piloto AESA.",
		images: ["/images/hero-poster.webp"],
	},
};

const structuredDataLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": ["ProfessionalService", "LocalBusiness"],
			"@id": "https://jfdronevision.com/#organization",
			name: "JF.DroneVision",
			alternateName: ["JF Drone Visual", "JF DroneVision Barcelona"],
			description:
				"Servicios profesionales de filmación aérea, fotografía y vídeo con drones para inmobiliarias, inspección de fachadas y negocios locales en L'Hospitalet y Barcelona. Operador registrado AESA.",
			url: "https://jfdronevision.com",
			telephone: CONTACT_PHONE_FORMATTED,
			email: "contacto@jfdronevision.com",
			sameAs: ["https://www.instagram.com/jf.drone_visual"],
			logo: "https://jfdronevision.com/favicon.svg",
			image: "https://jfdronevision.com/images/hero-poster.webp",
			priceRange: "€€",
			currenciesAccepted: "EUR",
			address: {
				"@type": "PostalAddress",
				addressLocality: "L'Hospitalet de Llobregat",
				addressRegion: "Barcelona",
				addressCountry: "ES",
			},
			geo: {
				"@type": "GeoCoordinates",
				latitude: 41.3639,
				longitude: 2.1158,
			},
			areaServed: [
				{ "@type": "City", name: "L'Hospitalet de Llobregat" },
				{ "@type": "City", name: "Barcelona" },
				{ "@type": "AdministrativeArea", name: "Baix Llobregat" },
				{ "@type": "AdministrativeArea", name: "Barcelonès" },
			],
			knowsAbout: [
				"Filmación aérea 4K",
				"Fotografía inmobiliaria con dron",
				"Inspección de fachadas y cubiertas",
				"Normativa EASA / AESA de drones",
				"Vídeo promocional B2B",
			],
			hasCredential: [
				{
					"@type": "EducationalOccupationalCredential",
					credentialCategory: "Operador AESA registrado OP-UAS-ES",
				},
				{
					"@type": "EducationalOccupationalCredential",
					credentialCategory: "Piloto Certificado EASA CAT-A1/A2/A3 & STS-01",
				},
			],
		},
		{
			"@type": "FAQPage",
			"@id": "https://jfdronevision.com/#faq",
			mainEntity: [
				{
					"@type": "Question",
					name: "¿Cuánto cuesta una grabación con dron en Barcelona o L'Hospitalet?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Ofrecemos presupuestos cerrados según las características de cada proyecto (inmobiliaria, fachadas o negocios locales) en la primera consulta y sin compromiso.",
					},
				},
				{
					"@type": "Question",
					name: "¿Se necesitan permisos para volar un dron en zona urbana?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "JF.DroneVision es operador registrado en AESA con seguro de responsabilidad civil en regla. Nos encargamos de toda la gestión y coordinación del vuelo urbano en Barcelona y área metropolitana.",
					},
				},
				{
					"@type": "Question",
					name: "¿En qué formato y plazo se entrega el material en vídeo?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Entregamos metraje en 4K UHD 60fps con perfil D-Log M, listo en 24-48 horas para brutos y 3-5 días para edición profesional vertical (Reels/TikTok) u horizontal.",
					},
				},
			],
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className="dark font-sans">
			<head>
				<meta
					name="description"
					content="Servicios profesionales de vídeo y fotografía con dron en Barcelona y L'Hospitalet. Grabaciones aéreas 4K para inmobiliarias, obras y locales. Operador AESA."
				/>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: SEO JSON-LD schema requires dangerouslySetInnerHTML
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredDataLd),
					}}
				/>
			</head>
			<body
				className={`${cormorant.variable} ${jakarta.variable} ${mono.variable} font-sans antialiased`}
			>
				<Navbar />
				{children}
				<MobileIsland />
				<WhatsAppButton />
				<CookieBanner />
			</body>
		</html>
	);
}
