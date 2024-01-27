import React from "react";
import Link from "next/link";
import { useCartContext } from "@/app/Context/store";
import { CartItemType } from "@/types";
import { QuantityInput } from ".";
import { formatMoney } from "@/app/utils";

const CartItem = ({
  id,
  image,
  title,
  price,
  quantity,
}: Omit<CartItemType, "category">) => {
  const { removeFromCart, updateQuantity } = useCartContext();

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      updateQuantity(id, quantity + 1);
    }
  };

  return (
    <li className="items-center grid grid-cols-5 gap-5">
      <div className="grid place-content-center aspect-square border border-base-300 p-3 sm:p-5">
        <img src={image} alt={title} className="w-20 sm:w-16 h-auto" />
      </div>
      <div className="flex flex-col items-start justify-center gap-y-1 sm:gap-y-[10px] col-span-3">
        <Link href={`products/${id}`}>
          <h1 className="text-base md:text-lg leading-snug font-bold link link-hover">
            {title}
          </h1>
        </Link>
        <p className="text-sm md:text-base text-neutral-500">
          {`Price: ${formatMoney(price * quantity)}`}
        </p>
        <button
          onClick={() => removeFromCart(id)}
          className="link text-xs sm:text-sm"
        >
          Remove
        </button>
      </div>
      <div className="flex items-center justify-center w-full md:w-2/3">
        <QuantityInput
          quantity={quantity || 1}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </li>
  );
};

export default CartItem;
