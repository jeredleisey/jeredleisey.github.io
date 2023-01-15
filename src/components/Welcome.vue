<script setup lang="ts">
import { loremIpsum } from 'lorem-ipsum';
</script>

<template>
  <div class="z-10 relative py-32 bg-white px-7">
    <div class="mx-auto max-w-prose text-lg">
      <h1 class="text-4xl font-extrabold mb-8">Jered Leisey</h1>
      <p class="mb-5">
        Hey, I'm Jered Leisey, a space aficionado and zealous open sourceror.
      </p>
      <p class="mb-5">
        {{ loremIpsum({ count: 10, units: 'paragraphs' }) }}
      </p>
    </div>
  </div>
</template>

<style scoped>
p {
  font-family: Inter, sans-serif;
  font-weight: 400;
}
</style>
