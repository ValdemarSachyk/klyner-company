'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users, Leaf, Clock, CreditCard, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Gwarancja satysfakcji',
    description:
      'Jeśli efekt Cię nie satysfakcjonuje – wracamy i poprawiamy bezpłatnie. Twoja satysfakcja jest dla nas priorytetem.',
  },
  {
    icon: Users,
    title: 'Profesjonalny i sprawdzony zespół',
    description:
      'Nasi pracownicy są starannie dobrani, przeszkoleni i ubezpieczeni. Możesz nam zaufać – wchodzimy do Twojego domu z szacunkiem.',
  },
  {
    icon: Leaf,
    title: 'Ekologiczne środki czystości',
    description:
      'Stosujemy preparaty bezpieczne dla dzieci, zwierząt i środowiska. Dobra jakość powietrza i brak toksycznych substancji.',
  },
  {
    icon: Sparkles,
    title: 'Profesjonalny sprzęt',
    description:
      'Dysponujemy nowoczesnym sprzętem czyszczącym, który zapewnia wyniki niedostępne przy użyciu domowych środków.',
  },
  {
    icon: Clock,
    title: 'Elastyczne terminy',
    description:
      'Działamy 7 dni w tygodniu, dopasowując się do Twojego harmonogramu. Możliwe sprzątanie rano, wieczorem i w weekendy.',
  },
  {
    icon: CreditCard,
    title: 'Przejrzyste ceny bez ukrytych opłat',
    description:
      'Oferujemy jasną wycenę przed rozpoczęciem pracy. Żadnych niespodzianek – wiesz dokładnie za co płacisz.',
  },
];

export default function WhyUs() {
  return (
    <section id="dlaczego-my" className="py-24" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
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
            Dlaczego KLYNER?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-ink)' }}>
            Więcej niż zwykłe sprzątanie
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-ink-secondary)' }}>
            Wyróżniamy się standardami, na których możesz polegać – każdego dnia, przy każdym zleceniu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', stiffness: 280, damping: 24 }}
                className="rounded-2xl p-7"
                style={{ background: 'white', boxShadow: 'var(--shadow-card)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'var(--color-primary-light)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: 'var(--color-primary)' }} aria-hidden />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-ink)' }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-secondary)' }}>
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
