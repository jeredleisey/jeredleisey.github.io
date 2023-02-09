import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../components/Welcome.vue';
import BioPage from '@/pages/BioPage.vue';
import JournalPage from '../pages/JournalPage.vue';
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
    component: JournalPage,
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
  routes,
});

export default router;
