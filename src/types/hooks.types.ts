type RatingType = {
  count: number;
  price: number;
};

export type ProductsType = {
  title: string;
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: RatingType;
};
