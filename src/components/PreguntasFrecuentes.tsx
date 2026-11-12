import { useState } from 'react'
import Encabezado from './Encabezado'
import PreguntaFrecuente from './PreguntaFrecuente'
import { preguntas } from '../datos'

function PreguntasFrecuentes() {
  const [abierta, setAbierta] = useState<number | null>(0)

  return (
    <section
      className="flex flex-col items-center gap-16 px-6 pt-[240px] pb-[120px] bg-[linear-gradient(#e7dbbc,#ecefea_240px)]"
      id="preguntas"
    >
      <Encabezado
        titulo="Lo que más nos preguntan"
        bajada="Si te queda alguna duda, escribinos y te respondemos."
        claseTitulo="text-oscuro"
        claseBajada="text-gris"
      />

      <div className="w-full max-w-[860px]">
        {preguntas.map((item, i) => (
          <PreguntaFrecuente
            key={item.pregunta}
            pregunta={item.pregunta}
            respuesta={item.respuesta}
            abierta={abierta === i}
            alAlternar={() => setAbierta(abierta === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}

export default PreguntasFrecuentes
