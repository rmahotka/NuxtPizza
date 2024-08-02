<template>
  <div>
    <app-title class="mb-5 font-bold">Фильтрация</app-title>
    <div class="flex flex-col gap-4">
      <filter-checkbox value="1" name="type"> Можно собирать </filter-checkbox>
      <filter-checkbox value="2" name="type"> Новинки </filter-checkbox>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
