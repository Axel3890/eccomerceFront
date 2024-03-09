"use client"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { cargarProductos, eliminarProductos, editarProducto } from "../utils/funciones";

const dashboard = () => {
  const [productos, setProductos] = useState([]);
  const [editandoProducto, setEditandoProducto] = useState(null);
  const [nuevosDatosProducto, setNuevosDatosProducto] = useState({
    nombre: '',
    descripcion: '',
    imagenUrl: '',
    precio: '',
  });

  useEffect(() => {
    async function cargarYEstablecerProductos() {
      const productosCargados = await cargarProductos();
      setProductos(productosCargados);
    }

    cargarYEstablecerProductos();
  }, []);

  const handleEliminarProducto = async (id) => {
    await eliminarProductos(id);

    const nuevosProductos = await cargarProductos();

    setProductos(nuevosProductos);
  };

  const handleEditarProducto = (producto) => {
    setEditandoProducto(producto);
    setNuevosDatosProducto({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      imagenUrl: producto.imagen,
      precio: producto.precio,
    });
  };

  const handleSubmitEdicion = async (e) => {
    e.preventDefault();
    await editarProducto(editandoProducto.id, nuevosDatosProducto);
    const nuevosProductos = await cargarProductos();
    setProductos(nuevosProductos);
    setEditandoProducto(null);
    setNuevosDatosProducto({
      nombre: '',
      descripcion: '',
      imagen: '',
      precio: '',
    });
  };

  const handleCancelarEdicion = () => {
    setEditandoProducto(null);
    setNuevosDatosProducto({
      nombre: '',
      descripcion: '',
      imagen: '',
      precio: '',
    });
  };

  return (
    (<div
      className="flex min-h-screen items-start p-4 md:items-center md:p-6 lg:p-8">
      <div className="grid gap-4 w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Productos</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Maneja tus productos aquí, puedes editarlos, eliminarlos o añadir algun producto
        </p>
        <div className="grid gap-4 md:gap-6">
        {productos.map(producto => (
            <Card key={producto.id}>
              <CardContent className="flex items-center gap-4 p-4 md:p-6">
                <img
                  alt="Product image"
                  className="aspect-square rounded-md object-cover border"
                  height="150"
                  src={producto.imagenUrl}
                  width="150"
                />
                <div className="grid gap-1 text-sm md:grid-cols-2 md:text-base">
                  <div className="font-bold">{producto.name}</div>
                  <div>{producto.description}</div>
                  <div className="font-bold">${producto.price}</div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-4 md:p-6">
                <Button size="sm" onClick={() => handleEditarProducto(producto)}>Editar</Button>
                <Button onClick={() => handleEliminarProducto(producto.id)}size="sm">Eliminar</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {editandoProducto && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Editar Producto</h2>
            <form onSubmit={handleSubmitEdicion}>
              <div className="mb-4">
                <label className="block mb-2">Nombre:</label>
                <input
                  type="text"
                  value={nuevosDatosProducto.nombre}
                  onChange={(e) => setNuevosDatosProducto({ ...nuevosDatosProducto, nombre: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Descripción:</label>
                <textarea
                  value={nuevosDatosProducto.descripcion}
                  onChange={(e) => setNuevosDatosProducto({ ...nuevosDatosProducto, descripcion: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Imagen:</label>
                <input
                  type="text"
                  value={nuevosDatosProducto.imagenUrl}
                  onChange={(e) => setNuevosDatosProducto({ ...nuevosDatosProducto, imagenUrl: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Precio:</label>
                <input
                  type="text"
                  value={nuevosDatosProducto.precio}
                  onChange={(e) => setNuevosDatosProducto({ ...nuevosDatosProducto, precio: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="mr-2">Guardar</Button>
                <Button type="button" onClick={handleCancelarEdicion}>Cancelar</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>)
  );
}

export default dashboard;
