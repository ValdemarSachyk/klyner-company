'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, CheckCircle } from 'lucide-react';

type FormState = 'idle' | 'sending' | 'success';

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Imię jest wymagane';
    if (!form.phone.trim()) e.phone = 'Telefon jest wymagany';
    else if (!/^[\d\s+\-()]{7,}$/.test(form.phone)) e.phone = 'Podaj prawidłowy numer telefonu';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setState('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '0fe49ee0-dc28-41d3-a7e8-cb10a1169c0a',
          name: form.name,
          phone: form.phone,
          service: form.service,
          message: form.message,
          subject: `Nowe zapytanie od ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setState('success');
      } else {
        throw new Error(data.message);
      }
    } catch {
      setState('idle');
      setErrors({ name: 'Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas.' });
    }
  };

  return (
    <section
      id="kontakt"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1260C0 0%, #1A7BE8 60%, #2EC4A9 100%)' }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'white' }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'white' }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Zamów bezpłatną wycenę
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Skontaktuj się z nami – odpiszemy lub oddzwonimy w ciągu kilku godzin.
              Wycena jest zawsze bezpłatna i niezobowiązująca.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <Phone className="w-5 h-5 text-white" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    Telefon
                  </div>
                  <a
                    href="tel:+48734947424"
                    className="text-white font-semibold hover:underline"
                  >
                    +48 734 947 424
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <Mail className="w-5 h-5 text-white" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    E-mail
                  </div>
                  <a
                    href="mailto:kontakt@klyner.pl"
                    className="text-white font-semibold hover:underline"
                  >
                    kontakt@klyner.pl
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8"
            style={{ background: 'white', boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }}
          >
            {state === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'var(--color-accent-light)' }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-ink)' }}>
                  Wiadomość wysłana!
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-ink-secondary)' }}>
                  Skontaktujemy się z Tobą wkrótce. Dziękujemy za zaufanie!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-ink)' }}>
                  Wyślij zapytanie
                </h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5"
                      style={{ color: 'var(--color-ink)' }}>
                      Imię i nazwisko <span aria-hidden className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Jan Kowalski"
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-200 focus:ring-2"
                      style={{
                        borderColor: errors.name ? '#E53E3E' : 'var(--color-border)',
                        color: 'var(--color-ink)',
                        background: 'var(--color-bg)',
                      }}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      aria-required
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5"
                      style={{ color: 'var(--color-ink)' }}>
                      Telefon <span aria-hidden className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="+48 734 947 424"
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-200"
                      style={{
                        borderColor: errors.phone ? '#E53E3E' : 'var(--color-border)',
                        color: 'var(--color-ink)',
                        background: 'var(--color-bg)',
                      }}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      aria-invalid={!!errors.phone}
                      aria-required
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs text-red-500" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1.5"
                      style={{ color: 'var(--color-ink)' }}>
                      Rodzaj usługi
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-200"
                      style={{
                        borderColor: 'var(--color-border)',
                        color: form.service ? 'var(--color-ink)' : 'var(--color-ink-muted)',
                        background: 'var(--color-bg)',
                      }}
                    >
                      <option value="" disabled>Wybierz usługę…</option>
                      <option value="mieszkanie">Sprzątanie mieszkania / domu</option>
                      <option value="airbnb">Sprzątanie Airbnb</option>
                      <option value="biuro">Sprzątanie biura</option>
                      <option value="okna">Mycie okien</option>
                      <option value="kanapa">Pranie kanapy</option>
                      <option value="dywan">Pranie dywanu</option>
                      <option value="inne">Inne</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5"
                      style={{ color: 'var(--color-ink)' }}>
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Opisz swoją przestrzeń i oczekiwania…"
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-200 resize-none"
                      style={{
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-ink)',
                        background: 'var(--color-bg)',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-[10px] text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ background: 'var(--color-primary)', boxShadow: 'var(--shadow-btn)' }}
                  >
                    {state === 'sending' ? (
                      <>
                        <span
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                          aria-hidden
                        />
                        Wysyłanie…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden />
                        Wyślij zapytanie
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--color-ink-muted)' }}>
                    Odpiszemy lub oddzwonimy w ciągu kilku godzin.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
