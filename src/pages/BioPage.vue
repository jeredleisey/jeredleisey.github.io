<script setup lang="ts">
import { gsap, DrawSVGPlugin, ScrollTrigger } from 'gsap-trial/all';
import { onMounted } from 'vue';

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#name',
      start: 'top top',
      end: '500px',
      markers: false,
      scrub: true,
    },
  });
  tl.from('#line1', { ease: 'ease-in-out', drawSVG: 0, duration: 3 });
  tl.to(
    '.birth',
    { ease: 'ease-in-out', opacity: 1, paddingLeft: '8px', duration: 6 },
    '<0.5'
  );
  tl.from(
    '#line2',
    { ease: 'ease-in-out', drawSVG: '50% 50%', duration: 1 },
    '<2.5'
  );
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
    class="bio-body min-h-screen z-10 relative bg-[#fffef2] flex flex-col items-center"
  >
    <div
      class="top-text min-h-[50vh] w-screen flex justify-center items-center bg-[#fdf8ec]"
    >
      <div
        class="font-acier-bat-gris text-9xl text-[#d6d3cb] flex flex-col items-center"
      >
        <div id="name"><span class="text-[#0c0e12]">Jered</span> Davis</div>
        <div>Leisey</div>
      </div>
    </div>
    <span class="font-hwt-aetna-streamer-outline text text-8xl"> *1986 </span>
    <div class="grid grid-cols-[1fr,max-content,1fr] justify-items-center">
      <svg id="chart" width="20" height="225" class="col-start-2">
        <line id="line1" x1="10" y1="0" x2="10" y2="224"></line>
        <line id="line2" x1="0" y1="224" x2="20" y2="224"></line>
      </svg>
      <div class="birth pt-12 col-start-3 opacity-0 left-1/2 pl-4 absolute">
        *Born July 6th in Syracuse, NY.
      </div>
    </div>
    <span class="font-hwt-aetna-streamer-outline text text-8xl">
      2009-2014
    </span>
    <div class="grid grid-cols-[1fr,max-content,1fr] justify-items-center">
      <svg id="chart" width="20" height="225" class="col-start-2">
        <line id="line3" x1="10" y1="0" x2="10" y2="224"></line>
        <line id="line4" x1="0" y1="224" x2="20" y2="224"></line>
      </svg>
      <div class="something pt-12 col-start-3 opacity-0 left-1/2 pl-4 absolute">
        Attended UNCA for physics.
      </div>
    </div>
    <span class="font-hwt-aetna-streamer-outline text text-8xl"> 2016 </span>
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
