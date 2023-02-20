<script setup lang="ts">
import { gsap, DrawSVGPlugin, ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#main',
      start: 'top top',
      end: 'center top',
      markers: false,
      scrub: true,
    },
  });
  tl.from('#line1', { ease: 'ease-in-out', drawSVG: 0, duration: 3 });
  tl.to('.birth', {
    ease: 'ease-in-out',
    opacity: 1,
    paddingLeft: '8px',
    duration: 6,
  });
  tl.from('#line2', { ease: 'ease-in-out', drawSVG: '50% 50%', duration: 1 });
  tl.from('#line3', { ease: 'ease-in-out', drawSVG: 0, duration: 3 });
  tl.to(
    '.something',
    { ease: 'ease-in-out', opacity: 1, paddingLeft: '8px', duration: 6 },
    '<0.5'
  );
  tl.from(
    '#line4',
    { ease: 'ease-in-out', drawSVG: '50% 50%', duration: 1 },
    '<2.5'
  );
});
</script>

<template>
  <div
    id="main"
    class="flex flex-col items-center min-h-[calc(100vh-4rem)] relative z-10 bg-white"
  >
    <div class="text-8xl">1986</div>
    <div class="grid grid-cols-[1fr,max-content,1fr] justify-items-center">
      <svg id="chart" width="20" height="225" class="col-start-2">
        <line id="line1" x1="10" y1="0" x2="10" y2="224"></line>
        <line id="line2" x1="0" y1="224" x2="20" y2="224"></line>
      </svg>
      <div class="birth pt-12 col-start-3 opacity-0 left-1/2 pl-4 absolute">
        Born July 6th in Syracuse, NY.
      </div>
    </div>
    <div class="text-8xl">2014</div>
    <div class="grid grid-cols-[1fr,max-content,1fr] justify-items-center">
      <svg id="chart" width="20" height="225" class="col-start-2">
        <line id="line3" x1="10" y1="0" x2="10" y2="224"></line>
        <line id="line4" x1="0" y1="224" x2="20" y2="224"></line>
      </svg>
      <div class="something pt-12 col-start-3 opacity-0 left-1/2 pl-4 absolute">
        Attended UNCA for physics.
      </div>
    </div>
    <div class="text-8xl">2023</div>
  </div>
</template>

<style scoped>
/* svg {
  background-color: rgba(0, 0, 0, 0.059);
} */
#chart line {
  stroke: #555555;
  stroke-width: 1;
}
</style>
