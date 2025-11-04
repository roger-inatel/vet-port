import React, { useState } from 'react'
import './Contato.css'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulação de envio (substitua pela sua lógica real)
    console.log('Dados do formulário:', formData)
    
    // Feedback visual
    setFormStatus({ submitted: true, error: false })
    
    // Reset após 3 segundos
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setFormStatus({ submitted: false, error: false })
    }, 3000)
  }

  return (
    <section id="contato" className="section contato">
      <div className="contato-container">
        {/* Cabeçalho da Seção */}
        <div className="contato-header">
          <h2>Entre em Contato</h2>
          <p className="header-subtitle">
            Estou aqui para cuidar do seu pet. Agende uma consulta ou tire suas dúvidas
          </p>
          <div className="header-decoration"></div>
        </div>

        <div className="contato-content">
          {/* Informações de Contato */}
          <div className="contato-info">
            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="info-text">
                <h4>Telefone/WhatsApp</h4>
                <p>(35) 99999-9999</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>contato@drarayssa.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="info-text">
                <h4>Horário de Atendimento</h4>
                <p>Seg - Sex: 18h às 22h</p>
                <p>Sáb: 8h às 12h</p>
              </div>
            </div>

            <div className="cta-box">
              <h4>Atendimento Domiciliar</h4>
              <p>Conforto e segurança para seu pet, sem estresse de transporte</p>
              <a 
                href="https://wa.me/5535999999999?text=Olá! Gostaria de agendar uma consulta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Formulário */}
          <div className="contato-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Envie sua mensagem</h3>
              
              <div className="form-group">
                <label htmlFor="name">
                  Nome completo
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email
                  <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Mensagem
                  <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre seu pet e como posso ajudar..."
                  rows="5"
                  required
                />
              </div>

              <button 
                type="submit" 
                className={`submit-button ${formStatus.submitted ? 'submitted' : ''}`}
                disabled={formStatus.submitted}
              >
                {formStatus.submitted ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" x2="11" y1="2" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Enviar Mensagem
                  </>
                )}
              </button>

              {formStatus.submitted && (
                <div className="success-message">
                  ✓ Obrigada pelo contato! Retornarei em breve.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}