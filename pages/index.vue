<template>
  <section>
    <app-container class="mt-10">
      <app-title size="lg" class="font-extrabold"> Все пиццы </app-title>
    </app-container>

    <div class="sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5">
      <app-container class="flex items-center justify-between">
        <categories />
        <sort-popup />
      </app-container>
    </div>

    <app-container class="mt-10 pb-14">
      <div class="flex gap-[80px]">
        <div class="w-[250px]">
          <Filter />
        </div>
        <div class="flex-1">
          <products-list-card
            title="Пиццы"
            :items="[
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: '',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: '',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: '',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: '',
                price: 550,
                items: [{ price: 550 }],
              },
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: '',
                price: 550,
                items: [{ price: 550 }],
              },
            ]"
            :categori-id="1"
          />
        </div>
      </div>
    </app-container>
  </section>
</template>

<script setup>
useHead({
  title: "NuxtPizza | Главная",
});
</script>

<style scoped></style>
