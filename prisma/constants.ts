export const categories = [
  { name: "Пиццы" },
  { name: "Завтрак" },
  { name: "Закуски" },
  { name: "Коктейли" },
  { name: "Напитки" },
];

export const ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl: "/cheese-board.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl: "/creamy-mozzarella.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "/cheddar-and-parmesan.png",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl: "/jalapeno.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl: "/tender-chicken.png",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "/champignons.png",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl: "/ham.png",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "/peproni.png",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "/chorizo.png",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "/pickled-cucumber.png",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "/tomatoes.png",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "/red-onion.png",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "/pineapple.png",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl: "/Italian-herbs.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "/sweet-perey.png",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "/feta.png",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl: "/meatball.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "/omelet-ham-and-mushrooms.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "/pepperoni-omelet.webp",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/latte-coffee.webp",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl: "/danvitch-ham and cheese.webp",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl: "/chicken-nuggets.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом 🌱",
    imageUrl: "/potatoes-from-the-oven-with-sauce.webp",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl: "/dodster.webp",
    categoryId: 3,
  },
  {
    name: "Острый Додстер 🌶️🌶️",
    imageUrl: "/hot-dodster.webp",
    categoryId: 3,
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl: "/banana-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl: "/caramel-apple-and-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "/orio-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль 👶",
    imageUrl: "/classic-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Ирландский Капучино",
    imageUrl: "/Irish-cappuccino.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "/coffee-caramel-cappuccino.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "/coconut-latte-coffee.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl: "/americano-coffee.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/latte-coffee.webp",
    categoryId: 5,
  },
];
