import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <footer className="py-10 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Silesia Gate – ploty a brány na míru • Opavsko</p>
            <p className="text-xs text-white/70">Klíčová slova: ploty, brány, montáž plotů, kované ploty, moderní ploty, automatické brány, Opavsko</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
