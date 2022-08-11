<script setup lang="ts"></script>

<template>
  <section id="hero-container">
    <div id="hero-text">jdl</div>
  </section>

  <section id="scroll-hint">
    <footer>scroll</footer>
  </section>

  <section id="secondary"></section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Righteous', cursive;
}

#hero-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url('https://images.pexels.com/photos/13009545/pexels-photo-13009545.jpeg'); */
  background: url('https://crustac.fr/wp-content/themes/crustac/img/home_intro_bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 80%;
  background-attachment: fixed;
  z-index: 0;
}

#scroll-hint {
  position: fixed;
  font-family: 'Inter', sans-serif;
  font-size: 1.5em;
  color: #3f3f3f;
  margin-bottom: 20px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}

#secondary {
  position: relative;
  height: 500vh;
  background-color: #fff;
  z-index: 1;
}

#app {
  height: 100vh;
}

#hero-text {
  position: fixed;
  background: url('https://i.imgur.com/svrRBtr.gif');
  background-size: 100%;
  background-position: center;
  background-clip: text;
  color: #00000000;
  text-transform: uppercase;
  /* -webkit-text-stroke: 1px #3f3f3f; */
  font-size: 30vw;
  font-family: 'Righteous', cursive;
  letter-spacing: 1px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  z-index: 0;
}
</style>
