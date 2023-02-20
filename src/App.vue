<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <SiteHeader />
  <div class="pt-16">
    <router-view></router-view>
  </div>
  <SiteFooter />
</template>

<style scoped></style>
