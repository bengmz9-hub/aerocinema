import Link from "next/link";
import { AboutMe } from "@/components/AboutMe";
import { ColorGradingReel } from "@/components/ColorGradingReel";
import { DJI5ProSection } from "@/components/DJI5ProSection";
import { HeroSection } from "@/components/HeroSection";
import { InstagramReelsSection } from "@/components/InstagramReelsSection";
import { ScrollRestorer } from "@/components/ScrollRestorer";
import { ServicesSection } from "@/components/ServicesSection";
import { Stats } from "@/components/Stats";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
	return (
		<main className="min-h-screen bg-[#000000] selection:bg-white selection:text-black overflow-x-hidden">
			<ScrollRestorer />
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

			{/* ========== 04b. ETALONAJE / COLOR GRADING INTERACTIVO ========== */}
			<div id="etalonaje" className="scroll-mt-16 md:scroll-mt-20">
				<ColorGradingReel />
			</div>

			{/* ========== 05. TECNOLOGÍA DJI MINI 5 PRO ========== */}
			<div id="optical" className="scroll-mt-28 md:scroll-mt-36">
				<DJI5ProSection />
			</div>

			{/* ========== 06. OPERADOR ACREDITADO & STATS ========== */}
			<div id="operador" className="scroll-mt-16 md:scroll-mt-20">
				<AboutMe />
				<Stats />
			</div>

			{/* ========== 06. FAQ ========== */}
			<div id="faq" className="scroll-mt-16 md:scroll-mt-24">
				<FAQSection />
			</div>

			{/* ========== 07. CONTACTO EXPANDIBLE ========== */}
			<div id="contacto" className="scroll-mt-16 md:scroll-mt-24">
				<ContactSection />
			</div>

			{/* ========== 07. FOOTER OFICIAL ESTILO APPLE (APPLE.COM UI SPEC) ========== */}
			<footer className="w-full bg-[#000000] text-[#a1a1a6] font-jakarta border-t border-[#1d1d1f] pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none text-[12px] leading-normal">
				{/* ── 1. NOTAS AL PIE EDITORIALES (Estilo Apple Footnotes) ── */}
				<div className="space-y-2.5 pb-6 border-b border-[#1d1d1f] text-[11px] leading-relaxed text-[#86868b]">
					<p>
						1. Operaciones de vuelo bajo normativa europea EASA y estatal AESA.
						Operador registrado con seguro de responsabilidad civil aeronáutico
						en vigor para filmación urbana e inmobiliaria.
					</p>
					<p>
						2. Entregas en resolución nativa 4K UHD con perfil de color 10-bit
						D-Log M. Consulta disponibilidad y autorización de espacio aéreo
						según localización geográfica.
					</p>
				</div>

				{/* ── 2. BREADCRUMB MINIMALISTA APPLE ── */}
				<div className="flex items-center gap-2 py-4 text-[12px] text-[#a1a1a6]">
					<span className="font-cinzel text-xs font-bold text-white tracking-widest uppercase">
						JF.DRONEVISION
					</span>
					<span>›</span>
					<span className="text-[#86868b]">Barcelona &amp; L'Hospitalet</span>
				</div>

				{/* ── 3. COLUMNAS DE NAVEGACIÓN (Apple Directory Columns) ── */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-b border-[#1d1d1f]">
					{/* Col 1: Servicios */}
					<div className="space-y-2.5">
						<h3 className="text-[11px] font-semibold tracking-wider text-[#f5f5f7] uppercase font-mono">
							Servicios
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#servicios"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Filmación Inmobiliaria
								</a>
							</li>
							<li>
								<a
									href="#servicios"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Inspección de Obras
								</a>
							</li>
							<li>
								<a
									href="#servicios"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Negocios &amp; Terrazas
								</a>
							</li>
							<li>
								<a
									href="#etalonaje"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Color Grading &amp; Edición
								</a>
							</li>
						</ul>
					</div>

					{/* Col 2: Tecnología */}
					<div className="space-y-2.5">
						<h3 className="text-[11px] font-semibold tracking-wider text-[#f5f5f7] uppercase font-mono">
							Tecnología
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#optical"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									DJI Mini 5 Pro
								</a>
							</li>
							<li>
								<a
									href="#optical"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Sensor CMOS 1/1.3″
								</a>
							</li>
							<li>
								<a
									href="#optical"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									D-Log M 10-Bit
								</a>
							</li>
							<li>
								<a
									href="#optical"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Clase C0 (&lt;249g)
								</a>
							</li>
						</ul>
					</div>

					{/* Col 3: Sobre Jose */}
					<div className="space-y-2.5">
						<h3 className="text-[11px] font-semibold tracking-wider text-[#f5f5f7] uppercase font-mono">
							Operador
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#operador"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Certificación AESA
								</a>
							</li>
							<li>
								<a
									href="#operador"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Seguro Aeronáutico
								</a>
							</li>
							<li>
								<a
									href="#portfolio"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Portfolio de Trabajos
								</a>
							</li>
							<li>
								<a
									href="#faq"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Preguntas Frecuentes
								</a>
							</li>
						</ul>
					</div>

					{/* Col 4: Contacto */}
					<div className="space-y-2.5">
						<h3 className="text-[11px] font-semibold tracking-wider text-[#f5f5f7] uppercase font-mono">
							Contacto
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#contacto"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Pedir Presupuesto
								</a>
							</li>
							<li>
								<a
									href="https://wa.me/34600000000"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									WhatsApp Directo
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/jf.drone_visual"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									Instagram (@jf.drone_visual)
								</a>
							</li>
							<li>
								<a
									href="mailto:contacto@jfdronevision.com"
									className="text-[#a1a1a6] hover:text-white transition-colors"
								>
									contacto@jfdronevision.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* ── 4. LÍNEA INFERIOR DE COPYRIGHT & LEGAL (Apple.com Sub-footer) ── */}
				<div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px] text-[#86868b]">
					<div>
						Copyright © {new Date().getFullYear()} JF.DroneVision. Todos los
						derechos reservados.
					</div>

					<div className="flex flex-wrap items-center gap-x-4 gap-y-1">
						<Link
							href="/aviso-legal"
							className="text-[#a1a1a6] hover:text-white transition-colors cursor-pointer"
						>
							Aviso Legal
						</Link>
						<span>|</span>
						<Link
							href="/aviso-legal"
							className="text-[#a1a1a6] hover:text-white transition-colors cursor-pointer"
						>
							Política de Privacidad
						</Link>
						<span>|</span>
						<span className="text-[#a1a1a6]">España</span>
					</div>
				</div>
			</footer>
		</main>
	);
}
