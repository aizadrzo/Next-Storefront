"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ProductsType } from "@/types";
import { useCartContext } from "@/app/Context/store";
import { formatMoney } from "@/app/utils";

type ProductCardType = Omit<ProductsType, "rating" | "description">;

const ProductCard = ({
  category,
  image,
  title,
  id,
  price,
}: ProductCardType) => {
  const { addToCart } = useCartContext();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    const itemToAdd = { id, category, title, image, price, quantity: 1 };
    addToCart(itemToAdd);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

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
      {showNotification && (
        <div className="toast z-10">
          <div className="alert bg-primary text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">Added Item inside of cart</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
