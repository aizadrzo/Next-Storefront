"use client";
import React, { useEffect, useState } from "react";
import { QuantityInput, StarRating } from ".";
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
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setQuantity(1);
  }, []);

  useEffect(() => {
    if (showNotification) {
      const timeoutId = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showNotification]);

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
    setShowNotification(true);
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
          <StarRating rate={rating?.rate ?? 0} count={rating?.count ?? 0} />
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

export default SinglePageProduct;
