<template>
  <div class="my-5">
    <p class="mb-3 font-bold">{{ title }}:</p>
    <div v-if="loading">
      <skeleton
        v-for="(_, index) in limit"
        :key="index"
        class="mb-4 h-6 rounded-[8px]"
      />
      <skeleton
        class="mb-4 h-6 w-28 rounded-[8px]"
        v-if="items.length > limit"
      />
    </div>
    <div v-else>
      <div v-if="showAll" class="mb-5">
        <Input
          v-model="searchItems"
          :placeholder="searchInputPlaceholder"
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
          @update:checked="updateCheckedValues"
        />
      </div>

      <div
        v-if="items.length > limit"
        :class="{ 'mt-4 border-t border-t-neutral-100': showAll }"
      >
        <button class="mt-3 text-primary" @click="showAll = !showAll">
          {{ showAll ? "Скрыть " : "+ Показать всё" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import type {
  FilterCheckboxProps,
  FilterCheckboxGroupProps,
} from "~/types/typeFilters";

const props = withDefaults(defineProps<FilterCheckboxGroupProps>(), {
  searchInputPlaceholder: "Поиск...",
  limit: 5,
});

const emit = defineEmits<{
  (event: "update:checkedItems", checkedItems: string[]): void;
}>();

const updateCheckedValues = (value: string, checked: boolean) => {
  const selectedValues = new Set(
    props.items.filter((item) => item.checked).map((item) => item.value),
  );

  if (checked) {
    selectedValues.add(value);
  } else {
    selectedValues.delete(value);
  }

  emit("update:checkedItems", Array.from(selectedValues));
};

props.items.forEach((item) => {
  item.checked = props.checkedItems?.includes(item.value) ?? false;
});

const showAll = ref(false);
const searchItems = ref<string>("");

const visibleItem = computed(() => {
  if (showAll.value) {
    return props.items.filter((item: FilterCheckboxProps) =>
      item.text.toLowerCase().includes(searchItems.value.toLowerCase()),
    );
  } else {
    return props.items?.slice(0, props.limit);
  }
});
</script>
