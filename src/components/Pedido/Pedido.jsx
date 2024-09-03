import "./Pedido.css";

import { useContext } from "react";
import { CartContext } from "../CarContext/CartContext";
import { Link } from "react-router-dom";

const Pedido = () => {
    const { carrito, borrarProductos, removerProductos, obtenerPrecioTotal ,totalProdcutosEnElCarrito } = useContext(CartContext); // Obtiene el carrito, las funciones para eliminar ítems, vaciar el carrito y calcular el total
  
    return (
      <div className="pedido-container">
        <h2>Resumen del Pedido</h2>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <div>
            <ul>
              {carrito.map((item) => (
                <li key={item.id}>
                  <h3>{item.nombre}</h3>
                  <p>Precio por unidad: $USD {item.precio.toLocaleString()}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Total: $USD {(item.precio * item.cantidad).toLocaleString()}</p>
                  <button onClick={() => removerProductos(item.id)}>Eliminar</button> {/* Botón para eliminar el ítem */}
                </li>
              ))}
            </ul>
           
            <h3>Total General: $USD {obtenerPrecioTotal().toLocaleString()}</h3> {/* Muestra el total general */}
            <h4>TOTAL DE PRODUCTOS EN EL CARRITO : {totalProdcutosEnElCarrito()}</h4>
            <button onClick={borrarProductos}>Vaciar carrito</button> {/* Botón para vaciar todo el carrito */}
            <Link  className="boton-comprar" to="/checkout">Finalizar compra</Link>
          </div>
        )}
        
      </div>
    );
  };
  
  export default Pedido;