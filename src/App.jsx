import React from 'react'
import Header from './components/Header/Header'
import Sobre from './components/Sections/Sobre'
import Servicos from './components/Sections/Servicos'
import Contato from './components/Sections/Contato'

function App() {
  return (
    <>
      <Header />
      <main>
        <Sobre />
        <Servicos />
        <Contato />
      </main>
    </>
  )
}

export default App

