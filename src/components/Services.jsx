import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Заливка бетона на заказ',
      description: 'Профессиональная заливка бетонных конструкций для промышленных объектов с соблюдением всех технологических требований.',
      icon: '🏗️'
    },
    {
      id: 2,
      title: 'Строительство и монтаж промышленных станков',
      description: 'Полный цикл работ по строительству фундаментов и монтажу промышленного оборудования для заводов и производственных цехов.',
      icon: '⚙️'
    },
    {
      id: 3,
      title: 'Системы водоочистки и фильтрации',
      description: 'Проектирование и строительство крупных промышленных систем водоочистки и фильтрации, включая установку фильтрационного оборудования.',
      icon: '💧'
    }
  ]

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Услуги</h2>
        <p className="section-subtitle">
          Комплексные строительные и инженерные решения для промышленности
        </p>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


