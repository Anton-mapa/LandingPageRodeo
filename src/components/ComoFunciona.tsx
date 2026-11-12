import { pasos } from '../datos'

function ComoFunciona() {
  return (
    /* Arranca con el verde oscuro del final de la foto y se aclara hasta el gris */
    <section
      className="px-lado pt-[288px] pb-[140px] bg-[linear-gradient(#14170e,#d7d7d7_280px)] text-black"
      id="como-funciona"
    >
      <h2 className="font-semibold text-[clamp(40px,5.37vw,68.73px)] aparece">Como funciona</h2>
      <p className="font-helvetica text-[clamp(18px,2.36vw,30.17px)] tracking-[-0.06em] aparece">
        Rodeo junta lo que ve el satélite, lo que dice el clima y dónde está tu ganado, y lo convierte en una sola
        respuesta: qué lote está listo para pastorear y cuándo conviene entrar.
      </p>

      {/* Dos columnas: los pasos pares bajan un poco para que queden escalonados */}
      <div className="mt-10 grid grid-cols-2 gap-x-6">
        {pasos.map((paso, i) => (
          <div key={paso.titulo} className={`aparece ${i % 2 === 1 ? 'mt-[200px]' : ''}`}>
            <h3 className="mb-[30px] font-semibold text-[clamp(20px,2.34vw,30px)]">{paso.titulo}</h3>
            <p className="font-helvetica text-[clamp(16px,1.95vw,25px)] tracking-[-0.06em]">{paso.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ComoFunciona
