"use client";

import Link from "next/link";

export default function NotFound() {
	return (
		<section className="relative w-full min-h-[calc(100vh-88px)] bg-neutral-950 overflow-hidden flex items-center justify-center select-none">
			{/* Grano analógico */}
			<div
				className="pointer-events-none absolute inset-0 z-10 opacity-[0.02] mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
				aria-hidden="true"
			/>

			{/* Radar de búsqueda animado */}
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
				<div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
					{/* Anillos de radar pulsantes */}
					<div
						className="absolute inset-0 rounded-full border border-gold-500/10 animate-ping"
						style={{ animationDuration: "3s" }}
					/>
					<div
						className="absolute inset-6 rounded-full border border-gold-500/[0.12] animate-ping"
						style={{ animationDuration: "3s", animationDelay: "0.6s" }}
					/>
					<div
						className="absolute inset-12 rounded-full border border-gold-500/15 animate-ping"
						style={{ animationDuration: "3s", animationDelay: "1.2s" }}
					/>
					<div
						className="absolute inset-[60px] rounded-full border border-gold-500/20 animate-ping"
						style={{ animationDuration: "3s", animationDelay: "1.8s" }}
					/>
					<div
						className="absolute inset-24 rounded-full border border-gold-500/25 animate-ping"
						style={{ animationDuration: "3s", animationDelay: "2.4s" }}
					/>

					{/* Línea de barrido rotatoria */}
					<div className="absolute inset-0 rounded-full overflow-hidden">
						<div
							className="absolute inset-0"
							style={{
								background:
									"conic-gradient(from 0deg, transparent 0deg, rgba(212,175,55,0.35) 300deg, transparent 360deg)",
								animation: "spin 3s linear infinite",
							}}
						/>
					</div>

					{/* Rejilla HUD de fondo */}
					<div
						className="absolute inset-8 rounded-full opacity-[0.04]"
						style={{
							backgroundImage:
								"linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
							backgroundSize: "20px 20px",
						}}
					/>

					{/* Centro: cruz de mira HUD con glow */}
					<div className="absolute inset-[calc(50%-24px)] flex items-center justify-center">
						<div className="relative w-12 h-12">
							{/* Anillo exterior */}
							<div
								className="absolute inset-0 rounded-full border border-gold-400/40 animate-pulse"
								style={{ animationDuration: "2s" }}
							/>
							{/* Líneas de mira */}
							<div className="absolute top-1/2 left-0 w-full h-px bg-gold-400/80 shadow-[0_0_6px_rgba(223,208,164,0.6)]" />
							<div className="absolute left-1/2 top-0 h-full w-px bg-gold-400/80 shadow-[0_0_6px_rgba(223,208,164,0.6)]" />
							{/* Punto central pulsante */}
							<div
								className="absolute top-1/2 left-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400 shadow-[0_0_16px_rgba(223,208,164,0.9)] animate-pulse"
								style={{ animationDuration: "1.5s" }}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Contenido editorial */}
			<div className="relative z-20 max-w-2xl mx-auto px-6 text-center">
				{/* Indicador de señal */}
				<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-red-500/30 mb-8 backdrop-blur-md">
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
					</span>
					<span className="font-mono text-[9px] tracking-[0.25em] text-red-300/90 uppercase font-semibold">
						SEÑAL PERDIDA — ERROR 404
					</span>
				</div>

				{/* Código de error tipo coordenadas */}
				<p className="font-mono text-[10px] tracking-[0.45em] text-zinc-500 mb-3">
					COORDENADAS FUERA DE COBERTURA
				</p>

				{/* Título principal con glitch simulado */}
				<h1 className="font-cinzel text-[clamp(2.8rem,6vw+1rem,5.5rem)] font-bold tracking-tight text-golden-hour leading-[1.05] uppercase drop-shadow-2xl [text-wrap:balance] relative">
					Ruta no
					<br />
					<span className="relative">
						encontrada
						{/* Línea de interferencia simulada */}
						<span
							className="absolute -inset-x-2 top-1/2 h-px bg-gold-400/30 animate-pulse hidden md:block"
							style={{ animationDuration: "4s" }}
						/>
					</span>
				</h1>

				{/* Separador HUD */}
				<div className="flex items-center justify-center gap-3 mt-5 mb-5">
					<span className="w-12 h-px bg-gold-500/30" />
					<span className="w-1 h-1 rounded-full bg-gold-400/60" />
					<span className="w-12 h-px bg-gold-500/30" />
				</div>

				{/* Subtítulo */}
				<p className="font-jakarta font-light text-neutral-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed tracking-wide [text-wrap:pretty]">
					La página que buscas no está en nuestro espacio aéreo. Pudo haber sido
					movida, eliminada o la URL está mal escrita.
				</p>

				{/* Botones */}
				<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Link
						href="/"
						className="group relative inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-white text-black font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-neutral-200 transition-all duration-300 cursor-pointer shadow-lg shadow-white/5 min-w-[200px]"
					>
						<span>VOLVER AL INICIO</span>
						<span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
							→
						</span>
					</Link>
					<Link
						href="/#contacto"
						className="group relative inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-transparent text-white border border-white/20 font-semibold text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer min-w-[200px]"
					>
						HABLAR CON JOSE
					</Link>
				</div>

				{/* Footnotes */}
				<p className="mt-8 font-mono text-[8px] tracking-[0.35em] text-zinc-600 uppercase">
					L'HOSPITALET · BARCELONA · OPERADOR AESA
				</p>
			</div>

			{/* Brackets de esquina HUD (como en HeroSection) */}
			<div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-gold-500/20 pointer-events-none z-30 hidden md:block" />
			<div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-gold-500/20 pointer-events-none z-30 hidden md:block" />
			<div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-gold-500/20 pointer-events-none z-30 hidden md:block" />
			<div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-gold-500/20 pointer-events-none z-30 hidden md:block" />
		</section>
	);
}
