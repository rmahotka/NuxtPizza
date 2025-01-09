<template>
  <div class="relative flex w-full flex-1 items-center justify-center">
    <img
      :src="imgUrl"
      alt="logo"
      class="relative left-2 top-2 z-10 transition-all duration-300"
      :class="[
        { 'h-[300px] w-[300px]': size === 20 },
        { 'h-[400px] w-[400px]': size === 30 },
        { 'h-[500px] w-[500px]': size === 40 },
      ]"
    >

    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]"
    />
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  imgUrl: string;
  size: 20 | 30 | 40;
}

defineProps<Props>();
</script>

<style scoped></style>
