import './App.css'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pedido from './components/Pedido/Pedido'
import { ProvedorDeCarrito } from './components/CarContext/CartContext'
import Checkout from './components/Checkout/Checkout'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <BrowserRouter>
    {/* //cartprovide envuelve todo el contexto de la aplicacion y es el provedor del contexto */}
      <ProvedorDeCarrito>  
        <Navbar/>
        <Toaster  richColors />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a House Gamer"}/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/productos/:categoria' element={<ItemListContainer />}/>
          <Route path='/pedido' element={<Pedido />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </ProvedorDeCarrito>
    </BrowserRouter>
  )
}

export default App
