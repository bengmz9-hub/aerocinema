"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Card = {
	id: number;
	content: React.ReactNode;
	className: string;
	thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
	const [selected, setSelected] = useState<Card | null>(null);

	const handleClick = (card: Card) => {
		if (selected?.id === card.id) {
			setSelected(null);
		} else {
			setSelected(card);
		}
	};

	// 🧠 AHORA CALCULAMOS POR ÍNDICE DINÁMICO
	const getSelectedClass = (cardId: number) => {
		const baseClass =
			"absolute z-50 cursor-pointer overflow-hidden rounded-xl flex flex-col justify-end";
		const mobileClass = "inset-4";

		// Encontramos la posición real de la tarjeta en el array para saber su fila
		const index = cards.findIndex((c) => c.id === cardId);

		// Si es una de las dos primeras tarjetas (índice 0 o 1), va a la fila superior
		if (index === 0 || index === 1) {
			return `${baseClass} ${mobileClass} md:bottom-auto md:top-4 md:left-4 md:right-4 md:h-[calc(50%-10px)]`;
		}

		// Para cualquier otra tarjeta posterior (índices 2, 3, 4...), se acopla a la fila inferior
		return `${baseClass} ${mobileClass} md:top-auto md:bottom-4 md:left-4 md:right-4 md:h-[calc(50%-10px)]`;
	};

	return (
		<div className="w-full h-full p-4 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
			{/* 1. Grid base */}
			{cards.map((card) => (
				<div key={card.id} className={card.className}>
					<motion.div
						layoutId={`card-${card.id}`}
						onClick={() => handleClick(card)}
						className="relative overflow-hidden rounded-xl h-full w-full cursor-pointer bg-zinc-900 group"
					>
						<motion.img
							layoutId={`image-${card.id}-image`}
							src={card.thumbnail}
							className="object-cover w-full h-full absolute inset-0 transition duration-500 group-hover:scale-105"
							alt="JF.DroneVision Portfolio"
						/>
					</motion.div>
				</div>
			))}

			{/* 2. Overlay oscuro */}
			<AnimatePresence>
				{selected && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelected(null)}
						className="absolute inset-0 z-40 bg-black/80 rounded-xl"
					/>
				)}
			</AnimatePresence>

			{/* 3. Tarjeta Expandida */}
			<AnimatePresence>
				{selected && (
					<motion.div
						layoutId={`card-${selected.id}`}
						onClick={() => setSelected(null)}
						className={getSelectedClass(selected.id)}
					>
						<motion.img
							layoutId={`image-${selected.id}-image`}
							src={selected.thumbnail}
							className="absolute inset-0 object-cover w-full h-full z-0"
							alt="JF.DroneVision Portfolio"
						/>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute inset-0 bg-black/60 z-10"
						/>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							className="relative z-20 p-6 md:p-10 flex flex-col justify-end h-full collective-transition animate-fade-in"
						>
							{selected.content}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
