import { useEffect, useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Praxis', href: '#praxis' },
  { label: 'Team', href: '#team' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_30px_-12px_rgba(15,45,45,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px flex h-18 items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
            <ToothIcon className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-xl font-semibold transition-colors ${
                scrolled ? 'text-slate-900' : 'text-slate-900'
              }`}
            >
              ZahnArtzt
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-600">
              Praxis
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+4900000000"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-brand-700"
          >
            <Phone className="h-4 w-4 text-brand-600" />
            030 123 4567
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:bg-brand-700 hover:shadow-brand-700/40 hover:-translate-y-0.5"
          >
            <Calendar className="h-4 w-4" />
            Termin buchen
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white"
            >
              <Calendar className="h-4 w-4" />
              Termin buchen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function ToothIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5c-2 0-2.8 1-4.5 1S4.5 2.5 3.8 4.2C2.8 7.2 3.5 11 4.6 14.2c.6 1.7 1 4.8 1.6 6.2.4 1 1.7 1.6 2.4.4.6-1 .6-3.3 1.4-4.4.5-.7 1.9-.7 2.4 0 .8 1.1.8 3.4 1.4 4.4.7 1.2 2 .6 2.4-.4.6-1.4 1-4.5 1.6-6.2 1.1-3.2 1.8-7 .8-10-.7-1.7-2-1.7-3.7-1.7S14 2.5 12 2.5Z" />
    </svg>
  );
}
