<!-- <script setup lang="ts">
// import { gsap, ScrollTrigger, ScrollSmoother } from 'gsap-trial/all';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let getRatio = (el: HTMLElement) =>
  window.innerHeight / (window.innerHeight + el.offsetHeight);

onMounted(() => {
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero-text',
      start: 'center center',
      end: 'center top',
      scrub: true,
    },
  });
  // tl.to('#hero-text', {
  //   yPercent: -45,
  //   fontSize: '25vw',
  //   duration: 3,
  //   ease: 'power2.inOut',
  // });

  // tl.to('#hero-text', {
  //   opacity: 0,
  //   ease: 'power1.inOut',
  //   duration: 3,
  //   delay: 5,
  // });

  const el = document.getElementById('secondary');

  gsap.fromTo(
    el,
    {
      backgroundPosition: () => `100% ${-window.innerHeight * getRatio(el!)}px`,
    },
    {
      backgroundPosition: () =>
        `100% ${window.innerHeight * (1 - getRatio(el!))}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
});
</script>

<template>
  <section id="hero-container">
    <div id="hero-text">jdl</div>
  </section>

  <section id="scroll-hint">
    <footer>scroll</footer>
  </section>

  <section id="secondary"></section>
  <section id="three"></section>
  <section id="four"></section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#hero-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('https://crustac.fr/wp-content/themes/crustac/img/home_intro_bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 80%;
  background-attachment: fixed;
  z-index: 0;
}

#hero-text {
  position: fixed;
  /* background: url('https://i.imgur.com/svrRBtr.gif'); */
  background-size: 100%;
  background-position: center;
  background-clip: text;
  color: #00000000;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #6f6f6f;
  font-size: 30vw;
  font-family: 'Righteous', cursive;
  letter-spacing: 1px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  z-index: 0;
  font-family: 'Righteous', cursive;
}

#scroll-hint {
  position: fixed;
  font-family: 'Inter', sans-serif;
  font-size: 1.5em;
  color: #3f3f3f;
  margin-bottom: 25px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}

#secondary {
  position: relative;
  height: 100vh;
  background: url('../assets/coors.png');
  background-size: cover;
  z-index: 1;
}

#app {
  height: 100vh;
}
</style> -->
