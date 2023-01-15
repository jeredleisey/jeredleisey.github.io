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
        Creator of Vitest, Slidev, VueUse, UnoCSS, Type Challenges and others.
        <br />
        Core team member of Vue, Nuxt and Vite.
        <br />
        Team member of Windi CSS, wenyan-lang 文言 and Intlify.
      </p>
      <p>
        Dreaming up ideas and making them come true is where my passion lies.
        You can find my full projects list here. I have also started a 100-day
        challenge about design, compform, interactivity, and experimenting with
        new things on 100.antfu.me.
      </p>
      <p>
        Outside of programming, I enjoy doing photography and traveling. Some of
        my photos can be found on Instagram. If you happen to be in the same
        city I live (currently in Paris), maybe we can hang out and take some
        photos or code together.
      </p>
      <p>
        Find me on GitHub, Twitter, Mastodon, YouTube, 知乎, 微博 or 哔哩哔哩.
        <br />
        Mail me at hi@antfu.me.
        <br />
        Chat with the community at my Discord Server.
      </p>
      <p>
        If you like my works, consider sponsoring me on GitHub Sponsor to keep
        them sustainable.
      </p>
      <!-- <p class="mb-5">
        {{ loremIpsum({ count: 10, units: 'paragraphs' }) }}
      </p> -->
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
</style>
