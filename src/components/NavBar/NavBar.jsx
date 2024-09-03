import "./NavBar.css";
// importamos el css de la nav bar
// importamos el carrito en el componente cartwidget
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";




// creamos el menu de la aplicacion usando boostrap
const Navbar=()=>{
    return(
        <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="/logo.jpg" alt="" width="200px" height="100px"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">INICIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/productos/celulares">CELULARES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/productos/notebooks">NOTEBOOKS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/productos/consolas">CONSOLAS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pedido">PEDIDO</Link>
        </li>
      </ul>
      <span className="navbar-text">
        <CartWidget/>
      </span>
    </div>
  </div>
</nav>
      
    </header>

    )
}

// exportamos la nav bar
export default Navbar