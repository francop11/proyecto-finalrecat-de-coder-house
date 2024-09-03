import "./Item.css"
import { Link } from "react-router-dom"

const Item =({producto})=>{
    return(

        // aca recibimos cada uno de los datos a mostrar de nuestro archivo json    
                
                < div key={producto.id} className="cards">
                        <h2  className="cards-title">{producto.nombre}</h2>
                        <p className="cards-desc">{producto.descripcion }</p>
                        <img className="card-img" src={producto.imagen_url} alt={producto.nombre} />
                        <p className="card-precio">Precio $USD: {producto.precio}</p>
                        <p className="card-stock">Stock: {producto.cantidad_stock}</p>
                        <Link className="card-pedido" to={`/Item/${producto.id}`} > ver mas</Link>
                        
    
        
                    </div>
    
            
        
            
        )

}

export default Item