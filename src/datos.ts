import type { CSSProperties } from 'react'
import foto1 from './assets/foto1.png'
import foto2 from './assets/foto2.png'
import foto3 from './assets/foto3.png'
import foto4 from './assets/foto4.png'
import foto9 from './assets/foto9.png'
import foto10 from './assets/foto10.png'
import foto11 from './assets/foto11.png'
import laptops from './assets/laptops.png'
import lotes from './assets/lotes.png'
import conexion from './assets/conexion.png'
import fichaLote from './assets/ficha-lote.png'
import clima from './assets/clima.png'
import registro from './assets/registro.png'
import equipo from './assets/equipo.png'

export const etiquetas = [
  { texto: 'Condicion del lote para el pastoreo', left: 883, top: 381, width: 228 },
  { texto: 'Organizacion de las rutinas de pastoreo', left: 986, top: 527, width: 228 },
  { texto: 'Ubicacion del ganado en tiempo real', left: 764, top: 725, width: 261 },
]

export const pasos = [
  {
    titulo: '1. Marcá tu campo',
    texto: 'Dibujá el límite de tu establecimiento y dividilo en lotes directamente sobre el mapa. Cargá el tipo de pastura de cada uno y listo, no hace falta nada más para empezar.',
  },
  {
    titulo: '2. El satélite mira tus pasturas',
    texto: 'Cada vez que pasa un satélite, Rodeo analiza la vegetación de cada lote: cuánto pasto hay, cuánta humedad tiene y cómo viene creciendo. Si hay nubes, el radar sigue midiendo igual.',
  },
  {
    titulo: '3. Los collares ubican a tu ganado',
    texto: 'Los collares GPS muestran en el mapa dónde está el ganado, en qué lote entró y cuánto tiempo lleva ahí. Así sabés qué potrero se está usando y cuál está descansando, sin recorrer el campo.',
  },
  {
    titulo: '4. Rodeo te dice cuándo entrar',
    texto: 'Con todo eso, cada lote tiene su estado de regeneración: No apto, Cuidado, Perfecto o Regular. Ves de un vistazo cuál está listo hoy, cuál conviene esperar y cuál ya pasó su mejor momento. La decisión siempre es tuya.',
  },
]

export const fotos = [
  { src: foto9, left: -200, top: -11.55, width: 255, height: 663.1 },
  { src: foto10, left: 85, top: 102.01, width: 215, height: 435.97 },
  { src: foto11, left: 330, top: 162.55, width: 190, height: 318.34 },
  { src: foto1, left: 550, top: 190, width: 180, height: 260 },
  { src: foto2, left: 760, top: 162.55, width: 190, height: 318.34 },
  { src: foto3, left: 980, top: 102.01, width: 215, height: 435.97 },
  { src: foto4, left: 1225, top: -11.55, width: 255, height: 663.1 },
]

// Posición de cada captura en px del Figma, dentro de una fila de 1280 x 650
export type Mockup = { src: string; x: number; y: number; ancho: number; alto: number; estilo?: CSSProperties }

export const funcionalidades: { titulo: string; texto: string; mockups: Mockup[] }[] = [
  {
    titulo: 'Condición de pasturas',
    texto: 'Cada lote tiene su estado de regeneración: sabés cuál está listo hoy y cuál conviene esperar.',
    mockups: [{ src: laptops, x: 461, y: 73, ancho: 759, alto: 506, estilo: { boxShadow: 'none', borderRadius: 0 } }],
  },
  {
    titulo: 'Ubicación del ganado',
    texto: 'Los collares GPS muestran dónde está tu rodeo y te avisan cuando cambia de lote.',
    mockups: [
      { src: lotes, x: 74, y: 93, ancho: 606, alto: 394, estilo: { rotate: '-4.44deg' } },
      { src: conexion, x: 377, y: -71, ancho: 420, alto: 273, estilo: { rotate: '16.16deg' } },
    ],
  },
  {
    titulo: 'Imágenes satelitales',
    texto: 'NDVI, humedad y radar de Sentinel en cada pasada, aunque el día esté nublado.',
    mockups: [
      {
        src: fichaLote,
        x: 594,
        y: 117,
        ancho: 606,
        alto: 423,
        estilo: { backgroundSize: '105.44% 265.09%', backgroundPosition: '50% 28.08%' },
      },
    ],
  },
  {
    titulo: 'Clima por lote',
    texto: 'La lluvia de los últimos 7 días y el pronóstico de los próximos 5, lote por lote.',
    mockups: [
      { src: clima, x: 60, y: 117, ancho: 606, alto: 394 },
      {
        src: fichaLote,
        x: 230,
        y: 421,
        ancho: 520,
        alto: 146,
        estilo: { backgroundSize: '105.44% 661.18%', backgroundPosition: '50% 63.79%' },
      },
    ],
  },
  {
    titulo: 'Registro de uso',
    texto: 'La planilla de pastoreo de cada potrero se arma sola y la descargás en Excel.',
    mockups: [{ src: registro, x: 594, y: 117, ancho: 606, alto: 394 }],
  },
  {
    titulo: 'Equipo y permisos',
    texto: 'Sumá a tu encargado o a tu asesor con el rol y los permisos que elijas.',
    mockups: [
      { src: equipo, x: 60, y: 117, ancho: 606, alto: 394, estilo: { backgroundSize: '100% 132.45%', backgroundPosition: 'top' } },
    ],
  },
]

export const preguntas = [
  {
    pregunta: '¿Necesito señal en el campo para usar Rodeo?',
    respuesta: 'Los collares envían su posición por red celular o satelital según el modelo. Vos consultás todo desde la app cuando tengas conexión.',
  },
  {
    pregunta: '¿Cada cuánto se actualizan las imágenes satelitales?',
    respuesta: 'Sentinel-2 pasa cada pocos días. Cuando hay nubes, el radar de Sentinel-1 sigue midiendo para que no te quedes sin datos.',
  },
  {
    pregunta: '¿Puedo usar Rodeo sin collares?',
    respuesta: 'Sí. La condición de pasturas y el clima funcionan con solo dibujar tus lotes. Los collares suman la ubicación del ganado.',
  },
  {
    pregunta: '¿Quién puede ver la información de mi campo?',
    respuesta: 'Solo las personas que vos invitás, con el rol que les asignes: propietario, administrador o visor.',
  },
  {
    pregunta: '¿Cuánto tarda en estar listo?',
    respuesta: 'Marcás el establecimiento y los lotes en pocos minutos, y los datos satelitales y de clima se cargan solos.',
  },
]

export const columnasFooter = [
  {
    titulo: 'PRODUCTO',
    links: [
      { texto: 'Cómo funciona', href: '#como-funciona' },
      { texto: 'Funciones', href: '#funciones' },
      { texto: 'Preguntas frecuentes', href: '#preguntas' },
    ],
  },
  {
    titulo: 'RODEO',
    links: [
      { texto: 'Solicitá una demo', href: '#demo' },
      { texto: 'Iniciar sesión', href: '#' },
      { texto: 'Contacto', href: '#' },
    ],
  },
]
