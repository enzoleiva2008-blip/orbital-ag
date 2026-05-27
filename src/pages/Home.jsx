import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Apresentação">
        <div className="hero-bg-stars" aria-hidden="true"></div>
        <div className="hero-glow" aria-hidden="true"></div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-tag" aria-label="Categoria">
              🌱 Agro &amp; Economia Espacial
            </div>

            <h1 className="hero-title">
              Satélites a serviço do
              <span className="highlight-blue">campo brasileiro</span>
            </h1>

            <p className="hero-desc">
              O <strong>OrbitalAg</strong> transforma dados de satélites como Sentinel e Landsat
              em inteligência prática para agricultores, cooperativas e órgãos de defesa civil —
              monitorando lavouras, prevendo desastres e otimizando recursos em tempo real.
            </p>

            <div className="hero-actions">
              <Link to="/plataforma" className="btn btn-primary">
                🚀 Ver a plataforma
              </Link>
              <Link to="/solucao" className="btn btn-outline">
                Conheça a solução
              </Link>
            </div>

            <div className="hero-stats" aria-label="Estatísticas">
              <div className="stat-item">
                <strong>98%</strong>
                <span>Cobertura nacional</span>
              </div>
              <div className="stat-item">
                <strong>12h</strong>
                <span>Atualização de dados</span>
              </div>
              <div className="stat-item">
                <strong>5+</strong>
                <span>Satélites integrados</span>
              </div>
            </div>
          </div>

          {/* Visual animado */}
          <div className="hero-visual" aria-hidden="true">
            <div className="orbit-container">
              <div className="planet"></div>
              <div className="orbit-ring orbit-ring-1"></div>
              <div className="orbit-ring orbit-ring-2"></div>
              <div className="satellite">🛰️</div>
              <div className="satellite satellite-2">🌿</div>

              <div className="orbit-data-card">
                <div className="card-label">NDVI Index</div>
                <div className="card-value">0.74</div>
              </div>
              <div className="orbit-data-card">
                <div className="card-label">
                  <span className="card-dot"></span>
                  Alerta ativo
                </div>
                <div className="card-value" style={{ color: 'var(--color-accent)', fontSize: '0.95rem' }}>
                  Seca moderada
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section features-section" aria-label="Recursos principais">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Funcionalidades</div>
            <h2>Tudo que o campo precisa, <br />vindo do espaço</h2>
            <p>Tecnologia orbital aplicada a problemas reais do agronegócio brasileiro</p>
          </div>

          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon">🌾</div>
              <h3>Monitoramento de Lavouras</h3>
              <p>
                Análise do índice de vegetação (NDVI) de qualquer talhão com imagens
                atualizadas a cada 12 horas por satélites Sentinel-2.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon green">⛈️</div>
              <h3>Previsão Climática</h3>
              <p>
                Alertas antecipados de secas, geadas e chuvas intensas com base em
                dados termais e de umidade coletados por satélite.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">💧</div>
              <h3>Gestão de Recursos Hídricos</h3>
              <p>
                Mapeamento de reservatórios, rios e aquíferos para otimização do
                uso de água na irrigação e prevenção de escassez.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon green">🔥</div>
              <h3>Detecção de Queimadas</h3>
              <p>
                Identificação em tempo real de focos de calor e desmatamento através
                de sensores infravermelhos do satélite MODIS / Landsat.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Dashboard de Análise</h3>
              <p>
                Painel interativo com gráficos, mapas e relatórios personalizados
                para tomada de decisão embasada em dados reais.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon green">🚨</div>
              <h3>Alertas de Desastre</h3>
              <p>
                Sistema de notificação para defesa civil, integrado ao Space Charter
                da ESA para resposta rápida a emergências ambientais.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="section how-section" aria-label="Como funciona">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Processo</div>
            <h2>Como o OrbitalAg funciona?</h2>
            <p>Da órbita ao campo em 4 etapas</p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number" aria-label="Etapa 1">1</div>
              <h4>Captura Orbital</h4>
              <p>Satélites coletam imagens multiespectrais da superfície a cada passagem</p>
            </div>
            <div className="step-card">
              <div className="step-number" aria-label="Etapa 2">2</div>
              <h4>Processamento</h4>
              <p>Algoritmos processam as bandas espectrais e calculam índices agronômicos</p>
            </div>
            <div className="step-card">
              <div className="step-number" aria-label="Etapa 3">3</div>
              <h4>Análise com IA</h4>
              <p>Modelos de inteligência artificial interpretam padrões e geram alertas preditivos</p>
            </div>
            <div className="step-card">
              <div className="step-number" aria-label="Etapa 4">4</div>
              <h4>Decisão no Campo</h4>
              <p>Agricultores e gestores recebem insights claros e acionáveis no dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACTO ===== */}
      <section className="section impact-section" aria-label="Impacto da solução">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-image">
              <div className="impact-image-box">
                <div className="map-visual">
                  <div className="map-grid" aria-hidden="true"></div>
                  <div className="map-ping map-ping-1" aria-hidden="true"></div>
                  <div className="map-ping map-ping-2" aria-hidden="true"></div>
                  <div className="map-ping map-ping-3" aria-hidden="true"></div>
                </div>
              </div>
              <div className="impact-badge">
                <strong>+38%</strong>
                <span>produtividade média</span>
              </div>
            </div>

            <div className="impact-content">
              <div className="section-tag">Impacto Real</div>
              <h2>Tecnologia espacial resolvendo problemas terrestres</h2>
              <p>
                O OrbitalAg conecta a nova economia espacial com os maiores desafios
                do agronegócio brasileiro, contribuindo diretamente com os Objetivos de
                Desenvolvimento Sustentável da ONU.
              </p>

              <ul className="impact-list">
                <li className="impact-item">
                  <div className="impact-icon">🌱</div>
                  <div className="impact-item-text">
                    <h4>Segurança Alimentar</h4>
                    <p>Redução de perdas por pragas e clima com alertas antecipados de até 72h</p>
                  </div>
                </li>
                <li className="impact-item">
                  <div className="impact-icon">💧</div>
                  <div className="impact-item-text">
                    <h4>Uso Inteligente da Água</h4>
                    <p>Economia de até 40% no consumo hídrico com irrigação orientada por dados</p>
                  </div>
                </li>
                <li className="impact-item">
                  <div className="impact-icon">🌍</div>
                  <div className="impact-item-text">
                    <h4>Menos CO₂</h4>
                    <p>Monitoramento de desmatamento e emissões de carbono em tempo real</p>
                  </div>
                </li>
              </ul>

              <Link to="/solucao" className="btn btn-green">
                Explore a solução completa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section cta-section" aria-label="Chamada para ação">
        <div className="container">
          <div className="cta-box">
            <div className="section-tag">Global Solution 2026/1 — FIAP</div>
            <h2>O espaço é a nova fronteira. <br />O campo é nossa missão.</h2>
            <p>
              Desenvolvido por alunos da FIAP para conectar a economia espacial
              com soluções práticas para a agricultura e o meio ambiente.
            </p>
            <div className="cta-actions">
              <Link to="/plataforma" className="btn btn-primary">🚀 Acessar a plataforma</Link>
              <Link to="/integrantes" className="btn btn-outline">👥 Conhecer a equipe</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
