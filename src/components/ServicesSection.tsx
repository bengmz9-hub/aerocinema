"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
	ArrowUpRight,
	CircuitBoard,
	type LucideIcon,
	Radio,
} from "lucide-react";
import {
	type AccentType,
	type ServiceItem,
	type SpanType,
	servicesItems,
} from "@/data/servicesData";
import { cn } from "@/lib/utils";

const SPAN_CLASSES: Record<SpanType, string> = {
	large: "md:col-span-2 md:row-span-2",
	wide: "md:col-span-2 md:row-span-1",
	tall: "md:col-span-1 md:row-span-2",
	default: "md:col-span-1 md:row-span-1",
};

interface AccentStyle {
	border: string;
	glow: string;
	text: string;
	corner: string;
	hoverBorder: string;
	hoverGlow: string;
	iconBg: string;
	iconText: string;
	metricText: string;
	statusBar: string;
}

const accentStyles: Record<AccentType, AccentStyle> = {
	cyan: {
		border: "border-cyan-500/20",
		glow: "shadow-[0_0_25px_rgba(6,182,212,0.03)]",
		text: "text-cyan-400",
		corner: "border-cyan-500/50",
		hoverBorder: "hover:border-cyan-400/50",
		hoverGlow: "hover:shadow-[0_0_35px_rgba(6,182,212,0.1)]",
		iconBg: "bg-cyan-500/5",
		iconText: "text-cyan-400",
		metricText: "text-cyan-400/60",
		statusBar: "bg-cyan-400",
	},
	titanium: {
		border: "border-white/[0.04]",
		glow: "shadow-[0_0_20px_rgba(255,255,255,0.01)]",
		text: "text-white",
		corner: "border-white/20",
		hoverBorder: "hover:border-white/20",
		hoverGlow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]",
		iconBg: "bg-white/[0.01]",
		iconText: "text-zinc-400 group-hover:text-white",
		metricText: "text-zinc-400/60",
		statusBar: "bg-zinc-400",
	},
	zinc: {
		border: "border-zinc-800/50",
		glow: "shadow-none",
		text: "text-zinc-300",
		corner: "border-zinc-700",
		hoverBorder: "hover:border-zinc-500/30",
		hoverGlow: "hover:shadow-[0_0_30px_rgba(161,161,170,0.04)]",
		iconBg: "bg-zinc-900/20",
		iconText: "text-zinc-500 group-hover:text-zinc-300",
		metricText: "text-zinc-500/70",
		statusBar: "bg-zinc-600",
	},
};

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.04 },
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 12 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" },
	},
};

function ServiceCard({ item }: { item: ServiceItem }) {
	const prefersReducedMotion = useReducedMotion();
	const style = accentStyles[item.accent] || accentStyles.zinc;
	const spanClass = SPAN_CLASSES[item.span] || SPAN_CLASSES.default;
	const Icon: LucideIcon = item.icon;
	const isLarge = item.span === "large";

	return (
		<motion.article
			variants={itemVariants}
			whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
			transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
			role="listitem"
			tabIndex={0}
			aria-labelledby={`service-${item.id}`}
			className={cn(
				"group relative flex flex-col overflow-hidden rounded-xl border bg-[#0f1115]/80 specular-card",
				"backdrop-blur-md p-6 md:p-7 justify-between",
				"transition-all duration-500 ease-out",
				"cursor-pointer transform-gpu",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50",
				"min-h-[220px]",
				spanClass,
				style.border,
				style.glow,
				style.hoverBorder,
				style.hoverGlow,
			)}
		>
			{/* 📹 REPRODUCTOR WEB M LOCAL (Siempre visible al 100%, zoom elástico reactivo en hover) */}
			<div className="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden rounded-xl">
				<video
					src={item.videoUrl}
					autoPlay
					loop
					muted
					playsInline
					preload="auto"
					className="w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
				/>
			</div>

			{/* 🖤 DEGRADADO CINEMÁTICO INFERIOR (z-10): Invisible arriba para conservar brillo, opaco abajo en la fuente */}
			<div
				className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-10 pointer-events-none"
				aria-hidden="true"
			/>

			{/* Brackets HUD (z-20) */}
			<div
				className={cn(
					"absolute -top-px -left-px w-3 h-3 border-t border-l opacity-40 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-300 z-20",
					style.corner,
				)}
				aria-hidden="true"
			/>
			<div
				className={cn(
					"absolute -top-px -right-px w-3 h-3 border-t border-r opacity-40 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-300 z-20",
					style.corner,
				)}
				aria-hidden="true"
			/>
			<div
				className={cn(
					"absolute -bottom-px -left-px w-3 h-3 border-b border-l opacity-40 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-300 z-20",
					style.corner,
				)}
				aria-hidden="true"
			/>
			<div
				className={cn(
					"absolute -bottom-px -right-px w-3 h-3 border-b border-r opacity-40 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-300 z-20",
					style.corner,
				)}
				aria-hidden="true"
			/>

			{/* Sensor Laser LiDAR (z-20) */}
			<div
				className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/[0.015] to-cyan-500/0 opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-full transition-all duration-1000 ease-in-out pointer-events-none z-20 motion-reduce:group-hover:opacity-0"
				aria-hidden="true"
			/>

			{/* Retícula HUD (z-10) */}
			<div
				className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.004)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.004)_1px,transparent_1px)] bg-[size:32px_32px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-10"
				aria-hidden="true"
			/>

			{/* Telemetría (z-20) */}
			<div className="relative flex items-center justify-between z-20">
				<div className="flex items-center gap-2">
					<div
						className={cn(
							"h-1 w-1 rounded-full animate-pulse motion-reduce:animate-none",
							style.statusBar,
						)}
						aria-hidden="true"
					/>
					<span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">
						{item.index}
					</span>
				</div>
				<span
					className={cn(
						"font-mono text-[9px] uppercase tracking-wider",
						style.metricText,
					)}
				>
					{item.metrics}
				</span>
			</div>

			{/* Icono (z-20) */}
			<div className="mt-5 relative z-20">
				<div
					className={cn(
						"inline-flex items-center justify-center rounded-lg border backdrop-blur-sm transition-colors duration-500 group-hover:border-cyan-500/20",
						style.iconBg,
						style.border,
						isLarge ? "h-10 w-10" : "h-8 w-8",
					)}
				>
					<Icon
						className={cn(
							"transition-colors duration-500",
							style.iconText,
							isLarge ? "h-4.5 w-4.5" : "h-4 w-4",
						)}
						strokeWidth={1.25}
						aria-hidden="true"
					/>
				</div>
			</div>

			{/* Contenido Editorial con Contraste Reforzado (z-20) */}
			<div className="flex flex-1 flex-col justify-end mt-4 relative z-20">
				<h3
					id={`service-${item.id}`}
					className={cn(
						"font-cinzel font-bold tracking-wide text-white uppercase group-hover:translate-x-1 transition-transform duration-300",
						isLarge ? "text-xl md:text-2xl" : "text-base",
					)}
				>
					{item.title}
				</h3>
				{item.subtitle && (
					<p className="font-sans text-[10px] text-zinc-300 font-semibold tracking-wide mt-0.5 uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
						{item.subtitle}
					</p>
				)}
				<p
					className={cn(
						"font-sans mt-2 text-zinc-200 font-medium leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-colors duration-500 group-hover:text-white",
						isLarge ? "text-sm max-w-md md:text-[14px]" : "text-xs",
					)}
				>
					{item.description}
				</p>

				{/* Inicializar Misión (z-20) */}
				<div className="mt-4 flex items-center gap-1.5 text-cyan-400/0 opacity-0 transition-all duration-300 group-hover:text-cyan-400 group-hover:opacity-100 motion-reduce:group-hover:opacity-0">
					<span className="font-mono text-[9px] uppercase tracking-[0.2em]">
						INITIALIZE CAPABILITY
					</span>
					<ArrowUpRight
						className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
						strokeWidth={1.5}
					/>
				</div>
			</div>
		</motion.article>
	);
}

export function ServicesSection() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<section
			className="relative w-full bg-transparent py-24 md:py-32 border-t border-white/[0.06] overflow-hidden"
			aria-labelledby="services-heading"
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-30"
				style={{
					backgroundImage:
						"radial-gradient(circle at 15% 10%, rgba(255,255,255,0.03), transparent 45%)",
				}}
				aria-hidden="true"
			/>
			<div className="relative mx-auto max-w-7xl px-4 md:px-8">
				{/* Cabecera Principal */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/[0.06] pb-8">
					<div>
						<div className="flex items-center gap-3 mb-3">
							<CircuitBoard
								className="h-4 w-4 text-cyan-500"
								aria-hidden="true"
							/>
							<span
								id="services-heading"
								className="text-zinc-500 text-[10px] font-medium tracking-[0.3em] uppercase font-sans"
							>
								SERVICIOS OPERATIVOS {"//"} MATRIX CAPABILITIES
							</span>
						</div>
						<h2 className="font-cinzel text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
							Technical{" "}
							<span className="text-cyan-400 font-light">Capabilities</span>
						</h2>
					</div>

					<div className="flex items-center gap-6 font-mono text-[10px] text-zinc-500 tracking-widest border-l border-white/10 pl-6 h-10">
						<div>
							SYSTEM_STATUS: <span className="text-cyan-400">OPERATIONAL</span>
						</div>
						<div className="hidden sm:block">
							FLEET_AVAL: <span className="text-cyan-400">100%</span>
						</div>
					</div>
				</div>

				{/* Grid Bento Fluido */}
				<motion.div
					variants={prefersReducedMotion ? undefined : containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					className={cn(
						"grid grid-cols-1 gap-4.5 auto-rows-fr",
						"md:grid-cols-4 md:auto-rows-[220px]",
					)}
					role="list"
				>
					{servicesItems.map((item) => (
						<ServiceCard key={item.id} item={item} />
					))}
				</motion.div>

				{/* Telemetría Inferior */}
				<div className="mt-12 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-white/[0.04] pt-6">
					<div className="flex items-center gap-2">
						<Radio
							className="h-3.5 w-3.5 text-cyan-500 animate-pulse"
							aria-hidden="true"
						/>
						<span className="font-mono text-[10px] text-zinc-500 tracking-[0.15em]">
							SECURE_LINK {"//"} OPTICAL_FEED_ONLINE
						</span>
					</div>
					<div className="flex items-center gap-4 font-mono text-[9px] text-zinc-600 tracking-widest">
						<span>LAT: 41.3597° N</span>
						<span>LONG: 2.1002° E</span>
					</div>
				</div>
			</div>
		</section>
	);
}
