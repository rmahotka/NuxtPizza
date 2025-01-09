import type { Category } from "@prisma/client";
import { ApiRouter } from "./api-routes";

export const getCategories = async (): Promise<Category[]> => {
  const { $axios } = useNuxtApp();

  const { data } = await $axios.get<Category[]>(ApiRouter.CATEGORIES);

  return data;
};
