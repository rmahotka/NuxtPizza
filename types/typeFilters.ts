export interface FilterCheckboxProps {
  text: string;
  value: string;
  name?: string;
  checked?: boolean;
}

export interface FilterCheckboxGroupProps {
  items: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  defaultValue?: string[];
  loading?: boolean;
  nameGroup: string;
  title?: string;
  checkedItems?: string[];
}

export interface TangeProps {
  priceFrom: number;
  priceTo: number;
}

export interface SearchParams {
  pizzaType: string;
  sizes: string;
  ingredients: string;
  priceFrom: string;
  priceTo: string;
}
