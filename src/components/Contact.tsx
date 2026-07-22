import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Check, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Adresse', value: 'Musterstraße 12, 10115 Berlin' },
  { icon: Phone, label: 'Telefon', value: '030 123 4567' },
  { icon: Mail, label: 'E-Mail', value: 'praxis@zahnartzt.de' },
  { icon: Clock, label: 'Öffnungszeiten', value: 'Mo–Fr 08:00–18:00, Sa 09:00–13:00' },
];

const hours = [
  { day: 'Montag', time: '08:00 – 18:00' },
  { day: 'Dienstag', time: '08:00 – 18:00' },
  { day: 'Mittwoch', time: '08:00 – 18:00' },
  { day: 'Donnerstag', time: '08:00 – 20:00' },
  { day: 'Freitag', time: '08:00 – 16:00' },
  { day: 'Samstag', time: '09:00 – 13:00' },
  { day: 'Sonntag', time: 'Geschlossen' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="kontakt" className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950" />
      <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-brand-700/30 blur-3xl" />
      <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-brand-800/40 blur-3xl" />

      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
            Kontakt & Termin
          </span>
          <h2 className="mt-3 text-3xl text-white sm:text-4xl lg:text-5xl">
            Vereinbaren Sie Ihren Termin
          </h2>
          <p className="mt-5 text-lg text-brand-100/80">
            Schreiben Sie uns oder rufen Sie an – wir melden uns schnellstmöglich
            bei Ihnen, um einen passenden Termin zu finden.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Vorname" name="firstName" placeholder="Max" />
                <Field label="Nachname" name="lastName" placeholder="Mustermann" />
                <Field label="E-Mail" name="email" type="email" placeholder="max@example.de" />
                <Field label="Telefon" name="phone" type="tel" placeholder="0151 1234567" />
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-brand-100">
                  Behandlungswunsch
                </label>
                <select
                  name="service"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-brand-300 focus:bg-white/10"
                >
                  <option className="bg-brand-900">Professionelle Zahnreinigung</option>
                  <option className="bg-brand-900">Vorsorgeuntersuchung</option>
                  <option className="bg-brand-900">Ästhetische Behandlung</option>
                  <option className="bg-brand-900">Implantologie</option>
                  <option className="bg-brand-900">Kinderbehandlung</option>
                  <option className="bg-brand-900">Akuter Schmerz / Notfall</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-brand-100">
                  Ihre Nachricht
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Wann möchten Sie gerne kommen? Gibt es etwas, das wir vorab wissen sollten?"
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-200/40 outline-none transition-colors focus:border-brand-300 focus:bg-white/10"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-800 transition-all hover:bg-brand-50 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-80"
              >
                {sent ? (
                  <>
                    <Check className="h-5 w-5 text-brand-600" />
                    Anfrage gesendet – wir melden uns bald!
                  </>
                ) : (
                  <>
                    Anfrage senden
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info + hours */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">Praxis-Informationen</h3>
              <ul className="mt-4 space-y-4">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.label} className="flex items-start gap-3">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-700/40 text-brand-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-brand-300">
                          {c.label}
                        </p>
                        <p className="mt-0.5 text-sm text-white">{c.value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">Öffnungszeiten</h3>
              <ul className="mt-4 space-y-2.5">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-white/10 pb-2.5 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-brand-100">{h.day}</span>
                    <span
                      className={
                        h.time === 'Geschlossen'
                          ? 'font-medium text-brand-300/60'
                          : 'font-medium text-white'
                      }
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-brand-100">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-200/40 outline-none transition-colors focus:border-brand-300 focus:bg-white/10"
      />
    </div>
  );
}
