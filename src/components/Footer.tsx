import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M12 2.5c-2 0-2.8 1-4.5 1S4.5 2.5 3.8 4.2C2.8 7.2 3.5 11 4.6 14.2c.6 1.7 1 4.8 1.6 6.2.4 1 1.7 1.6 2.4.4.6-1 .6-3.3 1.4-4.4.5-.7 1.9-.7 2.4 0 .8 1.1.8 3.4 1.4 4.4.7 1.2 2 .6 2.4-.4.6-1.4 1-4.5 1.6-6.2 1.1-3.2 1.8-7 .8-10-.7-1.7-2-1.7-3.7-1.7S14 2.5 12 2.5Z" />
                </svg>
              </span>
              <span className="font-display text-xl font-semibold text-slate-900">ZahnArtzt</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Ihre moderne Zahnarztpraxis in Berlin. Wir verbinden fortschrittliche
              Zahnmedizin mit persönlicher Betreuung für die ganze Familie.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink icon={<Instagram className="h-5 w-5" />} />
              <SocialLink icon={<Facebook className="h-5 w-5" />} />
              <SocialLink icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <FooterLink href="#leistungen" label="Leistungen" />
              <FooterLink href="#praxis" label="Praxis" />
              <FooterLink href="#team" label="Team" />
              <FooterLink href="#kontakt" label="Kontakt" />
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                Musterstraße 12, 10115 Berlin
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                030 123 4567
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                praxis@zahnartzt.de
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ZahnArtzt Praxis. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-brand-700">Impressum</a>
            <a href="#" className="transition-colors hover:text-brand-700">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-slate-600 transition-colors hover:text-brand-700"
      >
        {label}
      </a>
    </li>
  );
}
