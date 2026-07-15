import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from '@/components/WhatsAppButton';

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
  display: "swap",
});

const mt = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AeroCinema | Fotografía y Vídeo con Drones",
  description: "Contenido visual aéreo premium para paisajes, propiedades y eventos.",
};

const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.instagram.com/jf.drone_visual#organization",
  "name": "JF.DroneVision",
  "alternateName": "JF Drone Visual",
  "description": "Servicios cinematográficos premium especializados en fotografía y vídeo aéreo con drones para paisajes, propiedades inmobiliarias y eventos.",
  "url": "https://www.instagram.com/jf.drone_visual",
  "sameAs": ["https://www.instagram.com/jf.drone_visual"],
  "image": "https://www.instagram.com/jf.drone_visual",
  "logo": "https://www.instagram.com/jf.drone_visual",
  "priceRange": "€€€",
  "currenciesAccepted": "EUR",
  "areaServed": { "@type": "Country", "name": "España" },
  "serviceType": [
    "Fotografía aérea con drones",
    "Vídeo aéreo cinematográfico",
    "Cobertura de eventos con drones",
    "Fotografía inmobiliaria aérea"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceLd) }}
        />
      </head>
      <body className={`${cinzel.variable} ${mt.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
