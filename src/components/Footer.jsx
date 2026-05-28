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
              <span>🛡️</span> Sky<span>Shield</span>
            </div>
            <p>
              Previsão de desastres climáticos com 5 a 7 dias de antecedência.
              Satélites meteorológicos + IA + alertas automáticos no Telegram
              para proteger vidas e plantações.
            </p>
            <div className="footer-social" aria-label="Redes sociais">
              <a href="https://github.com/enzoleiva2008-blip/orbital-ag" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                🐙
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                💼
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
                ✈️
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
              <li><a href="https://inmet.gov.br" target="_blank" rel="noopener noreferrer">INMET</a></li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom">
          <p>&copy; {year} SkyShield — Desenvolvido para FIAP Global Solution 2026/1</p>
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
