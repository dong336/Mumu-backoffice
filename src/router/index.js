import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage';

const indexRoutes = [
	{
		path: '/',
		name: 'MainPage',
		component: MainPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: [...indexRoutes],
});

export default router;
