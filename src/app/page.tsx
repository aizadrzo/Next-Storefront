"use client";
import useFetchProducts from "@/hooks/useFetchProducts";

export default function Home() {
  const { products } = useFetchProducts();

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>My Storefront</h1>
      <div>
        {products?.map((product) => (
          <h1 key={product.id}>{product?.title}</h1>
        ))}
      </div>
    </main>
  );
}
