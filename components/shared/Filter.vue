<template>
  <div>
    <app-title class="mb-5 font-bold">Фильтрация</app-title>
    <div class="flex flex-col gap-4">
      <filter-checkbox
        value="1"
        name="type"
        text="Можно собирать"
        v-model:checked="checkedСollect"
      />
      <filter-checkbox
        value="2"
        name="type"
        text="Новинки"
        v-model:checked="checkedNew"
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
          :defaultValue="100"
        />
        <Input type="number" placeholder="5000" min="100" max="5000" />
      </div>
      <range-slider :min="0" :max="5000" :step="10" v-model="modelValue" />
    </div>

    <div class="mb-10 mt-8">
      <p class="mb-3 font-bold">Ингредиенты:</p>
      <checkbox-filter-group
        nameGroup="ingredients"
        :defaultItems="defaultItems"
        :items="items"
      />
    </div>

    <div>
      <p class="mb-3 font-bold">Тип теста:</p>
      <div class="flex flex-col gap-4">
        <filter-checkbox
          value="1"
          name="typeDough"
          text="Традиционное"
          v-model:checked="checkedtypeDoughtTraditional"
        />
        <filter-checkbox
          value="2"
          name="typeDough"
          text="Тонкое"
          v-model:checked="checkedtypeDoughtThin"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const modelValue = ref([100, 5000]);

const checkedСollect = ref(true);
const checkedNew = ref(false);
const checkedtypeDoughtTraditional = ref(true);
const checkedtypeDoughtThin = ref(false);

const defaultItems = ref([
  {
    text: "Сырный соус",
    value: "1",
  },
  {
    text: "Моццарелла",
    value: "2",
  },
  {
    text: "Чеснок",
    value: "3",
  },
  {
    text: "Соленные огурчики",
    value: "4",
  },
  {
    text: "Красный лук",
    value: "5",
  },
  {
    text: "Томаты",
    value: "6",
  },
]);

const items = ref([
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
