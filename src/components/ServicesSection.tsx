"use client";

import {
	motion,
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
} from "framer-motion";
import { ArrowUpRight, type LucideIcon, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { type ServiceItem, servicesItems } from "@/data/servicesData";

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
	const prefersReducedMotion = useReducedMotion();
	const Icon: LucideIcon = item.icon;

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
	const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

	const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
	const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		if (prefersReducedMotion) return;
		const rect = e.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		x.set(mouseX / width - 0.5);
		y.set(mouseY / height - 0.5);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.article
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				rotateX: prefersReducedMotion ? 0 : rotateX,
				rotateY: prefersReducedMotion ? 0 : rotateY,
				transformStyle: "preserve-3d",
				animationDelay: `${index * 120}ms`,
			}}
			whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
			transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
			tabIndex={0}
			aria-labelledby={`service-${item.id}`}
			className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d10]/90 specular-card select-none cursor-default backdrop-blur-xl p-6 md:p-8 transition-all duration-500 ease-out hover:border-gold-500/30 hover:shadow-[0_0_35px_rgba(223,208,164,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50 min-h-[420px] transform-gpu animate-blur-in"
		>
			{/* Video de fondo */}
			<div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
				<video
					src={item.videoUrl}
					autoPlay
					loop
					muted
					playsInline
					preload="auto"
					className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter saturate-[0.9]"
				/>
			</div>

			{/* Degradado cinematico */}
			<div
				className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/80 to-[#08090b]/40 z-10 pointer-events-none"
				aria-hidden="true"
			/>

			{/* HUD corners */}
			<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-gold-400/60 transition-colors z-20" />
			<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-gold-400/60 transition-colors z-20" />
			<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-gold-400/60 transition-colors z-20" />
			<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-gold-400/60 transition-colors z-20" />

			{/* Header */}
			<div className="relative z-20 flex items-start justify-between gap-4">
				<div className="flex items-center gap-2">
					<div className="p-2 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400">
						<Icon className="w-5 h-5" strokeWidth={1.5} />
					</div>
					<span className="font-mono text-[10px] tracking-[0.2em] text-gold-400/90 uppercase font-semibold">
						{item.index}
					</span>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-20 mt-6 flex-1 flex flex-col justify-end">
				<h3
					id={`service-${item.id}`}
					className="font-cormorant text-2xl md:text-3xl font-bold text-white uppercase tracking-wide leading-tight group-hover:text-gold-200 transition-colors"
				>
					{item.title}
				</h3>
				<p className="font-jakarta text-xs text-gold-300/80 font-medium tracking-wide mt-1 uppercase">
					{item.subtitle}
				</p>
				<p className="font-jakarta mt-3 text-zinc-300 text-xs md:text-sm font-light leading-relaxed">
					{item.description}
				</p>

				{/* Badge */}
				<div className="mt-5 pt-3 border-t border-white/[0.08]">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141820]/80 border border-white/10 backdrop-blur-md shadow-lg shadow-black/40 group-hover:border-gold-500/30 transition-colors">
						<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
						<span className="font-mono text-[9px] text-zinc-200 tracking-widest uppercase font-medium">
							{item.badge}
						</span>
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="relative z-20 mt-6">
				<Link href={item.ctaHref} className="btn-secondary group/btn">
					<span>{item.ctaText}</span>
					<ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
				</Link>
			</div>
		</motion.article>
	);
}

export function ServicesSection() {
	return (
		<section
			className="relative w-full bg-transparent pt-16 pb-16 md:pt-24 md:pb-24 border-t border-white/[0.06] overflow-hidden"
			aria-labelledby="services-heading"
		>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/[0.06] pb-8">
					<div>
						<div className="flex items-center gap-2.5 mb-3">
							<ShieldCheck
								className="h-4 w-4 text-gold-400"
								aria-hidden="true"
							/>
							<span
								id="services-heading"
								className="text-gold-300/80 text-[10px] font-medium tracking-[0.25em] uppercase font-mono"
							>
								SERVICIOS PRINCIPALES — L'HOSPITALET & BARCELONA
							</span>
						</div>
						<h2 className="font-cinzel-display text-3xl md:text-5xl font-bold text-white">
							¿En qué te puedo
							<span className="text-gold-400 italic"> ayudar</span>?
						</h2>
					</div>
					<p className="font-jakarta text-xs md:text-sm text-zinc-400 max-w-md font-light">
						Soluciones directas de grabación aérea para mostrar tu inmueble,
						empresa o negocio con permisos de vuelo AESA en regla.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{servicesItems.map((item, index) => (
						<ServiceCard key={item.id} item={item} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
