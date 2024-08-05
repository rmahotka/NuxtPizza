export interface FilterCheckboxProps {
  text: string
  value: string
  name?: string
  checked?: boolean
}

export interface FilterCheckboxGroupProps {
  items: FilterCheckboxProps[]
  defualtItems?: FilterCheckboxProps[]
  limit?: number
  searchInputPlaceholder?: string
  defaultValue?: string[]
  nameGroup: string
}
