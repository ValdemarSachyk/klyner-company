'use client';

import { motion } from 'framer-motion';
import { Shield, Leaf, Clock, Award, ThumbsUp } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'Ubezpieczeni', sub: 'Pełna ochrona' },
  { icon: Leaf, label: 'Ekologiczne środki', sub: 'Bezpieczne dla rodziny' },
  { icon: Clock, label: '7 dni w tygodniu', sub: 'Elastyczne terminy' },
  { icon: Award, label: 'Wysoka jakość', sub: 'Profesjonalny sprzęt' },
  { icon: ThumbsUp, label: 'Gwarancja satysfakcji', sub: 'Lub zwrot pieniędzy' },
];

export default function TrustBar() {
  return (
    <section
      className="py-10 border-y"
      style={{
        background: 'white',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 md:flex-row md:flex-wrap md:gap-0 md:justify-between md:items-center"
        >
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-12 h-12 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--color-primary-light)' }}
                >
                  <Icon className="w-6 h-6 md:w-5 md:h-5" style={{ color: 'var(--color-primary)' }} aria-hidden />
                </div>
                <div>
                  <div className="text-xl md:text-base font-semibold" style={{ color: 'var(--color-ink)' }}>
                    {badge.label}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--color-ink-muted)' }}>
                    {badge.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
