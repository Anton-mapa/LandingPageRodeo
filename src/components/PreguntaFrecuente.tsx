import mas from '../assets/icono-mas.svg'
import menos from '../assets/icono-menos.svg'

type PreguntaFrecuenteProps = {
  pregunta: string
  respuesta: string
  abierta: boolean
  alAlternar: () => void
}

function PreguntaFrecuente({ pregunta, respuesta, abierta, alAlternar }: PreguntaFrecuenteProps) {
  return (
    <div className="py-[26px] border-b border-oscuro/12 aparece">
      <button onClick={alAlternar} aria-expanded={abierta} className="flex w-full items-center gap-6 border-0 bg-transparent p-0 text-left font-semibold text-[22px] leading-[30px] tracking-[-0.44px] text-oscuro cursor-pointer">
        <span className="flex-1">{pregunta}</span>
        <img src={abierta ? menos : mas} alt="" />
      </button>
      {/* grid 0fr -> 1fr: la respuesta se desliza al abrir y cerrar */}
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${abierta ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <p className="overflow-hidden max-w-[760px] pt-3 text-[18px] leading-[28px] tracking-[-0.18px] text-gris">{respuesta}</p>
      </div>
    </div>
  )
}

export default PreguntaFrecuente
