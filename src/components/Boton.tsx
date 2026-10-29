type BotonProps = {
  texto: string
  href: string
  variante?: 'primario' | 'contorno' | 'claro'
}

function Boton({ texto, href, variante = 'primario' }: BotonProps) {
  return (
    <a className={`boton boton-${variante}`} href={href}>
      {texto}
    </a>
  )
}

export default Boton
