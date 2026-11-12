import type { CSSProperties, Ref } from 'react'
import r from '../assets/r.svg'
import o1 from '../assets/o1.svg'
import d from '../assets/d.svg'
import e from '../assets/e.svg'
import o2 from '../assets/o2.svg'

const letras = [r, o1, d, e, o2]

// El mismo logo se usa grande en el Hero y chico en el Footer: cambia solo el alto
function Logo({ alto, className = '', ref }: { alto: string; className?: string; ref?: Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className={`flex items-center gap-[calc(var(--alto)*0.065)] ${className}`}
      style={{ '--alto': alto } as CSSProperties}
    >
      {letras.map((letra, i) => (
        <img key={i} className="h-[var(--alto)] w-auto" src={letra} alt={i === 0 ? 'RODEO' : ''} />
      ))}
    </div>
  )
}

export default Logo
