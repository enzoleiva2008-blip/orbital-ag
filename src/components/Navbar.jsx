import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { onScrolled } from '../js/scrollUtils.js';
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const cleanup = onScrolled(setScrolled, 10);
    return cleanup;
  }, []);

  /* Fecha menu ao navegar */
  const closeMenu = () => setMenuOpen(false);

  /* Bloqueia scroll quando menu mobile está aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { to: '/',           label: 'Início'      },
    { to: '/sobre',      label: 'Sobre'       },
    { to: '/solucao',    label: 'Solução'     },
    { to: '/plataforma', label: 'Plataforma'  },
    { to: '/faq',        label: 'FAQ'         },
    { to: '/contato',    label: 'Contato'     },
    { to: '/integrantes',label: 'Equipe'      },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Menu principal">
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={closeMenu} aria-label="OrbitalAg - Início">
          <span className="logo-icon">🛰️</span>
          Orbital<span>Ag</span>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contato" className="nav-cta" onClick={closeMenu}>
              Fale conosco
            </NavLink>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
