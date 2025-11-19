import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Copy */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Banking-grade security • PCI-DSS compliant
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Modern payments and treasury infrastructure for the internet
          </h1>
          <p className="mt-5 max-w-xl text-base/7 text-slate-300">
            Xtera powers fast, secure, and global money movement. Issue cards, accept payments, and manage cash in one seamless platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-lg">
              Start now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#products" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">
              View products
            </a>
          </div>

          {/* Logos */}
          <div className="mt-10 flex items-center gap-6 opacity-80">
            {['NovaPay','Atlas','Helix','Vector','Quanta'].map((brand) => (
              <div key={brand} className="text-xs text-slate-400">{brand}</div>
            ))}
          </div>
        </div>

        {/* 3D Spline scene */}
        <div className="relative z-0 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
