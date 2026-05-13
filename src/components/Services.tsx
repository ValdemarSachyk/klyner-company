'use client';

import { motion } from 'framer-motion';
import { Home, BedDouble, Building2, ArrowRight } from 'lucide-react';

const mainServices = [
  {
    icon: Home,
    title: 'Sprzątanie mieszkań i domów',
    price: 'od 250 zł',
    description:
      'Kompleksowe sprzątanie Twojego domu lub mieszkania – od kuchni po łazienkę. Dbamy o każdy detal, aby Twoja przestrzeń lśniła czystością.',
    features: [
      'Odkurzanie i mycie podłóg',
      'Czyszczenie kuchni i łazienki',
      'Mycie powierzchni i mebli',
    ],
    color: '#E8F2FD',
    iconColor: '#1A7BE8',
    tag: 'Najpopularniejsze',
  },
  {
    icon: BedDouble,
    title: 'Sprzątanie Airbnb',
    price: 'od 180 zł',
    description:
      'Specjalistyczne sprzątanie pomiędzy pobytami gości. Zapewniamy hotelowy standard czystości i profesjonalne przygotowanie apartamentu na następnych turystów.',
    features: [
      'Szybki obrót – gotowość w 2–4 godz.',
      'Raport zdjęciowy ze sprzątania',
      'Priorytetowy kontakt 7 dni w tygodniu',
    ],
    color: '#FFF3E0',
    iconColor: '#E67E22',
    tag: 'Dla właścicieli Airbnb',
  },
  {
    icon: Building2,
    title: 'Sprzątanie biur i przestrzeni roboczych',
    price: 'od 200 zł',
    description:
      'Utrzymanie porządku w miejscu pracy to inwestycja w komfort i produktywność zespołu. Oferujemy elastyczne harmonogramy dostosowane do rytmu Twojej firmy.',
    features: [
      'Czyszczenie stanowisk pracy i sal',
      'Sprzątanie po godzinach pracy',
      'Umowy miesięczne z rabatem',
    ],
    color: '#E6F9F6',
    iconColor: '#2EC4A9',
    tag: 'Dla firm',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 280, damping: 24 },
  },
};

export default function Services() {
  return (
    <section id="uslugi" className="py-24" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
          >
            Nasze usługi
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-ink)' }}
          >
            Główne usługi sprzątania
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: 'var(--color-ink-secondary)' }}
          >
            Dopasowujemy zakres prac do Twoich potrzeb – raz lub regularnie, w ustalonym terminie.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-card-hover)' }}
                className="rounded-2xl p-8 flex flex-col"
                style={{
                  background: 'white',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'box-shadow 0.25s ease',
                }}
              >
                {/* Tag */}
                <span
                  className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-5"
                  style={{
                    background: service.color,
                    color: service.iconColor,
                  }}
                >
                  {service.tag}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: service.color }}
                >
                  <Icon className="w-7 h-7" style={{ color: service.iconColor }} aria-hidden />
                </div>

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="shrink-0 text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ background: service.color, color: service.iconColor }}
                  >
                    {service.price}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-ink-secondary)' }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm"
                      style={{ color: 'var(--color-ink-secondary)' }}>
                      <span
                        className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: service.iconColor }}
                        aria-hidden
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-sm font-semibold mt-auto transition-colors duration-200"
                  style={{ color: service.iconColor }}
                >
                  Zamów wycenę
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
