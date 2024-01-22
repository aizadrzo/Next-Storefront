import { useEffect, useState } from "react";
import { ProductsType } from "@/types/hooks.types";

const useFetchSingleProduct = ({ id }: { id: string }) => {
  const [singleProduct, setSingleProduct] = useState<
    ProductsType | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);

  const fetchSingleProductData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id ?? 1}`
      );
      const data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProductData();
  }, [id]);

  return { isLoading, singleProduct };
};

export default useFetchSingleProduct;
