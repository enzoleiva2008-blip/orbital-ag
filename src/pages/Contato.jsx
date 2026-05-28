import { useState } from 'react';
import { validateForm } from '../js/formValidation.js';
import '../styles/pages.css';

const INITIAL_FIELDS = { nome: '', email: '', assunto: '', mensagem: '' };

export default function Contato() {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { errors: formErrors, isValid } = validateForm(fields);

    if (!isValid) {
      setErrors(formErrors);
      const firstKey = Object.keys(formErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFields(INITIAL_FIELDS);
      setErrors({});
    }, 1200);
  }

  return (
    <>
      <section className="page-hero" aria-label="Contato">
        <div className="container">
          <div className="section-tag">Entre em contato</div>
          <h1>Fale com a equipe</h1>
          <p>
            Tem dúvidas sobre o SkyShield, quer sugerir melhorias ou
            integrar a plataforma à sua cidade ou cooperativa? Fale com a gente.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Formulário de contato">
        <div className="container">
          <div className="contato-grid">

            <div className="contato-info">
              <h2>Canais de atendimento</h2>
              <p>
                O SkyShield foi desenvolvido por estudantes da FIAP no contexto
                da Global Solution 2026/1. Entre em contato pelo canal mais conveniente.
              </p>
              <div className="contact-channels">
                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">📧</div>
                  <div className="channel-text">
                    <strong>E-mail</strong>
                    <span>skyshield@fiap.com.br</span>
                  </div>
                </div>
                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">✈️</div>
                  <div className="channel-text">
                    <strong>Telegram</strong>
                    <span>@SkyShieldBot</span>
                  </div>
                </div>
                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">🐙</div>
                  <div className="channel-text">
                    <strong>GitHub</strong>
                    <span>github.com/enzoleiva2008-blip/orbital-ag</span>
                  </div>
                </div>
                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">🏫</div>
                  <div className="channel-text">
                    <strong>FIAP</strong>
                    <span>Análise e Desenvolvimento de Sistemas — 1TDSPX</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>Envie uma mensagem</h3>

              {submitted ? (
                <div className="form-success-message" role="alert" aria-live="polite">
                  ✅ Mensagem enviada com sucesso! Responderemos em até 48 horas.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nome">Nome completo *</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={fields.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className={errors.nome ? 'error' : ''}
                        aria-required="true"
                        aria-describedby={errors.nome ? 'nome-error' : undefined}
                        aria-invalid={!!errors.nome}
                        autoComplete="name"
                      />
                      {errors.nome && (
                        <span className="form-error" id="nome-error" role="alert">
                          ⚠ {errors.nome}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">E-mail *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className={errors.email ? 'error' : ''}
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <span className="form-error" id="email-error" role="alert">
                          ⚠ {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="assunto">Assunto *</label>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      value={fields.assunto}
                      onChange={handleChange}
                      placeholder="Sobre o que é sua mensagem?"
                      className={errors.assunto ? 'error' : ''}
                      aria-required="true"
                      aria-describedby={errors.assunto ? 'assunto-error' : undefined}
                      aria-invalid={!!errors.assunto}
                    />
                    {errors.assunto && (
                      <span className="form-error" id="assunto-error" role="alert">
                        ⚠ {errors.assunto}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensagem">Mensagem *</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows="6"
                      value={fields.mensagem}
                      onChange={handleChange}
                      placeholder="Escreva sua mensagem aqui..."
                      className={errors.mensagem ? 'error' : ''}
                      aria-required="true"
                      aria-describedby={errors.mensagem ? 'mensagem-error' : undefined}
                      aria-invalid={!!errors.mensagem}
                    />
                    {errors.mensagem && (
                      <span className="form-error" id="mensagem-error" role="alert">
                        ⚠ {errors.mensagem}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                    disabled={loading}
                    aria-label={loading ? 'Enviando...' : 'Enviar mensagem'}
                  >
                    {loading ? '⏳ Enviando...' : '📨 Enviar mensagem'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
