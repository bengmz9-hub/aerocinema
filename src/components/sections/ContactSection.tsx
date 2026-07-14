import ContactModal from "./ContactModal";

export default function ContactSection() {
  return (
    <section className="relative mx-auto max-w-7xl border-t border-white/[0.04] px-6 py-24 text-center lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6">
        <span className="font-cinzel text-[10px] uppercase tracking-[0.4em] text-white/40">
          ¿Tienes un proyecto en mente?
        </span>
        <h2 className="font-cinzel text-3xl font-medium leading-none tracking-tight text-white sm:text-5xl">
          Eleva tu visión
        </h2>
        <p className="max-w-lg font-sans text-sm font-light leading-relaxed text-white/50 sm:text-base">
          Hablemos de tu próximo rodaje aéreo. Diseñamos planes de vuelo y
          propuestas cinematográficas a la medida de tu producción.
        </p>
        <ContactModal />
      </div>
    </section>
  );
}
