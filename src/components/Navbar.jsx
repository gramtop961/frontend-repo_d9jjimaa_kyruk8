import { useState } from 'react'
import { Menu, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-extrabold tracking-tight">
            <span className="text-gray-900">SILESIA</span> <span className="text-blue-600">GATE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollTo('hero')} className="hover:text-blue-600 transition-colors">Úvod</button>
            <button onClick={() => scrollTo('about')} className="hover:text-blue-600 transition-colors">O nás</button>
            <button onClick={() => scrollTo('services')} className="hover:text-blue-600 transition-colors">Služby</button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-blue-600 transition-colors">Reference</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-blue-600 transition-colors">Kontakt</button>
            <a href="tel:+420777000000" className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 shadow hover:bg-blue-700 transition-colors">
              <Phone size={16} /> +420 777 000 000
            </a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollTo('hero')} className="text-left py-2 border-b">Úvod</button>
              <button onClick={() => scrollTo('about')} className="text-left py-2 border-b">O nás</button>
              <button onClick={() => scrollTo('services')} className="text-left py-2 border-b">Služby</button>
              <button onClick={() => scrollTo('portfolio')} className="text-left py-2 border-b">Reference</button>
              <button onClick={() => scrollTo('contact')} className="text-left py-2 border-b">Kontakt</button>
              <a href="tel:+420777000000" className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 w-fit">
                <Phone size={16} /> +420 777 000 000
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
