import { useState, useEffect } from "react";
import { CartItemType } from "@/types/hooks.types";

const useFetchCartItems = () => {
  const [cartItems, setCartItems] = useState<CartItemType[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/carts/5");
      const data = await response.json();
      setCartItems(data.products);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return { isLoading, cartItems };
};

export default useFetchCartItems;
