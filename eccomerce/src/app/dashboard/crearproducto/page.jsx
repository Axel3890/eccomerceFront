"use client";
import Link from "next/link";
import { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { agregarProducto } from "@/app/utils/funciones";

const Crearproducto = () => {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagenUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  console.log(nuevoProducto);
  const handleCrearProducto = async () => {
    const productoAgregado = await agregarProducto(nuevoProducto);
    if (productoAgregado) {
      alert("Producto agregado exitosamente");
      setNuevoProducto({
        nombre: "",
        descripcion: "",
        precio: "",
        imagenURL: "",
      });
    } else {
      alert("Error al agregar el producto");
    }
  };

  return (
    <form onSubmit={handleCrearProducto}>
      <Card className="mx-auto max-w-3xl">
        <CardHeader className="flex items-start gap-4">
          <Link
            className="flex items-center justify-center rounded-lg w-8 h-8 border border-gray-200 dark:border-gray-800 dark:border-gray-800"
            href="#"
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