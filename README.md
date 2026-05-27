# 🛰️ OrbitalAg — Monitoramento Agrícola via Satélite

> **FIAP Global Solution 2026/1 — Front-End Design Engineering**  
> Tema: *O Espaço é a Nova Fronteira*

---

## 📋 Descrição

O **OrbitalAg** é uma plataforma digital que transforma dados abertos de satélites (Sentinel-2, Landsat 9, MODIS) em inteligência prática para agricultores, cooperativas e órgãos de defesa civil. A solução conecta a nova **economia espacial** com os maiores desafios do agronegócio e do meio ambiente no Brasil.

**Problema resolvido:** Agricultores perdem bilhões anuais com eventos previsíveis (secas, pragas, queimadas) por falta de acesso a dados satelitais em tempo real.

**Solução:** Dashboard interativo com NDVI, alertas climáticos, detecção de queimadas e gestão hídrica — tudo baseado em dados orbitais acessíveis e gratuitos.

---

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/orbital-ag/orbital-ag.git
cd orbital-ag

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build de produção

```bash
npm run build
npm run preview
```

---

## 🗂️ Estrutura de Pastas

```
orbital-ag/
├── public/
│   └── assets/           # Imagens e ícones públicos
├── src/
│   ├── assets/           # Assets importados via JS
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Navbar.jsx    # Navegação com menu hambúrguer
│   │   ├── Footer.jsx    # Rodapé completo
│   │   └── Layout.jsx    # Wrapper com Navbar + Footer
│   ├── js/               # Utilitários JavaScript
│   │   ├── formValidation.js  # Validação de formulários
│   │   └── scrollUtils.js     # Utilitários de scroll
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.jsx      # Página inicial
│   │   ├── Sobre.jsx     # Sobre o projeto
│   │   ├── FAQ.jsx       # Perguntas frequentes
│   │   ├── Contato.jsx   # Formulário de contato
│   │   ├── Integrantes.jsx    # Equipe
│   │   ├── Solucao.jsx   # Solução (página 1 extra)
│   │   └── Plataforma.jsx     # Dashboard (página 2 extra)
│   ├── styles/           # Arquivos CSS externos
│   │   ├── global.css    # Reset, variáveis e estilos base
│   │   ├── navbar.css    # Estilos da navbar
│   │   ├── footer.css    # Estilos do footer
│   │   ├── home.css      # Estilos da Home
│   │   └── pages.css     # Estilos das páginas internas
│   ├── App.jsx           # Roteamento principal
│   └── main.jsx          # Entry point
├── index.html            # HTML raiz (Vite)
├── vite.config.js        # Configuração do Vite
├── package.json
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| React 19 + Vite 8 | Framework e build tool |
| CSS Puro (variáveis CSS) | Estilização sem frameworks externos |
| React Router v6 | Navegação SPA entre páginas |
| Sentinel-2 (ESA) | Fonte de dados satelitais (referência) |
| Landsat 9 (NASA) | Séries históricas de cobertura (referência) |
| MODIS / VIIRS | Dados de temperatura e queimadas (referência) |

**Proibições atendidas:** Nenhum uso de Bootstrap, jQuery, Material UI, Axios ou outros frameworks externos. CSS 100% customizado.

---

## 📄 Páginas Implementadas

### Obrigatórias
| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Hero animado, features, como funciona, impacto e CTA |
| `/sobre` | Sobre | Contexto do projeto, tecnologias e ODS da ONU |
| `/faq` | FAQ | 4 categorias de perguntas com acordeon interativo |
| `/contato` | Contato | Formulário com validação completa e feedback visual |
| `/integrantes` | Equipe | Cards com nome, RM, turma, foto, GitHub e LinkedIn |

### Da Solução (mínimo 2 extras)
| Rota | Página | Descrição |
|---|---|---|
| `/solucao` | Solução | Problema vs solução, 6 módulos, arquitetura em camadas |
| `/plataforma` | Plataforma | Dashboard simulado, alertas, tabs de camadas de dados |

---

## ✅ Funcionalidades JavaScript

- **Menu hambúrguer** — abre/fecha com animação, bloqueia scroll do body, aria-expanded
- **Validação de formulário** — `preventDefault()`, mensagens por campo, feedback visual, foco no 1º erro
- **Tabs interativas** — alternância de conteúdo na página Plataforma com aria-selected
- **Sidebar clicável** — menu do dashboard com estado ativo
- **Acordeon FAQ** — abertura/fechamento com animação CSS, aria-expanded
- **Navbar scrolled** — muda estilo (glassmorphism) ao rolar a página
- **Scroll to top** — botão no footer

---

## 📱 Responsividade

| Breakpoint | Layout |
|---|---|
| Desktop >= 992px | Grid 2-4 colunas, layout completo |
| Tablet >= 768px | Grid 2 colunas, menu colapsado |
| Mobile <= 480px | 1 coluna, menu hambúrguer |

---

## 🌍 ODS da ONU Contemplados

- **ODS 2** — Fome zero e agricultura sustentável
- **ODS 9** — Indústria, inovação e infraestrutura
- **ODS 11** — Cidades e comunidades sustentáveis
- **ODS 13** — Ação contra a mudança global do clima

---

## 👥 Autores e Créditos

| Nome | RM | Turma | GitHub | LinkedIn |
|---|---|---|---|---|
| Enzo Leiva Varrichio | RM 568877 | 1TDSPX – 2026/1 | [enzoleiva2008-blip](https://github.com/enzoleiva2008-blip) | [LinkedIn](https://linkedin.com/in/enzoleiva) |
| Pietro Ibra | RM 573262 | 1TDSPX – 2026/1 | [PietroIbra](https://github.com/PietroIbra) | [LinkedIn](https://linkedin.com/in/pietroibra) |
| Kauã Augusto Fiuza | RM 572369 | 1TDSPX – 2026/1 | [KauaznX](https://github.com/KauaznX) | [LinkedIn](https://linkedin.com/in/kauafiuza) |
| Matheus Segura Anacleto de Souza | RM 570878 | 1TDSPX – 2026/1 | [MatheuSegura](https://github.com/MatheuSegura) | [LinkedIn](https://linkedin.com/in/matheussegura) |

---

## 🔗 Repositório

**GitHub:** [https://github.com/enzoleiva2008-blip/orbital-ag](https://github.com/enzoleiva2008-blip/orbital-ag)

---

## 📞 Contato

- **E-mail:** orbital.ag@fiap.com.br
- **GitHub:** [github.com/enzoleiva2008-blip/orbital-ag](https://github.com/enzoleiva2008-blip/orbital-ag)
- **LinkedIn:** [linkedin.com/in/enzoleiva2008-blip](https://linkedin.com/in/enzoleiva2008-blip)
- **Instituição:** FIAP — Análise e Desenvolvimento de Sistemas, Turma 1TDSA

---

*Desenvolvido para a FIAP Global Solution 2026/1*
