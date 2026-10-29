import Encabezado from './Encabezado'
import TarjetaFuncion from './TarjetaFuncion'
import { funcionalidades } from '../datos'

function Funciones() {
  return (
    <section className="funciones" id="funciones">
      <Encabezado
        titulo="Todo tu campo, en una sola pantalla"
        bajada="Rodeo junta satélite, clima y ganado para que decidas cuándo y dónde pastorear."
      />

      <div className="funciones-lista">
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
