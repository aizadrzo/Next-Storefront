"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ProductsType, CartItemType } from "@/types";

type CartContextType = {
  cartItems: CartItemType | undefined;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (productId: ProductsType["id"]) => void;
  updateQuantity: (productId: ProductsType["id"], newQuantity: number) => void;
  getTotal: () => number;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  getTotal: () => 0,
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartContextType["cartItems"]>([]);

  const addToCart = (item: CartItemType) => {
    const existingProductIndex = cartItems?.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromCart = (productId: ProductsType["id"]) => {
    setCartItems((prevItems) =>
      prevItems?.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (
    productId: ProductsType["id"],
    newQuantity: number
  ) => {
    setCartItems((prevItems) =>
      prevItems?.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotal = () => {
    const totalAmount =
      cartItems?.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ) || 0;
    return totalAmount;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
