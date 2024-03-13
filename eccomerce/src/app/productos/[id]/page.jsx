"use client";
import { CardContent, Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
async function productoDetail(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/productos/${id}`);
    if (!res.ok) {
      throw new Error("Error al obtener los productos");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al cargar los productos:", error);
    return [];
  }
}

export default function CardDetail({ params }) {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoData = await productoDetail(params.id);
        setProducto(productoData);
      } catch (error) {
        console.error("Error fetching producto:", error);
      }
    };

    fetchProducto();
  }, [params.id]);

  console.log(producto);

  return (
    <Card>
      <CardContent className="p-6">
        {producto && (
          <div className="grid gap-4 grid-cols-2">
            <img
              alt="Product Image"
              className="aspect-square object-cover rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800"
              height={400}
              src={producto.imagenUrl}
              width={400}
            />
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">Nombre: {producto.name}</h2>
              <p className="text-2xl font-bold">${producto.price}</p>
              <p>Descripcion: {producto.description}</p>
            </div>
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">
                Marca: {producto.Marca.nombre}
              </h2>
              <img
                alt="Product Image"
                className="aspect-square object-cover object-center rounded-lg overflow-hidden border border-gray-700"
                height={100}
                src={producto.Marca.logo_url}
                width={100}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
