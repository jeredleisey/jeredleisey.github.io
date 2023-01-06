<script setup lang="ts">
import { useRoute } from 'vue-router';
import { loremIpsum } from 'lorem-ipsum';

const route = useRoute();
</script>

<template>
  <div class="blog-page">
    <div class="blog-content">
      <span class="title">
        {{ route.params.articleTitle }}
      </span>
      <div class="content" v-for="i in 10" :id="'paragraph-' + i">
        {{ loremIpsum({ count: 1, units: 'paragraphs' }) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-page {
  background-color: #fff;
  position: relative;
  z-index: 1;
}
.blog-content {
  margin: auto;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  max-width: 520px;
}
.title {
  margin: auto;
  font-family: kepler-std, serif;
  font-weight: 700;
  font-size: 3em;
  white-space: nowrap;
}
.content {
  margin-bottom: 1em;
  font-family: 'kepler-std', serif;
  font-weight: 400;
  font-size: 1.3em;
}
p {
  margin-bottom: 1em !important;
}
</style>
