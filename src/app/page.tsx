"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    };

    fetchProductData();
  });

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>My Storefront</h1>
      <div>
        {product?.map((product) => (
          <h1>{product?.title}</h1>
        ))}
      </div>
    </main>
  );
}
