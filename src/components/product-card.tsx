"use client";
import React from "react";
import Link from "next/link";
import { ProductsType } from "@/types";
import { useCartContext } from "@/app/Context/store";

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
  const { cartItems, addToCart } = useCartContext();

  const handleAddToCart = () => {
    const itemToAdd = { id, category, title, image, price, quantity: 1 };
    addToCart(itemToAdd);
  };

  return (
    <div className="w-full card">
      <div className="border border-base-300 aspect-square grid place-content-center">
        <img src={image} alt={title} className="w-auto h-64 md:h-52 lg:h-36" />
      </div>
      <div className="card-body p-0 flex flex-col">
        <div className="py-5">
          <small className="text-xs text-base-content uppercase">
            {category}
          </small>
          <Link href={`products/${id}`}>
            <h1 className="card-title font-bold link link-hover underline-offset-1">
              {title}
            </h1>
          </Link>
          <h3 className="pt-5 text-base font-semibold">${price}</h3>
        </div>
        <div className="mt-auto card-actions">
          <button
            className="btn w-full btn-outline btn-secondary btn-md"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
