type BotonProps = {
  texto: string
  href: string
  variante?: 'primario' | 'contorno' | 'claro'
}

const variantes = {
  primario: 'px-7 py-[15px] text-[16px] leading-[20px] tracking-[-0.16px] bg-verde text-oscuro',
  contorno: 'px-7 py-[15px] text-[16px] leading-[20px] tracking-[-0.16px] border-[1.5px] border-white/70 text-white',
  claro: 'px-[22px] py-[11px] text-[18px] leading-[22px] bg-white/95 text-oscuro',
}

function Boton({ texto, href, variante = 'primario' }: BotonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap ${variantes[variante]}`}
      href={href}
    >
      {texto}
    </a>
  )
}

export default Boton
