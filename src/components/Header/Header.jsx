import React, { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <h1 className="logo">Dra. Rayssa Lopes</h1>
            <span className="tagline">Medicina Veterinária Humanizada</span>
          </div>

          {/* Menu Desktop */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {/* Botão Fechar (X) dentro do menu mobile */}
            <button 
              className="close-menu"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <ul className="nav-list">
              <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
              <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
              <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
            </ul>
          </nav>

          {/* Botão Hamburguer Mobile */}
          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu de navegação"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Overlay que bloqueia a tela */}
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}