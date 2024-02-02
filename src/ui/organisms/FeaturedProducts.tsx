import { getLatestProducts } from "@/app/api/products";
import { FeaturedItem } from "../molecules";

export const FeaturedProducts = async () => {
  const products = await getLatestProducts();

  if (!products) return null;

  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-6">Featured Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products?.map((product) => (
          <FeaturedItem key={product?.sys.id} product={product} />
        ))}
      </div>
    </section>
  );
};
