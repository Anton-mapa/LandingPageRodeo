import { etiquetas } from '../datos'
import campo from '../assets/campo.png'
import sombra from '../assets/oscuro.svg'
import flechaVertical from '../assets/flecha-vertical.png'
import flechaHorizontal from '../assets/flecha-horizontal.png'
import lineaPunteada from '../assets/linea-punteada.svg'

// Foto con anotaciones: todo se ubica en % para que escale junto con la imagen.
// Sube 35vh sobre el final del Hero y su borde de arriba se funde con el paisaje
function Pastoreo() {
  return (
    <section className="relative z-[1] -mt-[35vh] aspect-[1280/895] overflow-hidden bg-[#14170e] text-white [mask-image:linear-gradient(transparent,#000_35vh)]">
      <img
        className="absolute inset-0 h-full w-full object-cover -scale-x-100 [mask-image:linear-gradient(#000_75%,transparent)]"
        src={campo}
        alt=""
      />
      <img
        className="absolute left-0 top-[19%] h-[81.3%] w-full [mask-image:linear-gradient(transparent,#000_30%)]"
        src={sombra}
        alt=""
      />

      <h2 className="absolute left-0 top-[24.4%] w-full text-center font-medium text-[4.69vw] leading-[1.02] tracking-[-0.05em] aparece">
        <span className="block w-[45.5%]">Pastoreo Inteligente,</span>
        <span className="block w-[51%] ml-[15.2%]">al alcance de tus manos</span>
      </h2>

      <img
        className="absolute left-[58.49%] top-[62.76%] h-[29.81%] w-[0.833%] rotate-180"
        src={flechaVertical}
        alt=""
      />
      <img
        className="absolute left-[69.22%] top-[27.89%] h-[49.09%] w-[0.833%] rotate-90"
        src={flechaHorizontal}
        alt=""
      />
      <img className="absolute left-[44.08%] top-[59.13%] w-[32.25%]" src={lineaPunteada} alt="" />

      {etiquetas.map((etiqueta) => (
        <p
          key={etiqueta.texto}
          className="absolute font-helvetica text-[2.5vw] tracking-[-0.05em] aparece"
          style={{ left: `${etiqueta.left / 12.8}%`, top: `${etiqueta.top / 8.95}%`, width: `${etiqueta.width / 12.8}%` }}
        >
          {etiqueta.texto}
        </p>
      ))}
    </section>
  )
}

export default Pastoreo
