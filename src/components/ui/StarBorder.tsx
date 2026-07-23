import type React from "react";
import { cn } from "@/lib/utils";

interface StarBorderProps {
	children: React.ReactNode;
	className?: string;
	color?: string;
	speed?: string;
	thickness?: string;
}

export function StarBorder({
	children,
	className,
	color = "#d4af37", // Color de acento ámbar/dorado (golden hour)
	speed = "8s",
	thickness = "1px",
}: StarBorderProps) {
	return (
		<div
			className={cn(
				"relative p-[var(--thickness)] overflow-hidden rounded-xl bg-zinc-950/40",
				className,
			)}
			style={
				{
					"--thickness": thickness,
				} as React.CSSProperties
			}
		>
			<div
				className="absolute inset-0 w-[200%] h-[200%] -top-[50%] -left-[50%] z-0"
				style={{
					background: `conic-gradient(from 0deg, transparent 0deg, transparent 280deg, ${color} 360deg)`,
					animation: `spin ${speed} linear infinite`,
				}}
			/>
			<div className="relative z-10 w-full h-full rounded-[inherit] bg-neutral-950/90 backdrop-blur-md">
				{children}
			</div>
		</div>
	);
}
