import React from 'react'
import './Hero.css'

function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Надёжные инженерные<br />и строительные решения
          </h1>
          <p className="hero-subtitle">
            10 лет опыта работы с промышленными объектами. 
            Строительство и монтаж под ключ по всему Казахстану.
          </p>
          <button 
            className="btn btn-primary hero-cta"
            onClick={() => scrollToSection('contact')}
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero


