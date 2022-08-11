<script setup lang="ts"></script>

<template>
  <section id="nav">
    <nav>
      <h4>developedbyjered</h4>
    </nav>
  </section>

  <section id="hero">
    <div id="text">jdl</div>
  </section>

  <section id="secondary"></section>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Righteous', cursive;
}

body {
  background: url('https://images.unsplash.com/photo-1485841938031-1bf81239b815');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

nav {
  position: fixed;
  width: 100%;
  display: flex;
  padding: 3rem 10rem;
  justify-content: space-between;
  color: white;
}

#hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#secondary {
  height: 500vh;
}

#app {
  height: 100vh;
}

#text {
  background: url('https://i.imgur.com/l0ff65M.gif');
  background-size: 100%;
  background-position: center;
  background-clip: text;
  color: #00000000;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #3f3f3f;
  font-size: 30vw;
  font-family: 'Righteous', cursive;
  letter-spacing: 1px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
}
</style>
