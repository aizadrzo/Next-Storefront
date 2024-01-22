import { useState, useEffect } from "react";

type RatingType = {
  count: number;
  price: number;
};

type ProductsType = {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: RatingType;
  title: string;
};

const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductsType[] | undefined>([]);

  const fetchProductData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("here", data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return { products };
};

export default useFetchProducts;
