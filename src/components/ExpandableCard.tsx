"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  // Gestión de eventos y bloqueo de scroll en el fondo
  React.useEffect(() => {
    if (!active) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(false);
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] sm:p-4">
            
            {/* Backdrop de fondo (Fundido suave) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md h-full w-full z-0"
              onClick={() => setActive(false)}
            />

            {/* Tarjeta Expandida (Animación de escala limpia sin layoutId) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              ref={cardRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`card-title-${id}`}
              className={cn(
                "w-full max-w-[650px] h-[100vh] sm:h-auto sm:max-h-[90vh] flex flex-col overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] rounded-none sm:rounded-3xl bg-zinc-950 border border-white/[0.08] relative z-10",
                classNameExpanded,
              )}
              {...props}
            >
              {/* Imagen de Cabecera */}
              <div className="relative shrink-0 overflow-hidden">
                <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:h-[80px] before:z-20 before:bg-gradient-to-t before:from-zinc-950 before:to-transparent">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-72 sm:h-80 object-cover object-center"
                  />
                </div>
              </div>

              {/* Contenido Técnico */}
              <div className="relative flex-1 bg-zinc-950 p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase mb-1">
                      {description}
                    </p>
                    <h3 id={`card-title-${id}`} className="font-cinzel font-bold text-white text-xl sm:text-3xl uppercase tracking-wide">
                      {title}
                    </h3>
                  </div>
                  
                  {/* Botón Cerrar */}
                  <button
                    aria-label="Close card"
                    className="h-9 w-9 shrink-0 flex items-center justify-center rounded-full bg-zinc-900 text-white/70 hover:bg-zinc-800 hover:text-white border border-white/10 transition-colors duration-300 focus:outline-none cursor-pointer"
                    onClick={() => setActive(false)}
                  >
                    <div className="rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Detalles específicos */}
                <div className="text-zinc-400 text-sm sm:text-base pb-6 flex flex-col gap-4 font-light font-montserrat leading-relaxed">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Disparador de la Tarjeta (Rejilla Estática) */}
      <button
        onClick={() => setActive(true)}
        className={cn(
          "p-3 flex flex-col items-center bg-zinc-950 rounded-2xl cursor-pointer border border-white/[0.04] hover:border-white/[0.1] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 text-left w-full max-w-[290px] group",
          className,
        )}
      >
        <div className="flex gap-4 flex-col w-full">
          <div className="overflow-hidden rounded-lg w-full aspect-[4/3]">
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
          
          <div className="flex justify-between items-center px-1">
            <div className="flex flex-col">
              <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                {description}
              </span>
              <h3 className="text-white font-cinzel font-bold text-xs tracking-wide mt-1 uppercase">
                {title}
              </h3>
            </div>
            
            <div className="h-7 w-7 shrink-0 flex items-center justify-center rounded-full bg-zinc-900/60 text-white/50 border border-white/10 group-hover:text-white group-hover:border-white/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
