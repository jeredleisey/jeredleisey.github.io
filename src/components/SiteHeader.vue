<script setup lang="ts">
const headerLinks = [
  {
    url: 'https://www.jeredleisey.com',
    text: 'Work',
  },
  {
    url: 'http://localhost:5173/blog/3',
    text: 'Journal',
  },
  {
    url: 'https://www.jeredleisey.com',
    text: 'Bio',
  },
  {
    url: 'https://www.jeredleisey.com',
    text: 'Contact',
  },
];
</script>

<template>
  <div class="site-header flex items-center sticky h-32 -top-12 z-10">
    <!--TODO: Fix mobile screwing up width-->
    <div
      class="site-header-content flex justify-between items-center h-20 w-[1200px] mx-auto top-0"
    >
      <div class="title-area">
        <p class="site-title">
          <a href="http://localhost:5173">Jered Leisey</a>
        </p>
      </div>
      <div class="nav-primary wrap space-x-4">
        <a v-for="headerLink in headerLinks" :href="headerLink.url">
          <span itemprop="name">{{ headerLink.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.site-header {
  background-color: #fff;
}
.site-title a {
  color: #000;
  display: block;
  font-family: 'kepler-std', serif;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.nav-primary a {
  font-family: 'acumin-pro-condensed', sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
a,
.site-header {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
a:hover {
  color: rgb(216, 194, 53);
}
</style>
