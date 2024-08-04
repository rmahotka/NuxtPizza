<template>
  <div class="flex items-center space-x-2">
    <Checkbox
      :value="props.value"
      :id="`checkbox-${props.name}-${props.value}`"
      :name="props.name"
      :checked="props.checked"
      @update:checked="handleChange"
      class="h-6 w-6 rounded-[8px]"
    />
    <label
      :for="`checkbox-${props.name}-${props.value}`"
      class="flex-1 cursor-pointer leading-none"
    >
      {{ props.text }}
    </label>
  </div>
</template>

<script setup lang="ts">
import type { FilterCheckboxProps } from "~/types/typeCheckbox";
import { defineProps } from "vue";

const props = defineProps<FilterCheckboxProps>();
const emit = defineEmits(["update:checked"]);

const check = ref(props.checked);

watch(
  () => props.checked,
  (newVal) => {
    check.value = newVal;
  },
);

const handleChange = (newChecked: boolean) => {
  check.value = newChecked;
  emit("update:checked", newChecked);
};
</script>
