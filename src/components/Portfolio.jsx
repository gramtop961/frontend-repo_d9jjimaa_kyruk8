export default function Portfolio() {
  const items = [
    {
      title: 'Kovaný plot s bránou',
      img: 'https://images.unsplash.com/photo-1600585154340-1e4ce9a5d53d?q=80&w=1600&auto=format&fit=crop',
      desc: 'Tradiční kovaný plot s posuvnou bránou – odolný, reprezentativní a bezpečný.'
    },
    {
      title: 'Moderní hliníkový plot',
      img: 'https://images.unsplash.com/photo-1560185007-b8b12a0c8eff?q=80&w=1600&auto=format&fit=crop',
      desc: 'Minimalistický horizontální design, bezúdržbové provedení a čisté linie.'
    },
    {
      title: 'Automatická brána',
      img: 'https://images.unsplash.com/photo-1600585154155-9da3d56c2976?q=80&w=1600&auto=format&fit=crop',
      desc: 'Tichý a spolehlivý pohon s ovládáním na dálku pro maximální komfort.'
    }
  ]

  const goContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Reference</h2>
            <p className="mt-3 text-gray-600">Ukázky našich realizací plotů a bran v regionu Opavsko.</p>
          </div>
          <button onClick={goContact} className="rounded-full bg-blue-600 text-white px-5 py-3 font-semibold shadow hover:bg-blue-700 transition-colors">Chci nabídku</button>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <figure key={idx} className="group rounded-2xl overflow-hidden bg-gray-100 shadow">
              <img src={item.img} alt={item.title} className="h-60 w-full object-cover group-hover:scale-[1.03] transition-transform" />
              <figcaption className="p-4">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
