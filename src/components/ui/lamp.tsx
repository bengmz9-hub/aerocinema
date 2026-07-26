"use client";
import React from "react";
import { motion } from "framer-motion";
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
				"relative flex min-h-[14rem] md:min-h-[18rem] flex-col items-center justify-start overflow-hidden bg-[#000000] w-full z-10 pointer-events-none select-none",
				className
			)}
		>
			{/* 1. Fundido superior transparente para evitar cualquier corte o reflejo en la sección previa */}
			<div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#000000] to-transparent z-40" />

			<div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
				{/* Cono Izquierdo - Dorado/Amarillo cinemático */}
				<motion.div
					initial={{ opacity: 0.4, width: "12rem" }}
					whileInView={{ opacity: 0.85, width: "26rem" }}
					transition={{
						delay: 0.2,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto right-1/2 h-36 overflow-visible w-[26rem] bg-gradient-conic from-[#dfd0a4] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
				>
					<div className="absolute w-[100%] right-0 bg-[#000000] h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
					<div className="absolute w-40 h-[100%] right-0 bg-[#000000] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
				</motion.div>

				{/* Cono Derecho - Dorado/Amarillo cinemático */}
				<motion.div
					initial={{ opacity: 0.4, width: "12rem" }}
					whileInView={{ opacity: 0.85, width: "26rem" }}
					transition={{
						delay: 0.2,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto left-1/2 h-36 w-[26rem] bg-gradient-conic from-transparent via-transparent to-[#dfd0a4] text-white [--conic-position:from_290deg_at_center_top]"
				>
					<div className="absolute w-40 h-[100%] left-0 bg-[#000000] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
					<div className="absolute w-[100%] left-0 bg-[#000000] h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
				</motion.div>

				{/* Difuminados de ambiente dorado y halo nocturno */}
				<div className="absolute top-1/2 h-28 w-full translate-y-8 scale-x-150 bg-[#000000] blur-2xl"></div>
				<div className="absolute top-1/2 z-50 h-28 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
				<div className="absolute inset-auto z-50 h-24 w-[22rem] -translate-y-1/2 rounded-full bg-[#dfd0a4] opacity-25 blur-3xl"></div>

				{/* Haz fino brillante amarillo (#f0e6c8) */}
				<motion.div
					initial={{ width: "6rem" }}
					whileInView={{ width: "15rem" }}
					transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
					className="absolute inset-auto z-30 h-0.5 w-[15rem] -translate-y-[4.5rem] bg-[#f0e6c8] shadow-[0_0_12px_#dfd0a4]"
				></motion.div>

				{/* Cubierta superior para bloquear dispersión superior */}
				<div className="absolute inset-auto z-40 h-28 w-full -translate-y-[10rem] bg-[#000000]"></div>
			</div>

			{/* Contenido descendente que proyecta iluminación hacia la sección inferior */}
			<div className="relative z-50 flex flex-col items-center px-5 -translate-y-8">
				{children}
			</div>

			{/* Baño suave de luz inferior que se vierte en la sección contigua */}
			<div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-transparent via-[#dfd0a4]/5 to-transparent pointer-events-none" />
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
