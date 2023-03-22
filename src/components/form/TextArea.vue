<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  placeholder: string
}>()
</script>

<template>
  <textarea
    :placeholder="placeholder"
    class="peer block min-h-[auto] w-full bg-transparent py-[0.32rem] px-1 leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none border-b-2"
  />
</template>
