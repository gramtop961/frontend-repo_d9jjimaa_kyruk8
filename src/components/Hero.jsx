import Spline from '@splinetool/react-spline'

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-xs text-blue-700 font-semibold">Opavsko • Bezpečí • Design</p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">SILESIA GATE</h1>
          <p className="mt-3 text-xl sm:text-2xl text-gray-700">Ploty a brány na míru z Opavska</p>
          <p className="mt-4 text-gray-600">Výroba, dodávka a montáž plotů a bran na klíč. Kované i moderní provedení, automatické pohony a bezúdržbové povrchové úpravy. Kvalita, spolehlivost a čistý design.</p>
          <div className="mt-6 flex gap-3">
            <button onClick={scrollToContact} className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 font-semibold shadow hover:bg-blue-700 transition-colors">Kontaktujte nás</button>
            <a href="#services" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white/90 px-6 py-3 font-semibold shadow hover:bg-black transition-colors">Naše služby</a>
          </div>
        </div>
      </div>
    </section>
  )
}
