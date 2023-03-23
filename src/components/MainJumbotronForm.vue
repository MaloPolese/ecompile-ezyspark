<script setup lang="ts">
import Input from './form/Input.vue'
import TextArea from './form/TextArea.vue'
</script>

<template>
  <form class="bg-white rounded min-w-[300px] md:min-w-[370px] shadow-2xl p-9 flex flex-col gap-8">
    <header class="flex flex-col gap-4">
      <h2 class="font-bold text-2xl">Talk to us</h2>
      <p class="text-base">
        Leave your details below and our team will reach out to you within 24 hours
      </p>
    </header>
    <section class="flex flex-col gap-7">
      <Input type="text" placeholder="Your Name" />
      <Input type="email" placeholder="Email" />
      <Input type="tel" placeholder="Contact Number" />
      <TextArea placeholder="Your Message"></TextArea>
    </section>

    <button
      class="text-white bg-green-400 hover:bg-green-500 py-3 rounded transition-all duration-200 ease-linear"
      type="submit"
      @click.prevent
    >
      Submit
    </button>
  </form>
</template>
