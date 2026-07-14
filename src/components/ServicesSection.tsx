'use client';

import React from 'react';
import { ExpandableCard } from './ExpandableCard';

const SERVICES_DATA = [
  {
    title: "Inmobiliaria de Lujo",
    description: "01 // VILLAS & PROMO",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    details: (
      <div className="space-y-4">
        <p>
          Vídeo aéreo dinámico diseñado específicamente para agencias exclusivas y promotoras de alto standing. Geolocalizamos la propiedad en su entorno, destacando accesos, parcelas y la arquitectura exterior.
        </p>
        <div className="border-t border-white/10 pt-4 mt-4">
          <h5 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Entregables Técnicos</h5>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
            <li>Planos recurso en 4K ProRes / D-Log</li>
            <li>Ortomosaicos y perspectiva de linderos sutil</li>
            <li>Edición rítmica adaptada a RRSS e inmobiliarias</li>
            <li>Fotografías HDR editadas en Lightroom</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Hoteles & Resorts",
    description: "02 // TURISMO PREMIUM",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200",
    details: (
      <div className="space-y-4">
        <p>
          Capturas en hora dorada que muestran la magnitud de resorts, alojamientos singulares, hoteles boutique y paisajes de ensueño. Elevamos la conversión visual para reservas directas en web y redes.
        </p>
        <div className="border-t border-white/10 pt-4 mt-4">
          <h5 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Entregables Técnicos</h5>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
            <li>Vuelos fluidos en interiores (CineWhoop si es viable)</li>
            <li>Planos recurso del entorno natural y servicios</li>
            <li>Corrección de color y etalonaje de marca</li>
            <li>Formato horizontal y vertical optimizado</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Corporativo & Spots",
    description: "03 // BRAND CONTENT",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    details: (
      <div className="space-y-4">
        <p>
          Contenido aéreo de apoyo para anuncios, campañas de posicionamiento de marca, vídeos corporativos y spots industriales. Perfil de color profesional listo para su integración con cámaras de tierra.
        </p>
        <div className="border-t border-white/10 pt-4 mt-4">
          <h5 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Entregables Técnicos</h5>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
            <li>Grabación nativa a 10 bits en perfiles planos</li>
            <li>Coordinación directa con directores de fotografía</li>
            <li>Entrega de copias en bruto organizadas por códigos de tiempo</li>
            <li>Ópticas optimizadas según el look requerido</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Cobertura de Eventos",
    description: "04 // REELS CINEMÁTICOS",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    details: (
      <div className="space-y-4">
        <p>
          Documentación de festivales, eventos corporativos al aire libre, y competiciones deportivas con perspectivas imposibles. Máxima seguridad operativa garantizada.
        </p>
        <div className="border-t border-white/10 pt-4 mt-4">
          <h5 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Entregables Técnicos</h5>
          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
            <li>Transmisiones en tiempo real o grabación rápida</li>
            <li>Montaje exprés de Reels / Shorts post-evento</li>
            <li>Sistemas redundantes de seguridad en vuelo</li>
            <li>Operación estricta bajo escenarios urbanos (STS-01)</li>
          </ul>
        </div>
      </div>
    )
  }
];

export function ServicesSection() {
  return (
    <section className="w-full bg-transparent py-24 px-4 md:px-8 relative z-30 overflow-x-clip overflow-y-visible">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de la Sección */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-white/20" />
            <span className="text-zinc-500 text-[10px] font-medium tracking-[0.3em] uppercase font-montserrat">
              ESPECIFICACIONES DE SERVICIO
            </span>
            <span className="w-8 h-px bg-white/20" />
          </div>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight uppercase">
            SOLUCIONES DE CINE AÉREO
          </h2>
          <p className="mt-4 font-montserrat font-light text-zinc-400 text-sm max-w-xl leading-relaxed">
            Haz clic en cualquiera de nuestras divisiones operativas para desplegar especificaciones técnicas, metodologías y entregables estándar.
          </p>
        </div>

        {/* Grilla de Tarjetas Expandibles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {SERVICES_DATA.map((service, index) => (
            <ExpandableCard
              key={index}
              title={service.title}
              description={service.description}
              src={service.src}
              className="w-full"
            >
              {service.details}
            </ExpandableCard>
          ))}
        </div>

      </div>
    </section>
  );
}
