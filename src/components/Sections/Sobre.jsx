import React from 'react'
import './Sobre.css'
// Importe a foto de assets
import draRayssaFoto from '../../assets/images/dra-rayssa.jpg'  // ← Certifique-se que este arquivo existe na mesma pasta

export default function Sobre() {
  return (
    <section id="sobre" className="section sobre">
      <div className="sobre-container">
        {/* Cabeçalho da Seção */}
        <div className="sobre-header">
          <h2>Sobre a Dra. Rayssa</h2>
          <div className="header-decoration"></div>
        </div>

        {/* Conteúdo Principal */}
        <div className="sobre-content">
          {/* Card de Imagem/Avatar */}
          <div className="sobre-image-card">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <img 
                  src={draRayssaFoto}
                  alt="Dra. Rayssa Lopes - Médica Veterinária"
                  className="profile-image"
                />
              </div>
              <div className="image-glow"></div>
            </div>
            
            {/* Badges de Destaque */}
            <div className="badges">
              <div className="badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20"/>
                </svg>
                <span>8+ anos</span>
              </div>
              <div className="badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span>Domiciliar</span>
              </div>
            </div>
          </div>

          {/* Texto e Informações */}
          <div className="sobre-text">
            <div className="text-highlight">
              <h3>Medicina Veterinária Humanizada</h3>
              <p className="lead">
                Cuidado integral focado no bem-estar do seu pet e na tranquilidade da sua família
              </p>
            </div>

            <div className="text-content">
              <p>
                A Dra. Rayssa é médica veterinária formada pela Universidade X, com mais de 8 anos de experiência em clínica de pequenos animais. Atua com consultas, cirurgias de rotina e atendimento domiciliar, oferecendo um atendimento humanizado e focado no bem-estar do animal e na orientação do tutor.
              </p>
              <p>
                Sua filosofia de trabalho prioriza diagnósticos precisos, tratamentos baseados em evidências e um relacionamento de confiança com os proprietários. Atende cães e gatos em domicílio, com equipamentos portáteis e parcerias com laboratórios locais para exames complementares.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="diferenciais">
              <h4>Diferenciais</h4>
              <ul className="diferenciais-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Atendimento personalizado e humanizado</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Conforto do atendimento domiciliar</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Tratamentos baseados em evidências científicas</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Parceria com laboratórios locais de confiança</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}