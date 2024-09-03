import { Link } from "react-router-dom"
import "../Item/Item.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { CartContext } from "../CarContext/CartContext"



const ItemDetail = ({ item }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(0); // Estado para almacenar la cantidad añadida
  const { totalProductos } = useContext(CartContext); // obtenemos la funcion additem del contexto

  // funcion para manejar la implementacion de elemntos en el carrito
  const manejarEnAgregar = (cantidad) => {
    setCantidadAgregada(cantidad); // actualizamops la cantidad añadida

    const artículoParaAgregar = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      total:item.precio*cantidad
    };
    totalProductos(artículoParaAgregar, cantidad); // llamamos additem para agregar items al carrito
  };

  return (
    <div className="card-item">
      <h2 className="cards-title">{item.nombre}</h2>
      <p className="cards-desc">Descripción: {item.descripcion}</p>
      <img className="card-img" src={item.imagen_url} alt={item.nombre} />
      <p className="card-precio">Precio$USD: {item.precio}</p>
      <p className="card-stock">Stock: {item.cantidad_stock}</p>
      <section>
        {cantidadAgregada > 0 ? (
          <Link className="card-pedido"  to="/pedido">terminar compra</Link> // muetsra el enlace para terminar la compra si ahi un producto en el carrito
        ) : (
          <ItemCount stock={item.cantidad_stock} onAdd={manejarEnAgregar} /> // mostramos el item count si no ahi nada agregado
        )}
      </section>
    </div>
  );
};

export default ItemDetail;