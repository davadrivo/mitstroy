import React from 'react'
import './WhyUs.css'

function WhyUs() {
  const advantages = [
    {
      id: 1,
      title: '10 лет опыта',
      description: 'Более десяти лет работы на строительном рынке Казахстана'
    },
    {
      id: 2,
      title: 'Промышленные объекты',
      description: 'Специализация на сложных промышленных и инженерных проектах'
    },
    {
      id: 3,
      title: 'Инженерный подход',
      description: 'Профессиональная команда с глубоким пониманием технических задач'
    },
    {
      id: 4,
      title: 'Соблюдение сроков',
      description: 'Чёткое планирование и выполнение работ в установленные сроки'
    },
    {
      id: 5,
      title: 'Работа по Казахстану',
      description: 'География проектов охватывает всю территорию страны'
    },
    {
      id: 6,
      title: 'Понятная коммуникация',
      description: 'Прозрачное взаимодействие с заказчиками на всех этапах работ'
    }
  ]

  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <h2 className="section-title">Почему нам доверяют</h2>
        <div className="why-us-grid">
          {advantages.map(advantage => (
            <div key={advantage.id} className="advantage-item">
              <div className="advantage-marker"></div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs



