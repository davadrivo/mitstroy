import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">МИТ Stroy</h3>
              <p className="footer-description">
                Строительные и инженерные решения для промышленности
              </p>
            </div>
            <div className="footer-contacts">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Телефон:</span>
                <a href="tel:+77001234567" className="footer-contact-value">
                  +7 (700) 123-45-67
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email:</span>
                <a href="mailto:info@mitstroy.kz" className="footer-contact-value">
                  info@mitstroy.kz
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Город:</span>
                <span className="footer-contact-value">Караганда</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © МИТ Stroy, 10 лет опыта
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



