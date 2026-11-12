import Logo from './Logo'
import { columnasFooter } from '../datos'

const textoChico = 'text-[21.96px] leading-6 tracking-[-0.22px]'

function Footer() {
  return (
    <footer className="flex flex-col gap-14 px-lado pt-20 pb-10 bg-negro text-white">
      <div className="flex justify-between gap-12 aparece">
        <div className="flex flex-col gap-4">
          <Logo alto="40.52px" />
          <p className={`${textoChico} opacity-60`}>Pastoreo inteligente, al alcance de tus manos.</p>
        </div>

        <div className="flex gap-24">
          {columnasFooter.map((columna) => (
            <div key={columna.titulo} className="flex flex-col gap-3">
              <h4 className="font-medium text-[13px] leading-4 tracking-[1.3px] text-verde">{columna.titulo}</h4>
              {columna.links.map((link) => (
                <a key={link.texto} className={`${textoChico} opacity-75`} href={link.href}>
                  {link.texto}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-6 border-t border-white/10 font-medium text-[14px] leading-5">
        <p className="opacity-[0.45]">© 2026 Rodeo. Todos los derechos reservados.</p>
        <p className="opacity-[0.45]">Hecho para el campo argentino</p>
      </div>
    </footer>
  )
}

export default Footer
