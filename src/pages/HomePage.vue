<script setup lang="ts"></script>

<template>
  <div class="site-header">
    <div class="wrap flex justify-between">
      <div class="title-area">
        <p class="site-title">
          <a href="https://www.jeredleisey.com">Jered Leisey</a>
        </p>
      </div>
      <div class="nav-primary wrap space-x-4">
        <a href="https://www.jeredleisey.com/" itemprop="url">
          <span itemprop="name">Work</span>
        </a>
        <a href="https://www.jeredleisey.com/" itemprop="url">
          <span itemprop="name">Journal</span>
        </a>
        <a href="https://www.jeredleisey.com/" itemprop="url">
          <span itemprop="name">Bio</span>
        </a>
        <a href="https://www.jeredleisey.com/" itemprop="url">
          <span itemprop="name">Contact</span>
        </a>
      </div>
    </div>
  </div>
  <div class="site-container"></div>
</template>

<style>
@import url('https://use.typekit.net/xnx2llc.css');
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  -moz-osx-font-smoothing: grayscale;
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
a:hover {
  color: rgb(216, 194, 53);
}
</style>
