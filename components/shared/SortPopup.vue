<template>
  <div
    class="inline-flex h-[52px] cursor-pointer items-center gap-1 rounded-2xl bg-gray-50 px-5"
  >
    <ArrowDownUp />
    <p>Сортировка:</p>
    <p class="text-primary">популярное</p>
  </div>
</template>

<script setup lang="ts">
import { ArrowDownUp } from "lucide-vue-next";
</script>
