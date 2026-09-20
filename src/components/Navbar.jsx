import { useEffect, useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav container" aria-label="Navegación principal">
        <a href="#top" onClick={closeMenu} className="brand">
          <img src="/m_g_logo.svg" alt="Logo de Marcos Garcia" />
          <span className="brand-full">Marcos G.</span>
          <span className="brand-short">MG</span>
        </a>

        <div className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="/Marcos_Garcia_CV.pdf" download className="cv-button">
            <FileDown aria-hidden="true" />
            Descargar CV
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="mobile-nav">
          <ul className="container">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-cv">
              <a href="/Marcos_Garcia_CV.pdf" download onClick={closeMenu}>
                <FileDown aria-hidden="true" />
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
