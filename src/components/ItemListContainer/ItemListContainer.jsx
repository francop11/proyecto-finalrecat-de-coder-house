
import { useEffect,useState } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection ,getDocs,query,where} from "firebase/firestore"
import { db } from "../../firebase/config"

// creamos a la landind del proyecto
const ItemListConatiner=({greeting})=>{



     // usamos el estado para almacenar los productos
    const[productos,setProductos]=useState([])


    const categoria=useParams().categoria


    
    useEffect(() => {
        //  creeamos una referencia a la colección items de firestore
        const productosRef = collection(db, "items");

        const q=categoria ? query(productosRef,where("categoria","==",categoria)) :productosRef
    
        // llamamos a la función getDocs para obtener todos los documentos de la coleccion items
        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
    
                setProductos(items);
            })
            .catch((error) => {
                console.error("Error fetching products: ", error);
            });
    }, [categoria]);
    


    return(
    
        
        
        <section className="container-fluid">
        <div className="row">
            <div className="col-sm-12 col-lg-12 input-div">
            {/* aca pasamos un prop al h1 */}
            <h1 className="titulo">{greeting}</h1>
             {/* pasamos el estado atravez de props al componente item list */}
             <ItemList productos={productos}/>


        

            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-lg-12 ">
                {/* pasamos el estado atravez de props al componente item list */}
          


        

            </div>
        </div>
    
        
    </section>
        

    )

}


export default ItemListConatiner