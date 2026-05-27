import '../styles/pages.css';

/* Dados do grupo — altere com os dados reais da equipe */
const team = [
  {
    nome: 'Ana Clara Santos',
    rm: 'RM 561234',
    turma: '1TDSA – 2026/1',
    foto: null,
    github: 'https://github.com/anaclarasantos',
    linkedin: 'https://linkedin.com/in/anaclarasantos',
    emoji: '👩‍💻'
  },
  {
    nome: 'Bruno Oliveira Lima',
    rm: 'RM 561235',
    turma: '1TDSA – 2026/1',
    foto: null,
    github: 'https://github.com/brunooliveira',
    linkedin: 'https://linkedin.com/in/brunooliveira',
    emoji: '👨‍🚀'
  },
  {
    nome: 'Carla Mendes Rocha',
    rm: 'RM 561236',
    turma: '1TDSA – 2026/1',
    foto: null,
    github: 'https://github.com/carlamendes',
    linkedin: 'https://linkedin.com/in/carlamendes',
    emoji: '👩‍🔬'
  },
  {
    nome: 'Diego Ferreira Alves',
    rm: 'RM 561237',
    turma: '1TDSA – 2026/1',
    foto: null,
    github: 'https://github.com/diegoferreira',
    linkedin: 'https://linkedin.com/in/diegoferreira',
    emoji: '👨‍💻'
  },
  {
    nome: 'Eduarda Costa Pires',
    rm: 'RM 561238',
    turma: '1TDSA – 2026/1',
    foto: null,
    github: 'https://github.com/eduardacosta',
    linkedin: 'https://linkedin.com/in/eduardacosta',
    emoji: '👩‍🎨'
  }
];

function MemberCard({ member }) {
  return (
    <article className="member-card" aria-label={`Integrante: ${member.nome}`}>
      <div className="member-photo">
        {member.foto ? (
          <img src={member.foto} alt={`Foto de ${member.nome}`} />
        ) : (
          <div className="member-photo-placeholder" aria-hidden="true">
            {member.emoji}
          </div>
        )}
      </div>
      <div className="member-info">
        <h3>{member.nome}</h3>
        <div className="member-rm">{member.rm}</div>
        <div className="member-turma">{member.turma}</div>
        <div className="member-links">
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="member-link"
            aria-label={`GitHub de ${member.nome}`}
          >
            🐙 GitHub
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="member-link"
            aria-label={`LinkedIn de ${member.nome}`}
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Integrantes() {
  return (
    <>
      <section className="page-hero" aria-label="Equipe">
        <div className="container">
          <div className="section-tag">Nossa Equipe</div>
          <h1>Conheça os integrantes</h1>
          <p>
            Estudantes de Análise e Desenvolvimento de Sistemas da FIAP,
            turma 1TDSA — idealizadores e desenvolvedores do OrbitalAg.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Integrantes do grupo">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">FIAP – Global Solution 2026/1</div>
            <h2>Turma 1TDSA – Fevereiro</h2>
            <p>
              Grupo formado por {team.length} integrantes apaixonados por tecnologia,
              inovação e o impacto que a ciência pode ter no mundo real.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <MemberCard key={member.rm} member={member} />
            ))}
          </div>

          {/* Card do projeto */}
          <div
            className="card"
            style={{
              marginTop: '4rem',
              maxWidth: '700px',
              margin: '4rem auto 0',
              textAlign: 'center',
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛰️</div>
            <h3 style={{ marginBottom: '0.75rem' }}>OrbitalAg</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Projeto desenvolvido para a disciplina de Front-End Design Engineering
              na FIAP, Global Solution 2026/1 — tema: <em>O Espaço é a Nova Fronteira</em>.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/orbital-ag"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="Repositório do projeto no GitHub"
              >
                🐙 Repositório no GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
