import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage';

const indexRoutes = [
	{
		path: '/login',
		name: 'LoginPage',
		component: LoginPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: [...indexRoutes],
});

export default router;
