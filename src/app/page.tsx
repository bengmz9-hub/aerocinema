import { AboutMe } from "@/components/AboutMe";
import { DJI5ProSection } from "@/components/DJI5ProSection";
import { HeroSection } from "@/components/HeroSection";
import { InstagramReelsSection } from "@/components/InstagramReelsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Stats } from "@/components/Stats";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
	return (
		<main className="min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
			{/* ========== 01. HERO ========== */}
			<HeroSection />

			{/* ========== 03. INSTAGRAM REELS LIVE FEED (@JF.DRONE_VISUAL) ========== */}
			<div id="portfolio" className="scroll-mt-16 md:scroll-mt-24">
				<InstagramReelsSection />
			</div>

			{/* ========== 04. SERVICIOS ========== */}
			<div id="servicios" className="scroll-mt-16 md:scroll-mt-20">
				<ServicesSection />
			</div>

			{/* Lámpara Horizontal Ambient Accent */}
			<div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-[#dfd0a4]/40 to-transparent relative my-4">
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#dfd0a4]/20 to-transparent blur-sm" />
			</div>

			{/* ========== 05. TECNOLOGÍA DJI MINI 5 PRO ========== */}
			<div id="optical" className="scroll-mt-28 md:scroll-mt-36">
				<DJI5ProSection />
			</div>

			{/* Lámpara Horizontal Ambient Accent */}
			<div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-[#dfd0a4]/40 to-transparent relative my-4">
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#dfd0a4]/20 to-transparent blur-sm" />
			</div>

			{/* ========== 06. OPERADOR ACREDITADO & STATS ========== */}
			<div id="operador" className="scroll-mt-16 md:scroll-mt-20">
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
