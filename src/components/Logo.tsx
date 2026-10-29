import type { CSSProperties } from 'react'
import r from '../assets/r.svg'
import o1 from '../assets/o1.svg'
import d from '../assets/d.svg'
import e from '../assets/e.svg'
import o2 from '../assets/o2.svg'

const letras = [r, o1, d, e, o2]

// El mismo logo se usa grande en el Hero y chico en el Footer: cambia solo el alto
function Logo({ alto, className = '' }: { alto: string; className?: string }) {
  return (
    <div className={`logo ${className}`} style={{ '--alto': alto } as CSSProperties}>
      {letras.map((letra, i) => (
        <img key={i} src={letra} alt={i === 0 ? 'RODEO' : ''} />
      ))}
    </div>
  )
}

export default Logo
