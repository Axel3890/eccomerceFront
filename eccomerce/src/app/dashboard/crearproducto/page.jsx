"use client"
import { useState } from "react";
import Swal from 'sweetalert2';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { agregarProducto } from "@/app/utils/funciones";
import Link from "next/link";

const Crearproducto = () => {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagenUrl: "",
    marcaId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  const handleCrearProducto = async (e) => {
    e.preventDefault();
    try {
      const productoAgregado = await agregarProducto(nuevoProducto);
      if (productoAgregado) {
        Swal.fire({
          icon: 'success',
          title: 'Producto agregado exitosamente',
        });
        setNuevoProducto({
          nombre: "",
          descripcion: "",
          precio: "",
          imagenURL: "",
          marcaId: "",
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al agregar el producto',
          text: 'Por favor, inténtalo de nuevo más tarde.',
        });
      }
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error al agregar el producto',
        text: 'Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };


  return (
    <form onSubmit={handleCrearProducto}>
      <Card className="mx-auto max-w-3xl">
        <CardHeader className="flex items-start gap-4">
          <Link
            className="flex items-center justify-center rounded-lg w-8 h-8 border border-gray-200"
            href={"/dashboard"}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
          <div className="grid gap-1">
            <CardTitle>Crear Producto</CardTitle>
            <CardDescription>Ingresa los detalles del producto</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="name">
              Nombre
            </Label>
            <Input
             name="nombre"
              placeholder="Ingresa el nombre del producto"
              onChange={handleChange}
              value={nuevoProducto.nombre}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="description">
              Descripcion
            </Label>
            <Textarea
              name="descripcion"
              onChange={handleChange}
              placeholder="Ingresa la descripción del producto"
              value={nuevoProducto.descripcion}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="Precio">
              Precio
            </Label>
            <Input
              name="precio"
              placeholder="$999"
              type="number"
              onChange={handleChange}
              value={nuevoProducto.precio}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="marcaId">
              Marca
            </Label>
            <select
              name="marcaId"
              onChange={handleChange}
              value={nuevoProducto.marcaId}
              required
            >
              <option value="">Selecciona una marca</option>
              <option value="1">Apple</option>
              <option value="2">Samsung</option>
              <option value="3">Xiaomi</option>
              <option value="4">Huawei</option>
              <option value="5">OnePlus</option>
            </select>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="name">
                Imagen URL
              </Label>
              <Input
                name="imagenUrl"
                placeholder="Ingresa la URL de la imagen"
                onChange={handleChange}
                value={nuevoProducto.imagenUrl}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto" type="submit">
            Crear Producto
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export default Crearproducto;