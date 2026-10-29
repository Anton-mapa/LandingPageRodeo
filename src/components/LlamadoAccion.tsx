import Boton from './Boton'
import punto from '../assets/punto.svg'

function LlamadoAccion() {
  return (
    <section className="cta" id="demo">
      <img src={punto} alt="" />
      <h2>Probá Rodeo en tu campo</h2>
      <p>Te mostramos cómo se ven tus lotes, tu ganado y el clima en una demo personalizada.</p>
      <div className="cta-botones">
        <Boton texto="Solicitá una demo" href="#demo" />
        <Boton texto="Ver cómo funciona" href="#como-funciona" variante="contorno" />
      </div>
    </section>
  )
}

export default LlamadoAccion
