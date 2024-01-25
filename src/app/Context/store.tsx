"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ProductsType, CartItemType } from "@/types/hooks.types";

type CartContextType = {
  cartItems: CartItemType | undefined;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (productId: ProductsType["id"]) => void;
  updateQuantity: (productId: ProductsType["id"], newQuantity: number) => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartContextType["cartItems"]>([]);

  const addToCart = (item: CartItemType) => {
    const existingProductIndex = cartItems?.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      // If the product doesn't exist, add a new item
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

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
