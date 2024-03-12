"use client"
import { useEffect, useState } from 'react';
import CardProductos from '@/components/component/card';
import Link from 'next/link';

async function cargarProductos() {
  try {
    const res = await fetch('http://localhost:3000/api/productos');
    if (!res.ok) {
      throw new Error('Error al obtener los productos');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los productos:', error);
    return [];
  }
}

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productos.map(producto => (
        <Link key={producto.id} href={`/productos/${producto.id}`}>
          <CardProductos producto={producto} />
        </Link>
      ))}
    </div>
  );
}

export default Productos;



