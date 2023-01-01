<script setup lang="ts"></script>

<template>
  <div class="site-header">
    <div class="wrap flex justify-between">
      <div class="title-area">
        <p class="site-title">
          <a href="https://www.jeredleisey.com">Jered Leisey</a>
        </p>
      </div>
      <div class="wrap space-x-4">
        <a href="https://www.jeredleisey.com/anim" itemprop="url">
          <span itemprop="name">Animations</span>
        </a>

        <a href="https://www.jeredleisey.com/portfolio" itemprop="url">
          <span itemprop="name">Portfolio</span>
        </a>

        <a href="https://www.jeredleisey.com/resume" itemprop="url">
          <span itemprop="name">Resumé</span>
        </a>
        <a href="https://www.jeredleisey.com/contact" itemprop="url">
          <span itemprop="name">Contact</span>
        </a>
      </div>
    </div>
  </div>
  <div class="site-container"></div>
</template>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  -moz-osx-font-smoothing: grayscale;
}
body {
  color: #000;
  font-family: 'kepler-std', serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.75;
}
@media only screen and (max-width: 1120px) {
  .site-header {
    max-width: 960px;
  }
}
@media only screen and (max-width: 1280px) {
  .site-header {
    max-width: 1080px;
  }
}
.site-header {
  line-height: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-bottom: 40px;
  padding-top: 40px;
}
a,
input:focus,
input[type='button'],
input[type='reset'],
input[type='submit'],
textarea:focus,
.button,
.site-header {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.site-container {
  background-color: #f5f5f5;
  height: 100vh;
}
</style>
