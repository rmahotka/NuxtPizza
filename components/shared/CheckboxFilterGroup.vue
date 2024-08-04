<template>
  <div>
    <div v-if="showAll" class="mb-5">
      <Input
        :placeholder="props.searchInputPlaceholder"
        class="border-none bg-gray-50"
      />
    </div>
    <div class="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
      <filter-checkbox
        v-for="(item, index) in props.items"
        :key="index"
        :value="item.value"
        :text="item.text"
        :name="props.nameGroup"
        v-model:checked="item.checked"
      />
    </div>

    <div
      v-if="props.items.length > props.limit"
      :class="{ 'mt-4 border-t border-t-neutral-100': showAll }"
    >
      <button @click="showAll = !showAll" class="mt-3 text-primary">
        {{ showAll ? "Скрыть " : "+ Показать всё" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { FilterCheckboxProps } from "~/types/typeCheckbox";

interface Props {
  items: FilterCheckboxProps[];
  defualtItems?: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  defaultValue?: string[];
  nameGroup: String;
}

const props = withDefaults(defineProps<Props>(), {
  searchInputPlaceholder: "Поиск...",
  limit: 5,
});

const showAll = ref(false);
</script>
