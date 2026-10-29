import { etiquetas } from '../datos'
import campo from '../assets/campo.png'
import sombra from '../assets/oscuro.svg'
import flechaVertical from '../assets/flecha-vertical.png'
import flechaHorizontal from '../assets/flecha-horizontal.png'
import lineaPunteada from '../assets/linea-punteada.svg'

function Pastoreo() {
  return (
    <section className="pastoreo">
      <img className="pastoreo-foto" src={campo} alt="" />
      <img className="pastoreo-sombra" src={sombra} alt="" />

      <h2>
        <span>Pastoreo Inteligente,</span>
        <span>al alcance de tus manos</span>
      </h2>

      <img className="flecha-vertical" src={flechaVertical} alt="" />
      <img className="flecha-horizontal" src={flechaHorizontal} alt="" />
      <img className="linea-punteada" src={lineaPunteada} alt="" />

      {etiquetas.map((etiqueta) => (
        <p
          key={etiqueta.texto}
          className="etiqueta"
          style={{ left: `${etiqueta.left / 12.8}%`, top: `${etiqueta.top / 8.95}%`, width: `${etiqueta.width / 12.8}%` }}
        >
          {etiqueta.texto}
        </p>
      ))}

    </section>
  )
}

export default Pastoreo
