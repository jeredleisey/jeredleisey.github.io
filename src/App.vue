<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <SiteHeader />
  <router-view></router-view>
  <SiteFooter />
</template>

<style scoped></style>
