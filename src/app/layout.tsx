import type { Metadata } from "next";
import { Syncopate, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const syncopate = Syncopate({ 
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-syncopate",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space",
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
      <body className={`${syncopate.variable} ${spaceGrotesk.variable} antialiased bg-zinc-950 text-white font-space`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
