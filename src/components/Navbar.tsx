import Boton from './Boton'
import r from '../assets/r.svg'
import flecha from '../assets/flecha-menu.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-lado">
        <Boton texto="Solicitá una demo" href="#demo" variante="claro" />
      </div>

      <div className="navbar-menu">
        <a href="#como-funciona">Cómo funciona</a>
        <button className="navbar-funciones">
          Funciones <img src={flecha} alt="" />
        </button>
        <a href="#preguntas">Preguntas frecuentes</a>
      </div>

      <div className="navbar-lado navbar-derecha">
        <img src={r} alt="RODEO" height={50.93} />
      </div>
    </nav>
  )
}

export default Navbar
