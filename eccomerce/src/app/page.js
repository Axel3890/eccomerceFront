import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function login() {
  return (
    (<div className="flex flex-col items-center space-y-4">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Bienvenido al mini eccomerce!</h1>
        <p className="text-sm font-medium leading-none">Ingresa para gestionar los productos</p>
      </div>
      <div className="w-[400px] space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
          </div>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Ingresar
        </Button>
        <Button className="w-full">Ingresar como invitado</Button>
      </div>
    </div>)
  );
}
