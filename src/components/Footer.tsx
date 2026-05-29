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
            <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Profesjonalne sprzątanie w Jeleniej Górze, Szklarskiej Porębie i Karpaczu.
              Czystość, której możesz zaufać.
            </p>

            {/* Google Maps button */}
            <a
              href="https://share.google/9U54jafAe6FWFhYdT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)' }}
            >
              {/* Official Google Maps logo */}
              <svg width="17" height="24" viewBox="0 0 17 24" fill="none" aria-hidden>
                <g clipPath="url(#gmaps-clip)">
                  <path d="M4.68726 17.7793C5.39206 18.6639 6.03356 19.5957 6.60713 20.5679C7.09681 21.4822 7.30094 22.1023 7.6588 23.204C7.87828 23.8127 8.07663 23.9943 8.50309 23.9943C8.9678 23.9943 9.17864 23.6853 9.34154 23.2073C9.67981 22.1669 9.94524 21.3728 10.364 20.6226C11.1857 19.1741 12.2068 17.8869 13.21 16.6498C13.4816 16.2997 15.2377 14.2599 16.0282 12.6505C16.0282 12.6505 16.9999 10.8826 16.9999 8.41343C16.9999 6.10381 16.0417 4.50195 16.0417 4.50195L13.2828 5.22954L11.6074 9.57511L11.1929 10.1743L11.11 10.2829L10.9998 10.4188L10.8063 10.6358L10.5297 10.9081L9.03779 12.105L5.30776 14.2259L4.68726 17.7793Z" fill="#34A853"/>
                  <path d="M0.837402 12.3525C1.74777 14.4002 3.50328 16.2002 4.69102 17.7799L10.9997 10.4208C10.9997 10.4208 10.1109 11.5654 8.49869 11.5654C6.70287 11.5654 5.25209 10.1532 5.25209 8.37251C5.25209 7.15139 5.9981 6.3125 5.9981 6.3125L1.71562 7.44253L0.837402 12.3525Z" fill="#FBBC04"/>
                  <path d="M11.0701 0.378906C13.1654 1.04417 14.9588 2.44081 16.0435 4.5003L11.0016 10.4171C11.0016 10.4171 11.7476 9.56306 11.7476 8.34952C11.7476 6.52735 10.1895 5.16609 8.50633 5.16609C6.91464 5.16609 6.00049 6.30887 6.00049 6.30887V2.58135L11.0701 0.378906Z" fill="#4285F4"/>
                  <path d="M1.99316 2.99281C3.24459 1.51834 5.44662 0 8.48245 0C9.95534 0 11.065 0.380796 11.065 0.380796L5.9958 6.31167H2.40422L1.99316 2.99281Z" fill="#1A73E8"/>
                  <path d="M0.837516 12.352C0.837516 12.352 0 10.7369 0 8.39703C0 6.18556 0.872977 4.25248 1.99318 2.99219L5.99868 6.31158L0.837516 12.352Z" fill="#EA4335"/>
                </g>
                <defs>
                  <clipPath id="gmaps-clip">
                    <rect width="17" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              Znajdź nas w Google Maps
            </a>
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

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61589557928648"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.258h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/klyner.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

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
