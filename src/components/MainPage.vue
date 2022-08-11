<script setup lang="ts"></script>

<template>
  <video autoplay muted loop id="myVideo">
    <source src="../assets/bouncy.mp4" type="video/mp4" />
  </video>

  <section>
    <nav>
      <h4>developedbyjered</h4>
    </nav>
    <div class="container">
      <h2 class="main-title">one day...</h2>
    </div>
  </section>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Righteous', cursive;
}

nav {
  position: fixed;
  width: 100%;
  display: flex;
  padding: 3rem 10rem;
  justify-content: space-between;
}

.container {
  height: 100vh;
}

.container h4 {
  z-index: 0;
}

.main-title {
  position: fixed;
  top: 55%;
  left: 65%;
  font-size: 4rem;
  text-transform: uppercase;
  color: #fff;
  z-index: 0;
}

#myVideo {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
