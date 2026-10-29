import mas from '../assets/icono-mas.svg'
import menos from '../assets/icono-menos.svg'

type PreguntaFrecuenteProps = {
  pregunta: string
  respuesta: string
  abierta: boolean
}

function PreguntaFrecuente({ pregunta, respuesta, abierta }: PreguntaFrecuenteProps) {
  return (
    <div className="pregunta">
      <button>
        <span>{pregunta}</span>
        <img src={abierta ? menos : mas} alt="" />
      </button>
      {abierta && <p>{respuesta}</p>}
    </div>
  )
}

export default PreguntaFrecuente
