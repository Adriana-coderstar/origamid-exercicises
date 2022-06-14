import React from 'react'
import Header from '../components/Header'
import Titulo from '../components/Titulo'

function Home() {
  return (
    <div>
      <Header />
      <Titulo text="Home" />
      <h1 style={{ fontSize: '1.4 rem' }}>Essa é a Home do site</h1>
    </div>
  )
}

export default Home
