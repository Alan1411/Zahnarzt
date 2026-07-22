import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sandra K.',
    text: 'Ich hatte immer Angst vorm Zahnarzt, aber hier fühle ich mich endlich wohl. Das Team ist unglaublich einfühlsam und nimmt sich Zeit. Beste Praxis, in der ich je war!',
    rating: 5,
  },
  {
    name: 'Thomas R.',
    text: 'Sehr moderne Praxis, top ausgestattet. Terminvergabe unkompliziert, Wartezeiten minimal. Die Zahnreinigung war gründlich und schmerzfrei. Klare Empfehlung!',
    rating: 5,
  },
  {
    name: 'Familie Müller',
    text: 'Unsere Kinder gehen gerne zur Kontrolle – das sagt alles! Freundliche Behandlung, kindgerechte Erklärungen und ein tolles Wartezimmer. Vielen Dank!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Patientenstimmen
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Das sagen unsere Patient:innen
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10"
            >
              <Quote className="h-9 w-9 text-brand-200" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-500 text-brand-500" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                „{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-semibold text-brand-700">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-slate-900">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
