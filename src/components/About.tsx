import { Check, HeartHandshake, Award, Users } from 'lucide-react';

const highlights = [
  'Terminvereinbarung in der Regel innerhalb von 48 Stunden',
  'Individuelle Beratung und transparente Behandlungsplanung',
  'Modernste Technik für schmerzarme Behandlungen',
  'Behandlung aller Altersgruppen – vom Kind bis zum Senior',
];

const stats = [
  { icon: Users, value: '1.200+', label: 'Zufriedene Patient:innen' },
  { icon: Award, value: '15+', label: 'Jahre Erfahrung' },
  { icon: HeartHandshake, value: '98%', label: 'Weiterempfehlung' },
];

export default function About() {
  return (
    <section id="praxis" className="relative overflow-hidden bg-sand-50 py-20 sm:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Images */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/15">
            <img
              src="https://images.pexels.com/photos/4269682/pexels-photo-4269682.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Moderne Zahnarztpraxis mit Behandlungszimmer"
              className="h-[460px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 w-48 overflow-hidden rounded-2xl border-4 border-sand-50 shadow-xl sm:-right-8 sm:w-56">
            <img
              src="https://images.pexels.com/photos/3845744/pexels-photo-3845744.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Zahnarztteam in der Praxis"
              className="h-36 w-full object-cover sm:h-40"
              loading="lazy"
            />
          </div>
          <div className="absolute -left-4 top-8 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:-left-8">
            <p className="font-display text-3xl font-semibold text-brand-600">100%</p>
            <p className="text-xs font-medium text-slate-500">sterilisierte Instrumente</p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Unsere Praxis
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Moderne Zahnmedizin mit Herz und Verstand
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Unsere Praxis steht für eine Zahnmedizin, die den Menschen in den
            Mittelpunkt stellt. In hellem, freundlichen Ambiente behandeln wir
            mit modernster Technik und größter Sorgfalt – immer mit dem Ziel,
            Ihre Zähne ein Leben lang gesund zu erhalten.
          </p>

          <ul className="mt-8 space-y-3.5">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-center transition-shadow hover:shadow-lg"
                >
                  <Icon className="mx-auto h-6 w-6 text-brand-600" />
                  <p className="mt-2 font-display text-2xl font-semibold text-slate-900">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
