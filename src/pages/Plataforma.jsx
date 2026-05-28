import { useState } from 'react';
import '../styles/pages.css';

const kpis = [
  { label: 'Regiões Monitoradas', value: '5.284', change: '+18 hoje' },
  { label: 'Alertas Ativos',      value: '12',    change: '4 críticos' },
  { label: 'Usuários no Telegram', value: '8.741', change: '+203 hoje'  }
];

const menuItems = [
  { icon: '🗺️', label: 'Mapa Geral',    active: true  },
  { icon: '⛈️', label: 'Chuva Extrema', active: false },
  { icon: '🌊', label: 'Enchentes',      active: false },
  { icon: '🔥', label: 'Secas',          active: false },
  { icon: '📱', label: 'Telegram',       active: false },
  { icon: '📊', label: 'Relatórios',     active: false },
  { icon: '🔔', label: 'Alertas',        active: false },
];

const barData = [
  { label: 'Jan', height: 55, type: 'normal' },
  { label: 'Fev', height: 80, type: 'green'  },
  { label: 'Mar', height: 40, type: 'normal' },
  { label: 'Abr', height: 70, type: 'normal' },
  { label: 'Mai', height: 90, type: 'green'  },
  { label: 'Jun', height: 35, type: 'normal' },
  { label: 'Jul', height: 60, type: 'normal' },
];

const alerts = [
  {
    icon: '🔴',
    title: 'Chuva extrema iminente',
    desc: 'Sistema de baixa pressão — Risco crítico para Vale do Paraíba (SP/RJ) em 5 dias',
    time: 'Há 1 hora'
  },
  {
    icon: '🟠',
    title: 'Risco de enchente moderado',
    desc: 'Bacia do Rio Doce com acúmulo acima do normal — Alerta para 12 municípios',
    time: 'Há 3 horas'
  },
  {
    icon: '🟡',
    title: 'Seca em desenvolvimento',
    desc: 'Déficit hídrico acumulado no Nordeste — Recomendação de irrigação preventiva',
    time: 'Há 6 horas'
  },
  {
    icon: '✅',
    title: 'Alerta encerrado',
    desc: 'Tempestade prevista para o Sul do Paraná dissipou antes de atingir as cidades',
    time: 'Há 1 dia'
  }
];

const features = [
  {
    icon: '🗺️',
    title: 'Mapa de Risco',
    desc: 'Mapa de calor com previsão de desastres por região, atualizado a cada 6 horas com dados satelitais.'
  },
  {
    icon: '📱',
    title: 'Chatbot Telegram',
    desc: 'Alertas automáticos direto no celular. Funciona com sinal 2G e não precisa de app adicional.'
  },
  {
    icon: '📈',
    title: 'Histórico Climático',
    desc: 'Gráficos com evolução de eventos climáticos nos últimos meses para análise e aprendizado.'
  },
  {
    icon: '🚨',
    title: 'Protocolo de Emergência',
    desc: 'Integração com Defesa Civil para ativação automática de planos de emergência municipais.'
  }
];

const tabs = [
  { id: 'chuva',    label: '⛈️ Chuva Extrema' },
  { id: 'enchente', label: '🌊 Enchentes'      },
  { id: 'seca',     label: '🔥 Secas'          },
  { id: 'telegram', label: '📱 Telegram'       },
];

const tabContent = {
  chuva: {
    title: '⛈️ Previsão de Chuva Extrema',
    text: [
      'O módulo de chuva analisa dados de pressão atmosférica, umidade relativa e temperatura oceânica dos satélites GOES-16 e NOAA-20 para identificar formação de sistemas de baixa pressão intensa.',
      'Eventos com precipitação acima de 50mm/h são classificados como críticos. O SkyShield emite alertas com até 7 dias de antecedência, muito antes dos sistemas convencionais.'
    ]
  },
  enchente: {
    title: '🌊 Mapeamento de Enchentes',
    text: [
      'O módulo de enchentes cruza dados de chuva acumulada com modelos digitais de elevação (DEM) do território brasileiro para calcular o risco de transbordamento em bacias hidrográficas.',
      'Municípios em planícies de inundação recebem alertas personalizados com nível de risco e tempo estimado até o pico da enchente, permitindo evacuação planejada.'
    ]
  },
  seca: {
    title: '🔥 Monitoramento de Secas',
    text: [
      'O índice de déficit hídrico é calculado com base na diferença entre precipitação esperada e observada ao longo de 30, 60 e 90 dias, usando dados históricos e em tempo real do Sentinel-3 e INMET.',
      'Regiões com déficit acima de 40% recebem alertas de seca em desenvolvimento, orientando agricultores sobre irrigação e gestão de reservatórios antes do agravamento.'
    ]
  },
  telegram: {
    title: '📱 Alertas via Telegram',
    text: [
      'O chatbot do SkyShield no Telegram permite que qualquer pessoa se cadastre informando sua cidade ou CEP. A partir daí, recebe automaticamente alertas quando um risco climático é detectado para sua região.',
      'As mensagens incluem: tipo de evento, nível de risco (🟡 Atenção / 🟠 Alerta / 🔴 Emergência), prazo previsto e orientações de segurança. Funciona com qualquer celular e conexão 2G.'
    ]
  }
};

export default function Plataforma() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeTab, setActiveTab] = useState('chuva');

  return (
    <>
      <section className="page-hero" aria-label="Plataforma">
        <div className="container">
          <div className="section-tag">Plataforma SkyShield</div>
          <h1>Dashboard de Previsão Climática</h1>
          <p>
            Visualize como o SkyShield apresenta alertas de desastres em um painel
            intuitivo com mapa de risco, KPIs e notificações em tempo real.
          </p>
        </div>
      </section>

      {/* ===== Dashboard Preview ===== */}
      <section className="section" aria-label="Preview do dashboard">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Demonstração</div>
            <h2>O painel de controle climático</h2>
            <p>Interface interativa que simula a experiência real da plataforma</p>
          </div>

          <div className="dashboard-preview" role="region" aria-label="Dashboard simulado">
            <div className="dash-topbar">
              <div className="dash-dots" aria-hidden="true">
                <div className="dash-dot dash-dot-red"></div>
                <div className="dash-dot dash-dot-yellow"></div>
                <div className="dash-dot dash-dot-green"></div>
              </div>
              <div className="dash-title">SkyShield — Dashboard v1.0</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)' }}>
                🟢 Monitoramento ativo
              </div>
            </div>

            <div className="dash-body">
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

              <div className="dash-main">
                <div className="dash-kpi-row" role="list" aria-label="Indicadores principais">
                  {kpis.map((kpi) => (
                    <div className="dash-kpi" key={kpi.label} role="listitem">
                      <div className="dash-kpi-label">{kpi.label}</div>
                      <div className="dash-kpi-value">{kpi.value}</div>
                      <div className="dash-kpi-change">{kpi.change}</div>
                    </div>
                  ))}
                </div>

                <div className="dash-chart" aria-label="Gráfico de eventos climáticos 2026">
                  <div className="dash-chart-title">📊 Eventos climáticos detectados — 2026</div>
                  <div className="chart-bars" role="img" aria-label="Gráfico de barras com eventos por mês">
                    {barData.map((bar) => (
                      <div className="chart-bar-wrap" key={bar.label}>
                        <div
                          className={`chart-bar${bar.type === 'green' ? ' green' : ''}`}
                          style={{ height: `${bar.height}%` }}
                          title={`${bar.label}: ${bar.height} eventos`}
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
            <p>Alertas gerados automaticamente pelos modelos de IA com base nos dados satelitais</p>
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

      {/* ===== Tabs de módulos ===== */}
      <section className="section" aria-label="Módulos da plataforma">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Módulos de Previsão</div>
            <h2>Explore cada tipo de alerta</h2>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }} role="tablist" aria-label="Módulos do SkyShield">
            {tabs.map((tab) => (
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

          <div
            id={`tab-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="card"
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            <h3 style={{ marginBottom: '1rem' }}>{tabContent[activeTab].title}</h3>
            {tabContent[activeTab].text.map((p, i) => (
              <p key={i} style={{ marginTop: i > 0 ? '0.75rem' : 0 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section
        className="section"
        style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}
        aria-label="Funcionalidades da plataforma"
      >
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Funcionalidades</div>
            <h2>Muito mais do que previsão do tempo</h2>
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
