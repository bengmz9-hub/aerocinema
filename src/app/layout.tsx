import type { Metadata } from "next";
import {
	Cinzel,
	Cormorant_Garamond,
	Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

const cinzel = Cinzel({
	subsets: ["latin"],
	variable: "--font-cinzel",
	weight: ["400", "700"],
	display: "swap",
});

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--font-cormorant",
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-jakarta",
	weight: ["300", "400", "500", "600"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://jfdronevision.com"),
	title: "JF.DroneVision | Fotografía y Vídeo con Drones",
	description:
		"Grabaciones con dron para tu negocio o propiedad en L'Hospitalet y Barcelona. Permiso AESA en regla.",
	icons: {
		icon: "/favicon.svg",
	},
	openGraph: {
		title: "JF.DroneVision | Fotografía y Vídeo con Drones",
		description:
			"Grabaciones con dron para inmobiliarias, construcción y negocios locales en L'Hospitalet y Barcelona.",
		url: "https://jfdronevision.com",
		siteName: "JF.DroneVision",
		images: [
			{
				url: "/images/hero-poster.webp",
				width: 1200,
				height: 630,
				alt: "JF.DroneVision - Grabaciones aéreas con dron",
			},
		],
		locale: "es_ES",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "JF.DroneVision | Fotografía y Vídeo con Drones",
		description:
			"Grabaciones con dron para tu negocio o propiedad en L'Hospitalet y Barcelona.",
	},
};

const professionalServiceLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	"@id": "https://www.instagram.com/jf.drone_visual#organization",
	name: "JF.DroneVision",
	alternateName: "JF Drone Visual",
	description:
		"Servicios cinematográficos premium especializados en fotografía y vídeo aéreo con drones para paisajes, propiedades inmobiliarias y eventos.",
	url: "https://www.instagram.com/jf.drone_visual",
	sameAs: ["https://www.instagram.com/jf.drone_visual"],
	image: "https://www.instagram.com/jf.drone_visual",
	logo: "https://www.instagram.com/jf.drone_visual",
	priceRange: "€€€",
	currenciesAccepted: "EUR",
	areaServed: { "@type": "Country", name: "España" },
	serviceType: [
		"Fotografía aérea con drones",
		"Vídeo aéreo cinematográfico",
		"Cobertura de eventos con drones",
		"Fotografía inmobiliaria aérea",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className={cn("dark", "font-sans")}>
			<head>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: SEO JSON-LD schema requires dangerouslySetInnerHTML
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(professionalServiceLd),
					}}
				/>
			</head>
			<body
				className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable} font-sans antialiased`}
			>
				<Navbar />
				{children}
				<WhatsAppButton />
				<CookieBanner />
			</body>
		</html>
	);
}
