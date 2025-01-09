import { prisma } from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "application/json; charset=utf-8");
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });
  return categories
});
