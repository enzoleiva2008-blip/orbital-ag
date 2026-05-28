import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function Solucao() {
  return (
    <>
      <section className="page-hero" aria-label="A solução">
        <div className="container">
          <div className="section-tag">A Solução</div>
          <h1>Como o SkyShield prevê desastres</h1>
          <p>
            Entenda o problema real que motivou o SkyShield e como nossa solução
            transforma dados satelitais em alertas que salvam vidas.
          </p>
        </div>
      </section>

      {/* ===== Problema vs Solução ===== */}
      <section className="section" aria-label="Problema e solução">
        <div className="container">
          <div className="solution-intro">

            <div>
              <h2>Da tragédia à prevenção</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                O Brasil é um dos países mais atingidos por desastres climáticos do mundo.
                Enchentes, secas e chuvas extremas matam centenas de pessoas e destroem
                bilhões em plantações e infraestrutura todos os anos — em grande parte
                por falta de aviso com tempo suficiente para agir.
              </p>

              <div className="problem-box">
                <h4>⚠️ O problema</h4>
                <p>
                  Agricultores e comunidades rurais <strong>reagem depois</strong> que o desastre ocorre.
                  Os sistemas de alerta existentes avisam com apenas 24–48 horas de antecedência —
                  tempo insuficiente para evacuar famílias, colher plantações ou preparar
                  planos de emergência adequados.
                </p>
              </div>

              <div className="solution-box">
                <h4>✅ Nossa solução</h4>
                <p>
                  O SkyShield usa dados de satélites meteorológicos e modelos de IA para
                  emitir alertas com <strong>5 a 7 dias de antecedência</strong>, entregues
                  diretamente no Telegram — dando tempo real para agir antes que o pior aconteça.
                </p>
              </div>
            </div>

            <div className="solution-visual-box" aria-hidden="true">
              <div className="satellite-visual">
                <div className="sat-signal"></div>
                <div className="sat-signal"></div>
                <div className="sat-body">🛡️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Caso Real ===== */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }} aria-label="Exemplo real de uso">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Exemplo Real</div>
            <h2>João, agricultor em Minas Gerais</h2>
            <p>Como o SkyShield transforma a vida de quem mais precisa</p>
          </div>

          <div className="modules-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <article className="module-card">
              <div className="module-number">Dia 1</div>
              <h4>📡 Satélite detecta anomalia</h4>
              <p>GOES-16 detecta formação de sistema de baixa pressão intensa sobre o Atlântico Sul.</p>
            </article>
            <article className="module-card">
              <div className="module-number">Dia 2</div>
              <h4>🤖 IA analisa e prevê</h4>
              <p>Modelo de IA calcula trajetória e intensidade: chuva extrema em 5 dias em Minas Gerais.</p>
            </article>
            <article className="module-card">
              <div className="module-number">Dia 3</div>
              <h4>📱 Alerta no Telegram</h4>
              <p>João recebe: "🛡️ Chuva extrema prevista em 5 dias. Recomendamos colheita antecipada."</p>
            </article>
            <article className="module-card">
              <div className="module-number">Dia 7</div>
              <h4>✅ Safra protegida</h4>
              <p>João colhe antes da chuva. A plantação está segura. Sua renda e família estão protegidas.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Módulos ===== */}
      <section className="section" aria-label="Módulos da plataforma">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Módulos</div>
            <h2>Os 6 módulos do SkyShield</h2>
            <p>Cada módulo resolve uma necessidade específica na cadeia de prevenção de desastres</p>
          </div>

          <div className="modules-grid">
            <article className="module-card">
              <div className="module-number">Módulo 01</div>
              <h4>⛈️ Previsão de Chuva Extrema</h4>
              <p>
                Análise de pressão atmosférica, temperatura oceânica e umidade relativa
                para prever eventos de precipitação acima de 50mm/h com até 7 dias de antecedência.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 02</div>
              <h4>🌊 Alerta de Enchentes</h4>
              <p>
                Cruzamento de dados de chuva acumulada com modelos de relevo (DEM) para
                identificar bacias hidrográficas em risco de transbordamento.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 03</div>
              <h4>🔥 Detecção de Secas</h4>
              <p>
                Monitoramento de déficit hídrico acumulado e temperatura de superfície
                para identificar regiões em processo de desertificação ou seca severa.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 04</div>
              <h4>📱 Chatbot Telegram</h4>
              <p>
                Bot automático que envia alertas personalizados por CEP ou cidade,
                com nível de risco (atenção/alerta/emergência) e orientações de segurança.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 05</div>
              <h4>🗺️ Mapa Interativo</h4>
              <p>
                Dashboard com mapa de calor do Brasil mostrando previsões climáticas
                por região, acessível em qualquer dispositivo via navegador.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 06</div>
              <h4>🚨 Integração Defesa Civil</h4>
              <p>
                Canal de comunicação direta com prefeituras e Defesa Civil para
                ativação automática de planos de emergência quando risco crítico é detectado.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Arquitetura ===== */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }} aria-label="Arquitetura técnica">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Arquitetura Técnica</div>
            <h2>Como os dados fluem do satélite ao alerta</h2>
          </div>

          <div className="arch-diagram">
            <div className="arch-layers">

              <div className="arch-layer">
                <div className="arch-layer-label">Camada de coleta — Satélites Meteorológicos</div>
                <div className="arch-layer-items">
                  <span className="arch-chip primary">🛰️ GOES-16 (NOAA)</span>
                  <span className="arch-chip primary">🌍 Sentinel-3 (ESA)</span>
                  <span className="arch-chip primary">📡 NOAA-20</span>
                  <span className="arch-chip primary">🌐 INMET / CPTEC</span>
                </div>
              </div>

              <div className="arch-arrow" aria-hidden="true">↓</div>

              <div className="arch-layer">
                <div className="arch-layer-label">Camada de armazenamento e processamento</div>
                <div className="arch-layer-items">
                  <span className="arch-chip">Banco de dados climáticos</span>
                  <span className="arch-chip">Histórico de 20 anos</span>
                  <span className="arch-chip">Dados em tempo real (6h/6h)</span>
                </div>
              </div>

              <div className="arch-arrow" aria-hidden="true">↓</div>

              <div className="arch-layer">
                <div className="arch-layer-label">Camada de inteligência artificial</div>
                <div className="arch-layer-items">
                  <span className="arch-chip green">🤖 Modelo de previsão de chuvas</span>
                  <span className="arch-chip green">📊 Análise de risco por região</span>
                  <span className="arch-chip green">⚡ Geração automática de alertas</span>
                </div>
              </div>

              <div className="arch-arrow" aria-hidden="true">↓</div>

              <div className="arch-layer">
                <div className="arch-layer-label">Camada de distribuição</div>
                <div className="arch-layer-items">
                  <span className="arch-chip primary">✈️ Chatbot Telegram</span>
                  <span className="arch-chip primary">🗺️ Dashboard Web (SkyShield)</span>
                  <span className="arch-chip primary">🚨 API Defesa Civil</span>
                </div>
              </div>

              <div className="arch-arrow" aria-hidden="true">↓</div>

              <div className="arch-layer">
                <div className="arch-layer-label">Usuários finais</div>
                <div className="arch-layer-items">
                  <span className="arch-chip green">🌾 Agricultores</span>
                  <span className="arch-chip green">🏘️ Comunidades Rurais</span>
                  <span className="arch-chip green">🚒 Defesa Civil</span>
                  <span className="arch-chip green">🏙️ Populações Urbanas</span>
                </div>
              </div>

            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/plataforma" className="btn btn-primary">
              🚀 Ver a plataforma em ação
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
