
import { NextResponse } from "next/server";
export async function POST(request){
    const { email, password } = await request.json();



    const usuario = {
        email,
        password
    };


    try {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (response.ok) {
            return NextResponse.json(usuario, {
                status: 201
            });
        } else {
            return NextResponse.error('Error al iniciar Sesión', {
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

