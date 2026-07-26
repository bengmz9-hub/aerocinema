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
				"relative flex h-20 md:h-28 flex-col items-center justify-center overflow-hidden w-full z-10 pointer-events-none select-none my-0",
				className,
			)}
		>
			<div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
				{/* Cono Izquierdo - Ultra tenue y extra ancho */}
				<motion.div
					initial={{ opacity: 0.05, width: "20rem" }}
					whileInView={{ opacity: 0.18, width: "38rem" }}
					transition={{
						delay: 0.1,
						duration: 1.0,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto right-1/2 h-20 overflow-visible w-[38rem] bg-gradient-conic from-[#dfd0a4]/30 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
				/>

				{/* Cono Derecho - Ultra tenue y extra ancho */}
				<motion.div
					initial={{ opacity: 0.05, width: "20rem" }}
					whileInView={{ opacity: 0.18, width: "38rem" }}
					transition={{
						delay: 0.1,
						duration: 1.0,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto left-1/2 h-20 w-[38rem] bg-gradient-conic from-transparent via-transparent to-[#dfd0a4]/30 text-white [--conic-position:from_290deg_at_center_top]"
				/>

				{/* Resplandor cenital difuminado ambiental ultra tenue y ancho */}
				<div className="absolute inset-auto z-20 h-14 w-[32rem] -translate-y-2 rounded-full bg-[#dfd0a4] opacity-05 blur-3xl"></div>

				{/* Haz fino brillante amarillo ultra suave y expandido (#f0e6c8) */}
				<motion.div
					initial={{ width: "10rem" }}
					whileInView={{ width: "28rem" }}
					transition={{ delay: 0.1, duration: 1.0, ease: "easeInOut" }}
					className="absolute inset-auto z-30 h-[1px] w-[28rem] -translate-y-4 bg-[#f0e6c8]/30 shadow-[0_0_10px_rgba(223,208,164,0.15)]"
				></motion.div>
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
