"use client";
import { ProductCard } from "@/components";
import { useFetchProducts } from "@/hooks";

export default function Home() {
  const { products } = useFetchProducts();

  return (
    <main className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product) => (
          <ProductCard
            key={product?.id}
            id={product?.id}
            image={product?.image}
            title={product?.title}
            price={product?.price}
            category={product?.category}
          />
        ))}
      </div>
    </main>
  );
}
