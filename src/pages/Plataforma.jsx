import { useState } from 'react';
import '../styles/pages.css';

/* Dados simulados para o dashboard */
const kpis = [
  { label: 'Áreas Monitoradas', value: '1.284', change: '+12 hoje' },
  { label: 'Alertas Ativos',    value: '7',     change: '3 críticos' },
  { label: 'NDVI Médio',        value: '0.68',  change: '+0.04 vs ontem' }
];

const menuItems = [
  { icon: '🗺️', label: 'Mapa Geral',    active: true  },
  { icon: '🌾', label: 'Lavouras',       active: false },
  { icon: '💧', label: 'Hídrico',        active: false },
  { icon: '🔥', label: 'Queimadas',      active: false },
  { icon: '⛈️', label: 'Clima',          active: false },
  { icon: '📊', label: 'Relatórios',     active: false },
  { icon: '🔔', label: 'Alertas',        active: false },
];

const barData = [
  { label: 'Jan', height: 55, type: 'normal' },
  { label: 'Fev', height: 70, type: 'normal' },
  { label: 'Mar', height: 45, type: 'normal' },
  { label: 'Abr', height: 80, type: 'green'  },
  { label: 'Mai', height: 65, type: 'normal' },
  { label: 'Jun', height: 40, type: 'normal' },
  { label: 'Jul', height: 90, type: 'green'  },
];

const alerts = [
  {
    icon: '⚠️',
    title: 'Estresse hídrico detectado',
    desc: 'NDVI abaixo de 0.40 em 3 talhões — Região de Ribeirão Preto',
    time: 'Há 2 horas'
  },
  {
    icon: '🔥',
    title: 'Foco de calor próximo',
    desc: 'Foco ativo a 15 km da área monitorada — Mato Grosso do Sul',
    time: 'Há 5 horas'
  },
  {
    icon: '⛈️',
    title: 'Alerta de chuva intensa',
    desc: 'Previsão de 80 mm em 24h — Risco de alagamento em talhões planos',
    time: 'Há 8 horas'
  },
  {
    icon: '✅',
    title: 'NDVI normalizado',
    desc: 'Área Fazenda São Bento voltou ao nível verde após irrigação',
    time: 'Há 1 dia'
  }
];

const features = [
  {
    icon: '🗺️',
    title: 'Mapa Interativo',
    desc: 'Visualize suas áreas em camadas: NDVI, temperatura, umidade e queimadas sobrepostas no mapa.'
  },
  {
    icon: '📈',
    title: 'Gráficos Históricos',
    desc: 'Compare a evolução do NDVI e do clima nos últimos 12 meses por talhão.'
  },
  {
    icon: '🔔',
    title: 'Notificações Push',
    desc: 'Receba alertas instantâneos no celular quando um limiar crítico for atingido em suas áreas.'
  },
  {
    icon: '📋',
    title: 'Relatórios PDF',
    desc: 'Exporte relatórios completos com imagens de satélite, gráficos e recomendações por e-mail.'
  }
];

export default function Plataforma() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeTab, setActiveTab] = useState('ndvi');

  return (
    <>
      <section className="page-hero" aria-label="Plataforma">
        <div className="container">
          <div className="section-tag">Plataforma OrbitalAg</div>
          <h1>Dashboard de Monitoramento</h1>
          <p>
            Visualize como o OrbitalAg apresenta os dados de satélite em um painel
            intuitivo, com KPIs, gráficos e alertas em tempo real.
          </p>
        </div>
      </section>

      {/* ===== Dashboard Preview ===== */}
      <section className="section" aria-label="Preview do dashboard">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Demonstração</div>
            <h2>O painel de controle do campo</h2>
            <p>Interface interativa que simula a experiência real da plataforma</p>
          </div>

          <div className="dashboard-preview" role="region" aria-label="Dashboard simulado">
            {/* Topbar */}
            <div className="dash-topbar">
              <div className="dash-dots" aria-hidden="true">
                <div className="dash-dot dash-dot-red"></div>
                <div className="dash-dot dash-dot-yellow"></div>
                <div className="dash-dot dash-dot-green"></div>
              </div>
              <div className="dash-title">OrbitalAg — Dashboard v1.0</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)' }}>
                🟢 Dados ao vivo
              </div>
            </div>

            {/* Body */}
            <div className="dash-body">
              {/* Sidebar */}
              <div className="dash-sidebar" aria-label="Menu lateral">
                <div className="dash-sidebar-title">Navegação</div>
                {menuItems.map((item, i) => (
                  <button
                    key={item.label}
                    className={`dash-menu-item${activeMenu === i ? ' active' : ''}`}
                    onClick={() => setActiveMenu(i)}
                    aria-pressed={activeMenu === i}
                    aria-label={item.label}
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Main */}
              <div className="dash-main">
                {/* KPIs */}
                <div className="dash-kpi-row" role="list" aria-label="Indicadores principais">
                  {kpis.map((kpi) => (
                    <div className="dash-kpi" key={kpi.label} role="listitem">
                      <div className="dash-kpi-label">{kpi.label}</div>
                      <div className="dash-kpi-value">{kpi.value}</div>
                      <div className="dash-kpi-change">{kpi.change}</div>
                    </div>
                  ))}
                </div>

                {/* Gráfico de barras */}
                <div className="dash-chart" aria-label="Gráfico de NDVI mensal">
                  <div className="dash-chart-title">📊 Evolução do NDVI — 2026</div>
                  <div className="chart-bars" role="img" aria-label="Gráfico de barras com evolução mensal">
                    {barData.map((bar) => (
                      <div className="chart-bar-wrap" key={bar.label}>
                        <div
                          className={`chart-bar${bar.type === 'green' ? ' green' : ''}`}
                          style={{ height: `${bar.height}%` }}
                          title={`${bar.label}: NDVI ${(bar.height / 100).toFixed(2)}`}
                        ></div>
                        <div className="chart-label">{bar.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Alertas ===== */}
      <section
        className="section"
        style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
        aria-label="Sistema de alertas"
      >
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Sistema de Alertas</div>
            <h2>Notificações em tempo real</h2>
            <p>Alertas gerados automaticamente com base nos dados de satélite</p>
          </div>

          <div className="alerts-grid" role="list" aria-label="Lista de alertas recentes">
            {alerts.map((alert) => (
              <div className="alert-card" key={alert.title} role="listitem">
                <div className="alert-icon" aria-hidden="true">{alert.icon}</div>
                <div className="alert-content">
                  <strong>{alert.title}</strong>
                  <p>{alert.desc}</p>
                  <span className="alert-time">🕐 {alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Camadas do mapa / Tabs ===== */}
      <section className="section" aria-label="Camadas de dados do mapa">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Camadas de Dados</div>
            <h2>Visualize por índice</h2>
            <p>O mapa do OrbitalAg exibe diferentes camadas espectrais para análise</p>
          </div>

          {/* Tabs de navegação */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }} role="tablist" aria-label="Camadas do mapa">
            {[
              { id: 'ndvi',  label: '🌾 NDVI' },
              { id: 'lst',   label: '🌡️ Temperatura' },
              { id: 'agua',  label: '💧 Recursos Hídricos' },
              { id: 'fogo',  label: '🔥 Queimadas' }
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tab-panel-${tab.id}`}
                id={`tab-${tab.id}`}
                className={`btn${activeTab === tab.id ? ' btn-primary' : ' btn-outline'}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel de descrição */}
          <div
            id={`tab-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="card"
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            {activeTab === 'ndvi' && (
              <>
                <h3 style={{ marginBottom: '1rem' }}>🌾 Índice de Vegetação (NDVI)</h3>
                <p>
                  O NDVI varia de <strong>-1 a +1</strong>. Valores acima de 0.6 indicam
                  vegetação densa e saudável. Entre 0.2 e 0.5 indicam vegetação esparsa
                  ou estressada. Abaixo de 0.2, solo exposto ou vegetação seca.
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-accent)' }}>🟢 &gt; 0.6</strong> — Saudável &nbsp;
                  <strong style={{ color: '#f39c12' }}>🟡 0.3–0.6</strong> — Alerta &nbsp;
                  <strong style={{ color: 'var(--color-danger)' }}>🔴 &lt; 0.3</strong> — Crítico
                </p>
              </>
            )}
            {activeTab === 'lst' && (
              <>
                <h3 style={{ marginBottom: '1rem' }}>🌡️ Temperatura de Superfície (LST)</h3>
                <p>
                  O sensor termal do Landsat 9 mede a temperatura da superfície terrestre
                  em graus Celsius. Anomalias de temperatura acima de 35°C em áreas
                  agrícolas indicam estresse térmico nas culturas.
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  Integrado com modelos de previsão climática do INMET e CPTEC para
                  alertas antecipados de geada e calor extremo.
                </p>
              </>
            )}
            {activeTab === 'agua' && (
              <>
                <h3 style={{ marginBottom: '1rem' }}>💧 Recursos Hídricos</h3>
                <p>
                  Utilizando o Sentinel-1 (SAR) e o índice NDWI calculado sobre o
                  Sentinel-2, o OrbitalAg mapeia rios, reservatórios, açudes e lençóis
                  freáticos superficiais.
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  Ideal para monitorar níveis de represas, planejar irrigação e identificar
                  riscos de enchentes em baixadas ao longo de rios.
                </p>
              </>
            )}
            {activeTab === 'fogo' && (
              <>
                <h3 style={{ marginBottom: '1rem' }}>🔥 Detecção de Queimadas</h3>
                <p>
                  O sensor MODIS / VIIRS identifica focos de calor ativo na superfície
                  com atualização diária. O OrbitalAg cruza esses dados com as coordenadas
                  das propriedades cadastradas e emite alertas automáticos.
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  Integrado ao sistema do INPE e ao Space Charter para resposta
                  emergencial coordenada com defesa civil.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ===== Features da plataforma ===== */}
      <section
        className="section"
        style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}
        aria-label="Funcionalidades da plataforma"
      >
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Funcionalidades</div>
            <h2>Muito mais do que um mapa</h2>
          </div>

          <div className="grid-4">
            {features.map((feat) => (
              <article className="card" key={feat.title}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{feat.icon}</div>
                <h4 style={{ marginBottom: '0.5rem' }}>{feat.title}</h4>
                <p style={{ fontSize: '0.85rem' }}>{feat.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
