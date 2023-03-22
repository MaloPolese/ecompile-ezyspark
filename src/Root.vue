<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import App from './App.vue'
import MenuProvider from './provider/MenuProvider.vue'
</script>

<template>
  <MenuProvider>
    <App />
  </MenuProvider>
</template>
