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
			<footer className="relative border-t border-white/[0.06] pt-16 md:pt-20 pb-8 md:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-montserrat">
				{/* ── CTA Row (GoCanopy + Buzz inspiration) ── */}
				<div className="mb-12 md:mb-16 text-center">
					<h3 className="font-cinzel text-2xl md:text-4xl font-bold text-white uppercase tracking-wide mb-3 [text-wrap:balance]">
						¿LISTO PARA ELEVAR TU{" "}
						<span className="text-golden-hour">PROYECTO</span>?
					</h3>
					<p className="font-jakarta text-xs md:text-sm text-zinc-400 font-light mb-6 max-w-lg mx-auto">
						Cuéntame qué necesitas grabar y te respondo el mismo día. Sin
						vueltas.
					</p>
					<a
						href="#contacto"
						className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-black font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors duration-300 shadow-lg shadow-white/5"
					>
						PEDIR PRESUPUESTO →
					</a>
				</div>

				{/* ── Grid Principal ── */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-14">
					{/* Col 1: Marca */}
					<div className="space-y-4">
						<span className="font-cinzel text-lg font-bold tracking-[0.18em] text-white block">
							JF.
							<span className="font-normal text-white/50">DRONEVISION</span>
						</span>
						<p className="font-jakarta text-xs text-zinc-400 font-light leading-relaxed">
							Grabaciones aéreas cinematográficas con dron para inmobiliarias,
							construcción y negocios locales en L'Hospitalet y Barcelona.
						</p>
						<div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-600">
							<span className="w-1 h-1 rounded-full bg-cyan-400" />
							41.3851°N · 2.1734°E
						</div>
					</div>

					{/* Col 2: Navegación */}
					<div className="space-y-3">
						<span className="font-jakarta text-[10px] tracking-[0.25em] text-zinc-500 uppercase font-semibold">
							NAVEGACIÓN
						</span>
						<div className="flex flex-col gap-2">
							{[
								{ label: "Servicios", href: "#servicios" },
								{ label: "Trabajos Recientes", href: "#portfolio" },
								{ label: "Sobre Jose", href: "#operador" },
								{ label: "Contacto", href: "#contacto" },
							].map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="font-jakarta text-xs text-zinc-400 hover:text-white transition-colors font-light w-fit"
								>
									{link.label}
								</a>
							))}
						</div>
					</div>

					{/* Col 3: Contacto + Social */}
					<div className="space-y-4">
						<span className="font-jakarta text-[10px] tracking-[0.25em] text-zinc-500 uppercase font-semibold block">
							CONTACTO
						</span>
						<div className="space-y-2.5 font-jakarta text-xs text-zinc-400 font-light">
							<p>
								<a
									href="mailto:contacto@jfdronevision.com"
									className="hover:text-white transition-colors"
								>
									contacto@jfdronevision.com
								</a>
							</p>
							<p>L'Hospitalet de Llobregat, Barcelona</p>
						</div>
						<div className="flex items-center gap-4 pt-1">
							<a
								href="https://www.instagram.com/jf.drone_visual"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="font-jakarta text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-amber-300 transition-colors font-semibold"
							>
								IG
							</a>
							<a
								href="#contacto"
								className="font-jakarta text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-amber-300 transition-colors font-semibold"
							>
								ESCRIBIR A JOSE
							</a>
						</div>
					</div>
				</div>

				{/* ── Bottom Bar ── */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-[10px] text-zinc-600 font-mono tracking-wider">
					<p>&copy; 2026 JF.DroneVision. Todos los derechos reservados.</p>
					<div className="flex items-center gap-5">
						<a
							href="/aviso-legal"
							className="hover:text-zinc-400 transition-colors"
						>
							Aviso Legal
						</a>
						<span className="text-white/10">|</span>
						<a
							href="https://www.instagram.com/jf.drone_visual"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-zinc-400 transition-colors"
						>
							@jf.drone_visual
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
}
