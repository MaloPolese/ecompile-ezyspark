<script setup lang="ts">
import { menu } from '@/utils/menu'
import BurgerMenu from '../components/BurgerMenu.vue'
import Logo from './Logo.vue'
</script>

<template>
  <header class="bg-blue-900 px-5 md:px-11 py-4 text-white sticky top-0 z-50">
    <div class="flex items-center justify-between max-w-screen-xl mx-auto">
      <Logo />
      <nav class="hidden md:flex h-full gap-14 items-center">
        <RouterLink
          v-for="(item, index) of menu"
          v-bind:key="index"
          :to="item.path"
          class="hover:text-green-400 transition-all duration-100 ease-linear"
          >{{ item.name }}</RouterLink
        >
      </nav>
      <a
        class="hidden md:block px-6 py-2 border-[1px] border-white rounded cursor-pointer hover:border-green-400 hover:text-green-400 transition-all duration-100 ease-linear"
        href="https://ecompile.io/"
        target="_blank"
        rel="noopener noreferrer"
        >Visit our website</a
      >
      <BurgerMenu />
    </div>
  </header>
</template>
