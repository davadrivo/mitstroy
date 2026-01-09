import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Map from './components/Map'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Функция для плавной прокрутки к секциям (с учётом фиксированного header)
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="app">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Experience />
        <Map />
        <Contact scrollToSection={scrollToSection} />
      </main>
      <Footer />
    </div>
  )
}

export default App

