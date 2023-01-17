import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../components/Welcome.vue';
import JournalPage from '../pages/JournalPage.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Welcome,
  },
  {
    path: '/blog/:articleTitle',
    component: JournalPage,
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
