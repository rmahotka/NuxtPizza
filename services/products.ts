import type { Product } from "@prisma/client";
import { ApiRouter } from "./api-routes";

export const searchProducts = async (query: string): Promise<Product[]> => {
  const { $axios } = useNuxtApp();

  const { data } = await $axios.get<Product[]>(ApiRouter.PRODUCT_SEARCH, {
    params: { query },
  });

  return data;
};
