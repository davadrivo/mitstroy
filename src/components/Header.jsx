import React, { useState, useEffect } from 'react'
import './Header.css'

function Header({ scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Логотип */}
          <div className="logo" onClick={() => handleNavClick('hero')}>
            <span className="logo-text">МИТ Stroy</span>
          </div>

          {/* Навигация для desktop */}
          <nav className="nav-desktop">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>
              О компании
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services') }}>
              Услуги
            </a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects') }}>
              Наши работы
            </a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience') }}>
              Опыт
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}>
              Контакты
            </a>
          </nav>

          {/* Кнопка Связаться для desktop */}
          <button 
            className="btn btn-primary header-cta-desktop"
            onClick={() => handleNavClick('contact')}
          >
            Связаться
          </button>

          {/* Кнопка мобильного меню */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Мобильное меню */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>
            О компании
          </a>
          <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services') }}>
            Услуги
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects') }}>
            Наши работы
          </a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience') }}>
            Опыт
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}>
            Контакты
          </a>
          <button 
            className="btn btn-primary"
            onClick={() => handleNavClick('contact')}
          >
            Связаться
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

