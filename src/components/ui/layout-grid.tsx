"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    if (selected?.id === card.id) {
      setSelected(null);
    } else {
      setLastSelected(selected);
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-4 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={card.className}>
          <motion.div
            onClick={() => handleClick(card)}
            className={`relative overflow-hidden rounded-xl h-full w-full cursor-pointer ${
              selected?.id === card.id
                ? "absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-col"
                : "bg-zinc-900"
            }`}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && (
              <div className="absolute inset-0 bg-black/60 h-full w-full z-10 flex flex-col justify-end p-6 md:p-10 collective-transition animate-fade-in">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-20"
                >
                  {selected.content}
                </motion.div>
              </div>
            )}
            <motion.img
              src={card.thumbnail}
              className={`object-cover w-full h-full transition duration-500 ${
                selected?.id === card.id ? "scale-105" : "hover:scale-102"
              }`}
              alt="AeroCinema Portfolio"
              layoutId={`image-${card.id}-image`}
            />
          </motion.div>
        </div>
      ))}
      
      {/* Fondo oscuro traslúcido de pantalla completa */}
      <motion.div
        onClick={handleOutsideClick}
        className={`fixed inset-0 w-screen h-screen bg-black/85 z-40 transition-opacity duration-300 ${
          selected?.id ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </div>
  );
};
