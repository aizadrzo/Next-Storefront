import React from "react";
import Link from "next/link";
import { ProductsType } from "@/types/hooks.types";

type ProductCardType = Omit<ProductsType, "rating" | "description"> & {
  isLoading?: boolean;
};

const ProductCard = ({
  category,
  image,
  title,
  id,
  price,
}: ProductCardType) => {
  return (
    <div className="card p-5">
      <div className="border border-base-300 aspect-square grid place-content-center">
        <img src={image} alt={title} className="w-auto h-36" />
      </div>
      <div className="pt-5">
        <small className="text-sm text-gray-600 uppercase">{category}</small>
        <Link href={`products/${id}`}>
          <h1 className="card-title link link-hover underline-offset-1">
            {title}
          </h1>
        </Link>
        <h3 className="pt-3">${price}</h3>
      </div>
      <div className="card-action w-full mt-[38px]">
        <button className="btn w-full btn-outline btn-secondary btn-md">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
