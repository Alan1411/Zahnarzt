import { useState } from 'react';
import {
  Sparkles,
  Stethoscope,
  HeartPulse,
  Smile,
  Bone,
  Baby,
  Activity,
  Microscope,
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Professionelle Zahnreinigung',
    desc: 'Sanfte und gründliche Prophylaxe für gesunde Zähne und frischen Atem – schmerzfrei und effektiv.',
  },
  {
    icon: Bone,
    title: 'Implantologie',
    desc: 'Dauerhafter Ersatz fehlender Zähne mit hochwertigen Implantaten für natürliche Optik und Funktion.',
  },
  {
    icon: Smile,
    title: 'Ästhetische Zahnheilkunde',
    desc: 'Veneers, Bleaching und Zahnuformungen für ein strahlendes, harmonisches Lächeln.',
  },
  {
    icon: Stethoscope,
    title: 'Zahnerhaltung',
    desc: 'Schonende Behandlung von Karies mit hochwertigen Füllungen und Inlays aus Keramik.',
  },
  {
    icon: HeartPulse,
    title: 'Endodontie',
    desc: 'Moderne Wurzelbehandlungen unter dem Mikroskop zur Erhaltung Ihrer eigenen Zähne.',
  },
  {
    icon: Baby,
    title: 'Kinderzahnheilkunde',
    desc: 'Liebevolle, spielerische Betreuung für die kleinsten Patient:innen – angstfrei und einfühlsam.',
  },
  {
    icon: Activity,
    title: 'Parodontologie',
    desc: 'Behandlung von Zahnfleischerkrankungen für langfristig gesundes Zahnfleisch und fester Halt.',
  },
  {
    icon: Microscope,
    title: 'Digitale Diagnostik',
    desc: '3D-Diagnostik und digitale Röntgentechnik für präzise Befunde bei minimaler Strahlung.',
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="leistungen" className="py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Unsere Leistungen
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Umfassende Zahnmedizin unter einem Dach
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Von der Vorsorge bis zur ästhetischen Behandlung – wir bieten Ihnen
            das gesamte Spektrum moderner Zahnheilkunde auf höchstem Niveau.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <article
                key={s.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                  isActive
                    ? 'border-brand-300 bg-white shadow-xl shadow-brand-900/10 -translate-y-1'
                    : 'border-slate-200 bg-white/60 hover:border-brand-200 hover:bg-white'
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-600 text-white scale-110'
                      : 'bg-brand-50 text-brand-600'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <div
                  className={`mt-4 h-0.5 w-10 rounded-full bg-brand-500 transition-all duration-300 ${
                    isActive ? 'w-full opacity-100' : 'opacity-40'
                  }`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
