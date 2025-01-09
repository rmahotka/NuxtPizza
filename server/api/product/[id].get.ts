import { prisma } from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "application/json; charset=utf-8");
  const id = getRouterParam(event, "id");

  return prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });
});
