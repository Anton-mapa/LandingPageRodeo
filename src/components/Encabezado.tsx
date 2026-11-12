type EncabezadoProps = {
  titulo: string
  bajada: string
  claseTitulo?: string
  claseBajada?: string
}

function Encabezado({ titulo, bajada, claseTitulo = '', claseBajada = '' }: EncabezadoProps) {
  return (
    <div className="mx-auto flex max-w-[760px] flex-col gap-4 text-center aparece">
      <h2 className={`font-medium text-[clamp(32px,3.75vw,48px)] leading-[1.12] tracking-[-0.03em] ${claseTitulo}`}>
        {titulo}
      </h2>
      <p className={`text-[20px] leading-[30px] tracking-[-0.2px] ${claseBajada}`}>{bajada}</p>
    </div>
  )
}

export default Encabezado
