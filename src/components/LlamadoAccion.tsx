import Boton from './Boton'
import punto from '../assets/punto.svg'

function LlamadoAccion() {
  return (
    <section className="cta" id="demo">
      <img src={punto} alt="" />
      <h2>Probá Rodeo en tu campo</h2>
      <p>Te mostramos cómo se ven tus lotes, tu ganado y el clima en una demo personalizada.</p>
    <section
      className="flex flex-col items-center gap-8 px-6 pt-[300px] pb-[240px] fondo-cta text-center text-white"
      id="demo"
    >
      <img className="aparece" src={punto} alt="" />
      <h2 className="font-medium text-[clamp(40px,5vw,64px)] leading-[1.06] tracking-[-0.04em] aparece">
        Probá Rodeo en tu campo
      </h2>
      <p className="max-w-[640px] text-[20px] leading-[30px] tracking-[-0.2px] opacity-[0.78] aparece">
        Te mostramos cómo se ven tus lotes, tu ganado y el clima en una demo personalizada.
      </p>
      <div className="flex items-start gap-[14px] pt-2 aparece">
        <Boton texto="Solicitá una demo" href="#demo" />
        <Boton texto="Ver cómo funciona" href="#como-funciona" variante="contorno" />
      </div>
    </section>
  )
}

export default LlamadoAccion
