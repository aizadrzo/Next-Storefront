export const getAllProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
