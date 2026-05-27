import { useState } from 'react';
import '../styles/pages.css';

const faqs = [
  {
    category: 'Sobre a Solução',
    items: [
      {
        q: 'O que é o OrbitalAg?',
        a: 'O OrbitalAg é uma plataforma digital que utiliza dados de satélites (Sentinel-2, Landsat 9 e MODIS) para monitorar lavouras, prever eventos climáticos extremos, detectar queimadas e fornecer inteligência agrícola em tempo real para agricultores, cooperativas e órgãos de defesa civil.'
      },
      {
        q: 'Qual problema o OrbitalAg resolve?',
        a: 'Agricultores e gestores tomam decisões críticas com informações limitadas ou atrasadas. O OrbitalAg democratiza o acesso a dados orbitais e os transforma em informação prática e visual, ajudando a reduzir perdas por clima, otimizar o uso de água e prevenir desastres ambientais.'
      },
      {
        q: 'Como o projeto se conecta com a economia espacial?',
        a: 'A nova economia espacial inclui satélites comerciais de observação da Terra que geram terabytes de dados diariamente. O OrbitalAg monetiza esses dados ao transformá-los em serviços de alto valor para o agronegócio, seguindo o modelo de "dados como serviço" (DaaS) da indústria espacial.'
      }
    ]
  },
  {
    category: 'Dados e Satélites',
    items: [
      {
        q: 'De onde vêm os dados usados pelo OrbitalAg?',
        a: 'Os dados são provenientes de missões abertas da NASA (Landsat 9, MODIS) e da ESA (Sentinel-2), cujo acesso é gratuito e público. O OrbitalAg coleta, processa e apresenta esses dados de forma acessível, sem necessidade de expertise técnica por parte do usuário.'
      },
      {
        q: 'Com que frequência os dados são atualizados?',
        a: 'O Sentinel-2 revisita a mesma área a cada 5 dias, fornecendo imagens em resolução de 10 metros. O MODIS atualiza dados de temperatura e vegetação diariamente. O OrbitalAg consolida e exibe novos dados a cada 12 horas para a maioria das regiões monitoradas.'
      },
      {
        q: 'O que é o índice NDVI e por que é importante?',
        a: 'NDVI (Normalized Difference Vegetation Index) é um índice calculado a partir de bandas espectrais do satélite que indica a saúde e densidade da vegetação. Valores próximos de 1.0 indicam vegetação densa e saudável; valores próximos de 0 ou negativos indicam solo exposto ou vegetação estressada, o que permite detectar secas e pragas com antecedência.'
      }
    ]
  },
  {
    category: 'Uso da Plataforma',
    items: [
      {
        q: 'A plataforma é gratuita?',
        a: 'O OrbitalAg oferece um plano gratuito com acesso a dados básicos de NDVI e alertas climáticos regionais. Planos premium incluem análises preditivas com IA, relatórios personalizados por talhão e integração com sistemas ERP agrícolas.'
      },
      {
        q: 'Preciso de conhecimento técnico para usar?',
        a: 'Não. A plataforma foi projetada para ser intuitiva. Os dados complexos de satélite são apresentados em dashboards visuais, com gráficos, mapas interativos e alertas em linguagem simples. Se um índice NDVI baixar abaixo do limiar, você recebe uma notificação clara: "Atenção: possível estresse hídrico na área X".'
      },
      {
        q: 'Funciona em regiões sem internet de qualidade?',
        a: 'Sim! O OrbitalAg foi projetado para funcionar em conectividade limitada. O aplicativo cache os dados mais recentes localmente e pode operar com conexões 2G/3G, priorizando alertas e informações críticas quando a largura de banda é limitada — essencial para regiões rurais remotas.'
      }
    ]
  },
  {
    category: 'Projeto FIAP',
    items: [
      {
        q: 'Este é um projeto real ou acadêmico?',
        a: 'O OrbitalAg foi desenvolvido como projeto acadêmico para a Global Solution 2026/1 da FIAP, com o tema "O Espaço é a Nova Fronteira". Porém, a solução foi concebida com viabilidade real em mente, utilizando fontes de dados abertos existentes e tecnologias de mercado.'
      },
      {
        q: 'Quais tecnologias foram usadas no desenvolvimento do site?',
        a: 'O site foi desenvolvido com React + Vite, CSS puro com variáveis customizadas (sem frameworks como Bootstrap), React Router para navegação entre páginas, e JavaScript para interatividade. Todo o código foi versionado no GitHub com commits frequentes de cada integrante.'
      }
    ]
  }
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </button>
      <div className="faq-answer" aria-hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <section className="page-hero" aria-label="FAQ">
        <div className="container">
          <div className="section-tag">Perguntas Frequentes</div>
          <h1>Tem alguma dúvida?</h1>
          <p>
            Encontre as respostas sobre o OrbitalAg, a tecnologia espacial
            por trás da plataforma e como utilizá-la.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Lista de perguntas">
        <div className="container">
          <div className="faq-container">
            {faqs.map(({ category, items }) => (
              <div className="faq-category" key={category}>
                <div className="faq-category-title" role="heading" aria-level="2">
                  {category}
                </div>
                {items.map(({ q, a }) => (
                  <FAQItem key={q} question={q} answer={a} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
