<script setup lang="ts">
type Variant = {
  name: string;
  value: string;
  disabled: boolean
}

interface Props {
  items: readonly Variant[];
  defaultValue?: string;
  selectValue: Variant['value']
}

defineProps<Props>()


</script>

<template>
  <div class="flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none">
    <button
      v-for="item in items"
      :key="item.name"
      class="flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm"
      :class="[
        {'bg-white shadow': item.value === selectValue},
        {'text-gray-500 opacity-50 pointer-events-none': item.disabled}
      ]"
    >
      {{item.name}}
    </button>
  </div>
</template>

<style scoped>

</style>
