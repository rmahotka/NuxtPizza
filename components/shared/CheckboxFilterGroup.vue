<template>
  <div>
    <div
      v-if="showAll"
      class="mb-5"
    >
      <Input
        v-model="searchItems"
        :placeholder="props.searchInputPlaceholder"
        class="border-none bg-gray-50"
      />
    </div>
    <div class="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
      <filter-checkbox
        v-for="(item, index) in visibleItem"
        :key="index"
        v-model:checked="item.checked"
        :value="item.value"
        :text="item.text"
        :name="props.nameGroup"
      />
    </div>

    <div
      v-if="props.items.length > props.limit"
      :class="{ 'mt-4 border-t border-t-neutral-100': showAll }"
    >
      <button
        class="mt-3 text-primary"
        @click="showAll = !showAll"
      >
        {{ showAll ? "Скрыть " : "+ Показать всё" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import type {
  FilterCheckboxProps,
  FilterCheckboxGroupProps,
} from '~/types/typeCheckbox'

const props = withDefaults(defineProps<FilterCheckboxGroupProps>(), {
  searchInputPlaceholder: 'Поиск...',
  limit: 5,
})

const showAll = ref(false)

const searchItems = ref<string>('')

const visibleItem = computed(() => {
  if (showAll.value) {
    return props.items.filter((item: FilterCheckboxProps) =>
      item.text.toLowerCase().includes(searchItems.value.toLowerCase()),
    )
  }
  else {
    return props.items?.slice(0, props.limit)
  }
})
</script>
