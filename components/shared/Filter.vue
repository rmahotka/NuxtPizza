<template>
  <div>
    <app-title class="mb-5 font-bold"> Фильтрация </app-title>

    <checkbox-filter-group
      class="mt-6 border-b border-y-neutral-100 pb-5"
      title="Тип теста"
      name-group="typePizza"
      :loading="loadingItem"
      :items="typePizza"
      :limit="typePizza.length"
      :checked-items="Array.from(selectedType)"
      @update:checked-items="updateSelectType"
    />

    <checkbox-filter-group
      title="Размер"
      name-group="size"
      :loading="loadingItem"
      :items="sizePizza"
      :limit="sizePizza.length"
      :checked-items="Array.from(selectedSize)"
      @update:checked-items="updateSelectSize"
    />

    <div class="mt-3 border-y border-y-neutral-100 py-5 pb-6">
      <p class="mb-3 font-bold">Цена от и до:</p>
      <div class="mb-5 flex gap-3">
        <Input
          v-model="priceRange.priceFrom"
          type="number"
          placeholder="0"
          min="0"
          max="1000"
          :default-value="100"
        />
        <Input
          v-model="priceRange.priceTo"
          type="number"
          placeholder="1000"
          min="100"
          max="1000"
        />
      </div>
      <range-slider v-model="rangeValue" :min="0" :max="1000" :step="10" />
    </div>

    <checkbox-filter-group
      title="Ингредиенты"
      name-group="ingredients"
      :loading="loadingItem"
      :items="ingredientsList"
      :checked-items="Array.from(selectedIngredients)"
      @update:checked-items="updateSelectedItems"
    />
  </div>
</template>

<script setup lang="ts">
import type { Ingredients } from "@prisma/client";
import type {
  FilterCheckboxProps,
  TangeProps,
  SearchParams,
} from "~/types/typeFilters";
import { Api } from "~/services/api-client";
import { useUrlSearchParams } from "@vueuse/core";
import qs from "qs";

const router = useRouter();

const paramsQuery = useUrlSearchParams<SearchParams>("history");

const priceRange = ref<TangeProps>({
  priceFrom: 0,
  priceTo: 1000,
});

const rangeValue = computed({
  get: () => [priceRange.value.priceFrom, priceRange.value.priceTo],
  set: ([from, to]: number[]) => {
    priceRange.value.priceFrom = from;
    priceRange.value.priceTo = to;
  },
});

const sizePizza = ref([
  { text: "20 см", value: "20" },
  { text: "30 см", value: "30" },
  { text: "40 см", value: "40" },
]);

const typePizza = ref([
  { text: "Тонкое", value: "1" },
  { text: "Традиционное", value: "2" },
]);

const loadingItem = ref<boolean>(false);
const ingredientsList = ref<FilterCheckboxProps[]>([]);

const selectedSize = ref<Set<string>>(
  new Set(paramsQuery.sizes ? paramsQuery.sizes.split(",") : []),
);

const selectedType = ref<Set<string>>(
  new Set(paramsQuery.pizzaType ? paramsQuery.pizzaType.split(",") : []),
);

const selectedIngredients = ref<Set<string>>(new Set());

const updateSelectSize = (values: string[]) => {
  selectedSize.value = new Set(values);
};

const updateSelectType = (values: string[]) => {
  selectedType.value = new Set(values);
};

const updateSelectedItems = (values: string[]) => {
  selectedIngredients.value = new Set(values);
};

watch(
  () => [
    selectedType.value,
    selectedSize.value,
    rangeValue.value,
    selectedIngredients.value,
  ],
  () => {
    const filters = {
      pizzaType: Array.from(selectedType.value),
      sizes: Array.from(selectedSize.value),
      ...priceRange.value,
      ingredients: Array.from(selectedIngredients.value),
    };
    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`);
  },
);

const getIngredients = async () => {
  try {
    loadingItem.value = true;
    const response = await Api.ingredients.gelAll();
    ingredientsList.value = response.map((ingredient: Ingredients) => ({
      value: String(ingredient.id),
      text: ingredient.name,
    }));
  } catch (e) {
    console.error(e);
  } finally {
    await new Promise((resolve) => setTimeout(resolve, 200));
    loadingItem.value = false;
  }
};

onMounted(async () => {
  await getIngredients();

  priceRange.value.priceFrom = Number(paramsQuery.priceFrom) || 0;
  priceRange.value.priceTo = Number(paramsQuery.priceTo) || 1000;

  if (paramsQuery.ingredients) {
    const selectedValues = paramsQuery.ingredients.split(",");
    selectedIngredients.value = new Set(selectedValues);

    ingredientsList.value.forEach((item) => {
      item.checked = selectedIngredients.value.has(item.value);
    });
  }
});
</script>
