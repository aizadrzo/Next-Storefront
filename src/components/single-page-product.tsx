"use client";
import React, { useEffect, useState } from "react";
import { QuantityInput } from ".";
import { CartItemType, ProductsType } from "@/types";
import { useCartContext } from "@/app/Context/store";
import { formatMoney } from "@/app/utils";

type SingleProductPageProps = Partial<ProductsType> & { isLoading?: boolean };

const SinglePageProduct = ({
  id,
  title,
  description,
  image,
  price,
  rating,
  category,
  isLoading,
}: SingleProductPageProps) => {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, []);

  const handleAddToCart = () => {
    const itemToAdd = {
      id,
      category,
      title,
      image,
      price,
      quantity,
    };
    addToCart(itemToAdd as CartItemType);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
        <div className="animate-pulse bg-base-300 aspect-square p-10 lg:p-20 flex items-center justify-center w-full lg:w-[544px] h-auto"></div>
        <div className="space-y-12">
          <div className="space-y-5">
            <h1 className="animate-pulse bg-base-300 h-7 w-2/3"></h1>
            <p className="bg-base-300 animate-pulse h-6"></p>
            <h2 className="animate-pulse bg-base-300 h-8 w-1/3"></h2>
            <h2 className="animate-pulse bg-base-300 h-[100px]"></h2>
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <div className="grid grid-cols-3 gap-x-[10px]">
              <div className="animate-pulse bg-base-300 h-12"></div>
              <div className="animate-pulse col-span-2 bg-base-300 h-12"></div>
            </div>
            <div className="animate-pulse w-full bg-base-300 h-12"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
      <div className="border border-base-300 aspect-square p-10 lg:p-20 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-[300px] lg:w-[450px] h-auto"
        />
      </div>
      <div className="space-y-12">
        <div className="space-y-5">
          <h1 className="uppercase text-xl font-bold">{title}</h1>
          {rating?.rate && (
            <div className="flex items-center">
              {Array.from({ length: Math.floor(rating.rate) }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              {Array.from({ length: 5 - Math.floor(rating.rate) }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              ))}
              <p className="text-sm lg:text-base">{`(${rating?.count})`}</p>
            </div>
          )}
          <h2 className="text-2xl font-semibold">{formatMoney(price ?? 0)}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <div className="grid grid-cols-3 gap-x-[10px]">
            <QuantityInput
              quantity={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
            <button
              className="col-span-2 btn btn-primary"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
          <button className="w-full btn btn-outline btn-secondary">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePageProduct;
