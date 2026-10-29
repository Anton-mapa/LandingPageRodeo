import Logo from './Logo'
import { columnasFooter } from '../datos'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-marca">
          <Logo alto="40.52px" />
          <p>Pastoreo inteligente, al alcance de tus manos.</p>
        </div>

        <div className="footer-columnas">
          {columnasFooter.map((columna) => (
            <div key={columna.titulo} className="footer-columna">
              <h4>{columna.titulo}</h4>
              {columna.links.map((link) => (
                <a key={link.texto} href={link.href}>
                  {link.texto}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-legal">
        <p>© 2026 Rodeo. Todos los derechos reservados.</p>
        <p>Hecho para el campo argentino</p>
      </div>
    </footer>
  )
}

export default Footer
