interface SpotlightProps {
	className?: string;
	gradientFirst?: string;
	gradientSecond?: string;
}

export const Spotlight = ({
	className = "",
	gradientFirst,
	gradientSecond,
}: SpotlightProps) => {
	return (
		<div
			className={`pointer-events-none absolute z-0 select-none mix-blend-screen pointer-events-none ${className}`}
			aria-hidden="true"
		>
			{/* Primer haz de luz denso central */}
			<div
				className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2"
				style={{
					background:
						gradientFirst ||
						"radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)",
				}}
			/>
			{/* Segundo haz de luz de expansión ambiental suave */}
			<div
				className="absolute w-[1000px] h-[1000px] md:w-[1400px] md:h-[1400px] rounded-full blur-[160px] transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay"
				style={{
					background:
						gradientSecond ||
						"radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%)",
				}}
			/>
		</div>
	);
};
