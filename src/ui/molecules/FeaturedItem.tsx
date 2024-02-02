import { FeaturedProductFragment } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  product: FeaturedProductFragment | null;
}

export function FeaturedItem({ product }: Props) {
  if (!product) return null;

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <Image
        src={product?.featuredProductImage?.url ?? ""}
        alt={product.featuredProductImage?.title ?? ""}
        width={product.featuredProductImage?.width ?? 150}
        height={product.featuredProductImage?.height ?? 1550}
        priority
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-10">{product.name}</p>
      <Link
        href={`/product/${product.slug}`}
        className="mt-10 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300"
      >
        Read More
      </Link>
    </div>
  );
}
