<template>
  <div class="flex items-center space-x-2">
    <Checkbox
      :value="props.value"
      :id="`checkbox-${props.name}-${props.value}`"
      class="h-6 w-6 rounded-[8px]"
    />
    <label
      :for="`checkbox-${props.name}-${props.value}`"
      class="flex-1 cursor-pointer leading-none"
    >
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  value: string;
  name: string;
}>();
</script>
