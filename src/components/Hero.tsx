import Logo from './Logo'
import foto from '../assets/hero.png'
import borde from '../assets/hero-borde.png'

function Hero() {
  return (
    <header className="hero">
      <img className="hero-foto" src={foto} alt="" />
      <Logo alto="clamp(64px, 12.75vw, 200px)" className="hero-logo" />
      <img className="hero-borde" src={borde} alt="" />
    </header>
  )
}

export default Hero
