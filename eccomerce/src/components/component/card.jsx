
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
        <p
          className="text-sm uppercase tracking-wide text-gray-100 dark:text-gray-800">{producto.name}</p>
        <h3 className="font-bold line-clamp-2">Cotton Crewneck Tee</h3>
        <p className="font-bold text-2xl mt-2">${producto.price}</p>
      </CardContent>
    </Card>)
  );
}

export default CardProductos;
