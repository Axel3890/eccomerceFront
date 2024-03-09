
import CardProductos from '@/components/component/card';
import Link from 'next/link';
async function cargarProductos(){
  try {
    const res = await fetch('http://localhost:3000/api/productos');
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


async function Productos (){
  const productos = await cargarProductos();
  console.log(productos)

  return (
    <div>
      {productos.map(producto => (
        <Link href={`/productos/${producto.id}`}><CardProductos key={producto.id} producto={producto}></CardProductos></Link>
      ))}
    </div>
  );
};

export default Productos;


