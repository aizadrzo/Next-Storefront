"use client";
import { SinglePageProduct } from "@/components";
import { useFetchSingleProduct } from "@/hooks";
import Link from "next/link";
import React from "react";

type ProductPage = {
  params: { id: string };
};

const ProductPage = ({ params }: ProductPage) => {
  const { singleProduct } = useFetchSingleProduct({ id: params.id });
  return (
    <main className="flex min-h-screen flex-col px-5 lg:px-40 py-5">
      <Link href="/" className="text-sm pb-[50px]">
        Go back home
      </Link>
      <SinglePageProduct
        image={singleProduct?.image}
        title={singleProduct?.title}
        description={singleProduct?.description}
        price={singleProduct?.price}
        rating={singleProduct?.rating}
      />
    </main>
  );
};

export default ProductPage;
