export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Proč Silesia Gate</h2>
            <p className="mt-4 text-gray-600">Jsme lokální firma z Opavska. Stavíme bezpečné a estetické ploty a brány, které vydrží. Spojujeme kvalitní materiály, precizní výrobu a odbornou montáž. Každá realizace je na míru vašemu domu i pozemku.</p>
            <ul className="mt-6 grid gap-3 text-gray-700">
              <li className="flex gap-3"><span className="text-blue-600">•</span> Dlouholeté zkušenosti a stovky referencí</li>
              <li className="flex gap-3"><span className="text-blue-600">•</span> Kvalitní ocel, hliník a certifikované povrchové úpravy</li>
              <li className="flex gap-3"><span className="text-blue-600">•</span> Kompletní servis – návrh, výroba, montáž, servis</li>
              <li className="flex gap-3"><span className="text-blue-600">•</span> Férové ceny, rychlé termíny, spolehlivá komunikace</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1530731141654-5993c3016c77?q=80&w=1600&auto=format&fit=crop" alt="Moderní plot a brána" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
