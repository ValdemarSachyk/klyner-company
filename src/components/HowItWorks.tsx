'use client';

import { motion } from 'framer-motion';
import { MessageSquare, CalendarCheck, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Skontaktuj się z nami',
    description:
      'Napisz do nas lub zadzwoń. Opowiedz o potrzebach – rodzaj przestrzeni, częstotliwość, preferowany termin.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Otrzymaj wycenę i umów termin',
    description:
      'W ciągu kilku godzin przesyłamy bezpłatną, wiążącą wycenę. Ustalamy datę i godzinę sprzątania.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Ciesz się czystością',
    description:
      'Nasz zespół przyjeżdża punktualnie i wykonuje pracę z najwyższą starannością. Odbiór gotowej przestrzeni – nieskazitelnie czystej.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20" style={{ background: 'white' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
          >
            Jak działamy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-ink)' }}>
            Trzy proste kroki
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-ink-secondary)' }}>
            Zamówienie sprzątania jest prostsze, niż myślisz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px"
            style={{ background: 'var(--color-border)' }}
            aria-hidden
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center relative"
              >
                <div
                  className="relative w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-6"
                  style={{ background: 'var(--color-primary-light)' }}
                >
                  <Icon className="w-8 h-8" style={{ color: 'var(--color-primary)' }} aria-hidden />
                  <span
                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white"
                    style={{ background: 'var(--color-primary)' }}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-ink)' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--color-ink-secondary)' }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
