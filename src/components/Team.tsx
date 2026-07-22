const team = [
  {
    name: 'Dr. Laura Schäfer',
    role: 'Praxisinhaberin & Zahnärztin',
    img: 'https://images.pexels.com/photos/4270087/pexels-photo-4270087.jpeg?auto=compress&cs=tinysrgb&w=600',
    focus: 'Implantologie · Ästhetik',
  },
  {
    name: 'Dr. Markus Weber',
    role: 'Fachzahnarzt für Oralchirurgie',
    img: 'https://images.pexels.com/photos/3845954/pexels-photo-3845954.jpeg?auto=compress&cs=tinysrgb&w=600',
    focus: 'Chirurgie · Parodontologie',
  },
  {
    name: 'Julia Bergmann',
    role: 'Dentalhygienikerin',
    img: 'https://images.pexels.com/photos/6627447/pexels-photo-6627447.jpeg?auto=compress&cs=tinysrgb&w=600',
    focus: 'Prophylaxe · Zahnreinigung',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Unser Team
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Menschen, denen Sie vertrauen können
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Unser erfahrenes und einfühlsames Team begleitet Sie kompetent
            durch jede Behandlung – mit Zeit, Geduld und einem Lächeln.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                  {m.focus}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-600">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
