<template>
  <div>
    <app-title class="mb-5 font-bold"> Фильтрация </app-title>
    <div class="flex flex-col gap-4">
      <filter-checkbox
        v-model:checked="checkedCollect"
        value="1"
        name="type"
        text="Можно собирать"
      />
      <filter-checkbox
        v-model:checked="checkedNew"
        value="2"
        name="type"
        text="Новинки"
      />
    </div>

    <div class="mt-3 border-y border-y-neutral-100 py-6 pb-7">
      <p class="mb-3 font-bold">Цена от и до:</p>
      <div class="mb-5 flex gap-3">
        <Input
          type="number"
          placeholder="0"
          min="0"
          max="1000"
          :default-value="100"
        />
        <Input type="number" placeholder="5000" min="100" max="5000" />
      </div>
      <range-slider v-model="modelValue" :min="0" :max="5000" :step="10" />
    </div>

    <div class="mb-10 mt-8">
      <p class="mb-3 font-bold">Ингредиенты:</p>
      <checkbox-filter-group name-group="ingredients" :items="items" />
    </div>

    <div>
      <p class="mb-3 font-bold">Тип теста:</p>
      <div class="flex flex-col gap-4">
        <filter-checkbox
          v-model:checked="checkedtypeDoughtTraditional"
          value="1"
          name="typeDough"
          text="Традиционное"
        />
        <filter-checkbox
          v-model:checked="checkedtypeDoughtThin"
          value="2"
          name="typeDough"
          text="Тонкое"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FilterCheckboxProps } from "~/types/typeCheckbox";

const modelValue = ref([100, 5000]);

const checkedCollect = ref(true);
const checkedNew = ref(false);
const checkedtypeDoughtTraditional = ref(true);
const checkedtypeDoughtThin = ref(false);

const items = ref<FilterCheckboxProps[]>([
  {
    text: "Сырный соус",
    value: "1",
    checked: true,
  },
  {
    text: "Моццарелла",
    value: "2",
    checked: false,
  },
  {
    text: "Чеснок",
    value: "3",
    checked: true,
  },
  {
    text: "Соленные огурчики",
    value: "4",
    checked: false,
  },
  {
    text: "Красный лук",
    value: "5",
    checked: true,
  },
  {
    text: "Томаты",
    value: "6",
    checked: false,
  },
  {
    text: "Сырный соус",
    value: "1",
    checked: true,
  },
  {
    text: "Моццарелла",
    value: "2",
    checked: false,
  },
  {
    text: "Чеснок",
    value: "3",
    checked: true,
  },
  {
    text: "Соленные огурчики",
    value: "4",
    checked: false,
  },
  {
    text: "Красный лук",
    value: "5",
    checked: true,
  },
  {
    text: "Томаты",
    value: "6",
    checked: false,
  },
  {
    text: "Сырный соус",
    value: "1",
    checked: true,
  },
  {
    text: "Моццарелла",
    value: "2",
    checked: false,
  },
  {
    text: "Чеснок",
    value: "3",
    checked: true,
  },
  {
    text: "Соленные огурчики",
    value: "4",
    checked: false,
  },
  {
    text: "Красный лук",
    value: "5",
    checked: true,
  },
  {
    text: "Томаты",
    value: "6",
    checked: false,
  },
  {
    text: "Сырный соус",
    value: "1",
    checked: true,
  },
  {
    text: "Моццарелла",
    value: "2",
    checked: false,
  },
  {
    text: "Чеснок",
    value: "3",
    checked: true,
  },
  {
    text: "Соленные огурчики",
    value: "4",
    checked: false,
  },
  {
    text: "Красный лук",
    value: "5",
    checked: true,
  },
  {
    text: "Томаты",
    value: "6",
    checked: false,
  },
]);
</script>
