import React, { useEffect } from 'react'
import ItensApi from './ItensApi'

function Produtos() {
  const [produto, setProduto] = React.useState(false)

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if (produtoLocal !== null) setProduto(produtoLocal)
  }, [])

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto)
  }, [produto])

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <h1>Preferências: {produto}</h1>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>
      {produto && <ItensApi produto={produto} />}
    </div>
  )
}

export default Produtos
