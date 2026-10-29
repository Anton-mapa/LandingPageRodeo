import { pasos } from '../datos'

function ComoFunciona() {
  return (
    <section className="como-funciona" id="como-funciona">
      <h2>Como funciona</h2>
      <p className="bajada">
        Rodeo junta lo que ve el satélite, lo que dice el clima y dónde está tu ganado, y lo convierte en una sola
        respuesta: qué lote está listo para pastorear y cuándo conviene entrar.
      </p>

      <div className="pasos">
        {pasos.map((paso) => (
          <div key={paso.titulo} className="paso">
            <h3>{paso.titulo}</h3>
            <p>{paso.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ComoFunciona
