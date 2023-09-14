import { useState } from 'react'

const formInicial = {
  id: null,
  nombre: '',
  precio: '',
  stock: '',
  marca: '',
  categoria: '',
  detalles: '',
  foto: '',
  envio: false,
}

const Formulario = () => {
  const [form, setForm] = useState(formInicial)

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {

  }
  const handleReset = ()  => {

  }


  return (
    <>
      <h3>Agregar : Editar</h3>

      <form>
        <div>
          <label htmlFor="lbl-nombre">Nombre</label>
          <input type="text" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-precio">Precio</label>
          <input type="text" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-stock">Stock</label>
          <input type="text" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-marca">Marca</label>
          <input type="text" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-categoria">Categoría</label>
          <input type="text" name="categoria" id="lbl-categoria" value={form.categoria} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-detalles">Detalles</label>
          <input type="text" name="detalles" id="lbl-detalles" value={form.detalles} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input type="text" name="foto" id="lbl-foto" value={form.foto} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-envio">Envío</label>
          <input type="checkbox" name="envio" id="lbl-envio" checked={form.envio} onChange={handleChange} />
        </div>

        <button type="submit">Guardar</button>
        <button type="reset">Limpiar</button>
      </form>
    </>
  )
}

export default Formulario