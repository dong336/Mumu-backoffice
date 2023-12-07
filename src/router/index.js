import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';

const indexRoutes = [
	{
		path: '/',
		name: 'App',
		component: App,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: [...indexRoutes],
});

export default router;
