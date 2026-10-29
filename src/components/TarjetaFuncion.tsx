import type { Mockup } from '../datos'

type TarjetaFuncionProps = {
  titulo: string
  texto: string
  mockups: Mockup[]
  derecha: boolean
}

// Las posiciones del Figma (px en una fila de 1280 x 650) se pasan a % para que escalen con el ancho
function TarjetaFuncion({ titulo, texto, mockups, derecha }: TarjetaFuncionProps) {
  return (
    <div className={derecha ? 'funcion derecha' : 'funcion'}>
      {mockups.map((m, i) => (
        <div
          key={i}
          className="mockup"
          style={{
            backgroundImage: `url(${m.src})`,
            left: `${m.x / 12.8}%`,
            top: `${m.y / 6.5}%`,
            width: `${m.ancho / 12.8}%`,
            height: `${m.alto / 6.5}%`,
            ...m.estilo,
          }}
        />
      ))}
      <div className="funcion-texto">
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    </div>
  )
}

export default TarjetaFuncion
