"use client";
import { motion } from "framer-motion";
import type React from "react";
import { cn } from "@/lib/utils";

/**
 * LampSectionDivider - Adaptación cinemática de la lámpara (Opción A).
 * Sirve como transición suave y elegante entre secciones sin iluminar hacia arriba ni romper la estética.
 * Utiliza el dorado/amarillo característico del sitio (#dfd0a4 / #f0e6c8).
 */
export const LampContainer = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"absolute top-0 inset-x-0 h-16 flex flex-col items-center justify-start overflow-hidden w-full z-20 pointer-events-none select-none",
				className,
			)}
		>
			<div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
				{/* Cono Izquierdo - Proyección sutil hacia abajo (opacity 0.09) */}
				<motion.div
					initial={{ opacity: 0.03, width: "24rem" }}
					whileInView={{ opacity: 0.09, width: "42rem" }}
					transition={{
						delay: 0.1,
						duration: 1.0,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto right-1/2 h-16 overflow-visible w-[42rem] bg-gradient-conic from-[#dfd0a4]/09 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
				/>

				{/* Cono Derecho - Proyección sutil hacia abajo (opacity 0.09) */}
				<motion.div
					initial={{ opacity: 0.03, width: "24rem" }}
					whileInView={{ opacity: 0.09, width: "42rem" }}
					transition={{
						delay: 0.1,
						duration: 1.0,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto left-1/2 h-16 w-[42rem] bg-gradient-conic from-transparent via-transparent to-[#dfd0a4]/09 text-white [--conic-position:from_290deg_at_center_top]"
				/>

				{/* Haz fino horizontal superior del foco central */}
				<motion.div
					initial={{ width: "12rem" }}
					whileInView={{ width: "36rem" }}
					transition={{ delay: 0.1, duration: 1.0, ease: "easeInOut" }}
					className="absolute inset-auto top-0 z-30 h-[1px] w-[36rem] bg-[#dfd0a4]/18"
				/>

				{/* Baño de iluminación sutil centrado únicamente sobre la lámpara (opacity 0.09) */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-20 bg-gradient-to-b from-[#dfd0a4]/09 via-[#dfd0a4]/02 to-transparent pointer-events-none" />
			</div>

			{/* Contenido descendente opcional */}
			{children && (
				<div className="relative z-50 flex flex-col items-center px-5">
					{children}
				</div>
			)}
		</div>
	);
};

export function LampDemo() {
	return (
		<LampContainer>
			<motion.h1
				initial={{ opacity: 0.5, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="mt-4 bg-gradient-to-b from-[#ffffff] via-[#f0e6c8] to-[#dfd0a4] py-2 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-6xl"
			>
				Build lamps <br /> the right way
			</motion.h1>
		</LampContainer>
	);
}
