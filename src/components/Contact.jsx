import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Fake submit for now — backend not required for marketing site
      await new Promise(r => setTimeout(r, 800))
      setSent(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Kontakt</h2>
            <p className="mt-3 text-gray-600">Získejte nezávaznou nabídku na plot nebo bránu v lokalitě Opavsko. Ozveme se do 24 hodin.</p>
            <div className="mt-6 space-y-3 text-gray-700">
              <p><strong>Telefon:</strong> <a className="text-blue-600 hover:underline" href="tel:+420777000000">+420 777 000 000</a></p>
              <p><strong>E-mail:</strong> <a className="text-blue-600 hover:underline" href="mailto:info@silesiagate.cz">info@silesiagate.cz</a></p>
              <p><strong>Region:</strong> Opavsko a okolí</p>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden bg-gray-200 aspect-video">
              <iframe title="Mapa" className="w-full h-full" src="https://www.openstreetmap.org/export/embed.html?bbox=17.812%2C49.9%2C18.3%2C50.1&amp;layer=mapnik" />
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              {sent ? (
                <div className="text-center py-10">
                  <h3 className="text-xl font-semibold text-gray-900">Děkujeme za zprávu!</h3>
                  <p className="text-gray-600 mt-2">Ozveme se vám co nejdříve.</p>
                  <button onClick={() => setSent(false)} className="mt-6 rounded-full bg-blue-600 text-white px-5 py-3 font-semibold">Poslat další poptávku</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Jméno a příjmení</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">E-mail</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Telefon</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Zpráva</label>
                    <textarea name="message" rows="4" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Popište váš projekt: typ plotu/brány, rozměry, lokalita…" />
                  </div>
                  <button disabled={loading} className="rounded-full bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 disabled:opacity-60">{loading ? 'Odesílám…' : 'Kontaktujte nás'}</button>
                  <p className="text-xs text-gray-500">Odesláním souhlasíte se zpracováním osobních údajů pro účely nacenění.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
