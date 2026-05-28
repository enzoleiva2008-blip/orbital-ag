import '../styles/pages.css';

export default function Sobre() {
  return (
    <>
      <section className="page-hero" aria-label="Sobre o projeto">
        <div className="container">
          <div className="section-tag">Sobre o SkyShield</div>
          <h1>Conheça o projeto</h1>
          <p>
            Uma plataforma que usa a economia espacial para salvar vidas —
            prevendo desastres climáticos com dias de antecedência e alertando
            quem precisa, quando precisa.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Detalhes do projeto">
        <div className="container">
          <div className="sobre-content">

            <div className="sobre-text">
              <h2>Por que o SkyShield existe?</h2>
              <p>
                Todos os anos, enchentes, secas e chuvas extremas devastam comunidades rurais
                e agrícolas no Brasil. O país perde bilhões em safras destruídas, infraestrutura
                danificada e, o mais grave, vidas humanas — muitas vezes por falta de aviso prévio.
              </p>
              <p>
                Ao mesmo tempo, satélites meteorológicos orbitam a Terra coletando dados climáticos
                em tempo real que, na maioria das vezes, não chegam às pessoas que mais precisariam deles.
                O <strong>SkyShield</strong> foi criado para mudar isso.
              </p>
              <p>
                Nossa plataforma integra dados de satélites como <strong>GOES-16</strong>,
                <strong> Sentinel-3</strong> e <strong>NOAA-20</strong>, processa essas informações
                com Inteligência Artificial e envia alertas automáticos pelo <strong>Telegram</strong>
                com 5 a 7 dias de antecedência — tempo suficiente para evacuar, colher,
                proteger e preparar planos de emergência.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>O exemplo real</h2>
              <p>
                João é agricultor em Minas Gerais. Ele recebe uma mensagem no Telegram:
                <em> "🛡️ Alerta SkyShield: Chuva extrema prevista para sua região em 5 dias.
                Risco de enchente moderado. Recomendamos colheita antecipada e esvaziamento
                de áreas de baixo nível."</em>
              </p>
              <p>
                Com 5 dias de antecedência, João colhe a plantação, protege seus bens e
                avisa os vizinhos. <strong>Resultado: salva sua safra e sua renda.</strong>
              </p>

              <div className="sobre-highlights" aria-label="Diferenciais do projeto">
                <div className="highlight-item">
                  <div className="icon">🛰️</div>
                  <div>
                    <strong>Dados satelitais em tempo real</strong>
                    <p>Satélites GOES-16, Sentinel-3 e NOAA-20 monitorando o Brasil 24h</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="icon">🤖</div>
                  <div>
                    <strong>Inteligência Artificial preditiva</strong>
                    <p>Modelos treinados para identificar padrões de desastres climáticos</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="icon">📱</div>
                  <div>
                    <strong>Alertas automáticos via Telegram</strong>
                    <p>Funciona com qualquer celular, mesmo em regiões com sinal fraco</p>
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
                      <span className="tech-name">GOES-16 / NOAA-20</span>
                      <span className="tech-desc">Satélites meteorológicos em órbita</span>
                    </div>
                  </div>
                  <div className="tech-item">
                    <span className="tech-icon">✈️</span>
                    <div>
                      <span className="tech-name">Telegram Bot API</span>
                      <span className="tech-desc">Envio automático de alertas climáticos</span>
                    </div>
                  </div>
                  <div className="tech-item">
                    <span className="tech-icon">🤖</span>
                    <div>
                      <span className="tech-name">IA Preditiva</span>
                      <span className="tech-desc">Modelos de previsão de desastres climáticos</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h3>🎯 ODS da ONU</h3>
                  <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                    O SkyShield contribui diretamente com:
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
