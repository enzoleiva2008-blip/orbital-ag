import { Link } from 'react-router-dom';
import { scrollToTop } from '../js/scrollUtils.js';
import '../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          {/* Marca */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span>🛰️</span> Orbital<span>Ag</span>
            </div>
            <p>
              Conectando a economia espacial ao agronegócio brasileiro.
              Dados de satélite em tempo real para um campo mais inteligente e sustentável.
            </p>
            <div className="footer-social" aria-label="Redes sociais">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                🐙
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                💼
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                📸
              </a>
            </div>
          </div>

          {/* Links – Produto */}
          <div className="footer-col">
            <h4>Produto</h4>
            <ul>
              <li><Link to="/solucao">A Solução</Link></li>
              <li><Link to="/plataforma">Plataforma</Link></li>
              <li><Link to="/sobre">Como funciona</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Links – Empresa */}
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/sobre">Sobre o projeto</Link></li>
              <li><Link to="/integrantes">Equipe</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          {/* Links – Recursos */}
          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li><a href="https://nasa.gov" target="_blank" rel="noopener noreferrer">NASA Open Data</a></li>
              <li><a href="https://esa.int" target="_blank" rel="noopener noreferrer">ESA – Sentinel</a></li>
              <li><a href="https://disasterscharter.org" target="_blank" rel="noopener noreferrer">Space Charter</a></li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom">
          <p>&copy; {year} OrbitalAg — Desenvolvido para FIAP Global Solution 2026/1</p>
          <div className="footer-bottom-links">
            <button
              onClick={scrollToTop}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--color-text-dim)' }}
              aria-label="Voltar ao topo"
            >
              ↑ Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
