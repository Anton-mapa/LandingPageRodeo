import Encabezado from './Encabezado'
import PreguntaFrecuente from './PreguntaFrecuente'
import { preguntas } from '../datos'

function PreguntasFrecuentes() {
  return (
    <section className="faq" id="preguntas">
      <Encabezado titulo="Lo que más nos preguntan" bajada="Si te queda alguna duda, escribinos y te respondemos." />

      <div className="faq-lista">
        {preguntas.map((item, i) => (
          <PreguntaFrecuente key={item.pregunta} pregunta={item.pregunta} respuesta={item.respuesta} abierta={i === 0} />
        ))}
      </div>
    </section>
  )
}

export default PreguntasFrecuentes
