import type { Mockup } from '../datos'

type TarjetaFuncionProps = {
  titulo: string
  texto: string
  mockups: Mockup[]
  derecha: boolean
}

// Las posiciones del Figma (px en una fila de 1280 x 650) se pasan a % para que escalen con el ancho
function TarjetaFuncion({ titulo, texto, mockups, derecha }: TarjetaFuncionProps) {
  return (
    <div className="relative mx-auto max-w-[1280px] aspect-[1280/650]">
      {mockups.map((m, i) => (
        <div
          key={i}
          className="absolute rounded-[7px] bg-cover bg-center shadow-[-40px_40px_40px_rgba(0,0,0,0.25)] aparece"
          style={{
            backgroundImage: `url(${m.src})`,
            left: `${m.x / 12.8}%`,
            top: `${m.y / 6.5}%`,
            width: `${m.ancho / 12.8}%`,
            height: `${m.alto / 6.5}%`,
            ...m.estilo,
          }}
        />
      ))}
      <div
        className={`absolute top-1/2 w-[28.3%] -translate-y-1/2 flex flex-col gap-[11px] aparece ${
          derecha ? 'left-[60.86%]' : 'left-[7.1%]'
        }`}
      >
        <h3 className="font-semibold text-[clamp(20px,2.57vw,32.95px)] leading-none tracking-[-0.02em]">{titulo}</h3>
        <p className="text-[clamp(15px,1.72vw,21.96px)] leading-[1.1] tracking-[-0.01em] opacity-[0.68]">{texto}</p>
      </div>
    </div>
  )
}

export default TarjetaFuncion
