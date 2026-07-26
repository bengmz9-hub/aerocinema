"use client";

import Link from "next/link";

export default function NotFound() {
	return (
		<section className="relative w-full min-h-[calc(100vh-88px)] bg-neutral-950 overflow-hidden flex items-center justify-center select-none">
			{/* Grano analógico (misma técnica que HeroSection) */}
			<div
				className="pointer-events-none absolute inset-0 z-10 opacity-[0.015] mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
				aria-hidden="true"
			/>

			{/* Radar de búsqueda animado (CSS-only) */}
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
				<div className="relative w-72 h-72 md:w-96 md:h-96">
					{/* Anillos de radar pulsantes */}
					<div
						className="absolute inset-0 rounded-full border border-amber-500/10 animate-ping"
						style={{ animationDuration: "3s" }}
					/>
					<div
						className="absolute inset-4 rounded-full border border-amber-500/15 animate-ping"
						style={{ animationDuration: "3s", animationDelay: "0.5s" }}
					/>
					<div
						className="absolute inset-8 rounded-full border border-amber-500/20 animate-ping"
						style={{ animationDuration: "3s", animationDelay: "1s" }}
					/>
					<div
						className="absolute inset-12 rounded-full border border-amber-500/25 animate-ping"
						style={{ animationDuration: "3s", animationDelay: "1.5s" }}
					/>

					{/* Línea de barrido (scan line) */}
					<div className="absolute inset-0 rounded-full overflow-hidden">
						<div
							className="absolute inset-0 opacity-20"
							style={{
								background:
									"conic-gradient(from 0deg, transparent 0deg, #d4af37 320deg, transparent 360deg)",
								animation: "spin 4s linear infinite",
							}}
						/>
					</div>

					{/* Centro: cruz de mira HUD */}
					<div className="absolute inset-[calc(50%-20px)] flex items-center justify-center">
						<div className="relative w-10 h-10">
							<div className="absolute top-1/2 left-0 w-full h-px bg-amber-400/60" />
							<div className="absolute left-1/2 top-0 h-full w-px bg-amber-400/60" />
							<div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
						</div>
					</div>
				</div>
			</div>

			{/* Contenido editorial */}
			<div className="relative z-20 max-w-2xl mx-auto px-6 text-center">
				{/* Indicador de señal */}
				<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-amber-500/25 mb-8 backdrop-blur-md">
					<span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
					<span className="font-mono text-[9px] tracking-[0.25em] text-red-300/90 uppercase font-semibold">
						SEÑAL PERDIDA • ERROR 404
					</span>
				</div>

				{/* Código de error (estilo coordenadas) */}
				<p className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 mb-4">
					COORDENADAS FUERA DE COBERTURA
				</p>

				{/* Título principal */}
				<h1 className="font-cinzel text-[clamp(2.5rem,5vw+1rem,5rem)] font-bold tracking-tight text-golden-hour leading-[1.02] uppercase drop-shadow-2xl [text-wrap:balance]">
					Ruta no
					<br />
					encontrada
				</h1>

				{/* Subtítulo */}
				<p className="mt-4 font-jakarta font-light text-neutral-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed tracking-wide [text-wrap:pretty]">
					La página que buscas no está en nuestro espacio aéreo. Pudo haber sido
					movida, eliminada o la URL está mal escrita.
				</p>

				{/* Botón Volver al inicio */}
				<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Link
						href="/"
						className="block w-full sm:w-auto text-center px-9 py-3.5 bg-white text-black font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-neutral-200 transition-colors duration-300 cursor-pointer shadow-lg shadow-white/5"
					>
						VOLVER AL INICIO
					</Link>
					<Link
						href="/#contacto"
						className="block w-full sm:w-auto text-center px-9 py-3.5 bg-transparent text-white border border-white/20 font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer"
					>
						HABLAR CON JOSE
					</Link>
				</div>

				{/* Footnotes técnico */}
				<p className="mt-8 font-mono text-[8px] tracking-[0.3em] text-zinc-600 uppercase">
					L'Hospitalet · Barcelona · Operador AESA
				</p>
			</div>
		</section>
	);
}
