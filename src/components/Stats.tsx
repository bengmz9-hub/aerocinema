"use client";

import React from "react";

export function Stats() {
	const statsList = [
		{
			sys: "SYS_01 // FLT_20",
			topRight: "REC",
			isRec: true,
			val: "150+",
			label: "PROYECTOS",
			bottomLeft: "GEN_S1_PORT_V2",
			bottomRight: "FPS_24 - REC.2.2.D.3",
		},
		{
			sys: "SYS_02 // LNK_STB",
			topRight: "LAT_42.4°N 2°34'W",
			val: "8",
			label: "PAÍSES",
			bottomLeft: "ACT_M12_GLB",
			bottomRight: "COD_10B - 42.0",
		},
		{
			sys: "SYS_03 // FLT_REC",
			topRight: "34°45'N 135°46'E",
			val: "12K+",
			label: "HORAS DE VUELO",
			bottomLeft: "SPD_U3_R9_C18",
			bottomRight: "BIT_RATE 110MB/S",
		},
		{
			sys: "SYS_04 // CHK_OK",
			topRight: "45°30'N 9°11'W",
			val: "100%",
			label: "CLIENTES SATISFECHOS",
			bottomLeft: "LOG_A2_STB_OK",
			bottomRight: "BAT. 34% - LVL. 2.2",
		},
	];

	return (
		<section className="w-full bg-transparent py-20 px-4 md:px-8 border-t border-white/[0.05] relative z-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{statsList.map((stat, i) => (
					<div
						key={i}
						className="specular-card cursor-crosshair p-6 bg-zinc-900/10 border border-white/[0.06] rounded-xl flex flex-col justify-between h-[180px] font-mono relative overflow-hidden transition-all duration-300 hover:border-amber-500/30 hover:bg-zinc-900/40 backdrop-blur-xs"
					>
						{/* Fila Superior */}
						<div className="flex justify-between items-center text-[9px] text-zinc-500 tracking-wider">
							<span>[{stat.sys}]</span>
							{stat.isRec ? (
								<span className="flex items-center gap-1 text-red-500 font-bold">
									<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
									{stat.topRight}
								</span>
							) : (
								<span>{stat.topRight}</span>
							)}
						</div>

						{/* Bloque Central (Tipografía Cinzel original + Golden Hour Accent) */}
						<div className="flex flex-col my-auto">
							<span className="font-cinzel text-4xl md:text-5xl font-bold text-golden-hour tracking-tight leading-none mb-1">
								{stat.val}
							</span>
							<span className="text-[9px] text-zinc-400 font-medium tracking-[0.2em] uppercase font-montserrat">
								{stat.label}
							</span>
						</div>

						{/* Fila Inferior */}
						<div className="flex justify-between items-center text-[8px] text-zinc-600 tracking-widest pt-4 border-t border-white/[0.03]">
							<span>{stat.bottomLeft}</span>
							<span>{stat.bottomRight}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
