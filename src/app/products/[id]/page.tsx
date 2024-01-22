"use client";
import { useFetchSingleProduct } from "@/hooks";
import React from "react";

type ProductPage = {
  params: { id: string };
};

const ProductPage = ({ params }: ProductPage) => {
  const { singleProduct } = useFetchSingleProduct({ id: params.id });
  return (
    <main className="flex min-h-screen flex-col py-24 px-14">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="border border-base-300 aspect-square grid place-content-center p-10">
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="w-auto h-[350px]"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="uppercase text-sm text-gray-600">
            {singleProduct?.category}
          </p>
          <h1 className="card-title">{singleProduct?.title}</h1>
          <p className="w-2/3">{singleProduct?.description}</p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
