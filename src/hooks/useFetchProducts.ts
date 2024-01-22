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
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return { isLoading, products };
};

export default useFetchProducts;
