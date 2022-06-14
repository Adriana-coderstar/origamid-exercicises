import { Link } from 'react-router-dom'
import Produto from '../components/Produto'
import Titulo from '../components/Titulo'

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
]

function Produtos() {
  return (
    <div>
      <Link to={'/'}>Voltar a Home</Link>
      <Titulo text="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </div>
  )
}

export default Produtos
