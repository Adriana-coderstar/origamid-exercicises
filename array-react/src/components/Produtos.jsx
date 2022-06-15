import React from 'react'
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
]

function Produtos() {
  const getProdutos = () => {
    return produtos
      .filter((produto) => Number(produto.preco.replace('R$', '') > 1500))
      .map((item) => (
        <div key={item.id}>
          <h1>{item.nome}</h1>
          <p>{item.preco}</p>
          <ul>
            {item.cores.map((cor) => (
              <li
                key={cor}
                style={{ backgroundColor: cor, color: 'white', width: '200px' }}
              >
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))
  }
  // console.log(getProdutos())

  return <div>{getProdutos()}</div>
}

export default Produtos
