import type { Metadata } from "next";
import {
	Cinzel,
	Cormorant_Garamond,
	Geist,
	Montserrat,
	Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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

const mt = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	weight: ["300", "400"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "JF.DroneVision | Fotografía y Vídeo con Drones",
	description:
		"Contenido visual aéreo premium para paisajes, propiedades y eventos.",
	icons: {
		icon: "/favicon.svg",
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
		<html lang="es" className={cn("dark", "font-sans", geist.variable)}>
			<head>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: SEO JSON-LD schema requires dangerouslySetInnerHTML
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(professionalServiceLd),
					}}
				/>
			</head>
			<body
				className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable} ${mt.variable} font-sans antialiased`}
			>
				<Navbar />
				{children}
				<WhatsAppButton />
			</body>
		</html>
	);
}
