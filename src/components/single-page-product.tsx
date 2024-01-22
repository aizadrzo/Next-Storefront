import React from "react";
import { ProductsType } from "@/types/hooks.types";

type SingleProductPageProps = Exclude<ProductsType, "category" | "id">;

const SinglePageProduct = ({
  title,
  description,
  image,
  price,
  rating,
}: SingleProductPageProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
    <div className="border border-base-200 grid place-content-center p-10">
      <img src={image} alt={title} className="w-[300px] h-auto" />
    </div>
    <div className="space-y-12">
      <div className="space-y-5">
        <h1 className="uppercase text-xl font-bold">{title}</h1>
        <p>{rating?.count}</p>
        <h2 className="text-3xl font-semibold">$ {price}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div className="w-full flex flex-col gap-y-3">
        <button className="w-full btn btn-primary">ADD TO CART</button>
        <button className="w-full btn btn-outline btn-secondary">
          BUY NOW
        </button>
      </div>
    </div>
  </div>
);

export default SinglePageProduct;
