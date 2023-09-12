import { createContext, useEffect, useState } from "react";
import { get } from "../utils/http";

/* Creando CONTEXTO */
/* 1er -> Creación del contexto */
const ProductoContext = createContext()

/* 2do -> El armado del Provider */
const url = 'http://localhost:8080/productos/'

const ProductoProvider = ( { children } ) => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        obtenerProductos()
    }, []) // <= Array vacío hace solo una petición

   const obtenerProductos = async () => {
    try {
        const products = await get(url)
        setProductos(products)
    } catch (error) {
        console.error(`ERROR obtenerProductos: ${error}`)
    }
   }

    const data = { productos }

    return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
}

/* 3er -> Exportaciones */
export { ProductoProvider }

export default ProductoContext
