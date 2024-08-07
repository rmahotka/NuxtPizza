<template>
  <div class="inline-flex gap-1 rounded-2xl bg-gray-50 p-1">
    <a
      v-for="{ name, id } in categories"
      :key="id"
      :href="`/#${name}`"
      :class="[
        'flex h-11 items-center rounded-2xl px-5 font-bold',
        {
          'bg-white text-primary shadow-md shadow-gray-200':
            category.activeId === id,
        },
      ]"
      @click="onActiveIndex(id)"
    >
      <button>
        {{ name }}
      </button>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useCategory } from "~/stores/category";

const category = useCategory();
type CategoryType = { id: number; name: string };

const categories: CategoryType[] = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
];

const activeIndex = ref(0);

const onActiveIndex = (index: number) => {
  return (activeIndex.value = index);
};
</script>
