<template>
  <div class="inline-flex gap-1 rounded-2xl bg-gray-50 p-1">
    <button
      v-for="(item, index) in categories"
      :key="index"
      :class="[
        'flex h-11 items-center rounded-2xl px-5 font-bold',
        {
          'bg-white text-primary shadow-md shadow-gray-200':
            activeIndex === index,
        },
      ]"
      @click="onActiveIndex(index)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script setup lang="ts">
const categories: string[] = [
  'Пиццы',
  'Комбо',
  'Закуски',
  'Коктейли',
  'Кофе',
  'Напитки',
  'Десерты',
]

const activeIndex = ref(0)

const onActiveIndex = (index: number) => {
  return (activeIndex.value = index)
}
</script>
