import { prisma } from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "application/json; charset=utf-8");
  return await prisma.ingredients.findMany();
});
