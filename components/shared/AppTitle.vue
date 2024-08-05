<template>
  <div>
    <component :is="tag" :class="[classSize]">
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  size?: TitleSize;
}

const props = withDefaults(defineProps<Props>(), {
  size: "sm",
});

const mapTagBySize = {
  xs: "h5",
  sm: "h4",
  md: "h3",
  lg: "h2",
  xl: "h1",
  "2xl": "h1",
} as const;

const mapClassNameBySize = {
  xs: "text-[16px]",
  sm: "text-[22px]",
  md: "text-[26px]",
  lg: "text-[32px]",
  xl: "text-[40px]",
  "2xl": "text-[48px]",
} as const;

const tag = computed(() => mapTagBySize[props.size as TitleSize]);
const classSize = computed(() => mapClassNameBySize[props.size as TitleSize]);
</script>
