"use client";
import React from "react";
import { SinglePageProduct } from "@/components";
import { useFetchSingleProduct } from "@/hooks";

type ProductPage = {
  params: { id: string };
};

const ProductPage = ({ params }: ProductPage) => {
  const { singleProduct, isLoading } = useFetchSingleProduct({ id: params.id });
  console.log(singleProduct);
  return (
    <main className="grid py-5">
      <SinglePageProduct
        id={singleProduct?.id}
        image={singleProduct?.image}
        title={singleProduct?.title}
        description={singleProduct?.description}
        price={singleProduct?.price}
        rating={singleProduct?.rating}
        category={singleProduct?.category}
        isLoading={isLoading}
      />
    </main>
  );
};

export default ProductPage;
