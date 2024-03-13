"use client"
import { useEffect, useState } from 'react';
import CardProductos from '@/components/component/card';
import Link from 'next/link';
import { cargarProductos } from '../utils/funciones';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const productosCargados = await cargarProductos();
      setProductos(productosCargados);
    };

    obtenerProductos();
  }, []);

  return (
    <div className="productos-container p-4">
      {productos.length === 0 ? (
        <div className="mensaje-vacio text-center py-8 border border-dashed border-gray-300 rounded-md">
          <p className="text-gray-500">No hay productos disponibles en este momento.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productos.map(producto => (
            <Link key={producto.id} href={`/productos/${producto.id}`}>
              <CardProductos producto={producto} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Productos;


