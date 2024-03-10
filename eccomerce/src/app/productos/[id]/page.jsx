import { CardContent, Card } from "@/components/ui/card"

async function productoDetail(id){
    try {
      const res = await fetch(`http://localhost:3000/api/productos/${id}`);
      if (!res.ok) {
        throw new Error('Error al obtener los productos');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      return [];
    }
  }
  

export default async function carddetail({params}) {
  const producto = await productoDetail(params.id); 
  return (
    (<Card>
      <CardContent className="p-6">
        <div className="grid gap-4">
          <img
            alt="Product Image"
            className="aspect-square object-cover rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800"
            height={400}
            src={producto.imagenUrl}
            width={400} />
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">{producto.name}</h2>
            <p className="text-2xl font-bold">${producto.price}</p>

          </div>
          <div className="grid gap-4 text-sm leading-loose">
            <p>
                {producto.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>)
  );
}