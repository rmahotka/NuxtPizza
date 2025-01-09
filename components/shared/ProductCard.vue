<template>
  <div>
    <NuxtLink :to="{ name: 'product-id', params: { id: props.id } }">
      <div class="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
        <img
          :src="props.imageUrl"
          :alt="props.name"
          class="h-[215px] w-[215px]"
        >
      </div>

      <div>
        <app-title size="sm" class="mb-1 mt-3 font-bold">
          {{ props.name }}
        </app-title>
      </div>

      <p class="text-sm text-gray-400">
        Текст Текст ТекстТекст Текст Текст Текст Текст Текст Текст
      </p>

      <div class="mt-4 flex items-center justify-between">
        <span class="text-[20px]">
          от <b>{{ props.price }}</b>
        </span>

        <Button variant="secondary" class="text-base font-bold">
          <Plus :size="20" class="mt-1" />
          Добавить
        </Button>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { ItemPizzaProps } from "~/types/typeItemPizza";
import { Plus } from "lucide-vue-next";

const props = defineProps<ItemPizzaProps>();
</script>
