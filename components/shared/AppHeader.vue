<template>
  <header class="border border-b">
    <app-container class="flex items-center justify-between py-8">
      <NuxtLink to="/" class="flex items-center gap-4">
        <img
          src="~/assets/img/logo.png"
          alt="Logo"
          width="35px"
          height="35px"
        >
        <div>
          <h1 class="text-2xl font-black uppercase">NUXT PIZZA</h1>
          <p class="text-md leading-3 text-gray-400">вкусней уже некуда</p>
        </div>
      </NuxtLink>

      <div class="mx-10 flex-1">
        <SearchInput />
      </div>

      <div class="flex items-center gap-4">
        <Button variant="outline" class="flex items-center gap-1">
          <User :size="16" />
          Войти
        </Button>
        <div>
          <Button class="group relative">
            <b>520р</b>
            <span class="mx-3 h-full w-[1px] bg-white/30" />
            <div
              class="duaration-300 flex items-center gap-1 transition group-hover:opacity-0"
            >
              <ShoppingCart :size="16" class="relative" />
              <b>8</b>
            </div>
            <ArrowRight
              :size="20"
              class="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </Button>
        </div>
      </div>
    </app-container>
  </header>
</template>

<script setup lang="ts">
import { User, ShoppingCart, ArrowRight } from "lucide-vue-next";
</script>

<style scoped></style>
