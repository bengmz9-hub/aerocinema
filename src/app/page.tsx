import { AboutMe } from "@/components/AboutMe";
import { HeroSection } from "@/components/HeroSection";
import { OpticalTech } from "@/components/OpticalTech";
import { PortfolioAccordion } from "@/components/PortfolioAccordion";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ServicesSection } from "@/components/ServicesSection";
import { Stats } from "@/components/Stats";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
	return (
		<main className="min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
			{/* ========== 01. HERO ========== */}
			<HeroSection />

			{/* ========== 02. SHOWCASE: CATEGORÍAS PRINCIPALES (ACORDEÓN) ========== */}
			<div id="portfolio" className="scroll-mt-16 md:scroll-mt-24">
				<PortfolioAccordion />
			</div>

			{/* ========== 03. ARCHIVO DETALLADO: BENTO REJILLA MODULAR CON LUCES SPOTLIGHT ========== */}
			{/* Todo el código basura e inline que emborronaba esta sección ha sido movido a su componente exclusivo */}
			<PortfolioGrid />

			{/* ========== 04. SERVICIOS & OPTICAL TECH ========== */}
			<div id="servicios" className="scroll-mt-16 md:scroll-mt-24">
				<ServicesSection />
				<OpticalTech />
			</div>

			{/* ========== 05. OPERADOR ACREDITADO & STATS ========== */}
			<div id="operador" className="scroll-mt-16 md:scroll-mt-24">
				<AboutMe />
				<Stats />
			</div>

			{/* ========== 06. CONTACTO EXPANDIBLE ========== */}
			<div id="contacto" className="scroll-mt-16 md:scroll-mt-24">
				<ContactSection />
			</div>

			{/* ========== 07. FOOTER ========== */}
			<footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] max-w-7xl mx-auto font-light font-montserrat">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-xs text-zinc-500">
					<span className="text-white font-cinzel font-bold tracking-[0.18em] text-sm">
						JF.<span className="font-normal text-white/50">DRONEVISION</span>
					</span>
					<p>&copy; 2026 JF.DroneVision. Todos los derechos reservados.</p>
					<div className="flex items-center gap-6">
						{[
							{
								name: "Instagram",
								url: "https://www.instagram.com/jf.drone_visual",
							},
							{ name: "YouTube", url: "https://youtube.com" },
							{ name: "Vimeo", url: "https://vimeo.com" },
						].map((social) => (
							<a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Visita nuestro canal de ${social.name}`}
								className="hover:text-white transition-colors"
							>
								{social.name}
							</a>
						))}
					</div>
				</div>
			</footer>
		</main>
	);
}
