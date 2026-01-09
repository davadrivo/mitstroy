import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'

// Данные проектов
const projects = [
  {
    id: 1,
    title: "Промышленный объект №1",
    type: "Заливка бетона",
    city: "Караганда",
    lat: 49.806,
    lng: 73.085,
    year: "2022",
    description: "Бетонные работы на промышленной площадке"
  },
  {
    id: 2,
    title: "Фильтрационная станция",
    type: "Система водоочистки",
    city: "Караганда",
    lat: 49.79,
    lng: 73.07,
    year: "2023",
    description: "Строительство системы очистки воды"
  },
  {
    id: 3,
    title: "Цех монтажа станков",
    type: "Промышленные станки",
    city: "Караганда",
    lat: 49.815,
    lng: 73.095,
    year: "2021",
    description: "Монтаж промышленного оборудования"
  },
  {
    id: 4,
    title: "Бетонное основание",
    type: "Заливка бетона",
    city: "Караганда",
    lat: 49.80,
    lng: 73.075,
    year: "2023",
    description: "Заливка бетонного фундамента"
  },
  {
    id: 5,
    title: "Водоочистная установка",
    type: "Система водоочистки",
    city: "Караганда",
    lat: 49.82,
    lng: 73.08,
    year: "2022",
    description: "Проектирование и монтаж системы фильтрации"
  },
  {
    id: 6,
    title: "Промышленный комплекс",
    type: "Промышленные станки",
    city: "Караганда",
    lat: 49.785,
    lng: 73.09,
    year: "2023",
    description: "Полный цикл работ по монтажу оборудования"
  }
]

function Map() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])

  useEffect(() => {
    // Инициализация карты только один раз
    if (!mapInstanceRef.current && mapRef.current) {
      // Центр карты: Караганда
      const karagandaCenter = [49.8, 73.08]

      // Создание карты
      const map = L.map(mapRef.current, {
        center: karagandaCenter,
        zoom: 11,
        scrollWheelZoom: true,
        zoomControl: true,
        attributionControl: true
      })

      // Добавление тайлов OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map)

      mapInstanceRef.current = map

      // Создание кастомных иконок маркеров
      const createMarkerIcon = (color) => {
        return L.divIcon({
          className: 'custom-marker',
          html: `<div class="marker-pin" style="background-color: ${color}">
                   <div class="marker-pin-inner"></div>
                 </div>`,
          iconSize: [30, 40],
          iconAnchor: [15, 40],
          popupAnchor: [0, -40]
        })
      }

      const orangeIcon = createMarkerIcon('#ff6b35')
      const darkBlueIcon = createMarkerIcon('#1a2332')

      // Добавление маркеров для каждого проекта
      projects.forEach((project, index) => {
        // Чередование цветов маркеров для визуального разнообразия
        const icon = index % 2 === 0 ? orangeIcon : darkBlueIcon

        const marker = L.marker([project.lat, project.lng], {
          icon: icon
        }).addTo(map)

        // Создание содержимого popup
        const popupContent = `
          <div class="map-popup">
            <h3 class="map-popup-title">${project.title}</h3>
            <div class="map-popup-info">
              <p class="map-popup-type"><strong>Тип работ:</strong> ${project.type}</p>
              <p class="map-popup-city"><strong>Город:</strong> ${project.city}</p>
              <p class="map-popup-year"><strong>Год:</strong> ${project.year}</p>
              <p class="map-popup-description">${project.description}</p>
            </div>
          </div>
        `

        marker.bindPopup(popupContent, {
          className: 'custom-popup',
          maxWidth: 300,
          closeButton: true
        })

        // Добавление hover эффекта
        marker.on('mouseover', function() {
          this.openPopup()
        })

        markersRef.current.push(marker)
      })
    }

    // Очистка при размонтировании
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
        markersRef.current = []
      }
    }
  }, [])

  return (
    <section id="projects-map" className="section map-section">
      <div className="container">
        <h2 className="section-title">География реализованных проектов</h2>
        <p className="section-subtitle">
          Основной опыт — Караганда. Реализованные объекты по Казахстану.
        </p>
        <div id="map" ref={mapRef} className="map-container"></div>
      </div>
    </section>
  )
}

export default Map

