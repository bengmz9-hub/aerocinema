import { AboutMe } from "@/components/AboutMe";
import { DJI5ProSection } from "@/components/DJI5ProSection";
import { HeroSection } from "@/components/HeroSection";
import { InstagramReelsSection } from "@/components/InstagramReelsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Stats } from "@/components/Stats";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import { LampContainer } from "@/components/ui/lamp";

export default function HomePage() {
	return (
		<main className="min-h-screen bg-[#000000] selection:bg-white selection:text-black overflow-x-hidden">
			{/* ========== 01. HERO ========== */}
			<HeroSection />

			{/* ========== 03. INSTAGRAM REELS LIVE FEED (@JF.DRONE_VISUAL) ========== */}
			<div id="portfolio" className="scroll-mt-16 md:scroll-mt-24">
				<InstagramReelsSection />
			</div>

			{/* ========== 04. SERVICIOS ========== */}
			<div id="servicios" className="scroll-mt-16 md:scroll-mt-20 relative">
				<LampContainer />
				<ServicesSection />
			</div>

			{/* ========== 05. TECNOLOGÍA DJI MINI 5 PRO ========== */}
			<div id="optical" className="scroll-mt-28 md:scroll-mt-36 relative">
				<LampContainer />
				<DJI5ProSection />
			</div>

			{/* ========== 06. OPERADOR ACREDITADO & STATS ========== */}
			<div id="operador" className="scroll-mt-16 md:scroll-mt-20 relative">
				<LampContainer />
				<AboutMe />

				<div className="relative">
					<LampContainer />
					<Stats />
				</div>
			</div>

			{/* ========== 06. FAQ ========== */}
			<div id="faq" className="scroll-mt-16 md:scroll-mt-24">
				<FAQSection />
			</div>

			{/* ========== 07. CONTACTO EXPANDIBLE ========== */}
			<div id="contacto" className="scroll-mt-16 md:scroll-mt-24">
				<ContactSection />
			</div>

			{/* ========== 07. FOOTER ========== */}
			<footer className="border-t border-white/[0.06] pt-12 md:pt-16 pb-8 md:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-jakarta">
				{/* ── Grid Principal — 3 columnas con jerarquía premium ── */}
				<div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-12 mb-10 md:mb-14">
					{/* Col 1: Marca */}
					<div className="space-y-4">
						<span className="font-cinzel text-lg font-bold tracking-[0.18em] text-white block">
							JF.
							<span className="font-normal text-white/50">DRONEVISION</span>
						</span>
						<p className="text-xs text-zinc-400 font-light leading-relaxed max-w-xs">
							Grabaciones aéreas para inmobiliarias, construcción y negocios
							locales en L'Hospitalet y Barcelona.
						</p>
						<div className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-600">
							<span className="w-1 h-1 rounded-full bg-cyan-400" />
							41.3851°N · 2.1734°E
						</div>
					</div>

					{/* Col 2: Navegación — con chevrones dorados al hover */}
					<div>
						<span className="font-montserrat text-[11px] tracking-[0.2em] text-white/50 uppercase font-semibold block pb-2.5 mb-3.5 border-b border-white/[0.06]">
							NAVEGACIÓN
						</span>
						<div className="flex flex-col gap-0.5">
							{[
								{ label: "Servicios", href: "#servicios" },
								{ label: "Trabajos Recientes", href: "#portfolio" },
								{ label: "Sobre Jose", href: "#operador" },
								{ label: "Preguntas Frecuentes", href: "#faq" },
								{ label: "Contacto", href: "#contacto" },
							].map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="group flex items-center gap-2 py-1 text-xs text-zinc-400 hover:text-white transition-colors font-light w-fit"
								>
									<span className="text-[10px] text-gold-400/0 group-hover:text-gold-400/80 transition-all duration-200 group-hover:translate-x-0.5">
										→
									</span>
									{link.label}
								</a>
							))}
						</div>
					</div>

					{/* Col 3: Contacto — visualmente distinto a la navegación */}
					<div>
						<span className="font-montserrat text-[11px] tracking-[0.2em] text-white/50 uppercase font-semibold block pb-2.5 mb-3.5 border-b border-white/[0.06]">
							CONTACTO
						</span>
						<div className="space-y-2 text-xs text-zinc-500 font-light leading-relaxed">
							<p>
								<a
									href="mailto:contacto@jfdronevision.com"
									className="text-zinc-400 hover:text-white transition-colors"
								>
									contacto@jfdronevision.com
								</a>
							</p>
							<p>L'Hospitalet de Llobregat, Barcelona</p>
						</div>
						<div className="flex items-center gap-5 pt-3">
							<a
								href="https://www.instagram.com/jf.drone_visual"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-2 font-montserrat text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-gold-300 transition-colors font-semibold"
							>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-4 h-4"
									aria-hidden="true"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
								</svg>
								<span className="group-hover:translate-x-0.5 transition-transform duration-200">
									ESCRIBIR A JOSE
								</span>
							</a>
						</div>
					</div>
				</div>

				{/* ── Bottom Bar — minimal ── */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-[10px] text-zinc-600 font-mono tracking-wider">
					<p>&copy; 2026 JF.DroneVision</p>
					<a
						href="/aviso-legal"
						className="hover:text-zinc-400 transition-colors"
					>
						Aviso Legal
					</a>
				</div>
			</footer>
		</main>
	);
}
