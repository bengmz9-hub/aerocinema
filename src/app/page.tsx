import { HeroSection } from '@/components/HeroSection';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { AboutMe } from '@/components/AboutMe';
import { ServicesSection } from '@/components/ServicesSection';
import { OpticalTech } from '@/components/OpticalTech';
import { Stats } from '@/components/Stats';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* ========== HERO ========== */}
      <HeroSection />

      {/* ========== PORTFOLIO GRID ========== */}
      <PortfolioGrid />

      {/* ========== ABOUT ME / OPERADOR ========== */}
      <AboutMe />

      {/* ========== SERVICIOS INTERACTIVOS ========== */}
      <ServicesSection />

      {/* ========== HARDWARE & CAPTURA ========== */}
      <OpticalTech />

      {/* ========== STATS ========== */}
      <Stats />

      {/* ========== FOOTER ========== */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/[0.08] max-w-7xl mx-auto font-light font-montserrat">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <span className="text-white font-cinzel font-bold tracking-widest text-sm">
            AERO<span className="font-normal text-white/50">CINEMA</span>
          </span>
          <p>&copy; 2026 AeroCinema. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            {['Instagram', 'YouTube', 'Vimeo'].map((social) => (
              <a 
                key={social} 
                href={`https://${social.toLowerCase()}.com`} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Visita nuestro canal de ${social}`}
                className="hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
