// importamos el css de cartwidget
import "./Cartwidget.css"
// importamos el icono del carrito
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../CarContext/CartContext";


const CartWidget=()=>{
    const {totalProdcutosEnElCarrito}=useContext(CartContext)
    return(
        <div>
            {/* aca simulamos el carrito de compras */}
            <p className="carrito">{totalProdcutosEnElCarrito()==0?null:totalProdcutosEnElCarrito()}</p>
            {/* importamos el componente del icono del carrito */}
            < FaShoppingCart color="white" />

        </div>

    )
}

export default CartWidget