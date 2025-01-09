<template>
  <div class="inline-flex gap-1 rounded-2xl bg-gray-50 p-1">
    <a
      v-for="{ name, id } in categoriesFilter"
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
      <button>{{ name }}</button>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Category } from "@prisma/client";
import { useCategory } from "~/stores/category";

defineProps<{
  categoriesFilter: Category[];
}>();

const category = useCategory();

const activeIndex = ref(0);

const onActiveIndex = (index: number) => {
  return (activeIndex.value = index);
};
</script>
