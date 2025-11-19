export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Start building with Xtera</h3>
              <p className="mt-2 max-w-xl text-slate-300">Create an account in minutes. Start in the dashboard, and scale with our APIs when you're ready.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-lg">Create account</a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">Talk to sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
