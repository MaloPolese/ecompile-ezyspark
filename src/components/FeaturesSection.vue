<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'
import IconFile from './icons/IconFile.vue'
import IconGood from './icons/IconGood.vue'
import IconMoney from './icons/IconMoney.vue'
</script>

<template>
  <section
    class="flex flex-col justify-center items-center max-w-screen-lg mx-auto py-11 gap-14 px-4"
  >
    <header class="flex flex-col-reverse items-center gap-2">
      <h2 class="font-bold text-3xl">What Benefits you Get</h2>
      <p class="text-pink-500 font-bold text-sm uppercase">features</p>
    </header>

    <section class="gap-11 flex flex-wrap justify-center">
      <FeatureCard
        title="Better Choices"
        content="Make unbiased choices thanks to reviews, testimonials"
      >
        <IconGood />
      </FeatureCard>
      <FeatureCard
        title="Save Money"
        content="Save time & money reducing time-to-hire by 86% and cost-to-hire by 35% "
      >
        <IconFile />
      </FeatureCard>
      <FeatureCard title="Easy Access" content="Access to over 350 Trainers regionally">
        <IconMoney />
      </FeatureCard>
    </section>
  </section>
</template>
