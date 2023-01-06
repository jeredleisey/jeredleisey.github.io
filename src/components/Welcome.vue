<script setup lang="ts"></script>

<template>
  <div id="welcome" class="welcome">
    <div class="welcome-text">
      <p class="intro">
        <em>Hi, I'm Jered.</em> This is a place where you can see the projects I
        am working on, and my contact info in case you want to get in touch.
      </p>
    </div>
  </div>
</template>

<style scoped>
p::before {
  content: '';
  background: #0a0a0a;
  height: 10px;
  width: 10px;
  display: block;
}
body {
  color: #000;
  font-family: 'kepler-std', serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.75;
}
.welcome {
  background-color: #f5f5f5;
  padding-bottom: 130px;
  padding-top: 130px;
}
.welcome-text {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}
.intro {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 0;
  padding-right: 55%;
}
p {
  margin: 0 0 25px;
  padding: 0;
  font-family: 'kepler-std', serif;
  font-weight: 300;
}
</style>
