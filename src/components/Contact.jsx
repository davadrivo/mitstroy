import React, { useState } from 'react'
import './Contact.css'

function Contact({ scrollToSection }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Форма отправлена:', formData)
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        <p className="section-subtitle">
          Свяжитесь с нами для обсуждения вашего проекта
        </p>
        <div className="contact-content">
          {/* Левая плашка - Контакты */}
          <div className="contact-card contact-info-card">
            <h3 className="contact-card-title">Контакты</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4 className="contact-label">Телефон</h4>
                  <a href="tel:+77001234567" className="contact-value">
                    +7 (700) 123-45-67
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h4 className="contact-label">Email</h4>
                  <a href="mailto:info@mitstroy.kz" className="contact-value">
                    info@mitstroy.kz
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4 className="contact-label">Город</h4>
                  <p className="contact-value">Караганда</p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая плашка - Форма */}
          <div className="contact-card contact-form-card">
            <h3 className="contact-card-title">Оставить заявку</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-input form-textarea"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact-form-submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
