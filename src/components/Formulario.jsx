import React from 'react'

const Formulario = () => {
  return (
    <>
      <h3>Agregar : Editar</h3>

      <form>
        <div>
          <label htmlFor="lbl-nombre">Nombre</label>
          <input type="text" name="nombre" id="lbl-nombre" />
        </div>
        <div>
          <label htmlFor="lbl-precio">Precio</label>
          <input type="text" name="precio" id="lbl-precio" />
        </div>
        <div>
          <label htmlFor="lbl-stock">Stock</label>
          <input type="text" name="stock" id="lbl-stock" />
        </div>
        <div>
          <label htmlFor="lbl-marca">Marca</label>
          <input type="text" name="marca" id="lbl-marca" />
        </div>
        <div>
          <label htmlFor="lbl-categoria">Categoría</label>
          <input type="text" name="categoria" id="lbl-categoria" />
        </div>
        <div>
          <label htmlFor="lbl-detalles">Detalles</label>
          <input type="text" name="detalles" id="lbl-detalles" />
        </div>
        <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input type="text" name="foto" id="lbl-foto" />
        </div>
        <div>
          <label htmlFor="lbl-envio">Envío</label>
          <input type="checkbox" name="envio" id="lbl-envio" />
        </div>

        <button type="submit">Guardar</button>
        <button type="reset">Limpiar</button>
      </form>
    </>
  )
}

export default Formulario