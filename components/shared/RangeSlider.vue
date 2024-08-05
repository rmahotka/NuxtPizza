<script setup lang="ts">
import { type HTMLAttributes, computed, defineProps, defineEmits } from 'vue'
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<
  SliderRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="
      cn(
        'relative mb-6 flex w-full touch-none select-none items-center',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <SliderTrack
      class="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20"
    >
      <SliderRange class="absolute h-full bg-primary" />
    </SliderTrack>
    <SliderThumb
      v-for="(value, index) in modelValue"
      :key="index"
      class="relative block h-4 w-4 rounded-full border border-primary/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      <div
        class="absolute left-1/2 top-6 -translate-x-1/2 transform text-xs"
        :style="{ marginLeft: `${index === 0 ? '-50%' : '50%'}` }"
      >
        {{ value }}
      </div>
    </SliderThumb>
  </SliderRoot>
</template>
