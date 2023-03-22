<script setup lang="ts">
import MainJumbotronForm from './MainJumbotronForm.vue'
import DotsBox from './DotsBox.vue'
</script>

<template>
  <section class="bg-blue-900 flex justify-center items-center py-20 px-4 box-border relative">
    <div class="max-w-screen-lg flex flex-col md:flex-row justify-center items-center gap-9">
      <div class="flex flex-col gap-8 text-white max-w-[650px] md:max-w-full">
        <h1 class="capitalize text-5xl font-bold text-center md:text-left">
          Hire corporate trainers that match,
          <span
            class="appear-up-fade-in text-cyan-400 hover:text-cyan-500 transition-all duration-100 ease-linear"
            >quick</span
          >
          and
          <span
            class="appear-up-fade-in text-green-400 hover:text-green-500 transition-all duration-100 ease-linear"
            >easy</span
          >
        </h1>
        <p class="text-base text-center md:text-left">
          Ezyspark is a smart platform that sources targeted trainers that match your learning
          needs, equipping you with screening tools, so you can hire the right trainers with ease.
        </p>
      </div>
      <MainJumbotronForm />
    </div>
    <DotsBox class="hidden md:block absolute left-10 bottom-0 w-[200px] h-[100px]" />
  </section>
</template>
