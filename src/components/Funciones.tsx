import Encabezado from './Encabezado'
import TarjetaFuncion from './TarjetaFuncion'
import { funcionalidades } from '../datos'

function Funciones() {
  return (
    <section className="px-6 pb-[25px] fondo-funciones text-[#0e1511]" id="funciones">
      <Encabezado
        titulo="Todo tu campo, en una sola pantalla"
        bajada="Rodeo junta satélite, clima y ganado para que decidas cuándo y dónde pastorear."
        claseBajada="opacity-70"
      />

      <div className="mt-10">
        {funcionalidades.map((funcion, i) => (
          <TarjetaFuncion
            key={funcion.titulo}
            titulo={funcion.titulo}
            texto={funcion.texto}
            mockups={funcion.mockups}
            derecha={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}

export default Funciones
