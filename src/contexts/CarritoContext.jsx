import { createContext } from "react";

/* CREANDO CONTEXTO */
/* 1er -> Creación del contexto */
const CarritoContext = createContext()
/* 2da -> El armado del Provider */

const CarritoProvider = ( { children} ) => {


    const agregarCarritoContext = (producto) => {
        // agregarAlCarrito(producto)
    }

    const eliminarCarritoContext = (id) => {
        // eliminarDelCarrito(id)
    }

    const data = {agregarCarritoContext, eliminarCarritoContext}

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

/* 3er -> Exportaciones */
export { CarritoProvider }

export default CarritoContext