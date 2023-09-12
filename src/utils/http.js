
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