import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from '@/components/WhatsAppButton';

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
});

const mt = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "AeroCinema | Fotografía y Vídeo con Drones",
  description: "Contenido visual aéreo premium para paisajes, propiedades y eventos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${cinzel.variable} ${mt.variable}`}>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
