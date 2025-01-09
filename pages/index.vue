<template>
  <section>
    <app-container class="mt-10">
      <app-title
        text="Все пиццы "
        size="lg" class="font-extrabold"
      />
    </app-container>

    <div class="sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5">
      <app-container class="flex items-center justify-between">
        <app-categories :categories-filter="products"/>
        <sort-popup />
      </app-container>
    </div>

    <app-container class="mt-10 pb-14">
      <div class="flex gap-[80px]">
        <div class="w-[250px]">
          <Filter />
        </div>
        <div class="flex-1">
          <div class="flex flex-col gap-16">
            <template v-for="item in products" :key="item.id">
              <products-list-card
                v-if="item"
                :title="item.name"
                :categori-id="item.id"
                :items="item.products"
              />
            </template>
          </div>
        </div>
      </div>
    </app-container>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client";

useHead({
  title: "NuxtPizza | Главная",
});

const products = ref<Product[]>();

const { data } = await useFetch<Product[]>('/api/categories')
products.value = data.value


</script>

<style scoped></style>
