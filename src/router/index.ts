import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../components/Welcome.vue';
import JournalPage from '../pages/JournalPage.vue';

const routes = [
  {
    path: '/',
    component: Welcome,
  },
  {
    path: '/blog/:articleTitle',
    component: JournalPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
