<template>
  <div class="flex items-center space-x-2">
    <Checkbox
      :id="`checkbox-${props.name}-${props.value}`"
      v-model:checked="checked"
      :value="props.value"
      :name="props.name"
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
import { defineProps } from "vue";
import type { FilterCheckboxProps } from "~/types/typeCheckbox";

const props = defineProps<FilterCheckboxProps>();

const checked = defineModel<boolean>("checked");
</script>
