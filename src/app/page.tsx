import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/HeroSection';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { AboutMe } from '@/components/AboutMe';
import { ServicesSection } from '@/components/ServicesSection';

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

export default function HomePage() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* ========== HERO ========== */}
      <HeroSection />

      {/* ========== PORTFOLIO GRID (01) ========== */}
      <div id="portfolio" className="scroll-mt-16 md:scroll-mt-24">
        <PortfolioGrid />
      </div>

      {/* ========== SERVICIOS & OPTICAL TECH (02) ========== */}
      <div id="servicios" className="scroll-mt-16 md:scroll-mt-24">
        <ServicesSection />
        <OpticalTech />
      </div>

      {/* ========== OPERADOR ACREDITADO & STATS (03) ========== */}
      <div id="operador" className="scroll-mt-16 md:scroll-mt-24">
        <AboutMe />
        <Stats />
      </div>

      {/* ========== CONTACTO EXPANDIBLE ========== */}
      <div id="contacto" className="scroll-mt-16 md:scroll-mt-24">
        <ContactSection />
      </div>

      {/* ========== FOOTER ========== */}
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
