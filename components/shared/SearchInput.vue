<template>
  <div>
    <div
      v-if="focuse"
      class="fixed bottom-0 left-0 right-0 top-0 z-30 bg-black/50"
    />
    <div
      class="relative z-30 flex h-11 flex-1 justify-between rounded-2xl"
      ref="target"
    >
      <Search
        class="absolute left-3 top-1/2 h-5 translate-y-[-50%] text-gray-400"
      />
      <input
        v-model="searchQuery"
        type="text"
        class="w-full rounded-2xl bg-gray-100 pl-11 outline-1"
        placeholder="Найти пиццу..."
        @focus="focuse = true"
      />

      <div
        v-if="productsItem.length"
        :class="{
          'visible top-12 opacity-100': focuse,
          'invisible top-14 opacity-0': !focuse,
        }"
        class="absolute z-30 w-full rounded-xl bg-white p-2 shadow-md transition-all duration-200"
      >
        <NuxtLink
          v-for="item in productsItem"
          :key="item.id"
          @click="onClickItem"
          :to="`/product/${item.id}`"
          class="flex items-center gap-2 rounded-xl px-3 py-2 transition-all hover:bg-primary/10"
        >
          <img
            class="h-8 w-8 rounded-sm"
            :src="item.imageUrl"
            :alt="item.name"
          />
          <span>{{ item.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@prisma/client";
import { onClickOutside, refDebounced } from "@vueuse/core";
import { Search } from "lucide-vue-next";
import { Api } from "~/services/api-client";

const focuse = ref<boolean>(false);
const target = ref(null);
const searchQuery = ref<string>("");
const productsItem = ref<Product[]>([]);
const debonce = refDebounced(searchQuery, 500);

onClickOutside(target, () => (focuse.value = false));

const onClickItem = () => {
  focuse.value = false;
  searchQuery.value = "";
  productsItem.value = [];
};

watch(debonce, async () => {
  try {
    const response = Api.products.searchProducts(searchQuery.value);
    productsItem.value = await response;
  } catch (err) {
    console.error(err);
  }
});
</script>

<style scoped></style>
