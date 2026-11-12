import { useEffect, useRef } from 'react'
import Logo from './Logo'
import foto from '../assets/hero.png'
import borde from '../assets/hero-borde.png'

function Hero() {
  const logo = useRef<HTMLDivElement>(null)

  // El logo arranca escondido detrás de las montañas, sube y, al llegar arriba, baja por adelante
  useEffect(() => {
    const el = logo.current
    if (!el) return

    let cuadro = 0
    const actualizar = () => {
      cuadro = 0
      const progreso = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1)

      if (progreso < 0.5) {
        el.style.zIndex = '1'
        el.style.transform = `translateY(${75 - 220 * progreso}%)`
      } else {
        const avance = (progreso - 0.5) * 2
        el.style.zIndex = '3'
        el.style.transform = `translateY(${-35 + 60 * avance}%) scale(${1 + 0.15 * avance})`
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
    /* La escena queda fija mientras dura la animación del logo (el primer 100vh de scroll).
       Mide 235vh para que el Pastoreo, que sube 35vh sobre el Hero, recién aparezca cuando el logo ya terminó */
    <header className="relative h-[235vh]">
      <div className="sticky top-0 h-screen min-h-[560px] overflow-hidden">
        {/* Foto, logo y montañas comparten una caja con la proporción de la foto que cubre la pantalla
            (como un object-fit: cover), así las montañas recortadas calzan con la foto en cualquier pantalla */}
        <div className="absolute left-1/2 top-1/2 w-[max(100%,100vh*1024/576)] aspect-[1024/576] -translate-x-1/2 -translate-y-1/2">
          <img className="absolute inset-0 h-full w-full" src={foto} alt="" />
          <Logo
            alto="clamp(64px, 12.75vw, 200px)"
            className="absolute left-1/2 top-[36%] z-[1] -translate-x-1/2"
            ref={logo}
          />
          <img className="absolute bottom-0 left-0 z-[2] w-full -scale-x-100" src={borde} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Hero
