/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lfdcjFjGWPw
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function crearproducto() {
  return (
    (<Card className="mx-auto max-w-3xl">
      <CardHeader className="flex items-start gap-4">
        <Link
          className="flex items-center justify-center rounded-lg w-8 h-8 border border-gray-200 dark:border-gray-800 dark:border-gray-800"
          href="#">
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Link>
        <div className="grid gap-1">
          <CardTitle>Create Product</CardTitle>
          <CardDescription>Enter product details below</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label className="text-sm" htmlFor="name">
            Name
          </Label>
          <Input id="name" placeholder="Enter product name" required />
        </div>
        <div className="grid gap-2">
          <Label className="text-sm" htmlFor="description">
            Description
          </Label>
          <Textarea id="description" placeholder="Enter product description" required />
        </div>
        <div className="grid gap-2">
          <Label className="text-sm">Image</Label>
          <div className="flex items-center gap-4">
            <img
              alt="Product image"
              className="aspect-square rounded-md object-cover border"
              height="160"
              src="/placeholder.svg"
              width="160" />
            <Button size="sm">Upload image</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Save</Button>
      </CardFooter>
    </Card>)
  );
}


function ChevronLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}