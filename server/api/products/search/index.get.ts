import { prisma } from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "application/json; charset=utf-8");
  const query = (getQuery(event).query as string) || "";

  const product = prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
    take: 5,
  });

  return product;
});
