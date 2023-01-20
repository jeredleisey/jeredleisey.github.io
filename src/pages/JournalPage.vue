<script setup lang="ts">
import { useRoute } from 'vue-router';
import { loremIpsum } from 'lorem-ipsum';

const route = useRoute();
</script>

<template>
  <div class="pt-32 bg-white relative px-7 z-10">
    <div class="max-w-prose m-auto flex flex-col">
      <span class="m-auto font-kepler-std text-5xl font-bold">
        {{ route.params.articleTitle }}
      </span>
      <div
        class="content mb-4 font-inter font-normal text-xl"
        v-for="i in 10"
        :id="'paragraph-' + i"
      >
        {{ loremIpsum({ count: 1, units: 'paragraphs' }) }}
      </div>
    </div>
  </div>
</template>
