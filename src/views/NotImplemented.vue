<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

const { currentRoute } = useRouter()
</script>

<template>
  <section
    class="bg-blue-900 text-white flex flex-col items-center justify-center h-[calc(100vh-90px)] gap-8 px-4"
  >
    <h1 class="text-5xl text-center font-bold">
      <span class="capitalize text-green-400">{{ currentRoute.name }}</span> Not Implemented
    </h1>
    <RouterLink to="/" class="hover:text-green-400">Back to home</RouterLink>
  </section>
</template>
