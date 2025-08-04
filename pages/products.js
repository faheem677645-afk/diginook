import Link from "next/link";

const products = [
  { id: "prod1", name: "Productivity Guide PDF", price: 9.99 },
  { id: "prod2", name: "Photo Pack - Nature", price: 14.99 },
  { id: "prod3", name: "React Starter Template", price: 19.99 },
];

export default function ProductsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link href="/cart" className="text-blue-600 underline">Go to Cart</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}