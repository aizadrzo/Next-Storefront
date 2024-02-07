import { SinglePageProduct } from "@/components";
import { ProductsType } from "@/types";
import { getProduct } from "@/lib/getProduct";

type ProductPage = {
  params: { id: string };
};

const ProductPage = async ({ params: { id } }: ProductPage) => {
  const singleProduct: ProductsType = await getProduct(id);

  return (
    <main className="grid py-5">
      <SinglePageProduct
        id={singleProduct?.id}
        image={singleProduct?.image}
        title={singleProduct?.title}
        description={singleProduct?.description}
        price={singleProduct?.price}
        rating={singleProduct?.rating}
        category={singleProduct?.category}
      />
    </main>
  );
};

export default ProductPage;
