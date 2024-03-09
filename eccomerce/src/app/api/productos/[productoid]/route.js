import { NextResponse } from "next/server";


export async function GET(request, {params}) {
    const id  = params.productoid;

    try {
        const response = await fetch(`http://localhost:3001/productos/${id}`);

        if (response.ok) {
            const producto = await response.json();
            return NextResponse.json(producto, {
                status: 200
            });
        } else {
            return NextResponse.error('Producto no encontrado', {
                status: response.status
            });
        }
    } catch (error) {
        console.error('Error al realizar la solicitud fetch:', error);
        return NextResponse.error('Error al obtener el producto', {
            status: 500
        });
    }
}


export async function PUT(request, {params}) {
    const id = params.productoid;
    const { nombre, descripcion, precio, imagenUrl } = await request.json();

    const productoActualizado = {
        nombre,
        descripcion,
        precio,
        imagenUrl
    };

    try {
        const response = await fetch(`http://localhost:3001/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoActualizado)
        });

        if (response.ok) {
            return NextResponse.json(productoActualizado, {
                status: 200
            });
        } else {
            return NextResponse.error('Error al actualizar el producto en el servidor', {
                status: response.status
            });
        }
    } catch (error) {

        console.error('Error al realizar la solicitud fetch:', error);
        return NextResponse.error('Error al actualizar el producto', {
            status: 500
        });
    }
}


export async function DELETE(request, {params}) {
    const id = params.productoid;

    try {
        const response = await fetch(`http://localhost:3001/productos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            return NextResponse.json("Producto eliminado");
        } else {
            return NextResponse.error('Error al eliminar el producto en el servidor', {
                status: response.status
            });
        }
    } catch (error) {
        console.error('Error al realizar la solicitud fetch:', error);
        return NextResponse.error('Error al eliminar el producto', {
            status: 500
        });
    }
}

