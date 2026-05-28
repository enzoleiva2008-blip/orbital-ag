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
              🛡️ Previsão de Desastres Climáticos
            </div>

            <h1 className="hero-title">
              Salve vidas antes que o
              <span className="highlight-blue">desastre aconteça</span>
            </h1>

            <p className="hero-desc">
              O <strong>SkyShield</strong> usa satélites meteorológicos e Inteligência Artificial
              para prever chuvas extremas, secas e enchentes com <strong>5 a 7 dias de antecedência</strong>
              — enviando alertas automáticos via Telegram para agricultores, comunidades e defesa civil.
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
                <strong>5–7</strong>
                <span>dias de antecedência</span>
              </div>
              <div className="stat-item">
                <strong>24h</strong>
                <span>atualização de dados</span>
              </div>
              <div className="stat-item">
                <strong>100%</strong>
                <span>cobertura nacional</span>
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
              <div className="satellite satellite-2">⛈️</div>

              <div className="orbit-data-card">
                <div className="card-label">Alerta emitido</div>
                <div className="card-value" style={{ color: 'var(--color-accent)', fontSize: '0.95rem' }}>
                  Chuva extrema +72h
                </div>
              </div>
              <div className="orbit-data-card">
                <div className="card-label">
                  <span className="card-dot"></span>
                  Telegram enviado
                </div>
                <div className="card-value">1.284 alertas</div>
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
            <h2>Tudo que você precisa para <br />se proteger com antecedência</h2>
            <p>Tecnologia orbital e inteligência artificial aplicadas à prevenção de desastres climáticos</p>
          </div>

          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon">⛈️</div>
              <h3>Previsão de Chuvas Extremas</h3>
              <p>
                Satélites meteorológicos monitoram padrões de pressão, umidade e temperatura
                para prever eventos de chuva intensa com até 7 dias de antecedência.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon green">🌊</div>
              <h3>Alerta de Enchentes</h3>
              <p>
                Modelos de IA combinam dados de chuva acumulada e relevo para identificar
                áreas com alto risco de inundação antes que ela ocorra.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Detecção de Secas</h3>
              <p>
                Índices de umidade do solo e precipitação abaixo do normal são detectados
                semanas antes, permitindo preparo e gestão hídrica preventiva.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon green">📱</div>
              <h3>Alertas via Telegram</h3>
              <p>
                Chatbot envia alertas automáticos personalizados por região diretamente
                no Telegram — sem necessidade de app adicional ou internet de alta velocidade.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Mapa Interativo</h3>
              <p>
                Dashboard com mapa de calor mostrando previsões e riscos por região,
                acessível a agricultores, prefeituras e órgãos de defesa civil.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon green">🚨</div>
              <h3>Integração com Defesa Civil</h3>
              <p>
                Protocolo de comunicação direta com prefeituras e Defesa Civil para
                ativação de planos de emergência com antecedência suficiente.
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
            <h2>Como o SkyShield funciona?</h2>
            <p>Do satélite ao alerta no seu celular em 4 etapas</p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number" aria-label="Etapa 1">1</div>
              <h4>Coleta Orbital</h4>
              <p>Satélites meteorológicos coletam dados de temperatura, umidade e pressão atmosférica</p>
            </div>
            <div className="step-card">
              <div className="step-number" aria-label="Etapa 2">2</div>
              <h4>Armazenamento</h4>
              <p>Banco de dados armazena histórico climático e dados em tempo real de toda a região</p>
            </div>
            <div className="step-card">
              <div className="step-number" aria-label="Etapa 3">3</div>
              <h4>Análise com IA</h4>
              <p>Modelos de Inteligência Artificial analisam padrões e preveem desastres com 5–7 dias de antecedência</p>
            </div>
            <div className="step-card">
              <div className="step-number" aria-label="Etapa 4">4</div>
              <h4>Alerta no Telegram</h4>
              <p>Chatbot envia alertas automáticos para usuários cadastrados e órgãos de emergência</p>
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
                <strong>5–7</strong>
                <span>dias de antecedência</span>
              </div>
            </div>

            <div className="impact-content">
              <div className="section-tag">Impacto Real</div>
              <h2>Quem o SkyShield protege?</h2>
              <p>
                Comunidades rurais e agricultores sofrem constantemente com desastres climáticos
                sem aviso prévio. Com o SkyShield, eles têm tempo suficiente para agir antes
                que o pior aconteça.
              </p>

              <ul className="impact-list">
                <li className="impact-item">
                  <div className="impact-icon">🌾</div>
                  <div className="impact-item-text">
                    <h4>Agricultores</h4>
                    <p>Protegem plantações, colhem antes da chuva e evitam perdas milionárias de safra</p>
                  </div>
                </li>
                <li className="impact-item">
                  <div className="impact-icon">🏘️</div>
                  <div className="impact-item-text">
                    <h4>Comunidades Rurais</h4>
                    <p>Têm tempo para evacuar com segurança e proteger seus bens antes de enchentes</p>
                  </div>
                </li>
                <li className="impact-item">
                  <div className="impact-icon">🚨</div>
                  <div className="impact-item-text">
                    <h4>Prefeituras e Defesa Civil</h4>
                    <p>Ativam planos de emergência com antecedência, reduzindo vítimas e danos materiais</p>
                  </div>
                </li>
              </ul>

              <Link to="/solucao" className="btn btn-green">
                Ver caso real de uso →
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
            <h2>O espaço como escudo. <br />A tecnologia a serviço da vida.</h2>
            <p>
              Desenvolvido por alunos da FIAP para conectar a economia espacial
              com a prevenção de desastres climáticos no Brasil.
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
