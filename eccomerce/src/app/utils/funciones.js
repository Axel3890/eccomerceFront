async function cargarProductos(){
    try {
      const res = await fetch('https://eccomerce-front-rho.vercel.app/api/productos');
      if (!res.ok) {
        throw new Error('Error al obtener los productos');
      }
      const data = await res.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      return [];
    }
  }




async function eliminarProductos(id){
    try {
      const res = await fetch(`https://eccomerce-front-rho.vercel.app/api/productos/${id}`, {
        method: 'DELETE'
      });
      return console.log("producto eliminado")
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  }


  async function editarProducto(id, nuevosDatos) {
    try {
      const res = await fetch(`https://eccomerce-front-rho.vercel.app/api/productos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevosDatos),
      });
      if (!res.ok) {
        throw new Error('Error al editar el producto');
      }
    } catch (error) {
      console.error('Error al editar el producto:', error);
    }
  }

  async function agregarProducto(nuevoProducto) {
    try {
      const res = await fetch('https://eccomerce-front-rho.vercel.app/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
      });
      if (!res.ok) {
        throw new Error('Error al agregar el producto');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      return null;
    }
  }
  


module.exports = { cargarProductos, eliminarProductos, editarProducto, agregarProducto}