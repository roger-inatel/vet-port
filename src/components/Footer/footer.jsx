import React from 'react'
import './footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção Principal */}
        <div className="footer-content">
          {/* Coluna 1: Sobre */}
          <div className="footer-column">
            <h3 className="footer-title">Dra. Rayssa Lopes</h3>
            <p className="footer-text">
              Medicina Veterinária Humanizada com atendimento domiciliar em Pouso Alegre - MG.
            </p>
            <div className="footer-badges">
              <div className="badge-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>4+ anos de experiência</span>
              </div>
              <div className="badge-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span>Atendimento domiciliar</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="footer-column">
            <h4 className="footer-heading">Navegação</h4>
            <nav className="footer-nav">
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div className="footer-column">
            <h4 className="footer-heading">Contato</h4>
            <div className="footer-contact">
              <a href="tel:+553598271299" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>(35) 9827-1299</span>
              </a>
              <a href="mailto:rayscris@hotmail.com" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>rayscris@hotmail.com</span>
              </a>
              <div className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Pouso Alegre - MG</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Horários */}
          <div className="footer-column">
            <h4 className="footer-heading">Horários</h4>
            <div className="footer-schedule">
              <div className="schedule-item">
                <span className="day">Seg - Sex</span>
                <span className="time">18h - 22h</span>
              </div>
              <div className="schedule-item">
                <span className="day">Sábado</span>
                <span className="time">8h - 15h</span>
              </div>
              <div className="schedule-item inactive">
                <span className="day">Domingo</span>
                <span className="time">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Dra. Rayssa Lopes - Medicina Veterinária. Todos os direitos reservados.
            </p>
            <div className="footer-legal">
              <span className="legal-item">CRMV-MG XXXXX</span>
              <span className="legal-separator">•</span>
              <a href="#" className="legal-link">Política de Privacidade</a>
            </div>
          </div>
        </div>

        {/* Botão WhatsApp Flutuante */}
        <a 
          href="https://wa.me/5535998941011?text=Olá! Gostaria de agendar uma consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Contato via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}