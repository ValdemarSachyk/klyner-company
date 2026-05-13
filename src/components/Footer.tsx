import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t"
      style={{ background: 'var(--color-ink)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo-white.svg"
                alt="KLYNER"
                width={127}
                height={32}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Profesjonalne sprzątanie w Jeleniej Górze, Szklarskiej Porębie i Karpaczu.
              Czystość, której możesz zaufać.
            </p>
          </div>

          {/* Usługi */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Usługi</h3>
            <ul className="flex flex-col gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {[
                'Sprzątanie mieszkań',
                'Sprzątanie Airbnb',
                'Sprzątanie biur',
                'Mycie okien',
                'Pranie kanapy',
                'Pranie dywanów',
              ].map((s) => (
                <li key={s}>
                  <a href="#uslugi" className="hover:text-white transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Kontakt</h3>
            <ul className="flex flex-col gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <li>Jelenia Góra</li>
              <li>Szklarska Poręba</li>
              <li>Karpacz</li>
              <li className="mt-2">
                <a href="tel:+48734947424" className="hover:text-white transition-colors duration-200">
                  +48 734 947 424
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@klyner.pl" className="hover:text-white transition-colors duration-200">
                  kontakt@klyner.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
        >
          <p>© {year} KLYNER. Wszelkie prawa zastrzeżone.</p>
          <p>
            Design &amp; Development:{' '}
            <a
              href="https://www.vxldemar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              VXLDEMAR
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
