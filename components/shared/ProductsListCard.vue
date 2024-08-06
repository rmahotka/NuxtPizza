<template>
  <div>
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

const props = defineProps<IProductsPizzaProps>();
</script>
