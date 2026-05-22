'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, CheckCircle } from 'lucide-react';

type FormState = 'idle' | 'sending' | 'success';

// Ensure dataLayer is always defined globally
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function pushEvent(payload: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

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
        pushEvent({ event: 'form_submit', form_name: 'contact_form' });
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                    onClick={() => pushEvent({ event: 'contact_phone' })}
                  >
                    +48 734 947 424
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(37,211,102,0.25)' }}
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    WhatsApp
                  </div>
                  <a
                    href="https://wa.me/48734947424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:underline"
                    onClick={() => pushEvent({ event: 'contact_whatsapp' })}
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8 overflow-hidden"
            style={{ background: 'white', boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }}
          >
            {state === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-col items-center text-center py-8 w-full"
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
