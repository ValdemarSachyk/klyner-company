'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const areas = [
  {
    name: 'Jelenia Góra',
    description: 'Centrum działalności KLYNER. Obsługujemy wszystkie dzielnice miasta, zarówno mieszkania, jak i biura.',
    primary: true,
  },
  {
    name: 'Szklarska Poręba',
    description: 'Obsługujemy domy, apartamenty i obiekty turystyczne w Szklarskiej Porębie i okolicach.',
    primary: false,
  },
  {
    name: 'Karpacz',
    description: 'Specjalizujemy się w sprzątaniu obiektów Airbnb i noclegowych w popularnym kurorcie Karpacz.',
    primary: false,
  },
];

export default function ServiceAreas() {
  return (
    <section id="obszar" className="py-20" style={{ background: 'var(--color-bg)' }}>
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
            style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
          >
            Obszar działania
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-ink)' }}>
            Gdzie działamy?
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-ink-secondary)' }}>
            Obsługujemy Jelenią Górę i okoliczne miejscowości. Masz pytanie o swój adres? Skontaktuj się z nami!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 280, damping: 24 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: area.primary
                  ? 'var(--color-primary)'
                  : 'white',
                boxShadow: area.primary
                  ? '0 8px 24px rgba(26,123,232,0.25)'
                  : 'var(--shadow-card)',
              }}
            >
              {area.primary && (
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"
                  style={{ background: 'white' }}
                  aria-hidden
                />
              )}
              <div className="relative">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: area.primary ? 'rgba(255,255,255,0.2)' : 'var(--color-primary-light)',
                  }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: area.primary ? 'white' : 'var(--color-primary)' }}
                    aria-hidden
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: area.primary ? 'white' : 'var(--color-ink)' }}
                >
                  {area.name}
                </h3>
                {area.primary && (
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                    style={{ background: 'rgba(255,255,255,0.25)', color: 'white' }}>
                    Główna siedziba
                  </span>
                )}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: area.primary ? 'rgba(255,255,255,0.85)' : 'var(--color-ink-secondary)' }}
                >
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 text-sm"
          style={{ color: 'var(--color-ink-muted)' }}
        >
          Obsługujemy również inne miejscowości w Kotlinie Jeleniogórskiej – zapytaj o dostępność.
        </motion.p>
      </div>
    </section>
  );
}
