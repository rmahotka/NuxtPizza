export interface ItemPizzaProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface IProductsPizzaProps {
  title: string;
  items: ItemPizzaProps[];
  categoriId: number;
}
