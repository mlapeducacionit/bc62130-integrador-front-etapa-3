
export const get = async (url) => {

    try {

        const respuesta = await fetch(url) // objeto respuesta.
        console.log(respuesta)
        if ( !respuesta.ok ) {
            throw new Error(`Algo paso: ${respuesta.status}, ${respuesta.statusText}`)
        }
        const data = await respuesta.json()
        return data

    } catch (error) {
        console.error(`ERROR GET:`, error)
    }

}

export const post = async (url, dato) => { 
    try {
        const config = {
            method: 'POST',
            headers: { 'context-type': 'application/json'},
            body: JSON.stringify(dato)
        }
        const respuesta = await fetch(url, config)
        if ( !respuesta.ok ) {
            throw new Error(`Algo paso: ${respuesta.status}, ${respuesta.statusText}`)
        }
        const productoGuardado = await respuesta.json()
        return productoGuardado

    } catch (error) {
        console.error(`ERROR POST`, error)
    }

}