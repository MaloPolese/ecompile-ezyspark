<script setup lang="ts">
import { menu } from '@/utils/menu'
import { inject } from 'vue'
import BurgerMenuButton from './BurgerMenuButton.vue'

let showMenu = inject<boolean>('showMenu')
</script>

<template>
  <BurgerMenuButton :class="['flex md:hidden', showMenu ? 'hidden' : 'flex']" />
  <section
    :class="[
      showMenu ? 'flex' : 'hidden',
      'md:hidden fixed top-0 left-0 w-screen h-screen z-40 justify-center items-center backdrop-blur-md'
    ]"
  >
    <BurgerMenuButton class="absolute top-8 right-5 z-50" />
    <div class="w-full h-full bg-blue-900 opacity-80 absolute z-0"></div>
    <div class="p-4">
      <nav class="flex flex-col gap-14 text-5xl font-bold relative z-10 text-left text-white">
        <RouterLink
          v-for="(item, index) of menu"
          v-bind:key="index"
          :to="item.path"
          class="group w-fit"
        >
          <span class="block group-hover:translate-x-5 transition-all duration-100">{{
            item.name
          }}</span>
        </RouterLink>
      </nav>
    </div>
  </section>
</template>
