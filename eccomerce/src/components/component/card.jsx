
import { CardContent, Card } from "@/components/ui/card"

const CardProductos = ({ producto }) => {
  return (
    (<Card className="w-full max-w-xs">
      <div className="flex items-center justify-center aspect-[1/1] overflow-hidden">
        <img
          alt="Product Image"
          className="aspect-[1/1] object-cover object-center"
          height={300}
          src={producto.imagenUrl}
          width={300} />
      </div>
      <CardContent className="p-4 flex flex-col">
        <h3
          className="text-sm uppercase tracking-wide text-black">{producto.name}</h3>
        <p className="font-bold text-2xl mt-2">${producto.price}</p>
      </CardContent>
    </Card>)
  );
}

export default CardProductos;
