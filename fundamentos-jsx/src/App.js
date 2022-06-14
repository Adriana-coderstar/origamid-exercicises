// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
}

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
}

function App() {
  const dados = mario

  const total = dados.compras
    .map((compra) => Number(compra.preco.replace('R$', '')))
    .reduce((curr, acc) => curr + acc)
  console.log(total)

  return (
    <div>
      <p>Cliente: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Total: R$ {total}</p>
      <p>
        Situação:
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativo' : 'Inativo'}
        </span>
      </p>
      {total > 10000 && <p>Você excedeu o limite</p>}
    </div>
  )
}

export default App
