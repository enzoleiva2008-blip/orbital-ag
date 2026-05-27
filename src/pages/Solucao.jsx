import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function Solucao() {
  return (
    <>
      <section className="page-hero" aria-label="A solução">
        <div className="container">
          <div className="section-tag">Página da Solução</div>
          <h1>Como o OrbitalAg resolve o problema</h1>
          <p>
            Entenda o problema real que motivou a criação do OrbitalAg e como
            nossa solução transforma dados orbitais em impacto concreto.
          </p>
        </div>
      </section>

      {/* ===== Problema vs Solução ===== */}
      <section className="section" aria-label="Problema e solução">
        <div className="container">
          <div className="solution-intro">

            <div>
              <h2>Da dor à oportunidade</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                O Brasil desperdiça bilhões em perdas agrícolas anuais que poderiam
                ser evitadas com informação antecipada. Ao mesmo tempo, satélites
                já coletam os dados que resolveriam esses problemas — mas eles
                ficam inacessíveis para quem mais precisa.
              </p>

              <div className="problem-box">
                <h4>⚠️ O problema</h4>
                <p>
                  Agricultores reagem <strong>depois</strong> das perdas. Secas, pragas, geadas
                  e queimadas são detectadas tardiamente, causando prejuízos irreversíveis.
                  A defesa civil não tem visibilidade prévia para agir preventivamente.
                  O desmatamento avança sem fiscalização em tempo real.
                </p>
              </div>

              <div className="solution-box">
                <h4>✅ Nossa solução</h4>
                <p>
                  O OrbitalAg integra dados abertos de satélites e os processa com
                  algoritmos de análise espectral e IA para emitir <strong>alertas
                  antecipados</strong> de até 72 horas, permitindo ação preventiva
                  antes que os prejuízos ocorram.
                </p>
              </div>
            </div>

            <div className="solution-visual-box" aria-hidden="true">
              <div className="satellite-visual">
                <div className="sat-signal"></div>
                <div className="sat-signal"></div>
                <div className="sat-body">🛰️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Módulos ===== */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }} aria-label="Módulos da plataforma">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Módulos</div>
            <h2>Os 6 módulos do OrbitalAg</h2>
            <p>Cada módulo resolve uma necessidade específica do agronegócio e da gestão ambiental</p>
          </div>

          <div className="modules-grid">
            <article className="module-card">
              <div className="module-number">Módulo 01</div>
              <h4>🌾 Monitoramento NDVI</h4>
              <p>
                Análise contínua do índice de vegetação de qualquer área cadastrada,
                com alertas automáticos quando o NDVI cai abaixo de limiares críticos
                indicando estresse hídrico ou infestação de pragas.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 02</div>
              <h4>⛈️ Previsão Climática</h4>
              <p>
                Integração de dados de temperatura de superfície (LST) e umidade
                do solo obtidos pelo Landsat 9 e MODIS para prever eventos de
                seca, geada e chuvas intensas com até 72h de antecedência.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 03</div>
              <h4>🔥 Detecção de Queimadas</h4>
              <p>
                Monitoramento em tempo real de focos de calor e incêndios florestais
                através dos sensores termais MODIS/VIIRS, com alertas automáticos
                para coordenadas de propriedades cadastradas.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 04</div>
              <h4>💧 Recursos Hídricos</h4>
              <p>
                Mapeamento de corpos d'água, monitoramento de níveis de reservatórios
                e rios com dados SAR (Sentinel-1) para gestão inteligente da
                irrigação e prevenção de enchentes.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 05</div>
              <h4>🌳 Desmatamento</h4>
              <p>
                Detecção de mudanças na cobertura florestal através de análise
                multitemporal de imagens Sentinel-2, identificando áreas desmatadas
                ilegalmente e rastreando o avanço do desmatamento.
              </p>
            </article>

            <article className="module-card">
              <div className="module-number">Módulo 06</div>
              <h4>🚨 Alertas de Emergência</h4>
              <p>
                Sistema integrado ao Space Charter da ESA para coordenação de
                resposta a desastres naturais, fornecendo dados geoespaciais
                em tempo real para defesa civil e socorros.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Arquitetura ===== */}
      <section className="section" aria-label="Arquitetura técnica">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Arquitetura Técnica</div>
            <h2>Como os dados fluem da órbita ao campo</h2>
          </div>

          <div className="arch-diagram">
            <div className="arch-layers">

              <div className="arch-layer">
                <div className="arch-layer-label">Camada de coleta — Satélites</div>
                <div className="arch-layer-items">
                  <span className="arch-chip primary">🛰️ Sentinel-2 (ESA)</span>
                  <span className="arch-chip primary">🌍 Landsat 9 (NASA)</span>
                  <span className="arch-chip primary">📡 MODIS / VIIRS</span>
                  <span className="arch-chip primary">🌊 Sentinel-1 SAR</span>
                </div>
              </div>

              <div className="arch-arrow" aria-hidden="true">↓</div>

              <div className="arch-layer">
                <div className="arch-layer-label">Camada de processamento</div>
                <div className="arch-layer-items">
                  <span className="arch-chip">Cálculo de NDVI</span>
                  <span className="arch-chip">Análise de LST</span>
                  <span className="arch-chip">Detecção de anomalias</span>
                  <span className="arch-chip">Modelos de IA</span>
                </div>
              </div>

              <div className="arch-arrow" aria-hidden="true">↓</div>

              <div className="arch-layer">
                <div className="arch-layer-label">Camada de análise</div>
                <div className="arch-layer-items">
                  <span className="arch-chip green">📊 Geração de alertas</span>
                  <span className="arch-chip green">📈 Relatórios preditivos</span>
                  <span className="arch-chip green">🗺️ Mapas temáticos</span>
                </div>
              </div>

              <div className="arch-arrow" aria-hidden="true">↓</div>

              <div className="arch-layer">
                <div className="arch-layer-label">Camada de apresentação — OrbitalAg</div>
                <div className="arch-layer-items">
                  <span className="arch-chip primary">⚛️ React + Vite</span>
                  <span className="arch-chip primary">📱 Dashboard Responsivo</span>
                  <span className="arch-chip primary">🔔 Notificações em tempo real</span>
                  <span className="arch-chip primary">📋 Relatórios PDF</span>
                </div>
              </div>

              <div className="arch-arrow" aria-hidden="true">↓</div>

              <div className="arch-layer">
                <div className="arch-layer-label">Usuários finais</div>
                <div className="arch-layer-items">
                  <span className="arch-chip green">🌾 Agricultores</span>
                  <span className="arch-chip green">🏢 Cooperativas</span>
                  <span className="arch-chip green">🚒 Defesa Civil</span>
                  <span className="arch-chip green">🌿 ONGs Ambientais</span>
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
