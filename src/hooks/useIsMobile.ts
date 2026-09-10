"use client";

import { useEffect, useState } from "react";

/**
 * Hook para detectar de forma limpia si el viewport corresponde a un dispositivo móvil.
 * Utiliza window.matchMedia con escucha reactiva a cambios de orientación o tamaño.
 */
export function useIsMobile(breakpoint = 768): boolean {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
		const updateMatch = (e: MediaQueryListEvent | MediaQueryList) => {
			setIsMobile(e.matches);
		};

		// Estado inicial
		setIsMobile(mediaQuery.matches);

		// Listener reactivo moderno
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener("change", updateMatch);
			return () => mediaQuery.removeEventListener("change", updateMatch);
		}

		// Fallback para navegadores antiguos
		mediaQuery.addListener(updateMatch);
		return () => mediaQuery.removeListener(updateMatch);
	}, [breakpoint]);

	return isMobile;
}
