import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pastoreo from './components/Pastoreo'
import ComoFunciona from './components/ComoFunciona'
import Carrusel from './components/Carrusel'
import Funciones from './components/Funciones'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import LlamadoAccion from './components/LlamadoAccion'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <Pastoreo />
      <ComoFunciona />
      <Carrusel />
      <Funciones />
      <PreguntasFrecuentes />
      <LlamadoAccion />
      <Footer />
    </div>
  )
}

export default App
