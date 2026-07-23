"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
	text: string;
	className?: string;
	delay?: number;
	duration?: number;
	stagger?: number;
	as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function BlurText({
	text,
	className,
	delay = 0,
	duration = 0.5,
	stagger = 0.05,
	as: Component = "h2",
}: BlurTextProps) {
	const prefersReducedMotion = useReducedMotion();
	const words = text.split(" ");

	if (prefersReducedMotion) {
		return <Component className={className}>{text}</Component>;
	}

	return (
		<Component className={cn("inline-flex flex-wrap gap-[0.25em]", className)}>
			{words.map((word, wordIndex) => (
				<motion.span
					// biome-ignore lint/suspicious/noArrayIndexKey: animated static text list key
					key={`${word}-${wordIndex}`}
					initial={{ filter: "blur(12px)", opacity: 0, y: 12 }}
					whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{
						duration,
						delay: delay + wordIndex * stagger,
						ease: [0.25, 0.46, 0.45, 0.94],
					}}
					className="inline-block"
				>
					{word}
				</motion.span>
			))}
		</Component>
	);
}
