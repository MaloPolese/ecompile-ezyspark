<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>

<template>
  <div
    class="group flex flex-col items-center gap-3 p-14 shadow-md hover:shadow-lg grow md:flex-[0__1__300px] rounded"
  >
    <span class="w-[42px] h-[42px] mb-2 group-hover:-rotate-[10deg] transition-all duration-150">
      <slot />
    </span>

    <h3 class="font-bold text-xl text-center">{{ title }}</h3>
    <p class="text-base text-center font-light">{{ content }}</p>
  </div>
</template>
