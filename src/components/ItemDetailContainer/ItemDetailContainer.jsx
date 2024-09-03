import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {doc,getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"

// este componente se encargar atravez del estado mostrar solo uno de los productos
//aca recibimos una prop que necesitamos usar dentro de nuestro componente
const ItemDetailContainer=()=>{

    const [item,setItem]=useState(null)
    
    //este metodo nos devuelve un obejto con los parametros que haya en nuestra url
    const id=useParams().id

    useEffect(()=>{

        const docRef=doc(db,"items",id)
        getDoc(docRef)
        .then((resp)=>{
            setItem(
                {...resp.data(),id:resp.id}
            )
        })
        

    },[id])


    return (
        <div>
          
         {item && < ItemDetail item={item} /> } 
          {/* si producto exite renderiza item detail sino muestra el div  */}
          
        </div>
      )


}

export default ItemDetailContainer