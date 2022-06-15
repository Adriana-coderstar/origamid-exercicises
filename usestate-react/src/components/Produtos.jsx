import React from 'react'
import Itens from './Itens'

function Produtos() {
  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  const handleClick = async (event) => {
    setCarregando(true)

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    )
    const json = await response.json()
    setDados(json)
    setCarregando(false)
  }

  return (
    <div>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Itens dados={dados} />}
    </div>
  )
}

export default Produtos
