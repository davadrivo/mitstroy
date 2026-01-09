import React, { useState } from 'react'
import './Projects.css'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Временные данные проектов (заглушки)
  const projects = [
    {
      id: 1,
      title: 'ЖК Комфортный дом',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop'
      ],
      description: 'Строительство жилого комплекса. Разработка проектно-сметной документации и выполнение строительно-монтажных работ.'
    },
    {
      id: 2,
      title: 'Завод Теплоизоляционных материалов',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop'
      ],
      description: 'Разработка проектно-сметной документации для промышленного комплекса.'
    },
    {
      id: 3,
      title: 'Uly Dala',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop'
      ],
      description: 'Разработка проектно-сметной документации. Строительно-монтажные работы.'
    },
    {
      id: 4,
      title: 'Теректы Кенбайту',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1541976590-713941681591?w=1200&h=800&fit=crop'
      ],
      description: 'Строительно-монтажные работы. Изготовление и монтаж металлоконструкций.'
    },
    {
      id: 5,
      title: 'FLSmith',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop'
      ],
      description: 'Разработка проектно-сметной документации. Строительно-монтажные работы для промышленного предприятия.'
    },
    {
      id: 6,
      title: 'Промышленный комплекс',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop'
      ],
      description: 'Полный цикл работ: от проектирования до ввода объекта в эксплуатацию.'
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden' // Блокируем прокрутку фона
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset' // Возвращаем прокрутку
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  // Закрытие по ESC
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedProject])

  return (
    <>
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Наши работы</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay"></div>
                </div>
                <div className="project-title-overlay">
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            {/* Кнопка закрытия */}
            <button 
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Закрыть"
            >
              ×
            </button>

            {/* Контент модального окна */}
            <div className="project-modal-content">
              {/* Левая часть - изображение */}
              <div className="project-modal-image-section">
                <div className="project-modal-main-image">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={selectedProject.title}
                  />
                  
                  {/* Стрелки навигации */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        className="project-modal-nav project-modal-nav-prev"
                        onClick={prevImage}
                        aria-label="Предыдущее изображение"
                      >
                        ‹
                      </button>
                      <button 
                        className="project-modal-nav project-modal-nav-next"
                        onClick={nextImage}
                        aria-label="Следующее изображение"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Миниатюры */}
                {selectedProject.images.length > 1 && (
                  <div className="project-modal-thumbnails">
                    {selectedProject.images.map((img, index) => (
                      <div
                        key={index}
                        className={`project-modal-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                      >
                        <img src={img} alt={`${selectedProject.title} ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Правая часть - описание */}
              <div className="project-modal-info-section">
                <h2 className="project-modal-title">{selectedProject.title}</h2>
                <p className="project-modal-description">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects



