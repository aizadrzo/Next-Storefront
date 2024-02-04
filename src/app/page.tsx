import { ProductCard } from "@/components";
import { ProductsType } from "@/types";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const products: ProductsType[] = await getData();

  return (
    <main className="pt-5 pb-10">
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
