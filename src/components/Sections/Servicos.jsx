import React from 'react'
import './Servicos.css'

const services = [
  {
    title: 'Consultas',
    desc: 'Avaliação clínica geral e tratamento de doenças comuns.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
        <path d="M18 15v-2"/>
        <path d="M15 18h2"/>
      </svg>
    ),
  },
  {
    title: 'Vacinação',
    desc: 'Calendário de vacinas e imunizações para cães e gatos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 2 4 4"/>
        <path d="m17 7 3-3"/>
        <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/>
        <path d="m9 11 4 4"/>
        <path d="m5 19-3 3"/>
        <path d="m14 4 6 6"/>
      </svg>
    ),
  },
  {
    title: 'Cirurgias',
    desc: 'Procedimentos cirúrgicos de baixa e média complexidade.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/>
        <path d="m16 16 6-6"/>
        <path d="m8 8 6-6"/>
        <path d="m9 7 8 8"/>
        <path d="m21 11-8-8"/>
      </svg>
    ),
  },
  {
    title: 'Emergências',
    desc: 'Atendimento emergencial a domicílio quando necessário.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 8v4"/>
        <path d="M12 16h.01"/>
        <path d="M12 6v.01"/>
      </svg>
    ),
  },
  {
    title: 'Orientação Nutricional',
    desc: 'Planos alimentares e recomendações para cada caso.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
        <path d="M7 2v20"/>
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
      </svg>
    ),
  },
  {
    title: 'Exames',
    desc: 'Coleta e encaminhamento de exames laboratoriais.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/>
        <path d="M8.5 2h7"/>
        <path d="M14.5 16h-5"/>
        <circle cx="12" cy="11" r="2"/>
      </svg>
    ),
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="section servicos">
      <div className="servicos-container">
        <div className="section-header">
          <h2>Serviços</h2>
          <p className="section-subtitle">
            Atendimento completo e humanizado para o bem-estar do seu pet
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card" style={{ '--index': index }}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="card-shine"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}