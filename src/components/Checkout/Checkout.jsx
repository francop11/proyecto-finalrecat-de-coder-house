import { useContext, useState } from "react"; 
import { CartContext } from "../CarContext/CartContext"; 
import { useForm } from "react-hook-form"; // importamos useForm para manejar el formulario
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config"; 
import "./Checkout.css"; 

const Checkout = () => {
    // accedemos a las funciones y datos del carrito atravez del contexto
    const { carrito, borrarProductos, obtenerPrecioTotal } = useContext(CartContext); 
    const [pedidoId, setPedidoId] = useState(""); // aca guardamos el id del pedido
    const { register, handleSubmit } = useForm(); //iniciamos el usseform

    // esta funcion se ejecuta cuando enviamos el formulario de compra
    const comprar = async (data) => {
        console.log("Carrito:", JSON.stringify(carrito, null, 2)); // Imprimimos el carrito para depuración

        // creamos un objeto con los datos del cliente
        const pedido = {
            cliente: data,
            date: new Date(),
            productos: carrito,
            total: obtenerPrecioTotal(),
        };

        try {
            // validamos y actualizamos el stcok del carrito
            await Promise.all(
                carrito.map(async (item, index) => {
                    // verificamos que tenga un id valido y nose undefined
                    if (!item) {
                        throw new Error(`El item en la posición ${index} del carrito es undefined.`);
                    }
                    if (!item.id) {
                        throw new Error(`El producto en la posición ${index} no tiene un ID válido.`);
                    }

                    // referenciamos el producto en la base de datos
                    const productoId = item.id;
                    const productRef = doc(db, "items", productoId);
                    const productDoc = await getDoc(productRef); // traemos el documento
                    const stockActual = productDoc.data()?.cantidad_stock; // traemos el stock actual del prdoucto

                    // verificamos si ahi stock disponible
                    if (stockActual >= item.cantidad) {
                        // si hay stock catualizamos la base de datos
                        await updateDoc(productRef, {
                            cantidad_stock: stockActual - item.cantidad,
                        });
                    } else {
                        // si no ahi stock lanzamos el error
                        throw new Error(`No hay suficiente stock para el producto ${item.nombre}`);
                    }
                })
            );

            // agregamos le pedidio a la colceccion
            const pedidosRef = collection(db, "pedidos");
            const docRef = await addDoc(pedidosRef, pedido);
            setPedidoId(docRef.id); 
            borrarProductos(); //limpiamos el carrito despues de la compra
        } catch (error) {
        
            console.log("Error al realizar la compra:", error);
            alert("Hubo un error al realizar la compra. Por favor, inténtalo nuevamente.");
        }
    };

    // aca mostramos la confirmacion del pedido
    if (pedidoId) {
        return (
            <div className="container-fluid">
                <h1>Muchas gracias por tu compra</h1>
                <p className="id-pedido">Tu número de pedido es: {pedidoId}</p>
            </div>
        );
    }


    return (
        <div className="formulario-container">
            <h1>FINALIZAR COMPRA</h1>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} required />
                <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} required/>
                <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono")} required/>
                <button type="submit" className="comprar">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;
