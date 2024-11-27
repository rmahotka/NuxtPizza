import type { Ingredients } from "@prisma/client";
import { ApiRouter } from "./api-routes";

export const gelAll = async (): Promise<Ingredients[]> => {
  const { $axios } = useNuxtApp();

  const { data } = await $axios.get<Ingredients[]>(ApiRouter.INGREDIENTS);

  return data;
};
