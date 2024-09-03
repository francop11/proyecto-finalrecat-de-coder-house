

//esta funcion que usaremos para pedir datos de nuestro arcchivo json atravez d euna promesa
export const pedirDatos=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
            
        },500);
    })
}


//esta funcion busca el primer el id de cada elemento y compara el que recibimos por parametro
export const pedirItemPorId=(id)=>{
    return new Promise((resolve, reject) => {
        
        const item=data.find((el)=>el.id===id)

        if(item){
            resolve(item)
        }else{
            reject({error:"producto no encontrado"})
        }
    })
}