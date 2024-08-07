<template>
  <div :id="props.title" ref="target">
    <app-title class="mb-5 font-extrabold" size="lg">
      {{ props.title }}
    </app-title>
    <div class="grid grid-cols-3 gap-[50px]">
      <product-card
        v-for="item in props.items"
        :id="item.id"
        :key="item.id"
        :name="item.name"
        :image-url="item.imageUrl"
        :price="item.items[0].price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProductsPizzaProps } from "~/types/typeItemPizza";
import { defineProps } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useCategory } from "~/stores/category";

const category = useCategory();

const props = defineProps<IProductsPizzaProps>();

const target = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting;
    if (isIntersecting) {
      category.setActiveId(props.categoriId);
    }
  },
);
</script>
