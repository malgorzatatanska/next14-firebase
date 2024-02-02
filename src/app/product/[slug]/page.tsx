import { getproductBySlug } from "@/app/api/products";
import Image from "next/image";

export default async function FeaturedProducts({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getproductBySlug(params.slug);

  return (
    <div className="text-black">
      <div className="container mx-auto flex-col flex md:flex-row pt-20">
        <div className="w-full md:w-2/5">
          <div className="bg-green-400">
            <Image
              width={product?.featuredProductImage?.width ?? "100"}
              height={product?.featuredProductImage?.height ?? "100"}
              src={
                product?.featuredProductImage?.url ??
                "https://via.placeholder.com/150"
              }
              alt={
                product?.featuredProductImage?.title ??
                product?.name ??
                "Product Image"
              }
            />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <div className="pl-20 pr-20">
            <div className="flex flex-col">
              <div className="underline">Kategoria produktu</div>
              <div className="mt-10 text-2xl">{product?.name}</div>
              <div className="mt-2 text-sm">{product?.price} zł.</div>
              <div className="bg-white mt-10 pt-10">{product?.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
