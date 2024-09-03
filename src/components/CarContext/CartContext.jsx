import { createContext, useState } from "react";
import { Toaster, toast } from 'sonner'

// Creamos eñ contexto con un valor inicial vacío
export const CartContext = createContext({
  cart: [],
  totalProductos: () => {},
  removerProductos: () => {},
  borrarProductos: () => {},
});

export const ProvedorDeCarrito = ({ children }) => {
  const [carrito, setCarrito] = useState([])  // este estado almacena los items del carrito
  console.log(carrito)

   // funcion para agregar un item al carrito
  const totalProductos = (item, cantidad) => {
    if (!estaEnElCarrito(item.id)) {// aca verificamos si el item ya esta en el carrito
      setCarrito(prev => [...prev, { ...item, cantidad }])//agregamos el item al carrito
    } else {
      toast.error('el producto ya se encuentra en el carrito')//mensaje que miestra si el item ya esta en el carrito
    }
  }


   // funcion para eliminar un item del carrito
  const removerProductos = (itemId) => {
    const carritoActualizado = carrito.filter(prod => prod.id !== itemId)//filtramos el carrito para eliminar el item
    setCarrito(carritoActualizado) // actualizamos el estado del carrito
  }
   

  // funcion para vaciar el carrito
  const borrarProductos = () => {
    setCarrito([])//volvemos el carrito a un array vacio
  }
   


  // funcion npra verificar si un item ya esta en el carrito
  const estaEnElCarrito = (itemId) => {
    return carrito.some(prod => prod.id === itemId)//verificamos si algun elemento del carrito tiene el mismo id
  }
 // Función para calcular el total de los productos en el carrito
 const obtenerPrecioTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };
  console.log(carrito)


 const totalProdcutosEnElCarrito=()=>{
  return carrito.reduce((total,item)=>total+item.cantidad,0)
 }



  return (
    <CartContext.Provider value={{ carrito, totalProductos, borrarProductos, removerProductos ,obtenerPrecioTotal,totalProdcutosEnElCarrito}}>
      {children}{/* renderizamos los hijos del provedor del contexto */}
    </CartContext.Provider>
  )
}
