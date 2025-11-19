import { ShieldCheck, Globe2, Zap, Cog, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Enterprise security',
    desc: 'End-to-end encryption, tokenization, and role-based controls keep your data safe.'
  },
  {
    icon: Globe2,
    title: 'Global coverage',
    desc: 'Multi-currency settlement, local payment methods, and cross-border payouts.'
  },
  {
    icon: Zap,
    title: 'Real-time payments',
    desc: 'Instant transfers with intelligent routing and automatic reconciliation.'
  },
  {
    icon: CreditCard,
    title: 'Card issuing',
    desc: 'Create virtual and physical cards with granular controls and spend limits.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Unified reporting, anomaly detection, and revenue insights.'
  },
  {
    icon: Cog,
    title: 'Modular APIs',
    desc: 'Compose exactly what you need with simple, well-documented endpoints.'
  }
];

export default function Features() {
  return (
    <section id="products" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(59,130,246,0.15),rgba(2,6,23,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to move money</h2>
          <p className="mt-3 text-slate-300">A single platform to accept payments, issue cards, and manage treasury across the globe.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-md ring-1 ring-white/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
