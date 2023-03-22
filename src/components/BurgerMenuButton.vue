<script setup lang="ts">
import { inject } from 'vue'
import IconBurger from './icons/IconBurger.vue'
import IconCross from './icons/IconCross.vue'

let showMenu = inject<boolean>('showMenu')
</script>

<template>
  <button @click="showMenu = !showMenu" class="justify-center items-center">
    <IconCross v-if="showMenu" />
    <IconBurger v-else />
    <span class="opacity-0 text-[0]">Menu</span>
  </button>
</template>
