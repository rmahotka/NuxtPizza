import { prisma } from "~/lib/prisma";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullname: "User Test",
        email: "user@mail.ru",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullname: "Admin Admin",
        email: "admin@mail.ru",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredients.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl: "/peperoni-fresh.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl: "/cheese.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl: "/chorizo-fresh.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      {
        productId: pizza1.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 1,
        size: 20,
      },
      {
        productId: pizza1.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 2,
        size: 30,
      },
      {
        productId: pizza1.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 2,
        size: 40,
      },

      // Пицца "Сырная"
      {
        productId: pizza2.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 1,
        size: 20,
      },
      {
        productId: pizza2.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 1,
        size: 30,
      },
      {
        productId: pizza2.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 1,
        size: 40,
      },
      {
        productId: pizza2.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 2,
        size: 20,
      },
      {
        productId: pizza2.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 2,
        size: 30,
      },
      {
        productId: pizza2.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 2,
        size: 40,
      },

      // Пицца "Чоризо фреш"
      {
        productId: pizza3.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 1,
        size: 20,
      },
      {
        productId: pizza3.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 2,
        size: 30,
      },
      {
        productId: pizza3.id,
        price: randomDecimalNumber(190, 600),
        pizzaType: 2,
        size: 40,
      },

      // Остальные продукты
      { productId: 1, price: randomDecimalNumber(190, 600) },
      { productId: 2, price: randomDecimalNumber(190, 600) },
      { productId: 3, price: randomDecimalNumber(190, 600) },
      { productId: 4, price: randomDecimalNumber(190, 600) },
      { productId: 5, price: randomDecimalNumber(190, 600) },
      { productId: 6, price: randomDecimalNumber(190, 600) },
      { productId: 7, price: randomDecimalNumber(190, 600) },
      { productId: 8, price: randomDecimalNumber(190, 600) },
      { productId: 9, price: randomDecimalNumber(190, 600) },
      { productId: 10, price: randomDecimalNumber(190, 600) },
      { productId: 11, price: randomDecimalNumber(190, 600) },
      { productId: 12, price: randomDecimalNumber(190, 600) },
      { productId: 13, price: randomDecimalNumber(190, 600) },
      { productId: 14, price: randomDecimalNumber(190, 600) },
      { productId: 15, price: randomDecimalNumber(190, 600) },
      { productId: 16, price: randomDecimalNumber(190, 600) },
      { productId: 17, price: randomDecimalNumber(190, 600) },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        token: "111",
        totalAmount: 0,
      },
      {
        userId: 2,
        token: "222",
        totalAmount: 0,
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredients" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect;
    process.exit(1);
  });
