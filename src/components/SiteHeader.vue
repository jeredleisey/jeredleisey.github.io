<script setup lang="ts">
import { useRoute } from 'vue-router';
const headerLinks = [
  {
    url: '/projects',
    text: 'Projects',
  },
  {
    url: '/blog/Sample',
    text: 'Blog',
  },
  {
    url: '/bio',
    text: 'Bio',
  },
  {
    url: '/contact',
    text: 'Contact',
  },
];

const route = useRoute();
</script>

<template>
  <div
    class="w-full fixed z-20 py-3"
    :class="
      route.path === '/contact' ? 'bg-zinc-500 md:bg-transparent' : 'bg-white'
    "
  >
    <div
      class="site-header-content flex justify-between items-center px-8 lg:max-w-4xl xl:max-w-5xl max-w-6xl mx-auto"
    >
      <div class="w-8 h-10">
        <router-link to="/">
          <svg
            :class="route.path === '/contact' ? 'fill-white' : 'fill-black'"
            class="fill-white hover:fill-my-gold transition-all duration-300"
            height="2.5em"
            width="2em"
            viewBox="0 0 612 792"
          >
            <g>
              <path
                d="M272.81,384.72c9.4-9.57,18.99-19.38,28.65-29.13c1.71-1.72,3.76-3.09,5.53-4.75c7.57-7.05,5.43-16.76,6.7-25.47
				                  c2.78-19.09,4.24-38.43,8.05-57.29c4.24-21.01,10.44-41.62,15.91-62.38c3.44-13.03,6.49-26.2,10.84-38.93
                          c4.49-13.12,10.38-25.76,15.59-38.64c3.47-8.58,6.79-17.21,10.24-25.79c2.87-7.13,5.66-14.31,8.89-21.28
                          c1.14-2.45,3.62-4.25,5.24-6.52c5.29-7.39,9.87-15.4,15.85-22.17c6.79-7.69,14.02-15.63,23.83-19.35
                          c10.29-3.91,20.63-8.22,32.49-4.56c6.34,1.96,13.74,0.3,20.27,1.89c6.67,1.63,13.8,4.05,19.02,8.26
                          c7.72,6.24,14.64,13.84,20.45,21.91c2.8,3.89,2.18,10.2,3.32,15.37c1.23,5.58,2.63,11.14,4.08,16.67
                          c2.64,10.01-1.26,19.12-3.73,28.43c-0.87,3.29-1.74,6.6-2.95,9.77c-3.61,9.47-7.09,19.01-11.23,28.24
                          c-2.21,4.92-5.69,9.26-8.59,13.86c-4,6.37-7.96,12.77-12,19.12c-6.66,10.46-13.66,20.63-22.19,29.71
                          c-10.74,11.42-21.27,23.04-31.7,34.75c-5.32,5.98-10.27,12.3-15.26,18.57c-5.86,7.34-11.36,14.97-17.43,22.13
                          c-9.57,11.29-19.22,22.55-29.37,33.31c-4.18,4.43-10.07,7.2-14.62,11.34c-5.87,5.34-10.54,12.18-16.88,16.77
                          c-7.27,5.27-5.2,12.66-5.35,18.8c-0.46,18.84,0.35,37.73,1.1,56.59c0.68,17.05,1.82,34.09,2.94,51.12
                          c0.74,11.34,1.22,22.75,2.93,33.96c1.07,7,4.21,13.69,6.47,20.51c0.09,0.27,0.61,0.4,0.93,0.59c3.07,1.74,7.65,2.35,6.35,7.61
                          c-1.86,7.55-5.36,13.94-13.61,15.91c-8.61,2.06-14.89-1.02-20.44-8.17c-6.01-7.74-5.41-16.86-7.14-25.4
                          c-2.15-10.65-3.15-21.59-3.85-32.46c-0.87-13.36-0.92-26.78-1.35-40.17c-0.37-11.56-0.89-23.11-1.13-34.67
                          c-0.19-8.92-0.04-17.84-0.04-28.6c-9.86,7.87-18.82,14.57-27.22,21.9c-5.75,5.02-7.17,12.26-7.43,19.66
                          c-0.54,15.49-0.75,31-1.68,46.46c-0.57,9.53-2.41,18.97-3.34,28.49c-0.78,7.96-0.53,16.06-1.71,23.94
                          c-1.48,9.9-4.07,19.62-5.96,29.46c-2.19,11.42-3.81,22.96-6.28,34.32c-2.86,13.18-6.45,26.2-9.57,39.33
                          c-4.5,18.89-11.69,36.77-24.25,51.53c-7.43,8.74-16.59,16.61-26.37,22.59c-13.2,8.06-27.4,14.8-41.8,20.47
                          c-11.68,4.59-23.84,3.92-36.25-0.63c-17.81-6.53-25.83-19.99-29.62-36.98c-2.23-9.98-4.31-20.23-4.41-30.38
                          c-0.07-7.67,2.47-15.58,4.98-23c3.34-9.87,7.4-19.54,11.86-28.96c5.91-12.49,12.17-24.85,18.92-36.91
                          c4.87-8.7,10.78-16.81,16.19-25.21c5.15-7.99,9.75-16.41,15.51-23.93c7.37-9.63,15.6-18.59,23.58-27.74
                          c4.55-5.22,9.45-10.75,12.48-16.42c2.25-4.21,6.26-5.98,8.31-10.03c2.19-4.34,7.08-7.23,10.21-11.21
                          c4.23-5.37,7.61-11.42,11.87-16.75c6.43-8.04,13.32-15.7,20.02-23.53c2.4-2.8,4.92-5.51,7.15-8.45
                          c4.92-6.48,10.65-12.4,13.2-20.49c0.67-2.14,2.99-3.7,4.04-5.78C264.46,381.22,267.63,381.28,272.81,384.72z M341.15,311.12
                          c0.67,0.4,1.34,0.8,2.01,1.21c3.13-1.87,6.85-3.17,9.28-5.71c12.45-13.08,25.25-25.86,34.66-41.55c2.16-3.6,3.98-9.06,10.39-6.97
                          c0.16,0.05,0.61-1,1.01-1.46c7.37-8.53,14.74-17.07,22.15-25.57c11.12-12.78,22.95-25.02,33.21-38.46
                          c9.22-12.07,17.55-25,24.76-38.37c6.96-12.9,13.71-25.95,15.95-41.16c0.9-6.09,0.09-12.13,1.3-18.16
                          c0.67-3.34-1.1-7.25-2.09-10.82c-0.91-3.27-2.26-6.41-3.47-9.77c-0.73,0.05-2.08,0.14-3.42,0.23c0.24-1.5,0.48-3,0.55-3.39
                          c-5.72-2.58-11.48-5.18-17.35-7.83c0.24,0.83,0.44,1.57,0.55,1.93c-5.87-0.37-11.86-0.92-17.86-1.07
                          c-5.02-0.13-9.96-0.09-13.94,4.24c-2.16,2.36-6.3,1.96-7.53,6.57c-0.61,2.31-6.56,2.87-7.89,5.39
                          c-3.08,5.85-6.66,10.99-11.59,15.35c-1.03,0.92-1.04,3.01-1.49,4.56c-0.28,0.96-0.27,2.08-0.77,2.89
                          c-4.3,6.87-9.2,13.43-12.91,20.6c-4.21,8.14-7.46,16.78-10.96,25.27c-4.35,10.55-8.69,21.1-12.73,31.77
                          c-3.37,8.9-6.38,17.93-9.42,26.95c-2.75,8.18-5.82,16.29-7.85,24.65c-3.7,15.25-7.04,30.6-9.94,46.02
                          C343.71,289.26,342.64,300.23,341.15,311.12z M243.88,467.52c-4.51,3.99-9.12,7.17-12.59,11.3
                          c-9.67,11.51-18.91,23.38-28.23,35.17c-3.73,4.72-6.65,10.27-10.99,14.31c-12.05,11.22-20.95,24.92-30.36,38.13
                          c-8.14,11.43-14.91,23.87-21.96,36.05c-4.44,7.67-9.16,15.37-12.18,23.63c-3.21,8.77-6.22,17.81-9.33,26.51
                          c-4.72,13.18-3.45,25.14,0,37.46c2.45,8.72,9.79,14.65,17.01,13.76c6.16-0.76,12.49-2.66,18.02-5.5
                          c12.12-6.23,24.53-11.79,35.37-20.66c8.09-6.61,14.01-14.37,18.85-23.11c10.04-18.14,13.26-38.56,17.99-58.39
                          c3.11-13,4.92-26.32,7.34-39.49c2.29-12.46,4.84-24.88,6.84-37.39c1.31-8.19,2-16.5,2.66-24.78
                          C243.03,485.58,243.37,476.61,243.88,467.52z"
              />
              <path
                d="M249.6,277.42c-2.16-9.23,6.56-17.64,16.93-17.96c9.79-0.3,19.12,9.07,19.33,19.64c0.11,5.68-9.65,13.85-17.2,14.4
				                  C257.71,294.29,250.22,287.98,249.6,277.42z"
              />
            </g>
          </svg>
        </router-link>
      </div>
      <div
        class="nav-primary wrap space-x-4 font-acumin-pro-condensed font-light text-base uppercase"
      >
        <router-link
          v-for="headerLink in headerLinks"
          :to="headerLink.url"
          :class="route.path === '/contact' ? 'text-white' : 'text-black'"
          class="text-white hover:text-my-gold transition-all duration-300"
        >
          <span itemprop="name" class="text-lg">{{ headerLink.text }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
