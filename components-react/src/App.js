import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Produtos from './page/Produtos'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </div>
  )
}

export default App
