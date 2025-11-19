import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top nav */}
      <Navbar />

      {/* Hero with Spline */}
      <Hero />

      {/* Feature grid */}
      <Features />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <footer id="company" className="relative border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Xtera.org • All rights reserved</p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white">Status</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
