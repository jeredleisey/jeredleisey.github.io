import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../components/Welcome.vue';
import BioPage from '@/pages/BioPage.vue';
import BlogPage from '../pages/BlogPage.vue';
import NotFound from '@/components/NotFound.vue';
import ContactPage from '../pages/ContactPage.vue';

const routes = [
  {
    path: '/',
    component: Welcome,
  },
  {
    path: '/bio',
    component: BioPage,
  },
  {
    path: '/blog/:articleTitle',
    component: BlogPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
  routes,
});

export default router;
