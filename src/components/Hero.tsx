import { useEffect, useRef } from 'react'
import Logo from './Logo'
import foto from '../assets/hero.png'
import borde from '../assets/hero-borde.png'

function Hero() {
  const hero = useRef<HTMLElement>(null)

  // El logo arranca escondido detrás de las montañas, sube y, al llegar arriba, baja por adelante
  useEffect(() => {
    const logo = hero.current?.querySelector<HTMLElement>('.hero-logo')
    if (!logo) return

    let cuadro = 0
    const actualizar = () => {
      cuadro = 0
      const progreso = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1)

      if (progreso < 0.5) {
        logo.style.zIndex = '1'
        logo.style.transform = `translateY(${75 - 220 * progreso}%)`
      } else {
        const avance = (progreso - 0.5) * 2
        logo.style.zIndex = '3'
        logo.style.transform = `translateY(${-35 + 60 * avance}%) scale(${1 + 0.15 * avance})`
      }
    }
    const alScrollear = () => {
      if (!cuadro) cuadro = requestAnimationFrame(actualizar)
    }

    actualizar()
    window.addEventListener('scroll', alScrollear, { passive: true })
    window.addEventListener('resize', alScrollear)
    return () => {
      cancelAnimationFrame(cuadro)
      window.removeEventListener('scroll', alScrollear)
      window.removeEventListener('resize', alScrollear)
    }
  }, [])

  return (
    <header className="hero" ref={hero}>
      <div className="hero-escena">
        <div className="hero-paisaje">
          <img className="hero-foto" src={foto} alt="" />
          <Logo alto="clamp(64px, 12.75vw, 200px)" className="hero-logo" />
          <img className="hero-borde" src={borde} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Hero
