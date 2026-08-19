"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AvisoLegalPage() {
	const handleBack = () => {
		if (typeof window !== "undefined") {
			if (window.history.length > 1) {
				window.history.back();
			} else if (document.referrer) {
				window.location.href = document.referrer;
			} else {
				window.location.href = "/";
			}
		}
	};
	return (
		<main className="min-h-screen bg-[#000000] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-[#86868b] font-jakarta select-none">
			<div className="mx-auto max-w-3xl">
				{/* ── Breadcrumb y Botón Volver Atrás (Apple Style) ── */}
				<div className="flex items-center justify-between pb-6 mb-8 border-b border-[#1d1d1f]">
					<div className="flex items-center gap-2 text-[11px] text-[#6e6e73] font-mono">
						<Link href="/" className="hover:text-white transition-colors">
							JF.DRONEVISION
						</Link>
						<span>›</span>
						<span className="text-[#a1a1a6]">Legal</span>
					</div>

					<button
						type="button"
						onClick={handleBack}
						className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-300 hover:text-white font-jakarta text-xs font-semibold transition-all active:scale-95 cursor-pointer"
					>
						<ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
						<span>Volver</span>
					</button>
				</div>

				{/* ── Cabecera Editorial Apple Legal ── */}
				<div className="mb-12 space-y-3">
					<div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-mono text-[9px] tracking-[0.2em] uppercase font-bold">
						<span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
						DOCUMENTO OFICIAL · AESA REGULADO
					</div>
					<h1 className="font-cormorant text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
						Aviso Legal y{" "}
						<span className="text-gold-400 italic">Privacidad</span>
					</h1>
					<p className="font-mono text-[10px] text-[#6e6e73] uppercase tracking-wider">
						Versión 2.4 · Actualizado para la temporada 2026
					</p>
				</div>

				{/* ── Secciones con Tipografía Apple Pro ── */}
				<div className="space-y-10 text-[13px] sm:text-sm text-[#a1a1a6] font-normal leading-relaxed divide-y divide-[#1d1d1f]">
					{/* 1. Titular */}
					<section className="pt-8 first:pt-0 space-y-3">
						<h2 className="font-cormorant text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
							1. Titular de la Actividad
						</h2>
						<p>
							En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de
							la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se
							informa de los datos identificativos del responsable:
						</p>
						<div className="rounded-2xl border border-white/[0.08] bg-[#0c0d10]/60 p-4 sm:p-5 space-y-2 text-xs font-mono text-zinc-300">
							<p>
								<span className="text-[#6e6e73]">OPERADOR:</span> Jose Antonio
								(JF.DroneVision)
							</p>
							<p>
								<span className="text-[#6e6e73]">ÁREA OPERATIVA:</span>{" "}
								L'Hospitalet de Llobregat, Barcelona y Cataluña
							</p>
							<p>
								<span className="text-[#6e6e73]">EMAIL DIRECTO:</span>{" "}
								contacto@jfdronevision.com
							</p>
							<p>
								<span className="text-[#6e6e73]">REGISTRO AERONÁUTICO:</span>{" "}
								Operador registrado ante AESA (Agencia Estatal de Seguridad
								Aérea) bajo normativa europea UAS/EASA.
							</p>
						</div>
					</section>

					{/* 2. Normativa Aeronáutica y Seguro */}
					<section className="pt-8 space-y-3">
						<h2 className="font-cormorant text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
							2. Cumplimiento Aeronáutico y Seguro RC
						</h2>
						<p>
							Todas las operaciones audiovisuales se planifican y ejecutan
							conforme al Reglamento de Ejecución (UE) 2019/947 y normativa
							estatal aplicable.
						</p>
						<p>
							La flota cuenta con Seguro Obligatorio de Responsabilidad Civil
							Aeronáutica y certificación de piloto a distancia para vuelos en
							categoría abierta (A1/A3 y sub-249g) y escenarios operacionales
							autorizados.
						</p>
						<p className="text-xs text-[#6e6e73]">
							En cumplimiento de la Ley Orgánica 1/1982 sobre protección del
							derecho al honor, a la intimidad personal y a la propia imagen,
							las filmaciones aéreas respetan los recintos privados y se
							realizan con la debida autorización de propietarios o entidades
							convocantes.
						</p>
					</section>

					{/* 3. Propiedad Intelectual */}
					<section className="pt-8 space-y-3">
						<h2 className="font-cormorant text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
							3. Propiedad Intelectual de Metraje
						</h2>
						<p>
							Los derechos de autor de las filmaciones, vídeos, fotografías,
							logotipos y código fuente mostrados en este portal pertenecen en
							exclusiva a JF.DroneVision o a sus respectivos clientes con
							licencia de uso. Queda prohibida su copia o redistribución
							comercial no autorizada.
						</p>
					</section>

					{/* 4. Protección de Datos (RGPD) */}
					<section className="pt-8 space-y-3">
						<h2 className="font-cormorant text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
							4. Protección de Datos y Privacidad (RGPD)
						</h2>
						<p>
							Conforme al Reglamento General de Protección de Datos (RGPD UE
							2016/679) y la LOPDGDD 3/2018:
						</p>
						<ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-zinc-300">
							<li>
								Los datos recibidos por formulario o WhatsApp se utilizan
								únicamente para presupuestos y coordinación de rodajes.
							</li>
							<li>No se transfieren ni comercializan datos con terceros.</li>
							<li>
								Puedes ejercer tus derechos de acceso, rectificación y supresión
								escribiendo a contacto@jfdronevision.com.
							</li>
						</ul>
					</section>

					{/* 5. Cookies Técnicas */}
					<section className="pt-8 space-y-3">
						<h2 className="font-cormorant text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
							5. Política de Cookies
						</h2>
						<p className="text-xs">
							Este sitio web utiliza exclusivamente cookies técnicas esenciales
							para mantener la sesión y el rendimiento de la interfaz. No se
							implementan cookies analíticas invasivas ni píxeles publicitarios
							de seguimiento.
						</p>
					</section>
				</div>

				{/* ── Botón Inferior Volver Atrás ── */}
				<div className="mt-14 pt-8 border-t border-[#1d1d1f] flex flex-col sm:flex-row items-center justify-between gap-4">
					<span className="text-[11px] text-[#6e6e73] font-mono">
						&copy; {new Date().getFullYear()} JF.DRONEVISION · TODOS LOS
						DERECHOS RESERVADOS
					</span>

					<button
						type="button"
						onClick={handleBack}
						className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-200 hover:text-white font-jakarta text-xs font-semibold transition-all active:scale-95 cursor-pointer shadow-sm"
					>
						<ArrowLeft className="w-4 h-4" />
						<span>Volver a la página anterior</span>
					</button>
				</div>
			</div>
		</main>
	);
}
