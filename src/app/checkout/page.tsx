"use client";
import React from "react";
import { useCartContext } from "../Context/store";
import { CartItem, EmptyCart } from "@/components";
import { formatMoney } from "../utils";

const Checkout = () => {
  const { cartItems, getTotal } = useCartContext();
  const emptyCart = cartItems?.length === 0;
  const totalAmount = getTotal();

  if (emptyCart) {
    return <EmptyCart />;
  }

  return (
    <div className="h-full py-5">
      <h1 className="text-xl sm:text-3xl font-bold">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 items-start">
        <ul className="my-8 space-y-8 lg:col-span-3">
          {cartItems?.map((item) => (
            <CartItem
              key={item?.id}
              id={item?.id}
              image={item?.image}
              title={item?.title}
              price={item?.price}
              quantity={item?.quantity}
            />
          ))}
        </ul>
        <div className="flex items-center lg:justify-end lg:col-span-2">
          <div className="space-y-4 w-full lg:w-fit">
            <div className="flex justify-between items-center">
              <h2 className="text-sm lg:text-base">Subtotal</h2>
              <h2 className="text-sm lg:text-base text-neutral-500">
                {formatMoney(totalAmount)}
              </h2>
            </div>
            <div className="flex justify-end gap-y-[10px]">
              <h2 className="text-sm lg:text-base">
                Taxes and shipping calculated at checkout
              </h2>
            </div>
            <div className="flex flex-col">
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
