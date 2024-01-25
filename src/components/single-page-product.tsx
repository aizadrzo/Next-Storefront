"use client";
import React, { useEffect, useState } from "react";
import { QuantityInput } from ".";
import { ProductsType } from "@/types/hooks.types";
import { useCartContext } from "@/app/Context/store";

type SingleProductPageProps = Partial<ProductsType>;

const SinglePageProduct = ({
  id,
  title,
  description,
  image,
  price,
  rating,
  category,
}: SingleProductPageProps) => {
  const { cartItems, addToCart } = useCartContext();
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
    addToCart(itemToAdd);
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
          <p>{rating?.count}</p>
          <h2 className="text-2xl font-semibold">$ {price}</h2>
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
