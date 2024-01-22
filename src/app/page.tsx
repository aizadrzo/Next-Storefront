"use client";
import { ProductCard } from "@/components";
import { useFetchProducts } from "@/hooks";
import Link from "next/link";

export default function Home() {
  const { products } = useFetchProducts();

  return (
    <main className="flex min-h-screen flex-col py-24 px-14">
      <div className="flex justify-between items-center">
        <h1>My Storefront</h1>
        <Link href="/checkout">Checkout Page</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product) => (
          <ProductCard
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
