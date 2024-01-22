"use client";
import { ProductCard } from "@/components";
import useFetchProducts from "@/hooks/useFetchProducts";

export default function Home() {
  const { products } = useFetchProducts();

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>My Storefront</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product) => (
          <ProductCard
            id={product?.id}
            image={product?.image}
            title={product?.title}
            description={product?.description}
            price={product?.price}
          />
        ))}
      </div>
    </main>
  );
}
