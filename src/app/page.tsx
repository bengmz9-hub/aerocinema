import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutMe } from '@/components/AboutMe';
import { LayoutGrid } from '@/components/ui/layout-grid'; // Componente base de LayoutGrid
import { PortfolioAccordion } from '@/components/PortfolioAccordion';

// Importaciones dinámicas optimizadas para el rendimiento de las secciones pesadas
const OpticalTech = dynamic(
  () => import('@/components/OpticalTech').then((mod) => mod.OpticalTech),
  { loading: () => <div className="min-h-[80vh] bg-void-900/50 animate-pulse" /> }
);

const Stats = dynamic(
  () => import('@/components/Stats').then((mod) => mod.Stats),
  { loading: () => <div className="min-h-[40vh] bg-void-900/50 animate-pulse" /> }
);

const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection'),
  { loading: () => <div className="min-h-[60vh] bg-void-900/50 animate-pulse" /> }
);

// Contenido estructurado para el Bento Grid (LayoutGrid)
const bentoCards = [
  {
    id: 1,
    className: "md:col-span-2 h-[300px]",
    thumbnail: "/images/portfolio-paisajes.webp",
    content: (
      <div>
        <h4 className="font-cinzel text-xl font-bold text-white uppercase tracking-wider">Tomas de Horizonte Líquido</h4>
        <p className="font-sans text-xs text-zinc-400 mt-2">Filtrado óptico ND en acantilados costeros durante la hora dorada.</p>
      </div>
    ),
  },
  {
    id: 2,
    className: "col-span-1 h-[300px]",
    thumbnail: "/images/portfolio-propiedades-1.webp",
    content: (
      <div>
        <h4 className="font-cinzel text-xl font-bold text-white uppercase tracking-wider">Perspectiva Residencial</h4>
        <p className="font-sans text-xs text-zinc-400 mt-2">Planos cenitales geométricos para arquitectura e inmobiliaria de lujo.</p>
      </div>
    ),
  },
  {
    id: 3,
    className: "col-span-1 h-[300px]",
    thumbnail: "/images/portfolio-eventos.webp",
    content: (
      <div>
        <h4 className="font-cinzel text-xl font-bold text-white uppercase tracking-wider">Seguimiento Dinámico FPV</h4>
        <p className="font-sans text-xs text-zinc-400 mt-2">Vuelos de proximidad a alta velocidad en eventos masivos al aire libre.</p>
      </div>
    ),
  },
  {
    id: 4,
    className: "md:col-span-2 h-[300px]",
    thumbnail: "/images/portfolio-propiedades-2.webp",
    content: (
      <div>
        <h4 className="font-cinzel text-xl font-bold text-white uppercase tracking-wider">Inspección Estructural</h4>
        <p className="font-sans text-xs text-zinc-400 mt-2">Ortomosaicos y precisión técnica con drones industriales de alta gama.</p>
      </div>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black overflow-x-hidden">

      {/* ========== 01. HERO ========== */}
      <HeroSection />

      {/* ========== 02. SHOWCASE: CATEGORÍAS PRINCIPALES (ACORDEÓN) ========== */}
      {/* Primer impacto visual: El usuario descubre tus 4 pilares interactuando de forma fluida */}
      <div id="portfolio" className="scroll-mt-16 md:scroll-mt-24">
        <PortfolioAccordion />
      </div>

      {/* ========== 03. ARCHIVO DETALLADO: BENTO REJILLA (LAYOUTGRID) ========== */}
      {/* Justo debajo, el bento grid expande la experiencia permitiendo abrir detalles editoriales */}
      <section className="w-full bg-transparent pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10 px-4">
            <span className="w-12 h-px bg-white/20" />
            <span className="text-zinc-500 text-[10px] font-medium tracking-[0.3em] uppercase font-sans">
              GALERÍA DE DETALLE // BENTO MÓDULOS
            </span>
          </div>
          <div className="w-full min-h-[600px] relative">
            <LayoutGrid cards={bentoCards} />
          </div>
        </div>
      </section>

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
              { name: 'Instagram', url: 'https://www.instagram.com/jf.drone_visual' },
              { name: 'YouTube', url: 'https://youtube.com' },
              { name: 'Vimeo', url: 'https://vimeo.com' }
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
