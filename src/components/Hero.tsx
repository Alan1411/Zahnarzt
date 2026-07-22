import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
      <div className="absolute -right-32 -top-24 -z-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-sand-200/50 blur-3xl" />

      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur">
            <Star className="h-4 w-4 fill-brand-500 text-brand-500" />
            Über 1.200 zufriedene Patient:innen
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Ihr Lächeln in
            <span className="block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              besten Händen
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Willkommen in unserer modernen Zahnarztpraxis. Wir verbinden
            fortschrittliche Zahnmedizin mit persönlicher Betreuung – für
            gesunde Zähne und ein strahlendes Lächeln der ganzen Familie.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-600/30 transition-all hover:bg-brand-700 hover:-translate-y-0.5"
            >
              Termin vereinbaren
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-800 transition-all hover:border-brand-300 hover:text-brand-700"
            >
              Leistungen entdecken
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <Feature icon={<ShieldCheck className="h-5 w-5" />} text="Alle Versicherungen" />
            <Feature icon={<Clock className="h-5 w-5" />} text="Termine ohne Wartezeit" />
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in [animation-delay:200ms]">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20">
            <img
              src="https://images.pexels.com/photos/6627325/pexels-photo-6627325.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Zahnärztin behandelt Patientin in moderner Praxis"
              className="h-[420px] w-full object-cover sm:h-[520px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-4 w-60 rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100 sm:-left-8 animate-float">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Star className="h-6 w-6 fill-current" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-slate-900">4.9/5</p>
                <p className="text-xs text-slate-500">Patient:innen-Bewertungen</p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -right-3 top-8 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-xl shadow-brand-600/40 sm:-right-6">
            <p className="text-xs font-medium uppercase tracking-wider opacity-80">Modernste</p>
            <p className="font-display text-lg font-semibold leading-tight">Zahnmedizin</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
      <span className="text-brand-600">{icon}</span>
      {text}
    </div>
  );
}
