<script setup lang="ts"></script>

<template>
  <section>
    <nav>
      <h4>developedbyjered</h4>
      <a class="button">Sign Up</a>
    </nav>
    <div class="container">
      <h2 class="main-title">hello. my name is jered.</h2>
    </div>
    <div class="boxes">
      <div
        class="image"
        style="
          background-image: url('https://www.belancio.com/foundation/wp-content/uploads/curology-mini.jpg');
          width: 100%;
          height: 100vh;
        "
      ></div>
      <div
        class="image"
        style="
          background-image: url('https://www.belancio.com/foundation/wp-content/uploads/tradesy-mini.jpg');
          width: 100%;
          height: 100vh;
        "
      ></div>
      <div
        class="image"
        style="
          background-image: url('https://www.belancio.com/foundation/wp-content/uploads/revel-seasonings-mini.jpg');
          width: 100%;
          height: 100vh;
        "
      ></div>
      <div
        class="image"
        style="
          background-image: url('https://www.belancio.com/foundation/wp-content/uploads/irvine-copmany-mini.jpg');
          width: 100%;
          height: 100vh;
        "
      ></div>
      <div
        class="image"
        style="
          background-image: url('https://www.belancio.com/foundation/wp-content/uploads/rightnow-mini.jpg');
          width: 100%;
          height: 100vh;
        "
      ></div>
    </div>
  </section>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

nav {
  position: absolute;
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
  top: 45%;
  left: 45%;
  font-size: 4rem;
  transform: translate(-20%, -45%);
}

.boxes {
  display: block;
  background: rgb(24, 24, 24);
  overflow: hidden;
  position: absolute;
  z-index: 2;
  width: 100%;
}
</style>
