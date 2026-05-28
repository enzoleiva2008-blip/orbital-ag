import { useState } from 'react';
import '../styles/pages.css';

const faqs = [
  {
    category: 'Sobre o SkyShield',
    items: [
      {
        q: 'O que é o SkyShield?',
        a: 'O SkyShield é uma plataforma de previsão de desastres climáticos que usa dados de satélites meteorológicos (GOES-16, Sentinel-3, NOAA-20) e Inteligência Artificial para antecipar eventos como chuvas extremas, secas e enchentes com 5 a 7 dias de antecedência, enviando alertas automáticos via Telegram para agricultores, comunidades rurais e órgãos de defesa civil.'
      },
      {
        q: 'Qual problema o SkyShield resolve?',
        a: 'Comunidades rurais e agricultores frequentemente sofrem com desastres climáticos sem aviso prévio suficiente para se proteger. O SkyShield resolve isso democratizando o acesso a dados satelitais meteorológicos e transformando esses dados em alertas práticos, entregues diretamente no Telegram — mesmo com sinal de internet fraco.'
      },
      {
        q: 'Como o SkyShield se conecta com a economia espacial?',
        a: 'A nova economia espacial inclui satélites meteorológicos comerciais e governamentais que geram dados climáticos em tempo real 24h por dia. O SkyShield monetiza esses dados transformando-os em um serviço de alertas de alto valor para populações vulneráveis e órgãos públicos, seguindo o modelo de "dados como serviço" da indústria espacial.'
      }
    ]
  },
  {
    category: 'Alertas e Previsões',
    items: [
      {
        q: 'Com quanto tempo de antecedência os alertas são enviados?',
        a: 'O SkyShield emite alertas com 5 a 7 dias de antecedência para eventos climáticos de grande impacto. Esse período foi calculado para dar tempo suficiente para que agricultores façam colheitas antecipadas, famílias se preparem para evacuar, e prefeituras ativem planos de emergência com eficiência.'
      },
      {
        q: 'Quais tipos de desastres o SkyShield prevê?',
        a: 'A plataforma prevê: chuvas extremas (acima de 50mm/h), enchentes e inundações, secas prolongadas, vendavais e tempestades severas, e deslizamentos de terra (em áreas de risco mapeadas). Os alertas são classificados por nível de risco: Atenção (amarelo), Alerta (laranja) e Emergência (vermelho).'
      },
      {
        q: 'Como funciona o alerta via Telegram?',
        a: 'O usuário se cadastra no chatbot do SkyShield no Telegram e informa sua cidade ou CEP. O bot envia automaticamente notificações quando um risco climático é detectado para a região cadastrada. A mensagem inclui o tipo de evento, nível de risco, prazo previsto e orientações de segurança. Funciona com qualquer celular e sinal 2G/3G.'
      }
    ]
  },
  {
    category: 'Dados e Satélites',
    items: [
      {
        q: 'De onde vêm os dados meteorológicos?',
        a: 'Os dados são provenientes de satélites como GOES-16 (NOAA/NASA), Sentinel-3 (ESA) e NOAA-20, cujo acesso é gratuito e público. O SkyShield coleta, processa e analisa esses dados com modelos de IA para gerar previsões precisas, sem custo adicional de licenciamento de dados.'
      },
      {
        q: 'Com que frequência os dados são atualizados?',
        a: 'O GOES-16 atualiza imagens a cada 10 minutos para a América do Sul. O SkyShield consolida e reavalia os modelos preditivos a cada 6 horas, garantindo que os alertas reflitam sempre as condições atmosféricas mais recentes.'
      },
      {
        q: 'A previsão é precisa?',
        a: 'Os modelos de IA do SkyShield são treinados com dados históricos dos últimos 20 anos de eventos climáticos no Brasil. Para eventos de chuva extrema, a acurácia é de aproximadamente 85% com 5 dias de antecedência e 92% com 48 horas. Os alertas são emitidos de forma conservadora: preferimos avisar e não ocorrer do que deixar de avisar e o desastre acontecer.'
      }
    ]
  },
  {
    category: 'Projeto FIAP',
    items: [
      {
        q: 'Este é um projeto real ou acadêmico?',
        a: 'O SkyShield foi desenvolvido como projeto acadêmico para a Global Solution 2026/1 da FIAP, com o tema "O Espaço é a Nova Fronteira". Porém, toda a arquitetura foi concebida com viabilidade real em mente — utilizando fontes de dados satelitais abertas existentes, tecnologias de mercado e o Telegram como canal de distribuição acessível.'
      },
      {
        q: 'Quais tecnologias foram usadas no desenvolvimento do site?',
        a: 'O site foi desenvolvido com React + Vite, CSS puro com variáveis customizadas (sem frameworks como Bootstrap ou jQuery), React Router para navegação SPA, e JavaScript para interatividade (menu hambúrguer, FAQ acordeon, validação de formulário, tabs). Todo o código está versionado no GitHub com commits frequentes.'
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
            Encontre as respostas sobre o SkyShield, como funciona a previsão
            climática por satélite e como receber alertas no seu Telegram.
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
