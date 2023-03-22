<script setup lang="ts">
import { provide, ref } from 'vue'
const showMenu = ref(false)
provide('showMenu', showMenu)
</script>

<template>
  <slot />
</template>
