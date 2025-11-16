import { ShieldCheck, Wrench, Zap, Sparkles, Lightbulb } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Výroba plotů a bran',
    desc: 'Kované ploty, moderní hliníkové ploty a posuvné brány na míru. Precizní zpracování z kvalitních materiálů.',
    seo: 'ploty, brány, kované ploty, moderní ploty, Opavsko'
  },
  {
    icon: Wrench,
    title: 'Montáž a instalace',
    desc: 'Profesionální montáž plotů a bran včetně základu a zaměření. Rychle, čistě a bezpečně.',
    seo: 'montáž plotů, montáž bran, instalace bran, Opavsko'
  },
  {
    icon: Zap,
    title: 'Automatické pohony',
    desc: 'Spolehlivé automatické brány a pohony s tichým chodem. Komfortní ovládání na dálku.',
    seo: 'automatické brány, pohony bran, automatické pohony, Opavsko'
  },
  {
    icon: Sparkles,
    title: 'Bezúdržbové povrchové úpravy',
    desc: 'Žárové zinkování, komaxit a práškové lakování pro dlouhou životnost bez údržby.',
    seo: 'bezúdržbové povrchové úpravy, zinkování, komaxit'
  },
  {
    icon: Lightbulb,
    title: 'Poradenství a návrhy',
    desc: 'Návrh plotu a brány dle stylu domu. Doporučíme materiál, výplň i povrchovou úpravu.',
    seo: 'poradenství, návrh plotu, návrhy bran'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Naše služby</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Komplexní řešení od návrhu po montáž. Ploty, brány a automatické pohony v regionu Opavsko.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
