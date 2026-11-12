import { useState } from 'react'
import CircularCarousel from './CircularCarousel'
import { fotos } from '../datos'

// ponytail: fotos duplicadas para que el anillo tenga más tarjetas y la curva sea más plana
const items = [...fotos, ...fotos].map((foto) => ({ src: foto.src, alt: '' }))

// Las fotos giran en panorámica (React Bits); el contador sigue a la que está al frente
function Carrusel() {
  const [activa, setActiva] = useState(0)

  return (
    <div className="overflow-hidden bg-[linear-gradient(#d7d7d7_30%,#bfcbd6_50%)] text-oscuro">
      <div className="relative mx-auto max-w-[1280px] aspect-[1280/720]">
        <div className="absolute inset-x-0 top-0 h-[63%] aparece">
          <CircularCarousel
            items={items}
            preset="panorama"
            intro="none"
            cardWidth={320}
            aspectRatio={1.5}
            speed={4}
            captions={false}
            gap={40}
            tilt={0}
            curve={0.1}
            perspective={3000}
            autoplay="step"
            interval={3}
            direction="left"
            momentum={0.6}
            snap
            pauseOnHover
            focusOnClick
            draggable={false}
            parallax={0.3}
            stretch={0.5}
            fadeColor="#000000"
            depthFade={0.55}
            innerShade={0.6}
            cornerRadius={12}
            onChange={setActiva}
          />
        </div>

        <p className="absolute left-1/2 top-[65.5%] -translate-x-1/2 whitespace-nowrap font-medium text-[20px] tracking-[-0.04em]">
          Rastrojo de verano
        </p>
        <p className="absolute left-1/2 top-[69.7%] -translate-x-1/2 whitespace-nowrap text-[14px] opacity-[0.55]">
          {String((activa % fotos.length) + 1).padStart(2, '0')} / {String(fotos.length).padStart(2, '0')}
        </p>
      </div>
    </div>
  )
}

export default Carrusel
