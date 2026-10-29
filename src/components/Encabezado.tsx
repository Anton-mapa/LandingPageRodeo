function Encabezado({ titulo, bajada }: { titulo: string; bajada: string }) {
  return (
    <div className="encabezado">
      <h2>{titulo}</h2>
      <p>{bajada}</p>
    </div>
  )
}

export default Encabezado
