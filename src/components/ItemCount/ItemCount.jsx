import { useState } from "react"
import "./ItenCount.css"
// iconos importados de react icons
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";




const ItemCount = ({ stock, onAdd }) => {
    const [number, setNumber] = useState(1); // este estado almacena la cantidad seleccionada
  
    // funcion para incrementar la cantidad
    const sumar = () => {
      if (number < stock) { // verificamos que no exededa el stock
        setNumber(number + 1);
      }
    }
  
    // funcion para reducir la cantidad
    const restar = () => {
      if (number > 1) { // vrifica que la cantidad no sea menor que 1
        setNumber(number - 1);
      }
    }
  
    return (
      <div className="container-fluid">
        <div className="ItemCount">
          <button className="restar" onClick={restar}><VscChromeMinimize /></button>
          <p className="productos"> {number}</p>
          <button className="sumar" onClick={sumar}><VscAdd /></button>
        </div>
        <div>
          <button className="carritoCompras" onClick={() => onAdd(number)} disabled={stock <= 0}>
            agregar al carrito
          </button>
        </div>
      </div>
    )
  }
  
  export default ItemCount;
