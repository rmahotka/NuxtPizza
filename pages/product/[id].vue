<template>
  <app-container class="flex my-10">
    <product-img :img-url="product?.imageUrl" :size="40"/>

    <div class="w-[490px] bg-[#f7f6f5] p-7">
      <app-title
        size="md"
        :text="product.name"
        class="font-extrabold mb-1"
      />
      <p class ="text-gray-400">Lorem ipsum dolor sit amet consectetur</p>

      <group-variants
      :items="[
        {
         name: 'Маленькая',
          value:'1',
        },
             {
         name: 'Средняя',
          value:'2',
        },
             {
         name: 'Большая',
          value:'3',
        }
      ]"
      />
    </div>
  </app-container>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client";
const route = useRoute();

const product = ref<Product>([])
const { data } = await useFetch<Product[]>(`/api/product/${route.params.id}`)
product.value = data.value

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
</script>
