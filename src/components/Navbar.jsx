import { Menu, X, CreditCard } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Company", href: "#company" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
                <CreditCard className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">Xtera</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
              <a href="#cta" className="rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-lg transition-shadow">
                Get started
              </a>
            </nav>

            {/* Mobile toggle */}
            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile panel */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="block text-slate-200">
                  {item.name}
                </a>
              ))}
              <a href="#cta" className="inline-flex rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm">
                Get started
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
