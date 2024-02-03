import {
  GetLatestProductsDocument,
  GetProductBySlugDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

export const getLatestProducts = async () => {
  const result = await executeGraphql({
    query: GetLatestProductsDocument,
    variables: {},
    cache: "force-cache",
  });

  if (!result) return null;

  return result.pageProductCollection?.items;
};

export const getproductBySlug = async (slug: string) => {
  const product = await executeGraphql({
    query: GetProductBySlugDocument,
    variables: { slug },
    next: {
      tags: ["product"],
    },
  });

  if (!product) return null;

  return product.pageProductCollection?.items[0];
};
