# 🛡️ SkyShield — Sistema de Previsão de Desastres Climáticos

> **FIAP Global Solution 2026/1 — Front-End Design Engineering**  
> Tema: *O Espaço é a Nova Fronteira*

---

## 📋 O que é?

O **SkyShield** é uma plataforma que usa dados de satélites meteorológicos para prever desastres climáticos (chuvas extremas, secas, enchentes) com **5 a 7 dias de antecedência** e envia alertas automáticos para as pessoas via **Telegram**.

### Por que é importante?

Comunidades rurais e agricultores sofrem constantemente com desastres climáticos sem aviso prévio. Com o SkyShield, eles teriam tempo para:

- 🚪 Evacuar se necessário
- 🌾 Proteger plantações e bens
- 🏠 Preparar suas casas
- 🚨 Ativar planos de emergência

### Exemplo real

> João é agricultor em Minas Gerais. Recebe alerta do SkyShield:  
> *"🛡️ Chuva extrema prevista em 5 dias".*  
> Ele colhe a plantação antes da chuva e protege seus bens.  
> **Resultado: salva sua safra e sua renda.**

---

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/enzoleiva2008-blip/orbital-ag.git
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

## ⚙️ Como funciona?

1. **Satélites** coletam dados de clima (temperatura, umidade, pressão)
2. **Banco de dados** armazena esses dados em tempo real e histórico
3. **Inteligência Artificial** analisa e prevê desastres com 5–7 dias de antecedência
4. **Chatbot no Telegram** envia alertas automáticos por região
5. **Site** mostra mapa interativo com previsões e níveis de risco

---

## 🗂️ Estrutura de Pastas

```
orbital-ag/
├── public/
│   └── assets/           # Imagens e ícones públicos
├── src/
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
│   │   ├── Solucao.jsx   # Solução (página extra 1)
│   │   └── Plataforma.jsx     # Dashboard (página extra 2)
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
| GOES-16 / NOAA-20 (NASA/NOAA) | Satélites meteorológicos (referência) |
| Sentinel-3 (ESA) | Dados oceanográficos e climáticos (referência) |
| Telegram Bot API | Canal de distribuição dos alertas |

**Proibições atendidas:** Nenhum uso de Bootstrap, jQuery, Material UI, Axios ou outros frameworks externos. CSS 100% customizado.

---

## 📄 Páginas Implementadas

### Obrigatórias
| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Hero, funcionalidades, como funciona, impacto e CTA |
| `/sobre` | Sobre | Contexto, tecnologias, exemplo real e ODS da ONU |
| `/faq` | FAQ | 4 categorias de perguntas com acordeon interativo |
| `/contato` | Contato | Formulário com validação completa e feedback |
| `/integrantes` | Equipe | Cards com nome, RM, turma, GitHub e LinkedIn |

### Da Solução (mínimo 2 extras)
| Rota | Página | Descrição |
|---|---|---|
| `/solucao` | Solução | Problema vs solução, caso real, 6 módulos, arquitetura |
| `/plataforma` | Plataforma | Dashboard simulado, alertas ativos, tabs por módulo |

---

## ✅ Funcionalidades JavaScript

- **Menu hambúrguer** — abre/fecha com animação, bloqueia scroll, aria-expanded
- **Validação de formulário** — `preventDefault()`, mensagens por campo, foco no 1º erro
- **Tabs interativas** — alternância de conteúdo na página Plataforma com aria-selected
- **Sidebar clicável** — menu do dashboard com estado ativo
- **Acordeon FAQ** — abertura/fechamento com animação CSS e aria-expanded
- **Navbar scrolled** — glassmorphism ao rolar a página
- **Scroll to top** — botão no footer

---

## 👥 Quem é ajudado?

- 🌾 **Agricultores** — protegem plantações e evitam perdas de safra
- 🏘️ **Comunidades rurais** — têm tempo para evacuar com segurança
- 🚨 **Prefeituras e Defesa Civil** — ativam planos de emergência com antecedência
- 🏙️ **Populações urbanas** — recebem avisos e se preparam

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

- **E-mail:** skyshield@fiap.com.br
- **Telegram:** @SkyShieldBot
- **GitHub:** [github.com/enzoleiva2008-blip/orbital-ag](https://github.com/enzoleiva2008-blip/orbital-ag)
- **Instituição:** FIAP — Análise e Desenvolvimento de Sistemas, Turma 1TDSPX

---

*Desenvolvido para a FIAP Global Solution 2026/1*
