import { NextResponse } from "next/server";


export async function GET(){
    const productos = await fetch('http://localhost:3001/productos');
    const data = await productos.json();
    return NextResponse.json(data)
}


export async function POST(request){
    const { nombre, descripcion, precio, imagenUrl } = await request.json();

    const nuevoProducto = {
        nombre,
        descripcion,
        precio,
        imagenUrl
    };
    try {
        const response = await fetch('http://localhost:3001/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto)
        });

        if (response.ok) {
            return NextResponse.json(nuevoProducto, {
                status: 201
            });
        } else {
            return NextResponse.error('Error al crear el producto en el servidor', {
                status: response.status
            });
        }
    } catch (error) {
        console.error('Error al realizar la solicitud fetch:', error);
        return NextResponse.error('Error al crear el producto', {
            status: 500
        });
    }
}

