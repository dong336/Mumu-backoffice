import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import MembersPage from '@/pages/MembersPage.vue';

const indexRoutes = [
	{
		path: '/',
		name: 'MainPage',
		component: MainPage,
	},
	{
		path: '/members',
		name: 'MembersPage',
		component: MembersPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: [...indexRoutes],
});

export default router;
