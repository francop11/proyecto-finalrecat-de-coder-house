import Item from "../Item/Item"

const ItemList=({productos})=>{

   
    return(
    <div>
        
        <div>
             {/* aca usamos map para mostrar los productos atarvez del componente item */}
            {productos.map((prod)=> <Item  producto={prod} key={prod.id}/>)}
        </div>
    </div>
    )
}

export default ItemList