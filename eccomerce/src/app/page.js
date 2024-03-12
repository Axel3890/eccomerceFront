"use client"
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Redirect } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        setIsLoggedIn(true);
        console.log('Inicio de sesión exitoso');
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        console.error('Error al iniciar sesión:', await response.text());
        localStorage.setItem('isLoggedIn', 'false');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };


  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Bienvenido al mini eccomerce!</h1>
        <p className="text-sm font-medium leading-none">Ingresa para gestionar los productos</p>
      </div>
      <div className="w-[400px] space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
          </div>
          <Input id="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button className="w-full" onClick={handleLogin}>
          Ingresar
        </Button>
        <Button className="w-full">Ingresar como invitado</Button>
      </div>
    </div>
  );
}

export default Login;
