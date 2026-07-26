import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Aviso Legal | JF.DroneVision",
	description:
		"Aviso legal, política de privacidad y cookies de JF.DroneVision.",
};

export default function AvisoLegalPage() {
	return (
		<main className="min-h-screen bg-neutral-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8 select-none">
			<div className="mx-auto max-w-3xl">
				{/* Cabecera */}
				<div className="mb-10 border-b border-white/10 pb-6">
					<div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-amber-400/90 uppercase mb-3 font-semibold">
						<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
						<span>Información Legal</span>
					</div>
					<h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-2">
						Aviso Legal
					</h1>
					<p className="font-jakarta text-xs text-zinc-500">
						Última actualización: julio 2026
					</p>
				</div>

				{/* Contenido */}
				<div className="space-y-8 font-jakarta text-sm text-zinc-300 font-light leading-relaxed">
					{/* Titular */}
					<section>
						<h2 className="font-cinzel text-lg text-white uppercase tracking-wide mb-3 font-bold">
							1. Titular del Sitio Web
						</h2>
						<div className="space-y-1 text-xs">
							<p>
								<strong className="text-white font-medium">Nombre:</strong> Jose
								Antonio (JF.DroneVision)
							</p>
							<p>
								<strong className="text-white font-medium">Ubicación:</strong>{" "}
								L'Hospitalet de Llobregat, Barcelona
							</p>
							<p>
								<strong className="text-white font-medium">Email:</strong>{" "}
								contacto@jfdronevision.com
							</p>
							<p>
								<strong className="text-white font-medium">
									Registro AESA:
								</strong>{" "}
								OP-UAS-ES — Operador de drones registrado oficialmente.
							</p>
						</div>
					</section>

					{/* Propiedad intelectual */}
					<section>
						<h2 className="font-cinzel text-lg text-white uppercase tracking-wide mb-3 font-bold">
							2. Propiedad Intelectual
						</h2>
						<p className="text-xs">
							Todos los contenidos de esta web (textos, imágenes, vídeos,
							logotipos) son propiedad de JF.DroneVision, salvo que se indique
							lo contrario. Queda prohibida la reproducción total o parcial sin
							autorización expresa.
						</p>
					</section>

					{/* Condiciones de uso */}
					<section>
						<h2 className="font-cinzel text-lg text-white uppercase tracking-wide mb-3 font-bold">
							3. Condiciones de Uso
						</h2>
						<p className="text-xs">
							El usuario se compromete a hacer un uso adecuado de los contenidos
							y servicios ofrecidos, y a no emplearlos para actividades ilícitas
							o contrarias a la buena fe.
						</p>
					</section>

					{/* Privacidad */}
					<section>
						<h2 className="font-cinzel text-lg text-white uppercase tracking-wide mb-3 font-bold">
							4. Política de Privacidad
						</h2>
						<p className="text-xs">
							En JF.DroneVision no recopilamos datos personales sin tu
							consentimiento. Los datos que puedas facilitar a través del
							formulario de contacto se utilizarán exclusivamente para responder
							a tu consulta y no serán cedidos a terceros.
						</p>
					</section>

					{/* Cookies */}
					<section>
						<h2 className="font-cinzel text-lg text-white uppercase tracking-wide mb-3 font-bold">
							5. Política de Cookies
						</h2>
						<p className="text-xs">
							Esta web utiliza únicamente cookies técnicas necesarias para el
							correcto funcionamiento del sitio (sesión de navegación). No se
							emplean cookies de seguimiento, publicitarias ni de terceros.
						</p>
					</section>

					{/* Legislación */}
					<section>
						<h2 className="font-cinzel text-lg text-white uppercase tracking-wide mb-3 font-bold">
							6. Legislación Aplicable
						</h2>
						<p className="text-xs">
							Este aviso legal se rige por la legislación española. Cualquier
							controversia se someterá a los juzgados y tribunales de Barcelona.
						</p>
					</section>
				</div>

				{/* Separador + Volver */}
				<div className="mt-12 pt-6 border-t border-white/10 flex justify-center">
					<Link
						href="/"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-jakarta text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-white/10 transition-colors"
					>
						← Volver al inicio
					</Link>
				</div>
			</div>
		</main>
	);
}
