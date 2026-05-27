import '../styles/pages.css';

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-label="Sobre o projeto">
        <div className="container">
          <div className="section-tag">Sobre o OrbitalAg</div>
          <h1>Conheça o projeto</h1>
          <p>
            Uma solução que nasce da convergência entre a nova economia espacial
            e os desafios reais do agronegócio e do meio ambiente no Brasil.
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="section" aria-label="Detalhes do projeto">
        <div className="container">
          <div className="sobre-content">

            {/* Coluna de texto */}
            <div className="sobre-text">
              <h2>Por que o OrbitalAg existe?</h2>
              <p>
                O Brasil é um dos maiores produtores agrícolas do mundo, mas agricultores
                e gestores ainda tomam decisões críticas com informações limitadas ou
                atrasadas. Ao mesmo tempo, satélites orbitam a Terra coletando terabytes
                de dados que, na maioria das vezes, ficam inacessíveis para quem mais
                precisaria deles.
              </p>
              <p>
                O <strong>OrbitalAg</strong> surgiu para fechar essa lacuna: democratizar
                o acesso aos dados orbitais e transformá-los em inteligência prática,
                visual e acessível para o campo brasileiro.
              </p>
              <p>
                Nossa plataforma integra imagens dos satélites <strong>Sentinel-2</strong>,
                <strong> Landsat 9</strong> e <strong>MODIS</strong> para monitorar
                lavouras, detectar queimadas e desmatamento, prever eventos climáticos
                extremos e otimizar o uso de recursos hídricos.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>O problema que resolvemos</h2>
              <p>
                Agricultores perdem bilhões de reais anualmente por causas que são
                detectáveis com antecedência via satélite: secas, pragas, queimadas e
                alagamentos. A defesa civil reage tarde a desastres que poderiam ser
                previstos dias antes. E o desmatamento avança enquanto a fiscalização
                é insuficiente.
              </p>

              <div className="sobre-highlights" aria-label="Diferenciais do projeto">
                <div className="highlight-item">
                  <div className="icon">🛰️</div>
                  <div>
                    <strong>Dados em tempo real</strong>
                    <p>Imagens atualizadas a cada 12h via Sentinel-2 e MODIS</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="icon">🤖</div>
                  <div>
                    <strong>IA aplicada ao agro</strong>
                    <p>Modelos preditivos de clima, pragas e produtividade</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="icon">📱</div>
                  <div>
                    <strong>Acessível em qualquer dispositivo</strong>
                    <p>Interface responsiva para desktop, tablet e smartphone</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="icon">🌍</div>
                  <div>
                    <strong>Impacto nos ODS da ONU</strong>
                    <p>Contribui diretamente com os objetivos 2, 9, 11 e 13</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="tech-stack" aria-label="Tecnologias e fontes de dados">
                <h3>🔧 Tecnologias utilizadas</h3>
                <div className="tech-items">
                  <div className="tech-item">
                    <span className="tech-icon">⚛️</span>
                    <div>
                      <span className="tech-name">React + Vite</span>
                      <span className="tech-desc">Interface dinâmica e performática</span>
                    </div>
                  </div>
                  <div className="tech-item">
                    <span className="tech-icon">🎨</span>
                    <div>
                      <span className="tech-name">CSS Puro</span>
                      <span className="tech-desc">Design responsivo com variáveis CSS</span>
                    </div>
                  </div>
                  <div className="tech-item">
                    <span className="tech-icon">📦</span>
                    <div>
                      <span className="tech-name">React Router v6</span>
                      <span className="tech-desc">Navegação entre páginas (SPA)</span>
                    </div>
                  </div>
                  <div className="tech-item">
                    <span className="tech-icon">🛰️</span>
                    <div>
                      <span className="tech-name">Sentinel-2 (ESA)</span>
                      <span className="tech-desc">Imagens multiespectrais de alta res.</span>
                    </div>
                  </div>
                  <div className="tech-item">
                    <span className="tech-icon">🌎</span>
                    <div>
                      <span className="tech-name">Landsat 9 (NASA)</span>
                      <span className="tech-desc">Séries históricas de cobertura terrestre</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h3>🎯 ODS da ONU</h3>
                  <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                    O OrbitalAg contribui diretamente com:
                  </p>
                  <div className="ods-list">
                    <div className="ods-item">
                      <strong>ODS 2</strong>
                      Fome zero e agricultura sustentável
                    </div>
                    <div className="ods-item">
                      <strong>ODS 9</strong>
                      Indústria e inovação
                    </div>
                    <div className="ods-item">
                      <strong>ODS 11</strong>
                      Cidades sustentáveis
                    </div>
                    <div className="ods-item">
                      <strong>ODS 13</strong>
                      Ação climática
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
