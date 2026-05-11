'use client';

import { motion } from 'framer-motion';
import { Droplets, Sofa, Layers } from 'lucide-react';

const additionalServices = [
  {
    icon: Droplets,
    title: 'Mycie okien',
    description:
      'Profesjonalne mycie okien wewnętrznych i zewnętrznych. Krystalicznie czyste szyby bez smug, dzięki specjalistycznym środkom i technikom.',
    color: '#E8F2FD',
    iconColor: '#1A7BE8',
  },
  {
    icon: Sofa,
    title: 'Pranie kanapy',
    description:
      'Suche czyszczenie tapicerki meblowej – kanapę, fotele, krzesła. Usuwamy plamy, kurz i alergeny, przywracając meblom świeży wygląd.',
    color: '#F3E8FD',
    iconColor: '#8B5CF6',
  },
  {
    icon: Layers,
    title: 'Pranie dywanów i chodników',
    description:
      'Głębokie czyszczenie dywanów wszelkich rozmiarów i materiałów. Skutecznie usuwamy brud, zapachy i roztocza, przedłużając żywotność dywanu.',
    color: '#FFF3E0',
    iconColor: '#E67E22',
  },
];

export default function AdditionalServices() {
  return (
    <section className="py-20" style={{ background: 'white' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
          >
            Usługi dodatkowe
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-ink)' }}>
            Uzupełnij swoje sprzątanie
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-ink-secondary)' }}>
            Skorzystaj z usług dodatkowych i ciesz się kompleksową czystością w każdym zakątku domu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 280, damping: 24 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-7 border transition-shadow duration-200 hover:shadow-lg"
                style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: service.color }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.iconColor }} aria-hidden />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-ink)' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-secondary)' }}>
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
