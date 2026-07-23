"use client";

import { useEffect, useRef } from "react";

interface Particle {
	x: number;
	y: number;
	size: number;
	speedX: number;
	speedY: number;
	opacity: number;
	pulseSpeed: number;
}

export function HeroParticles() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;
		const containerWidth =
			canvas.parentElement?.clientWidth || window.innerWidth;
		const containerHeight =
			canvas.parentElement?.clientHeight || window.innerHeight;

		canvas.width = containerWidth;
		canvas.height = containerHeight;

		let width = containerWidth;
		let height = containerHeight;

		const handleResize = () => {
			if (!canvas) return;
			const w = canvas.parentElement?.clientWidth || window.innerWidth;
			const h = canvas.parentElement?.clientHeight || window.innerHeight;
			canvas.width = w;
			canvas.height = h;
			width = w;
			height = h;
		};

		window.addEventListener("resize", handleResize);

		// Crear conjunto de partículas cinemáticas (polvo atmosférico + waypoints aéreos)
		const particleCount = Math.min(Math.floor((width * height) / 20000), 45);
		const particles: Particle[] = Array.from({ length: particleCount }, () => ({
			x: Math.random() * width,
			y: Math.random() * height,
			size: Math.random() * 1.5 + 0.5,
			speedX: (Math.random() - 0.5) * 0.25,
			speedY: (Math.random() - 0.5) * 0.25 - 0.1,
			opacity: Math.random() * 0.5 + 0.1,
			pulseSpeed: Math.random() * 0.02 + 0.005,
		}));

		let pulseTimer = 0;

		const render = () => {
			ctx.clearRect(0, 0, width, height);
			pulseTimer += 0.015;

			for (const p of particles) {
				p.x += p.speedX;
				p.y += p.speedY;

				// Reciclar posición cuando salen de límites
				if (p.x < 0) p.x = width;
				if (p.x > width) p.x = 0;
				if (p.y < 0) p.y = height;
				if (p.y > height) p.y = 0;

				// Cálculo de opacidad pulsante cinemática
				const sineVal = Math.sin(pulseTimer * p.pulseSpeed * 10);
				const currentOpacity = Math.max(
					0.05,
					Math.min(0.65, p.opacity + sineVal * 0.15),
				);

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(212, 175, 55, ${currentOpacity})`;
				ctx.shadowBlur = 8;
				ctx.shadowColor = "rgba(212, 175, 55, 0.4)";
				ctx.fill();
			}

			animationFrameId = requestAnimationFrame(render);
		};

		render();

		return () => {
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="pointer-events-none absolute inset-0 z-15 w-full h-full opacity-70 mix-blend-screen"
		/>
	);
}
