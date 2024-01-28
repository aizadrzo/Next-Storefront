"use client";
import React from "react";
import Link from "next/link";
import { ProductsType } from "@/types";
import { useCartContext } from "@/app/Context/store";
import { useFetchProducts } from "@/hooks";
import { formatMoney } from "@/app/utils";

type ProductCardType = Omit<ProductsType, "rating" | "description">;

const ProductCard = ({
  category,
  image,
  title,
  id,
  price,
}: ProductCardType) => {
  const { isLoading } = useFetchProducts();
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    const itemToAdd = { id, category, title, image, price, quantity: 1 };
    addToCart(itemToAdd);
  };

  if (isLoading) {
    return (
      <div className="w-full card h-[563px]">
        <div className="aspect-square animate-pulse bg-base-300"></div>
        <div className="card-body p-0 flex flex-col py-6">
          <div className="bg-base-300 w-1/3 h-[14px]"></div>
          <div className="h-20 bg-base-300 animate-pulse"></div>
          <div className="mt-auto card-action">
            <div className="animate-pulse bg-base-300 h-12"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full card group">
      <Link href={`products/${id}`}>
        <div className="group-hover:cursor-pointer border border-base-300 aspect-square grid place-content-center">
          <img
            src={image}
            alt={title}
            className="w-auto h-64 md:h-52 lg:h-36"
          />
        </div>
      </Link>
      <div className="card-body p-0 flex flex-col">
        <div className="py-5">
          <small className="text-xs text-base-content uppercase">
            {category}
          </small>
          <Link href={`products/${id}`}>
            <h1 className="group-hover:link card-title font-bold underline-offset-1">
              {title}
            </h1>
          </Link>
          <h3 className="pt-5 text-base font-semibold">{formatMoney(price)}</h3>
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
