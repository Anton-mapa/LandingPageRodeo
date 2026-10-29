import { fotos } from '../datos'

// Posiciones del Figma (px en un cuadro de 1280 x 720) pasadas a %
function Carrusel() {
  return (
    <div className="carrusel">
      <div className="carrusel-interno">
        {fotos.map((foto) => (
          <img
            key={foto.src}
            src={foto.src}
            alt=""
            style={{
              left: `${foto.left / 12.8}%`,
              top: `${foto.top / 7.2}%`,
              width: `${foto.width / 12.8}%`,
              height: `${foto.height / 7.2}%`,
            }}
          />
        ))}
        <p className="carrusel-titulo">Rastrojo de verano</p>
        <p className="carrusel-contador">01 / 11</p>
      </div>
    </div>
  )
}

export default Carrusel
