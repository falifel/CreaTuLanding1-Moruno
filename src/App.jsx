import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'

import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar brandName="TiendaEnCasa" categoria1="Mujer" categoria2="Hombre" categoria3="Infantil"></NavBar>
      </div>
     
      <div>
      <ItemListContainer descripcion="Esta es la descripción de la tienda de ropa mostrada a traves de props"></ItemListContainer>
      </div>
    </>
  )
}

export default App
