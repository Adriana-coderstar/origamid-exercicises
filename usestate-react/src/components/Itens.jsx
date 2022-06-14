import React from 'react'

function Itens({ dados }) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img
        style={{ width: '200px' }}
        src={dados.fotos[0].src}
        alt={dados.nome}
      />
    </div>
  )
}

export default Itens
