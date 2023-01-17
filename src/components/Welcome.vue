<script setup lang="ts">
import { loremIpsum } from 'lorem-ipsum';
</script>

<template>
  <div class="h-screen z-10 relative py-32 bg-white px-7">
    <div class="mx-auto max-w-prose text-lg">
      <h1 class="text-4xl font-extrabold mb-8">Jered Leisey</h1>
      <p>
        Hey, I'm Jered Leisey, a space aficionado and zealous open sourceror.
      </p>
      <p>
        Seeing data come to life is the reason I write code. My life goal is to
        be a part of humanity's proliferation into space. I will acheive that by
        contributing to open source projects in the astrophysics community.
      </p>
      <p>
        Dreaming up ideas and making them come true is where my passion lies.
        You can find
        <router-link to="projects"> a few of my projects here</router-link>. I
        will be starting a 100-day challenge soon to bring my knowledge of code
        back to my roots in astrophysics. Keep an eye out for the progress at
        <a href="https://100.jeredleisey.com" target="_blank" rel="noopener">
          100.jeredleisey.com</a
        >.
      </p>
      <p>
        When I am not programming, I enjoy photography, traveling, and disc
        golf. Some of my photos can be found on Instagram.
      </p>
      <hr class="w-12 mx-auto my-8 border-[#7d7d7d4d]" />
      <p>
        Find me on
        <a href="https://github.com/jeredleisey">GitHub</a>
        or
        <a href="https://linkedin.com/in/jeredleisey">LinkedIn</a>.
        <br />
        Mail me at
        <a href="mailto:jered@differentialdesign.io">
          jered@differentialdesign.io</a
        >.
      </p>
      <p>
        If you like my work, consider sponsoring me on GitHub Sponsor or buy me
        a coffee.
      </p>
    </div>
  </div>
</template>

<style scoped>
p {
  font-family: Inter, sans-serif;
  font-weight: 400;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

a {
  border-bottom: 1px solid rgba(121, 121, 121, 0.3);
  transition: border 0.3s ease-in-out;
}

a:hover {
  border-bottom: 1px solid black;
}
</style>
