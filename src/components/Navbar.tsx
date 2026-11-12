import Boton from './Boton'
import r from '../assets/r.svg'
import flecha from '../assets/flecha-menu.svg'

const enlace = 'font-semibold text-[clamp(16px,1.95vw,25px)] tracking-[-0.02em] text-[#0f1412] whitespace-nowrap'

function Navbar() {
  return (
    <nav className="fixed inset-x-6 top-[18px] z-10 flex items-center justify-between">
      <div className="flex flex-1">
        <Boton texto="Solicitá una demo" href="#demo" variante="claro" />
      </div>

      {/* Píldora de vidrio para que el menú se lea sobre cualquier fondo */}
      <div className="flex items-center gap-7 rounded-full bg-white/35 px-6 py-3 backdrop-blur-[20px]">
        <a className={enlace} href="#como-funciona">
          Cómo funciona
        </a>
        <button className={`flex items-center gap-[5px] border-0 bg-transparent p-0 cursor-pointer ${enlace}`}>
          Funciones <img src={flecha} alt="" />
        </button>
        <a className={enlace} href="#preguntas">
          Preguntas frecuentes
        </a>
      </div>

      <div className="flex flex-1 justify-end">
        <img className="h-[50.93px] w-auto" src={r} alt="RODEO" />
      </div>
    </nav>
  )
}

export default Navbar
